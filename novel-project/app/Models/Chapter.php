<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Chapter extends Model
{
    protected $fillable = [
        'title',
        'content',
        'novel_id',
        'user_id',
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
