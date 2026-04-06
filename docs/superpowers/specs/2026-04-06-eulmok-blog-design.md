# 을목 블로그 "활자 정원" — 디자인 스펙

**날짜:** 2026-04-06  
**상태:** 구현 기준 문서 (마스터 플랜은 Cursor 플랜 파일 참조)

## 요약

- **컨셉:** 타이포그래피 중심 미니멀 블로그. 30u30.fyi 에디토리얼 톤 + 쿨 뉴트럴·디지털 악센트 팔레트.
- **스택:** Astro v5, Tailwind CSS v4, Content Collections (MDX), Lucide SVG.
- **라우트:** `/` 목록, `/[...slug]` 글·프로젝트, `/about` 소개.

## 토큰 (요약)

- **Surface:** `#FAFAFA` / Sub: `#F4F4F5` / Ink: `#09090B` / Ink-sub: `#71717A` / Accent: `#2563EB`
- **타입:** Noto Serif KR (display/h1), Pretendard (body), JetBrains Mono (meta/code)
- **성장:** 씨앗 · 새싹 · 가지 · 나무 (GrowthBadge + Lucide)

## 컴포넌트

Header, ContentCard, GrowthBadge, MetaBlock, Footer, BackToGarden, PostNav, ScrollToTop.

## 접근성

WCAG AA 대비, 포커스 링, skip link, `prefers-reduced-motion`, 터치 타겟 ≥44px.

전체 상세 스펙은 프로젝트 플랜 문서(을목 블로그 활자정원)의 시니어 UI/UX 섹션을 따른다.