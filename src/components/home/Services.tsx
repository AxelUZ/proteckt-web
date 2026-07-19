import ServiceCard from "../ui/ServiceCard";

import iconCockroach from "../../assets/images/iconCockroach.svg";
import iconMouse from "../../assets/images/iconMouse.svg";
import iconAnt from "../../assets/images/iconAnt.svg";
import iconChinche from "../../assets/images/iconChinche.svg";
import iconSpider from "../../assets/images/iconSpider.svg";
import iconFumigacion from "../../assets/images/iconFumigacion.svg";

const services = [
  {
    title: "Control de cucarachas",
    description:
      "Eliminación y prevención para hogares, negocios e industrias.",
    href: "/servicios/cucarachas",
    icon: iconCockroach
  },
  {
    title: "Control de roedores",
    description:
      "Tratamientos profesionales para ratones y ratas.",
    href: "/servicios/roedores",
    icon: iconMouse
  },
  {
    title: "Control de hormigas",
    description:
      "Protección efectiva contra colonias y reinfestaciones.",
    href: "/servicios/hormigas",
    icon: iconAnt
  },
  {
    title: "Control de chinches",
    description:
      "Tratamientos especializados para eliminar infestaciones.",
    href: "/servicios/chinches",
    icon: iconChinche
  },
  {
    title: "Control de arañas",
    description:
      "Control preventivo y correctivo para espacios seguros.",
    href: "/servicios/aranas",
    icon: iconSpider
  },
  {
    title: "Fumigación comercial",
    description:
      "Programas de control para empresas e industrias.",
    href: "/servicios/comercial",
    icon: iconFumigacion
  },
];

function Services() {
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <span className="font-heading uppercase tracking-[0.2em] text-primary">
          Nuestros servicios
        </span>

        <h2 className="mt-5 max-w-3xl font-heading text-5xl text-black">
          Soluciones profesionales para cada tipo de plaga.
        </h2>

        <p className="mt-6 max-w-2xl font-body text-xl leading-9 text-gray-600">
          Protegemos hogares, comercios e industrias con tratamientos
          especializados para prevenir y eliminar plagas de forma segura y
          efectiva.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;