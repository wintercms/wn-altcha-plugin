<?php

namespace Winter\Altcha\Tests\Feature;

use Cms\Classes\ComponentBase;
use Cms\Classes\Controller;
use Illuminate\Http\Request;
use ReflectionProperty;
use Winter\Altcha\Classes\Altcha;
use Winter\Altcha\Components\Altcha as AltchaComponent;
use Winter\Altcha\Exceptions\NoCaptchaException;
use Winter\Altcha\Exceptions\NotVerifiedException;
use Winter\Altcha\Plugin;
use Winter\Altcha\Tests\AltchaTestCase;

class TargetComponent extends ComponentBase
{
    public bool $handled = false;

    public function componentDetails()
    {
        return [];
    }

    public function onProtected()
    {
        $this->handled = true;
    }

    public function onOther()
    {
        $this->handled = true;
    }
}

class AjaxTest extends AltchaTestCase
{
    protected function tearDown(): void
    {
        $instance = new ReflectionProperty(Controller::class, 'instance');
        $instance->setAccessible(true);
        $instance->setValue(null, null);
        parent::tearDown();
    }

    private function prepareHandler(string $location, ?string $payload): TargetComponent
    {
        $altchaComponent = new AltchaComponent(null, ['fieldName' => 'captcha']);
        $altchaComponent->alias = 'form';
        $template = (object) ['components' => [$altchaComponent]];

        $controller = $this->getMockBuilder(Controller::class)
            ->disableOriginalConstructor()
            ->onlyMethods(['getLayout', 'getPage'])
            ->getMock();
        $controller->method('getLayout')->willReturn($location === 'layout' ? $template : null);
        $controller->method('getPage')->willReturn($location === 'page' ? $template : null);

        $instance = new ReflectionProperty(Controller::class, 'instance');
        $instance->setAccessible(true);
        $instance->setValue(null, $controller);

        $request = Request::create('/', 'POST', $payload === null ? [] : ['form_captcha' => $payload]);
        $this->app->instance('request', $request);

        Altcha::instance()->setTargets([TargetComponent::class => ['onProtected']]);
        (new Plugin($this->app))->boot();

        return new TargetComponent();
    }

    /**
     * @dataProvider componentLocations
     */
    public function testTargetedHandlerAcceptsValidPayload(string $location): void
    {
        $component = $this->prepareHandler($location, $this->encode($this->payload(time() + 60)));
        $component->runAjaxHandler('onProtected');

        $this->assertTrue($component->handled);
    }

    public static function componentLocations(): array
    {
        return [['page'], ['layout']];
    }

    public function testTargetedHandlerRejectsMissingCaptcha(): void
    {
        $component = $this->prepareHandler('page', null);

        try {
            $component->runAjaxHandler('onProtected');
            $this->fail('A missing captcha should prevent the handler from running.');
        } catch (NoCaptchaException $exception) {
            $this->assertFalse($component->handled);
        }
    }

    public function testTargetedHandlerRejectsInvalidCaptcha(): void
    {
        $component = $this->prepareHandler('page', $this->encode($this->payload(time() - 60)));

        try {
            $component->runAjaxHandler('onProtected');
            $this->fail('An expired captcha should prevent the handler from running.');
        } catch (NotVerifiedException $exception) {
            $this->assertFalse($component->handled);
        }
    }

    public function testUntargetedHandlerDoesNotRequireCaptcha(): void
    {
        $component = $this->prepareHandler('page', null);
        $component->runAjaxHandler('onOther');

        $this->assertTrue($component->handled);
    }

    public function testUntargetedComponentDoesNotRequireCaptcha(): void
    {
        $component = $this->prepareHandler('page', null);
        Altcha::instance()->setTargets([AltchaComponent::class => ['onProtected']]);
        $component->runAjaxHandler('onProtected');

        $this->assertTrue($component->handled);
    }
}
