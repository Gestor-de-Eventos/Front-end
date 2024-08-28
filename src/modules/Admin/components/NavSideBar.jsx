import logoVerde from "@/assets/img/logo-verde.png";

const NavSideBar = ({ children }) => {
  return (
    <div>
      <nav class="fixed top-0 z-50 w-full bg-white shadow-md border-b border-gray-300">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                class="inline-flex items-center p-2 text-gray-800 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                <span class="sr-only">Abrir menu</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="#" class="flex items-center gap-4 ms-2 md:me-24">
                <img
                  src={logoVerde.src}
                  class="h-8 md:h-10 w-auto"
                  alt="FlowBite Logo"
                />
                <span class="self-center text-xl font-bold sm:text-2xl text-gray-800">
                  Coordinador
                </span>
              </a>
            </div>
            <div class="flex items-center">
              <button
                type="button"
                class="flex items-center text-sm text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 focus:ring-4 focus:ring-gray-300"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-user"
              >
                <span class="sr-only">Abrir menu</span>
                <img
                  class="w-8 h-8 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user photo"
                />
              </button>
              <div
                class="hidden z-50 my-4 mr-3 text-base list-none bg-white divide-y divide-gray-100 rounded shadow"
                id="dropdown-user"
              >
                <div class="px-4 py-3">
                  <p class="text-sm text-gray-900">Admin</p>
                  <p class="text-sm font-medium text-gray-500 truncate">
                    Admin@admin
                  </p>
                </div>
                <ul class="py-1">
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Perfil
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Cerrar sesión
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 pb-4 overflow-y-auto">
          <ul class="space-y-2 font-medium">{children}</ul>
        </div>
      </aside>
    </div>
  );
};
export default NavSideBar;
