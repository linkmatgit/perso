<?php

namespace App\Http\Admin\Data;

use App\Domain\Auth\User;
use App\Domain\Blog\Entity\Category;
use App\Domain\Blog\Entity\Post;
use Doctrine\ORM\EntityManagerInterface;

/**
 * @property Post $entity
 */
class PostCrudData extends AutomaticCrudData
{
    public ?string $title = null;
    public ?string $slug = null;
    public ?string $content = null;
    public ?Category $category = null;
    public bool $online = false;
    public ?\DateTimeInterface $createdAt;
    public ?User $author;
    private EntityManagerInterface $em;




    public function hydrate(): void
    {
      parent::hydrate();
      $this->entity->setUpdatedAt(new \DateTime());
    }

}
