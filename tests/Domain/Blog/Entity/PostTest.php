<?php


namespace App\Tests\Domain\Blog\Entity;

use App\Domain\Auth\User;
use App\Domain\Blog\Entity\Post;
use App\Tests\FixturesTrait;
use App\Tests\KernelTestCase;
use Psr\Container\ContainerInterface;

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


}
