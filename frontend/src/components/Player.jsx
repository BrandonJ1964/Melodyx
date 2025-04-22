import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { usePlayer } from '../context/PlayerContext';

export default function Player() {
  const { currentSong } = usePlayer();

  return (
    <div className="w-full bg-gray-800 border-t border-gray-700">
      <AudioPlayer
        autoPlay
        src={currentSong?.url}
        onPlay={() => console.log('Reproduciendo:', currentSong?.title)}
        showJumpControls={false}
        customAdditionalControls={[]}
        layout="horizontal"
      />
    </div>
  );
}

