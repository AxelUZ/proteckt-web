import heroImage from "../../assets/images/heroImage.webp";

function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl flex-col items-center gap-16 px-6 py-20 lg:flex-row">
        {/* Texto */}
        <div className="flex-1">
          <p className="mb-4 font-heading text-primary uppercase tracking-[0.2em]">
            Servicio en Mexicali, Baja California
          </p>

          <h1 className="font-heading text-5xl leading-tight text-black md:text-6xl">
            Control profesional de plagas para{" "}
            <span className="text-primary">
              hogares y empresas.
            </span>
          </h1>

          <p className="mt-8 max-w-xl font-body text-xl leading-9 text-gray-600">
            En Proteckt protegemos hogares, comercios e industrias mediante
            soluciones profesionales de fumigación y control de plagas,
            utilizando productos seguros y técnicas efectivas.
          </p>

          {/* Botones */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-xl bg-primary px-8 py-4 font-body font-semibold text-white transition hover:bg-primary-dark">
              Solicitar inspección
            </button>

            <a
              href="tel:+526860000000"
              className="rounded-xl border border-primary px-8 py-4 text-center font-body font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              Llamar ahora
            </a>
          </div>

          {/* Beneficios */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-primary" />

              <span className="font-body text-gray-700">
                Atención rápida
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-primary" />

              <span className="font-body text-gray-700">
                Técnicos certificados
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-primary" />

              <span className="font-body text-gray-700">
                Productos seguros
              </span>
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div className="flex flex-1 justify-center">
          <img
            src={heroImage}
            alt="Técnico de Proteckt realizando un servicio de fumigación"
            className="max-h-175 w-full rounded-3xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;