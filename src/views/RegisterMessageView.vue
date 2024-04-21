<template>
  <div class="min-h-screen flex items-center justify-center w-full dark:bg-blue-950">
    <div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
      <h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">Agendar Mensagem</h1>
      <ScheduleForm />
    </div>
  </div>
</template>

<script>
import ScheduleForm from '../components/ScheduleForm.vue'

export default {
  components: {
    ScheduleForm
  }
}
</script>
