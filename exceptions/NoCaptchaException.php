<?php

namespace Winter\Altcha\Exceptions;

use Winter\Storm\Exception\ApplicationException;

/**
 * NotVerifiedException is thrown when the CAPTCHA is verified server-side but no CAPTCHA challenge has been
 * completed by the user.
 */
class NoCaptchaException extends ApplicationException
{
}
