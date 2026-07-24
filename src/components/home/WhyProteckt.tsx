import IconShield from "../../assets/images/IconShield.svg";
import IconPlate from "../../assets/images/IconPlate.svg";
import clockIcon from "../../assets/images/clockIcon.svg";
import IconDone from "../../assets/images/IconDone.svg";
import IconTrophy from '../../assets/images/IconTrophy.svg';

function WhyProteckt() {
  const features = [
    {
      title: "Técnicos certificados",
      description:
        "Nuestro equipo está capacitado y certificado para ofrecer un servicio seguro y profesional.",
      icon: IconShield,
    },
    {
      title: "Productos seguros",
      description:
        "Utilizamos productos efectivos y seguros para tu familia, mascotas y negocio.",
      icon: IconPlate,
    },
    {
      title: "Respuesta rápida",
      description:
        "Atendemos solicitudes con rapidez para resolver tu problema cuanto antes.",
      icon: clockIcon,
    },
    {
      title: "Garantía de satisfacción",
      description:
        "Respaldamos nuestro trabajo para brindarte tranquilidad en cada servicio.",
      icon: IconDone,
    },
    {
      title: "Más de 5 años de experiencia",
      description:
        "Años de experiencia protegiendo hogares y empresas en Baja California.",
      icon: IconTrophy,
    },
  ];

  return (
    <section id="why-proteck" className="scroll-mt-24 bg-[#F5FAF6] py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        {/* Lado izquierdo */}
        <div>
          <span className="font-heading uppercase tracking-[0.2em] text-primary font-bold">
            | ¿POR QUÉ PROTECKT?
          </span>

          <h2 className="mt-4 font-heading text-5xl leading-tight text-black">
            La tranquilidad de dejar las plagas en manos de expertos.
          </h2>

          <p className="mt-6 max-w-xl font-body text-lg leading-8 text-gray-600">
            Combinamos experiencia, productos de alta calidad y atención
            personalizada para proteger hogares y negocios con soluciones
            efectivas y duraderas.
          </p>

          <div className="mt-10 flex flex-wrap gap-8">
            <div>
              <h3 className="font-heading text-5xl text-primary">5+</h3>
              <p className="mt-2 text-gray-600">Años de experiencia</p>
            </div>

            <div>
              <h3 className="font-heading text-5xl text-primary">24/7</h3>
              <p className="mt-2 text-gray-600">Atención rápida</p>
            </div>

            <div>
              <h3 className="font-heading text-5xl text-primary">100%</h3>
              <p className="mt-2 text-gray-600">Compromiso</p>
            </div>
          </div>
        </div>

        {/* Lado derecho */}
        <div className="space-y-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                flex
                gap-5
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-6
                shadow-lg
                shadow-green-100/40
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
            "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-primary/10
                  text-2xl
                "
              >
                <img
                src={feature.icon}
                alt={feature.title}
                className="h-7 w-7"
                />
              </div>

              <div>
                <h3 className="font-body text-xl font-semibold text-black">
                  {feature.title}
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyProteckt;