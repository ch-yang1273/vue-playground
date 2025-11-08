import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // Vue 권장 설정
  ...pluginVue.configs['flat/recommended'],

  // Prettier와 충돌 방지
  eslintConfigPrettier,

  {
    rules: {
      // 세미콜론 강제
      'semi': ['error', 'always'],

      // 싱글 쿼트 사용
      'quotes': ['error', 'single'],

      // 사용하지 않는 변수 경고
      'no-unused-vars': 'warn',

      // console.log 경고 (프로덕션에서 제거 권장)
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

      // HTML 표준 요소와 충돌 방지 위해
      // Vue 컴포넌트 이름은 여러 단어 조합 권장 (예: CalculatorDisplay.vue)
      'vue/multi-word-component-names': 'warn',
    },
  },
];