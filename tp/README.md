

# TP: MiWatchList - Sergio Tula

**🌐 Demo en vivo:** [https://miwatchlist-tulasergioruben.netlify.app]

## Qué es
Una aplicación web responsive construida con React, Vite y Tailwind CSS v4 para explorar y gestionar una lista personal de videojuegos. Permite buscar títulos, agregarlos a un panel lateral, alternar entre modo claro/oscuro, y mantiene toda la información y preferencias persistidas en el navegador.

## Cómo correrlo
```bash
npm install
npm run dev
```

## Uso de IA

* Herramientas que usé: Gemini (como tutor).
* Qué hice yo y en qué me ayudó la IA: Toda la estructura, los componentes y la lógica de React la armé a mano. Usé la IA como apoyo cuando me trababa con algún error de código (como la sintaxis de los custom hooks), para asegurarme de estar cumpliendo bien algunas consignas, y para que me guíe paso a paso al subir la página a Netlify.

## Lo que me costó
Al principio renegué bastante entendiendo la sintaxis exacta de los custom hooks. Me pasó que mi hook devolvía un objeto (return {valor, setValor}) pero yo lo intentaba desestructurar en App como un array (const [valor, setValor] = ...), lo que me rompía la app diciendo que no era iterable.


## Dato solicitado en el enunciado

La verdad es que el refactor me salvó el "App.jsx." Al final del Bloque C lo tenía gigante, mezclando la vista con todos los useEffect y la lectura del localStorage. Al pasar toda esa lógica pesada a mis custom hooks (useMyList y useLocalStorage), el componente principal quedó re limpio y ahora solo se encarga de renderizar la interfaz y pasar props.