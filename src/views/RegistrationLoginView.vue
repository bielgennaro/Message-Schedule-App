<template>
  <div class="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
    <div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
      <h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">
        Realize seu cadastro em nossa plataforma!
      </h1>
      <SignUpForm />
    </div>
  </div>
</template>

<script>
import SignUpForm from '../components/SignUpForm.vue'

export default {
  components: {
    SignUpForm
  }
}
</script>
