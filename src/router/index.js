import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'
import Home from '../views/MenuView.vue'
import NewSchedule from '../views/RegisterMessageView.vue'
import RegistrationLogin from '../views/RegistrationLoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',

      component: Login
    },
    {
      path: '/registration-login',
      name: 'registration-login',

      component: RegistrationLogin
    },
    {
      path: '/home',
      name: 'home',

      component: Home
    },
    {
      path: '/users',
      redirect: '/list',

      //component: User
    },
    {
      path: '/new-schedule',
      name: 'new-schedule',

      component: NewSchedule
    },
    {
      path: ''
    }
  ]
})

export default router
