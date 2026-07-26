import logo from "../../assets/images/logo.png";

import facebookIcon from "../../assets/icons/facebookIcon.svg";
import instagramIcon from "../../assets/icons/instagramIcon.svg";
import whatsappIcon from "../../assets/icons/whatsappIcon.svg";

import phoneIcon from "../../assets/icons/phoneIcon.svg";
import emailIcon from "../../assets/icons/emailIcon.svg";
import locationIcon from "../../assets/icons/locationIcon.svg";
import clockIcon from "../../assets/icons/clockIcon.svg";

function Footer() {
  return (
    <footer
      aria-labelledby="footer-title"
      className="bg-black text-white"
    >
      <h2 id="footer-title" className="sr-only">
        Información de contacto de Proteck
      </h2>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Proteck"
              loading="lazy"
              decoding="async"
              width={180}
              height={64}
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
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 transition hover:bg-primary"
              >
                <img
                  src={facebookIcon}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  width={40}
                  height={40}
                  className="h-10 w-10 invert"
                />
              </a>

              <a
                href="https://www.instagram.com/proteckmxli/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 transition hover:bg-primary"
              >
                <img
                  src={instagramIcon}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  width={40}
                  height={40}
                  className="h-10 w-10 invert"
                />
              </a>

              <a
                href="https://wa.link/wwikda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 transition hover:bg-primary"
              >
                <img
                  src={whatsappIcon}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  width={40}
                  height={40}
                  className="h-10 w-10 invert"
                />
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
                  href="tel:+526863939561"
                  className="flex items-center gap-3 text-gray-400 transition hover:text-primary"
                >
                  <img
                    src={phoneIcon}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    width={20}
                    height={20}
                    className="h-5 w-5 invert"
                  />
                  <span>686 393 9561</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:fumigacionesproteck@gmail.com"
                  className="flex items-center gap-3 text-gray-400 transition hover:text-primary"
                >
                  <img
                    src={emailIcon}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    width={20}
                    height={20}
                    className="h-5 w-5 invert"
                  />
                  <span>fumigacionesproteck@gmail.com</span>
                </a>
              </li>

              <li>
                <a
                  href="https://maps.google.com/?q=Proteck+Mexicali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 transition hover:text-primary"
                >
                  <img
                    src={locationIcon}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    width={20}
                    height={20}
                    className="h-5 w-5 invert"
                  />
                  <span>Mexicali, Baja California</span>
                </a>
              </li>

              <li className="flex items-center gap-3">
                <img
                  src={clockIcon}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  width={20}
                  height={20}
                  className="h-5 w-5 invert"
                />
                <span>Lunes a Domingo · 8:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-16 border-t border-zinc-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-body text-sm text-gray-500">
              © {new Date().getFullYear()} Proteck. Todos los derechos reservados.
            </p>

            <div className="flex gap-6 font-body text-sm text-gray-500">
              <a
                href="/privacy"
                className="transition hover:text-white"
              >
                Aviso de privacidad
              </a>

              <a
                href="/terms"
                className="transition hover:text-white"
              >
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