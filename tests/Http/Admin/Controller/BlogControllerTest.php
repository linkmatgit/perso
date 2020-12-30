<?php


namespace App\Tests\Http\Admin\Controller;

use App\Tests\FixturesTrait;
use App\Tests\WebTestCase;
use Symfony\Component\HttpFoundation\Response;

class BlogControllerTest extends WebTestCase
{

    use FixturesTrait;
    private array $user = [];

    public function setUp(): void
    {
        parent::setUp();
        $this->user = $this->loadFixtures(['users']);
    }
    public function dataProvider(): iterable
    {
        yield [null, Response::HTTP_FOUND];
        yield ['user1', Response::HTTP_FORBIDDEN];
        yield ['user_admin', Response::HTTP_OK];
    }

    public function testGetPageIndexBlogNotLogged()
    {

        $this->client->request('GET', '/admin/blog');
        $this->assertResponseRedirects("/connexion");
        $this->assertResponseStatusCodeSame(Response::HTTP_FOUND);
    }

  /**
   * @dataProvider dataProvider
   * @param string|null $user
   * @param int $responseCode
   */
    public function testGetBlogAdmin(?string $user, int $responseCode)
    {
        if ($user) {
            $this->login($this->user[$user]);
        }
        $verbe = 'ne devrais pas';
        if (Response::HTTP_OK === $responseCode) {
            $verbe = 'devrait';
        }
        $this->client->request('GET', '/admin/blog/');
        $this->assertResponseStatusCodeSame($responseCode, "L'utilisateur {$user} $verbe pouvoir voir l'admin");
    }
}
