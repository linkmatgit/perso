<?php declare(strict_types=1);


namespace App\Http\Controller;

use App\Core\Helper\Paginator\PaginatorInterface;
use App\Domain\Blog\Entity\Category;
use App\Domain\Blog\Entity\Post;
use App\Domain\Blog\Repository\CategoryRepository;
use App\Domain\Blog\Repository\PostRepository;
use Doctrine\ORM\Query;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;

class BlogController extends AbstractController
{

    private PostRepository $service;
    private CategoryRepository $categoryRepository;
    private PaginatorInterface $paginator;

    public function __construct(PostRepository $service, CategoryRepository $categoryRepository, PaginatorInterface $paginator)
    {
        $this->service = $service;
        $this->categoryRepository = $categoryRepository;
        $this->paginator = $paginator;
    }

  /**
   * @Route("/blog/{slug}", name="blog_show")
   * @param Post $post
   * @return Response
   */
    public function show(Post $post): Response
    {
        return $this->render('blog/show.html.twig', [
        'post' => $post,
        'menu' => 'blog',
        ]);
    }

  /**
   * @Route("/blog", name="blog_index")
   * @param Request $request
   * @return Response
   */
    public function index(Request $request): Response
    {
        $title = 'Blog';
        $query = $this->service->queryAll();

        return $this->renderListing($title, $query, $request);
    }

  /**
   * @param string $title
   * @param Query|null $query
   * @param Request $request
   * @param array $params
   * @return Response
   */
  private function renderListing(string $title, ?Query $query, Request $request, array $params = []): Response
    {
        $page = $request->query->getInt('page', 1);
        $posts = $this->paginator->paginate(
            $query,
            $page,
            10
        );
        if ($page > 1) {
            $title .= ", page $page";
        }
        if (0 === $posts->count()) {
            throw new NotFoundHttpException('Aucun articles ne correspond à cette page');
        }
        $categories = $this->categoryRepository->findWithCount();

        return $this->render('blog/index.html.twig', array_merge([
        'posts' => $posts,
        'categories' => $categories,
        'page' => $page,
        'title' => $title,
        'menu' => 'blog',
        ], $params));
    }

  /**
   * @Route("/blog/category/{slug}", name="blog_category")
   * @param Category $category
   * @param Request $request
   * @return Response
   */
  public function category(Category $category, Request $request): Response
  {
    $title = $category->getName();
    $query = $this->service->queryAll($category);

    return $this->renderListing($title, $query, $request, ['category' => $category]);
  }

}
