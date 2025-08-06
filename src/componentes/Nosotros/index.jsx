export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="min-h-screen flex items-center justify-center bg-[#2e3458] px-4 py-10"
    >
      <div className="flex flex-col items-center max-w-7xl w-full gap-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#dec09a] text-center">
          SOBRE NOSOTROS
        </h2>
        <div className="relative flex flex-col lg:flex-row items-center max-w-7xl w-full bg-[#f9e8d9] rounded-xl shadow-lg overflow-hidden p-6 lg:p-12 gap-8">
          <div className="absolute left-4 top-4 text-[#173052] text-5xl lg:text-7xl font-extrabold opacity-10 leading-none z-0">
            <p>Alfajor</p>
            <p className="italic">Alfajor</p>
            <p>Alfajor</p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <img
              src="/Nosotros/nosotros.png"
              alt="Foto sobre nosotros"
              className="w-80 rounded-lg shadow-lg object-cover"
            />
          </div>

          <div className="relative z-10 text-[#2e3458] text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              ¿Quiénes somos?
            </h2>
            <p className="text-sm sm:text-base">
              Una referencia a la empresa, creación, logros y metas. Pastelería
              artesanal con alma, hecha con amor y dedicación en cada detalle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
