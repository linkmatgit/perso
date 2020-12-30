<?php


namespace App\Http\Admin\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends BaseController
{


  /**
   * @return Response
   * @Route("/", name="dashboard")
   */
    public function dashboard():Response
    {
        return $this->render('admin/home.html.twig');
    }
}
