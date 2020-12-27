<?php

namespace App\Core\Orm;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityNotFoundException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @template E of object
 *
 * @method E|null find($id, $lockMode = null, $lockVersion = null)
 * @method E|null findOneBy(array $criteria, array $orderBy = null)
 * @method E[]    findAll()
 * @method E[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
abstract class AbstractRepository extends ServiceEntityRepository
{
  /**
   * @param class-string<E> $entityClass
   * @psalm-param class-string<E> $entityClass
   */
  public function __construct(ManagerRegistry $registry, string $entityClass)
  {
    parent::__construct($registry, $entityClass);
  }

  /**
   * Trouve une entité par sa clef primaire et renvoie une exception en cas d'absence.
   *
   * @param string|int $id
   *
   * @return E
   */
  public function findOrFail($id): object
  {
    $entity = $this->find($id, null, null);
    if (null === $entity) {
      throw EntityNotFoundException::fromClassNameAndIdentifier($this->_entityName, [(string)$id]);
    }

    return $entity;
  }

  /**
   * Crée une requête qui peut être iterable, mais qui ne récupère les données que lors de la première itération.
   *
   * @param string $indexBy the index for the from
   *
   * @return IterableQueryBuilder<E>
   */
  public function createIterableQuery(string $alias, $indexBy = null): IterableQueryBuilder
  {
    /** @var IterableQueryBuilder<E> $queryBuilder */
    $queryBuilder = new IterableQueryBuilder($this->_em);

    return $queryBuilder->select($alias)->from($this->_entityName, $alias, $indexBy);
  }
}
