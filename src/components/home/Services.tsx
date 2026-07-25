import ServiceCard from "../ui/ServiceCard";

import iconCockroach from "../../assets/icons/iconCockroach.svg";
import iconMouse from "../../assets/icons/iconMouse.svg";
import iconAnt from "../../assets/icons/iconAnt.svg";
import iconChinche from "../../assets/icons/iconChinche.svg";
import iconSpider from "../../assets/icons/iconSpider.svg";
import iconFumigacion from "../../assets/icons/iconFumigacion.svg";

const services = [
  {
    title: "Control de cucarachas",
    description:
      "Eliminación y prevención para hogares, negocios e industrias.",
    icon: iconCockroach,
  },
  {
    title: "Control de roedores",
    description:
      "Tratamientos profesionales para ratones y ratas.",
    icon: iconMouse,
  },
  {
    title: "Control de hormigas",
    description:
      "Protección efectiva contra colonias y reinfestaciones.",
    icon: iconAnt,
  },
  {
    title: "Control de chinches",
    description:
      "Tratamientos especializados para eliminar infestaciones.",
    icon: iconChinche,
  },
  {
    title: "Control de arañas",
    description:
      "Control preventivo y correctivo para espacios seguros.",
    icon: iconSpider,
  },
  {
    title: "Fumigación comercial",
    description:
      "Programas de control para empresas e industrias.",
    icon: iconFumigacion,
  },
];

function Services() {
  return (
    <section id="services" className=" scroll-mt-24 bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <span className="font-heading font-bold uppercase tracking-[0.2em] text-primary">
          | Nuestros servicios
        </span>

        <h2 className="mt-5 max-w-3xl font-heading text-5xl text-black">
          Soluciones profesionales para cada tipo de plaga.
        </h2>

        <p className="mt-6 max-w-2xl font-body text-xl leading-9 text-gray-600">
          Protegemos hogares, comercios e industrias con tratamientos
          especializados para prevenir y eliminar plagas de forma segura y
          efectiva.
        </p>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <a
            href="https://wa.link/wwikda"
            target="_blank"
            rel="noopener noreferrer"
            className="
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
              hover:shadow-2xl
            "
          >
            Solicitar cotización
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;