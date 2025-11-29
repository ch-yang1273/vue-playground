<script setup>
const props = defineProps({
  aboutId: {
    type: String,
    required: false,
    default: "",
  }
})

</script>

<template>
  <h1>AboutView</h1>
  <p>{{aboutId}}</p>
</template>

<style scoped>

</style>