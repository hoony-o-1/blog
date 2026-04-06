---
title: 읽을거리 선반 (Read-later shelf)
description: 브라우저 북마크와 Kindle 하이라이트를 한 저장소로 모으는 실험 — 동기화 이슈로 잠시 멈춤.
order: 5
period: 2024.03 — 2025.01
status: paused
stack: [Python, SQLite, FastAPI]
links:
  - label: 중단 사유 메모 (예시)
    href: https://example.com/writeups/read-later-shelf-paused
---

## 하려던 것

URL, 인용문, 태그를 **검색 가능한 단일 인덱스**로 두고, 주말마다 “읽을 목록” 뉴스레터를 자동 생성한다.

## 왜 멈췄나

Kindle보내기 포맷 변경과 OAuth 정책이 겹치면서 **파이프라인이 자주 깨졌다**. 유지 비용이 취미를 넘어섰다.

## 다시 시작한다면

외부 API 의존을 줄이고, 최소 기능은 “수동 붙여넣기 + 태그”만 살리는 쪽으로 좁힐 것 같다.
