<template>
  <!-- Sidebar principal -->
  <aside id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-purple-700 border-r border-purple-700 sm:translate-x-0 bg-purple-700 border-purple-700"
    aria-label="Sidebar">
    <div class="h-full px-3 pb-4 overflow-y-auto bg-purple-700 bg-purple-700">
      <ul class="space-y-2 font-medium">
        <!-- Opción: Dashboard -->
        <li>
          <a href="/admin"
            class="flex items-center p-2 text-white rounded-lg hover:bg-purple-600 hover:bg-purple-600 group">
            <!-- Icono Dashboard -->
            <svg class="w-5 h-5 text-purple-300 transition duration-75 group-hover:text-white" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
              <path
                d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
              <path
                d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
            </svg>
            <span class="ms-3">Dashboard</span>
          </a>
        </li>

        <!-- Opción: Catalogos con submenú desplegable -->
        <li>
          <button type="button" @click="toggleDropdown"
            class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-purple-600 text-white"
            aria-controls="dropdown-example">
            <!-- Icono y texto E-commerce -->
            <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 11H4m15.5 5a.5.5 0 0 0 .5-.5V8a1 1 0 0 0-1-1h-3.75a1 1 0 0 1-.829-.44l-1.436-2.12a1 1 0 0 0-.828-.44H8a1 1 0 0 0-1 1M4 9v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-3.75a1 1 0 0 1-.829-.44L9.985 8.44A1 1 0 0 0 9.157 8H5a1 1 0 0 0-1 1Z" />
            </svg>

            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Catálogos</span>
            <!-- Flecha desplegable -->
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 4 4 4-4" />
            </svg>
          </button>
          <!-- Submenú E-commerce -->
          <ul v-show="dropdownOpen" class="py-2 space-y-2">
            <li>
              <a href="/admin/productos"
                class="flex items-center w-full p-2 text-purple-600 transition duration-75 rounded-lg pl-11 group hover:bg-purple-600 text-white ">Productos</a>
            </li>
            <li>
              <a href="/admin/categorias"
                class="flex items-center w-full p-2 text-purple-600 transition duration-75 rounded-lg pl-11 group hover:bg-purple-600 text-white ">Categorias</a>
            </li>
            <li>
              <a href="#"
                class="flex items-center w-full p-2 text-purple-600 transition duration-75 rounded-lg pl-11 group hover:bg-purple-600 text-white ">Invoice</a>
            </li>
          </ul>
        </li>


        <!-- Opción: Inbox con contador -->
        <li>
          <a href="#"
            class="flex items-center p-2 text-white rounded-lg hover:bg-purple-600 hover:bg-purple-600 group">
            <!-- Icono Inbox -->
            <svg class="shrink-0 w-5 h-5 text-purple-300 transition duration-75 group-hover:text-white"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
            <!-- Contador de mensajes -->
          </a>
        </li>

        <!-- Opción: Users -->
        <li>
          <a href="/admin/usuarios"
            class="flex items-center p-2 text-white rounded-lg hover:bg-purple-600 hover:bg-purple-600 group">
            <!-- Icono Users -->
            <svg class="shrink-0 w-5 h-5 text-purple-300 transition duration-75 group-hover:text-white"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path
                d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap">Usuarios</span>
          </a>
        </li>

        <!-- Opción: Products -->
        <li>
          <a href="#"
            class="flex items-center p-2 text-white rounded-lg hover:bg-purple-600 hover:bg-purple-600 group">
            <!-- Icono Products -->
            <svg class="shrink-0 w-5 h-5 text-purple-300 transition duration-75 group-hover:text-white"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
// Script para manejar el estado del submenú E-commerce
export default {
  data() {
    return {
      dropdownOpen: false, // Estado del submenú E-commerce
    };
  },
  methods: {
    // Alterna la visibilidad del submenú E-commerce
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
  },
};
</script>