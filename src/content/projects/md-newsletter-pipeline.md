---
title: 마크다운 → 뉴스레터 파이프라인
description: Obsidian에 쌓인 초안을 HTML 이메일 템플릿으로 변환하는 개인용 빌드 스크립트 (구상).
order: 3
period: 2026.02 — 구상
status: idea
stack: [Node.js, MJML]
---

## 배경

뉴스레터 본문을 **항상 한 곳(마크다운)**에 두고, 발행 때만 HTML로 굽고 싶다. 위지윅 에디터는 diff가 지저분해진다.

## 아이디어

1. 폴더 단위로 이슈 번들링 (`issues/2026-04/`)
2. frontmatter로 제목·발행일 검증
3. MJML 레이아웃 + 인라인 CSS로 발송용 HTML 생성

## 아직 없는 것

구독자 관리, 발송 API 연동, 스케줄러 — 전부 “나중에”다.
