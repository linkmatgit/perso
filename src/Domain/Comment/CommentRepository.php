<?php

namespace App\Domain\Comment;

use App\Core\Orm\AbstractRepository;
use App\Domain\Auth\User;
use App\Domain\Blog\Entity\Post;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\EntityNotFoundException;
use Doctrine\ORM\Query;
/**
 * @method Comment|null find($id, $lockMode = null, $lockVersion = null)
 * @method Comment|null findOneBy(array $criteria, array $orderBy = null)
 * @method Comment[]    findAll()
 * @method Comment[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CommentRepository extends AbstractRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Comment::class);
    }
  /**
   * Récupère les commentaires pour le listing de l'API en évitant la liaison content.
   *
   * @return array<Comment>
   */
    public function findForApi(int $content): array
    {
      // Force l'enregistrement de l'entité dans l'entity manager pour éviter les requêtes supplémentaires
        $this->_em->getReference(Post::class, $content);

        return $this->createQueryBuilder('c')
        ->select('c, u')
        ->orderBy('c.createdAt', 'ASC')
        ->where('c.target = :content')
        ->leftJoin('c.author', 'u')
        ->setParameter('content', $content)
        ->getQuery()
        ->getResult();
    }

  /**
   * Renvoie un commentaire en évitant la liaison content.
   */
    public function findPartial(int $id): Comment
    {
        $result = $this->createQueryBuilder('c')
        ->select('partial c.{id, username, email, content, createdAt}, partial u.{id, username, email}')
        ->where('c.id = :id')
        ->leftJoin('c.author', 'u')
        ->setParameter('id', $id)
        ->setMaxResults(1)
        ->getQuery()
        ->setHint(Query::HINT_FORCE_PARTIAL_LOAD, true)
        ->getOneOrNullResult();
        if (null === $result) {
            throw new EntityNotFoundException();
        }

        return $result;
    }

    public function queryLatest(): Query
    {
        return $this->createQueryBuilder('c')
        ->orderBy('c.createdAt', 'DESC')
        ->join('c.target', 't')
        ->join('c.author', 'a')
        ->addSelect('t', 'a')
        ->setMaxResults(5)
        ->getQuery();
    }

    public function findLastByUser(User $user): array
    {
        return $this->createQueryBuilder('c')
        ->where('c.author = :user')
        ->orderBy('c.createdAt', 'DESC')
        ->setMaxResults(4)
        ->setParameter('user', $user)
        ->getQuery()
        ->getResult();
    }
}
