import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import logo from "../../assets/images/logo.png";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Clientes", href: "#clientes" },
  { label: "Servicios", href: "#services" },
  { label: "¿Por qué Proteck?", href: "#why-proteck" },
  { label: "Certificaciones", href: "#certifications" },
  { label: "Proceso", href: "#process" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`
          fixed inset-x-0 top-0 z-50
          transition-all duration-300
          ${
            isScrolled
              ? "border-b border-gray-200 bg-white/90 backdrop-blur-xl shadow-sm"
              : "bg-transparent"
          }
        `}
      >
        <div
          className={`
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            px-6
            transition-all
            duration-300
            ${isScrolled ? "h-20" : "h-24"}
          `}
        >
          {/* Logo */}

          <a href="#hero">
            <img
              src={logo}
              alt="Proteck"
              className={`
                w-auto
                transition-all
                duration-300
                ${isScrolled ? "h-12" : "h-16"}
              `}
            />
          </a>

          {/* Desktop Navigation */}

          <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <ul
              className={`
                flex
                items-center
                gap-8
                font-body
                text-[15px]
                font-medium
                transition-colors
                duration-300
                ${isScrolled ? "text-gray-900" : "text-white"}
              `}
            >
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="
                      relative
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:text-primary

                      after:absolute
                      after:left-0
                      after:-bottom-2
                      after:h-0.5
                      after:w-0
                      after:bg-primary
                      after:transition-all
                      after:duration-300

                      hover:after:w-full
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}

          <a
            href="https://wa.link/wwikda"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden
              lg:inline-flex
              items-center
              justify-center
              rounded-xl
              bg-primary
              px-7
              py-3.5
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            Solicitar inspección
          </a>

          {/* Mobile Button */}

          <button
            onClick={() => setIsMenuOpen(true)}
            className={`
              lg:hidden
              transition-colors
              duration-300
              ${isScrolled ? "text-black" : "text-white"}
            `}
          >
            <Menu size={32} />
          </button>
        </div>
      </header>
            {/* Mobile Menu */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-60 bg-white"
          >
            {/* Header */}

            <div className="flex h-24 items-center justify-between border-b border-gray-200 px-6">
              <img
                src={logo}
                alt="Proteck"
                className="h-14 w-auto"
              />

              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-900 transition hover:text-primary"
              >
                <X size={32} />
              </button>
            </div>

            {/* Links */}

            <nav className="flex h-[calc(100%-96px)] flex-col justify-between px-6 py-10">
              <ul className="space-y-8">
                {links.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.08,
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="
                        block
                        font-heading
                        text-3xl
                        text-gray-900
                        transition
                        hover:text-primary
                      "
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="https://wa.link/wwikda"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                }}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary
                  px-6
                  py-4
                  text-lg
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:shadow-xl
                "
              >
                Solicitar inspección
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;