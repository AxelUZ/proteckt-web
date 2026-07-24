import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#services" },
  { label: "¿Por qué Proteck?", href: "#why-proteck" },
  { label: "Proceso", href: "#process" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
          relative
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

        <a href="#hero" className="flex items-center">
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

        {/* Navigation - centrado absoluto respecto al header, no al espacio sobrante */}

        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
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

        {/* CTA */}

        <a
          href="https://wa.link/wwikda"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
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
      </div>
    </header>
  );
}

export default Header;