import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <Link
          to="/"
          className="font-semibold text-primary transition hover:opacity-80"
        >
          ← Volver al inicio
        </Link>

        <div className="mt-12">
          <span className="font-heading font-bold uppercase tracking-[0.2em] text-primary">
            | TÉRMINOS Y CONDICIONES
          </span>

          <h1 className="mt-4 font-heading text-5xl text-black">
            Términos y Condiciones
          </h1>

          <p className="mt-6 leading-8 text-gray-600">
            Estos términos establecen las condiciones generales de uso de
            este sitio web y de la información proporcionada por Proteck.
          </p>

          <section className="mt-12 space-y-10 text-gray-700">
            <div>
              <h2 className="font-heading text-2xl text-black">
                1. Uso del sitio
              </h2>

              <p className="mt-3 leading-8">
                El contenido de este sitio tiene fines informativos y
                comerciales. El usuario se compromete a utilizar el sitio de
                manera lícita y responsable.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-black">
                2. Solicitudes y cotizaciones
              </h2>

              <p className="mt-3 leading-8">
                Las solicitudes realizadas mediante este sitio, WhatsApp,
                teléfono u otros medios de contacto no constituyen por sí
                mismas un contrato de prestación de servicios. Los servicios,
                precios, fechas y condiciones serán confirmados directamente
                con Proteck.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-black">
                3. Información del sitio
              </h2>

              <p className="mt-3 leading-8">
                Procuramos mantener la información del sitio actualizada y
                correcta. Sin embargo, algunos precios, servicios,
                disponibilidad o características pueden cambiar sin previo
                aviso.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-black">
                4. Propiedad intelectual
              </h2>

              <p className="mt-3 leading-8">
                Los textos, imágenes, logotipos, diseños y demás elementos
                originales de este sitio pertenecen a Proteck o se utilizan
                con autorización. No podrán reproducirse o utilizarse con
                fines comerciales sin autorización previa.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-black">
                5. Enlaces externos
              </h2>

              <p className="mt-3 leading-8">
                Este sitio puede contener enlaces hacia servicios o sitios web
                de terceros. Proteck no controla el contenido ni las políticas
                de dichos sitios.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-black">
                6. Limitación de responsabilidad
              </h2>

              <p className="mt-3 leading-8">
                Proteck no garantiza que el sitio esté disponible de manera
                ininterrumpida ni que esté libre de errores. La información
                publicada no sustituye las condiciones específicas acordadas
                para cada servicio.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-black">
                7. Contacto
              </h2>

              <p className="mt-3 leading-8">
                Para cualquier duda sobre estos términos puedes comunicarte
                con nosotros:
              </p>

              <div className="mt-4 space-y-2">
                <p>Teléfono: 686 393 9561</p>
                <p>Correo: fumigacionesproteck@gmail.com</p>
              </div>
            </div>
          </section>

          <p className="mt-16 border-t border-gray-200 pt-8 text-sm text-gray-500">
            Última actualización: septiembre de 2026.
          </p>
        </div>
      </div>
    </main>
  );
}