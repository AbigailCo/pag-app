export default function Contacto() {
  return (
    <section
      id="contacto"
      className="min-h-screen flex items-center justify-center bg-[#2e3458] px-4 "
    >
       <div className="flex flex-col items-center max-w-7xl w-full gap-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#dec09a] text-center">
          CONTACTO
        </h2>
              <div className="relative flex flex-col lg:flex-row items-center max-w-6xl w-full bg-[#f9e8d9] rounded-xl shadow-2xl overflow-hidden p-8 lg:p-16 gap-10">
      
        <div className="absolute left-6 top-6 text-[#173052] text-5xl lg:text-7xl font-extrabold opacity-10 leading-none z-0 select-none">
          <p>Contacto</p>
          <p className="italic">Contacto</p>
          <p>Contacto</p>
        </div>
        <div className="relative z-10 text-[#2e3458] text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">¡Contactanos!</h2>
          <p className="text-sm sm:text-base mb-8 ">
            Estamos para ayudarte. Podés escribirnos por nuestras redes o hacer tu pedido directamente.
            ¡Cada mensaje es una oportunidad de endulzar tu día!
          </p>

          <div className="flex justify-center lg:justify-start gap-6">

            <a
              href="https://wa.me/5492996088511"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
            >
              <img
                src="/iconos/wp.png"
                alt="WhatsApp"
                className="w-10 h-10"
              />
            </a>
            <a
              href="https://www.instagram.com/camilatisnadopasteleria/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
            >
              <img
                src="/iconos/ig.png"
                alt="Instagram"
                className="w-10 h-10"
              />
            </a>
          </div>
        </div>
      </div>
      </div>

    </section>
  );
}
