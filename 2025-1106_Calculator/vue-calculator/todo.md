# Vue Calculator Project TODO

## 1. 환경 설정

- [ ] TailwindCSS v4 설치 및 설정 (Vite 전용 플러그인 방식)
  - [ ] `npm install tailwindcss @tailwindcss/vite` 실행
  - [ ] vite.config.js에 Tailwind Vite 플러그인 추가:
    ```js
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'
    import tailwindcss from '@tailwindcss/vite'

    export default defineConfig({
      plugins: [
        vue(),
        tailwindcss(),
      ],
    })
    ```
  - [ ] src/style.css 파일을 열어 Tailwind import 추가:
    ```css
    @import "tailwindcss";
    ```
  - [ ] 개발 서버 재시작 (`npm run dev`) 및 Tailwind 동작 확인

- [ ] Axios 설치 (GitHub API 호출용 - Vite에서 별도 설정 불필요)
  - [ ] `npm install axios` 실행

## 2. 프로젝트 구조 설계

```
src/
├── components/
│   ├── calculator/
│   │   ├── CalculatorDisplay.vue       # 계산 결과 표시 영역
│   │   ├── CalculatorButton.vue        # 개별 버튼 컴포넌트
│   │   ├── CalculatorKeypad.vue        # 버튼 그리드 레이아웃
│   │   └── Calculator.vue              # 계산기 메인 컴포넌트 (로직 포함)
│   ├── github/
│   │   ├── UserProfile.vue             # GitHub 유저 프로필 카드
│   │   ├── UserAvatar.vue              # 유저 아바타 이미지
│   │   └── UserInfo.vue                # 유저 정보 (이름, bio 등)
│   └── common/
│       ├── LoadingSpinner.vue          # 로딩 상태 표시
│       └── ErrorMessage.vue            # 에러 메시지 표시
├── composables/
│   ├── useCalculator.js                # 계산기 로직 (상태 + 메서드)
│   └── useGithubUser.js                # GitHub API 호출 로직
├── services/
│   └── githubApi.js                    # Axios 기반 GitHub API 서비스
└── App.vue                              # 루트 컴포넌트
```

## 3. 컴포넌트 개발 (Calculator)

### 3.1 CalculatorButton.vue
- [ ] Props 정의
  - [ ] `value` (버튼에 표시될 값)
  - [ ] `type` (number, operator, function 등)
  - [ ] `variant` (색상 테마: primary, secondary, accent 등)
- [ ] 이벤트 정의
  - [ ] `@click` 이벤트 emit
- [ ] TailwindCSS 스타일링
  - [ ] 기본 버튼 스타일
  - [ ] hover, active 상태 스타일
  - [ ] type/variant별 색상 적용

### 3.2 CalculatorDisplay.vue
- [ ] Props 정의
  - [ ] `currentValue` (현재 입력/계산 결과)
  - [ ] `previousValue` (이전 값 - 옵션)
  - [ ] `operator` (현재 선택된 연산자 - 옵션)
- [ ] TailwindCSS 스타일링
  - [ ] 디스플레이 영역 레이아웃
  - [ ] 숫자 폰트 크기 및 정렬
  - [ ] 오버플로우 처리

### 3.3 CalculatorKeypad.vue
- [ ] 버튼 레이아웃 정의
  - [ ] 숫자 버튼 (0-9)
  - [ ] 연산자 버튼 (+, -, ×, ÷)
  - [ ] 기능 버튼 (AC, C, =, ., +/-)
- [ ] CalculatorButton 컴포넌트 사용
- [ ] 이벤트 핸들링
  - [ ] 각 버튼 클릭 이벤트를 부모로 emit
- [ ] TailwindCSS Grid 레이아웃
  - [ ] 4x5 또는 원하는 그리드 구조
  - [ ] 반응형 간격 설정

### 3.4 Calculator.vue (메인 로직)
- [ ] useCalculator composable 사용
- [ ] 하위 컴포넌트 조합
  - [ ] CalculatorDisplay
  - [ ] CalculatorKeypad
- [ ] 이벤트 핸들러 연결
- [ ] 전체 계산기 레이아웃 (카드 형태)

## 4. 계산기 로직 구현 (Composable)

### 4.1 useCalculator.js
- [ ] 상태 정의 (ref 사용)
  - [ ] `currentValue` - 현재 화면에 표시될 값
  - [ ] `previousValue` - 이전 값 저장
  - [ ] `operator` - 선택된 연산자 (+, -, *, /)
  - [ ] `waitingForOperand` - 새로운 숫자 입력 대기 상태

- [ ] 메서드 구현
  - [ ] `inputNumber(num)` - 숫자 입력 처리
  - [ ] `inputDecimal()` - 소수점 입력 처리
  - [ ] `selectOperator(nextOperator)` - 연산자 선택
  - [ ] `calculate()` - 계산 실행 (= 버튼)
  - [ ] `clear()` - 현재 값만 초기화 (C)
  - [ ] `clearAll()` - 전체 초기화 (AC)
  - [ ] `toggleSign()` - 양수/음수 전환 (+/-)
  - [ ] `inputPercent()` - 퍼센트 계산 (옵션)

