import { createRouter, createWebHistory } from 'vue-router'
import Terms from '../views/ConditionTermsView.vue'
import Login from '../views/LoginView.vue'
import Home from '../views/MenuView.vue'
import MessageList from '../views/MessagesListView.vue'
import NewSchedule from '../views/RegisterMessageView.vue'
import RegistrationLogin from '../views/RegistrationLoginView.vue'
import UserList from '../views/UsersListView.vue'


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
      name: 'registration login',

      component: RegistrationLogin
    },
    {
      path: '/home',
      name: 'home',

      component: Home
    },
    {
      path: '/terms',
      name: 'terms',

      component: Terms
    },
    {
      path: '/users',
      name: 'users',

      component: UserList
    },
    {
      path: '/new-schedule',
      name: 'new-schedule',

      component: NewSchedule
    },
    {
      path: '/messages',
      name: 'messages',

      component: MessageList
    }
  ]
})

export default router
