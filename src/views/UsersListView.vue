<template>
  <div>
    <UserTable :users="users" @editUser="editUser" @deleteUser="handleDeleteUser" />
  </div>
</template>

<script>
import axios from 'axios'
import UserTable from '../components/UserTable.vue'

export default {
  components: {
    UserTable
  },
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      axios
        .get('http://127.0.0.1:3000/api/users')
        .then((response) => {
          this.users = response.data
        })
        .catch((error) => {
          console.error(error)
        })
    },
    editUser(user) {
      axios.put(`/api/users/${user.id}/edit`, user).then((response) => {
        this.$router.push('/users')
        response.data
      })
    },
    handleDeleteUser(deletedUser) {
      const index = this.users.findIndex((user) => user.id === deletedUser.id)
      if (index !== -1) {
        this.users.splice(index, 1)
      }
      console.log('Usuário excluído com sucesso')
    }
  }
}
</script>
