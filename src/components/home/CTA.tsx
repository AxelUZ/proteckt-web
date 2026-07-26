import PhoneIcon from "../../assets/icons/phoneIcon.svg";
import FadeIn from "../../utils/FadeIn";

export default function CTA() {
  return (
    <FadeIn>
      <section
        id="cta"
        aria-labelledby="cta-title"
        className="relative overflow-hidden bg-primary py-28"
      >
        {/* Content */}

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 px-6 lg:flex-row">
          {/* Left Content */}

          <div className="max-w-2xl text-center lg:text-left">
            <h2
              id="cta-title"
              className="font-heading text-4xl font-semibold leading-tight text-white lg:text-5xl"
            >
              ¿Listo para proteger tu hogar o negocio?
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/75">
              Agenda una inspección y deja que nuestros expertos encuentren la
              mejor solución para mantener tu propiedad libre de plagas.
            </p>
          </div>

          {/* Right Actions */}

          <div className="flex w-full max-w-sm flex-col gap-5">
            <a
              href="https://wa.link/wwikda"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar inspección por WhatsApp"
              className="
                flex
                justify-center
                rounded-xl
                bg-white
                px-8
                py-4
                font-semibold
                text-primary
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              Solicitar inspección
            </a>

            <a
              href="tel:+526863939561"
              aria-label="Llamar al (686) 393-9561"
              className="
                group
                flex
                items-center
                justify-center
                gap-3
                rounded-xl
                border-3
                border-white/20
                px-8
                py-5
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white
                hover:bg-white/10
                active:translate-y-0
              "
            >
              <img
                src={PhoneIcon}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                width={20}
                height={20}
                className="
                  h-5
                  w-5
                  transition-transform
                  duration-300
                  group-hover:scale-110
                  invert
                "
              />

              Llámanos: (686) 393 9561
            </a>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}