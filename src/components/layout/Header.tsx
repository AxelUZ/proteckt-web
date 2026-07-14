import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
       <div className="flex items-center">
        <img
            src={logo}
            alt="Proteckt"
            className="h-16 w-auto"
        />
        </div>

        {/* Navegación */}
        <nav>
          <ul className="flex items-center gap-10 font-body text-lg">
            <li>
              <a href="#">Inicio</a>
            </li>

            <li>
              <a href="#">Servicios</a>
            </li>

            <li>
              <a href="#">Nosotros</a>
            </li>

            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>

        {/* CTA */}
        <button className="rounded-2xl bg-primary px-8 py-4 font-body text-lg font-medium text-white transition hover:bg-hover">
          Solicitar inspección
        </button>
      </div>
    </header>
  );
}

export default Header;