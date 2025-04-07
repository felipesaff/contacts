<?php

namespace App\Policies;

use App\Models\Contact;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ContactPolicy
{
    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Contact $contact): Response
    {
        return $user->id === $contact->user_id ? Response::allow() : Response::deny('You do not own this contact.');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Contact $contact): Response
    {
        return $user->id === $contact->user_id ? Response::allow() : Response::deny('You do not own this contact.');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Contact $contact): bool
    {
        return false;
    }
}
