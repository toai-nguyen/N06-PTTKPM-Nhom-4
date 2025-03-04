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
        if ($user){
            $followNovels = Novel::with('tags', 'user')
            ->join('user_follows', 'novels.id', '=', 'user_follows.novel_id')
            ->where('user_follows.user_id', $user->id)
            ->orderBy('novels.updated_at', 'desc')
            ->paginate(15)
            ->through(function ($novel) {
                return [
                    'id' => $novel->id,
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
    public function listProject()
    {
        return Inertia::render('Content/ListProject');
    }
    public function settings()
    {
        return Inertia::render('Content/Settings');
    }
}
