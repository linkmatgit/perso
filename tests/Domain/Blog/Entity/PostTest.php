<?php


namespace App\Tests\Domain\Blog\Entity;

use App\Domain\Auth\User;
use App\Domain\Blog\Entity\Post;
use App\Tests\FixturesTrait;
use App\Tests\KernelTestCase;

class PostTest extends KernelTestCase
{


    use FixturesTrait;

    public function getUser()
    {
        return (new User())->setUsername('linkmat');
    }
    public function makeEntity()
    {
        return (new Post())
        ->setAuthor($this->getUser())
        ->setTitle('Ceci est un test')
        ->setSlug('ceci-est-un-slug')
        ->setContent('ceci est un contenue')
        ->setCreatedAt(new \DateTime())
        ->setOnline(true);
    }

    public function testValidEntity()
    {
        $post =  $this->makeEntity();
        $error = self::$container->get('validator')->validate($post);
        $this->assertCount(0, $error);
    }
    public function testEntityPostInvalidTitle()
    {
        $post = $this->makeEntity()->setTitle("");
        $error = self::$container->get('validator')->validate($post);
        $this->assertCount(1, $error);
    }
    public function testEntityPostInvalidContent()
    {

        $post = $this->makeEntity()->setContent("11");

        $error = self::$container->get('validator')->validate($post);
        $this->assertCount(1, $error);
    }
    public function testEntityPostInvalidSug()
    {

        $post = $this->makeEntity()->setSlug("Ceci est un test");

        $error = self::$container->get('validator')->validate($post);
        $this->assertCount(1, $error);
    }
}
