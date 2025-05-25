<!-- AdminLayout.vue -->
<template>
  <div class="relative flex min-h-screen bg-white">
    <Sidebar />
    <div class="flex-1 ml-64 p-6">
      <router-view />
    </div>
  </div>
</template>


<script setup>
import Sidebar from '@/components/Admin/Sidebar.vue';
</script>
