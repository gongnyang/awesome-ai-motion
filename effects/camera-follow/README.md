# Nº 225 카메라 추적 · Camera Follow

> 클립 렌더 예정 / Clip rendering planned.

**움직이는 대상이 정해진 화면 위치에 머물도록 화면의 크롭이나 배경이 반대 방향으로 이동한다. 대상이 안전 영역을 벗어날 때만 구도를 따라잡는 방식도 쓴다.**

Follow a moving subject by shifting the world in the opposite direction.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 가상 카메라 · CAMERA | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 제품 시연 | gsap |

다른 이름 / Also known as: Camera Caret Track, 입력 초점 추적, camera-cursor-tracking, Moving time-window zoom, 시간 창 추적 확대, Aspect-aware demo reframing, 화면비에 맞춘 시연 재구도

## 선택 기준 / Selection

긴 입력이나 이동 과정에서 현재 행동 위치를 계속 읽게 한다. / Keeps the current action readable.

- 긴 입력에서 캐럿을 계속 보여줄 때 / Keep the caret visible during long input.
- 이동 중인 시계열의 최신 구간을 읽힐 때 / Follow the latest section of a moving time series.

좋은 예 / Good: 캐럿이 안전 영역을 넘으면 월드를 600ms 동안 이동해 화면 폭 60%에 맞춘다.
나쁜 예 / Bad: 키 입력마다 화면을 이동해 문장 전체가 흔들린다.
주의 / Avoid: 대상이 안전 영역 안에 있으면 카메라를 멈춘다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 추적 지속 | 600ms | 300~900ms | 대상의 이동보다 늦게 정착 |
| 안전 영역 | 65% | 55~75% | 화면 폭 기준 임계 |
| 고정점 | 60% | 40~65% | 대상을 놓을 화면 가로 위치 |
| 여백 | 24px | 16~48px | 크롭 경계 여유 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
const targetX = 1500, viewport = 1920;
const shift = targetX > viewport * 0.65 ? viewport * 0.60 - targetX : 0;
tl.to('.world', {x:shift, duration:0.6, ease:'power2.out'});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 카메라 추적를 적용해. HTML 월드 래퍼나 SVG 좌표계에 대상 위치의 역이동을 적용하고 크롭 중심을 같은 진행값으로 보간한다. 추적 지속 600ms; 안전 영역 65%; 고정점 60%; 여백 24px. 이징은 power2.out로 하고 GSAP 코어 paused 타임라인으로 역방향 seek도 같은 상태를 만들게 해.
```

### 한국어 · Codex
```text
<파일>의 대상 장면에 카메라 추적를 적용해. HTML 월드 래퍼나 SVG 좌표계에 대상 위치의 역이동을 적용하고 크롭 중심을 같은 진행값으로 보간한다. 추적 지속 600ms; 안전 영역 65%; 고정점 60%; 여백 24px. 이징은 power2.out를 사용해. 0초·0.3초·0.6초 시점을 캡처하고 시작 상태, 중간 변화, 끝 상태가 정의와 일치하는지 확인해. 같은 시점을 역방향 seek해서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Camera Follow to <target> in <file>. Shift the world to keep a subject at 60% of the viewport width when it crosses the 65% threshold; use 24px padding and a 600ms tween. Use power2.out and a paused GSAP core timeline that produces identical states when seeking backward.
```

### English · Codex
```text
Apply Camera Follow to the target scene in <file>. Shift the world to keep a subject at 60% of the viewport width when it crosses the 65% threshold; use 24px padding and a 600ms tween. Use power2.out. Capture at 0, 0.3, and 0.6 seconds to verify the initial state, the defining intermediate change, and the final state. Seek backward to the same times and compare the images.
```

예시 / Example: 카메라 추적를 `.hero`에 적용해. / Apply Camera Follow to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에서 0.6초 진행값을 구동하고 seek마다 좌표와 렌더 상태를 다시 계산한다.
- ReelForge: 씬 워커 브리프에 추적 지속 600ms; 안전 영역 65%; 고정점 60%; 여백 24px를 싣고 대상 좌표계와 도착 상태를 명시한다.
- Scrolline Deck: 진행률 0~1을 0.6초 타임라인에 매핑하고 scrub에서는 스프링 대신 ease-out 또는 선형 진행을 쓴다.

조합 / Pair with: [타이핑 입력 · Typing Input](../typing-input/) · [주석 위치 추적 · Annotation Tracking](../annotation-tracking/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-camera-follow/registry-item.json) (Apache-2.0) · local/hyperframes-animation (`claude-skill:hyperframes-animation/rules/camera-cursor-tracking.md`) (unknown) · [Flourish](https://flourish.studio/blog/line-chart-race/) (unknown) · [Screen Studio](https://screen.studio/) (unknown) · [d3/d3-zoom](https://d3js.org/d3-zoom) (ISC)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
