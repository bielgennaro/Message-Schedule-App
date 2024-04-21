<template>
  <form @submit.prevent="submitForm">
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >Nome</label
        >
        <input
          type="text"
          id="name"
          class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Seu nome aqui!"
          v-model="name"
        />
      </div>
      <div class="mb-4">
        <label for="surname" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >Sobrenome</label
        >
        <input
          type="text"
          id="surname"
          class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Seu sobrenome aqui!"
          v-model="surname"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
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
        <label
          for="password"
          class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >Senha</label
        >
        <input
          type="password"
          id="password"
          class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Insira sua senha"
          v-model="password"
        />
      </div>
      <div class="mb-4">
        <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >Número de telefone</label
        >
        <input
          type="tel"
          id="phone"
          class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Insira seu número de telefone"
          v-model="phone"
        />
      </div>
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <input
            type="checkbox"
            id="terms"
            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
          />
          <router-link to="/terms">
            <label for="terms" class="ml-2 block text-sm text-gray-700 dark:text-gray-300"
              >Aceito os termos de uso</label
            >
          </router-link>
        </div>
      </div>
      <button
        type="submit"
        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Cadastrar
      </button>
    </form>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      password: '',
      phone: ''
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post(
          'http://127.0.0.1:3000/api/users',
          {
            name: this.name,
            surname: this.surname,
            email: this.email,
            password: this.password,
            phone: this.phone
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        if (response.status === 200) {
          alert('Cadastro realizado com sucesso!')
          this.clearForm()
        } else {
          throw new Error('Erro ao cadastrar usuário')
        }
      } catch (error) {
        console.error('Erro:', error)
        alert('Erro ao cadastrar usuário. Por favor, tente novamente mais tarde.')
      }
    },
    clearForm() {
      this.name = ''
      this.surname = ''
      this.email = ''
      this.password = ''
      this.phone = ''
    }
  }
}
</script>
