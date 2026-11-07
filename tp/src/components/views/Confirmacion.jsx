import { VISTAS } from "../../data/vistas";

export const Confirmacion = ({ setVista, datosCompra }) => {

  return (
    <div className="w-full px-4 py-6 sm:px-6 flex justify-center">

      <div className="max-w-md w-full flex flex-col gap-5">

        {/* Tarjeta de datos */}
        <div className="bg-surface rounded-2xl p-6 border border-black/5 dark:border-white/10 shadow-sm flex flex-col gap-4 text-center">

          <span className="text-6xl">🎉</span>

          <div>
            <h2 className="text-xl font-bold text-text-main">
              ¡Gracias por tu compra, {datosCompra.nombre}!
            </h2>
            <p className="text-text-muted text-sm mt-1">
              Tu pedido ha sido procesado con éxito.
            </p>
          </div>

          {/* Detalles de entrega */}
          <div className="bg-base rounded-xl p-4 border border-black/10 dark:border-white/10 text-left flex flex-col gap-2">
            <h3 className="text-sm font-bold text-text-main border-b border-black/10 dark:border-white/10 pb-2 mb-1">
              Detalles de entrega
            </h3>
            <p className="text-sm text-text-main">
              <span className="font-semibold text-text-muted">Método: </span>
              {datosCompra.metodoEnvio === 'domicilio' ? 'Envío a domicilio' : 'Retiro en el local'}
            </p>
            <p className="text-sm text-text-main">
              <span className="font-semibold text-text-muted">Email: </span>
              {datosCompra.email}
            </p>
            {datosCompra.metodoEnvio === 'domicilio' && (
              <p className="text-sm text-text-main">
                <span className="font-semibold text-text-muted">Dirección: </span>
                {datosCompra.direccion}
              </p>
            )}
            {datosCompra.notas && (
              <p className="text-sm text-text-main">
                <span className="font-semibold text-text-muted">Notas: </span>
                {datosCompra.notas}
              </p>
            )}
          </div>

          {/* Botón volver */}
          <button
            onClick={() => setVista(VISTAS.TIENDA)}
            className="w-full bg-primary hover:bg-primary-hover text-white p-2.5 rounded-xl transition-colors text-sm font-bold cursor-pointer"
          >
            Volver al catálogo
          </button>

        </div>
      </div>
    </div>
  );
};
