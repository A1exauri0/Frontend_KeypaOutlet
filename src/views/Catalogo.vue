<!-- src/views/Products.vue -->
<template>
    <div class="px-6 py-10 w-full">
      <h2 class="text-2xl font-semibold text-center mb-8">Productos</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

        <!-- Componentes Card Product -->
        <Card image="/images/blusa.jpg" title="Blusas" to="/" />
        <Card image="/images/pantalon.jpg" title="Pantalon" to="/" />
        <Card image="/images/falda.jpg" title="Falda" to="/" />
        <Card image="/images/cremas.jpg" title="Cremas" to="/" />
        <Card image="/images/blusa.jpg" title="Blusas" to="/" />
        <Card image="/images/pantalon.jpg" title="Pantalon" to="/" />
        <Card image="/images/falda.jpg" title="Falda" to="/" />
        <Card image="/images/cremas.jpg" title="Cremas" to="/" />
        <Card image="/images/blusa.jpg" title="Blusas" to="/" />
        <Card image="/images/pantalon.jpg" title="Pantalon" to="/" />
        <Card image="/images/falda.jpg" title="Falda" to="/" />
        <Card image="/images/cremas.jpg" title="Cremas" to="/" />
      </div>
    </div>
</template>

<script>
    import Card from '../components/CardProduct.vue';

    export default {
        components: {
            Card
        }
    };
</script>