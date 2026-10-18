import ThemeSwitcher from "./ThemeSwitcher"

export const Navbar = ({ onAbrirPanel, cantidadItems }) => {
  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-white/10 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between gap-4">

        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-text-main font-bold text-base shrink-0 hover:text-primary transition-colors"
        >
          <span className="text-xl">🎮</span>
          <span className="hidden sm:inline">MiWatchList</span>
        </a>

        {/* Links de navegación */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-text-muted">
          <li>
            <a href="#" className="hover:text-text-main transition-colors">Explorar</a>
          </li>
          <li>
            <a href="#" className="hover:text-text-main transition-colors">Novedades</a>
          </li>
          <li>
            <a href="#" className="hover:text-text-main transition-colors">Top Ranked</a>
          </li>
        </ul>

        {/* Acciones */}
        <div className="flex items-center gap-3 ml-auto">
          <ThemeSwitcher />

          {/* Botón Mi Lista */}
          <button
            onClick={onAbrirPanel}
            className="relative flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-4 py-1.5 rounded-full transition-colors cursor-pointer"
          >
            <span>🎯</span>
            <span className="hidden sm:inline">Mi Lista</span>
            {cantidadItems > 0 && (
              <span className="bg-white text-primary text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full leading-none">
                {cantidadItems}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}
