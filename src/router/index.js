import { useAuthStore } from "../stores/auth";
import { createRouter, createWebHistory } from "vue-router";

// Layouts
import Layout from "@/layouts/Layout.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";

// Vistas Cliente
import Home from "@/views/Home.vue";
import Login from "@/views/Auth/Login.vue";
import Register from "@/views/Auth/Register.vue";
import Catalogo from "@/views/Catalogo.vue";
import Contacto from "@/views/Contacto.vue";

// Vistas Admin
import Dashboard from "@/views/Admin/Dashboard.vue";
import Productos from "@/views/Admin/CRUD/Productos.vue";
import Usuarios from "@/views/Admin/CRUD/Usuarios.vue";
import Categorias from "@/views/Admin/CRUD/Categorias.vue";

const routes = [
  // RUTAS DEL CLIENTE
  {
    path: "/",
    component: Layout,
    children: [
      { path: "", component: Home },
      { path: "catalogo", name: "Catalogo", component: Catalogo/* ,meta: { requiresAuth: true }*/ },
      { path: "contacto", component: Contacto },
      { path: "login", component: Login },
      { path: "register", component: Register },
    ],
  },

  // RUTAS DEL ADMIN
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      { path: "", component: Dashboard },
      { path: "productos", component: Productos },
      { path: "usuarios", component: Usuarios },
      { path: "categorias", component: Categorias },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guardias de navegación
router.beforeEach((to, from, next) => {
  const auth = useAuthStore();

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    alert("Debes iniciar sesión para acceder a esta página.");
    next("/login");
  } else if ((to.path === "/login" || to.path === "/register") && auth.isAuthenticated) {
    alert("Ya has iniciado sesión.");
    next("/");
  } else {
    next();
  }
});

export default router;
