<template>
    <nav class="bg-white shadow-md">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <!-- Logo -->
            <img src="/images/logos/logo.jpg" alt="Keypa Outlet Logo" class="h-10 w-auto">

            <!-- Menú -->
            <div class="hidden md:flex space-x-6">
                <router-link to="/" class="text-gray-700 hover:text-yellow-600 transition">Inicio</router-link>
                <router-link to="/catalogo"
                    class="text-gray-700 hover:text-yellow-600 transition">Catalogo</router-link>
                <router-link to="/contacto"
                    class="text-gray-700 hover:text-yellow-600 transition">Contacto</router-link>
            </div>

            <!-- Dropdown de Usuario -->
            <div class="relative hidden md:flex" ref="dropdownContainer">
                <div class="relative">
                    <button @click="toggleDropdown" class="text-gray-700 hover:text-purple-600 flex items-center">
                        <span class="mr-2">{{ auth.user ? auth.user.name : 'Cuenta' }}</span> <svg class="w-5 h-5"
                            fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>

                    <!-- Menú desplegable -->
                    <div v-if="dropdownOpen"
                        class="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                        <template v-if="!isAuthenticated">
                            <router-link to="/login" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Iniciar
                                Sesión</router-link>
                            <router-link to="/register"
                                class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Registrarse</router-link>
                        </template>
                        <template v-else>
                            <button @click="handleLogout" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                Cerrar Sesión
                            </button>
                        </template>
                    </div>
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
            <router-link to="/productos"
                class="block text-gray-700 py-2 hover:text-yellow-600 transition">Productos</router-link>
            <router-link to="/contacto"
                class="block text-gray-700 py-2 hover:text-yellow-600 transition">Contacto</router-link>
            <div class="border-t my-2"></div>
            <template v-if="!isAuthenticated">
                <router-link to="/login" class="block text-gray-700 py-2 hover:text-yellow-600 transition">Iniciar
                    Sesión</router-link>
                <router-link to="/register"
                    class="block text-gray-700 py-2 hover:text-yellow-600 transition">Registrarse</router-link>
            </template>
            <template v-else>
                <button @click="handleLogout" class="block text-gray-700 py-2 hover:text-yellow-600 transition">Cerrar
                    Sesión</button>
            </template>
        </div>
    </nav>
</template>

<script>
import { useAuthStore } from "@/stores/auth";
import axios from "axios";
import router from "@/router";

export default {
    data() {
        return {
            menuOpen: false,
            dropdownOpen: false,
        };
    },
    computed: {
        auth() {
            return useAuthStore();
        },
        isAuthenticated() {
            const auth = useAuthStore();
            return auth.isAuthenticated;
        },
    },
    mounted() {
        window.addEventListener('click', this.handleClickOutside);
    },
    beforeUnmount() {
        window.removeEventListener('click', this.handleClickOutside);
    },
    methods: {
        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen;
        },
        handleClickOutside(event) {
            const dropdown = this.$refs.dropdownContainer;
            if (dropdown && !dropdown.contains(event.target)) {
                this.dropdownOpen = false;
            }
        },
async handleLogout() {
    const authStore = useAuthStore();
    try {
        console.log('Iniciando logout...');
        await axios.post('/logout');
        console.log('Backend logout completado.');

        authStore.logout();
        console.log('Pinia store limpiado. isAuthenticated:', authStore.isAuthenticated);

        console.log('Intentando redirigir a /login...');
        // Intenta esperar la promesa de router.push para ver si se completa o falla
        await router.push('/login');
        console.log('Redirección a /login solicitada.');

    } catch (error) {
        console.error('Error durante el logout o redirección:', error);
        // Asegúrate de limpiar el estado local incluso si hay un error
        authStore.logout();
        // Intenta redirigir de nuevo en caso de error previo a la redirección original
        // Podrías añadir un .catch() aquí también para la redirección de fallback
        router.push('/login').catch(navError => {
            console.error('Error en la redirección de fallback:', navError);
            // Si todo falla, un último recurso
            // window.location.href = '/login';
        });
    }
}
    },
};
</script>
