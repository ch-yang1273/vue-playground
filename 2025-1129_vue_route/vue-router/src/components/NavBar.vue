<script setup>
import {RouterLink} from "vue-router";
</script>

<template>
  <nav>
    <RouterLink :to="{name: 'home'}">Home</RouterLink>
    <RouterLink :to="{name: 'about'}">About</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  gap: 30px;
  justify-content: center;
}
</style>