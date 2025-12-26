# Header 컴포넌트 문서

## 📋 개요

`Header.tsx`는 애플리케이션의 상단 네비게이션 헤더 컴포넌트입니다. 사용자의 로그인 상태에 따라 다른 UI를 표시하며, 인증 상태 관리와 라우팅 기능을 제공합니다.

## 📁 파일 위치

```
components/Header.tsx
```

## 🏗️ 컴포넌트 구조

### 전체 구조

```tsx
Header (Client Component)
├── 로고 영역 (왼쪽)
│   └── Instagram 텍스트 (홈 링크)
│
└── 우측 영역 (조건부 렌더링)
    ├── 로그인 상태 (user 존재)
    │   ├── 환영 메시지 (닉네임 표시)
    │   └── 프로필 아바타 이미지 (프로필 편집 페이지 링크)
    │
    └── 비로그인 상태 (user 없음)
        ├── Log in 링크
        └── Sign up 링크
```

## 🔧 사용된 기술 및 기능

### 1. Next.js 기능

- **Client Component (`"use client"`)**

  - Zustand 스토어 상태를 구독하기 위해 클라이언트 컴포넌트로 선언
  - 사용자 인터랙션(링크 클릭) 처리

- **Next.js Link (`next/link`)**

  - 클라이언트 사이드 라우팅
  - 사용된 링크:
    - `/` - 홈 페이지 (로고)
    - `/login` - 로그인 페이지
    - `/signup` - 회원가입 페이지
    - `/profile/edit` - 프로필 편집 페이지

- **Next.js Image (`next/image`)**
  - 이미지 최적화 및 lazy loading
  - `priority` 속성으로 우선 로딩 설정
  - 프로필 아바타 이미지 표시

### 2. 상태 관리 (Zustand)

- **`useAuthStore`** (`@/store/auth`)
  - 전역 인증 상태 관리
  - 사용된 상태:
    - `user`: 현재 로그인한 사용자 정보 (User | null)
      - `User` 타입: `{ id, email, nickname, avatar_url }`
    - `isInit`: 인증 초기화 완료 여부 (boolean)

### 3. 조건부 렌더링

- **초기화 상태 체크**

  ```tsx
  if (!isInit) return null;
  ```

  - 인증 상태 초기화 전에는 헤더를 렌더링하지 않음

- **로그인 상태별 UI**
  ```tsx
  {user ? (
    // 로그인 상태 UI
  ) : (
    // 비로그인 상태 UI
  )}
  ```

### 4. 스타일링 (Tailwind CSS)

#### 헤더 컨테이너

- `w-full`: 전체 너비
- `max-w-[1200px]`: 최대 너비 1200px
- `mx-auto`: 수평 중앙 정렬
- `h-14`: 고정 높이 56px
- `border-b`: 하단 테두리
- `bg-white`: 흰색 배경
- `flex items-center justify-between`: Flexbox 레이아웃
- `px-4`: 좌우 패딩
- `z-50`: z-index 50 (다른 요소 위에 표시)

#### 로그인 상태 스타일

- `gap-6`: 요소 간 간격 24px
- `text-sm text-gray-700`: 작은 회색 텍스트
- `w-7 h-7 rounded-full`: 원형 아바타 (28px × 28px)
- `overflow-hidden`: 이미지 잘림 방지
- `object-cover`: 이미지 비율 유지하면서 컨테이너 채우기

#### 비로그인 상태 스타일

- `gap-5`: 요소 간 간격 20px
- `text-sm`: 작은 텍스트
- `text-gray-700`: 회색 텍스트 (Log in)
- `font-semibold text-black border px-3 py-1 rounded`: 버튼 스타일 (Sign up)

## 📝 주요 기능

### 1. 인증 상태 기반 UI 전환

- **로그인 상태**: 사용자 닉네임과 프로필 아바타 표시
- **비로그인 상태**: 로그인/회원가입 링크 표시

### 2. 프로필 아바타

- 사용자의 `avatar_url`을 사용
- 아바타가 없으면 기본 이미지 (`/default-avatar.png`) 표시
- 클릭 시 프로필 편집 페이지로 이동

### 3. 반응형 레이아웃

- 최대 너비 1200px로 제한하여 대화면에서도 일관된 UI 제공
- 중앙 정렬로 가독성 향상

## 🔄 데이터 흐름

```
useAuthStore (Zustand Store)
    ↓
[user, isInit] 상태 구독
    ↓
조건부 렌더링
    ↓
UI 업데이트 (로그인/비로그인 상태에 따라)
```

## 📦 의존성

```typescript
// 외부 패키지
import Link from "next/link"; // Next.js 라우팅
import Image from "next/image"; // Next.js 이미지 최적화

// 내부 모듈
import { useAuthStore } from "@/store/auth"; // Zustand 인증 스토어
```

## 🎨 UI 컴포넌트 트리

```
<header>
  ├── <Link> (로고)
  │   └── "Instagram"
  │
  └── 조건부 렌더링
      ├── 로그인 상태
      │   ├── <span> (환영 메시지)
      │   └── <Link> (프로필)
      │       └── <div> (아바타 컨테이너)
      │           └── <Image> (프로필 이미지)
      │
      └── 비로그인 상태
          ├── <Link> ("Log in")
          └── <Link> ("Sign up")
```

## 🚀 사용 예시

```tsx
// app/layout.tsx에서 사용
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
```

## ⚠️ 주의사항

1. **클라이언트 컴포넌트**: `"use client"` 지시어 필수 (Zustand 스토어 사용)
2. **초기화 대기**: `isInit`이 `false`일 때는 아무것도 렌더링하지 않음
3. **아바타 기본값**: `avatar_url`이 `null`이면 `/default-avatar.png` 사용
4. **이미지 최적화**: Next.js Image 컴포넌트 사용으로 자동 최적화

## 🔍 관련 파일

- `store/auth.ts`: Zustand 인증 스토어 정의
- `app/layout.tsx`: Header 컴포넌트 사용 위치
- `app/profile/edit/page.tsx`: 프로필 편집 페이지 (아바타 클릭 시 이동)
- `app/login/page.tsx`: 로그인 페이지
- `app/signup/page.tsx`: 회원가입 페이지
