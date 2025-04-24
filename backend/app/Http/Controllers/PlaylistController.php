<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Playlist;

class PlaylistController extends Controller
{
    public function index($userId)
    {
        return Playlist::with('songs')->where('user_id', $userId)->get();
    }

    public function store(Request $request)
    {
        return Playlist::create([
            'name' => $request->name,
            'user_id' => $request->user_id,
        ]);
    }

    public function addSong(Request $request)
    {
        $playlist = Playlist::findOrFail($request->playlist_id);
        $playlist->songs()->attach($request->song_id);

        return response()->json(['message' => 'Canción agregada']);
    }

    public function removeSong(Request $request)
    {
        $playlist = Playlist::findOrFail($request->playlist_id);
        $playlist->songs()->detach($request->song_id);

        return response()->json(['message' => 'Canción eliminada']);
    }
}
