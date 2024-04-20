<script>
import axios from 'axios'
export default {
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

<template>
  <div class="p-6">
    <h2 class="text-xl font-bold mb-4">Lista de Usuários</h2>
    <div class="overflow-x-auto">
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-gray-200">
            <th class="px-4 py-2">Id</th>
            <th class="px-4 py-2">Texto</th>
            <th class="px-4 py-2">Telefone</th>
            <th class="px-4 py-2">Status da mensagem</th>
            <th class="px-4 py-2">Usuário</th>
            <th class="px-4 py-2">Agendada para</th>
            <th class="px-4 py-2">Criada em</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="message in messages" :key="message.id" class="border-b">
            <td class="px-4 py-2">{{ message.id }}</td>
            <td class="px-4 py-2">{{ message.textMsg }}</td>
            <td class="px-4 py-2">{{ message.whatsappNumber }}</td>
            <td class="px-4 py-2">{{ message.status }}</td>
            <td class="px-4 py-2">{{ message.user_id }}</td>
            <td class="px-4 py-2">{{ message.scheduleDate }}</td>
            <td class="px-4 py-2">{{ message.createDate }}</td>
            <td class="px-4 py-2">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Editar
              </button>
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Excluir
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
