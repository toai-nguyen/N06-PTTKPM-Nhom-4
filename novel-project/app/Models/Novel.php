<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Novel extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'cover_image',
        'author',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function chapters()
    {
        return $this->hasMany(Chapter::class);
    }
}

