<script>
export default {
  name: 'TodoView',
  data() {
    return {
      todos: [
        {id: 1, text: '아침먹기', completed: true},
        {id: 2, text: 'Vue 공부하기', completed: false},
      ]
    }
  },
}
</script>

<template>
  <div class="todo-view">
    <h1>Todo List</h1>
    <ul>
      <li v-for="todo in todos" v-bind:key="todo.id">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
