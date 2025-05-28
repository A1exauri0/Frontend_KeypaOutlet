<!-- src/views/LoginView.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-3xl font-bold text-center text-gray-700 mb-8">Iniciar sesión</h1>

      <!-- Mostrar mensaje de error general si existe -->
      <div v-if="loginError" class="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
        {{ loginError }}
      </div>

      <form class="space-y-6" @submit.prevent="spaLogin()">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-600">Email</label> <!-- Cambiado de 'name' a 'email' para el label -->
          <input v-model="email" type="email" id="email"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Ingresa tu email" />
          <!-- Podrías añadir manejo de errores específicos del campo si Laravel los devuelve así -->
          <!-- <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email[0] }}</p> -->
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-600">Contraseña</label>
          <input v-model="password" type="password" id="password"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="********" />
          <!-- <p v-if="errors.password" class="text-red-500 text-xs mt-1">{{ errors.password[0] }}</p> -->
        </div>

        <div>
          <button type="submit" :disabled="isSubmitting"
            class="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50">
            {{ isSubmitting ? 'Verificando...' : 'Iniciar sesión' }}
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
import { useRouter } from 'vue-router'
import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

const email = ref('')
const password = ref('')
const router = useRouter()
const authStore = useAuthStore()

const isSubmitting = ref(false) // Nuevo ref para el estado de envío
const loginError = ref(null) // Nuevo ref para errores generales del login
// const errors = ref({}) // Si quieres manejar errores de validación específicos por campo

async function spaLogin() {
  isSubmitting.value = true // Indicar que el proceso ha comenzado
  loginError.value = null  // Limpiar errores previos
  // errors.value = {} // Limpiar errores específicos previos

  try {
    // Paso 1: Obtener el token CSRF
    await axios.get('/sanctum/csrf-cookie')

    // Paso 2: Iniciar sesión
    await axios.post('/login', {
      email: email.value,
      password: password.value
    })

    // Paso 3: Obtener usuario autenticado
    const userResponse = await axios.get('/api/user')

    // Paso 4: Guardar usuario en el store
    authStore.login(userResponse.data)

    // Paso 5: Redirigir
    router.push('/') // O a la ruta que desees después del login

  } catch (error) {
    console.error('Error en spaLogin:', error.response?.data || error)
    if (error.response && error.response.status === 422) {
      // Error de validación de Laravel (ej. 'auth.failed' -> 'Estas credenciales no coinciden con nuestros registros.')
      // Fortify suele devolver el error 'auth.failed' en la clave 'email' o 'message' del objeto errors.
      // Ajusta esto según la estructura de la respuesta de error de tu backend.
      // errors.value = error.response.data.errors;
      loginError.value = 'Credenciales incorrectas o error de validación.';
    } else if (error.response && error.response.status === 401) {
      loginError.value = 'No autorizado. Por favor, verifica tus credenciales.';
    }
    else {
      loginError.value = 'Ocurrió un error al intentar iniciar sesión. Inténtalo de nuevo.'
    }
  } finally {
    isSubmitting.value = false // Indicar que el proceso ha terminado (éxito o fallo)
  }
}
</script>