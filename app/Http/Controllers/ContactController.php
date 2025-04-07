<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Foundation\Application;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::all();
        return Inertia::render('Welcome', [
            'contacts' => $contacts,
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION
        ]);
    }
}
