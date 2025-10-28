import List from "./List"

export default function SongList({ songs, onSelectSong }) {
    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-white mb-6 text-left">Lista Recomendada</h2>
            <List songs={songs} onSelectSong={onSelectSong} />

        </div>

    )
}