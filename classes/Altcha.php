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
 * The Altcha class provides a singleton instance for managing Altcha challenges
 * and verification.
 */
final class Altcha
{
    use Singleton;

    /**
     * The PBKDF2 algorithm instance.
     */
    protected ?Pbkdf2 $pbkdf2 = null;

    /**
     * The vendor Altcha instance.
     */
    protected ?BaseAltcha $altcha = null;

    /**
     * List of plugin classes, and their respective methods, that will
     * automatically be hooked into for Altcha verification. The key is the
     * plugin class, and the value is an array of methods to hook into.
     *
     * @var array<string, string[]>
     */
    protected array $targets = [];

    /**
     * Initialize the singleton.
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
     * Gets the current targeted plugin classes and methods for Altcha
     * verification.
     *
     * @return array<string, string[]>
     */
    public function getTargets()
    {
        return $this->targets;
    }

    /**
     * Sets the targeted plugin classes and methods for Altcha verification.
     *
     * @param array<string, string[]> $targets The targets to set. You must provide a key-value
     * array where the key is the plugin class and the value is an
     * array of methods to hook into.
     */
    public function setTargets(array $targets)
    {
        $this->targets = $targets;
    }

    /**
     * Appends additional targeted plugin classes and methods for Altcha
     * verification.
     *
     * @param array<string, string[]> $targets The targets to add to the existing targets.
     */
    public function addTargets(array $targets)
    {
        foreach ($targets as $class => $methods) {
            if (!isset($this->targets[$class])) {
                $this->targets[$class] = [];
            }
            $this->targets[$class] = array_unique(
                array_merge($this->targets[$class], $methods)
            );
        }
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
     * Verifies an Altcha challenge against a provided payload.
     *
     * This method will check the provided payload to ensure that it is a valid
     * Altcha challenge, and then verify the solution against the challenge.
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
