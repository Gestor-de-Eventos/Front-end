import logoVerde from "../../../assets/img/logo-verde.png";

export function IniciarSesion() {
  return (
    <div className="flex flex-col items-center justify-center py-4 px-4 gap-6 max-w-96 m-auto">
      <a
        href="/"
        className="flex gap-1 items-center absolute top-6 left-4 bg-primary text-white p-2 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="rgba(255,255,255,1)"
          className="w-5 h-5"
        >
          <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
        </svg>
        Regresar
      </a>
      <header>
        <img
          src={logoVerde.src}
          className="h-16 md:h-16"
          alt="Logo Blanco SENA"
        />
      </header>

      <main>
        <section className="flex flex-col gap-12">
          <div>
            <h1 className="text-4xl font-bold text-center">
              Te damos de nuevo la bienvenida
            </h1>
          </div>
          <div>
            <form className="w-full mx-auto">
              <div className="mb-5">
                <label
                  htmlFor="id"
                  className="block mb-2 text-base font-bold text-primary "
                >
                  Número de documento
                </label>
                <input
                  type="number"
                  id="id"
                  pattern="[0-9]+"
                  placeholder="Ingresa tu numero de documento"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full px-2.5 py-3"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block mb-2 text-base font-bold text-primary"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Ingresa tu contraseña"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full px-2.5 py-3"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="/auth/recuperar"
                  className="text-primary font-medium text-sm"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <button
                type="submit"
                className="mt-4 w-full text-white bg-[#277400] hover:bg-[#277400] focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Iniciar sesión
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer>
        <p className=" text-black font-medium text-sm text-center">
          ¿No tienes una cuenta?{" "}
          <a href="/auth/registrarse" className="text-primary">
            Registrate
          </a>
        </p>
      </footer>
    </div>
  );
}
