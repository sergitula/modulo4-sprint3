export const Footer = () => {
  return (
    <footer className="bg-surface border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">

        {/* Logo */}
        <div className="flex items-center gap-2 text-text-main font-bold text-sm">
          <span className="text-lg">🎮</span>
          <span>MiWatchList</span>
        </div>

        {/* Copyright */}
        <p className="text-text-muted text-xs text-center leading-relaxed">
          © 2026 MiWatchList Gaming Hub.{' '}
          <span className="hidden sm:inline">· Nodo Tecnológico · Tula Sergio Ruben</span>
        </p>

        {/* Links */}
        <nav className="flex items-center gap-4 text-xs text-text-muted">
          <a href="#" className="hover:text-text-main transition-colors">Términos</a>
          <a href="#" className="hover:text-text-main transition-colors">Privacidad</a>
          <a href="#" className="hover:text-text-main transition-colors">API</a>
        </nav>

      </div>
    </footer>
  )
}
