import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import TestimonialCard from "../ui/TestimonialCard";

import avatar1 from "../../assets/images/avatar1.webp";
import avatar2 from "../../assets/images/avatar2.webp";
import avatar3 from "../../assets/images/avatar3.webp";

const testimonials = [
  {
    name: "María González",
    role: "Propietaria de vivienda",
    image: avatar1,
    comment:
      "Proteckt eliminó completamente nuestro problema de cucarachas. El servicio fue rápido y muy profesional.",
  },
  {
    name: "Carlos Ibarra",
    role: "Dueño de restaurante",
    image: avatar2,
    comment:
      "Llevamos más de dos años trabajando con ellos y nunca hemos tenido problemas. Totalmente recomendados.",
  },
  {
    name: "Laura Méndez",
    role: "Gerente de oficina",
    image: avatar3,
    comment:
      "La atención fue excelente y solucionaron el problema desde la primera visita.",
  },
  {
    name: "Javier Morales",
    role: "Administrador",
    image: avatar1,
    comment:
      "Excelente servicio, muy puntuales y siempre atentos a cualquier duda.",
  },
  {
    name: "Patricia Hernández",
    role: "Propietaria",
    image: avatar2,
    comment:
      "Después de probar varias empresas, Proteckt fue la única que solucionó el problema definitivamente.",
  },
  {
    name: "Miguel Castro",
    role: "Gerente",
    image: avatar3,
    comment:
      "Muy profesionales desde la primera llamada hasta la visita final.",
  },
];

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <section id="testimonials" className="scroll-mt-24 bg-[#F7FBF8] py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-heading uppercase tracking-[0.2em] text-primary font-bold">
            | TESTIMONIOS
          </span>

          <h2 className="mt-4 font-heading text-6xl text-black">
            Lo que opinan nuestros clientes
          </h2>

          <p className="mt-6 font-body text-lg leading-8 text-gray-600">
            La confianza de nuestros clientes es el resultado de un servicio
            profesional, efectivo y comprometido.
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden mt-20" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="
                  flex-[0_0_90%]
                  sm:flex-[0_0_75%]
                  md:flex-[0_0_55%]
                  lg:flex-[0_0_42%]
                  xl:flex-[0_0_36%]
                  px-3
                "
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}