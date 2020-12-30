<?php

namespace App\Domain\Blog\Entity;

use App\Domain\Auth\User;
use App\Domain\Blog\Repository\CategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CategoryRepository::class)
 */
class Category
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
    private string $name = '';

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private ?string $description = null;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private string $color = "#000000";
  /**
   * @ORM\Column(type="string", length=255)
   */
    private string $slug = '';

  /**
   * @ORM\Column(type="integer", options={"unsigned": true})
   */
    private int $postsCount = 0;

  /**
   * @ORM\OneToMany(targetEntity="App\Domain\Blog\Entity\Post", mappedBy="category")
   *
   * @var Collection<int,Post>
   */
    private Collection $posts;



    public function __construct()
    {
        $this->posts = new ArrayCollection();
    }
    /**
     * @ORM\ManyToOne(targetEntity=User::class)
     * @ORM\JoinColumn(nullable=true)
     */
    private ?User $author = null;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private ?\DateTimeInterface $createdAt = null;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private ?\DateTimeInterface $updatedAt = null;

  /**
   * @ORM\Column(type="boolean", options={"default": 0})
   */
    private bool $online = true;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(string $color): self
    {
        $this->color = $color;

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

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

  /**
   * @return \DateTimeInterface|null
   */
    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

  /**
   * @param \DateTimeInterface|null $updatedAt
   * @return Category
   */
    public function setUpdatedAt(?\DateTimeInterface $updatedAt): Category
    {
        $this->updatedAt = $updatedAt;
        return $this;
    }

    public function getPostsCount(): int
    {
        return $this->postsCount;
    }

    public function setPostsCount(int $postsCount): Category
    {
        $this->postsCount = $postsCount;

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
   * @return Category
   */
    public function setSlug(string $slug): Category
    {
        $this->slug = $slug;
        return $this;
    }
  /**
   * @return Collection<int,Post>|Post[]
   */
    public function getPosts(): Collection
    {
        return $this->posts;
    }

    public function addPost(Post $post): self
    {
        if (!$this->posts->contains($post)) {
            $this->posts[] = $post;
            $post->setCategory($this);
        }

        return $this;
    }

    public function removePost(Post $post): self
    {
        if ($this->posts->contains($post)) {
            $this->posts->removeElement($post);
          // set the owning side to null (unless already changed)
            if ($post->getCategory() === $this) {
                $post->setCategory(null);
            }
        }

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
