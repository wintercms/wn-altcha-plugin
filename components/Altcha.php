<?php

namespace Winter\Altcha\Components;

use Override;
use Cms\Classes\ComponentBase;
use October\Rain\Support\Facades\Url;
use Winter\Storm\Support\Facades\Config;

/**
 * Altcha component
 *
 * Implements an Altcha widget to prevent spam bots from submitting forms.
 */
class Altcha extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'winter.altcha::lang.components.altcha.name',
            'description' => 'winter.altcha::lang.components.altcha.description'
        ];
    }

    #[Override]
    public function defineProperties()
    {
        return [
            'fieldName' => [
                'title'       => 'winter.altcha::lang.components.altcha.properties.fieldName.title',
                'description' => 'winter.altcha::lang.components.altcha.properties.fieldName.description',
                'type'        => 'string',
                'default'     => 'altcha',
            ],
            'accountComponent' => [
                'title'       => 'winter.altcha::lang.components.altcha.properties.accountComponent.title',
                'description' => 'winter.altcha::lang.components.altcha.properties.accountComponent.description',
                'type'        => 'string',
                'default'     => 'account',
            ],
        ];
    }

    /**
     * Gets the alias of the user component to use for the Altcha widget.
     */
    public function accountComponent(): ?string
    {
        if (empty($this->property('accountComponent'))) {
            return null;
        }

        return e($this->property('accountComponent'));
    }

    public function fieldName(): string
    {
        return implode('_', [
            $this->alias,
            e($this->property('fieldName')),
        ]);
    }

    public function challengeUrl(): string
    {
        return Url::to(
            rtrim(Config::get('winter.altcha::altcha.apiPrefix', 'winter/altcha/api'), '/')
            . '/challenge'
        );
    }
}
