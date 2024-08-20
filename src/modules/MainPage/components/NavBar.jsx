export default function NavBar() {
  return (
    <nav className="bg-secondary sticky top-0 w-full z-20 start-0 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-3 py-2">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/logo-blanco.png"
            className="h-8 md:h-12"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl md:text-2xl font-bold text-white">
            SENA
          </span>
        </a>
        <div className="flex gap-1 md:gap-2">
          <button
            type="button"
            className="text-black bg-white focus:outline-none font-normal rounded-lg text-sm md:text-base px-3 py-2 md:px-4 md:py-2 text-center "
          >
            Iniciar sesión
          </button>
          <button
            type="button"
            className="text-black bg-white focus:outline-none font-normal rounded-lg text-sm md:text-base px-3 py-2 md:px-4 md:py-2 text-center "
          >
            Registrarse
          </button>
        </div>
      </div>
    </nav>
  );
}
