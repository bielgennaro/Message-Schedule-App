import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'
import RegistrationLogin from '../views/RegistrationLoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',

      component: Login
    },
    {
      path: '/registration-login',
      name: 'registration-login',

      component: RegistrationLogin
    }
  ]
})

export default router
