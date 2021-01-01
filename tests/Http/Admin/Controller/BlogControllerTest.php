<?php


namespace App\Tests\Http\Admin\Controller;

use App\Tests\FixturesTrait;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;

class BlogControllerTest extends WebTestCase
{

    use FixturesTrait;


    public function setUp(): void
    {
        parent::setUp();

    }
    public function dataProvider(): iterable
    {
        yield [null, Response::HTTP_FOUND];
        yield ['user1', Response::HTTP_FORBIDDEN];
        yield ['user_admin', Response::HTTP_OK];
    }


}
