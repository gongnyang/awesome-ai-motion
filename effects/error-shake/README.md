# Nº 335 오류 셰이크 · Error Shake

> 클립 렌더 예정 / Clip rendering planned.

**입력창이 짧게 좌우로 흔들리고 수정 후 체크 표시가 그려진다.**

A short horizontal shake marks an error before a drawn check confirms correction.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 기본 | 피드백 | 설명 영상, 제품 시연, 웹 UI | css |

다른 이름 / Also known as: Error shake success, 오류 흔들림에서 성공

## 선택 기준 / Selection

잘못된 입력과 해결된 상태를 구분한다. / Separates invalid input from a resolved state.

- 입력 오류 위치를 알려줄 때 / Identify an invalid input field.
- 수정과 성공 상태를 구분할 때 / Distinguish correction from success.

좋은 예 / Good: 입력창이 진폭 6px로 250ms 흔들리고 수정 뒤 체크가 300ms 그려진다
나쁜 예 / Bad: 전체 화면이 흔들려 어느 입력이 잘못됐는지 알 수 없다
주의 / Avoid: 오류 입력창에만 적용하고 안내 문장을 함께 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 오류 시간 | 250ms | 180~350ms | 짧은 주의 신호 |
| 진폭 | 6px | 3~8px | 좌우 최대 변위 |
| 수정 대기 | 800ms | 600~1600ms | 오류 안내 읽기 |
| 성공 선 | 300ms | 200~450ms | 체크 경로 공개 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
.input.error { animation: shake 250ms both; }
@keyframes shake {
  0%,100% { transform: translateX(0); }
  25%,75% { transform: translateX(-6px); }
  50% { transform: translateX(6px); }
}
.check { stroke-dasharray: 100; stroke-dashoffset: 100; }
.input.corrected .check { animation: check 300ms 1050ms both; }
@keyframes check { to { stroke-dashoffset: 0; } }
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 오류 셰이크을 적용한다. 오류 입력창만 250ms, 진폭 6px로 흔들고 800ms 수정 대기 뒤 pathLength 100인 체크를 300ms에 그린다. 초기 상태를 명시한 paused 타임라인으로 만들고 고정 좌표와 시간만 사용해 seek를 재현한다.
```

### 한국어 · Codex
```text
<파일>에서 <대상>의 오류 셰이크 장면에 적용한다. 오류 입력창만 250ms, 진폭 6px로 흔들고 800ms 수정 대기 뒤 pathLength 100인 체크를 300ms에 그린다. 0.34초·0.88초·1.55초 시점을 캡처해 시작 상태, 중간 관계, 최종 정착과 겹침 여부를 확인한다.
```

### English · Claude Code
```text
Apply Error Shake to <target> in <file>. Shake only the invalid field for 250ms at a 6px amplitude, allow 800ms for correction, then draw a check with pathLength 100 over 300ms. Define the initial state and use a paused timeline with fixed coordinates and timings for repeatable seeking.
```

### English · Codex
```text
Implement Error Shake in the scene for <target> in <file>. Shake only the invalid field for 250ms at a 6px amplitude, allow 800ms for correction, then draw a check with pathLength 100 over 300ms. Capture at 0.34s, 0.88s, 1.55s to verify the initial state, intermediate relationships, final settling, and unwanted overlap.
```

예시 / Example: 오류 셰이크를 `.hero`에 적용해. / Apply Error Shake to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 오류 셰이크의 초기 상태와 종료 상태를 함께 기록하고 1.35초까지 seek로 재현한다.
- ReelForge: 씬 워커 브리프에 오류 셰이크 대상 선택자와 오류 시간 250ms, 진폭 6px, 수정 대기 800ms를 싣고 최종 상태 유지 시간을 지정한다.
- Scrolline Deck: 진행률 0~1을 1.35초 구간에 매핑하고 scrub에서는 스프링 대신 power3.out으로 위치를 계산한다.

조합 / Pair with: [타이핑 입력 · Typing Input](../typing-input/) · [선 그리기 · Line Draw](../line-draw/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/input-feedback/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/success-check/registry-item.json) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
