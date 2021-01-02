<?php

namespace App\Domain\Blog\Repository;

use App\Core\Orm\AbstractRepository;
use App\Domain\Blog\Entity\Category;
use App\Domain\Blog\Entity\Post;

use Doctrine\ORM\Query;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Post|null find($id, $lockMode = null, $lockVersion = null)
 * @method Post|null findOneBy(array $criteria, array $orderBy = null)
 * @method Post[]    findAll()
 * @method Post[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PostRepository extends AbstractRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Post::class);
    }

    public function queryAll(?Category $category = null): Query
    {
        $query = $this->createQueryBuilder('p')
        ->select('p')
        ->where('p.online = true')
        ->orderBy('p.createdAt', 'DESC');

        if ($category) {
            $query = $query
            ->andWhere('p.category = :category')
            ->setParameter('category', $category);
        }

        return $query->getQuery();
    }
}
