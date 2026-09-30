# Nº 413 파편 분해 · Shatter

> 클립 렌더 예정 / Clip rendering planned.

**화면이나 글자가 삼각 파편으로 갈라져 회전하며 흩어지는 움직임**

A screen or word cracks into triangular shards that spin apart.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 고급 | 전환, 강조 | 숏폼, 설명 영상, 제품 시연 | webgl |

다른 이름 / Also known as: Shatter fragments, Text Vertex Explosion, 텍스트 정점 폭발

## 선택 기준 / Selection

파괴, 해방, 강한 단절을 전달한다. 앞 장면이 깨져 사라지고 다음 장면이 열린다는 신호가 된다 / Conveys destruction, release or a hard break: the old scene shatters and the next one opens.

- 낡은 방식이 깨지고 새 방식이 등장하는 전환을 만들 때 / Transition where an old way breaks and a new one appears.
- 제목 글자를 폭발시키듯 퇴장시킬 때 / Blow a title apart as it exits.
- 충격적인 사실 뒤에 화면을 갈아엎을 때 / Reset the screen after a shocking fact.

좋은 예 / Good: 제목 화면이 120개 삼각 파편으로 갈라지며 초기 속도 400px/s로 회전하며 날아가고 1.2초 안에 뒤의 장면이 드러난다
나쁜 예 / Bad: 파편이 균일한 크기와 속도로 퍼져 격자 모양이 그대로 보이거나, 파편이 화면에 남아 다음 장면을 가린다
주의 / Avoid: 파편 초기 속도와 회전은 시드로 고정한다 · 1.4초 안에 모든 파편이 opacity 0이 되어야 한다 · 제품 화면처럼 정보가 있는 UI에는 쓰지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 시간 | 1.2s | 0.8~1.8s | 분해 시작부터 소멸 |
| 파편 수 | 120 | 60~200 | 삼각 분할 |
| 초기 속도 | 400px/s | 250~700px/s | 중심에서 바깥 |
| 회전 | ±360deg | ±180~540deg | 파편별 시드 |
| 이징 | power2.in | power1~power3 | 중력 느낌 |

## 구현 / Implementation (GSAP)

```js
const seed = (i) => (Math.sin(i * 12.9898) * 43758.5453) % 1; // 결정론
tris.forEach((t, i) => {
  const a = seed(i) * Math.PI * 2, d = 400 + Math.abs(seed(i + 7)) * 300;
  tl.to(t, { x: Math.cos(a) * d, y: Math.sin(a) * d + 200, rotation: seed(i + 3) * 720, opacity: 0, duration: 1.2, ease: 'power2.in' }, 0.4);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상> 화면을 삼각 파편 120개로 나눠 흩어지게 해줘. 파편별 각도와 거리는 시드 함수로 정하고 초기 속도는 400px/s 기준, 0.4초에 시작해 1.2초 동안 power2.in으로 이동하며 rotation ±360도, opacity 0까지 간다. 중력처럼 y로 200px 더 떨어지게 하고 뒤 장면이 0.4초부터 드러나야 해. Math.random은 쓰지 말고 paused 타임라인으로 만들어.
```

### 한국어 · Codex
```text
<파일>의 화면에 shatter를 적용해. 삼각 파편 120개는 고정 배열로 만들고 tween은 position 0.4, duration 1.2, ease power2.in으로 x, y, rotation, opacity를 건다. 0.4초에 원본과 픽셀 동일, 0.9초에 파편이 퍼지는 중, 1.7초에 파편이 전부 opacity 0이고 뒤 장면만 보이는지 캡처로 확인해.
```

### English · Claude Code
```text
Use GSAP to break <target> into 120 triangular shards. Set each shard's angle and distance with a seeded function, initial speed about 400px/s. Starting at 0.4 seconds, move them for 1.2 seconds with power2.in, rotation +/-360 degrees, opacity 0, plus 200px of downward fall. The next scene shows through from 0.4 seconds. No Math.random, paused timeline.
```

### English · Codex
```text
Apply shatter in <file>. Build a fixed array of 120 triangles; tween x, y, rotation, opacity at position 0.4, duration 1.2, ease power2.in. Capture 0.4s (pixel-identical to the source), 0.9s (shards flying) and 1.7s (all shards opacity 0, only the next scene visible).
```

예시 / Example: 파편 분해를 `.hero`에 적용해. / Apply Shatter to `.hero`.

## 적용 / Application

- HyperFrames: 파편 위치는 미리 계산한 배열로 두고 paused 타임라인에서 x, y, rotation, opacity만 움직인다. WebGL이면 시각을 uniform으로 넣는다
- ReelForge: 씬 브리프에 파편 수 120, 초기 속도 400, 시드 값, 다음 장면 id를 싣는다. 뒤 장면은 별도 레이어로 미리 깔아 둔다
- Scrolline Deck: 진행률 0~1을 파편 이동에 그대로 매핑한다. 역방향 스크럽에서도 파편이 제자리로 돌아오게 한다

조합 / Pair with: [샤터 전환 · Shatter Transition](../shatter-transition/) · [입자 버스트 · Particle Burst](../particle-burst/) · [스매시 컷 · Smash Cut](../smash-cut/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/vfx-shatter/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/frost-sequence-camera-orbit/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/adapters/html-in-canvas-patterns.md`) (unknown) · [armdz/tsl_elastic_vertex_destruction](https://github.com/armdz/tsl_elastic_vertex_destruction) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
