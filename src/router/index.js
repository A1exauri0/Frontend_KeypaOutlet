// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layouts/Layout.vue';
import Home from '@/views/Home.vue';
import Login from '@/views/Auth/Login.vue';
import Register from '@/views/Auth/Register.vue';
import Productos from '@/views/Productos.vue';
import Contacto from '@/views/Contacto.vue';
import { useAuthStore } from '../stores/auth'; 

const routes = [
  {
    // Layout para el cliente
    path: '/',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: '/productos', name: 'Productos', component: Productos, meta: { requiresAuth: true } },// Ruta protegida
      { path: 'contacto', component: Contacto },
      { path: 'login', component: Login },
      { path: 'register', component: Register },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guardias de navegación
router.beforeEach((to, from, next) => {
  const auth = useAuthStore(); // Accede al store 

  // Mensaje por si no esta autenticado
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    alert('Debes iniciar sesión para acceder a esta página.');
    next('/login');
  } 
  // Mensaje por si ya esta autenticado
  else if ((to.path === '/login' || to.path === '/register') && auth.isAuthenticated) {
    alert('Ya has iniciado sesión.');
    next('/'); 
  }
  else {
    next();
  }
});

export default router;
