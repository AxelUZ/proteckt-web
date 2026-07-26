import AnimatedWord from "../../utils/HeroAnimatedWord";
import HeroBackground from "../../utils/HeroAnimatedBackground";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative h-180 overflow-hidden scroll-mt-24"
    >
      {/* Background Images */}
      <HeroBackground />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-linear-to-r
          from-black/90
          via-black/70
          to-transparent
          lg:from-black/80
          lg:via-black/55
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          items-center
          px-6
          pt-12
          sm:pt-0
          lg:pl-48
          xl:pl-64
        "
      >
        <div className="max-w-sm sm:max-w-md lg:max-w-xl">
          {/* Heading */}

          <div className="mt-6">
            <h1
              id="hero-title"
              className="font-heading text-5xl font-bold leading-none text-white sm:text-6xl lg:text-7xl"
            >
              <span>CONTROL</span>
              <br />
              <span>PROFESIONAL</span>
              <br />
              <span>CONTRA</span>
            </h1>

            <AnimatedWord />
          </div>

          {/* Description */}

          <p
            className="
              mt-6
              max-w-md
              font-body
              text-base
              font-bold
              leading-7
              text-white/80
              sm:text-lg
              sm:leading-8
            "
          >
            Obtén una cotización personalizada ahora mismo.
          </p>

          {/* Button */}

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://wa.link/wwikda"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar inspección por WhatsApp"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                rounded-xl
                bg-primary
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
                sm:w-auto
              "
            >
              Solicitar inspección
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}