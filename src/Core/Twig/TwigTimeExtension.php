<?php

namespace App\Core\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class TwigTimeExtension extends AbstractExtension
{
  /**
   * @return array<TwigFilter>
   */
    public function getFilters(): array
    {
        return [
        new TwigFilter('ago', [$this, 'ago'], ['is_safe' => ['html']]),
        ];
    }

  /**
   * Génère une date au format "Il y a" gràce à un CustomElement.
   * @param \DateTimeInterface $date
   * @param string $prefix
   * @return string
   */
    public function ago(\DateTimeInterface $date, string $prefix = ''): string
    {
        $prefixAttribute = !empty($prefix) ? " prefix=\"{$prefix}\"" : '';

        return "<time-ago time=\"{$date->getTimestamp()}\"$prefixAttribute></time-ago>";
    }
}
