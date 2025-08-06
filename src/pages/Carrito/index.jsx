import * as C from "../../componentes";
import { useEffect, useState } from "react";

export default function Carrito() {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const guardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(guardado);
  }, []);

  const generarMensaje = () => {
    if (carrito.length === 0) return "";

    let mensaje = "Hola! Quiero hacer un pedido:\n";
    carrito.forEach((item) => {
      mensaje += `• ${item.nombre} x${item.cantidad || 1}\n`;
    });
    return encodeURIComponent(mensaje);
  };

  return (
    <>
      <C.NavbarInterno />
      <main className=" px-6 bg-[#2e3458] min-h-screen text-white p-6 pt-[160px]">
        <div className="p-4 text-[#2e3458]">
          <h2 className="text-xl font-bold mb-2">Tu Pedido</h2>

          {carrito.map((item, i) => (
            <div key={i} className="mb-1">
              {item.nombre} x{item.cantidad || 1}
            </div>
          ))}

          <a
            href={`https://wa.me/549XXXXXXXXXX?text=${generarMensaje()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Enviar por WhatsApp
          </a>
        </div>
      </main>
    </>
  );
}
