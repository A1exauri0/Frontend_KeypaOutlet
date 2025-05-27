<template>
  <CrudTable :headers="headers" :items="productos">
    <template #toolbar>
      <!-- filtros, botones -->
      <button @click="nuevoProducto" class="bg-blue-500 text-white px-3 py-1 rounded">Nuevo</button>
    </template>

    <template #actions="{ item }">
      <button @click="editar(item)" class="text-blue-500">Editar</button>
      <button @click="eliminar(item)" class="text-red-500 ml-2">Eliminar</button>
    </template>
  </CrudTable>
</template>

<script setup>
import { ref, onMounted } from 'vue'; // Asegúrate de importar todo lo que uses

import CrudTable from '@/components/Admin/crud.vue';

const productos = ref([
  { nombre: 'Laptop', descripcion: 'Lenovo' },
  { nombre: 'Camisa', descripcion: 'Moda' }
]);

const headers = [
  { key: 'nombre', label: 'Nombre' },
  { key: 'descripcion', label: 'Descripción' }
];

function nuevoProducto() {
  console.log('Crear nuevo producto');
}

function editar(producto) {
  console.log('Editar', producto);
}

function eliminar(producto) {
  console.log('Eliminar', producto);
}
</script>
