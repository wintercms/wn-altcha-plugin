<?php

namespace Winter\Altcha\Tests\Unit\Components;

use Winter\Altcha\Components\Altcha;
use Winter\Altcha\Tests\AltchaTestCase;
use Winter\Storm\Support\Facades\Config;

class AltchaTest extends AltchaTestCase
{
    public function testComponentUsesAliasAndConfiguredFieldName(): void
    {
        $component = new Altcha(null, ['fieldName' => 'captcha']);
        $component->alias = 'form';

        $this->assertSame('form_captcha', $component->fieldName());
    }

    public function testComponentUsesConfiguredApiPrefix(): void
    {
        Config::set('winter.altcha::apiPrefix', 'custom/api/');
        $component = new Altcha();

        $this->assertStringEndsWith('/custom/api/challenge', $component->challengeUrl());
    }

    public function testComponentAliasesAreEscapedOrNullWhenEmpty(): void
    {
        $component = new Altcha(null, [
            'accountComponent' => '<account>',
            'easyformComponent' => '',
        ]);

        $this->assertSame('&lt;account&gt;', $component->accountComponent());
        $this->assertNull($component->easyFormAlias());
    }
}
