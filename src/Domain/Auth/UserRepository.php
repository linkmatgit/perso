<?php

namespace App\Domain\Auth;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

  /**
   * Requête permettant de récupérer un utilisateur pour le login.
   */
    public function findForAuth(string $username): ?User
    {
        return $this->createQueryBuilder('u')
        ->where('u.email = :username')
        ->orWhere('u.username = :username')
        ->setMaxResults(1)
        ->setParameter('username', $username)
        ->getQuery()
        ->getOneOrNullResult();
    }

  /**
   * Cherche un utilisateur pour l'oauth.
   */
    public function findForOauth(string $service, ?string $serviceId, ?string $email): ?User
    {
        if (null === $serviceId || null === $email) {
            return null;
        }

        return $this->createQueryBuilder('u')
        ->where('u.email = :email')
        ->orWhere("u.{$service}Id = :serviceId")
        ->setMaxResults(1)
        ->setParameters([
        'email' => $email,
        'serviceId' => $serviceId,
        ])
        ->getQuery()
        ->getOneOrNullResult();
    }

  /**
   * {@inheritdoc}
   */
    public function upgradePassword(UserInterface $user, string $newEncodedPassword): void
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', \get_class($user)));
        }

        $user->setPassword($newEncodedPassword);
        $this->_em->persist($user);
        $this->_em->flush();
    }

    public function cleanUsers(): int
    {
        return $this->createQueryBuilder('u')
        ->where('u.deleteAt IS NOT NULL')
        ->andWhere('u.deleteAt < NOW()')
        ->delete(User::class, 'u')
        ->getQuery()
        ->execute();
    }
}
