<?php

namespace App\Domain\Application\Repository;

use App\Core\Orm\AbstractRepository;
use App\Domain\Application\Entity\Content;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends AbstractRepository<Content>
 */
class ContentRepository extends AbstractRepository
{
    public const limit = 5;

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Content::class);
    }


  /**
   * @param int $limit
   * @return Content[]
   */
    public function findLatest(int $limit = self::limit): array
    {
        return $this->createQueryBuilder('c')
        ->orderBy('c.createdAt', 'DESC')
        ->setMaxResults($limit)
        ->getQuery()
        ->getResult();
    }
}
