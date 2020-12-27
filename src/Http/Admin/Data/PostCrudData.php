<?php


namespace App\Http\Admin\Data;

use App\Domain\Auth\User;
use App\Domain\Blog\Entity\Category;
use App\Domain\Blog\Entity\Post;
use App\Http\Form\AutomaticForm;
use Doctrine\ORM\EntityManagerInterface;

class PostCrudData implements CrudDataInterface
{

    private Post $entity;
    public ?string $title = null;
    public ?string $slug = null;
    public ?string $content = null;
    //public ?Category $category = null;
    public ?bool $online = false;
    public ?\DateTimeInterface $createdAt;
    public User $author;
    private EntityManagerInterface $em;


    public function __construct(Post $item)
    {
        $this->entity = $item;
        $this->title = $item->getTitle();
        $this->slug = $item->getSlug();
        //$this->category = $item->getCategory();
        $this->online = $item->getOnline();
        $this->createdAt = $item->getCreatedAt();
        $this->author = $item->getAuthor();
    }

    public function getEntity(): object
    {
        return $this->entity;
    }

    public function getFormClass(): string
    {
        return AutomaticForm::class;
    }

    public function hydrate(): void
    {
        $this->entity->setTitle($this->title);
        $this->entity->setAuthor($this->author);
        $this->entity->setSlug($this->slug);
        $this->entity->setOnline($this->online);
        $this->entity->setCreatedAt($this->createdAt);
        //$this->entity->setCategory($this->category);
    }

    public function setEntityManager(EntityManagerInterface $em): self
    {
        $this->em = $em;

        return $this;
    }
}
