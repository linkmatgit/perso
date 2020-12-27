<?php

namespace App\Domain\Application\Entity;

use App\Domain\Auth\User;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\InheritanceType("JOINED")
 * @ORM\DiscriminatorColumn(name="type", type="string")
 * @ORM\DiscriminatorMap({
 *     "post" = "App\Domain\Blog\Entity\Post",
 * })
 */
abstract class Content
{
  /**
   * @ORM\Id
   * @ORM\GeneratedValue(strategy="IDENTITY")
   * @ORM\Column(type="integer")
   */
    private ?int $id = null;

  /**
   * @ORM\Column(type="string", length=255)
   */
    private string $title = "";
  /**
   * @ORM\Column(type="string", length=255)
   */
    private string $slug = "";
  /**
   * @ORM\Column(type="text")
   */
    private ?string $content = " ";

  /**
   * @ORM\Column(type="datetime", nullable=true)
   */
    private ?\DateTimeInterface $createdAt = null;

  /**
   * @ORM\Column(type="datetime", nullable=true)
   */
    private ?\DateTimeInterface $updatedAt = null;

  /**
   * @ORM\ManyToOne(targetEntity=User::class)
   */
    private User $author;

  /**
   * @ORM\Column(type="boolean", options={"default": 0})
   */
    private bool $online;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

  /**
   * @return string
   */
    public function getSlug(): string
    {
        return $this->slug;
    }

  /**
   * @param string $slug
   * @return Content
   */
    public function setSlug(string $slug): Content
    {
        $this->slug = $slug;
        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(?string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(?\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(User $author): self
    {
        $this->author = $author;

        return $this;
    }

    public function getOnline(): ?bool
    {
        return $this->online;
    }

    public function setOnline(bool $online): self
    {
        $this->online = $online;

        return $this;
    }
}
