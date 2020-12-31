<?php

namespace App\Domain\Auth\Repository;

use App\Domain\Auth\Entity\LoginAttempt;
use App\Domain\Auth\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class LoginAttemptRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LoginAttempt::class);
    }

  /**
   * Compte le nombre de tentative de connexion pour un utilisateur.
   * @param User $user
   * @param int $minutes
   * @return int
   * @throws \Doctrine\ORM\NoResultException
   * @throws \Doctrine\ORM\NonUniqueResultException
   */
    public function countRecentFor(User $user, int $minutes): int
    {
        return $this->createQueryBuilder('l')
        ->select('COUNT(l.id) as count')
        ->where('l.user = :user')
        ->andWhere('l.createdAt > :date')
        ->setParameter('date', new \DateTime("-{$minutes} minutes"))
        ->setParameter('user', $user)
        ->setMaxResults(1)
        ->getQuery()
        ->getSingleScalarResult();
    }
}
