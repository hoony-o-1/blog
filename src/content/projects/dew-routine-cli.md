---
title: 이슬 루틴 — 터미널 집중 타이머
description: Pomodoro를 터미널에서 돌리되, 로그를 마크다운 일지로 남기는 CLI 도구 (가제).
order: 2
period: 2025.11 — 진행 중
status: wip
stack: [Rust, Clap]
links:
  - label: 설계 노트 (예시)
    href: https://example.com/notes/dew-routine
---

## 목표

에디터와 터미널만 쓰는 날에 **컨텍스트 스위칭을 최소화**하는 것. GUI 타이머 대신 셸 한 줄로 시작·종료를 남긴다.

## 동작 (계획)

- `dew start 25` / `dew done`으로 세션 기록
- `~/.dew/log.md`에 타임스탬프와 한 줄 메모 append

## 막힌 점

윈도우 터미널에서 알림을 어떻게 줄지 아직 고민 중이다.
