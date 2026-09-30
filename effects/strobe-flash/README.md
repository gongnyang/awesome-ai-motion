# Nº 486 스트로브 플래시 · Strobe Flash

> 클립 렌더 예정 / Clip rendering planned.

**색이나 질감 프레임이 짧은 비트 간격으로 반복 교체되다가 마지막에 안정되는 효과**

Color or texture frames swap repeatedly at short beat intervals, then settle at the end.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 기본 | 주목 끌기, 순서·흐름, 분위기 | 숏폼, 설명 영상 | gsap |

다른 이름 / Also known as: Strobe Grid, 비트 스트로브, strobe-pulse-grid, Strobe Light Flash, Strobe Light

## 선택 기준 / Selection

박자와 에너지를 시각으로 밀어붙이고 여러 소재를 빠르게 훑는 몽타주 리듬을 만든다 / Pushes rhythm and energy visually and creates a montage beat that sweeps through several sources fast.

- 음악 비트에 맞춰 이미지나 색 프레임을 빠르게 교체할 때 / To swap images or color frames rapidly to a music beat
- 4장 소스를 훑고 마지막 한 장으로 확정하는 오프닝 / For an opening that scans four sources and lands on one

좋은 예 / Good: 소스 4장이 100ms 간격으로 순환하다가 1.2초에 마지막 장면에 멈춘다
나쁜 예 / Bad: 간격을 50ms 아래로 줄이거나 흰 섬광을 초당 3회 이상 반복해 눈이 아프다
주의 / Avoid: 교체 간격 80ms 미만 금지(광과민 안전) · 밝은 흰 프레임을 연속 3회 이상 쓰지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 교체 간격 | 100ms | 80~180ms | 비트에 맞춤 |
| 소스 수 | 4장 | 3~6장 | 순환 순서 고정 |
| 버스트 길이 | 1200ms | 800~1800ms | 마지막에 안정 |
| 최종 유지 | 0.5s 이상 | 0.4~1.0s | 마지막 프레임 정지 |
| 불규칙성 | 고정 표 | 고정 배열 | Math.random 금지 |

이징 / Ease: `steps(1)`

## 구현 / Implementation (GSAP)

```js
const src=['.s0','.s1','.s2','.s3'];
const n=Math.floor(1.2/.1);
for(let i=0;i<n;i++) tl.set(src,{opacity:0},t+i*.1).set(src[i%4],{opacity:1},t+i*.1);
tl.set(src,{opacity:0},t+1.2).set('.final',{opacity:1},t+1.2);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<소스 4장>으로 스트로브 교체 효과를 만들어줘. 100ms 간격으로 순서 고정 순환하다가 1.2초에 최종 이미지로 멈추게 해. tl.set으로 opacity를 찍고, 최종 이미지는 0.5초 이상 정지. 흰 프레임이 연속 3회 넘지 않게 하고 Math.random은 쓰지 마. paused 타임라인으로 구동해.
```

### 한국어 · Codex
```text
<파일>에 strobe-flash를 구현해. 간격 100ms, 소스 4장 순환, 버스트 1200ms, 최종 프레임 0.5초 이상 유지. 0.05초, 0.15초, 0.25초, 1.3초를 캡처해 프레임이 교체되는지, 1.3초에 최종 이미지가 정지 상태인지, 간격이 80ms 이상인지 확인해.
```

### English · Claude Code
```text
Build a strobe swap effect from <four sources>. Cycle them in fixed order at 100ms intervals and land on the final image at 1.2s. Set opacity with tl.set, hold the final image for at least 0.5s, never show more than 3 white frames in a row, and do not use Math.random. Drive from a paused timeline.
```

### English · Codex
```text
Implement strobe-flash in <file>: interval 100ms, 4 sources cycling, burst 1200ms, hold final at least 0.5s. Capture at 0.05s, 0.15s, 0.25s, and 1.3s to verify frames swap, the final image is still at 1.3s, and the interval is 80ms or more.
```

예시 / Example: 스트로브 플래시를 `.hero`에 적용해. / Apply Strobe Flash to `.hero`.

## 적용 / Application

- HyperFrames: tl.set으로 프레임 교체를 찍는 방식은 seek에 안전하다. 비트 시간표가 있으면 t+i*.1 대신 비트 배열에서 읽는다
- ReelForge: 브리프에 intervalMs, sourceOrder, burstMs, finalHoldMs를 싣는다. 소스는 미리 로드된 이미지 레이어로 둔다
- Scrolline Deck: 진행률을 100ms 구간 인덱스로 양자화한다. 스크럽 중 빠른 교체는 눈이 불편하므로 스크럽 속도에서는 간격을 늘려 표시한다

조합 / Pair with: [키네틱 비트 · Kinetic Beats](../kinetic-beats/) · [점프 컷 · Jump Cut](../jump-cut/) · [플래시 전환 · Flash Transition](../flash-transition/) · [몽타주 · Montage](../montage/)

출처 / Sources: gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/07-stylize-time.md#strobe-pulse-grid`) (Apache-2.0) · local/music-to-video (`claude-skill:music-to-video/references/template-catalog.md#held-text-strobe-burst`) (unknown) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/stylize-effects.html) (unknown) · [airbnb/lottie-web](https://github.com/airbnb/lottie-web) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
