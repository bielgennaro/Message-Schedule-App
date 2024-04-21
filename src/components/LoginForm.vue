<template>
  <form @submit.prevent="loginUser">
    <div class="mb-4">
      <label for="email" class="block text-sm font-medium text-gray-700 dark:text-black mb-2"
        >Email</label
      >
      <input
        type="email"
        id="email"
        class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="seu@email.com"
        v-model="email"
      />
    </div>
    <div class="mb-4">
      <label for="password" class="block text-sm font-medium text-gray-700 dark:text-black mb-2"
        >Senha</label
      >
      <input
        type="password"
        id="password"
        class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Insira sua senha"
        v-model="password"
      />
      <a
        href="#"
        class="text-xs text-gray-800 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >Esqueceu a senha?</a
      >
    </div>
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center">
        <input
          type="checkbox"
          id="remember"
          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
        />
        <label for="remember" class="ml-2 block text-sm text-gray-700 dark:text-gray-500"
          >Lembrar de mim</label
        >
      </div>
      <router-link
        to="/registration-login"
        class="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >Não tem uma conta?</router-link
      >
    </div>
    <button
      type="submit"
      class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Entrar
    </button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      error: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://127.0.0.1:3000/api/auth', {
          user: this.user
        })
        console.log(response.data)
      } catch (error) {
        this.error = 'Login failed'
        console.error(error)
      }
    }
  }
}
</script>
