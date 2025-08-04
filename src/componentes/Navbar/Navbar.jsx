import * as C from "../index";

function Navbar() {
  return (
    <nav className="bg-[#2e3458] text-white fixed top-0 w-full shadow z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo y texto */}
        <div className="flex items-center space-x-3">
          <C.Logo />
          <span className="text-sm sm:text-base opacity-80">Template APP</span>
        </div>

        {/* Menú */}
        <ul className="flex space-x-6 text-sm sm:text-base font-medium">
          <li>
            <a href="#inicio" className="hover:underline hover:text-yellow-300 transition-colors">Inicio</a>
          </li>
          <li>
            <a href="#nosotros" className="hover:underline hover:text-yellow-300 transition-colors">Nosotros</a>
          </li>
          <li>
            <a href="#productos" className="hover:underline hover:text-yellow-300 transition-colors">Productos</a>
          </li>
          <li>
            <a href="#contacto" className="hover:underline hover:text-yellow-300 transition-colors">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
