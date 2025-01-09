<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function follow()
    {
        return Inertia::render('Content/Following');
    }

    public function advancedSearch()
    {
        return Inertia::render('Content/AdvancedSearch');
    }

    public function createProject()
    {
        return Inertia::render('Content/CreateProject');
    }
    public function project()
    {
        return Inertia::render('Content/ListProject');
    }
}
