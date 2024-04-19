<script>
import useVuelidate from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
import { reactive } from 'vue'

export default {
  setup() {
    const formData = reactive({
      email: '',
      password: '',
      name: '',
      surname: '',
      phone: '',
      terms: false
    })

    const rules = {
      email: { required, email },
      password: { required },
      name: { required },
      surname: { required },
      phone: { required },
      terms: { required }
    }

    const handleSubmit = async () => {
      const result = await $v.value.$validate()
      if (result) {
        alert('Formulário enviado!')
      } else {
        alert('Formulário inválido!')
      }
    }

    const $v = useVuelidate(rules, formData)

    return { formData, $v, handleSubmit }
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
    <div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
      <h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">
        Realize seu cadastro em nossa plataforma!
      </h1>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >Nome</label
          >
          <input
            v-model="formData.name"
            type="text"
            id="name"
            class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Seu nome aqui!"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >Sobrenome</label
          >
          <input
            type="text"
            id="surname"
            class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Seu sobrenome aqui!"
            v-model="formData.surname"
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
            v-model="formData.email"
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
            v-model.trim="formData.password"
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
            v-model="formData.phone"
          />
        </div>
        <div class="mb-4">
          <label
            for="gender"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >Gênero</label
          >
          <select
            id="gender"
            class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="" disabled selected>Selecione seu gênero</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
            <option value="prefiro-nao-dizer">Prefiro não dizer</option>
          </select>
        </div>
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            <input
              v-model="formData.terms"
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
    </div>
  </div>
</template>
