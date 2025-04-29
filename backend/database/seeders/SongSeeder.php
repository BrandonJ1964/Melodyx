<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SongSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('songs')->insert([
            [
                'title' => 'Shape of You',
                'artist' => 'Ed Sheeran',
                'cover' => 'https://i.scdn.co/image/ab67616d0000b2734f0d5c8704e5fbf11f7b6e7d',
                'duration' => 240,
                'url' => 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
            ],
            [
                'title' => 'Blinding Lights',
                'artist' => 'The Weeknd',
                'cover' => 'https://i.scdn.co/image/ab67616d0000b273c1f6c4098a25ba98258cc5c1',
                'duration' => 200,
                'url' => 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
            ],
            [
                'title' => 'Levitating',
                'artist' => 'Dua Lipa',
                'cover' => 'https://i.scdn.co/image/ab67616d0000b273d0d99f86c2b03a76d4d4ef9f',
                'duration' => 215,
                'url' => 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
            ],
            [
                'title' => 'Dance Monkey',
                'artist' => 'Tones and I',
                'cover' => 'https://i.scdn.co/image/ab67616d0000b2731b459f08d2c9486b5d2b6320',
                'duration' => 210,
                'url' => 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
            ],
        ]);
    }
}
