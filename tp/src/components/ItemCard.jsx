import logoJuego from '../assets/juego.png'

const ItemCard = ({ juego, enMiLista, toggleJuego }) => {
  return (
    <article className="
      relative flex flex-col
      bg-surface rounded-2xl overflow-hidden
      border border-white/10
      hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10
      transition-all duration-300
      group
    ">
      {/* Imagen del juego */}
      <div className="relative w-full aspect-video overflow-hidden bg-black/20">
        <img
          src={logoJuego}
          alt={juego.titulo}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badge oferta */}
        {juego.enOferta && (
          <span className="absolute top-2 left-2 bg-danger text-white text-xs font-bold px-2 py-0.5 rounded-md">
            ¡OFERTA!
          </span>
        )}

        {/* Badge puntaje */}
        <span className="absolute top-2 right-2 flex items-center gap-1 bg-black/70 text-yellow-400 text-xs font-bold px-2 py-0.5 rounded-md backdrop-blur-sm">
          ⭐ {juego.puntaje}/100
        </span>
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        {/* Género y año */}
        <p className="text-xs text-text-muted uppercase tracking-wide font-medium">
          {juego.genero} · {juego.anio}
        </p>

        {/* Título */}
        <h3 className="text-text-main font-bold text-base leading-snug line-clamp-2">
          {juego.titulo}
        </h3>

        {/* Precio */}
        <div className="mt-auto pt-3 flex items-center justify-between gap-2">
          <span className="text-text-main font-bold text-lg">
            ${juego.precio.toFixed(2)}
          </span>

          {/* Botón agregar / en lista */}
          <button
            onClick={() => toggleJuego(juego)}
            className={`
              flex items-center gap-1.5 text-sm font-semibold px-4 py-1.5 rounded-full transition-all cursor-pointer
              ${enMiLista
                ? 'bg-primary/20 text-primary border border-primary/50 hover:bg-danger/20 hover:text-danger hover:border-danger/50'
                : 'bg-primary hover:bg-primary-hover text-white'
              }
            `}
          >
            {enMiLista ? (
              <>✓ <span>En mi lista</span></>
            ) : (
              <>+ <span>Agregar</span></>
            )}
          </button>
        </div>
      </div>
    </article>
  )
}

export default ItemCard
