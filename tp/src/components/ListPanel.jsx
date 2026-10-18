import logoJuego from '../assets/juego.png'

const ListPanel = ({ miListaDeJuegos, onClose, quitarJuego, vaciarLista }) => {
  const subtotal = miListaDeJuegos.reduce((acc, j) => acc + j.precio, 0)

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
            {miListaDeJuegos.length > 0 && (
              <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
                {miListaDeJuegos.length} {miListaDeJuegos.length === 1 ? 'título' : 'títulos'}
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
          {miListaDeJuegos.length === 0 ? (
            /* Estado vacío */
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12">
              <span className="text-5xl">🎮</span>
              <p className="text-text-main font-semibold">Tu lista está vacía</p>
              <p className="text-text-muted text-sm max-w-xs">
                Explorá el catálogo y agregá los títulos que quieras seguir.
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
              {miListaDeJuegos.map((juego) => (
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
                      ${juego.precio.toFixed(2)}
                    </p>
                  </div>

                  {/* Botón quitar */}
                  <button
                    onClick={() => quitarJuego(juego)}
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

        {/* Footer del panel — solo visible si hay items */}
        {miListaDeJuegos.length > 0 && (
          <div className="shrink-0 border-t border-white/10 px-5 py-4 flex flex-col gap-3">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-text-muted text-sm">Subtotal en carrito:</span>
              <span className="text-text-main font-bold text-lg">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            {/* Botón proceder */}
            {/* <button className="w-full bg-primary hover:bg-primary-hover text-white font-semibold text-sm py-2.5 rounded-xl transition-colors cursor-pointer">
              🛒 Proceder a tiendas asociadas
            </button> */}

            {/* Botón vaciar */}
            <button
              onClick={vaciarLista}
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
