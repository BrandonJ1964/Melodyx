import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { name: 'Inicio', path: '/', icon: '🏠' },
    { name: 'Playlist', path: '/playlist', icon: '🎵' },
    { name: 'Favoritos', path: '/favoritos', icon: '❤️' },
    { name: 'Albums', path: '/albums', icon: '💽' },
    { name: 'Perfil', path: '/perfil', icon: '👤' },
  ];

  return (
    <aside className="w-60 bg-gray-800 p-6 flex flex-col space-y-6">
      <h1 className="text-2xl font-bold text-white mb-8">🎶 MelodyX</h1>

      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex items-center gap-3 p-2 rounded-lg transition 
              ${location.pathname === link.path ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}
          >
            <span className="text-xl">{link.icon}</span>
            <span className="text-md font-medium">{link.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
