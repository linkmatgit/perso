<?php declare(strict_types=1);

namespace App\Infrastructure\Queue\Message;


class ServiceMethodMessage {

  private string $ServiceName;
  private string $method;
  private array $param;

  public function __construct(string $ServiceName, string $method, array $param = [])
  {
    $this->ServiceName = $ServiceName;
    $this->method = $method;
    $this->param = $param;
  }

  /**
   * @return string
   */
  public function getServiceName(): string
  {
    return $this->ServiceName;
  }

  /**
   * @return string
   */
  public function getMethod(): string
  {
    return $this->method;
  }

  /**
   * @return array
   */
  public function getParam(): array
  {
    return $this->param;
  }


}
