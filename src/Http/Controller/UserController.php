<?php declare(strict_types=1);


namespace App\Http\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{


  /**
   * @return Response
   * @Route("/profil", name="user_profil")
   */
    public function Profil():Response
    {

        $user = $this->getUser();
        return $this->render('auth/profil.html.twig', compact('user'));
    }
}
