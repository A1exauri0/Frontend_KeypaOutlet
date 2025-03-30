// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layouts/Layout.vue';
import Home from '@/views/Home.vue';
import Login from '@/views/Auth/Login.vue';
import Register from '@/views/Auth/Register.vue';
import Productos from '@/views/Productos.vue';
import Contacto from '@/views/Contacto.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    children:[
      { path:"", component:Home},
      { path:"productos", component:Productos},
      { path:"contacto", component:Contacto}
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
