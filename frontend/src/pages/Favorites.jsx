import { usePlayer } from '../context/PlayerContext';

export default function Favorites() {
  const { favorites, setCurrentSong, toggleFavorite } = usePlayer();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Tus favoritos</h1>
      {favorites.length === 0 ? (
        <p>No tienes canciones favoritas aún 😔</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((song) => (
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
                <button onClick={() => toggleFavorite(song)}>
                  🧡
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
