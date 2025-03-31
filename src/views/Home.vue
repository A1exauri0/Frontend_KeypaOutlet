<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Sección de Bienvenida -->
    <div class="bg-purple-600 text-white text-center py-20 w-full">
      <h1 class="text-4xl font-bold">Bienvenido a Keypa Outlet</h1>
      <p class="mt-4 text-xl">Explora nuestras colecciones y encuentra lo mejor en ropa y accesorios</p><br>
      <!-- Componente Button -->
      <Button to="/productos" type="primary">Ver Productos</Button>

    </div>

    <!-- Categorías -->
    <div class="px-6 py-10 w-full">
      <h2 class="text-2xl font-semibold text-center mb-8">Productos Populares</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

        <!-- Componentes Card Product -->
        <Card image="/images/blusa.jpg" title="Blusas" to="/" />
        <Card image="/images/pantalon.jpg" title="Pantalon" to="/" />
        <Card image="/images/falda.jpg" title="Falda" to="/" />
        <Card image="/images/cremas.jpg" title="Cremas" to="/" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import Card from '@/components/CardProduct.vue';

export default {
  components: { Button, Card }
};
</script>
