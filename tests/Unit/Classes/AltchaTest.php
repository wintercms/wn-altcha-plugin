<?php

namespace Winter\Altcha\Tests\Unit\Classes;

use Cms\Classes\ComponentBase;
use Winter\Altcha\Classes\Altcha;
use Winter\Altcha\Components\Altcha as AltchaComponent;
use Winter\Altcha\Exceptions\InvalidPayloadException;
use Winter\Altcha\Exceptions\NoCaptchaException;
use Winter\Altcha\Exceptions\NotVerifiedException;
use Winter\Altcha\Tests\AltchaTestCase;

class AltchaTest extends AltchaTestCase
{
    public function testChallengeIsSignedAndExpiresInTwoHours(): void
    {
        $before = time();
        $challenge = Altcha::instance()->getChallenge();

        $this->assertSame(
            hash_hmac('sha256', $challenge->parameters->toCanonicalJson(), self::SECRET),
            $challenge->signature
        );
        $this->assertSame('PBKDF2/SHA-256', $challenge->parameters->algorithm);
        $this->assertSame(10000, $challenge->parameters->cost);
        $this->assertGreaterThanOrEqual($before + 7200, $challenge->parameters->expiresAt);
        $this->assertLessThanOrEqual(time() + 7200, $challenge->parameters->expiresAt);
    }

    public function testValidSolutionIsAccepted(): void
    {
        Altcha::instance()->verify($this->encode($this->payload(time() + 60)));
    }

    /**
     * @dataProvider invalidPayloads
     */
    public function testInvalidPayloadsAreRejected(string $payload, string $exception): void
    {
        $this->expectException($exception);
        Altcha::instance()->verify($payload);
    }

    public static function invalidPayloads(): array
    {
        return [
            'invalid base64' => ['!', NoCaptchaException::class],
            'invalid JSON' => [base64_encode('{'), NoCaptchaException::class],
            'empty payload' => [base64_encode('{}'), NoCaptchaException::class],
            'scalar JSON' => [base64_encode('"unexpected"'), InvalidPayloadException::class],
            'missing challenge' => [base64_encode('{"solution":{}}'), NoCaptchaException::class],
            'malformed challenge' => [base64_encode('{"challenge":{},"solution":{}}'), InvalidPayloadException::class],
        ];
    }

    public function testExpiredChallengeIsRejected(): void
    {
        $this->expectException(NotVerifiedException::class);
        Altcha::instance()->verify($this->encode($this->payload(time() - 60)));
    }

    public function testChallengeSignedWithAnotherSecretIsRejected(): void
    {
        $this->expectException(NotVerifiedException::class);
        Altcha::instance()->verify($this->encode($this->payload(time() + 60, 'different-secret')));
    }

    public function testAlteredSolutionIsRejected(): void
    {
        $payload = $this->payload(time() + 60);
        $payload['solution']['derivedKey'] = str_repeat('0', 64);

        $this->expectException(NotVerifiedException::class);
        Altcha::instance()->verify($this->encode($payload));
    }

    public function testTargetsCanBeReplacedAndExtendedWithoutDuplicates(): void
    {
        $altcha = Altcha::instance();
        $altcha->setTargets([ComponentBase::class => ['onProtected']]);
        $altcha->addTargets([
            ComponentBase::class => ['onProtected', 'onOther'],
            AltchaComponent::class => ['onTest'],
        ]);

        $targets = $altcha->getTargets();
        $this->assertCount(2, $targets);
        $this->assertSame(['onProtected', 'onOther'], array_values($targets[ComponentBase::class]));
        $this->assertSame(['onTest'], $targets[AltchaComponent::class]);
    }

    public function testServerSignatureVerificationRequiresAnAgreedSigningKey(): void
    {
        if (getenv('ALTCHA_TEST_KNOWN_FAILURES') !== '1') {
            $this->markTestSkipped('Pending a decision on verificationData support and its signing key.');
        }

        $verificationData = 'verified=true&expire=' . (time() + 60);
        $payload = [
            'algorithm' => 'SHA-256',
            'verificationData' => $verificationData,
            'signature' => hash_hmac('sha256', hash('sha256', $verificationData, true), self::SECRET),
            'verified' => true,
        ];

        $this->assertNull(Altcha::instance()->verify($this->encode($payload)));
    }
}
