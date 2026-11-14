<?php

return [

    /*
     |--------------------------------------------------------------------------
     | API Prefix
     |--------------------------------------------------------------------------
     |
     | The API prefix for Altcha endpoints. You can override the value by
     | setting ALTCHA_API_PREFIX in your environment.
     |
     */

    'apiPrefix' => env('ALTCHA_API_PREFIX', 'winter/altcha/api'),

    /*
     |--------------------------------------------------------------------------
     | Secret Key
     |--------------------------------------------------------------------------
     |
     | The secret key for Altcha. You can override the value by setting
     | ALTCHA_SECRET_KEY in your environment.
     |
     | If no secret key is provided, Altcha will use the application key
     | (APP_KEY) from your environment.
     |
     */

    'secretKey' => env('ALTCHA_SECRET_KEY', env('APP_KEY')),
];
