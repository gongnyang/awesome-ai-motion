# Nº 025 계단식 모션 · Stepped Motion

> 클립 렌더 예정 / Clip rendering planned.

**값이나 자세가 중간 보간 없이 한 단계씩 순간적으로 바뀐다**

Values or poses change instantly one step at a time without in-between interpolation.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 기본기 · PRINCIPLES | 기본 | 분위기, 브랜딩 | 숏폼, 웹 UI, 설명 영상 | gsap |

다른 이름 / Also known as: 계단식 상태 변화, hold-keyframe-stepped-values, Stepped timing, 계단식 타이밍, SteppedEase, Steps, Stop motion, Snapped movement, 양자화 이동, Hold Keyframe Cut, 홀드 키프레임 컷, Stepped keyframe, 계단, Intentional discontinuity, 의도한 불연속

## 선택 기준 / Selection

디지털 단계와 저속 프레임의 질감을 전한다. 부드러운 애니메이션과 대비되어 기계적이고 또렷한 인상이 생긴다 / Carries the texture of digital steps and low frame rates. Against smooth animation it reads mechanical and crisp.

- 스톱모션이나 8비트 느낌의 브랜드 톤을 낼 때 / Set a stop-motion or 8-bit brand tone.
- 단계별로 값이 바뀌는 카운터와 진행 표시를 만들 때 / Build counters or progress indicators that change in discrete steps.

좋은 예 / Good: 8단계, 총 800ms, 단계 간격 100ms로 요소가 20px 격자 위를 한 칸씩 이동한다
나쁜 예 / Bad: 단계 수를 60으로 늘려 부드러운 이동과 구분이 안 되거나, 단계 간격이 불규칙해 실수처럼 보인다
주의 / Avoid: 단계 간격은 일정하게 유지한다 · 읽어야 하는 텍스트 이동에는 쓰지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 단계 수 | 8 | 4~12 | 적을수록 거칠다 |
| 총 시간 | 800ms | 600~1200ms | 100ms 간격 |
| 격자 | 20px | 10~40px | 위치 스냅 단위 |
| 이징 | steps(8) | steps | GSAP 코어 ease |

## 구현 / Implementation (GSAP)

```js
tl.to('.item', { x: 160, duration: 0.8, ease: 'steps(8)' }, 0.3); // 20px x 8 = 160px, 100ms마다 순간 이동
// 각도 스냅: rotation: 90, ease: 'steps(6)'
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 요소를 부드러운 이동 대신 8단계 스냅으로 옮겨줘. x 0에서 160px까지 0.8초, GSAP ease는 steps(8)로 해서 100ms마다 20px씩 순간 이동하게 해. 시작은 0.3초야.
```

### 한국어 · Codex
```text
<파일>의 이동을 stepped motion으로 바꿔. x 160, duration 0.8s, ease steps(8), 시작 0.3s. 0.35초, 0.45초, 0.55초 시점을 캡처해 x가 20px 단위로만 존재하는지, 중간값이 나오지 않는지 확인해.
```

### English · Claude Code
```text
Move the element in <target> in 8 snapped steps instead of a smooth glide. Go from x 0 to 160px over 0.8 seconds with GSAP ease steps(8), so it jumps 20px every 100ms. Start at 0.3 seconds.
```

### English · Codex
```text
Change the movement in <file> to stepped motion: x 160, duration 0.8s, ease steps(8), start 0.3s. Capture at 0.35s, 0.45s and 0.55s and verify x only takes multiples of 20px and no intermediate values appear.
```

예시 / Example: 계단식 모션를 `.hero`에 적용해. / Apply Stepped Motion to `.hero`.

## 적용 / Application

- HyperFrames: ease를 steps(n)으로 지정하면 seek에도 같은 단계 값이 나온다. onUpdate에서 좌표를 반올림하지 않아도 된다
- ReelForge: 브리프에 단계 수, 총 시간, 격자 크기를 싣는다. 같은 씬에 부드러운 요소를 섞으면 대비가 더 산다
- Scrolline Deck: 진행률을 단계 수로 양자화하는 것과 같다. 스크롤에서 경계가 딱딱하므로 단계 수를 6 이상으로 한다

조합 / Pair with: [스태거 · Stagger](../stagger/) · [컬러 사이클 · Color Cycle](../color-cycle/) · [팔레트 순환 · Palette Color Cycling](../palette-cycle/)

출처 / Sources: gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/02-easing-graph.md#hold-keyframe-stepped-values`) (Apache-2.0) · [greensock/GSAP](https://gsap.com/docs/v3/Eases/SteppedEase/) (GSAP Standard License) · [greensock/GSAP](https://gsap.com/docs/v3/GSAP/CorePlugins/Snap/) (GSAP Standard License) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/animate-in-after-effects/animation-keyframes/keyframe-interpolation.html) (unknown) · motion dictionary 1-principles.md#4.1 곡선의 읽는 법 (own)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
