import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Home from './pages/Home';
import Playlist from './pages/Playlist';
import Favorites from './pages/Favorites';
import Albums from './pages/Albums';
import Profile from './pages/Profile';

export default function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/favoritos" element={<Favorites />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/perfil" element={<Profile />} />
          </Routes>
        </main>
      </div>
      <Player />
    </div>
  );
}
