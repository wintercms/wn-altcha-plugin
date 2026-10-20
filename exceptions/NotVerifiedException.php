<?php

namespace Winter\Altcha\Exceptions;

use Winter\Storm\Exception\ApplicationException;

/**
 * NotVerifiedException is thrown when the payload provided for Altcha verification is valid, but the payload was
 * unable to be verified as legitimate.
 */
class NotVerifiedException extends ApplicationException
{
}
