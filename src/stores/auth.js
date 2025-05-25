//stores/auth.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null,
  }),

  actions: {
    login(userData) {
      this.isAuthenticated = true;
      this.user = userData;
      // Guardamos la info en 'auth' en localStorage
      localStorage.setItem('auth', JSON.stringify({ isAuthenticated: this.isAuthenticated, user: this.user }));
    },

    logout() {
      this.isAuthenticated = false;
      this.user = null;
      localStorage.removeItem('auth'); // Limpiamos la sesión
    },

    loadSession() {
      const session = localStorage.getItem('auth');
      if (session) {
        const { isAuthenticated, user } = JSON.parse(session);
        this.isAuthenticated = isAuthenticated;
        this.user = user;
      }
    },
  },
});
