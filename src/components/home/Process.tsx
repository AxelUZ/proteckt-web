import { motion } from "framer-motion";
import FadeIn from "../../utils/FadeIn";

import { processSteps } from "../../data/process";

function Process() {
  return (
    <FadeIn>
      <section
        id="process"
        aria-labelledby="process-title"
        className="scroll-mt-24 bg-[#F5FAF6] py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}

          <div className="mx-auto max-w-3xl text-center">
            <span className="font-heading font-bold uppercase tracking-[0.2em] text-primary">
              | NUESTRO PROCESO
            </span>

            <h2
              id="process-title"
              className="mt-4 font-heading text-6xl text-black"
            >
              Así trabajamos para proteger tu hogar o negocio.
            </h2>

            <p className="mt-6 font-body text-lg leading-8 text-gray-600">
              Un proceso profesional, transparente y efectivo diseñado para
              eliminar las plagas y prevenir su regreso.
            </p>
          </div>

          {/* Timeline */}

          <div className="relative mt-24">
            {/* Línea animada */}

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{ transformOrigin: "left" }}
              className="absolute left-0 top-8 hidden h-px w-full bg-gray-200 lg:block"
              aria-hidden="true"
            />

            <ol className="grid gap-14 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <motion.li
                  key={step.number}
                  className="group relative list-none"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                >
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
                        border
                        border-primary/20
                        bg-[#EEF7F0]
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:bg-primary
                        group-hover:shadow-lg
                      "
                    >
                      <img
                        src={step.icon}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        decoding="async"
                        width={32}
                        height={32}
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
                      aria-hidden="true"
                      className="
                        ml-4
                        font-heading
                        text-6xl
                        text-gray-200
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
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
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

export default Process;