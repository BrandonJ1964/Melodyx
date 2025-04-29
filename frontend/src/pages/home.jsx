import { useEffect, useState, useRef } from 'react';
import api from '../api/axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  const userId = 1; // 🔥 Simulando usuario ID 1

  useEffect(() => {
    loadSongs();
    loadFavorites();
  }, []);

  const loadSongs = async () => {
    try {
      const res = await api.get('/songs');
      setSongs(res.data);
    } catch (error) {
      console.error('Error cargando canciones', error);
    }
  };

  const loadFavorites = async () => {
    try {
      const res = await api.get(`/favorites/${userId}`);
      const favoriteSongIds = res.data.map((fav) => fav.song_id);
      setFavorites(favoriteSongIds);
    } catch (error) {
      console.error('Error cargando favoritos', error);
    }
  };

  const toggleFavorite = async (songId) => {
    if (favorites.includes(songId)) {
      // Eliminar favorito
      try {
        const res = await api.get(`/favorites/${userId}`);
        const favorite = res.data.find((f) => f.song_id === songId);

        if (favorite) {
          await api.delete(`/favorites/${favorite.id}`);
          loadFavorites();
        }
      } catch (error) {
        console.error('Error eliminando favorito', error);
      }
    } else {
      // Agregar favorito
      try {
        await api.post('/favorites', {
          user_id: userId,
          song_id: songId,
        });
        loadFavorites();
      } catch (error) {
        console.error('Error agregando favorito', error);
      }
    }
  };

  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <div className="p-6 space-y-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">🎵 Todas las canciones</h1>
        <Link to="/favorites" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          ❤️ Ver Favoritos
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {songs.map((song) => (
          <div key={song.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img 
              src={song.cover} 
              alt={song.title} 
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold">{song.title}</h2>
            <p className="text-gray-600 mb-2">{song.artist}</p>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Géneros:</strong> {song.genres.map((genre) => genre.name).join(', ')}
            </p>

            {/* Botón de Favorito */}
            <button 
              onClick={() => toggleFavorite(song.id)}
              className={`w-full py-2 rounded mb-2 ${favorites.includes(song.id) ? 'bg-red-500 text-white' : 'bg-gray-300 text-black'} transition`}
            >
              {favorites.includes(song.id) ? '🧡 Quitar de Favoritos' : '❤️ Añadir a Favoritos'}
            </button>

            <button 
              onClick={() => playSong(song)}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              ▶️ Reproducir
            </button>
          </div>
        ))}
      </div>

      {/* Mini Reproductor */}
      {currentSong && (
        <div className="fixed bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg p-3 flex items-center justify-between gap-4">
          <img 
            src={currentSong.cover} 
            alt={currentSong.title} 
            className="w-14 h-14 object-cover rounded"
          />

          <div className="flex-1">
            <h3 className="text-md font-semibold truncate">{currentSong.title}</h3>
            <p className="text-xs text-gray-500 truncate">{currentSong.artist}</p>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={togglePlay}
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>

            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24"
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
            <div
              className="h-1 bg-blue-600"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>

          <audio 
            ref={audioRef} 
            src={currentSong.url} 
            onEnded={() => setIsPlaying(false)}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            autoPlay
          />
        </div>
      )}
    </div>
  );
};

export default Home;

