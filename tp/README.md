

# TP: Tienda de Juegos - Sergio Tula

**🌐 Demo** [https://modulo4-sprint3-tiendajuegos-sergio.netlify.app]

## Qué es
Una tienda online de videojuegos construida con React, Vite y Tailwind CSS. Permite explorar el catálogo, gestionar un carrito de compras con control de stock, y completar un proceso de checkout con formulario validado.

## Cómo correrlo
```bash
pnpm install
pnpm run dev
```

## Mis contextos

* CarritoContext: Guarda el array de productos elegidos y los totales derivados. Lo consumen el Navbar (para el contador), el ListPanel (para modificar cantidades), el Checkout (para el resumen y vaciarlo) y la ItemCard (para agregar productos al carrito). Es global porque componentes que están en distintas ramas del árbol visual necesitan compartir y modificar esta misma información sin pasarse props.

* ThemeContext: Guarda la preferencia visual del usuario (modo oscuro o claro). Lo consume el Navbar (para el botón de alternar) y envuelve toda la aplicación. Es global porque el estilo afecta a toda la interfaz gráfica de forma transversal.


## Mis hooks

* useCarrito: Centraliza toda la lógica de negocio (agregar, quitar, sumar/restar y vaciar). Devuelve el carrito, los valores totales y las funciones para manipularlo.

* useLocalStorage: Sincroniza un valor de estado de React con el almacenamiento persistente del navegador. Devuelve el valor guardado y la función para actualizarlo.

* useToggle: Simplifica el manejo de estados booleanos (abierto/cerrado) de paneles o modales. Utilizado en el panel derecho  

## Decisiones de estado

* El estado vista (que decide si mostrar la Tienda, Checkout o Confirmación) vive directamente en App.jsx porque su única responsabilidad es montar o desmontar componentes principales de diseño, no necesita ser global.

* El texto del buscador es un estado local dentro de Tienda.jsx, ya que solo le importa a ese componente para filtrar el catálogo en pantalla.

* No hay ningún estado para los 7 campos del formulario de compra; delegué todo eso internamente a React Hook Form para evitar renderizados innecesarios.


## Prop drilling: antes y después

* Antes: El estado del carrito (y todas sus funciones para modificarlo) vivían en App.jsx y pasaban como props a través de componentes que ni las usaban solo para llegar al panel lateral o al navbar.

* Ahora: Hay cero props pasando de largo. Componentes como el Checkout o el ListPanel leen el total o ejecutan la función vaciarCarrito llamando directamente al contexto, manteniendo las firmas de los componentes completamente limpias.


## Qué generé con IA

Usé Gemini como tutor interactivo. Yo armé la estructura base, la lógica de los hooks y los contextos. Usé la IA para verificar que mi código del Bloque C cumpliera estrictamente con los 5 requisitos de la rúbrica, para refactorizar la estructura de los <label> del formulario manteniendo el diseño CSS que habíamos visto en clase, y para detectar un error de tipeo que me recargaba la página en el checkout.











## Uso de IA

* Herramientas que usé: Gemini (como tutor).
* Qué hice yo y en qué me ayudó la IA: Toda la estructura, los componentes y la lógica de React la armé a mano. Usé la IA como apoyo cuando me trababa con algún error de código (como la sintaxis de los custom hooks), para asegurarme de estar cumpliendo bien algunas consignas, y para que me guíe paso a paso al subir la página a Netlify.

