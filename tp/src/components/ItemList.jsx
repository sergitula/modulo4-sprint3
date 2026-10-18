import ItemCard from './ItemCard'

export const ItemList = ({ juegos, miListaDeJuegos, toggleJuego, busqueda }) => {

  // Estado vacío: sin resultados de búsqueda
  if (juegos.length === 0) {
    return (
      <section className="px-4 py-20 flex flex-col items-center justify-center gap-3 text-center">
        <span className="text-5xl">🔍</span>
        <p className="text-text-muted text-lg">
          No encontramos nada para{' '}
          <span className="text-text-main font-semibold">"{busqueda}"</span>
        </p>
        <p className="text-text-muted text-sm">
          Intentá con otro título.
        </p>
      </section>
    )
  }

  return (
    <section className="px-4 pb-12">
      <div className="max-w-7xl mx-auto">

        {/* Encabezado de sección */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-text-main font-bold text-xl sm:text-2xl">
              Títulos Destacados
            </h2>
            <p className="text-text-muted text-xs mt-0.5 uppercase tracking-wider">
              Mostrando {juegos.length} {juegos.length === 1 ? 'título' : 'títulos'}
            </p>
          </div>
        </div>

        {/* Grilla de cards */}
        <div className="
          grid gap-4
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        ">
          {juegos.map((juego) => {
            const estaEnLista = miListaDeJuegos.some((item) => item.id === juego.id)
            return (
              <ItemCard
                key={juego.id}
                juego={juego}
                enMiLista={estaEnLista}
                toggleJuego={toggleJuego}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
