# Vue 컴포넌트 구조 설계

## 컴포넌트 구조

```
src/
├── components/
│   ├── calculator/
│   │   ├── CalculatorDisplay.vue       # 계산 결과 표시 영역
│   │   ├── CalculatorButton.vue        # 개별 버튼 컴포넌트
│   │   ├── CalculatorKeypad.vue        # 버튼 그리드 레이아웃
│   │   └── TheCalculator.vue           # 계산기 메인 컴포넌트 (로직 포함)
│   ├── github/
│   │   ├── GithubProfile.vue           # GitHub 유저 프로필 카드
│   │   ├── GithubAvatar.vue            # 유저 아바타 이미지
│   │   └── GithubUserInfo.vue          # 유저 정보 (이름, bio 등)
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

## 컴포넌트 네이밍 규칙

Vue 스타일 가이드를 따라 **모든 컴포넌트명은 2단어 이상**을 사용합니다.

- ✅ **권장**: 2단어 이상 (PascalCase)
- ✅ **The** 접두사: 싱글톤 컴포넌트 (앱 전체에서 단 하나만 존재)
- ✅ **Base/App** 접두사: 기본 공통 컴포넌트
- ❌ **피하기**: 단일 단어 (`Button`, `Card`, `User` 등) - HTML 요소와 충돌 가능

## 컴포넌트 상세 설명

### 1. Calculator 영역

#### TheCalculator.vue
- 계산기 전체를 감싸는 메인 컨테이너
- `useCalculator` composable을 사용하여 계산 상태 관리
- 자식 컴포넌트들에게 상태와 핸들러 전달

#### CalculatorDisplay.vue
- 계산 결과 및 입력값 표시 영역
- Props: `displayValue` (표시할 값)
- 읽기 전용, 인터랙션 없음

#### CalculatorKeypad.vue
- 버튼 그리드 레이아웃 관리
- `CalculatorButton` 컴포넌트들을 배치
- 버튼 클릭 이벤트를 부모로 전달

#### CalculatorButton.vue
- 재사용 가능한 개별 버튼 컴포넌트
- Props: `label` (버튼 텍스트), `type` (버튼 타입: number, operator, clear, equals)
- Emits: `click` 이벤트

### 2. GitHub Profile 영역

#### GithubProfile.vue
- GitHub 프로필 전체를 감싸는 컨테이너
- `useGithubUser` composable을 사용하여 API 데이터 관리
- 로딩/에러 상태 처리

#### GithubAvatar.vue
- GitHub 유저 아바타 이미지 표시
- Props: `avatarUrl`, `username`
- 이미지 로딩 실패 시 fallback 처리

#### GithubUserInfo.vue
- 유저 정보 표시 (이름, bio 등)
- Props: `username`, `name`, `bio` (선택적)

### 3. Common 영역

#### LoadingSpinner.vue
- 로딩 상태를 표시하는 공통 컴포넌트
- Props: `size` (선택적, 스피너 크기)

#### ErrorMessage.vue
- 에러 메시지를 표시하는 공통 컴포넌트
- Props: `message` (에러 메시지 텍스트)

## 컴포넌트 통신 패턴

### Props Down, Events Up

```
App.vue
├── GithubProfile.vue (독립적인 상태 관리)
│   ├── GithubAvatar.vue (props: avatarUrl, username)
│   └── GithubUserInfo.vue (props: username, name, bio)
└── TheCalculator.vue (계산 상태 관리)
    ├── CalculatorDisplay.vue (props: displayValue)
    └── CalculatorKeypad.vue
        └── CalculatorButton.vue (props: label, type / emit: click)
```

### Composables를 통한 로직 분리

- **useCalculator.js**: 계산기의 모든 상태와 로직
  - 상태: `displayValue`, `currentValue`, `operator`, `previousValue`
  - 메서드: `inputNumber()`, `inputOperator()`, `calculate()`, `clear()`

- **useGithubUser.js**: GitHub API 호출 및 사용자 데이터 관리
  - 상태: `user`, `loading`, `error`
  - 메서드: `fetchUser()`, `clearError()`

## 데이터 흐름

### Calculator 데이터 흐름
1. 사용자가 `CalculatorButton` 클릭
2. 이벤트가 `CalculatorKeypad` → `TheCalculator`로 emit
3. `TheCalculator`에서 `useCalculator`의 메서드 호출
4. 계산 상태 업데이트
5. 새로운 값이 props로 `CalculatorDisplay`에 전달

### GitHub Profile 데이터 흐름
1. `GithubProfile` 컴포넌트 마운트 시 `useGithubUser` 호출
2. `githubApi.js`를 통해 API 요청
3. 응답 데이터를 reactive 상태에 저장
4. 자식 컴포넌트들에게 props로 전달
5. 로딩/에러 상태에 따라 `LoadingSpinner` 또는 `ErrorMessage` 표시

## 구현 순서 제안

### Phase 1: 기본 구조
1. `App.vue` - 레이아웃 구조
2. `TheCalculator.vue` - 계산기 컨테이너
3. `GithubProfile.vue` - 프로필 컨테이너

### Phase 2: 표시 컴포넌트
4. `CalculatorDisplay.vue` - 정적 표시
5. `GithubAvatar.vue` - 이미지 표시
6. `GithubUserInfo.vue` - 텍스트 표시

### Phase 3: 인터랙션 컴포넌트
7. `CalculatorButton.vue` - 버튼 기본 기능
8. `CalculatorKeypad.vue` - 버튼 레이아웃

### Phase 4: 로직 구현
9. `useCalculator.js` - 계산 로직
10. `githubApi.js` + `useGithubUser.js` - API 연동

### Phase 5: 공통 컴포넌트 및 마무리
11. `LoadingSpinner.vue` - 로딩 상태
12. `ErrorMessage.vue` - 에러 처리
13. 스타일 최적화 및 반응형 처리

## 학습 목표와의 연결

이 구조는 다음 Vue 3 학습 목표를 달성하는 데 적합합니다:

- ✅ **Component Architecture**: 명확한 책임 분리와 재사용성
- ✅ **Composition API**: `<script setup>` 문법과 composables 패턴
- ✅ **TailwindCSS**: 각 컴포넌트에서 utility-first 스타일링 연습
- ✅ **AJAX/HTTP**: Axios를 통한 실제 API 연동 경험
- ✅ **State Management**: Vue의 내장 reactivity를 활용한 상태 관리

각 컴포넌트를 단계별로 구현하면서 props, emits, slots, composables 등 Vue 3의 핵심 개념을 자연스럽게 익힐 수 있습니다.