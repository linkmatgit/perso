<?php

namespace App\Domain\Blog\Entity;

use App\Domain\Application\Entity\Content;
use App\Domain\Blog\Repository\PostRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PostRepository::class)
 * @ORM\Table ("blog_post")
 */
final class Post extends Content
{
  /**
   * @ORM\ManyToOne(targetEntity="App\Domain\Blog\Entity\Category", inversedBy="posts")
   * @ORM\JoinColumn(onDelete="SET NULL")
   */
    private ?Category $category = null;


    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }
}
