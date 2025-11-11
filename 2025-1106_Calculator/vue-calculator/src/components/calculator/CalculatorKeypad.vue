<script setup>
import CalculatorButton from './CalculatorButton.vue';

const buttonRows = [
  [
    { label: '7', type: 'number' },
    { label: '8', type: 'number' },
    { label: '9', type: 'number' },
    { label: '+', type: 'operator' },
  ],
  [
    { label: '4', type: 'number' },
    { label: '5', type: 'number' },
    { label: '6', type: 'number' },
    { label: 'x', type: 'operator' },
  ],
  [
    { label: '1', type: 'number' },
    { label: '2', type: 'number' },
    { label: '3', type: 'number' },
    { label: '-', type: 'operator' },
  ],
  [
    { label: 'C', type: 'clear' },
    { label: '0', type: 'number' },
    { label: '=', type: 'equals' },
    { label: '.', type: 'operator' },
  ],
];
</script>

<template>
  <div class="flex flex-col gap-2.5">
    <div
      v-for="(row, rowIndex) in buttonRows"
      v-bind:key="rowIndex"
      class="flex gap-2.5"
    >
      <CalculatorButton
        v-for="button in row"
        v-bind:key="button.label"
        v-bind:label="button.label"
        v-bind:type="button.type"
      />
    </div>
  </div>
</template>

<style scoped></style>
