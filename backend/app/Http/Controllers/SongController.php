<?php

namespace App\Http\Controllers;

use App\Models\Song;

class SongController extends Controller
{
    public function index()
    {
        return Song::with('genres')->get();
    }

    public function show($id)
    {
        return Song::with('genres')->findOrFail($id);
    }
}
