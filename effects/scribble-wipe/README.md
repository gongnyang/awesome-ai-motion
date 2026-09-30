# Nº 193 스크리블 와이프 · Scribble Wipe

> 클립 렌더 예정 / Clip rendering planned.

**낙서 띠가 빠르게 쌓여 화면을 덮고 지워지며 다음 장면을 보여주는 전환**

Scribble strokes stack up quickly to cover the frame, then wipe away to show the next scene.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 분위기 | 숏폼, 설명 영상 | svg |

다른 이름 / Also known as: Scribble cover, 낙서로 덮기

## 선택 기준 / Selection

손으로 그은 거친 리듬. 매끈한 디지털 와이프와 다른 사람 손맛 / A rough, hand-drawn rhythm: a human touch that clean digital wipes lack.

- 손그림, 노트, 스티커 톤의 영상에서 장면을 바꿀 때 / Change scenes in a hand-drawn, notebook, or sticker-styled video.
- 덮는 순간에 컷을 숨겨야 할 때 / Hide a cut behind the covering moment.

좋은 예 / Good: 12개의 굵은 낙서 띠가 30ms 간격으로 그어져 0.35초에 화면을 덮고, 덮인 사이 장면이 바뀐 뒤 0.35초에 지워진다
나쁜 예 / Bad: 띠가 가늘어 덮는 데 1초 넘게 걸리거나, 낙서 색이 배경과 비슷해 덮였는지 알 수 없다
주의 / Avoid: 띠 개수 20개 초과 금지(과하면 노이즈가 된다) · 덮는 정점에서 다음 장면으로 교체한다. 덮이기 전 교체 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 0.7s | 0.5~1.0s | 덮기 0.35s + 걷기 0.35s |
| 띠 개수 | 12 | 8~16 | 가로 지그재그 |
| 시작차 | 30ms | 20~50ms | 위에서 아래 순서 |
| 이징 | power2.out | power1~3 | 선 그리기는 빠르게 시작 |

## 구현 / Implementation (GSAP)

```js
const paths = gsap.utils.toArray('.stroke');   // stroke-dasharray = length
paths.forEach((p, i) => tl.fromTo(p, { strokeDashoffset: p.getTotalLength() },
  { strokeDashoffset: 0, duration: 0.3, ease: 'power2.out' }, i * 0.03));
tl.set('.a', { display: 'none' }, 0.36)
  .to(paths, { opacity: 0, duration: 0.3, stagger: 0.03 }, 0.4);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 스크리블 와이프를 만들어줘. SVG 낙서 띠 12개를 위에서 아래 순서로 30ms 간격으로 strokeDashoffset 애니메이션(0.3초, power2.out)으로 그어 화면을 덮고, 덮인 시점(0.36초)에 A를 숨기고 B를 보이게 한 뒤 띠를 0.3초 동안 지워. 낙서 좌표는 고정 배열로 두고 paused 타임라인 하나로 만들어.
```

### 한국어 · Codex
```text
<파일>에 scribble wipe를 적용해. path 12개의 strokeDashoffset을 길이에서 0으로 0.3s power2.out, 시작차 0.03s로 그리고 0.36초에 장면을 교체한 뒤 opacity 0으로 0.3s 지운다. 0.2초에 일부만 덮였는지, 0.36초에 화면이 전부 덮였는지, 0.8초에 낙서가 없는지 캡처로 확인해.
```

### English · Claude Code
```text
Build a scribble wipe from <targetA> to <targetB>. Draw 12 SVG scribble strokes top to bottom with a 30ms stagger, each animating strokeDashoffset over 0.3 seconds with power2.out to cover the frame. At the covered moment (0.36s) hide A and show B, then erase the strokes over 0.3 seconds. Keep the stroke coordinates in a fixed array and use one paused timeline.
```

### English · Codex
```text
Apply a scribble wipe in <file>. Animate strokeDashoffset of 12 paths from their length to 0 over 0.3s with power2.out and a 0.03s stagger, swap scenes at 0.36 seconds, then fade the strokes to opacity 0 over 0.3s. Capture at 0.2 seconds to confirm partial coverage, at 0.36 seconds for full coverage, and at 0.8 seconds to confirm no strokes remain.
```

예시 / Example: 스크리블 와이프를 `.hero`에 적용해. / Apply Scribble Wipe to `.hero`.

## 적용 / Application

- HyperFrames: dash offset은 SVG path의 길이에서 계산하고 타임라인 값만 쓴다. 낙서 path는 시드 고정 좌표로 미리 만들어 둔다
- ReelForge: 씬 워커 브리프에 strokeCount, strokeWidthPx, staggerMs, color를 싣는다. 덮이는 프레임을 scene cut 지점으로 정의한다
- Scrolline Deck: 진행률 0~0.5는 덮기, 0.5에 컷, 0.5~1은 걷기. 각 띠는 진행률 0.02 간격으로 시작해 scrub 역방향에서도 순서가 유지된다

조합 / Pair with: [페인트 스플래터 와이프 · Paint Splatter Wipe](../paint-splatter-wipe/) · [지그재그 와이프 · Zigzag Wipe](../zigzag-wipe/) · [와이프 · Wipe](../wipe/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/hw-scribble-transition/registry-item.json) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
