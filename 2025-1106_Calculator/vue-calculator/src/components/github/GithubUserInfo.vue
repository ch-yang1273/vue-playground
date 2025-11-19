<script setup>
defineProps({
  login: {
    type: String,
    default: 'octocat',
  },
  name: {
    type: String,
    default: 'monalisa octocat',
  },
});
</script>

<template>
  <h2 class="text-2xl text-white">{{ login }}</h2>
  <p class="text-white">{{ name }}</p>
</template>

<style scoped></style>
