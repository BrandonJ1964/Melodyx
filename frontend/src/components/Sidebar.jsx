import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-60 bg-gray-800 p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-4">🎵 MyMusicApp</h2>
      <nav className="space-y-2">
        <Link to="/" className="block hover:text-pink-400">Inicio</Link>
        <Link to="/playlist" className="block hover:text-pink-400">Playlist</Link>
        <Link to="/favoritos" className="block hover:text-pink-400">Favoritos</Link>
        <Link to="/albums" className="block hover:text-pink-400">Álbumes</Link>
        <Link to="/perfil" className="block hover:text-pink-400">Perfil</Link>
      </nav>
    </aside>
  );
}