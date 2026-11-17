<?php

namespace Winter\Altcha\Tests;

use AltchaOrg\Altcha\Algorithm\Pbkdf2;
use AltchaOrg\Altcha\Altcha as LibraryAltcha;
use AltchaOrg\Altcha\CreateChallengeOptions;
use AltchaOrg\Altcha\Payload;
use AltchaOrg\Altcha\SolveChallengeOptions;
use System\Tests\Bootstrap\TestCase;
use Winter\Altcha\Classes\Altcha;
use Winter\Storm\Support\Facades\Config;

abstract class AltchaTestCase extends TestCase
{
    protected const SECRET = 'altcha-test-secret';

    protected function setUp(): void
    {
        parent::setUp();

        Config::package('winter.altcha', dirname(__DIR__) . '/config');
        Config::set('winter.altcha::secretKey', self::SECRET);
        Altcha::forgetInstance();
    }

    protected function tearDown(): void
    {
        Altcha::forgetInstance();
        parent::tearDown();
    }

    protected function payload(int $expiresAt, string $secret = self::SECRET): array
    {
        $algorithm = new Pbkdf2();
        $library = new LibraryAltcha($secret);
        $challenge = $library->createChallenge(new CreateChallengeOptions(
            algorithm: $algorithm,
            cost: 1,
            counter: 1,
            expiresAt: $expiresAt,
        ));
        $solution = $library->solveChallenge(new SolveChallengeOptions(
            challenge: $challenge,
            algorithm: $algorithm,
            start: 1,
        ));
        $this->assertNotNull($solution);

        return (new Payload($challenge, $solution))->toArray();
    }

    protected function encode(array $payload): string
    {
        return base64_encode(json_encode($payload, JSON_THROW_ON_ERROR));
    }
}
