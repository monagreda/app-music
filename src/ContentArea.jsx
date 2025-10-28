import SongList from "./components/songs/SongList"


export default function ContentArea({ songs, onSelectSong }) {
    return (
        <div className="flex-1 overflow-y-auto bg-gray-900">
            {/* Barra Superior de Contenido (Placeholder) */}
            <header className="sticky top-0 bg-gray-900/90 backdrop-blur-sm z-10 p-4 flex justify-between items-center border-b border-gray-800">
                <div className="flex space-x-4">
                    <button className="p-2 bg-black rounded-full text-white opacity-50 cursor-not-allowed">{'<'}</button>
                    <button className="p-2 bg-black rounded-full text-white opacity-50 cursor-not-allowed">{'>'}</button>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="bg-white text-black font-semibold px-4 py-2 rounded-full hover:scale-105 transition-transform">Actualizar</button>
                </div>
            </header>
            <SongList songs={songs} onSelectSong={onSelectSong} />

        </div>
    )
}