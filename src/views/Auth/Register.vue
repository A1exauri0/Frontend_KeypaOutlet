<!-- src/views/RegisterView.vue (o como se llame tu archivo) -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-3xl font-bold text-center text-gray-700 mb-8">Registro</h1>

      <form class="space-y-6" @submit.prevent="handleRegister">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-600">Nombre</label>
          <input v-model="form.name" type="text" id="name"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Tu nombre completo" />
          <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name[0] }}</p>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-600">Correo electrónico</label>
          <input v-model="form.email" type="email" id="email"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="ejemplo@correo.com" />
          <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email[0] }}</p>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-600">Contraseña</label>
          <input v-model="form.password" type="password" id="password"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="********" />
          <p v-if="errors.password" class="text-red-500 text-xs mt-1">{{ errors.password[0] }}</p>
        </div>

        <div>
          <label for="password_confirmation" class="block text-sm font-medium text-gray-600">Confirmar
            Contraseña</label>
          <input v-model="form.password_confirmation" type="password" id="password_confirmation"
            class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="********" />
          <!-- No necesitas mostrar error para password_confirmation usualmente, el error vendrá en 'password' -->
        </div>

        <!-- Si tienes términos de servicio (configurado en Jetstream) -->
        <!-- <div v-if="jetstream.hasTermsAndPrivacyPolicyFeature" class="mt-4">
          <label for="terms" class="flex items-center">
            <input type="checkbox" v-model="form.terms" id="terms" name="terms" class="rounded border-gray-300 text-purple-600 shadow-sm focus:ring-purple-500"/>
            <span class="ml-2 text-sm text-gray-600">
              Acepto los <a target="_blank" :href="route('terms.show')" class="underline">Términos de Servicio</a> y la <a target="_blank" :href="route('policy.show')" class="underline">Política de Privacidad</a>
            </span>
          </label>
          <p v-if="errors.terms" class="text-red-500 text-xs mt-1">{{ errors.terms[0] }}</p>
        </div> -->


        <div>
          <button type="submit" :disabled="isSubmitting"
            class="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50">
            {{ isSubmitting ? 'Creando cuenta...' : 'Crear cuenta' }}
          </button>
        </div>

        <div class="text-center">
          <p class="text-sm text-gray-600">
            ¿Ya tienes cuenta?
            <router-link to="/login" class="text-yellow-500 hover:underline">Inicia sesión aquí</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios' // Axios configurado globalmente
import { useAuthStore } from '@/stores/auth' // Tu store de Pinia

const router = useRouter()
const authStore = useAuthStore()

const form = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  // terms: false, // Descomenta si usas términos y condiciones
})

const errors = ref({}) // Para almacenar errores de validación del backend
const isSubmitting = ref(false)

// Podrías obtener esto de una llamada a /api/jetstream-features o similar si lo necesitas dinámicamente
// const jetstream = reactive({
//   hasTermsAndPrivacyPolicyFeature: true, // o false, según tu config de Jetstream
// });


async function handleRegister() {
  isSubmitting.value = true
  errors.value = {} // Limpiar errores previos

  try {
    // 1. Obtener la cookie CSRF (Sanctum la necesita para rutas web)
    await axios.get('/sanctum/csrf-cookie')

    // 2. Intentar registrar al usuario
    // La ruta '/register' es la que Fortify provee
    await axios.post('/register', form)

    // 3. Si el registro es exitoso, Fortify automáticamente inicia sesión al usuario.
    // Ahora, obtenemos los datos del usuario para actualizar el store.
    const userResponse = await axios.get('/api/user')
    authStore.login(userResponse.data) // Actualiza Pinia y localStorage

    // 4. Redirigir al usuario
    router.push('/') // O a la ruta que desees después del registro (ej. '/dashboard')

  } catch (error) {
    if (error.response && error.response.status === 422) {
      // Error de validación de Laravel
      errors.value = error.response.data.errors
      // console.log('Errores de validación:', errors.value);
    } else {
      // Otro tipo de error (red, servidor, etc.)
      console.error('Error durante el registro:', error.response?.data || error)
      // Podrías mostrar un mensaje de error genérico al usuario aquí
      errors.value = { general: ['Ocurrió un error inesperado. Inténtalo de nuevo.'] };
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>