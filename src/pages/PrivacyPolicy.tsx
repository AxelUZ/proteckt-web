import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
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
            | AVISO DE PRIVACIDAD
          </span>

          <h1 className="mt-4 font-heading text-5xl text-black">
            Aviso de Privacidad
          </h1>

          <p className="mt-6 leading-8 text-gray-600">
            En Proteck nos comprometemos a proteger la privacidad de nuestros
            clientes y visitantes de este sitio web.
          </p>

          <section className="mt-12 space-y-10 text-gray-700">
            <div>
              <h2 className="font-heading text-2xl text-black">
                1. Responsable del tratamiento
              </h2>

              <p className="mt-3 leading-8">
                Proteck es responsable del tratamiento y protección de los
                datos personales que sean proporcionados a través de este
                sitio web y de nuestros medios de contacto.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-black">
                2. Datos que podemos recopilar
              </h2>

              <p className="mt-3 leading-8">
                Podemos recopilar información que nos proporciones
                voluntariamente al solicitar información o una cotización,
                como nombre, teléfono, correo electrónico y datos relacionados
                con el servicio solicitado.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-black">
                3. Uso de la información
              </h2>

              <p className="mt-3 leading-8">
                La información proporcionada podrá utilizarse para atender
                solicitudes, proporcionar cotizaciones, programar servicios,
                comunicarnos contigo y dar seguimiento a nuestros servicios.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-black">
                4. Protección de los datos
              </h2>

              <p className="mt-3 leading-8">
                Proteck adopta medidas razonables para proteger la información
                personal contra acceso, uso o divulgación no autorizados.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-black">
                5. Derechos del titular
              </h2>

              <p className="mt-3 leading-8">
                Puedes solicitar información sobre el tratamiento de tus datos
                personales y, cuando corresponda, ejercer los derechos
                aplicables conforme a la legislación mexicana en materia de
                protección de datos personales.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-black">
                6. Contacto
              </h2>

              <p className="mt-3 leading-8">
                Para cualquier duda relacionada con este aviso o con el
                tratamiento de tus datos personales puedes contactarnos:
              </p>

              <div className="mt-4 space-y-2">
                <p>Teléfono: 686 393 9561</p>
                <p>Correo: fumigacionesproteck@gmail.com</p>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-black">
                7. Cambios al aviso
              </h2>

              <p className="mt-3 leading-8">
                Proteck podrá actualizar este aviso cuando sea necesario. Las
                modificaciones serán publicadas en esta misma página.
              </p>
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