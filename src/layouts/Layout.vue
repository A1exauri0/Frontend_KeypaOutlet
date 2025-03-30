<!-- src/layouts/Layout.vue -->
<template>
    <router-view />
</template>


<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<!-- <template>
    <div class="flex flex-col min-h-screen">
      <header>
      </header>
      
      <main class="flex-1">
        <router-view />
      </main>
  
      <footer>
      </footer>
    </div>
  </template> 
  
  <script>
  export default {
    name: 'Layout',
  };
  </script>
  
  <style scoped>
  /* Aquí puedes agregar el estilo para el layout */
  </style>
  -->