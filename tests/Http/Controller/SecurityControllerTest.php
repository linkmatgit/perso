<?php

namespace App\Tests\Http\Controller;


use App\Tests\FixturesTrait;
use App\Tests\WebTestCase;
use Symfony\Component\HttpFoundation\Response;

class SecurityControllerTest extends WebTestCase {

  use FixturesTrait;
  public function testLoginTitle(): void
  {
    $title = 'Se connecter';
    $crawler = $this->client->request('GET', '/connexion');
    $this->assertEquals($title, $crawler->filter('h1')->text(), $crawler->filter('title')->text());
    $this->assertResponseStatusCodeSame(Response::HTTP_OK);
  }

  public function testBadPassword(): void
  {
    $crawler = $this->client->request('GET', '/connexion');
    $this->expectFormErrors(0);
    $form =  $crawler->selectButton('Se connecter')->form();
    $form->setValues([
      'username' => 'john@doe.fr',
      'password' => '00000',
    ]);
    $this->client->submit($form);
    $this->assertResponseRedirects();
    $this->client->followRedirect();
    $this->assertResponseStatusCodeSame(Response::HTTP_OK);
  }
  public function testGoodPasswordWorks(): void
  {
    /** @var array<string,User> $users */
    $users = $this->loadFixtures(['users']);
    $crawler = $this->client->request('GET', '/connexion');
    $this->expectFormErrors(0);
    $form = $crawler->selectButton('Se connecter')->form();
    $form->setValues([
      'username' => $users['user1']->getEmail(),
      'password' => '0000',
    ]);
    $this->client->submit($form);
    $this->assertResponseRedirects('/connexion');
    $this->assertResponseStatusCodeSame(Response::HTTP_FOUND);
  }
}
