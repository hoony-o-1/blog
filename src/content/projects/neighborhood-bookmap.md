---
title: 동네 책방 지도
description: 공공·오픈 데이터로 독립 서점 위치와 영업 정보를 모아 지도에 표시하는 사이드 프로젝트.
order: 4
period: 2025.06 — 2025.12
status: shipped
stack: [TypeScript, MapLibre GL, Vite]
links:
  - label: 라이브 (예시)
    href: https://example.com/apps/bookmap
  - label: 데이터 출처 안내
    href: https://example.com/bookmap/data
---

## 한 일

행정 데이터와 커뮤니티 제보를 **같은 스키마**로 정규화했다. 영업 시간은 iCal 친화 문자열로 저장해 파싱 부담을 줄였다.

## 배운 점

지도 UX는 “핀을 많이 찍는 것”보다 **필터와 범례**가 먼저다. 모바일에서 레이어 전환이 반쯤 제품이다.

## 유지보수

데이터 스냅샷은 분기마다 수동 갱신 중이다. 자동 크론은 비용 대비 효용이 애매해 손대지 않았다.
