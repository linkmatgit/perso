<?php declare(strict_types=1);

namespace App\Http\Controller;

class AbstractController extends \Symfony\Bundle\FrameworkBundle\Controller\AbstractController
{

  /**
   * Affiche la liste de erreurs sous forme de message flash.
   */
    protected function flashErrors(FormInterface $form): void
    {
      /** @var FormError[] $errors */
        $errors = $form->getErrors();
        $messages = [];
        foreach ($errors as $error) {
            $messages[] = $error->getMessage();
        }
        $this->addFlash('error', implode("\n", $messages));
    }
}
