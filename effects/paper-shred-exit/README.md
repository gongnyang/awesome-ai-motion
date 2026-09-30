# Nº 062 종이 파쇄 퇴장 · Paper Shred Exit

> 클립 렌더 예정 / Clip rendering planned.

**문서가 좁은 틈으로 들어가 여러 가느다란 띠로 잘려 떨어지고 사라진다.**

A document feeds through a slit and falls away as narrow strips.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 중급 | 설명, 강조 | 설명 영상, 웹 UI, 숏폼 | canvas |

## 선택 기준 / Selection

되돌리기 어려운 삭제와 해체를 표현한다. / Communicates destruction and a completed deletion.

- 삭제 완료를 시각화할 때 / Visualize a confirmed deletion.
- 문서 해체를 설명할 때 / Explain how a document is dismantled.

좋은 예 / Good: 삭제 확인 후 문서가 틈 아래로 들어가 세로 띠로 떨어진다.
나쁜 예 / Bad: 임시 숨김 동작에 파쇄를 써 영구 삭제처럼 보인다.
주의 / Avoid: 같은 장면의 여러 대상에 동시에 적용하지 않는다. · 동작 감소 설정에서는 정적인 대표 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 2s | 1.5~3s | 1920x1080 기준. 장면 시작을 0초로 둔다. |
| 공급 속도 | 180px/s | 120~240px/s | 1920x1080 기준. 장면 시작을 0초로 둔다. |
| 띠 폭 | 10px | 8~18px | 1920x1080 기준. 장면 시작을 0초로 둔다. |
| 낙하 거리 | 140px | 100~220px | 1920x1080 기준. 장면 시작을 0초로 둔다. |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({ paused: true });
tl.to('.paper', { y: 180, duration: 1, ease: 'none' }, 0);
tl.fromTo('.strip', { y: 0, opacity: 1 },
  { y: 140, rotation: 12, opacity: 0, duration: 1, stagger: 0.02, ease: 'power2.in' }, 0.6);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 종이 파쇄 퇴장을 구현해. 지속 2s, 공급 속도 180px/s, 띠 폭 10px, 낙하 거리 140px, 이징 none을 적용해. canvas 문서 영역을 세로 조각으로 나눠 틈 아래에서 낙하와 말림을 보간한다. paused 타임라인과 절대 시간으로 구동하고 Math.random 없이 같은 시점의 상태를 재현해.
```

### 한국어 · Codex
```text
<파일>의 종이 파쇄 퇴장 장면 레이어에 적용해. 지속 2s, 공급 속도 180px/s, 띠 폭 10px, 낙하 거리 140px, 이징 none을 사용하고 본문과 분리해. 0초, 0.4초, 1.2초 시점을 캡처해 시작 상태와 중간 변화 및 대상 가독성을 확인하고 같은 시점을 다시 seek해 결과가 같은지 검증해.
```

### English · Claude Code
```text
Implement Paper Shred Exit on <target>. Use duration 2s; feed speed 180px/s; strip width 10px; fall distance 140px; use none easing. Drive the effect with a paused GSAP timeline and absolute time, and reproduce the same state on every seek without Math.random. Keep foreground text readable.
```

### English · Codex
```text
Apply Paper Shred Exit to the scene layer in <file>. Use duration 2s; feed speed 180px/s; strip width 10px; fall distance 140px and none easing. Capture at 0, 0.4, and 1.2 seconds to check the initial state, motion progression, and foreground readability; seek to each time again to verify identical output.
```

예시 / Example: 종이 파쇄 퇴장를 `.hero`에 적용해. / Apply Paper Shred Exit to `.hero`.

## 적용 / Application

- HyperFrames: paused GSAP 타임라인으로 종이 파쇄 퇴장의 절대 시간을 구동하고 seek 뒤 같은 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 지속 2s, 공급 속도 180px/s, 띠 폭 10px, 낙하 거리 140px을 싣고 canvas 레이어의 대상과 합성 순서를 지정한다.
- Scrolline Deck: 진행률 0~1을 2s 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역스크롤에도 같은 상태를 계산한다.

조합 / Pair with: [관성 퇴장 · Physical Exit](../physical-exit/) · [파편 분해 · Shatter](../shatter/)

출처 / Sources: [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
