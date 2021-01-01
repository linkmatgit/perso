<?php

namespace App\Tests\Http\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;

class PageControllerTest extends WebTestCase
{

    public function testGetHomePage()
    {
         $client = self::createClient();
        $title = 'LinkmatDotCom!';
        $client->request('GET', '/');
        $this->assertResponseStatusCodeSame(Response::HTTP_OK);
    }
}
