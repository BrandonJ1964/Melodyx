<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = ['name', 'email', 'password'];

    public function playlists()
    {
        return $this->hasMany(Playlist::class);
    }

    public function favorites()
    {
        return $this->hasMany(Favorite::class);
    }
}

