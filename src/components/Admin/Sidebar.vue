<template>
  <div :class="['h-screen bg-purple-500 text-white shadow-lg transition-all duration-300', collapsed ? 'w-20' : 'w-64']">
    <!-- Botón para retraer -->
    <div class="flex justify-between items-center px-4 py-3 border-b border-purple-700">
      <span v-if="!collapsed" class="text-2xl font-extrabold tracking-wide">Admin Keypa</span>
      <button @click="toggleSidebar" class="text-white p-2 rounded hover:bg-purple-600 transition">
        <component :is="collapsed ? ChevronRight : ChevronLeft" class="w-5 h-5" />
      </button>
    </div>

    <!-- Menú -->
    <nav class="mt-4 space-y-1">
      <RouterLink
        v-for="item in menuItems"
        :key="item.to"
        :to="item.to"
        class="flex items-center gap-4 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-purple-700"
        :class="{ 'bg-purple-700': $route.path === item.to }"
      >
        <component :is="item.icon" class="w-5 h-5" />
        <span v-if="!collapsed" class="pl-1">{{ item.label }}</span>
      </RouterLink>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import {
  LayoutDashboard,
  Package,
  Users,
  FolderOpen,
  ChevronLeft,
  ChevronRight
} from 'lucide-vue-next'

const collapsed = ref(false)
const toggleSidebar = () => {
  collapsed.value = !collapsed.value
}

const menuItems = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/productos', label: 'Productos', icon: Package },
  { to: '/admin/usuarios', label: 'Usuarios', icon: Users },
  { to: '/admin/categorias', label: 'Categorías', icon: FolderOpen }
]
</script>
