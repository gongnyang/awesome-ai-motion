# Nº 414 벤드 · Bend

> 클립 렌더 예정 / Clip rendering planned.

**대상이 한쪽 끝을 축으로 휘어졌다가 흔들리며 복원되는 굽힘**

An object is anchored at one end, bends and sways, then springs back.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 고급 | 설명, 피드백 | 설명 영상, 제품 시연, 숏폼 | webgl |

다른 이름 / Also known as: Bend and Bend It, 굽힘 변형, CC Bend It

## 선택 기준 / Selection

유연한 물체의 탄성과 무게를 전달한다. 딱딱한 판이 아니라 휘어지는 재질이라는 인상을 준다 / Conveys the elasticity and weight of a flexible object. It reads as a bending material, not a stiff plate.

- 식물, 리본, 얇은 종이, 안테나 같은 유연한 물체를 보일 때 / Plants, ribbons, thin paper or antennas.
- 한쪽이 고정된 요소가 바람이나 충격을 받는 장면을 만들 때 / A fixed-end element hit by wind or impact.
- 강조할 때 대상을 가볍게 휘게 하고 복원시킬 때 / Emphasize by bending an object lightly and restoring it.

좋은 예 / Good: 한쪽 끝을 고정한 리본이 1초 동안 ±20도 곡률로 휘어졌다 돌아오며 끝부분일수록 늦게 따라온다
나쁜 예 / Bad: 전체가 뻣뻣하게 회전만 해서 굽힘이 아니라 기울기로 보이거나, 곡률이 커서 형태가 접힌다
주의 / Avoid: 굽힘 각은 ±30도 이하로 한다 · 고정단에서 멀수록 곡률 지연을 준다 · 한쪽 고정단은 움직이지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 시간 | 1.0s | 0.6~1.6s | 왕복 1회 |
| 굽힘 각 | ±20deg | ±10~30deg | 끝단 기준 |
| 곡률 지연 | 0.05s | 0.03~0.1s | 분절별 |
| 분절 수 | 12 | 8~20 | 메시 세로 분할 |
| 이징 | sine.inOut | sine~power2 |  |

## 구현 / Implementation (GSAP)

```js
// 메시를 N개 분절로 나누고 분절 i가 누적 각을 받는 순수 함수
const N = 12, o = { a: 0 };
tl.to(o, { a: 20, duration: 0.5, ease: 'sine.inOut', yoyo: true, repeat: 1, onUpdate: () => {
  segs.forEach((s, i) => s.rotation = (o.a / N) * (i + 1) * Math.min(1, 0.4 + i * 0.05));
} }, 0.3);
// WebGL이면 정점 셰이더에서 y 위치에 비례해 곡률 적용
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP과 WebGL이나 SVG로 <리본>의 한쪽 끝을 고정하고 굽히는 연출을 만들어 줘. 12분절로 나눠 고정단에서 멀수록 각을 더 받게 하고, 0.3초부터 0.5초 동안 sine.inOut으로 최대 20도까지 굽혔다가 yoyo로 복원해. 끝부분이 0.05초씩 늦게 따라오게 하고 고정단은 움직이지 않게 해. paused 타임라인으로 작성해.
```

### 한국어 · Codex
```text
<파일>의 대상에 bend를 적용해. 분절 12개에 각 rotation=(a/12)*(i+1)*min(1,0.4+i*0.05)를 주고 tween 객체 a를 position 0.3, duration 0.5, ease sine.inOut, yoyo true, repeat 1로 0→20 왕복한다. 0.3초는 직선, 0.8초는 최대 굽힘이며 끝단이 더 많이 휘었는지, 1.3초에 직선으로 복원됐는지 캡처로 확인해.
```

### English · Claude Code
```text
Use GSAP with WebGL or SVG to bend <ribbon> with one end anchored. Split it into 12 segments so segments farther from the anchor take more angle; from 0.3 seconds over 0.5 seconds bend up to 20 degrees with sine.inOut and yoyo back. The tip lags by 0.05 seconds per segment and the anchor never moves. Paused timeline.
```

### English · Codex
```text
Apply bend to the subject in <file>. Give each of 12 segments rotation=(a/12)*(i+1)*min(1,0.4+i*0.05) and tween object a 0 to 20 at position 0.3, duration 0.5, ease sine.inOut, yoyo true, repeat 1. Capture 0.3s (straight), 0.8s (maximum bend, tip bent most) and 1.3s (restored to straight).
```

예시 / Example: 벤드를 `.hero`에 적용해. / Apply Bend to `.hero`.

## 적용 / Application

- HyperFrames: 분절별 회전을 진행률의 순수 함수로 계산해 seek가 결정적이다. repeat는 유한값으로 고정한다
- ReelForge: 브리프에 대상, 고정단 위치, 굽힘 ±20, 분절 12, 1.0s를 싣는다. 메시 변형이 필요하면 WebGL 씬을 지정한다
- Scrolline Deck: 진행률 0~1을 굽힘 각 0→20→0에 매핑한다. sine 이징이라 scrub에서 자연스럽다

조합 / Pair with: [팔로스루 · Follow-through](../follow-through/) · [스윙 · Swing](../swing/) · [젤로 · Jello](../jello/)

출처 / Sources: [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/distort-effects.html) (unknown) · [cycorefx.com](https://cycorefx.com/downloads/cfx_hd_std/CycoreFX%201.6%20Manual.pdf) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
