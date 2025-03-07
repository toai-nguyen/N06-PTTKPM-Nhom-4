<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Novel;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Models\Tag; 
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use App\Models\Chapter;

class NovelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //home page: show top 5 novels with most followers, 15 random novels
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

        $latestChapters = Chapter::with('novel', 'novel.user')
        ->orderBy('updated_at', 'desc')
        ->take(12)
        ->get()
        ->map(function ($chapter) {
            return [
                'chapter_id' => $chapter->id,
                'chapter_number' => $chapter->chapter_number,
                'novel_id' => $chapter->novel->id,
                'author_id' => $chapter->novel->author_id,
                'title' => $chapter->novel->title,
                'image_url' => $chapter->novel->image_url,
                'author_name' => $chapter->novel->user->name,
            ];
        });
        //find 12 novels with the lastest chapter updated

        // $lastestNovels = Novel::orderBy('created_at', 'desc')
        // ->take(12)
        // ->get()
        // ->map(function ($novel){
        //     return [
        //         'id' => $novel->id,
        //         'title' => $novel->title,
        //         'image_url' => $novel->image_url,
        //         'author_name' => $novel->user->name,
        //     ];
        // });
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
            'latestChapters' => $latestChapters,
            'randomNovels' => $randomNovels]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $tags = Tag::all()
        ->map(function ($tag) {
            return [
                'id' => $tag->id, 
                'name' => $tag->tag_name
            ];
        });
        return Inertia::render('Content/CreateProject' , ['tags' => $tags]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
    
        $validateRequest = $request->validate([
            'title' => 'required|max:255',
            'description' => 'required',
            'tags' => 'required|array|min:1',
            'image' => 'required|image|max:5012', // 5MB
        ]);
        
        try {
            $image = $request->file('image');
            $cloudinaryImage = cloudinary()->upload($image->getRealPath(), [
                'folder' => 'novel_project/cover_image',
                'transformation' => [
                    'width' => 440,
                    'height' => 620,
                    'crop' => 'fill',
                    'quality' => 'auto',
                    'fetch_format' => 'auto',
                ],
            ]);
            
    
            $url = $cloudinaryImage->getSecurePath();
            $public_id = $cloudinaryImage->getPublicId();
    
            $novel = Novel::create([
                'title' => $validateRequest['title'],
                'description' => $validateRequest['description'],
                'author_id' => Auth::user()->id,
                'image_url' => $url,
                'image_public_id' => $public_id,
                'status' => 'ongoing',
                'followers' => 0,
                'number_of_chapters' => 0,
            ]);
            //lưu tag vào bảng tag_novel
            $novel->tags()->attach($validateRequest['tags']);
            
            return redirect()->route('view-novel', $novel -> id )->with('success', 'Novel created successfully.');
        } catch (\Exception $e) {
            Log::error('Error processing request:', ['message' => $e->getMessage()]);
            return redirect()->back()->withErrors(['image' => 'Failed to upload image to Cloudinary. Please try again.']);
        }
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
                    'novel_id' => $chapter->novel_id,
                    'chapter_number' => $chapter->chapter_number,
                    'updated_at' => $chapter->updated_at->format('d M Y'),
                ];
            }),
        ];
        if (Auth::user()) {
            $isAuthor = Auth::user()->id === $novel['author_id'];
        }
        else {
            $isAuthor = false;
        }
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
        $novelData = Novel::with('tags')->find($id);
        if (Auth::user()->id !== $novelData->author_id) {
            return redirect()->route('home')->with('error', 'You do not have permission to edit this novel.');
        }
        $novel = [
            'id' => $novelData->id,
            'title' => $novelData->title,
            'description' => $novelData->description,
            'image_url' => $novelData->image_url,
            'status' => $novelData->status,
            'tags' => $novelData->tags->map(function ($tag) {
                return ['id' => $tag->id, 'name' => $tag->tag_name];
            }),
        ];
        $tags = Tag::all()
        ->map(function ($tag) {
            return [
                'id' => $tag->id, 
                'name' => $tag->tag_name
            ];
        });
        return Inertia::render('Content/EditProject' , ['novel' => $novel, 'tags' => $tags]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validateRequest = $request->validate([
            'title' => 'required|string|min:1|max:255',
            'description' => 'required|string|min:1',   
            'status' => 'required|in:ongoing,completed',
            'tags' => 'required|array|min:1',           
            'image' => 'nullable|image|max:5012',       // Không bắt buộc, nhưng nếu có phải là ảnh
        ]);
        
        $novel = Novel::find($id);
        
        // Kiểm tra quyền sở hữu
        if (Auth::user()->id !== $novel->author_id) {
            return redirect()->route('home')->with('error', 'You do not have permission to edit this novel.');
        }
        
        $updateData = [
            'title' => $validateRequest['title'],
            'description' => $validateRequest['description'],
            'status' => $validateRequest['status'],
        ];
        
        // Chỉ xử lý ảnh nếu người dùng đã tải lên ảnh mới
        if ($request->hasFile('image')) {
            // Xóa ảnh cũ trên Cloudinary nếu có
            if ($novel->image_public_id) {
                try {
                    Cloudinary::destroy($novel->image_public_id);
                } catch (\Exception $e) {
                    Log::warning('Failed to delete old image: ' . $e->getMessage());
                    // Tiếp tục xử lý, không cần dừng lại vì lỗi xóa ảnh cũ
                }
            }
            
            // Upload ảnh mới
            try {
                $image = $request->file('image');
                $cloudinaryImage = cloudinary()->upload($image->getRealPath(), [
                    'folder' => 'novel_project/cover_image',
                    'transformation' => [
                        'width' => 440,
                        'height' => 620,
                        'crop' => 'fill',
                        'quality' => 'auto',
                        'fetch_format' => 'auto',
                    ],
                ]);
                
                $updateData['image_url'] = $cloudinaryImage->getSecurePath();
                $updateData['image_public_id'] = $cloudinaryImage->getPublicId();
            } catch (\Exception $e) {
                Log::error('Failed to upload new image: ' . $e->getMessage());
                return redirect()->back()->withErrors(['image' => 'Failed to upload image: ' . $e->getMessage()]);
            }
        }
        
        try {
            // Cập nhật novel
            $novel->update($updateData);
            
            // Cập nhật tags
            $novel->tags()->sync($validateRequest['tags']);
            
            return redirect()->route('view-novel', $id)->with('success', 'Novel updated successfully.');
        } catch (\Exception $e) {
            Log::error('Failed to update novel: ' . $e->getMessage());
            return redirect()->back()->withErrors(['general' => 'Failed to update novel: ' . $e->getMessage()]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $novel = Novel::find($id);
        if (Auth::user()->id !== $novel->author_id) {
            return redirect()->route('home')->with('error', 'You do not have permission to delete this novel.');
        }
        // xóa ảnh trên cloudinary
        if ($novel->image_public_id) {
            try {
                Cloudinary::destroy($novel->image_public_id);
            } catch (\Exception $e) {
                Log::warning('Failed to delete image: ' . $e->getMessage());
            }
        }
        //xóa tags
        $novel->tags()->detach();
        //xóa người theo dõi ở bảng user_follows
        $novel->followers()->detach();
        //xóa các chapter
        $novel->chapters()->delete();
        //xóa novel
        $novel->delete();

        return redirect()->route('home')->with('success', 'Novel deleted successfully.');
    }
}
