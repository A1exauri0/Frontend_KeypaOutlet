<template>
  <footer class="bg-blue-100/80 font-sans dark:bg-gray-900">
    <br>
    <div class="container px-6 py-12 mx-auto">
      <!-- Grid de columnas -->
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Newsletter -->
        <div class="sm:col-span-2">
          <h1 class="text-xl font-semibold text-gray-800 xl:text-2xl dark:text-white">
            Suscríbete al boletín para recibir actualizaciones
          </h1>

          <div class="flex flex-col mt-6 space-y-3 md:flex-row md:space-y-0">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              class="w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring focus:ring-blue-300"
            />
            <button
              class="w-full md:w-auto md:ml-4 px-6 py-2.5 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
            >
              Suscribirse
            </button>
          </div>
        </div>

        <!-- Enlaces rápidos -->
        <div>
          <p class="font-semibold text-gray-800 dark:text-white">Enlaces rápidos</p>
          <ul class="mt-5 space-y-2">
            <li><router-link to="/" class="text-gray-600 hover:text-blue-500 hover:underline dark:text-gray-300">Inicio</router-link></li>
            <li><router-link to="/" class="text-gray-600 hover:text-blue-500 hover:underline dark:text-gray-300">Quiénes somos</router-link></li>
            <li><router-link to="/" class="text-gray-600 hover:text-blue-500 hover:underline dark:text-gray-300">Nuestra filosofía</router-link></li>
          </ul>
        </div>

        <!-- Industrias -->
        <div>
          <p class="font-semibold text-gray-800 dark:text-white">Industrias</p>
          <ul class="mt-5 space-y-2">
            <li><p class="text-gray-600 dark:text-gray-300 hover:text-blue-500 hover:underline">Retail & E-Commerce</p></li>
            <li><p class="text-gray-600 dark:text-gray-300 hover:text-blue-500 hover:underline">Tecnología</p></li>
            <li><p class="text-gray-600 dark:text-gray-300 hover:text-blue-500 hover:underline">Finanzas & Seguros</p></li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <hr class="my-10 border-gray-300 dark:border-gray-700" />

      <!-- Apps & Social -->
      <div class="flex flex-col md:flex-row md:justify-between items-center gap-8">
        <!-- App Store -->
        <div class="flex gap-4 items-center">
          <a href="#"><img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="130" alt="Google Play" /></a>
          <a href="#"><img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="130" alt="App Store" /></a>
        </div>

        <!-- Redes sociales -->
        <div class="flex gap-4 items-center" aria-label="Redes Sociales">
          <a href="#"><img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" alt="Facebook" /></a>
          <a href="#"><img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" alt="Twitter" /></a>
          <a href="#"><img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" alt="Instagram" /></a>
          <a href="#"><img src="https://www.svgrepo.com/show/94698/github.svg" width="30" alt="GitHub" /></a>
          <a href="#"><img src="https://www.svgrepo.com/show/22037/path.svg" width="30" alt="Path" /></a>
          <a href="#"><img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" alt="LinkedIn" /></a>
          <a href="#"><img src="https://www.svgrepo.com/show/22048/dribbble.svg" width="30" alt="Dribbble" /></a>
        </div>
      </div>

      <!-- Copyright -->
      <p  class="bg-gray-800 text-black text-center p-4">
        <p>&copy; 2025 Keypa Outlet - Todos los derechos reservados.</p>
      </p>
    </div>
  </footer>
</template>
