<?php declare(strict_types=1);

namespace App\Infrastructure\Mailer;


use App\Infrastructure\Queue\EnqueueMethod;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Twig\Environment;

class Mailer {



  private Environment $twig;
  private EnqueueMethod $enqueue;
  private MailerInterface $mailer;

  const htmlTemplate = 'mails/base.html.twig';
  const textTemplate = 'mails/base.text.twig';
  const from =  'noreply@linkmat.com';

  public function __construct(Environment $twig, EnqueueMethod $enqueue, MailerInterface $mailer){

    $this->twig = $twig;
    $this->enqueue = $enqueue;;
    $this->mailer = $mailer;
  }

  public function createEmail(string $template, array $data =[]): Email {
    $this->twig->addGlobal('format', 'html');
    $html = $this->twig->render($template, array_merge($data, ['layout' => self::htmlTemplate ]));
    $this->twig->addGlobal('format', 'text');
    $text = $this->twig->render($template, array_merge($data, ['layout' => self::textTemplate ]));
    return (new Email())
      ->from(self::from)
      ->html($html)
      ->text($text);

  }

  public function send(Email $email): void {
    $this->enqueue->enqueue(MailerInterface::class, 'send', [$email]);
  }

  public function sendNow(Email $email): void {
    $this->mailer->send($email);
  }
}
