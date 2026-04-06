---
title: 활자 정원 (이 사이트)
description: Astro와 콘텐츠 컬렉션으로 만든 개인 블로그·프로젝트 소개용 정적 사이트.
order: 1
period: 2026.01 — 계속
status: shipped
stack: [Astro, Tailwind CSS, MDX]
links:
  - label: 데모 (로컬)
    href: https://example.com/demo/hwaja-jeongwon
  - label: 저장소 (예시)
    href: https://github.com/example/hwaja-jeongwon
---

## 왜 만들었나

글과 프로젝트를 **같은 타이포그래피 규칙** 아래 두고 싶었다. 배포는 단순하게, 편집은 마크다운으로.

## 구조

- `blog`, `projects` 두 컬렉션으로 콘텐츠를 나눈다.
- 목록은 홈 한 페이지에서 섹션으로 묶고, 상세는 `/blog`, `/project` 라우트로 분리했다.

## 다음

다크 모드와 RSS는 아직 없다. 필요해지면 그때 얹는다.
