<template>
  <div class="p-6">
    <h2 class="text-xl font-bold mb-4">Lista de Mensagens</h2>
    <div class="overflow-x-auto">
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-gray-200">
            <th class="px-4 py-2">Id</th>
            <th class="px-4 py-2">Texto</th>
            <th class="px-4 py-2">Telefone</th>
            <th class="px-4 py-2">Status</th>
            <th class="px-4 py-2">Agendada para</th>
            <th class="px-4 py-2">Criada em</th>
          </tr>
        </thead>
        <tbody>
          <MessageItem v-for="message in messages" :key="message.id" :message="message" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MessageItem from './MessageItem.vue'

export default {
  components: {
    MessageItem
  },
  data() {
    return {
      messages: []
    }
  },
  mounted() {
    axios
      .get('http://127.0.0.1:3000/api/messages')
      .then((response) => {
        this.messages = response.data
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
</script>
