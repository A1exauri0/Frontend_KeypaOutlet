<template>
    <nav class="bg-white shadow-md">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <!-- Logo -->
            <img src="/images/logos/logo.jpg" alt="Keypa Outlet Logo" class="h-10 w-auto">

            <!-- Menú -->
            <div class="hidden md:flex space-x-6">
                <router-link to="/" class="text-gray-700 hover:text-yellow-600 transition">Inicio</router-link>
                <router-link to="/" class="text-gray-700 hover:text-yellow-600 transition">Tienda</router-link>
                <router-link to="/" class="text-gray-700 hover:text-yellow-600 transition">Nosotros</router-link>
                <router-link to="/" class="text-gray-700 hover:text-yellow-600 transition">Contacto</router-link>
            </div>

            <!-- Dropdown de Usuario -->
            <div class="relative">
                <button @click="toggleDropdown" class="text-gray-700 hover:text-purple-600 flex items-center">
                    <span class="mr-2">Cuenta</span>
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>

                <!-- Menú desplegable -->
                <div v-if="dropdownOpen" class="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                    <router-link to="/login" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Iniciar
                        Sesión</router-link>
                    <router-link to="/register"
                        class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Registrarse</router-link>
                </div>
            </div>

            <!-- Botón de Menú Móvil -->
            <button @click="menuOpen = !menuOpen" class="md:hidden text-gray-700">
                <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>

        <!-- Menú Móvil -->
        <div v-if="menuOpen" class="md:hidden bg-white py-2 px-4 shadow-lg">
            <router-link to="/" class="block text-gray-700 py-2 hover:text-yellow-600 transition">Inicio</router-link>
            <router-link to="/" class="block text-gray-700 py-2 hover:text-yellow-600 transition">Tienda</router-link>
            <router-link to="/about"
                class="block text-gray-700 py-2 hover:text-yellow-600 transition">Nosotros</router-link>
            <router-link to="/"
                class="block text-gray-700 py-2 hover:text-yellow-600 transition">Contacto</router-link>
            <div class="border-t my-2"></div>
            <router-link to="/login" class="block text-gray-700 py-2 hover:text-yellow-600 transition">Iniciar
                Sesión</router-link>
            <router-link to="/register"
                class="block text-gray-700 py-2 hover:text-yellow-600 transition">Registrarse</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            menuOpen: false,
            dropdownOpen: false,
        };
    },
    methods: {
        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen;
        },
    },
};
</script>