<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
      <h1 class="text-2xl font-bold text-center text-gray-700 mb-6">Registro</h1>
      
      <form class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-600">Nombre</label>
          <input type="text" id="name" class="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"/>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-600">Correo electrónico</label>
          <input type="email" id="email" class="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"/>
        </div>
        
        <div>
          <label for="password" class="block text-sm font-medium text-gray-600">Contraseña</label>
          <input type="password" id="password" class="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"/>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-600">Confirmar Contraseña</label>
          <input type="password" id="passwordConfirm" class="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"/>
        </div>

        <div>
          <button type="submit" class="w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500">
            Crear cuenta
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

<script>
export default {
  name: 'RegisterPage',
};
</script>
