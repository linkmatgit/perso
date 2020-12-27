<?php

namespace App\Domain\Blog\Event;

use App\Domain\Application\Entity\Content;

class PostCreatedEvent
{
    private Content $content;

    public function __construct(Content $content)
    {
        $this->content = $content;
    }

    public function getContent(): Content
    {
        return $this->content;
    }
}
