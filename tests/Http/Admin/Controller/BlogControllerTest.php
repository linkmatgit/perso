<?php


namespace App\Tests\Http\Admin\Controller;


use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class BlogControllerTest extends WebTestCase {


  public function testGetPageIndexBlogNotLogged(){
    $crawler = self::createClient();
    $crawler->request('GET', '/admin/blog');
    $this->assertResponseRedirects("/connexion");
  }

}

