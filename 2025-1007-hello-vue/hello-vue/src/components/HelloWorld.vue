<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handleClick() {
      this.count++
      this.$emit('greet', this.count)  // 'greet' 이벤트를 부모로 전달
    }
  }
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <button v-on:click="handleClick" class="greet-btn">
      인사하기 ({{ count }}번 클릭함)
    </button>
    <h3>
      You've successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.greet-btn {
  display: block;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.greet-btn:hover {
  background-color: #33a06f;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }

  .greet-btn {
    margin: 1rem 0;
  }
}
</style>
