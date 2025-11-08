# Setup Guide

## Package.json Explanation

### Dependencies (프로덕션)
- **vue**: Vue 3 프레임워크
- **tailwindcss**: TailwindCSS v4 코어
- **@tailwindcss/vite**: TailwindCSS Vite 플러그인
- **axios**: HTTP 클라이언트 (GitHub API용)

### DevDependencies (개발)
- **vite**: 빌드 도구
- **@vitejs/plugin-vue**: Vue SFC 지원 플러그인
- **eslint**: 코드 품질 검사 도구
- **eslint-plugin-vue**: Vue 전용 ESLint 규칙
- **eslint-config-prettier**: ESLint와 Prettier 충돌 방지
- **prettier**: 코드 포맷터 (세미콜론, 들여쓰기 등)
- **prettier-plugin-tailwindcss**: Tailwind 클래스 자동 정렬

### Scripts
- `npm run dev` - 개발 서버 시작
- `npm run build` - 프로덕션 빌드
- `npm run preview` - 빌드 결과 미리보기

## Quick Start

```bash
npm install
npm run dev
```