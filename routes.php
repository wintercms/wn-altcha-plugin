<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Winter\Altcha\Classes\Altcha;
use Winter\Storm\Support\Facades\Config;

Route::group([
    'prefix' => Config::get('winter.altcha::altcha.apiPrefix', 'winter/altcha/api'),
    'middleware' => 'web',
], function () {
    Route::get('/challenge', function () {
        return response()->json(Altcha::instance()->getChallenge());
    });

    Route::options('/{any?}', function () {
       return response('', 204);
    });

    Route::any('/{any?}', function () {
        return response()->json([
            'api' => [
                'name' => 'Winter.Altcha',
            ],
            'error' => [
                'message' => 'Invalid API request.',
            ],
        ], 404);
    });
});
