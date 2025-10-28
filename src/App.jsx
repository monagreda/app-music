import './App.css'
import SideBar from './SideBar'
import ContentArea from './ContentArea';
import PlayerBar from './PlayerBar';
import { useState } from 'react';

const mockPlaylists = [
  { id: 1, title: 'Pop Chill', image: 'https://placehold.co/50x50/1e293b/ffffff?text=PCH' },
  { id: 2, title: 'Lo-Fi Beats', image: 'https://placehold.co/50x50/374151/ffffff?text=LOFI' },
  { id: 3, title: 'Rock Essentials', image: 'https://placehold.co/50x50/4b5563/ffffff?text=ROCK' },
];

const mockSongs = [
  { id: 101, title: 'Running Up That Hill', artist: 'Kate Bush', album: 'Hounds of Love', duration: '5:03', isLiked: true },
  { id: 102, title: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera', duration: '5:55', isLiked: false },
  { id: 103, title: 'As It Was', artist: 'Harry Styles', album: 'Harrys House', duration: '2:47', isLiked: true },
  { id: 104, title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', duration: '3:20', isLiked: false },
  { id: 105, title: 'Shape of You', artist: 'Ed Sheeran', album: '÷', duration: '3:53', isLiked: false },
];

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(mockSongs[0])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const handleSongSelect = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    console.log(`Reproduciendo: ${song.title}`);
  }

  return (
    <div className='flex flex-col h-screen bg-gray-900'>
      <div className='flex flex-1 overflow-hidden'>
        <SideBar playlists={mockPlaylists} />
        <ContentArea songs={mockSongs} onSelectSong={handleSongSelect} />
      </div>

      <PlayerBar
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        currentSong={currentSong} />
    </div>
  )
}


