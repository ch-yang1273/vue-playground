<script setup>
import CalculatorButton from './components/calculator/CalculatorButton.vue';
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-amber-50 p-5">
    <div
      class="flex flex-row items-stretch gap-7 rounded-xl bg-neutral-800 p-5 shadow-2xl"
    >
      <CalculatorButton label="텍스트" />
    </div>
  </div>
</template>

<style scoped></style>
