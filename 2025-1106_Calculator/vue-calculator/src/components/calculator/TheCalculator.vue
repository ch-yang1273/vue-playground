<script setup>
import CalculatorKeypad from './CalculatorKeypad.vue';
import CalculatorDisplay from './CalculatorDisplay.vue';
import { computed, ref } from 'vue';

const displayNumber = ref('0');
const displayOperator = ref('');
const previousOperator = ref('');
const displayResult = ref('0');

const handleButtonClick = (label, type) => {
  console.log('TheCalculator', label, type);
  if (type === 'clear') {
    displayNumber.value = '0';
    displayOperator.value = '';
    previousOperator.value = '';
    displayResult.value = '0';
  } else if (type === 'number') {
    // operator가 있는 상태에서 숫자가 눌리면 계산
    if (displayOperator.value) {
      displayResult.value = calculate(
        displayResult.value,
        displayNumber.value,
        previousOperator.value
      );

      displayNumber.value = '0';
      previousOperator.value = displayOperator.value;
      displayOperator.value = '';
    }

    displayNumber.value =
      displayNumber.value === '0' ? label : displayNumber.value + label;
  } else if (type === 'operator') {
    displayOperator.value = label;
  } else if (type === 'equals') {
    displayResult.value = calculate(
      displayResult.value,
      displayNumber.value,
      previousOperator.value
    );

    displayNumber.value = '0';
    previousOperator.value = '';
    displayOperator.value = '';
  }
};

const computedValue = computed(
  () => displayNumber.value + ' ' + displayOperator.value
);
const computedResult = computed(
  () => displayResult.value + ' ' + previousOperator.value
);

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return String(Number(firstNumber) + Number(secondNumber));
    case '-':
      return String(Number(firstNumber) - Number(secondNumber));
    case 'x':
      return String(Number(firstNumber) * Number(secondNumber));
    case '/':
      if (secondNumber === '0') {
        return '0';
      }
      return String(Number(firstNumber) / Number(secondNumber));
    case '':
      return secondNumber;
  }
};
</script>

<template>
  <div class="flex flex-col">
    <CalculatorDisplay
      v-bind:display-value="computedValue"
      v-bind:display-result="computedResult"
    />
    <CalculatorKeypad v-on:click="handleButtonClick" />
  </div>
</template>

<style scoped></style>