- [ ] 계산 로직
  - [ ] 더하기, 빼기, 곱하기, 나누기 구현
  - [ ] 0으로 나누기 예외 처리
  - [ ] 연속 계산 처리

## 5. GitHub API 연동

### 5.1 githubApi.js (Service)
- [ ] Axios 인스턴스 생성
  - [ ] baseURL: 'https://api.github.com'
  - [ ] headers 설정
- [ ] API 메서드 정의
  - [ ] `getUserInfo(username)` - 유저 정보 가져오기
  - [ ] 에러 핸들링

### 5.2 useGithubUser.js (Composable)
- [ ] 상태 정의
  - [ ] `user` - 유저 데이터 (reactive 또는 ref)
  - [ ] `loading` - 로딩 상태
  - [ ] `error` - 에러 상태
- [ ] 메서드 구현
  - [ ] `fetchUser(username)` - API 호출 및 상태 업데이트
  - [ ] onMounted 훅에서 자동 호출 (옵션)

## 6. GitHub 컴포넌트 개발

### 6.1 UserAvatar.vue
- [ ] Props 정의
  - [ ] `avatarUrl` (이미지 URL)
  - [ ] `username` (alt 텍스트용)
  - [ ] `size` (이미지 크기)
- [ ] TailwindCSS 스타일링
  - [ ] 원형 이미지
  - [ ] 보더, 그림자 효과

### 6.2 UserInfo.vue
- [ ] Props 정의
  - [ ] `name` (실명)
  - [ ] `bio` (소개)
  - [ ] `login` (username)
  - [ ] `publicRepos` (공개 저장소 수)
  - [ ] `followers` (팔로워 수)
- [ ] TailwindCSS 스타일링
  - [ ] 텍스트 레이아웃
  - [ ] 아이콘 + 통계 정보 표시

### 6.3 UserProfile.vue
- [ ] useGithubUser composable 사용
- [ ] 하위 컴포넌트 조합
  - [ ] UserAvatar
  - [ ] UserInfo
  - [ ] LoadingSpinner (로딩시)
  - [ ] ErrorMessage (에러시)
- [ ] Props 정의
  - [ ] `username` (조회할 GitHub 유저명)
- [ ] 조건부 렌더링
  - [ ] 로딩 상태
  - [ ] 에러 상태
  - [ ] 데이터 로드 완료 상태

## 7. 공통 컴포넌트

### 7.1 LoadingSpinner.vue
- [ ] TailwindCSS 애니메이션 적용
- [ ] Props로 크기, 색상 커스터마이징 가능

### 7.2 ErrorMessage.vue
- [ ] Props 정의
  - [ ] `message` (에러 메시지)
- [ ] TailwindCSS 스타일링 (빨간색 배경 등)

## 8. App.vue 통합

- [ ] 레이아웃 구성
  - [ ] 헤더 영역 (제목)
  - [ ] GitHub UserProfile 컴포넌트 (상단 또는 사이드)
  - [ ] Calculator 컴포넌트 (메인)
- [ ] TailwindCSS로 전체 레이아웃 스타일링
  - [ ] 반응형 그리드 또는 플렉스 박스
  - [ ] 다크 모드 고려 (옵션)

## 9. 테스트 및 개선

- [ ] 계산기 기능 테스트
  - [ ] 모든 연산자 동작 확인
  - [ ] 엣지 케이스 테스트 (0으로 나누기, 긴 숫자 등)
  - [ ] 연속 계산 테스트

- [ ] GitHub API 테스트
  - [ ] 유효한 username 테스트
  - [ ] 존재하지 않는 username 테스트
  - [ ] 네트워크 에러 시뮬레이션

- [ ] UI/UX 개선
  - [ ] 버튼 크기 및 간격 조정
  - [ ] 색상 테마 통일
  - [ ] 반응형 디자인 확인 (모바일, 태블릿, 데스크톱)
  - [ ] 애니메이션 추가 (옵션)

## 10. 추가 기능 (옵션)

- [ ] 계산 히스토리 표시
- [ ] 키보드 입력 지원
- [ ] 다크 모드 토글
- [ ] 로컬 스토리지에 계산 결과 저장
- [ ] GitHub username 입력 필드 추가 (동적 조회)

---

## 개발 시작 순서 추천

1. TailwindCSS 설정 (1번)
2. 기본 컴포넌트 구조 생성 (빈 파일들)
3. Calculator 관련 컴포넌트부터 개발 (3번)
4. 계산기 로직 구현 (4번)
5. GitHub 관련 개발 (5번, 6번)
6. App.vue 통합 (8번)
7. 테스트 및 스타일 개선 (9번)