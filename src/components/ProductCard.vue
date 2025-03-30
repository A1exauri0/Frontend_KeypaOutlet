<template>
    <div class="bg-white shadow-lg rounded-lg p-4">
      <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover rounded-lg"/>
      <div class="mt-4">
        <h3 class="text-xl font-semibold">{{ product.name }}</h3>
        <p class="text-gray-600">{{ product.description }}</p>
        <p class="text-lg font-bold mt-2">{{ product.price }}</p>
        <button @click="addToCart" class="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">Añadir al carrito</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object
    },
    methods: {
      addToCart() {
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  