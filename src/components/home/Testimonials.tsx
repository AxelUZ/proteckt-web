import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import FadeIn from "../../utils/FadeIn";

import { testimonials } from "../../data/testimonials";
import TestimonialCard from "../ui/TestimonialCard";

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
    <FadeIn>
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
    </FadeIn>
  );
}