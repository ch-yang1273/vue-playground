<script setup>
const props = defineProps({
  displayValue: {
    type: String,
    default: '0',
  },
  displayResult: {
    type: String,
    default: '0',
  },
});
</script>
<template>
  <div class="mb-5 flex flex-col bg-[#3d3d3d] px-5 py-2">
    <div
      class="flex-1 overflow-hidden rounded-lg text-right text-4xl font-light wrap-break-word text-white"
    >
      {{ displayValue }}
    </div>
    <div class="text-right text-2xl text-gray-400">{{ displayResult }}</div>
  </div>
</template>

<style scoped></style>
