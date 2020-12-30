<?php

namespace App\Http\Admin\Controller;

use App\Domain\Auth\User;
use App\Domain\Auth\UserRepository;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends CrudController
{
  protected string $templatePath = 'user';
  protected string $menuItem = 'user';
  protected string $entity = User::class;
  protected string $routePrefix = 'admin_user';
  protected string $searchField = 'username';
  protected array $events = [];

  public function applySearch(string $search, QueryBuilder $query): QueryBuilder
  {
    $query = $query->where('LOWER(row.username) LIKE :search')
      ->orWhere('LOWER(row.email) LIKE :search');
    if (preg_match('/^\d+$/', $search)) {
      $query = $query->orWhere('row.id = :search');
    }

    return $query->setParameter('search', strtolower($search));
  }

  /**
   * @Route("/users/search/{q?}", name="user_autocomplete")
   * @param string $q
   * @return JsonResponse
   */
  public function search(string $q): JsonResponse
  {
    /** @var UserRepository $repository */
    $repository = $this->em->getRepository(User::class);
    $q = strtolower($q);
    if ('moi' === $q) {
      return new JsonResponse([[
        'id' => $this->getUser()->getId(),
        'username' => $this->getUser()->getUsername(),
      ]]);
    }
    $users = $repository
      ->createQueryBuilder('u')
      ->select('u.id', 'u.username')
      ->where('LOWER(u.username) LIKE :username')
      ->setParameter('username', "%$q%")
      ->setMaxResults(25)
      ->getQuery()
      ->getResult();

    return new JsonResponse($users);
  }


}
