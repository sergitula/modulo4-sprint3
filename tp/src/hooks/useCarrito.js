
import useLocalStorage from './useLocalStorage'
import { useEffect } from 'react';

function useCarrito() {

    const [carrito, setCarrito, limpiarStorage] = useLocalStorage('carrito_compras', [])

    const estaEnElCarrito = (id) => carrito.some((item) => item.id === id);
    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);


 	 // Agregar al carrito
    const agregarAlCarrito = (juego) => {
        setCarrito((prev) => {
            const yaEsta = prev.find((item) => item.id === juego.id);

            if (yaEsta) {
                //sin stock
                if (yaEsta.cantidad >= juego.stock) return prev; 
                //con stock
                return prev.map((item) =>
                    item.id === juego.id ? { ...item, cantidad: item.cantidad + 1 } : item
                );
            }

            return [...prev, { ...juego, cantidad: 1 }];
        });
    };


    // Modificar cantidad (+ y -)
    const cambiarCantidad = (id, delta) => {
        setCarrito((prev) =>
            prev.map((item) => item.id === id
                ? { ...item, cantidad: item.cantidad + delta }   // copia modificada
                : item                                           // los demás, intactos
            )
            .filter((item) => item.cantidad > 0)                 // el que llegó a 0, se va
        );
    };

    
    // Quitar un ítem específico del carrito
    const quitarDelCarrito = (id) => {
        setCarrito((prev) => prev.filter((item) => item.id !== id));
    };


    // *****************Reutilización de useWatchList***********************
    // Vaciar Carrito
	const vaciarCarrito = () => {
		const confirmado = window.confirm("¿Estás seguro de que querés vaciar toda tu carrito?");
		if (confirmado) {
			limpiarStorage();
		}
 	}
    // Título de pestaña dinámico
    useEffect(() => {
        document.title = carrito.length > 0
          ? `Mi lista (${carrito.length}) | MiWatchList`
          : "MiWatchList";
    }, [carrito]);
    //***************************************************************** */
    

    return { carrito,cantidadTotal,total,estaEnElCarrito,agregarAlCarrito,cambiarCantidad,quitarDelCarrito,vaciarCarrito}


}
export default useCarrito

