import { useState } from "react";
import {juegos} from '../../data/juegos'
import SearchBar from "../../components/SearchBar";
import { ItemList } from "../../components/ItemList";


export const Tienda = () => {
    // Búsqueda
    const [busqueda, setBusqueda] = useState("");
    const juegosFiltrados = juegos.filter((juego) =>
        juego.titulo.toLowerCase().includes(busqueda.trim().toLowerCase()),
    );

    return (
        <>
            {/* Contenido principal */}
            <div className="flex-1">
                <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />
                <ItemList
                juegos={juegosFiltrados}
                busqueda={busqueda}
                />
            </div>
        </>
    )
}