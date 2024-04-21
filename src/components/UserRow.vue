<template>
  <tr class="border-b">
    <td class="px-4 py-2">{{ user.id }}</td>
    <td class="px-4 py-2">{{ user.name }}</td>
    <td class="px-4 py-2">{{ user.surname }}</td>
    <td class="px-4 py-2">{{ user.gender }}</td>
    <td class="px-4 py-2">{{ user.phone }}</td>
    <td class="px-4 py-2">{{ user.email }}</td>
    <td class="px-4 py-2">{{ user.created_at }}</td>
    <td class="px-4 py-2">
      <button
        @click="editUser"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Editar
      </button>
      <button
        @click="deleteUser"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Excluir
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['user'],
  methods: {
    editUser() {
      this.$emit('edit', this.user)
    },
    deleteUser() {
      this.$emit('delete', this.user)
    }
  }
}
</script>
