// Importaciones de librerías y módulos principales
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useAuthStore } from './stores/auth'
import axios from 'axios'
import 'flowbite'

// Importaciones de estilos
// import './assets/main.css' // Descomentarlo si se necesita
import './input.css'

// Importación de componentes de la aplicación
import App from './App.vue'
import router from './router'

// Configuración global de Axios para la API
axios.defaults.baseURL = 'http://localhost'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.withCredentials = true // Permitir cookies de terceros
axios.defaults.withXSRFToken = true   // Permitir el uso de XSRF token

// Crear la instancia principal de Vue
const app = createApp(App)

// Registrar Pinia (store) y el router en la aplicación
app.use(createPinia())
app.use(router)

// Cargar la sesión del usuario al iniciar la app
const auth = useAuthStore()
auth.loadSession()

// Montar la aplicación en el elemento con id 'app'
app.mount('#app')
