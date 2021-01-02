<?php

namespace App\Domain\Application\Entity;

use App\Core\Validator\Slug;
use App\Domain\Attachment\Attachment;
use App\Domain\Auth\User;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity
 * @ORM\InheritanceType("JOINED")
 * @ORM\DiscriminatorColumn(name="type", type="string")
 * @ORM\DiscriminatorMap({
 *     "post" = "App\Domain\Blog\Entity\Post",
 *     "course" = "App\Domain\Course\Entity\Course",
 * })
 *@Vich\Uploadable()
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
   * @Assert\NotBlank()
   */
    private string $title = "";

  /**
   * @ORM\Column(type="string", length=255)
   * @Slug()
   */
    private string $slug = "";

  /**
   * @ORM\Column(type="text")
   * @Assert\Length(min=3, minMessage="Le Contenue est trop Court")
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
   * @ORM\Column(type="string", length=255, nullable=true)
   */
  private ?string $image = null;

  /**
   * @Vich\UploadableField(fileNameProperty="image", mapping="content")
   */
  private ?File $imageFile = null;
  /**
   * @ORM\Column(type="boolean", options={"default": 0})
   */
    private bool $online = true;

    public function getId(): ?int
    {
        return $this->id;
    }

  /**
   * @param int|null $id
   *
   * @return $this
   */
  public function setId(?int $id): self
  {
    $this->id = $id;

    return $this;
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
  /**
   * @return File|null
   */
  public function getImageFile(): ?File
  {
    return $this->imageFile;
  }

  /**
   * @param File|null $imageFile
   * @return Content
   */
  public function setImageFile(?File $imageFile): Content
  {
    $this->imageFile = $imageFile;
    return $this;
  }
  /**
   * @return string|null
   */
  public function getImage(): ?string
  {
    return $this->image;
  }
  /**
   * @param string|null $image
   * @return Content
   */
  public function setImage(?string $image): Content
  {
    $this->image = $image;
    return $this;
  }

}
