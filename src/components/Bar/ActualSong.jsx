export default function ActualSong({ currentSong }) {
    const albumArtSrc = currentSong?.albumArt || 'https://placehold.co/60x60/374151/ffffff?text=🎶';
    const songTitle = currentSong?.title || 'Título Desconocido';
    const songArtist = currentSong?.artist || 'Artista';
    return (
        <div className="flex items-center space-x-4 w-1/4">
            <img
                src={albumArtSrc}
                alt="Album Art"
                className="w-14 h-14 rounded shadow-lg"
            />
            <div>
                <p className="text-white font-semibold truncate hover:underline cursor-pointer text-left">
                    {songTitle}</p>
                <p className="text-gray-400 text-sm truncate hover:underline cursor-pointer text-left">
                    {songArtist}</p>
            </div>
        </div>
    )
}