<?php declare(strict_types=1);


namespace App\Http\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PageController extends AbstractController
{


  /**
   * @return Response
   * @Route("/",  name="home")
   */
  public function home(): Response
  {

    return $this->render('page/home.html.twig');
  }
}
