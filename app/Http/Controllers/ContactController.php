<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateContactRequest;
use App\Models\Contact;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Response;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::all();
        return Inertia::render('Welcome', ['contacts' => $contacts]);
    }

    public function show(Contact $contact)
    {
        return Inertia::render('Contact/Show', ['contact' => $contact]);
    }

    public function edit(Contact $contact)
    {
        return Inertia::render('Contact/Edit', ['contact' => $contact]);
    }

    public function update(UpdateContactRequest $request, Contact $contact)
    {
        Gate::authorize('update', $contact);
        $contact->update($request->validated());
        return redirect()->route('contact.show', $contact);
    }

    public function destroy(Contact $contact)
    {
        Gate::authorize('delete', $contact);
        $contact->delete();
        return Response::redirectTo('/');
    }
}
