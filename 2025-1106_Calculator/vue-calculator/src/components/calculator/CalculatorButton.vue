<script setup>
import { computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'number',
    validator: (value) =>
      ['number', 'operator', 'clear', 'equals'].includes(value),
  },
});

const emit = defineEmits(['click']);

const handleClick = () => {
  console.debug('Button clicked', props.label);
  emit('click', props.label);
};

const buttonClasses = computed(() => {
  const baseClasses = [
    'rounded-lg px-6 py-6 text-2xl font-medium transition-all duration-200',
    'hover:-translate-y-0.5 active:translate-y-0 flex-1',
  ].join(' ');

  const typeClasses = {
    number: 'bg-[#3a3a3a] text-white hover:bg-[#4a4a4a]',
    operator: 'bg-[#ff9500] text-white hover:bg-[#ffaa33]',
    clear: 'bg-[#505050] text-white hover:bg-[#606060]',
    equals: 'bg-[#ff9500] text-white hover:bg-[#ffaa33]',
  };

  return `${baseClasses} ${typeClasses[props.type]}`;
});
</script>

<template>
  <button v-bind:class="buttonClasses" v-on:click="handleClick">
    {{ label }}
  </button>
</template>

<style scoped></style>
