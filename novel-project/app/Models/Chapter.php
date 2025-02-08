<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Chapter extends Model
{
    protected $fillable = [
        'title',
        'content',
        'chapter_number',
    ];
    public function novel()
    {
        return $this->belongsTo(Novel::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
