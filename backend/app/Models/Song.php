<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Song extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'artist', 'url', 'cover'];

    public function genres()
    {
        return $this->belongsToMany(Genre::class, 'songs_genres');
    }

    public function playlists()
    {
        return $this->belongsToMany(Playlist::class);
    }

    public function favorites()
    {
        return $this->hasMany(Favorite::class);
    }
}
