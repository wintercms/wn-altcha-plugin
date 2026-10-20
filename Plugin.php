<?php

namespace Winter\Altcha;

use Cms\Classes\ComponentBase;
use Cms\Classes\Controller;
use Override;
use System\Classes\PluginBase;
use System\Classes\PluginManager;
use Winter\Altcha\Classes\Altcha;
use Winter\Altcha\Components\Altcha as AltchaComponent;
use Winter\Altcha\Exceptions\NoCaptchaException;
use Winter\Storm\Exception\ApplicationException;
use Winter\Storm\Support\Facades\Event;

/**
 * Altcha Plugin Information File
 */
class Plugin extends PluginBase
{
    /**
     * Returns information about this plugin.
     */
    public function pluginDetails(): array
    {
        return [
            'name' => 'winter.altcha::lang.plugin.name',
            'description' => 'winter.altcha::lang.plugin.description',
            'author' => 'Ben Thomson',
            'icon' => 'icon-search'
        ];
    }

    #[Override]
    public function registerComponents()
    {
        return [
            'Winter\Altcha\Components\Altcha' => 'altcha',
        ];
    }

    #[Override]
    public function boot()
    {
        Event::listen('cms.component.beforeRunAjaxHandler', function (ComponentBase $component, string $handler) {
            $targets = [];
            $signature = $this->getAltchaFieldValue();

            if (PluginManager::instance()->hasPlugin('Winter.User')) {
                $targets['Winter\User\Components\Account'] = ['onRegister'];
            }

            foreach ($targets as $class => $handlers) {
                if ($component instanceof $class && in_array($handler, $handlers, true)) {
                    if (is_null($signature)) {
                        throw new NoCaptchaException(e(trans('winter.altcha::lang.exceptions.noCaptcha')));
                    }

                    Altcha::instance()->verify($signature);
                }

                // Allow the component to handle the Altcha validation itself
                return;
            }
        });
    }

    protected function getAltchaField(): ?string
    {
        $controller = Controller::getController();

        if (!$controller) {
            return null;
        }

        foreach ([$controller->getLayout(), $controller->getPage()] as $template) {
            foreach ($template?->components ?? [] as $component) {
                if ($component instanceof AltchaComponent) {
                    return $component->fieldName();
                }
            }
        }

        return null;
    }

    protected function getAltchaFieldValue(): ?string
    {
        $field = $this->getAltchaField();

        if (is_null($field)) {
            return null;
        }

        $signature = request()->input($field);

        return $signature;
    }
}
