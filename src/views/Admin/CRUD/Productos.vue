<template>
  <Crud :items="productos">
    <!-- Barra de herramientas -->
    <template #toolbar>
      <button
        class="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded shadow transition-colors"
      >
        <IconPlusOutline class="w-5 h-5" />
        Agregar producto
      </button>
    </template>

    <!-- Encabezados de columnas -->
    <template #columns-header>
      <th class="px-6 py-3">Nombre</th>
      <th class="px-6 py-3">Descripcion</th>
      <th class="px-6 py-3">Precio</th>
      <th class="px-6 py-3">Categoría</th>
      <th class="px-6 py-3">Marca</th>
    </template>

    <!-- Celdas por fila -->
    <template #columns="{ item }">
      <td class="px-6 py-4">{{ item.nombre }}</td>
      <td class="px-6 py-4">{{ item.descripcion }}</td>
      <td class="px-6 py-4">${{ item.precio }}</td>
      <td class="px-6 py-4">{{ item.categoria }}</td>
      <td class="px-6 py-4">{{ item.marca }}</td>
    </template>

    <!-- Acciones -->
    <template #actions="{ item }">
      <div class="flex space-x-2">
        <!-- Editar-->
        <a href="#" @click="editar(item)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          <IconEditOutline class="w-6 h-6 text-blue-600 dark:text-white" />
        </a>
        <!-- Editar-->
        <a href="#" @click="eliminar(item)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          <IconTrashBinOutline class="w-6 h-6 text-red-600 dark:text-white" />
        </a>
      </div>
    </template>
  </Crud>
</template>

<script setup>
import Crud from '@/components/Admin/crud.vue';
import {
  IconEditOutline,
  IconTrashBinOutline,
  IconPlusOutline
} from '@iconify-prerendered/vue-flowbite'

const productos = [
  { nombre: 'Laptop', descripcion: 'Laptop', precio: 15000, categoria: 'Electrónica', marca: 'Lenovo' },
  { nombre: 'Camisa', descripcion: 'Ropa', precio: 300, categoria: 'Ropa', marca: 'Shein' },
  // ...
];

function editar(item) {
  console.log('Editar:', item);
}
function eliminar(item) {
  console.log('Eliminar:', item);
}
</script>
