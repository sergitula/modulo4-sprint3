import { useState,useEffect } from "react"

function useLocalStorage(clave, valorInicial) {
    const [valor, setValor] = useState(() => {
        try {
            const guardado = localStorage.getItem(clave)
            return guardado !==null ? JSON.parse(guardado) : valorInicial
        } catch {
        return valorInicial
        }
    })


    const limpiar = () => {
        setValor(valorInicial)
        localStorage.removeItem(clave)
    }

    useEffect(() => {
        localStorage.setItem(clave, JSON.stringify(valor))
    }, [clave, valor]);


    return [valor, setValor, limpiar]
}



export default useLocalStorage