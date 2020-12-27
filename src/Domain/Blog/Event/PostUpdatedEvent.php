<?php

namespace App\Domain\Blog\Event;

use App\Domain\Application\Entity\Content;

class PostUpdatedEvent
{
    private Content $content;
    private Content $previous;

    public function __construct(Content $content, Content $previous)
    {
        $this->content = $content;
        $this->previous = $previous;
    }

    public function getContent(): Content
    {
        return $this->content;
    }

    public function getPrevious(): Content
    {
        return $this->previous;
    }
}
