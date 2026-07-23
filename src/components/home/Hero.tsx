import AnimatedWord from "../../utils/HeroAnimatedWord";
import HeroBackground from "../../utils/HeroAnimatedBackground";

export default function Hero() {
  return (
    <section className="relative h-145 overflow-hidden">

      {/* Background Images (rotating) */}

      <HeroBackground />

      {/* Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-linear-to-r
          from-black/80
          via-black/55
          to-transparent
        "
      />

      {/* Content */}

      <div className="relative z-10 flex h-full items-center px-6 lg:pl-48 xl:pl-64">

        <div className="max-w-xl">
          {/* Heading */}

          <div className="mt-6">
            <h1 className="font-heading text-6xl font-bold leading-none text-white lg:text-7xl">
              CONTROL
            </h1>

            <h2 className="font-heading text-6xl font-bold leading-none text-white lg:text-7xl">
              PROFESIONAL
            </h2>

            <h3 className="font-heading text-6xl font-bold leading-none text-white lg:text-7xl">
              CONTRA
            </h3>

            {/* Animated Word */}

            <AnimatedWord />
          </div>

          {/* Description */}

          <p className="mt-8 max-w-md text-lg leading-8 text-white/80 text-bol font-bold">
            Obten una cotización personalizada ahora mismo
          </p>

          {/* Buttons */}

          <div className="mt-2 flex flex-wrap gap-4">

            <button
              className="
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
              "
            >
              Solicitar inspección
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}