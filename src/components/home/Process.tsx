import IconSearch from "../../assets/images/IconSearch.svg";
import IconTube from "../../assets/images/IconTube.svg";
import IconProtection from "../../assets/images/IconProtection.svg";
import IconCalendar from "../../assets/images/IconCalendar.svg";

const steps = [
  {
    number: "01",
    title: "Inspección",
    description:
      "Evaluamos tu propiedad para identificar el tipo de plaga, el nivel de infestación y los puntos de acceso.",
    icon: IconSearch,
  },
  {
    number: "02",
    title: "Tratamiento",
    description:
      "Aplicamos tratamientos profesionales utilizando productos seguros y altamente efectivos.",
    icon: IconTube,
  },
  {
    number: "03",
    title: "Prevención",
    description:
      "Implementamos medidas preventivas para reducir el riesgo de futuras infestaciones.",
    icon: IconProtection,
  },
  {
    number: "04",
    title: "Seguimiento",
    description:
      "Realizamos seguimiento y brindamos recomendaciones para mantener tu espacio protegido.",
    icon: IconCalendar,
  },
];

function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-heading uppercase tracking-[0.2em] text-primary font-bold">
            | NUESTRO PROCESO
          </span>

          <h2 className="mt-4 font-heading text-6xl text-black">
            Así trabajamos para proteger tu hogar o negocio.
          </h2>

          <p className="mt-6 font-body text-lg leading-8 text-gray-600">
            Un proceso profesional, transparente y efectivo diseñado para
            eliminar las plagas y prevenir su regreso.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Línea */}
          <div className="absolute left-0 top-8 hidden h-px w-full bg-gray-200 lg:block" />

          <div className="grid gap-14 lg:grid-cols-4">
            {steps.map((step) => {

              return (
                <div key={step.number} className="group relative">
                  {/* Icono + número */}
                  <div className="relative flex items-center">
                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        bg-[#EEF7F0]
                        transition-all
                        duration-300
                        group-hover:bg-primary
                        group-hover:-translate-y-1
                      "
                    >
                      <img
                        src={step.icon}
                        alt={step.title}
                        className="
                            h-8
                            w-8
                            transition-all
                            duration-300
                            filter-[invert(24%)_sepia(67%)_saturate(787%)_hue-rotate(84deg)_brightness(92%)_contrast(90%)]
                            group-hover:filter-[invert(100%)]
                        "
                        />
                    </div>

                    <span
                      className="
                        ml-4
                        font-heading
                        text-6xl
                        text-gray-200
                        transition-all
                        duration-300
                        group-hover:text-primary/20
                      "
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Contenido */}
                  <div className="mt-8">
                    <h3 className="font-heading text-3xl text-black">
                      {step.title}
                    </h3>

                    <p className="mt-4 font-body text-lg leading-8 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;