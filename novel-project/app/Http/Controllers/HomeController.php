<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Novel;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function follow()
    {
        $user = Auth::user();

        $followNovels = [];
        if ($user) {
            $followNovels = Novel::with('tags', 'user')
                ->join('user_follows', 'novels.id', '=', 'user_follows.novel_id')
                ->where('user_follows.user_id', $user->id)
                ->orderBy('novels.updated_at', 'desc')
                ->paginate(15)
                ->through(function ($novel) {
                    return [
                        'id' => $novel->novel_id,
                        'title' => $novel->title,
                        'image_url' => $novel->image_url
                    ];
                });
        }

        return Inertia::render('Content/Following', ['followNovels' => $followNovels]);
    }

    public function advancedSearch()
    {
        return Inertia::render('Content/AdvancedSearch');
    }

    public function createProject()
    {
        return Inertia::render('Content/CreateProject');
    }
    //show all user projects
    public function listProject()
    {
        $user = Auth::user();
        $projects = [];
        if ($user) {
            $projects = Novel::where('author_id', $user->id)
                ->orderBy('updated_at', 'desc')
                ->paginate(15)
                ->through(function ($project) {
                    return [
                        'id' => $project->id,
                        'title' => $project->title,
                        'image_url' => $project->image_url
                    ];
                });
        }
        return Inertia::render('Content/ListProject', ['projects' => $projects]);
    }
    public function settings()
    {
        return Inertia::render('Content/Settings');
    }
}
