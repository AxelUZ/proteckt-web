import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";

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
        fixed top-0 z-50 w-full transition-all duration-300
        ${
          isScrolled
            ? "border-b border-gray-200 bg-white shadow-sm"
            : "border-b border-transparent bg-transparent"
        }
      `}
    >
      <div className="mx-auto grid h-24 max-w-7xl grid-cols-3 items-center px-6">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Proteckt" className="h-16 w-auto" />
      </div>

      {/* Navegación */}
      <nav className="flex justify-center">
        <ul
          className={`
            flex items-center gap-10 font-body text-lg transition-colors duration-300
            ${isScrolled ? "text-gray-900" : "text-white"}
          `}
        >
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>

      {/* CTA */}
      <div className="flex justify-end">
        <button className="rounded-2xl bg-primary px-8 py-4 font-body text-lg font-medium text-white transition hover:bg-hover">
          Solicitar inspección
        </button>
      </div>
    </div>
    </header>
  );
}

export default Header;