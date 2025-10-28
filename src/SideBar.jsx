import { Home, Search, Music } from "lucide-react"
import NavItem from "./components/sidebar/NavItem"
import Library from "./components/sidebar/Library"

export default function SideBar({ playlists }) {
    //sidebar
    return (
        <div className="w-64 h-screen p-4 bg-black text-white flex flex-col space-y-6">

            {/* logo y titulo */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-white mb-4">🎵 MúsicApp</h1>
            </div>

            {/* Navegacion principal */}
            <div className="space-y-1">
                <NavItem icon={Home} label="Inicio" isActive={true} />
                <NavItem icon={Search} label="Buscar" />
            </div>
            <Library playlists={playlists} />
        </div>

    )
}