import imgModoClaro from '../assets/tema/modo-claro.png'
import imgModoOscuro from '../assets/tema/modo-oscuro.png'
import { useThemeContext } from '../context/ThemeContext'

const ThemeSwitcher = () => {
  const { modoOscuro, setModoOscuro } = useThemeContext()

  return (
    <button
      type="button"
      onClick={() => setModoOscuro((prev) => !prev)}
      title={modoOscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className=""
    >
      {modoOscuro ? (<img src={imgModoClaro} alt="Modo Claro" className="w-6 h-6" />) : (<img src={imgModoOscuro} alt="Modo Oscuro" className="w-6 h-6" />)}
    </button>
  )
}

export default ThemeSwitcher