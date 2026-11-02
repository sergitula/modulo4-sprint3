import logoJuego from '../assets/juego.png'
import {formatearPrecio} from '../utils/formato'
import { useCarritoContext } from '../context/CarritoContext';

const ListPanel = ({ onClose }) => {
  const { carrito, total, cantidadTotal, quitarDelCarrito, vaciarCarrito, cambiarCantidad } = useCarritoContext();

  return (
    <>
      {/* Overlay oscuro */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel lateral */}
      <aside className="
        fixed top-0 right-0 z-50
        h-full w-full max-w-sm
        bg-surface
        border-l border-white/10
        flex flex-col
        shadow-2xl
      ">

        {/* Cabecera */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <h2 className="text-text-main font-bold text-base">Mi Lista</h2>
            {cantidadTotal > 0 && (
              <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
                {cantidadTotal} {cantidadTotal === 1 ? 'título' : 'títulos'}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-text-muted hover:text-text-main transition-colors text-xl leading-none cursor-pointer"
            aria-label="Cerrar panel"
          >
            ✕
          </button>
        </div>

        {/* Contenido scrolleable */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {carrito.length === 0 ? (
            /* Estado vacío */
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12">
              <span className="text-5xl">🎮</span>
              <p className="text-text-main font-semibold">Tu carrito está vacío</p>
              <p className="text-text-muted text-sm max-w-xs">
                Explorá el catálogo y agregá los títulos que quieras comprar.
              </p>
              <button
                onClick={onClose}
                className="mt-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors cursor-pointer"
              >
                Explorar catálogo
              </button>
            </div>
          ) : (
            /* Lista de juegos */
            <ul className="flex flex-col gap-3">
              {carrito.map((juego) => (
                <li
                  key={juego.id}
                  className="flex items-center gap-3 bg-base rounded-xl p-3 border border-white/5"
                >
                  {/* Miniatura */}
                  <img
                    src={logoJuego}
                    alt={juego.titulo}
                    className="w-12 h-12 rounded-lg object-cover shrink-0 bg-black/20"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-text-main text-sm font-semibold truncate">
                      {juego.titulo}
                    </p>
                    <p className="text-text-muted text-xs mt-0.5">
                      {juego.genero}
                    </p>
                    <p className="text-primary font-bold text-sm mt-0.5">
                      {formatearPrecio(juego.precio)}
                    </p>
                    {/* Agregado de controles + y - */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center bg-black/20 rounded-lg border border-white/10">
                        <button
                          onClick={() => cambiarCantidad(juego.id, -1)}
                          className="px-2.5 py-1 text-text-muted hover:text-white transition-colors"
                        > - </button>
                        <span className="text-xs font-bold w-4 text-center">
                          {juego.cantidad}
                        </span>
                        <button
                          onClick={() => cambiarCantidad(juego.id, 1)}
                          disabled={juego.cantidad >= juego.stock}
                          className="px-2.5 py-1 text-text-muted hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        > + </button>
                      </div>
                    </div>

                  </div>


                  {/* Botón quitar */}
                  <button
                    onClick={() => quitarDelCarrito(juego.id)}
                    className="text-text-muted hover:text-danger transition-colors shrink-0 text-lg leading-none cursor-pointer"
                    aria-label={`Quitar ${juego.titulo}`}
                  >
                    🗑
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer del panel — visible si hay items */}
        {carrito.length > 0 && (
          <div className="shrink-0 border-t border-white/10 px-5 py-4 flex flex-col gap-3">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-text-muted text-sm">Subtotal en carrito:</span>
              <span className="text-text-main font-bold text-lg">
                {formatearPrecio(total)}
              </span>
            </div>

            {/* Botón vaciar */}
            <button
              onClick={vaciarCarrito}
              className="w-full text-danger hover:bg-danger/10 text-sm font-medium py-2 rounded-xl transition-colors border border-danger/30 cursor-pointer"
            >
              🗑 Vaciar mi lista
            </button>
          </div>
        )}
      </aside>
    </>
  )
}

export default ListPanel
