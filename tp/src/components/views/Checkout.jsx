import { useCarritoContext } from "../../context/CarritoContext";
import {useForm} from "react-hook-form"
import {VISTAS} from "../../data/vistas"
import {formatearPrecio} from '../../utils/formato'

export const Checkout = ({setVista, setDatosCompra}) => {
  // Resumen --> desde el contexto
  const { carrito, total, vaciarCarrito } = useCarritoContext();

  // Inicializar React Hook Form
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: { metodoEnvio: 'domicilio' },
  });
  // mostrar/ocultar la dirección
  const metodoEnvio = watch('metodoEnvio');

  //Manejo del envío
  const onSubmit = (datos) => {
    const pedido = {
      cliente: {
        nombre: datos.nombre,
        email: datos.email,
        telefono: datos.telefono,
        direccion: datos.metodoEnvio === 'domicilio' ? datos.direccion : null,
      },
      envio: datos.metodoEnvio,
      notas: datos.notas,
      items: carrito,
      total,
    };

    console.log('Pedido registrado:', pedido);
    setDatosCompra(datos); // guardo datos para mostrar en confirmación
    vaciarCarrito(); // vaciar carrito
    setVista(VISTAS.CONFIRMACION); //ir a confirmación
  };

  return (
    <div className="w-full px-4 py-6 sm:px-6">

      <section className="flex flex-col lg:flex-row gap-6 w-full">

        {/* ── Lado izquierdo: datos de facturación ── */}
        <div className="flex-1 bg-surface rounded-2xl p-5 border border-black/5 dark:border-white/10 shadow-sm">
          <h2 className="text-lg font-bold text-text-main mb-4">Datos de Facturación</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">

            {/* Campo - Nombre completo */}
            <div className="flex flex-col gap-1">
              <label htmlFor="nombre" className="text-sm font-medium text-text-main">
                Nombre completo
              </label>
              <input
                id="nombre"
                {...register('nombre', {
                  required: "El nombre es requerido",
                  minLength: { value: 3, message: "Mínimo 3 caracteres" }
                })}
                placeholder="Nombre completo"
                className="w-full p-2.5 rounded-xl bg-base text-text-main border border-black/10 dark:border-white/10 outline-none focus:border-primary placeholder:text-text-muted transition-colors text-sm"
                aria-invalid={errors.nombre ? "true" : "false"}
                aria-describedby="error-nombre"
              />
              {errors.nombre && (
                <p id="error-nombre" className="text-danger text-xs">{errors.nombre.message}</p>
              )}
            </div>

            {/* Campo - Email */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium text-text-main">
                Email
              </label>
              <input
                id="email"
                {...register('email', {
                  required: "El email es requerido",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Formato de email inválido'
                  }
                })}
                placeholder="Correo electrónico"
                className="w-full p-2.5 rounded-xl bg-base text-text-main border border-black/10 dark:border-white/10 outline-none focus:border-primary placeholder:text-text-muted transition-colors text-sm"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby="error-email"
              />
              {errors.email && (
                <p id="error-email" className="text-danger text-xs">{errors.email.message}</p>
              )}
            </div>

            {/* Campo - Teléfono */}
            <div className="flex flex-col gap-1">
              <label htmlFor="telefono" className="text-sm font-medium text-text-main">
                Teléfono
              </label>
              <input
                id="telefono"
                {...register('telefono', {
                  required: "El teléfono es requerido",
                  pattern: { value: /^[0-9]+$/, message: "Solo números" },
                  minLength: { value: 8, message: "Mínimo 8 dígitos" }
                })}
                placeholder="Teléfono"
                className="w-full p-2.5 rounded-xl bg-base text-text-main border border-black/10 dark:border-white/10 outline-none focus:border-primary placeholder:text-text-muted transition-colors text-sm"
              />
              {errors.telefono && (
                <p className="text-danger text-xs">{errors.telefono.message}</p>
              )}
            </div>

            {/* Campo - Método de envío */}
            <div className="flex flex-col gap-1">
              <legend className="text-sm font-medium text-text-main">Método de envío</legend>
              <fieldset className="flex flex-wrap gap-4 p-3 rounded-xl bg-base border border-black/10 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="envio-domicilio"
                    value="domicilio"
                    {...register("metodoEnvio", { required: true })}
                    className="accent-primary"
                  />
                  <label htmlFor="envio-domicilio" className="text-text-main text-sm cursor-pointer">
                    Envío a domicilio
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="envio-local"
                    value="local"
                    {...register("metodoEnvio", { required: true })}
                    className="accent-primary"
                  />
                  <label htmlFor="envio-local" className="text-text-main text-sm cursor-pointer">
                    Retiro en local
                  </label>
                </div>
              </fieldset>
            </div>

            {/* Campo condicional - Dirección */}
            {metodoEnvio === 'domicilio' && (
              <div className="flex flex-col gap-1">
                <label htmlFor="direccion" className="text-sm font-medium text-text-main">
                  Dirección de entrega
                </label>
                <input
                  id="direccion"
                  {...register('direccion', { required: "La dirección es requerida" })}
                  placeholder="Dirección de entrega"
                  className="w-full p-2.5 rounded-xl bg-base text-text-main border border-black/10 dark:border-white/10 outline-none focus:border-primary placeholder:text-text-muted transition-colors text-sm"
                />
                {errors.direccion && (
                  <p className="text-danger text-xs">{errors.direccion.message}</p>
                )}
              </div>
            )}

            {/* Campo - Notas */}
            <div className="flex flex-col gap-1">
              <label htmlFor="notas" className="text-sm font-medium text-text-main">
                Notas del pedido <span className="text-text-muted font-normal">(Opcional)</span>
              </label>
              <textarea
                id="notas"
                {...register('notas', {
                  maxLength: { value: 200, message: "Máximo 200 caracteres" }
                })}
                placeholder="Notas del pedido (opcional)"
                rows="3"
                className="w-full p-2.5 rounded-xl bg-base text-text-main border border-black/10 dark:border-white/10 outline-none focus:border-primary placeholder:text-text-muted transition-colors resize-none text-sm"
              />
              {errors.notas && (
                <p className="text-danger text-xs">{errors.notas.message}</p>
              )}
            </div>

            {/* Campo - Términos y condiciones */}
            <div className="flex flex-col gap-1">
              <div className="flex items-start gap-2 p-3 rounded-xl bg-base border border-black/10 dark:border-white/10">
                <input
                  type="checkbox"
                  id="terminos"
                  {...register("terminos", { required: "Debes aceptar los términos" })}
                  className="accent-primary mt-0.5 shrink-0 cursor-pointer"
                />
                <label htmlFor="terminos" className="text-text-main text-sm cursor-pointer">
                  Acepto los términos y condiciones
                </label>
              </div>
              {errors.terminos && (
                <p className="text-danger text-xs">{errors.terminos.message}</p>
              )}
            </div>

            {/* Botones */}
            <div className="flex gap-3 mt-1">
              <button
                type="button"
                onClick={() => setVista(VISTAS.TIENDA)}
                className="flex-1 bg-base hover:bg-black/5 dark:hover:bg-white/10 text-text-main border border-black/10 dark:border-white/10 p-2.5 rounded-xl transition-colors text-sm font-medium cursor-pointer"
              >
                ← Volver
              </button>
              <button
                type="submit"
                className="flex-1 bg-primary hover:bg-primary-hover text-white p-2.5 rounded-xl transition-colors text-sm font-bold cursor-pointer"
              >
                Confirmar pedido
              </button>
            </div>

          </form>
        </div>

        {/* ── Lado derecho: resumen del pedido ── */}
        <div className="lg:w-72 xl:w-80 shrink-0">
          <div className="bg-surface rounded-2xl p-5 border border-black/5 dark:border-white/10 shadow-sm sticky top-4">
            <h3 className="text-base font-bold text-text-main mb-4">Resumen del pedido</h3>

            <ul className="flex flex-col gap-3 mb-4">
              {carrito.map(item => (
                <li key={item.id} className="flex justify-between items-start gap-2 text-sm">
                  <span className="text-text-muted truncate">
                    <span className="text-text-main font-medium">{item.cantidad}x</span> {item.titulo}
                  </span>
                  <span className="font-semibold text-text-main shrink-0">
                    {formatearPrecio(item.precio * item.cantidad)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center border-t border-black/10 dark:border-white/10 pt-4">
              <span className="font-bold text-text-main">Total:</span>
              <span className="text-xl font-bold text-primary">{formatearPrecio(total)}</span>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};
