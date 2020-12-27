<?php


namespace App\Http\Security;

use App\Domain\Auth\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;

class AdminVoter extends Voter
{

    protected function supports(string $attribute, $subject): bool
    {
         return true;
    }

    protected function voteOnAttribute(string $attribute, $subject, TokenInterface $token): bool
    {
        $admin = $token->getUser();

        if (!$admin instanceof User) {
            return false;
        }
        return 'Linkmat' === $admin->getUsername();
    }
}
