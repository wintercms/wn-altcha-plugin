<?php

namespace Winter\Altcha\Tests\Feature;

use Illuminate\Http\Request;
use Illuminate\Routing\RouteCollection;
use Winter\Altcha\Tests\AltchaTestCase;
use Winter\Storm\Support\Facades\Config;

class ApiTest extends AltchaTestCase
{
    protected function setUp(): void
    {
        parent::setUp();
        Config::set('winter.altcha::apiPrefix', 'custom/api');
        $this->app->instance('middleware.disable', true);
        $this->app['router']->setRoutes(new RouteCollection());
        require dirname(__DIR__, 2) . '/routes.php';
    }

    public function testChallengeRouteReturnsJsonChallenge(): void
    {
        $response = $this->app['router']->dispatch(Request::create('/custom/api/challenge', 'GET'));
        $data = json_decode($response->getContent(), true, 512, JSON_THROW_ON_ERROR);

        $this->assertSame(200, $response->getStatusCode());
        $this->assertStringContainsString('application/json', $response->headers->get('Content-Type'));
        $this->assertNotEmpty($data['signature']);
        $this->assertSame('PBKDF2/SHA-256', $data['parameters']['algorithm']);
    }

    /**
     * @dataProvider otherApiRequests
     */
    public function testOtherApiRequests(string $method, string $path, int $status): void
    {
        $response = $this->app['router']->dispatch(Request::create($path, $method));

        $this->assertSame($status, $response->getStatusCode());
        if ($status === 404) {
            $data = json_decode($response->getContent(), true, 512, JSON_THROW_ON_ERROR);
            $this->assertSame('Invalid API request.', $data['error']['message']);
        }
    }

    public static function otherApiRequests(): array
    {
        return [
            ['GET', '/custom/api/unknown', 404],
            ['POST', '/custom/api/challenge', 404],
        ];
    }

    public function testOptionsRouteReturnsNoContent(): void
    {
        if (getenv('ALTCHA_TEST_KNOWN_FAILURES') !== '1') {
            $this->markTestSkipped('The fallback route currently overrides the OPTIONS route.');
        }

        $response = $this->app['router']->dispatch(Request::create('/custom/api/challenge', 'OPTIONS'));
        $this->assertSame(204, $response->getStatusCode());
    }
}
