import ListPanel from "./components/ListPanel";
import { Navbar } from "./components/layout/Navbar";
import { useState } from "react";
import { Footer } from "./components/layout/Footer";
import useToggle from "./hooks/useToggle";

import {Tienda}  from "./components/views/Tienda"
import {Checkout} from "./components/views/Checkout"
import {Confirmacion} from "./components/views/Confirmacion"
import { VISTAS } from "./data/vistas";


function App() {
  const [vista, setVista] = useState(VISTAS.TIENDA);
  const [isPanelOpen, togglePanel] = useToggle(false)
  const [datosCompra, setDatosCompra] = useState(null);
  return (
    <div className="min-h-screen flex flex-col bg-base text-text-main">

      {/* Navbar fijo en la parte superior */}
      <Navbar
        onAbrirPanel={togglePanel}
      />

      {/* Contenido principal */}
      <main>
        {vista === VISTAS.TIENDA && <Tienda />}
        {vista === VISTAS.CHECKOUT && (
          <Checkout setVista={setVista} setDatosCompra={setDatosCompra} />
        )}
        {vista === VISTAS.CONFIRMACION && (
          <Confirmacion setVista={setVista} datosCompra={datosCompra} />
        )}
      </main>


      {/* Panel lateral "Mi Lista" */}
      {isPanelOpen && (
        <ListPanel
          onClose={togglePanel}
          setVista = {setVista}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
