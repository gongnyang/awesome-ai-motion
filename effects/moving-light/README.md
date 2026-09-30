# Nº 478 이동 광원 · Moving Light

> 클립 렌더 예정 / Clip rendering planned.

**광원 위치가 이동하며 물체의 밝은 면과 그림자 방향이 함께 바뀌는 효과**

A light source moves, changing the bright side of an object and the shadow direction together.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 강조, 분위기 | 설명 영상, 제품 시연, 발표 | css |

다른 이름 / Also known as: Light re-shading, 이동 광원 재조명

## 선택 기준 / Selection

물체의 입체감과 시간의 흐름을 보여주고 정적인 장면에 깊이를 준다 / Shows the object's volume and the passage of time, adding depth to a static scene.

- 제품이나 카드에 조명이 지나가며 입체감을 강조할 때 / To emphasize volume as light passes over a product or card
- 해가 지나가는 시간 경과를 그림자 방향으로 표현할 때 / To express time passing through changing shadow direction

좋은 예 / Good: 광원이 2초 동안 카드 왼쪽 -20%에서 오른쪽 120%로 이동하고 그림자가 20px 안에서 반대 방향으로 따라 움직인다
나쁜 예 / Bad: 광원만 움직이고 그림자 방향이 그대로여서 물리적으로 어색하거나, 광원 밝기가 커 글자가 하얗게 날아간다
주의 / Avoid: 그림자 이동 방향은 광원과 반대 · 광원 중심 밝기 0.6 초과 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 이동 시간 | 2000ms | 1200~3500ms | 광원 이동 |
| 광원 x | -20%에서 120% | -30~130% | 카드 폭 기준 |
| 그림자 이동 | ±20px | 10~30px | 광원 반대 방향 |
| 광원 반경 | 45% | 30~60% | radial-gradient |
| 밝기 | 0.45 | 0.3~0.6 | overlay 또는 soft-light |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
const s={x:-20};
tl.to(s,{x:120,duration:2,ease:'sine.inOut',onUpdate(){
 card.style.background=`radial-gradient(circle at ${s.x}% 30%,rgba(255,255,255,.45),transparent 45%),#1c2230`;
 card.style.boxShadow=`${(50-s.x)*.4}px 24px 40px rgba(0,0,0,.35)`;}},t);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<카드>에 이동 광원을 넣어줘. radial-gradient 광원(반경 45%, 밝기 0.45)이 x -20%에서 120%로 2초 동안 sine.inOut 이동하고, box-shadow는 (50-x)*0.4px 만큼 반대 방향으로 이동하게 해. y 오프셋은 24px, blur 40px 고정. CSS 변수 --lx를 gsap로 보간하고 paused 타임라인으로 구동해.
```

### 한국어 · Codex
```text
<파일>의 <카드>에 moving-light를 구현해. 광원 x -20%에서 120%, 2000ms sine.inOut, 반경 45%, 밝기 0.45, 그림자 ±20px 반대 방향. 0초, 1초, 2초를 캡처해 밝은 면과 그림자가 반대로 움직이는지, 글자가 하얗게 날아가지 않는지 확인해.
```

### English · Claude Code
```text
Add a moving light to <card>. A radial-gradient light (radius 45%, brightness 0.45) moves from x -20% to 120% over 2s with sine.inOut, and the box-shadow shifts (50-x)*0.4px in the opposite direction with a fixed 24px y offset and 40px blur. Tween the CSS variable --lx with GSAP on a paused timeline.
```

### English · Codex
```text
Implement moving-light on <card> in <file>: light x -20% to 120%, 2000ms sine.inOut, radius 45%, brightness 0.45, shadow +/-20px opposite. Capture at 0s, 1s, and 2s to verify the lit side and shadow move in opposite directions and text does not blow out to white.
```

예시 / Example: 이동 광원를 `.hero`에 적용해. / Apply Moving Light to `.hero`.

## 적용 / Application

- HyperFrames: onUpdate에서 background와 box-shadow를 문자열로 갱신하는 방식은 paused 타임라인 seek에서도 동작한다. CSS 변수 --lx를 gsap로 보간하면 더 간결하다
- ReelForge: 브리프에 lightFrom, lightTo, shadowRangePx, durationMs를 싣고 카드 크기를 고정한다
- Scrolline Deck: 진행률을 --lx에 매핑하고 그림자는 (50-lx)*0.4px로 유도한다. 스크럽 방향이 바뀌어도 그림자가 함께 되돌아간다

조합 / Pair with: [조명 애니메이션 · Animated Lighting](../animated-lighting/) · [그림자 엘리베이션 · Shadow Elevation](../shadow-elevation/) · [라이트 스윕 · Light Sweep](../light-sweep/) · [하드 섀도 팝 · Hard Shadow Pop](../hard-shadow-pop/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/light-sweep-pass/registry-item.json) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
