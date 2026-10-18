import {useEffect } from "react"

import imgModoClaro from '../assets/tema/modo-claro.png'
import imgModoOscuro from '../assets/tema/modo-oscuro.png'
import useLocalStorage from "../hooks/useLocalStorage"

const CLAVE_TEMA = 'miWatchList:tema' 

const ThemeSwitcher = () => {

  const [modoOscuro, setModoOscuro] = useLocalStorage(CLAVE_TEMA, false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', modoOscuro)
  }, [modoOscuro])

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