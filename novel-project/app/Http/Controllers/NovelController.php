<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Novel;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class NovelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request )
    {
        //home page: show top 5 novels with most followers, 12 latest novels, 15 random novels
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
        //show selected novel with all chapters
        $rawNovel = Novel::with(['tags' , 'user', 'chapters' => function($query){
            $query->orderBy('chapter_number', 'asc');
        }])->find($id);
            
        $novel = [
            'id' => $rawNovel->id,
            'author_id' => $rawNovel->author_id,
            'status' => $rawNovel->status,
            'followers' => $rawNovel->followers,
            'number_of_chapters' => $rawNovel->number_of_chapters,
            'title' => $rawNovel->title,
            'description' => $rawNovel->description,
            'image_url' => $rawNovel->image_url,
            'tags' => $rawNovel->tags->map(function ($tag) {
                return ['id' => $tag->id, 'name' => $tag->tag_name];
            }),
            'author_name' => $rawNovel->user->name,
            'chapters' => $rawNovel->chapters->map(function ($chapter) {
                return [
                    'id' => $chapter->id,
                    'title' => $chapter->title,
                    'chapter_number' => $chapter->chapter_number,
                    'updated_at' => $chapter->updated_at->format('d M Y'),
                ];
            }),
        ];

        $isAuthor = Auth::user()->id === $novel['author_id'];
        return Inertia::render('Content/ProjectDetail', [
            'novel' => $novel,
            'isAuthor' => $isAuthor,
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
