import { useState } from "react";
import { Link } from "react-router-dom";

import FAQItem from "../ui/FAQItem";
import faqData from "../../data/faqData";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-[350px_1fr]">

        {/* Left */}

        <div>

          <span className="font-heading uppercase tracking-[0.2em] text-primary">
            FAQ
          </span>

          <h2 className="mt-4 font-heading text-6xl text-black">
            Preguntas Frecuentes
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            ¿No encontraste la respuesta que buscabas?
            Nuestro equipo estará encantado de ayudarte.
          </p>

          <Link
            to="/contact"
            className="
              mt-10
              inline-flex
              rounded-xl
              bg-primary
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            Contáctanos
          </Link>

        </div>

        {/* Right */}

        <div>

          {faqData.map((faq, index) => (

            <FAQItem
              key={faq.question}
              {...faq}
              isOpen={open === index}
              onClick={() =>
                setOpen(open === index ? -1 : index)
              }
            />

          ))}

        </div>

      </div>
    </section>
  );
}