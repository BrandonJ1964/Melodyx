import { usePlayer } from '../context/PlayerContext';

export default function Profile() {
  const { favorites, playlist } = usePlayer();

  const mockUser = {
    name: 'Brandon Ordinola',
    email: 'brandon@email.com',
    avatar: 'https://i.pravatar.cc/100?u=brandon',
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Perfil</h1>

      <div className="flex items-center gap-4 mb-6 bg-gray-800 p-4 rounded-lg">
        <img
          src={mockUser.avatar}
          alt="avatar"
          className="w-16 h-16 rounded-full border-2 border-pink-500"
        />
        <div>
          <p className="text-lg font-semibold">{mockUser.name}</p>
          <p className="text-sm text-gray-400">{mockUser.email}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-lg">🧡 Favoritos</p>
          <p className="text-2xl font-bold">{favorites.length}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-lg">📁 Playlist</p>
          <p className="text-2xl font-bold">{playlist.length}</p>
        </div>
      </div>
    </div>
  );
}
