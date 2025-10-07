# hello-vue

Option API 사용

## 루트 컴포넌트

```js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

- main.js를 보면 `App.vue`를 import해서 `createApp`에 전달

### creatApp

```js
function createApp(rootComponent: Component, rootProps?: object): App
```

- 첫 번째 인자는 루트 컴포넌트
- 두 번째 선택적 인자는 루트 컴포넌트에 전달할 props
- `루트 컴포넌트`로 `애플리케이션 인스턴스`를 생성하는 함수

## components 옵션

현재 컴포넌트에서 사용할 자식 컴포넌트들을 등록하는 옵션

```js
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,    // template에서 <HelloWorld /> 사용 가능
    TheWelcome     // template에서 <TheWelcome /> 사용 가능
  }
}
```

## data() 옵션

컴포넌트의 **반응형 상태(데이터)**를 정의하는 함수

```js
export default {
  data() {
    return {
      count: 0,        // 숫자
      message: '안녕',  // 문자열
      isActive: true   // 불린
    }
  }
}
```

- **함수여야 하는 이유**: 각 컴포넌트 인스턴스가 독립적인 데이터를 가지도록
- template에서 `{{ count }}` 형태로 사용
- 값이 변경되면 화면이 자동으로 업데이트 (반응형)

## methods 옵션

컴포넌트에서 사용할 **함수(메서드)**를 정의

```js
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++  // this로 data 접근
    },
    greet(name) {
      alert(`안녕하세요 ${name}님!`)
    }
  }
}
```

- template에서 `v-on:click="increment"` 형태로 사용
- 다른 메서드에서 `this.greet('철수')` 형태로 호출 가능
- `this`를 통해 data와 다른 methods에 접근

## Props (부모 → 자식 데이터 전달)

### 자식 컴포넌트 (HelloWorld.vue)
```js
export default {
  props: {
    msg: {
      type: String,     // 타입 검증
      required: true    // 필수 여부
    }
  }
}
```
```vue
<template>
  <h1>{{ msg }}</h1>  <!-- props 사용 -->
</template>
```

### 부모 컴포넌트 (App.vue)
```vue
<template>
  <HelloWorld msg="You did it!" />  <!-- props 전달 -->
</template>
```

## Event Emit (자식 → 부모 이벤트 전달)

### 자식 컴포넌트 (HelloWorld.vue)
```js
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handleClick() {
      this.count++
      this.$emit('greet', this.count)  // 'greet' 이벤트와 count 값 전달
    }
  }
}
```
```vue
<template>
  <button v-on:click="handleClick">
    인사하기 ({{ count }}번 클릭함)
  </button>
</template>
```

### 부모 컴포넌트 (App.vue)
```vue
<template>
  <HelloWorld v-on:greet="onGreet" />  <!-- v-on:이벤트명="핸들러" -->
  <p v-if="greetCount > 0">
    부모가 받은 인사 횟수: {{ greetCount }}번
  </p>
</template>
```
```js
export default {
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
```