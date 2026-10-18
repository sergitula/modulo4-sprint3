const SearchBar = ({ busqueda, setBusqueda }) => {
  return (
    <section className="bg-base px-4 py-8">
      <div className="max-w-2xl mx-auto">

        {/* Barra de búsqueda */}
        <div className="relative flex items-center">
          {/* Ícono lupa */}
          <span className="absolute left-4 text-text-muted text-lg pointer-events-none">
            🔍
          </span>

          <input
            type="text"
            placeholder="Buscar tu juego por título..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="
              w-full
              bg-surface
              text-text-main
              placeholder-text-muted
              text-sm
              pl-11 pr-4 py-3
              rounded-xl
              border border-white/10
              outline-none
              focus:border-primary
              focus:ring-2 focus:ring-primary/30
              transition-all
            "
          />

        </div>
      </div>
    </section>
  )
}

export default SearchBar
