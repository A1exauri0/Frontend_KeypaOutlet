<template>
    <div class="flex items-center bg-gray-100 p-2 rounded-lg">
      <input v-model="query" type="text" placeholder="Buscar productos..." class="flex-1 p-2 rounded-l-lg"/>
      <button @click="search" class="bg-blue-500 text-white px-4 py-2 rounded-r-lg">Buscar</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        query: ''
      };
    },
    methods: {
      search() {
        this.$router.push({ path: '/search', query: { q: this.query } });
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  