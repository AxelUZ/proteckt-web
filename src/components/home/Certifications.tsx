import FadeIn from "../../utils/FadeIn";

import cofeprisLogo from "../../assets/images/cofepris.webp";

import truck1 from "../../assets/images/truck1.webp";
import truck2 from "../../assets/images/truck2.webp";
import truck3 from "../../assets/images/truck3.webp";

const trucks = [truck1, truck2, truck3];

export default function Certifications() {
  return (
    <FadeIn>
      <section
        id="certifications"
        aria-labelledby="certifications-title"
        className="scroll-mt-24 bg-background py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}

          <div className="mx-auto max-w-3xl text-center">
            <span className="font-heading font-bold uppercase tracking-[0.2em] text-primary">
              | LICENCIAS Y CERTIFICACIONES
            </span>

            <h2
              id="certifications-title"
              className="mt-5 font-heading text-5xl text-black"
            >
              Trabajamos con respaldo y autorización sanitaria.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Contamos con licencia sanitaria vigente para brindar servicios
              profesionales de control de plagas, cumpliendo con la normativa
              aplicable para proteger hogares, comercios e industrias.
            </p>
          </div>

          {/* Card */}

          <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-gray-200 bg-white p-10 shadow-xl">
            <div className="grid items-center gap-10 lg:grid-cols-[280px_1fr]">
              <div className="flex justify-center">
                <img
                  src={cofeprisLogo}
                  alt="Logo de COFEPRIS"
                  loading="lazy"
                  decoding="async"
                  className="max-h-44 object-contain"
                />
              </div>

              <div>
                <h3 className="font-heading text-3xl text-black">
                  Licencia Sanitaria
                </h3>

                <p className="mt-3 text-xl font-semibold text-primary">
                  24-AP-02-002-004
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  Esta licencia respalda que Proteck opera conforme a la
                  regulación sanitaria vigente para la aplicación profesional de
                  tratamientos de control de plagas.
                </p>


              </div>
            </div>
          </div>

          {/* Vehicles */}

          <div className="mt-20">
            <h3 className="text-center font-heading text-4xl text-black">
              Vehículos oficiales de Proteck
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-gray-600">
              Nuestro personal llega plenamente identificado en vehículos
              rotulados para brindar mayor confianza y seguridad durante cada
              servicio.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {trucks.map((truck, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-3xl shadow-lg"
                >
                  <img
                    src={truck}
                    alt={`Vehículo oficial de Proteck ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="h-72 w-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}