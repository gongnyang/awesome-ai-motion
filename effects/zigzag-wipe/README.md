# Nº 212 지그재그 와이프 · Zigzag Wipe

> 클립 렌더 예정 / Clip rendering planned.

**지그재그로 맞물린 블록 경계가 움직이며 새 장면이 드러난다**

Interlocking zigzag block boundaries move to reveal the new scene.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 전환, 순서·흐름 | 숏폼, 설명 영상, 발표 | svg |

다른 이름 / Also known as: Zigzag block wipe, 지그재그 블록 와이프

## 선택 기준 / Selection

톱니 모양으로 맞물린 경계가 움직이며 새 장면을 드러낸다. 각지고 역동적인 진행이다 / Produces a dynamic, sawtooth progression.

- 스포츠, 테크, 스트리트 톤의 각진 그래픽 영상에서 화면을 넘길 때 / To swap scenes in sporty, techy, or street-style angular graphic videos
- 목록형 슬라이드 전환에서 방향성 있는 와이프를 쓸 때 / For directional wipes in list-style slide transitions

좋은 예 / Good: 톱니 12개짜리 경계가 왼쪽에서 오른쪽으로 0.7초 동안 linear로 밀려가며 새 장면을 드러낸다
나쁜 예 / Bad: 톱니가 2~3개라 삼각형 두어 개로 보이거나, 톱니 깊이가 너무 커서 경계가 화면의 절반 이상에 걸쳐 산만하다
주의 / Avoid: 톱니 수는 8~16개, 깊이는 화면 폭의 6% 이하 · 경계가 화면 밖에서 시작해 밖에서 끝나게 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 700ms | 500~900ms | linear |
| 톱니 수 | 12 | 8~16 | 90px 높이 |
| 톱니 깊이 | 화면 폭 5% | 3~6% | 약 96px |
| 방향 | 왼쪽에서 오른쪽 | 상하좌우 |  |
| 경계 시작 위치 | -깊이 |  | 화면 밖 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const N = 12, H = 1080 / N, D = 96;
const pts = p => { let s = []; for (let i = 0; i <= N; i++) s.push(`${p + (i % 2 ? D : 0)}px ${i * H}px`); return `polygon(0 0, ${s.join(',')}, 0 1080px)`; };
const s = { p: -D };
tl.to(s, { p: 1920, duration: 0.7, ease: 'none', onUpdate: () => gsap.set('.next', { clipPath: pts(s.p) }) }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면 전환에 지그재그 와이프를 넣어줘. .next의 clipPath를 톱니 12개, 깊이 96px인 polygon으로 만들어 경계가 x -96에서 1920까지 0.7초 linear로 이동하게 해. p만 보간하는 함수로 만들고 paused 타임라인에서 seek해도 같은 프레임이 나오게 해.
```

### 한국어 · Codex
```text
<파일>에 지그재그 와이프를 구현해. N=12, D=96, p -96에서 1920, 0.7초 ease none, onUpdate에서 .next clipPath polygon 갱신. 0.15초, 0.35초, 0.55초, 0.7초 시점을 캡처해 톱니 모양이 12개로 유지되는지, 0.7초에 .next가 전체를 덮는지 확인해.
```

### English · Claude Code
```text
Add a Zigzag Wipe to <target>. Build .next's clipPath as a polygon with 12 teeth, 96px deep, and move its boundary from x -96 to 1920 over 0.7s with linear ease. Write it as a function of p only so a paused timeline seeks to identical frames.
```

### English · Codex
```text
Implement Zigzag Wipe in <file>. N=12, D=96, p from -96 to 1920 over 0.7s ease none, updating .next clipPath polygon in onUpdate. Capture at 0.15s, 0.35s, 0.55s, and 0.7s to confirm 12 teeth stay intact and that .next fully covers the frame at 0.7s.
```

예시 / Example: 지그재그 와이프를 `.hero`에 적용해. / Apply Zigzag Wipe to `.hero`.

## 적용 / Application

- HyperFrames: polygon clipPath 문자열을 p에서 계산하는 함수로 만든다. 시간 대신 p만 쓰므로 seek해도 같은 모양이다
- ReelForge: 씬 워커 브리프에 톱니 수 12, 깊이 96px, 방향, 지속 700ms를 싣는다
- Scrolline Deck: scrub에서 p를 진행률 0~1에 선형으로 묶으면 손으로 미는 와이프처럼 반응한다

조합 / Pair with: [와이프 · Wipe](../wipe/) · [밴드 슬라이드 · Band Slide](../band-slide/) · [스플릿 슬라이드 · Split Slide](../split-slide/)

출처 / Sources: [Adobe](https://helpx.adobe.com/premiere/desktop/add-video-effects/effects-and-transitions-library/list-of-video-transitions.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
