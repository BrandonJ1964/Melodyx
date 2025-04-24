import { createContext, useContext, useState } from 'react';

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [currentSong, setCurrentSong] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const toggleFavorite = (song) => {
    setFavorites((prev) =>
      prev.find((s) => s.id === song.id)
        ? prev.filter((s) => s.id !== song.id)
        : [...prev, song]
    );
  };

  const isFavorite = (songId) => {
    return favorites.some((song) => song.id === songId);
  };

  const togglePlaylist = (song) => {
    setPlaylist((prev) =>
      prev.find((s) => s.id === song.id)
        ? prev.filter((s) => s.id !== song.id)
        : [...prev, song]
    );
  };

  const isInPlaylist = (songId) => {
    return playlist.some((song) => song.id === songId);
  };

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        setCurrentSong,
        favorites,
        toggleFavorite,
        isFavorite,
        playlist,
        togglePlaylist,
        isInPlaylist,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  return useContext(PlayerContext);
}
