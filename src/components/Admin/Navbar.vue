<template>
  <nav class="fixed top-0 z-50 w-full bg-white border-b border-purple-200 dark:bg-purple-600 dark:border-purple-800">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start rtl:justify-end">
          <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
            type="button"
            class="inline-flex items-center p-2 text-sm text-purple-700 rounded-lg sm:hidden hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:text-white dark:hover:bg-purple-800 dark:focus:ring-purple-600">
            <span class="sr-only">Abrir sidebar</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path clip-rule="evenodd" fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
            </svg>
          </button>
          <div class="flex ms-2 md:me-24">
            <img src="/images/logos/keypa.png" class="h-8 me-3" alt="Keypa Logo" />
            <span
              class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-purple-700 dark:text-white">
              Keypa Outlet
            </span>
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex items-center ms-3">
            <div>
              <button type="button"
                class="flex text-sm bg-purple-800 rounded-full focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-600"
                aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user photo" />
              </button>
            </div>
            <div
              class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-purple-100 rounded-sm shadow-sm dark:bg-purple-800 dark:divide-purple-700"
              id="dropdown-user">
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-purple-700 dark:text-dark" role="none">Neil Sims</p>
                <p class="text-sm font-medium text-purple-700 truncate dark:text-dark-100" role="none">
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <a href="#"
                    class="block px-4 py-2 text-sm text-purple-700 hover:bg-purple-100 dark:text-dark dark:hover:bg-purple-700 dark:hover:text-white"
                    role="menuitem">Dashboard</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 text-sm text-purple-700 hover:bg-purple-100 dark:text-dark dark:hover:bg-purple-700 dark:hover:text-white"
                    role="menuitem">Configuración</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 text-sm text-purple-700 hover:bg-purple-100 dark:text-dark dark:hover:bg-purple-700 dark:hover:text-white"
                    role="menuitem">Ganancias</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 text-sm text-purple-700 hover:bg-purple-100 dark:text-dark dark:hover:bg-purple-700 dark:hover:text-white"
                    role="menuitem">Cerrar sesión</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>