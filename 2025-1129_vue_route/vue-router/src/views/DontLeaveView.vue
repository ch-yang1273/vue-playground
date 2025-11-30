<script setup>
import { onBeforeRouteLeave } from 'vue-router'

onBeforeRouteLeave((to, from, next) => {
  const answer = window.confirm('Are you sure you want to leave this page?')
  if (answer) {
    next()
  } else {
    next(false)
  }
})


</script>

<template>
  <h1>DontLeaveView</h1>
  <p>Try to leave this page!</p>
</template>

<style scoped>

</style>