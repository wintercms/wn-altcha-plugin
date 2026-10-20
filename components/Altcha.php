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
    protected ?ComponentBase $easyFormInstance = null;

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
                'group'       => 'winter.altcha::lang.components.altcha.sections.plugins',
                'title'       => 'winter.altcha::lang.components.altcha.properties.accountComponent.title',
                'description' => 'winter.altcha::lang.components.altcha.properties.accountComponent.description',
                'type'        => 'string',
                'default'     => 'account',
            ],
            'easyformComponent' => [
                'group'       => 'winter.altcha::lang.components.altcha.sections.plugins',
                'title'       => 'winter.altcha::lang.components.altcha.properties.easyformComponent.title',
                'description' => 'winter.altcha::lang.components.altcha.properties.easyformComponent.description',
                'type'        => 'string',
                'default'     => 'easyForm',
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

    /**
     * Gets the alias of the user component to use for the Altcha widget.
     */
    public function easyFormAlias(): ?string
    {
        if (empty($this->property('easyformComponent'))) {
            return null;
        }

        return e($this->property('easyformComponent'));
    }

    public function easyFormInstance(): ?ComponentBase
    {
        if ($this->easyFormInstance === null && $alias = $this->easyFormAlias()) {
            $this->easyFormInstance = $this->controller->findComponentByName($alias);
        }

        return $this->easyFormInstance;
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
