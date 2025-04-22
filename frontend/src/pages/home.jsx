import { usePlayer } from '../context/PlayerContext';

const songs = [
  {
    title: 'Canción 1',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    title: 'Canción 2',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    title: 'Canción 3',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
];

export default function Home() {
  const { setCurrentSong } = usePlayer();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Canciones populares</h1>
      <ul className="space-y-4">
        {songs.map((song, index) => (
          <li
            key={index}
            onClick={() => setCurrentSong(song)}
            className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition cursor-pointer"
          >
            🎧 {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
