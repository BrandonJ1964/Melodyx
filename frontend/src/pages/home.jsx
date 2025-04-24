import { useEffect, useState } from 'react';
import { usePlayer } from '../context/PlayerContext';
import api from '../api/axios';

export default function Home() {
  const { setCurrentSong, toggleFavorite, isFavorite, togglePlaylist, isInPlaylist } = usePlayer();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    api.get('/songs')
      .then((res) => setSongs(res.data))
      .catch((err) => console.error('Error al cargar canciones:', err));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Canciones populares</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {songs.map((song) => (
          <div
            key={song.id}
            className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition"
          >
            <img
              src={song.cover}
              alt={song.title}
              className="w-full h-40 object-cover rounded-lg mb-4 cursor-pointer"
              onClick={() => setCurrentSong(song)}
            />
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{song.title}</h2>
                <p className="text-sm text-gray-400">{song.artist}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => toggleFavorite(song)}>
                  {isFavorite(song.id) ? '🧡' : '🤍'}
                </button>
                <button onClick={() => togglePlaylist(song)}>
                  {isInPlaylist(song.id) ? '📁✔️' : '📁➕'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
