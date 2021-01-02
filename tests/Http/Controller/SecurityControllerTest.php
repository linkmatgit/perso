<?php

namespace App\Tests\Http\Controller;

use App\Tests\FixturesTrait;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;

class SecurityControllerTest extends WebTestCase
{

    use FixturesTrait;
    public function testLoginTitle(): void
    {
        $client = self::createClient();
        $title = 'Se connecter';
        $crawler = $client->request('GET', '/connexion');
        $this->assertEquals($title, $crawler->filter('h1')->text(), $crawler->filter('title')->text());
        $this->assertResponseStatusCodeSame(Response::HTTP_OK);
    }

    public function testBadPassword(): void
    {
        $client = self::createClient();
        $crawler = $client->request('GET', '/connexion');
        $form =  $crawler->selectButton('Se connecter')->form();
        $form->setValues([
        'username' => 'john@doe.fr',
        'password' => '00000',
        ]);
        $client->submit($form);
        $this->assertResponseRedirects();
        $client->followRedirect();
        $this->assertResponseStatusCodeSame(Response::HTTP_OK);
    }
    public function testGoodPasswordWorks(): void
    {
        $client = self::createClient();
      /** @var array<string,User> $users */
        $users = $this->loadFixtures(['users']);
        $crawler = $client->request('GET', '/connexion');
        $form = $crawler->selectButton('Se connecter')->form();
        $form->setValues([
        'username' => $users['user1']->getEmail(),
        'password' => '0000',
        ]);
        $client->submit($form);
        $this->assertResponseRedirects('/connexion');
        $this->assertResponseStatusCodeSame(Response::HTTP_FOUND);
    }
}
