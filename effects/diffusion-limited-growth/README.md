# Nº 518 확산 제한 성장 · Diffusion Limited Aggregation

> 클립 렌더 예정 / Clip rendering planned.

**떠돌던 점이 기존 덩어리에 닿으면 달라붙어, 가늘고 불규칙한 가지가 바깥으로 자란다**

Wandering points stick where they touch the existing cluster, growing thin, irregular branches outward.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 고급 | 설명, 분위기 | 설명 영상, 발표, 숏폼 | canvas |

다른 이름 / Also known as: Diffusion Limited Branch Accretion, 확산 제한 가지 퇴적, DLA, Brownian tree, 3D 산호

## 선택 기준 / Selection

축적과 우연이 구조를 만든다는 것을 보여 준다. 번개, 산호, 결정 같은 가지 구조의 성장 원리를 전한다 / Shows that accumulation and chance build structure. It conveys the growth logic behind lightning, coral and crystal branching.

- 산호, 번개, 결정처럼 가지 모양이 생기는 원리를 설명할 때 / Explain how branching forms arise, as in coral, lightning or crystals.
- 단순한 규칙에서 복잡한 형태가 나온다는 주제의 배경으로 쓸 때 / Back a theme of complex form from simple rules.

좋은 예 / Good: 중앙 씨앗에서 시작해 7초 동안 점 3000개가 순서대로 붙으며 가지가 자란다. 부착 기록을 시드로 미리 계산해 재생한다
나쁜 예 / Bad: 매 프레임 새 난수를 뽑아 재생할 때마다 모양이 바뀌고, 점 수가 300개뿐이라 가지가 성기다
주의 / Avoid: 부착 순서를 미리 계산해 재생한다(실시간 난수 금지) · 점 5000개 초과 시 프레임이 무거워진다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 점 수 | 3000개 | 2000~4000개 | 최종 덩어리 크기 |
| 이동 스텝 | 2px | 1~3px | 랜덤 워크 보폭 |
| 부착 반경 | 2px | 1.5~3px | 닿는 거리 |
| 총 길이 | 7s | 6~8s | 부착 속도는 ease-in 없이 선형 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const order = precomputeDLA(3000, seed = 7); // [{x, y}, ...] 부착 순서
tl.to({ n: 0 }, { n: 3000, duration: 7, ease: 'none',
  onUpdate() { drawPoints(order, Math.floor(this.targets()[0].n)); } }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 캔버스에 확산 제한 성장을 넣어줘. 중앙 씨앗에서 시작하고 점 3000개, 이동 2px, 부착 반경 2px, 시드 7로 부착 순서를 미리 계산한 뒤, 7초 동안 앞에서부터 순서대로 그려줘. 오래된 점은 청색, 새 점은 흰색으로 구배를 줘.
```

### 한국어 · Codex
```text
<파일>에 DLA 재생을 구현해. 시드 7로 3000개 부착 순서를 미리 계산해 배열에 저장하고, 타임라인 7초 동안 n을 0에서 3000으로 ease none 이동한다. 1초, 3.5초, 7초를 캡처해 가지가 중심에서 바깥으로 자라는지, 같은 시각 두 번 seek가 같은 점 수를 그리는지 확인해.
```

### English · Claude Code
```text
Add diffusion limited aggregation to the <target> canvas. Start from a center seed with 3000 points, 2px moves and a 2px attach radius. Precompute the attachment order with seed 7, then draw it in order over 7 seconds. Color old points blue and new points white.
```

### English · Codex
```text
Implement DLA playback in <file>. Precompute 3000 attachments with seed 7 into an array, and tween n from 0 to 3000 over 7 seconds with ease none. Capture at 1s, 3.5s and 7s and verify branches grow outward from the center and seeking the same time twice draws the same point count.
```

예시 / Example: 확산 제한 성장를 `.hero`에 적용해. / Apply Diffusion Limited Aggregation to `.hero`.

## 적용 / Application

- HyperFrames: 부착 순서 배열을 오프라인에서 시드로 미리 만든다. 타임라인은 배열의 앞 n개만 그린다
- ReelForge: 씬 워커 브리프에 점 수 3000, 이동 2px, 부착 반경 2px, 시드, 색 구배를 싣는다
- Scrolline Deck: 진행률 0..1을 점 수 0~3000에 대응시킨다. 역스크롤은 n만 줄이면 되므로 가장 스크롤 친화적이다

조합 / Pair with: [가지 성장 · Branch Growth](../branch-growth/) · [전기 아크 · Electric Arc](../electric-arc/) · [랜덤 워크 · Random Walk](../random-walk/)

출처 / Sources: [jasonwebb/morphogenesis-resources](https://github.com/jasonwebb/morphogenesis-resources#diffusion-limited-aggregation-dla) (unknown) · [jasonwebb/2d-diffusion-limited-aggregation-experiments](https://github.com/jasonwebb/2d-diffusion-limited-aggregation-experiments) (CC0-1.0) · [RolandR/diffusion-limited-aggregation](https://github.com/RolandR/diffusion-limited-aggregation) (AGPL-3.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
