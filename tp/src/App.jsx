import { ItemList } from "./components/ItemList";
import ListPanel from "./components/ListPanel";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { juegos } from "./data/juegos";
import { Footer } from "./components/Footer";
import useWatchList from "./hooks/useWatchList";
import useToggle from "./hooks/useToggle";

function App() {

  const { miListaDeJuegos, toggleJuego, vaciarLista } = useWatchList()
  const [isPanelOpen, togglePanel] = useToggle(false)

  // const [isPanelOpen, setIsPanelOpen] = useState(false);

  // Búsqueda
  const [busqueda, setBusqueda] = useState("");
  const juegosFiltrados = juegos.filter((juego) =>
    juego.titulo.toLowerCase().includes(busqueda.trim().toLowerCase()),
  );

  return (
    <div className="min-h-screen flex flex-col bg-base text-text-main">

      {/* Navbar fijo en la parte superior */}
      <Navbar
        onAbrirPanel={togglePanel}
        // onAbrirPanel={() => setIsPanelOpen(true)}
        cantidadItems={miListaDeJuegos.length}
      />

      {/* Contenido principal que crece para empujar el footer */}
      <main className="flex-1">
        <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />
        <ItemList
          juegos={juegosFiltrados}
          miListaDeJuegos={miListaDeJuegos}
          toggleJuego={toggleJuego}
          busqueda={busqueda}
        />
      </main>

      {/* Panel lateral "Mi Lista" — drawer fijo, se monta sobre todo */}
      {isPanelOpen && (
        <ListPanel
          miListaDeJuegos={miListaDeJuegos}
          onClose={togglePanel}
          // onClose={() => setIsPanelOpen(false)}
          quitarJuego={toggleJuego}
          vaciarLista={vaciarLista}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
