<script setup>
defineProps({
  avatarUrl: {
    type: String,
    default: 'https://avatars.githubusercontent.com/u/9919?v=4',
  },
});
</script>

<template>
  <img v-bind:src="avatarUrl" alt="Profile" class="size-28 rounded-full" />
</template>

<style scoped></style>
