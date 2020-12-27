<?php


namespace App\Http\Admin\Controller;

use App\Domain\Blog\Entity\Post;
use App\Domain\Blog\Event\PostCreatedEvent;
use App\Domain\Blog\Event\PostDeletedEvent;
use App\Domain\Blog\Event\PostUpdatedEvent;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/blog", name="blog_")
 *
 * @method getRepository() App\Domain\Blog\Repository\PostRepository
 */
final class PostController extends CrudController
{
    protected string $templatePath = 'blog';
    protected string $menuItem = 'blog';
    protected string $entity = Post::class;
    protected string $routePrefix = 'admin_post';
    protected array $events = [
    'update' => PostUpdatedEvent::class,
    'delete' => PostDeletedEvent::class,
    'create' => PostCreatedEvent::class,
    ];


  /**
   * @param Request $request
   * @return Response
   * @Route("/", name="index")
   */
    public function index(Request $request):Response
    {
        $this->paginator->allowSort('row.id', 'row.online');
        $query = $this->getRepository()
        ->createQueryBuilder('row')
        ->orderby('row.createdAt', 'DESC');
        return $this->crudIndex($query);
    }
}
