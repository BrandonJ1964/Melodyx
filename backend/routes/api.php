<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\SongController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\PlaylistController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Aquí definimos todas las rutas de la API que serán consumidas por el frontend.
| Estas rutas están dentro del middleware "api" que se aplica automáticamente.
|
*/

// Obtener todas las canciones
Route::get('/songs', [SongController::class, 'index']);

// Obtener una canción específica con sus géneros
Route::get('/songs/{id}', [SongController::class, 'show']);

// FAVORITOS

// Obtener favoritos de un usuario
Route::get('/favorites/{userId}', [FavoriteController::class, 'index']);

// Agregar una canción a favoritos
Route::post('/favorites', [FavoriteController::class, 'store']);

// Eliminar un favorito
Route::delete('/favorites/{id}', [FavoriteController::class, 'destroy']);

// 📁 PLAYLISTS

// 📥 Obtener playlists de un usuario
Route::get('/playlists/{userId}', [PlaylistController::class, 'index']);

// ➕ Crear nueva playlist
Route::post('/playlists', [PlaylistController::class, 'store']);

// ➕ Agregar canción a playlist
Route::post('/playlists/add-song', [PlaylistController::class, 'addSong']);

// ❌ Quitar canción de playlist
Route::post('/playlists/remove-song', [PlaylistController::class, 'removeSong']);
