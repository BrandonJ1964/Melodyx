import { useState, useRef } from 'react';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setVolume(newVolume);
  };

  // De momento mostramos un mensaje mientras no haya canción cargada
  if (!currentSong) {
    return (
      <div className="bg-gray-800 p-4 flex justify-center text-gray-400">
        No hay canción seleccionada
      </div>
    );
  }

  return (
    <div className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src={currentSong.cover} alt={currentSong.title} className="w-12 h-12 object-cover rounded" />
        <div>
          <h3 className="text-white">{currentSong.title}</h3>
          <p className="text-gray-400 text-sm">{currentSong.artist}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={togglePlay}
          className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition text-white"
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

      <audio ref={audioRef} src={currentSong?.url} autoPlay />
    </div>
  );
};

export default Player;

