<?php

namespace Winter\Altcha\Classes;

use AltchaOrg\Altcha\Altcha as BaseAltcha;
use AltchaOrg\Altcha\Algorithm\Pbkdf2;
use AltchaOrg\Altcha\Challenge;
use AltchaOrg\Altcha\CreateChallengeOptions;
use AltchaOrg\Altcha\ServerSignature;
use AltchaOrg\Altcha\VerifySolutionOptions;
use System\Classes\PluginManager;
use Winter\Altcha\Exceptions\InvalidPayloadException;
use Winter\Altcha\Exceptions\NoCaptchaException;
use Winter\Altcha\Exceptions\NotVerifiedException;
use Winter\Storm\Support\Facades\Config;
use Winter\Storm\Support\Traits\Singleton;


final class Altcha
{
    use Singleton;

    protected ?Pbkdf2 $pbkdf2 = null;

    protected ?BaseAltcha $altcha = null;

    protected array $targets = [];

    /**
     * Initialize the singleton free from constructor parameters.
     */
    protected function init()
    {
        $this->pbkdf2 = new Pbkdf2();
        $this->altcha = new BaseAltcha($this->getSecret());

        $targets = [];
        if (PluginManager::instance()->hasPlugin('Winter.User')) {
            $targets['Winter\User\Components\Account'] = ['onRegister'];
        }
        if (PluginManager::instance()->hasPlugin('LukeTowers.EasyForms')) {
            $targets['LukeTowers\EasyForms\Components\EasyForm'] = ['onSave'];
        }
        $this->setTargets($targets);
    }

    public function getTargets()
    {
        return $this->targets;
    }

    public function setTargets(array $targets)
    {
        $this->targets = $targets;
    }

    public function addTargets(array $targets)
    {
        array_push($this->targets, ...$targets);
    }

    public function getChallenge(): Challenge
    {
        return $this->altcha->createChallenge(new CreateChallengeOptions(
            algorithm: $this->pbkdf2,
            cost: 10000,
            expiresAt: now()->addHours(2),
        ));
    }

    public function verify(string $payload): void
    {
        $decoded = base64_decode($payload, true);
        $payload = $decoded === false ? null : json_decode($decoded, true);

        if (empty($payload)) {
            throw new NoCaptchaException(e(trans('winter.altcha::lang.exceptions.noCaptcha')));
        }
        if (!is_array($payload)) {
            throw new InvalidPayloadException(e(trans('winter.altcha::lang.exceptions.invalidPayload')));
        }

        $verified = false;

        try {
            if (isset($payload['verificationData'])) {
                $result = ServerSignature::verifyServerSignature($payload, $hmacSecret);
                $verified = $result->verified;
            } elseif (isset($payload['challenge'], $payload['solution'])) {
                $result = $this->altcha->verifySolution(new VerifySolutionOptions(
                    payload: $payload,
                    algorithm: $this->pbkdf2,
                ));
                $verified = $result->verified;
            } else {
                throw new NoCaptchaException(e(trans('winter.altcha::lang.exceptions.noCaptcha')));
            }
        } catch (\InvalidArgumentException $e) {
            throw new InvalidPayloadException(e(trans('winter.altcha::lang.exceptions.invalidPayload')), 0, $e);
        }

        if (!$verified) {
            throw new NotVerifiedException(e(trans('winter.altcha::lang.exceptions.notVerified')));
        }
    }

    protected function getSecret(): string
    {
        return Config::get('winter.altcha::altcha.secretKey', Config::get('app.key'));
    }
}
