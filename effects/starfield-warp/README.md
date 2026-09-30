# Nº 577 스타필드 워프 · Starfield Warp

> 클립 렌더 예정 / Clip rendering planned.

**화면 중심 근처의 별이 원근에 따라 바깥으로 빠르게 뻗어 긴 빛줄기가 되는 워프 연출**

Stars near the center stream outward in perspective, stretching into long streaks of light.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 중급 | 전환, 분위기 | 숏폼, 설명 영상, 제품 시연 | canvas |

다른 이름 / Also known as: 별 터널 질주, Hyperspace Star Streaks, 초공간 별 궤적, Warp speed

## 선택 기준 / Selection

빠른 전진과 공간을 통과하는 속도감을 만든다. 새 장면으로 도약하는 느낌을 준다 / Creates fast forward motion and a jump through space, giving a leap into a new scene.

- 새 챕터나 제품 공개 직전 장면을 도약시킬 때 / Launch the scene before a new chapter or product reveal.
- 우주나 기술 테마의 오프닝 배경이 필요할 때 / A space or tech themed opening background.
- 속도를 올렸다가 감속 착지하는 구성을 할 때 / Accelerate then decelerate into a landing.

좋은 예 / Good: 별 300개가 2.5초 동안 전진 속도 600px/s로 다가오며 뒤쪽에 긴 빛줄기를 남기고 마지막 0.5초에 감속해 점으로 돌아온다
나쁜 예 / Bad: 별 위치가 매 렌더 다르게 뿌려지거나, 꼬리가 없어 점이 움직이는 것으로만 보인다
주의 / Avoid: 별 좌표는 시드 난수로 고정한다 · 꼬리 길이는 속도에 비례하게 한다 · 텍스트 위에 놓을 때 별 opacity는 0.6 이하로 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 시간 | 2.5s | 1.5~4s | 가속+감속 |
| 별 수 | 300 | 150~500 | canvas |
| 전진 속도 | 600px/s | 300~1200px/s | z 이동 |
| 시야각 | 65deg | 50~80deg | 투영 |
| 이징 | power3.in | power2~power4 | 마지막은 out |

## 구현 / Implementation (GSAP)

```js
const stars = Array.from({ length: 300 }, (_, i) => ({ x: Math.sin(i * 12.9) * 960, y: Math.sin(i * 78.2) * 540, z: 200 + ((i * 37) % 800) }));
const s = { v: 0 };
tl.to(s, { v: 1, duration: 2.5, ease: 'power3.in', onUpdate: () => draw(stars, s.v) }, 0);
// draw: z -= v * 600, p = f / z, 이전 위치와 현재 위치를 선으로 그림
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
Canvas와 GSAP으로 <대상> 배경에 스타필드 워프를 만들어 줘. 별 300개는 인덱스 기반 시드 함수로 배치하고, 2.5초 동안 power3.in으로 속도를 올려 600px/s로 전진시켜. 각 별은 이전 위치와 현재 위치를 잇는 선으로 그려 빛줄기를 만들고, 마지막 0.5초에는 감속해 점으로 돌아와. Math.random 금지, 진행률 v의 순수 함수로 그려서 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>의 canvas에 starfield-warp를 적용해. 별 300개 좌표를 sin 기반 시드 함수로 만들고 tween 객체 {v}를 duration 2.5, ease power3.in으로 0→1, onUpdate에서 draw(v)를 호출한다. draw는 z 감소량 v*600로 투영해 이전-현재 선을 그린다. 0.3초는 점, 1.5초는 긴 줄기, 2.5초는 감속 후 점인지 캡처로 확인해.
```

### English · Claude Code
```text
Use Canvas and GSAP to build a starfield warp behind <target>. Place 300 stars with an index-based seeded function and accelerate to 600px/s over 2.5 seconds with power3.in. Draw each star as a line from previous to current position for streaks, and decelerate back to points over the last 0.5 seconds. No Math.random; draw as a pure function of progress v so it is seekable.
```

### English · Codex
```text
Apply starfield-warp to the canvas in <file>. Generate 300 star coordinates from a sin-based seeded function, tween an object {v} 0 to 1 over 2.5s with ease power3.in, and call draw(v) in onUpdate; draw projects with z decreasing by v*600 and draws previous-to-current lines. Capture 0.3s (dots), 1.5s (long streaks) and 2.5s (dots after deceleration).
```

예시 / Example: 스타필드 워프를 `.hero`에 적용해. / Apply Starfield Warp to `.hero`.

## 적용 / Application

- HyperFrames: draw 함수를 진행률 v의 순수 함수로 만들어 seek해도 같은 프레임이 나오게 한다. 별 좌표는 인덱스 기반 결정 함수로 뿌린다
- ReelForge: 브리프에 별 수 300, 속도 600, 가속 곡선, 감속 착지 여부를 싣는다
- Scrolline Deck: 진행률 0~1을 전진 거리에 매핑한다. 꼬리는 진행률 차분으로 만든다

조합 / Pair with: [줌 전환 · Zoom Through](../zoom-through/) · [스피드 램프 · Speed Ramp](../speed-ramp/) · [방사 속도선 · Radial Speed Lines](../radial-speed-lines/)

출처 / Sources: [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [tsparticles/presets](https://github.com/tsparticles/presets/blob/HEAD/presets/hyperspace/README.md) (MIT) · [magicuidesign/magicui](https://magicui.design/docs/components/warp-background) (MIT) · [ui.aceternity.com](https://ui.aceternity.com/components/container-cover) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
