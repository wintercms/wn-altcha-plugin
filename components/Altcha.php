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

    /**
     * The language of the Altcha challenge.
     */
    public ?string $language = null;

    /**
     * The theme of the Altcha challenge.
     */
    public ?string $theme = null;
    
    /**
     * The type of the Altcha challenge.
     */
    public ?string $type = null;

    /**
     * The display mode of the Altcha challenge.
     */
    public ?string $displayMode = null;

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
            'language' => [
                'title'       => 'winter.altcha::lang.components.altcha.properties.language.title',
                'description' => 'winter.altcha::lang.components.altcha.properties.language.description',
                'type'        => 'dropdown',
                'options'     => 'winter.altcha::lang.options.captcha_languages',
                'default'     => 'detect',
            ],
            'theme' => [
                'title'       => 'winter.altcha::lang.components.altcha.properties.theme.title',
                'description' => 'winter.altcha::lang.components.altcha.properties.theme.description',
                'type'        => 'dropdown',
                'options'     => 'winter.altcha::lang.options.captcha_themes',
                'default'     => 'default',
            ],
            'type' => [
                'title'       => 'winter.altcha::lang.components.altcha.properties.type.title',
                'description' => 'winter.altcha::lang.components.altcha.properties.type.description',
                'type'        => 'dropdown',
                'options'     => 'winter.altcha::lang.options.captcha_types',
                'default'     => 'checkbox',
            ],
            'displayMode' => [
                'title'       => 'winter.altcha::lang.components.altcha.properties.displayMode.title',
                'description' => 'winter.altcha::lang.components.altcha.properties.displayMode.description',
                'type'        => 'dropdown',
                'options'     => 'winter.altcha::lang.options.captcha_display_modes',
                'default'     => 'standard',
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
     * Executed when this component is bound to a page or layout.
     */
    public function onRun()
    {
        $this->language = $this->property('language');
        $this->theme = $this->property('theme');
        $this->type = $this->property('type');
        $this->displayMode = $this->property('displayMode');
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
