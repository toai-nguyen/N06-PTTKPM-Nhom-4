<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Chapter;
use App\Models\Novel;
use Illuminate\Support\Facades\Auth;

class ChapterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($novel_id)
    {
        //find novel by id
        $novel = Novel::find($novel_id);
        if (!$novel) {
            return redirect()->route('home')->with('error', 'Novel not found.');
        }
        //find the last chapter number
        $lastChapter = Chapter::where('novel_id', $novel_id)
            ->orderBy('chapter_number', 'desc')
            ->first();
        $chapter_number = $lastChapter ? $lastChapter->chapter_number + 1 : 1;
        // return only chapter number 
        return Inertia::render('Content/CreateChapter', [
            'chapterNumber' => $chapter_number,
            'novelId' => $novel_id,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = request()->validate([
            'title' => 'required',
            'content' => 'required',
            'novel_id' => 'required',
            'chapter_number' => 'required|numeric',
        ]);
        $existingChapter = Chapter::where('novel_id', $validated['novel_id'])
        ->where('chapter_number', $validated['chapter_number'])
        ->first();
        
        if ($existingChapter) {
            return back()->withErrors([
                'chapter_number' => 'Chapter number already exists for this novel.'
            ]);
        }
        $novel = Novel::find($validated['novel_id']);
        $chapter = Chapter::create([
            'title' => $validated['title'],
            'content' => $validated['content'],
            'novel_id' => $validated['novel_id'],
            'author_id' => Auth::user()->id,
            'chapter_number' => $validated['chapter_number'],
        ]);
        $novel->increment('number_of_chapters');
        return redirect()->route('view-novel', $novel->id)->with('success', 'Chapter created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $novel_id, string $chapter_id)
    {
        $novel = Novel::find($novel_id);
        if (!$novel) {
            return redirect()->route('home')->with('error', 'Novel not found.');
        }
        $chapterData = Chapter::where('id', $chapter_id)
        ->where('novel_id', $novel_id)  
        ->first();
        $previousChapter = Chapter::where('novel_id', $novel_id)
            ->where('chapter_number', '<', $chapterData->chapter_number)
            ->orderBy('chapter_number', 'desc')
            ->first();

        // Tìm chapter kế tiếp
        $nextChapter = Chapter::where('novel_id', $novel_id)
            ->where('chapter_number', '>', $chapterData->chapter_number)
            ->orderBy('chapter_number', 'asc')
            ->first();
        $chapter = [
            'id' => $chapterData->id,
            'novel_id' => $chapterData->novel_id,
            'title' => $chapterData->title,
            'content' => $chapterData->content,
            'chapter_number' => $chapterData->chapter_number,
            'updated_at' => $chapterData->updated_at->format('d M Y'),
            'previousChapter' => $previousChapter ? $previousChapter->id : null,
            'nextChapter' => $nextChapter ? $nextChapter->id : null
        ];
        return Inertia::render('Content/ChapterView', [
            'chapter' => $chapter,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
