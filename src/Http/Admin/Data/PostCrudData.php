<?php

namespace App\Http\Admin\Data;

use App\Core\Validator\Slug;
use App\Domain\Attachment\Attachment;
use App\Domain\Auth\User;
use App\Domain\Blog\Entity\Category;
use App\Domain\Blog\Entity\Post;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @property Post $entity
 */
class PostCrudData extends AutomaticCrudData
{
  /**
   *@Assert\NotBlank()
   */
    public ?string $title = null;

    public ?string $slug = null;
    public ?string $content = null;
    public ?Category $category = null;
    public bool $online = false;
    public ?\DateTimeInterface $createdAt;
    public ?User $author;
    private EntityManagerInterface $em;
    //public ?Attachment $image = null;



    public function hydrate(): void
    {
        parent::hydrate();
        $this->entity->setUpdatedAt(new \DateTime());
    }
}
