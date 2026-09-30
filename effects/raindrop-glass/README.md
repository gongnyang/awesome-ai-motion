# Nº 483 빗방울 유리 · Raindrop Glass

> 클립 렌더 예정 / Clip rendering planned.

**유리에 맺힌 물방울 안에서 배경이 확대되어 보이고 방울이 합쳐져 아래로 흐르는 창문**

Background appears magnified inside drops on the glass as drops merge and run down.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 고급 | 분위기 | 숏폼, 설명 영상, 제품 시연 | webgl |

다른 이름 / Also known as: Rain on glass

## 선택 기준 / Selection

비 오는 창가와 젖은 표면의 분위기. 차분한 감성과 거리감 / The mood of a rainy window and wet surfaces. Calm emotion and a sense of distance.

- 비 오는 창문 너머의 도시나 장면을 감성적으로 보여 줄 때 / Show a city or scene beyond a rainy window emotionally.
- 제품 유리나 화면에 물방울 질감을 얹어 신선함을 줄 때 / Add a droplet texture to product glass or a screen for freshness.

좋은 예 / Good: 방울 80개가 반경 3~14px로 맺혀 있다가 큰 방울이 초속 15~80px로 흘러내리며 작은 방울을 합치고 배경이 굴절된다
나쁜 예 / Bad: 방울 굴절이 0.08UV를 넘어 배경이 알아볼 수 없거나, 모든 방울이 같은 속도로 흘러 자연스럽지 않다
주의 / Avoid: 굴절 0.05UV 초과 금지 · 방울 수 150개 초과 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 방울 수 | 80 | 40~150 | 시드 고정 |
| 반경 | 3~14px | 2~18 | 1920px 기준 |
| 흘러내림 | 15~80px/s | 10~120 | 크기에 비례 |
| 굴절 | 0.03UV | 0.02~0.05 | 방울 렌즈 세기 |
| 지속 | 6s | 4~10s | 재생 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
// 방울 상태를 사전 시뮬레이션해 프레임 표로 저장(합체 포함)
const frames = simDrops(seed = 12, { n: 80, r: [3, 14], v: [15, 80], dt: 1/60, steps: 360 });
const u = { k: 0 };
tl.to(u, { k: 359, duration: 6, ease: 'none', onUpdate: () => draw(frames[Math.round(u.k)]) }, 0);
// GLSL: 방울 안 uv = center + (uv - center) * (1.0 - 0.03/r*...) 로 굴절, 배경은 뒤집혀 축소된 상
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 배경 이미지에 빗방울 유리 효과를 넣어줘. 시드 12로 방울 80개를 반경 3~14px로 배치하고, 반경이 큰 방울일수록 초속 15~80px로 흘러내리며 지나가는 작은 방울을 합치게 사전 시뮬레이션해. 방울 안에서는 배경이 굴절 0.03UV로 확대·반전되어 보이고 방울 바깥은 살짝 흐리게(blur 2px) 해. 6초 재생.
```

### 한국어 · Codex
```text
<파일>에 방울 시뮬레이션을 추가해. 시드 12, 방울 80, 반경 3~14, 속도 15+65*((r-3)/11), 합체는 반경 면적 합, dt=1/60, 360프레임을 frames[]에 저장. 셰이더는 방울 배열로 법선 렌즈를 만들어 굴절 0.03UV 샘플링. 1초·3초·6초 캡처로 방울이 흘러내리며 합쳐지고 배경이 방울 안에서 굴절되는지 확인해.
```

### English · Claude Code
```text
Add a raindrop glass effect to the background image in <target>. Presimulate 80 drops from seed 12 with radius 3 to 14px, where larger drops run down at 15 to 80px per second and absorb small drops they pass. Inside each drop the background is refracted and inverted at 0.03UV; outside it is slightly blurred (2px). Play 6 seconds.
```

### English · Codex
```text
Add a droplet simulation to <file>. Seed 12, 80 drops, radius 3 to 14, speed 15+65*((r-3)/11), merge by area sum, dt=1/60, 360 frames stored in frames[]. The shader builds a lens normal field from the drop array and samples with 0.03UV refraction. Capture 1 s, 3 s and 6 s to confirm drops run down and merge with refracted background inside them.
```

예시 / Example: 빗방울 유리를 `.hero`에 적용해. / Apply Raindrop Glass to `.hero`.

## 적용 / Application

- HyperFrames: 방울 위치·크기·합체는 시드 12로 360스텝 사전 시뮬레이션하고 표로 재생한다. 셰이더는 프레임 표의 방울 배열만 받는다
- ReelForge: 씬 브리프에 방울 80, 반경 3~14, 흘러내림 15~80px/s, 굴절 0.03UV, 시드 12, 배경 이미지를 싣는다
- Scrolline Deck: 진행률을 프레임 인덱스에 매핑한다. 역스크롤 시 합쳐진 방울이 다시 나뉘는 것처럼 보이니 짧은 구간에만 스크럽을 허용한다

조합 / Pair with: [수면 굴절 · Water Surface Refraction](../water-refraction/) · [유리 굴절 · Glass Refraction](../glass-refraction/) · [볼록 렌즈 · Bulge Lens](../bulge-lens/) · [빗줄기 · Rain Streaks](../rain-streaks/)

출처 / Sources: [codrops/RainEffect](https://github.com/codrops/RainEffect) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
