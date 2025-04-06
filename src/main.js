// import './assets/main.css'
import './output.css'

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
