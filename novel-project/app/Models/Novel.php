<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Novel extends Model
{
    use HasFactory;
    protected $fillable = [
        'author_id',
        'title',
        'description',
        'image_url',
        'image_public_id',
        'status',
        'followers',
        'number_of_chapters',
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'author_id');
    }
    public function followers()
    {
        return $this->belongsToMany(User::class, 'user_follows')->withTimestamps();
    }
    public function chapters()
    {
        return $this->hasMany(Chapter::class);
    }
    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'novel_tags');
    }
}

