import logo from "../../assets/images/logo.png";

import facebookIcon from "../../assets/images/facebookIcon.svg";
import instagramIcon from "../../assets/images/instagramIcon.svg";
import whatsappIcon from "../../assets/images/whatsappIcon.svg";

import phoneIcon from "../../assets/images/phoneIcon.svg";
import emailIcon from "../../assets/images/emailIcon.svg";
import locationIcon from "../../assets/images/locationIcon.svg";
import clockIcon from "../../assets/images/clockIcon.svg";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Proteckt"
              className="mb-6 h-16 w-auto"
            />

            <p className="font-body leading-8 text-gray-400">
              Soluciones profesionales de fumigación y control de plagas para
              hogares, comercios e industrias en Mexicali, Baja California.
            </p>

            {/* Redes Sociales */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.facebook.com/ProteckControldePlagas"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 transition hover:bg-primary"
              >
                 <img src={facebookIcon} alt="Facebook" className="h-10 w-10 invert" /> 
              </a>

              <a
                href="https://www.instagram.com/proteckmxli/"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 transition hover:bg-primary"
              >
                 <img src={instagramIcon} alt="Instagram" className="h-10 w-10 invert" />
              </a>

              <a
                href="https://wa.link/wwikda"
                aria-label="WhatsApp"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 transition hover:bg-primary"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="h-10 w-10 invert" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="mb-6 font-heading text-2xl">
              Servicios
            </h3>

            <ul className="space-y-4 font-body text-gray-400">
              <li>Control de cucarachas</li>
              <li>Control de roedores</li>
              <li>Control de termitas</li>
              <li>Control de hormigas</li>
              <li>Control de chinches</li>
              <li>Fumigación comercial</li>
            </ul>
          </div>

          {/* Cobertura */}
          <div>
            <h3 className="mb-6 font-heading text-2xl">
              Cobertura
            </h3>

            <ul className="space-y-4 font-body text-gray-400">
              <li>Mexicali</li>
              <li>Valle de Mexicali</li>
              <li>San Felipe</li>
              <li>Ciudad Morelos</li>
              <li>Los Algodones</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-6 font-heading text-2xl">
              Contacto
            </h3>

            <ul className="space-y-5 font-body text-gray-400">
              <li>
                <a
                    href="tel:6863939561"
                    className="flex items-center gap-3 text-gray-400 transition hover:text-primary"
                >
                    <img src={phoneIcon} alt="" className="h-5 w-5 invert" />
                    <span>686 393 9561</span>
                </a>
              </li>

              <li>
                <a
                    href="mailto:fumigacionesproteck@gmail.com"
                    className="flex items-center gap-3 text-gray-400 transition hover:text-primary"
                >
                    <img src={emailIcon} alt="" className="h-5 w-5 invert" />
                    <span>fumigacionesproteck@gmail.com</span>
                </a>
              </li>

              <li>
                <a
                    href="https://maps.google.com/?q=Proteckt+Mexicali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 transition hover:text-primary"
                >
                    <img src={locationIcon} alt="" className="h-5 w-5 invert" />
                    <span>Mexicali, Baja California</span>
                </a>
              </li>

              <li className="flex items-center gap-3">
                <img src={clockIcon} alt="" className="h-5 w-5 invert" />
                <span>Lunes a Sábado · 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-16 border-t border-zinc-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-body text-sm text-gray-500">
              © {new Date().getFullYear()} Proteckt. Todos los derechos reservados.
            </p>

            <div className="flex gap-6 font-body text-sm text-gray-500">
              <a href="#" className="transition hover:text-white">
                Aviso de privacidad
              </a>

              <a href="#" className="transition hover:text-white">
                Términos y condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;