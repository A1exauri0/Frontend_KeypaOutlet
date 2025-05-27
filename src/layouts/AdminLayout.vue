<!-- AdminLayout.vue -->
<template>
  <header>
    <Navbar />
  </header>
  <Sidebar />
  <router-view />
</template>


<script setup>
import Sidebar from '@/components/Admin/Sidebar.vue';
import Navbar from '@/components/Admin/Navbar.vue';
</script>
