export default function Header() {
  return (
    <div>
      <nav class="bg-primary">
        <div class="relative max-w-screen-xl flex items-center justify-center mx-auto p-2">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo-blanco.png" class="h-8 md:h-10" alt="SENA Logo" />
            <span class="self-center text-xl md:text-2xl font-bold whitespace-nowrap text-white">
              Gestor de eventos
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
}
