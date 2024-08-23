export function Registrar() {
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
          src="../src/assets/img/logo-verde.png"
          className="h-16 md:h-16"
          alt="Logo Blanco SENA"
        />
      </header>

      <main className="w-full">
        <section className="flex flex-col gap-12">
          <div>
            <h1 className="text-4xl font-bold text-center">Crea tu cuenta</h1>
          </div>
          <div>
            <form class="w-full mx-auto">
              <div className="mb-4">
                <label
                  for="role"
                  class="block mb-2 text-base font-bold text-primary "
                >
                  Selecciona tu rol
                </label>
                <select
                  id="role"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full px-2.5 py-3"
                >
                  <option value="coordinador">Coordinador</option>
                  <option value="instructor">Instructor</option>
                </select>
              </div>

              <div class="mb-5">
                <label
                  for="id"
                  class="block mb-2 text-base font-bold text-primary "
                >
                  Nombres
                </label>
                <input
                  type="text"
                  id="names"
                  placeholder="Ingresa tus nombres"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full px-2.5 py-3"
                  required
                />
              </div>
              <div class="mb-5">
                <label
                  for="id"
                  class="block mb-2 text-base font-bold text-primary "
                >
                  Apellidos
                </label>
                <input
                  type="text"
                  id="lastNames"
                  placeholder="Ingresa tus apellidos"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full px-2.5 py-3"
                />
              </div>
              <div class="mb-4">
                <label
                  for="password"
                  class="block mb-2 text-base font-bold text-primary"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Ingresa tu contraseña"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full px-2.5 py-3"
                  required
                />
              </div>

              <button
                type="submit"
                class="mt-4 w-full text-white bg-[#277400] hover:bg-[#277400] focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Registrarme
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer>
        <p class=" text-black font-medium text-sm text-center">
          ¿Ya tienes una cuenta?{" "}
          <a href="/auth/iniciarsesion" className="text-primary">
            Iniciar sesión
          </a>
        </p>
      </footer>
    </div>
  );
}
