<?php declare(strict_types=1);

namespace App\Http\Admin\Data;

interface CrudDataInterface
{

  public function getEntity(): object;

  public function getFormClass(): string;

  public function hydrate(): void;
}
