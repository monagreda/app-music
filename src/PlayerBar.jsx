import ActualSong from "./components/Bar/ActualSong"
import Controls from "./components/Bar/Controls"
import ProgressBar from "./components/Bar/ProgressBar"
import Volume from "./components/Bar/Volume"

export default function PlayerBar({ isPlaying, togglePlay, currentSong }) {
    return (
        <div className=" h-24 bg-gray-950 border-t border-gray-800 flex items-center justify-between px-6 shadow-2xl">
            <ActualSong currentSong={currentSong} />
            <div className="flex flex-col items-center justify-center flex-1">
                <Controls isPlaying={isPlaying} togglePlay={togglePlay} />
                <ProgressBar currentSong={currentSong} />
            </div>
            <Volume />
        </div>
    )
}