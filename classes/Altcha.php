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

/**
 * The Altcha class provides a singleton instance for managing Altcha challenges and verification.
 */
final class Altcha
{
    use Singleton;

    /**
     * The PBKDF2 algorithm instance.
     */
    protected ?Pbkdf2 $pbkdf2 = null;

    /**
     * The Altcha instance.
     */
    protected ?BaseAltcha $altcha = null;

    /**
     * The targets for Altcha.
     */
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

    /**
     * Gets the current targets for Altcha.
     *
     * @return array
     */
    public function getTargets()
    {
        return $this->targets;
    }

    /**
     * Sets the targets for Altcha.
     *
     * @param array $targets The targets to set.
     */
    public function setTargets(array $targets)
    {
        $this->targets = $targets;
    }

    /**
     * Adds a single target to the existing targets.
     *
     * @param array $targets The targets to add to the existing targets.
     */
    public function addTargets(array $targets)
    {
        array_push($this->targets, ...$targets);
    }

    /**
     * Gets a new Altcha challenge.
     */
    public function getChallenge(): Challenge
    {
        return $this->altcha->createChallenge(
            new CreateChallengeOptions(
                algorithm: $this->pbkdf2,
                cost: 10000,
                expiresAt: now()->addHours(2),
            )
        );
    }

    /**
     * Verifies the Altcha solution.
     *
     * @param string $payload
     * @throws NoCaptchaException
     * @throws InvalidPayloadException
     * @throws NotVerifiedException
     */
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

    /**
     * Gets the secret key for Altcha.
     *
     * @return string
     */
    protected function getSecret(): string
    {
        return Config::get('winter.altcha::secretKey', Config::get('app.key'));
    }
}
