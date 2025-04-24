<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Favorite;

class FavoriteController extends Controller
{
    public function index($userId)
    {
        return Favorite::with('song')->where('user_id', $userId)->get();
    }

    public function store(Request $request)
    {
        return Favorite::create([
            'user_id' => $request->user_id,
            'song_id' => $request->song_id,
        ]);
    }

    public function destroy($id)
    {
        $favorite = Favorite::findOrFail($id);
        $favorite->delete();

        return response()->json(['message' => 'Eliminado']);
    }
}
