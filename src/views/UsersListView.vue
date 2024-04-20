<script>
import axios from 'axios'
export default {
  data() {
    return {
      users: []
    }
  },
  mounted() {
    axios
      .get('http://127.0.0.1:3000/api/users')
      .then((response) => {
        this.users = response.data
      })
      .catch((error) => {
        console.error(error)
      })
  },
  methods: {
    editUser(user) {
      axios.put('/api/users/' + user.id + 'edit', user).then((response) => {
        this.$router.go('/users')
        response.data
      })
    },
    deleteUser(user) {
      axios.delete('/api/users/' + user.id).then((response) => {
        this.$router.go('/users')
        response.data
      })
    }
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
            <th class="px-4 py-2">Nome</th>
            <th class="px-4 py-2">Sobrenome</th>
            <th class="px-4 py-2">Gênero</th>
            <th class="px-4 py-2">Telefone</th>
            <th class="px-4 py-2">Email</th>
            <th class="px-4 py-2">Criado em</th>
            <th class="px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" class="border-b">
            <td class="px-4 py-2">{{ user.id }}</td>
            <td class="px-4 py-2">{{ user.name }}</td>
            <td class="px-4 py-2">{{ user.surname }}</td>
            <td class="px-4 py-2">{{ user.gender }}</td>
            <td class="px-4 py-2">{{ user.phone }}</td>
            <td class="px-4 py-2">{{ user.email }}</td>
            <td class="px-4 py-2">{{ user.created_at }}</td>
            <td class="px-4 py-2">
              <button
                @click="editUser(user)"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Editar
              </button>
              <button
                @click="deleteUser(user)"
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Excluir
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
