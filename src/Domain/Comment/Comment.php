<?php

namespace App\Domain\Comment;

use App\Domain\Application\Entity\Content;
use App\Domain\Auth\User;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CommentRepository::class)
 */
class Comment
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     * @ORM\Column(type="integer")
     */
    private ?int $id = null;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private ?string $email= null;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private ?string $username= null;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private string $content = '';

    /**
     * @ORM\Column(type="datetime")
     */
    private \DateTimeInterface $createdAt;

    /**
     * @ORM\ManyToOne(targetEntity=User::class)
    **/
    private ?User $author;

  /**
   * @ORM\ManyToOne(targetEntity="App\Domain\Comment\Comment", inversedBy="replies")
   * @ORM\JoinColumn(onDelete="CASCADE")
   */
    private ?self $parent = null;


  /**
   * @ORM\OneToMany(targetEntity="App\Domain\Comment\Comment", mappedBy="parent")
   *
   * @var Collection<int, Comment>
   */
    private Collection $replies;

    /**
     * @ORM\ManyToOne(targetEntity=Content::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private Content $target;

    public function getId(): ?int
    {


        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(?string $username): self
    {
        $this->username = $username;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(?User $author): self
    {
        $this->author = $author;

        return $this;
    }

    public function getParent(): ?Comment
    {
        return $this->parent;
    }

    public function setParent(?Comment $parent): self
    {
        $this->parent = $parent;

        return $this;
    }

    public function getTarget(): ?Content
    {
        return $this->target;
    }

    public function setTarget(Content $target): self
    {
        $this->target = $target;

        return $this;
    }

  /**
   * @return Collection
   */
    public function getReplies(): Collection
    {
        return $this->replies;
    }

  /**
   * @param Collection $replies
   * @return Comment
   */
    public function setReplies(Collection $replies): Comment
    {
        $this->replies = $replies;
        return $this;
    }
}
