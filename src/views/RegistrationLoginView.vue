<template>
  <div class="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
    <div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
      <h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">
        Realize seu cadastro em nossa plataforma!
      </h1>
      <form @submit.prevent="submitForm">
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
            required
          />
          <span v-if="formErrors.required" class="text-red-500 text-sm">{{
            formErrors.required
          }}</span>
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
            required
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
            required
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
            required
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
            required
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
            required
          >
            <option value="" disabled selected>Selecione seu gênero</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
            <option value="prefiro-nao-dizer">Prefiro não dizer</option>
          </select>
        </div>
        <router-link to="/home">
          <button
            :disabled="!isFormValid"
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cadastrar
          </button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: ''
      },
      formErrors: {
        required: 'Campo obrigatório.'
      }
    }
  },
  computed: {
    isFormValid() {
      return Object.values(this.formErrors).every((error) => !error)
    }
  },
  methods: {
    validateForm() {
      this.formErrors = {}
      if (!this.formData.name) {
        this.$set(this.formErrors, 'name', 'Por favor, insira seu nome.')
      }
    },
    submitForm() {
      this.validateForm()
      if (this.isFormValid) {
        console.log('Formulário válido. Enviando...')
      } else {
        console.log('Por favor, corrija os erros no formulário.')
      }
    }
  }
}
</script>
