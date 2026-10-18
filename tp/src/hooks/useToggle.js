import { useState } from "react";

const useToggle = (valorInicial = false) => {
    const [estado, setEstado] = useState(valorInicial);
    const toggle = () => {
        setEstado((prev) => !prev);
    };
    return [estado, toggle];
};

export default useToggle;