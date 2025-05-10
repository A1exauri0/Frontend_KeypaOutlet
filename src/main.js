// import './assets/main.css'
import './output.css'
import axios from 'axios'

// Configuración de Axios para la API
axios.defaults.baseURL = 'http://localhost';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.withCredentials = true; // Permitir cookies de terceros
axios.defaults.withXSRFToken = true; // Permitir el uso de XSRF token

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Crea la aplicación Vue
const app = createApp(App);

// Usa Pinia y el router
app.use(createPinia());
app.use(router);

// Cargar la sesión 
import { useAuthStore } from './stores/auth';
const auth = useAuthStore();
auth.loadSession();

app.mount('#app');
