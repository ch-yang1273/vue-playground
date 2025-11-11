<script setup>
const props = defineProps({
  value: {
    type: String,
    default: '0',
  },
});
</script>
<template>
  <div
    class="mb-5 flex-1 overflow-hidden rounded-lg bg-[#3d3d3d] p-5 text-right text-4xl font-light wrap-break-word text-white"
  >
    {{ value }}
  </div>
</template>

<style scoped></style>
