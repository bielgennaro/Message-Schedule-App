<template>
  <div class="flex h-screen">
    <Sidebar />
    <MainContent />
  </div>
</template>

<script>
import Sidebar from '../components/MainSidebar.vue'
import MainContent from '../components/MainContent.vue'

export default {
  components: {
    Sidebar,
    MainContent
  }
}
</script>
