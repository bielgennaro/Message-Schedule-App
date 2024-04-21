<template>
  <div class="p-6">
    <h2 class="text-xl font-bold mb-4">Lista de Usuários</h2>
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
        <UserRow
          v-for="user in users"
          :key="user.id"
          :user="user"
          @edit="editUser"
          @delete="deleteUser"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import UserRow from './UserRow.vue'

export default {
  components: {
    UserRow
  },
  props: ['users'],
  methods: {
    editUser(user) {
      axios.put(`/api/users/${user.id}/edit`, user).then((response) => {
        this.$router.push('/users')
        response.data
      })
    },
    deleteUser(user) {
      axios
        .delete(`http://127.0.0.1:3000/api/users/${user.id}`)
        .then(() => {
          this.$emit('deleteUser', user) // Emitindo evento para notificar o componente pai sobre a exclusão
        })
        .catch((error) => {
          console.error('Erro ao excluir usuário:', error)
        })
    }
  }
}
</script>
