import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";

import logoVerde from "@/assets/img/logo-verde.png";
import ItemsList from "./ItemsList.jsx";

const NavSideBar = () => {
  return (
    <div>
      <nav class="fixed top-0 z-30 w-full bg-white shadow-md border-b border-gray-300">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="sidebar"
                data-drawer-toggle="sidebar"
                aria-controls="sidebar"
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
                  Instructor
                </span>
              </a>
            </div>
            <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <User
                  as="button"
                  avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                  }}
                  className="transition-transform"
                  name="FA"
                />
              </DropdownTrigger>
              <DropdownMenu
                aria-label="User Actions"
                variant="flat"
                className="divide-y"
              >
                <DropdownItem key="profile" className="h-14 gap-2 border-b ">
                  <User
                    as="button"
                    avatarProps={{
                      src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                    }}
                    className="transition-transform"
                    description="@Falzate"
                    name="Felipe Alzate"
                  />
                </DropdownItem>
                <DropdownItem key="profile">Perfil</DropdownItem>
                <DropdownItem
                  href="/"
                  key="logout"
                  color="danger"
                  className="flex bg-red-100 mt-2"
                >
                  <div className="flex items-center justify-between">
                    <span>Cerrar sesion</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 ms-2"
                    >
                      <path d="M5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2ZM9 11V8L4 12L9 16V13H15V11H9Z"></path>
                    </svg>
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </nav>

      <aside
        id="sidebar"
        class="fixed top-0 left-0 z-20 w-56 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 pb-4 overflow-y-auto">
          <ul class="space-y-2 font-bold">
            <ItemsList
              href={"/admin/instructor"}
              logo="ri-dashboard-horizontal-fill flex w-5 h-5 text-xl justify-center items-center text-primary transition duration-75 group-hover:text-gray-600"
              title="Panel"
            />
            <ItemsList
              href={"/admin/instructor/espacios"}
              logo="ri-road-map-fill flex w-5 h-5 text-xl justify-center items-center text-primary transition duration-75 group-hover:text-gray-600"
              title="Espacios"
            />
            <ItemsList
              href={"/admin/instructor/eventos"}
              logo="ri-inbox-2-fill flex w-5 h-5 text-xl justify-center items-center text-primary transition duration-75 group-hover:text-gray-600"
              title="Eventos"
            ></ItemsList>
            <ItemsList
              href={"/admin/instructor/inventario"}
              logo="ri-pencil-ruler-fill flex w-5 h-5 text-xl justify-center items-center text-primary transition duration-75 group-hover:text-gray-600"
              title="Inventario"
            />
            <ItemsList
              href={"/admin/instructor/insumos"}
              logo="ri-compasses-2-fill flex w-5 h-5 text-xl justify-center items-center text-primary transition duration-75 group-hover:text-gray-600"
              title="Insumos"
            />
          </ul>
        </div>
      </aside>
    </div>
  );
};
export default NavSideBar;
