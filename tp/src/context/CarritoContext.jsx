/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';
import useCarrito from '../hooks/useCarrito';

//1- Crear 
const CarritoContext = createContext(null);   //no se exporta el contexto 
//2- Proveer 
export function CarritoProvider({ children }) {
    const valor = useCarrito();                   
    return (
        <CarritoContext.Provider value={valor}>
            {children}
        </CarritoContext.Provider>
    );
}

//3- Consumir
export function useCarritoContext() {  // hook consumidor
    const contexto = useContext(CarritoContext);

    if (!contexto) {
        throw new Error('useCarritoContext() tiene que usarse adentro de <CarritoProvider>');
    }

    return contexto;
}