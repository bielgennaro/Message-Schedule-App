<template>
  <div class="min-h-screen flex items-center justify-center w-full dark:bg-blue-950">
    <div class="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
      <h1 class="text-2xl font-bold text-center mb-4 dark:text-black">Bem vindo!</h1>
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'

export default {
  components: {
    LoginForm
  }
}
</script>
