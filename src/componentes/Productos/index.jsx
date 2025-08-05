import CardProducto from "./Cards";

export default function Productos() {
  return (
    <section id="productos" className="min-h-screen p-8 bg-yellow-50">
      <h2 className="text-3xl font-semibold mb-4">Nuestros Productos</h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="./Alfajores/index.jsx">
          <CardProducto
            titulo="Alfajores"
            descripcion="Entra a mirar todas nuestras variedades de alfajores"
            imagen="/Alfajores/alf1.png"
          />
        </a>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardProducto
          titulo="Budines"
          descripcion="Entra a mirar todas nuestras variedades de budines"
          imagen="/Alfajores/alf1.png"
        />
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardProducto
          titulo="Budines"
          descripcion="Entra a mirar todas nuestras variedades de budines"
          imagen="/Alfajores/alf1.png"
        />
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardProducto
          titulo="Budines"
          descripcion="Entra a mirar todas nuestras variedades de budines"
          imagen="/Alfajores/alf1.png"
        />
      </div>
    </section>
  );
}
