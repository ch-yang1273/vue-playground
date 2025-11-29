<script setup>
import {RouterLink} from "vue-router";
</script>

<template>
  <nav>
    <RouterLink :to="{name: 'home'}">Home</RouterLink>
    <RouterLink :to="{name: 'about', query: {id: 1}}">About_1</RouterLink>
    <RouterLink :to="{name: 'about', query: {id: 2}}">About_2</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  gap: 30px;
  justify-content: center;
}
</style>