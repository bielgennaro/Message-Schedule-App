<template>
  <div class="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
    <div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
      <h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">Agendar Mensagem</h1>
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
            v-model="data"
            required
          />
        </div>
        <div class="mb-4">
          <label for="hora" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >Hora</label
          >
          <input
            type="time"
            id="hora"
            class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="hh:mm"
            v-model="hora"
            required
          />
        </div>
        <div class="mb-4">
          <label
            for="mensagem"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >Mensagem</label
          >
          <textarea
            id="mensagem"
            class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Sua mensagem aqui..."
            v-model="mensagem"
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: '',
      hora: '',
      mensagem: ''
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('/api/agendamentos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            data: this.data,
            hora: this.hora,
            mensagem: this.mensagem
          })
        })
        if (response.ok) {
          alert('Agendamento realizado com sucesso!')
          this.data = ''
          this.hora = ''
          this.mensagem = ''
        } else {
          throw new Error('Erro ao agendar mensagem')
        }
      } catch (error) {
        console.error('Erro:', error)
        alert('Erro ao agendar mensagem. Por favor, tente novamente mais tarde.')
      }
    }
  }
}
</script>
