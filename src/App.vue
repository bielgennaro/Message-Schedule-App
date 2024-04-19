<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/"></RouterLink>
        <RouterLink to="/registration-login"></RouterLink>
        <RouterLink to="/home"></RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
