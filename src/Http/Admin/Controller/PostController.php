<?php


namespace App\Http\Admin\Controller;

use App\Domain\Blog\Entity\Post;
use App\Domain\Blog\Event\PostCreatedEvent;
use App\Domain\Blog\Event\PostDeletedEvent;
use App\Domain\Blog\Event\PostUpdatedEvent;
use App\Domain\Blog\Helpers\BlogCloner;
use App\Http\Admin\Data\PostCrudData;
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
    protected string $routePrefix = 'admin_blog';
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
        ->orderby('row.id', 'DESC');
        return $this->crudIndex($query);
    }
  /**
   * @return Response
   * @Route("/new", name="new", methods={"POST", "GET"})
   */
    public function new():Response
    {
        $entity = (new Post())->setAuthor($this->getUser())->setCreatedAt(new \DateTime());
        $data = new PostCrudData($entity);
        return $this->crudNew($data);
    }

  /**
   * @Route("/{id<\d+>}", name="edit", methods={"POST", "GET"})
   * @param Request $request
   * @param Post $post
   * @return Response
   */
    public function edit(Request $request, Post $post): Response
    {
        $data = (new PostCrudData($post));
        return $this->crudEdit($data);
    }

  /**
   * @param Post $post
   * @return Response
   * @Route ("/{id<\d+>}", methods={"DELETE"}, name="delete")
   */
    public function delete(Post $post): Response
    {
        return $this->crudDelete($post);
    }

      /**
       * @param Post $post
       * @return Response
      * @Route ("/{id<\d+>}", methods={"DELETE"}, name="delete")
       */
    public function clone(Post $post): Response
    {
        $post = BlogCloner::clone($post);
        $data = new PostCrudData($post);
        return $this->crudNew($data);
    }
}
