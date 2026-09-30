# Nº 621 위글 루프 · Wiggle Loop

> 클립 렌더 예정 / Clip rendering planned.

**불규칙한 흔들림이 끝에서 처음으로 자연스럽게 이어진다.**

An irregular wobble reconnects smoothly at the loop boundary.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 중급 | 분위기, 브랜딩 | 설명 영상, 웹 UI, 숏폼 | canvas |

다른 이름 / Also known as: Seamless Wiggle Loop, 끊김 없는 위글 루프

## 선택 기준 / Selection

반복 배경에 생동감을 준다. / Adds organic life to repeated motion.

- 손그림 요소에 생기를 줄 때 / Bring hand-drawn elements to life.
- 짧은 배경 흔들림을 반복할 때 / Repeat a subtle background wobble.

좋은 예 / Good: 손그림 아이콘이 8px 안에서 불규칙하게 흔들리고 원위치로 이어진다.
나쁜 예 / Bad: 본문 전체를 흔들어 읽기와 집중을 방해한다.
주의 / Avoid: 본문과 겹치는 영역의 대비를 낮춘다. · 동작 감소 설정에서는 정적인 대표 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 3s | 2~6s | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 주요 진동수 | 1Hz | 0.3~2Hz | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 위치 진폭 | 8px | 3~12px | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |
| 회전 진폭 | 2deg | 0~4deg | 1920x1080 기준. 왕복 또는 위상 계산을 절대 시간에 맞춘다. |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const state = { t: 0 };
const tl = gsap.timeline({ paused: true });
tl.to(state, { t: 3, duration: 3, ease: 'none', onUpdate: () => {
  const a = state.t * Math.PI * 2 / 3;
  gsap.set('.wiggle', { x: 5 * Math.sin(3*a) + 3 * Math.sin(5*a), rotation: 2 * Math.sin(2*a) });
} });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 위글 루프을 구현해. 주기 3s, 주요 진동수 1Hz, 위치 진폭 8px, 회전 진폭 2deg, 이징 none을 적용해. 서로 한 주기 떨어진 노이즈 샘플을 교차 보간한다. paused 타임라인과 절대 시간으로 구동하고 Math.random 없이 같은 시점의 상태를 재현해.
```

### 한국어 · Codex
```text
<파일>의 위글 루프 장면 레이어에 적용해. 주기 3s, 주요 진동수 1Hz, 위치 진폭 8px, 회전 진폭 2deg, 이징 none을 사용하고 본문과 분리해. 0초, 0.4초, 1.2초 시점을 캡처해 시작 상태와 중간 변화 및 대상 가독성을 확인하고 같은 시점을 다시 seek해 결과가 같은지 검증해.
```

### English · Claude Code
```text
Implement Wiggle Loop on <target>. Use period 3s; main frequency 1Hz; position amplitude 8px; rotation amplitude 2deg; use none easing. Drive the effect with a paused GSAP timeline and absolute time, and reproduce the same state on every seek without Math.random. Keep foreground text readable.
```

### English · Codex
```text
Apply Wiggle Loop to the scene layer in <file>. Use period 3s; main frequency 1Hz; position amplitude 8px; rotation amplitude 2deg and none easing. Capture at 0, 0.4, and 1.2 seconds to check the initial state, motion progression, and foreground readability; seek to each time again to verify identical output.
```

예시 / Example: 위글 루프를 `.hero`에 적용해. / Apply Wiggle Loop to `.hero`.

## 적용 / Application

- HyperFrames: paused GSAP 타임라인으로 위글 루프의 절대 시간을 구동하고 seek 뒤 같은 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 주기 3s, 주요 진동수 1Hz, 위치 진폭 8px, 회전 진폭 2deg을 싣고 canvas 레이어의 대상과 합성 순서를 지정한다.
- Scrolline Deck: 진행률 0~1을 3s 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역스크롤에도 같은 상태를 계산한다.

조합 / Pair with: [라인 보일 · Line Boil](../line-boil/) · [플로트 루프 · Float Loop](../float-loop/)

출처 / Sources: [motionscript.com](https://motionscript.com/design-guide/looping-wiggle.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
