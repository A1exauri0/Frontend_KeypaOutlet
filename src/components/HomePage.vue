<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Sección de Bienvenida -->
    <div class="bg-purple-600 text-white text-center py-20">
      <h1 class="text-4xl font-bold">Bienvenido a Keypa Outlet</h1>
      <p class="mt-4 text-xl">Explora nuestras colecciones y encuentra lo mejor en ropa y accesorios</p>
      <router-link to="/" class="mt-6 inline-block bg-white text-purple-600 py-2 px-4 rounded-lg hover:bg-purple-700">
        Ver Productos
      </router-link>
    </div>

    <!-- Categorías -->
    <div class="px-6 py-10">
      <h2 class="text-2xl font-semibold text-center mb-8">Categorías Populares</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <!-- Tarjetas de Categorías -->
        <div class="bg-white p-4 rounded-lg shadow-md">
          <img src="/images/blusa.jpg" alt="Camisas" class="w-full h-32 object-cover rounded-lg mb-4">
          <h3 class="font-semibold">Blusas</h3>
          <router-link to="/" class="text-yellow-600 mt-2 inline-block">Ver más</router-link>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md">
          <img src="/images/pantalon.jpg" alt="Pantalones" class="w-full h-32 object-cover rounded-lg mb-4">
          <h3 class="font-semibold">Pantalones</h3>
          <router-link to="/" class="text-yellow-600 mt-2 inline-block">Ver más</router-link>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md">
          <img src="/images/falda.jpg" alt="Accesorios" class="w-full h-32 object-cover rounded-lg mb-4">
          <h3 class="font-semibold">Faldas</h3>
          <router-link to="/" class="text-yellow-600 mt-2 inline-block">Ver más</router-link>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md">
          <img src="/images/cremas.jpg" alt="Zapatos" class="w-full h-32 object-cover rounded-lg mb-4">
          <h3 class="font-semibold">Maquillaje</h3>
          <router-link to="/" class="text-yellow-600 mt-2 inline-block">Ver más</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>
