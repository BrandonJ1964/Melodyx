<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GenreSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('genres')->insertOrIgnore([
            ['name' => 'Pop'],
            ['name' => 'Rock'],
            ['name' => 'Hip-Hop'],
            ['name' => 'Reggaeton'],
            ['name' => 'Electrónica'],
            ['name' => 'R&B'],
            ['name' => 'Indie'],
            ['name' => 'Clásica'],
        ]);
    }
}
