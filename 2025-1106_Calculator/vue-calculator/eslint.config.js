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
    rules: {
      // 사용하지 않는 변수 경고
      'no-unused-vars': 'warn',
      'vue/no-unused-vars': 'warn', /* vue 템플릿의 변수 사용을 감지 */

      // console.log 경고 (프로덕션에서 제거 권장)
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

      // HTML 표준 요소와 충돌 방지 위해
      // Vue 컴포넌트 이름은 여러 단어 조합 권장 (예: CalculatorDisplay.vue)
      'vue/multi-word-component-names': 'warn',
    },
  },
];