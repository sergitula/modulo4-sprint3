import useLocalStorage from './useLocalStorage'
import { useEffect } from 'react';

function useWatchList() {
    const [miListaDeJuegos, setmiListaDeJuegos, limpiarStorage] = useLocalStorage('miListaPersonal:miListaDeJuegos', [])

 	 // Agrega o quita un juego de la lista personal
	const toggleJuego = (juego) => {
		setmiListaDeJuegos((prevLista) => {
		const yaEsta = prevLista.some((item) => item.id === juego.id);
		if (yaEsta) {
			return prevLista.filter((item) => item.id !== juego.id);
		} else {
			return [...prevLista, juego];
		}
		});
	}

    // Vaciar lista
	const vaciarLista = () => {
		const confirmado = window.confirm("¿Estás seguro de que querés vaciar toda tu lista?");
		if (confirmado) {
			limpiarStorage();
		}
 	}

    // Título de pestaña dinámico
    useEffect(() => {
        document.title = miListaDeJuegos.length > 0
          ? `Mi lista (${miListaDeJuegos.length}) | MiWatchList`
          : "MiWatchList";
    }, [miListaDeJuegos]);

	return { miListaDeJuegos, toggleJuego, vaciarLista }
}

export default useWatchList