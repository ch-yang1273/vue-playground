import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // JavaScript 기본 권장 설정
  js.configs.recommended,

  // Vue 권장 설정
  ...pluginVue.configs['flat/recommended'],

  // Prettier와 충돌 방지
  eslintConfigPrettier,

  {
    languageOptions: {
      globals: {
        // 브라우저 환경 전역 객체
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        // Node.js 환경 (Vite 설정 등에서 필요)
        process: 'readonly',
      },
    },
    rules: {
      // 사용하지 않는 변수 경고
      'vue/no-unused-vars': 'warn', /* vue 템플릿의 변수 사용을 감지 */

      // console.log 경고 (프로덕션에서 제거 권장)
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

      // HTML 표준 요소와 충돌 방지 위해
      // Vue 컴포넌트 이름은 여러 단어 조합 권장 (예: CalculatorDisplay.vue)
      'vue/multi-word-component-names': 'warn',

      // 학습 목적으로 Vue 디렉티브 약자 사용 금지
      'vue/v-on-style': ['error', 'longform'], // @click 대신 v-on:click 사용
      'vue/v-bind-style': ['error', 'longform'], // :prop 대신 v-bind:prop 사용
      'vue/v-slot-style': ['error', 'longform'], // #slot 대신 v-slot:slot 사용
    },
  },
];