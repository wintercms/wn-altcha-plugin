<?php

return [
    'plugin' => [
        'name' => 'Altcha',
        'description' => 'Provides support for the Altcha spam prevention service',
    ],
    'components' => [
        'altcha' => [
            'name' => 'Altcha',
            'description' => 'Adds an Altcha CAPTCHA challenge',
            'sections' => [
                'plugins' => 'Plugins',
            ],
            'properties' => [
                'fieldName' => [
                    'title' => 'Field name',
                    'description' => 'Defines the field name of the Altcha challenge sent through POST',
                ],
                'accountComponent' => [
                    'title' => 'Account component alias',
                    'description' => 'If using this with the User plugin, please add the Account component alias here',
                ],
                'easyformComponent' => [
                    'title' => 'EasyForm component alias',
                    'description' => 'If using this with the EasyForm plugin by Luke Towers, please add the EasyForm component alias here',
                ],
            ],
        ],
    ],
    'exceptions' => [
        'noCaptcha' => 'The CAPTCHA must be completed to continue',
        'invalidPayload' => 'The CAPTCHA payload is invalid',
        'notVerified' => 'The CAPTCHA verification failed',
    ],
];
