<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheWelcome
  },
  data() {
    return {
      greetCount: 0
    }
  },
  methods: {
    onGreet(count) {
      this.greetCount = count
      console.log(`자식 컴포넌트에서 인사를 ${count}번 했습니다!`)
    }
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" v-on:greet="onGreet" />
      <p v-if="greetCount > 0" class="greet-info">
        부모가 받은 인사 횟수: {{ greetCount }}번
      </p>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.greet-info {
  margin-top: 1rem;
  color: #42b883;
  font-weight: bold;
  text-align: center;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
