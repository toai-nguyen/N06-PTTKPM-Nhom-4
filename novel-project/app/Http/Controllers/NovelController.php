<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Novel;
use Inertia\Inertia;

class NovelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request )
    {
        $topNovels = Novel::with('tags', 'user')
        ->orderBy('followers', 'desc')
        ->take(5)
        ->get()
        ->map(function ($novel) {
            return [
                'id' => $novel->id,
                'title' => $novel->title,
                'description' => $novel->description,
                'image_url' => $novel->image_url,
                'tags' => $novel->tags->map(function ($tag) {
                    return ['id' => $tag->id, 'name' => $tag->tag_name];
                }),
                'author_name' => $novel->user->name,
            ];
        });


        $lastestNovels = Novel::orderBy('created_at', 'desc')
        ->take(12)
        ->get()
        ->map(function ($novel){
            return [
                'id' => $novel->id,
                'title' => $novel->title,
                'image_url' => $novel->image_url,
                'author_name' => $novel->user->name,
            ];
        });
        $randomNovels = Novel::inRandomOrder()->take(15)->get()
        ->map(function ($novel){
            return [
                'id' => $novel->id,
                'title' => $novel->title,
                'image_url' => $novel->image_url,
                // 'author_name' => $novel->user->name,
            ];
        });
        return Inertia::render('Home', [
            'topNovels' => $topNovels, 
            'lastestNovels' => $lastestNovels,
            'randomNovels' => $randomNovels]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Content/CreateProject');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateRequest = $request->validate([
            'title' => 'required|max:255',
            'description' => 'required',
            'tags' => 'required',
        ]);
        $cloudinaryImage = $request->file('image')->storeOnCloudinary('novel_project/cover_image');
        $url = $cloudinaryImage->getSecurePath();
        $public_id = $cloudinaryImage->getPublicId();
        Novel::create([
            'title' => $validateRequest['title'],
            'description' => $validateRequest['description'],
            'image_url' => $url,
            'image_public_id' => $public_id,
            'status' => 'ongoing',
            'followers' => 0,
            'number_of_chapters' => 0,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $novel = Novel::with('tags', 'user')->find($id);
        return Inertia::render('Content/ProjectDetail', [
            'novel' => [
                'id' => $novel->id,
                'title' => $novel->title,
                'description' => $novel->description,
                'image_url' => $novel->image_url,
                'tags' => $novel->tags->map(function ($tag) {
                    return ['id' => $tag->id, 'name' => $tag->tag_name];
                }),
                'author_name' => $novel->user->name,
            ]
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        Inertia::render('Content/EditProject');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validateRequest = $request->validate([
            'title' => 'required|max:255',
            'description' => 'required',
            'tags' => 'required',
        ]);
        $novel = Novel::find($id);
        $novel->update([
            'title' => $validateRequest['title'],
            'description' => $validateRequest['description'],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $novel = Novel::find($id);
        $novel->delete();
        return redirect()->route('home');
    }
}
