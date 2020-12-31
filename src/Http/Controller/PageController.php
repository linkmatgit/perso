<?php declare(strict_types=1);


namespace App\Http\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PageController extends AbstractController
{


  /**
   * @return Response
   * @Route("/",  name="app_home")
   */
    public function home(): Response
    {
        $username = $this->getUser();
        return $this->render('page/home.html.twig', [
          'user' => $username
        ]);
    }
    /**
   * @return Response
   * @Route("/demo",  name="demo")
   */
    public function demo(): Response
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');
        return $this->render('page/demo/index.html.twig');
    }

  /**
   * @return Response
   * @Route("/a-propos", name="apropos")
   */
    public function apropos():Response
    {
        return $this->render('page/apropos.html.twig');
    }
}
