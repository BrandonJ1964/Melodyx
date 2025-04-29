<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SongsGenresSeeder extends Seeder
{
    public function run(): void
    {
        // Relacionar canciones con géneros
        DB::table('songs_genres')->insert([
            [
                'song_id' => 1, // Shape of You
                'genre_id' => 1, // Pop
            ],
            [
                'song_id' => 2, // Blinding Lights
                'genre_id' => 1, // Pop
            ],
            [
                'song_id' => 2, // Blinding Lights
                'genre_id' => 5, // Electrónica
            ],
            [
                'song_id' => 3, // Levitating
                'genre_id' => 1, // Pop
            ],
            [
                'song_id' => 3, // Levitating
                'genre_id' => 5, // Electrónica
            ],
            [
                'song_id' => 4, // Dance Monkey
                'genre_id' => 1, // Pop
            ],
            [
                'song_id' => 4,
                'genre_id' => 7, // Indie
            ],
        ]);
    }
}
