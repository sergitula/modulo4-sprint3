/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const CLAVE_TEMA = 'miWatchList:tema';
// 1- Crear 
const ThemeContext = createContext(null);
//2- Proveer 

export function ThemeProvider({ children }) {
    /* ******************************/
    const [modoOscuro, setModoOscuro] = useLocalStorage(CLAVE_TEMA, false);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', modoOscuro);
    }, [modoOscuro]);
    /******************************+*/
    return (
        <ThemeContext.Provider value={{ modoOscuro, setModoOscuro }}>
            {children}
        </ThemeContext.Provider>
    );
}

//3- Consumir
export function useThemeContext() {
  const contexto = useContext(ThemeContext);
  if (!contexto) {
    throw new Error('useThemeContext() tiene que usarse adentro de <ThemeProvider>');
  }
  return contexto;
}