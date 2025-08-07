import { Link } from "react-router-dom";
import * as C from "../index";

function Navbar() {
  return (
    <nav className="bg-[#2e3458] text-white fixed top-0 w-full shadow z-50">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-4">
     
        <div className="mb-4">
          <C.Logo className="w-32 h-32" />{" "}
        </div>
       
        <ul className="flex flex-wrap justify-center space-x-6 text-sm sm:text-base font-medium">
          <li>
            <a
              href="#productos"
              className="text-[#dec09a] hover:underline hover:text-yellow-300 transition-colors"
            >
              Productos
            </a>
          </li>
          <li>
            <a
              href="#nosotros"
              className="text-[#dec09a] hover:underline hover:text-yellow-300 transition-colors"
            >
              Nosotros
            </a>
          </li>

          <li>
            <a
              href="#contacto"
              className="text-[#dec09a] hover:underline hover:text-yellow-300 transition-colors"
            >
              Contacto
            </a>
          </li>
          
             <C.BotonCarrito />
          
        </ul>
       
      </div>
    </nav>
  );
}

export default Navbar;
