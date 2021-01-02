<?php

namespace App\Domain\Blog\Helpers;

use App\Domain\Blog\Entity\Post;

/**
 * Permet de dupliquer un cours en prenant en compte les associations.
 */
class BlogCloner
{
    public static function clone(Post $post): Post
    {
        $clone = clone $post;
        $clone->setId(null);
        $clone->setTitle($post->getTitle());
        $clone->setCreatedAt(clone $post->getCreatedAt());
         return $clone;
    }
}
