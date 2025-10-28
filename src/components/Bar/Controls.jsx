import { Play, Pause, Shuffle, SkipBack, SkipForward, Repeat2 } from "lucide-react"
import { useState } from "react"

export default function Controls({ togglePlay, isPlaying }) {
    return (
        <div className="flex items-center space-x-6 mb-2">
            <Shuffle size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            <SkipBack size={24} className="text-gray-400 hover:text-white cursor-pointer" />
            <button onClick={togglePlay} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform shadow-lg">
                {isPlaying ? <Pause size={20} fill="black" /> : <Play size={20} fill="black" />}
            </button>
            <SkipForward size={24} className="text-gray-400 hover:text-white cursor-pointer" />
            <Repeat2 size={20} className="text-gray-400 hover:text-white cursor-pointer" />
        </div>
    )
}