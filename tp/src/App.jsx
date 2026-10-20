import ListPanel from "./components/ListPanel";
import { Navbar } from "./components/layout/Navbar";
import { useState } from "react";
import { Footer } from "./components/layout/Footer";
import useWatchList from "./hooks/useWatchList";
import useToggle from "./hooks/useToggle";

import {Tienda}  from "./components/views/Tienda"
import { VISTAS } from "./data/vistas";


function App() {
  const [vista, setVista] = useState(VISTAS.TIENDA);
  const { miListaDeJuegos, toggleJuego, vaciarLista } = useWatchList()
  const [isPanelOpen, togglePanel] = useToggle(false)

  return (
    <div className="min-h-screen flex flex-col bg-base text-text-main">

      {/* Navbar fijo en la parte superior */}
      <Navbar
        onAbrirPanel={togglePanel}
        cantidadItems={miListaDeJuegos.length}
      />

      {/* Contenido principal */}
      
      <main>
        <Tienda
          miListaDeJuegos={miListaDeJuegos}
          toggleJuego={toggleJuego}
        />
      </main>



      {/* Panel lateral "Mi Lista" — drawer fijo, se monta sobre todo */}
      {isPanelOpen && (
        <ListPanel
          miListaDeJuegos={miListaDeJuegos}
          onClose={togglePanel}
          quitarJuego={toggleJuego}
          vaciarLista={vaciarLista}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
