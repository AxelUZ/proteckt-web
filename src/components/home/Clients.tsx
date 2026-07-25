import { clientLogos } from "../../data/clientLogos";

const logos = [...clientLogos, ...clientLogos];

export default function Clients() {
  return (
    <section id="clientes" className="overflow-hidden bg-white py-24">
      <div className="mx-auto mb-16 max-w-3xl px-6 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Confían en nosotros
        </p>

        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Empresas que protegen sus instalaciones con Proteck.
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Durante años hemos trabajado con empresas de distintos sectores, 
          ofreciendo soluciones profesionales de control de plagas 
          y ayudándolas a cumplir con los requerimientos sanitarios y de fumigación.
        </p>
      </div>

      <div className="relative">
        {/* Degradado izquierdo */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-40 bg-linear-to-r from-white to-transparent" />

        {/* Degradado derecho */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-40 bg-linear-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee gap-8 px-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="
                group
                flex
                h-44
                w-72
                shrink-0
                items-center
                justify-center
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                p-1
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/20
                hover:bg-white
                hover:shadow-xl
              "
            >
              <img
                src={logo}
                alt="Cliente"
                draggable={false}
                className="
                  max-h-44
                  max-w-[85%]
                  object-contain
                  transition-all
                  duration-300
                  group-hover:scale-110
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}