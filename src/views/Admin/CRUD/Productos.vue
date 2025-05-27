<template>
  <crud :headers="headers" :items="productos">
    <template #toolbar>
      <!-- filtros, botones -->
      <div>
        <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio"
          class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          type="button">
          <svg class="w-3 h-3 text-gray-500 dark:text-gray-400 me-3" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
          </svg>
          Últimos 30 días
          <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 1 4 4 4-4" />
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div id="dropdownRadio"
          class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600"
          data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top"
          style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(522.5px, 3847.5px, 0px);">
          <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
            <li>
              <div class="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="filter-radio-example-1" type="radio" value="" name="filter-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="filter-radio-example-1"
                  class="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">Último día</label>
              </div>
            </li>
            <li>
              <div class="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <input :checked="true" id="filter-radio-example-2" type="radio" value="" name="filter-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="filter-radio-example-2"
                  class="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">Últimos 7
                  días</label>
              </div>
            </li>
            <li>
              <div class="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="filter-radio-example-3" type="radio" value="" name="filter-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="filter-radio-example-3"
                  class="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">Últimos 30
                  días</label>
              </div>
            </li>
            <li>
              <div class="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="filter-radio-example-4" type="radio" value="" name="filter-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="filter-radio-example-4"
                  class="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">Último mes</label>
              </div>
            </li>
            <li>
              <div class="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <input id="filter-radio-example-5" type="radio" value="" name="filter-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="filter-radio-example-5"
                  class="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">Último año</label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <button @click="nuevoProducto" class="bg-purple-600 text-white px-3 py-1 rounded">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M5 12h14m-7 7V5" />
        </svg>

      </button>
    </template>

    <template #actions="{ item }">
      <div class="flex space-x-2">
        <a href="#" @click="editar(item)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          <svg class="w-6 h-6 text-blue-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
          </svg>
        </a>
        <a href="#" @click="eliminar(item)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          <svg class="w-6 h-6 text-red-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
          </svg>
        </a>
      </div>
    </template>
  </crud>
</template>

<script setup>
import { ref, onMounted } from 'vue'; // Asegúrate de importar todo lo que uses

import crud from '@/components/Admin/crud.vue';

const productos = ref([
  { nombre: 'Laptop', descripcion: 'Lenovo', precio: 12000, categoria: 'Tecnología', marca: 'Lenovo' },
  { nombre: 'Camisa', descripcion: 'Moda', precio: 400, categoria: 'Ropa', marca: 'Zara' },
  { nombre: 'Laptop', descripcion: 'Lenovo', precio: 12000, categoria: 'Tecnología', marca: 'Lenovo' },
  { nombre: 'Camisa', descripcion: 'Moda', precio: 400, categoria: 'Ropa', marca: 'Zara' }
]);

const headers = [
  { key: 'nombre', label: 'Nombre' },
  { key: 'descripcion', label: 'Descripción' },
  { key: 'precio', label: 'Precio' },
  { key: 'categoria', label: 'Categoría' },
  { key: 'marca', label: 'Marca' }
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
