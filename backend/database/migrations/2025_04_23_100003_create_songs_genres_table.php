<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('songs_genres', function (Blueprint $table) {
            $table->foreignId('song_id')->constrained()->onDelete('cascade');
            $table->foreignId('genre_id')->constrained()->onDelete('cascade');
            $table->primary(['song_id', 'genre_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('songs_genres');
    }
};
