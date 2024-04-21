<template>
  <form @submit.prevent="submitForm">
    <div class="mb-4">
      <label for="data" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >Data</label
      >
      <input
        type="date"
        id="data"
        class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="dd/mm/aaaa"
        v-model="scheduleDate"
        required
      />
    </div>
    <div class="mb-4">
      <label
        for="whatsappNumber"
        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        Seu Telefone</label
      >
      <input
        type="text"
        id="whatsappNumber"
        class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Seu número de telefone"
        v-model="whatsappNumber"
        required
      />
    </div>
    <div class="mb-4">
      <label for="mensagem" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >Mensagem</label
      >
      <textarea
        id="mensagem"
        class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Sua mensagem aqui..."
        v-model="textMsg"
        required
      ></textarea>
    </div>
    <button
      type="submit"
      class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Agendar Mensagem
    </button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      scheduleDate: '',
      whatsappNumber: '',
      textMsg: ''
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post(
          'http://127.0.0.1:3000/api/messages',
          {
            scheduleDate: this.scheduleDate,
            whatsappNumber: this.whatsappNumber,
            textMsg: this.textMsg
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        if (response.status === 201) {
          alert('Mensagem cadastrada com sucesso!')
          this.clearForm()
        } else {
          throw new Error('Erro ao cadastrar mensagem')
        }
      } catch (error) {
        console.error('Erro:', error)
        alert('Erro ao cadastrar mensagem. Por favor, tente novamente mais tarde.')
      }
    },
    clearForm() {
      this.scheduleDate = ''
      this.whatsappNumber = ''
      this.textMsg = ''
    }
  }
}
</script>
