<?php


namespace App\Http\Admin\Controller;

use App\Domain\Blog\Entity\Category;
use App\Domain\Blog\Entity\Post;
use App\Http\Admin\Data\CategoryCrudData;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/category", name="category_")
 *
 * @method getRepository() App\Domain\Blog\Repository\CategoryRepository
 */
final class CategoryController extends CrudController
{
    protected string $templatePath = 'category';
    protected string $menuItem = 'category';
    protected string $entity = Category::class;
    protected string $routePrefix = 'admin_category';
    protected array $events = [
    'update' => null,
    'delete' => null,
    'create' => null,
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
        $entity = (new Category())->setAuthor($this->getUser())->setCreatedAt(new \DateTime());
        $data = new CategoryCrudData($entity);
        return $this->crudNew($data);
    }

  /**
   * @Route("/{id<\d+>}", name="edit", methods={"POST", "GET"})
   * @param Request $request
   * @param Category $post
   * @return Response
   */
    public function edit(Request $request, Category $post): Response
    {
        $data = (new CategoryCrudData($post));
        return $this->crudEdit($data);
    }

  /**
   * @param Category $post
   * @return Response
   * @Route ("/{id<\d+>}", methods={"DELETE"}, name="delete")
   */
    public function delete(Category $post): Response
    {
        return $this->crudDelete($post);
    }
}
