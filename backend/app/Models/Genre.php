<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Genre extends Model
{
    use HasFactory;

    protected $fillable = ['name'];
    public $timestamps = false;

    public function songs()
    {
        return $this->belongsToMany(Song::class, 'songs_genres');
    }
}
