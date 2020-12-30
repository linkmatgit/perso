<?php


namespace App\Http\Admin\Data;

use App\Core\Validator\Slug;
use App\Domain\Auth\User;
use App\Domain\Blog\Entity\Category;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @property Category $entity
*/
class CategoryCrudData extends AutomaticCrudData
{

  /**
   * @var string|null
   * @Assert\NotBlank()
   */
    public ?string $name = null;
  /**
   * @var string|null
   * @Slug()
   */
    public ?string $slug = null;
    public ?string $description = null;
    public string $color = '#000000';
    public bool $online = false;
    public ?\DateTimeInterface $createdAt;
    public ?User $author;


    public function hydrate(): void
    {
        parent::hydrate();
        $this->entity->setUpdatedAt(new \DateTime());
    }
}
