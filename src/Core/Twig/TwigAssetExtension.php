<?php

namespace App\Core\Twig;

use Psr\Cache\CacheItemPoolInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

/**
 * Système d'assets servant de remplacement à SymfonyEncore basé sur Vite.
 */
class TwigAssetExtension extends AbstractExtension
{
  const CACHE_KEY = 'asset_time';
  private string $assetPath;
  private CacheItemPoolInterface $cache;
  private RequestStack $requestStack;
  private bool $isProduction;
  private ?array $paths = null;

  public function __construct(
    string $assetPath,
    string $env,
    CacheItemPoolInterface $cache,
    RequestStack $requestStack
  )
  {
    $this->assetPath = $assetPath;
    $this->cache = $cache;
    $this->requestStack = $requestStack;
    $this->isProduction = 'prod' === $env;
  }

  public function getFunctions(): array
  {
    return [
      new TwigFunction('encore_entry_link_tags', [$this, 'link'], ['is_safe' => ['html']]),
      new TwigFunction('encore_entry_script_tags', [$this, 'script'], ['is_safe' => ['html']]),
    ];
  }

  public function link(string $name): string
  {
    $uri = $this->uri($name . '.css');
    if (strpos($uri, ':3000')) {
      return ''; // Le CSS est chargé depuis le JS dans l'environnement de dev
    }

    return '<link rel="stylesheet" media="screen" href="' . $this->uri($name . '.css') . '"/>';
  }

  /**
   * Génère l'URL associé à un asset passé en paramètre.
   *
   * @param string $name Le nom du fichier à charger ("app.js" par exemple)
   */
  private function uri(string $name): string
  {
    if (!$this->isProduction) {
      $request = $this->requestStack->getCurrentRequest();

      return $request ? "http://{$request->getHost()}:3000/{$name}" : '';
    }

    $name = $this->getAssetPaths()[$name] ?? '';

    return "/assets/$name";
  }

  /**
   * Récupère le chemin des assets depuis le fichier manifest.json.
   */
  private function getAssetPaths(): array
  {
    if (null === $this->paths) {
      $cached = $this->cache->getItem(self::CACHE_KEY);
      if (!$cached->isHit()) {
        $manifest = $this->assetPath . '/manifest.json';
        if (file_exists($manifest)) {
          $paths = json_decode((string)file_get_contents($manifest), true);
          $this->cache->save($cached->set($paths));
          $this->paths = $paths;
        } else {
          $this->paths = [];
        }
      } else {
        $this->paths = $cached->get();
      }
    }

    return $this->paths;
  }

  public function script(string $name): string
  {
    $script = '<script src="' . $this->uri($name . '.js') . '" type="module" defer></script>';

    // Si on est en mode développement on injecte le système de Hot Reload de vite
    if (!$this->isProduction) {
      $request = $this->requestStack->getCurrentRequest();
      if ($request) {
        $script = <<<HTML
                    <script type="module">
                    import "//{$request->getHost()}:3000/vite/client"
                    </script>
                    $script
                HTML;
      }
    }

    return $script;
  }
}
