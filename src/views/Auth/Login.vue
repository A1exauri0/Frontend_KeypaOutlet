<!-- src/views/LoginView.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-3xl font-bold text-center text-gray-700 mb-8">Iniciar sesión</h1>

      <form class="space-y-6" @submit.prevent="handleLogin">
        <!-- <div>
          <label for="email" class="block text-sm font-medium text-gray-600">Correo electrónico</label>
          <input v-model="email" type="email" id="email"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="ejemplo@correo.com" />
        </div> -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-600">Nombre</label>
          <input v-model="nombre" type="text" id="name"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Ingresa tu nombre" />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-600">Contraseña</label>
          <input v-model="password" type="password" id="password"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="********" />
        </div>

        <div>
          <button type="submit"
            class="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500">
            Iniciar sesión
          </button>
        </div>

        <div class="text-center">
          <p class="text-sm text-gray-600">
            ¿No tienes una cuenta?
            <router-link to="/register" class="text-yellow-500 hover:underline">Regístrate aquí</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const nombre = ref('')
const password = ref('')
const auth = useAuthStore()
const router = useRouter()

function handleLogin() {
  auth.login({ name: nombre.value })
  router.push('/') // Redirige al inicio
}
</script>
