# Nº 549 3D 조립 · Depth Assemble

> 클립 렌더 예정 / Clip rendering planned.

**입체 공간에 흩어져 회전하던 요소들이 평면의 정해진 자리로 차례로 모이는 움직임**

Elements scattered in 3D space, each tilted and spinning, converge one after another into their exact flat positions.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 중급 | 설명, 순서·흐름 | 설명 영상, 숏폼, 발표 | css |

다른 이름 / Also known as: Depth scatter assemble, 깊이 산개 조립, 깊이 분산 조립, 깊이 구름 조립, depth-scatter-assemble

## 선택 기준 / Selection

혼란에서 정리로 넘어가거나 부분이 모여 전체가 만들어지는 순간을 공간감 있게 보여 준다 / Shows order emerging from chaos, or a whole being built from parts, with a sense of space.

- 흩어진 아이디어 카드가 하나의 구조도로 정리될 때 / Scattered idea cards settling into one structure diagram.
- 제목 글자 조각이 모여 문구가 완성될 때 / Title fragments coming together into a phrase.
- 여러 자료가 한 대시보드 레이아웃으로 자리 잡을 때 / Several sources locking into a dashboard layout.

좋은 예 / Good: 카드 9장이 z -300~300px, 회전 ±70도에서 50ms 간격으로 날아와 격자 자리에 1.5초 안에 정확히 맞물리고 마지막에 살짝 정지한다
나쁜 예 / Bad: 시작 위치가 너무 멀어 화면 밖에서 오거나, 요소마다 도착 시각이 같아 한꺼번에 툭 붙는다
주의 / Avoid: 시작 좌표는 시드 난수로 고정해 렌더마다 같게 한다 · 한 장면에 요소 20개를 넘기지 않는다 · 도착 후 회전이 0으로 정확히 돌아와야 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 총 시간 | 1.5s | 1.0~2.2s | 마지막 요소 도착 기준 |
| 깊이 범위 | ±300px | ±150~450px | z 시작값 |
| 시작 회전 | ±70deg | ±40~90deg | 도착 시 0deg |
| 요소 간격 | 50ms | 30~90ms | stagger |
| 이징 | power3.out | power2~expo.out | 도착 순간 감속 |

## 구현 / Implementation (GSAP)

```js
const rnd = (i) => Math.sin(i * 127.1 + 311.7) * 0.5; // 시드 난수 -0.5~0.5
gsap.set('.card', { transformPerspective: 1200 });
cards.forEach((c, i) => {
  gsap.set(c, { z: rnd(i) * 600, rotationY: rnd(i + 9) * 140, rotationX: rnd(i + 3) * 60, opacity: 0 });
  tl.to(c, { z: 0, rotationX: 0, rotationY: 0, opacity: 1, duration: 1.0, ease: 'power3.out' }, 0.2 + i * 0.05);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상> 요소들이 3D 공간에서 자리로 모이는 장면을 만들어 줘. 시작값은 시드 난수로 z ±300px, rotationX ±30도, rotationY ±70도로 고정하고 opacity 0에서 시작해. 각 요소는 0.2초부터 50ms 간격으로 1.0초 동안 power3.out으로 원래 자리에 정확히 도착하고 마지막에 0.6초 정지한다. Math.random은 쓰지 말고 paused 타임라인 하나로 만들어.
```

### 한국어 · Codex
```text
<파일>의 요소 그룹에 depth-assemble을 적용해. 시작값 z=rnd*600, rotationY=rnd*140은 시드 함수로 계산하고, 각 요소 tween은 position 0.2+i*0.05, duration 1.0, ease power3.out으로 z, rotation을 0으로 돌린다. Math.random 없이 두 번 렌더해 같은 프레임인지 확인하고, 0.5초에는 흩어진 상태, 1.9초에는 전 요소 transform이 identity인지 캡처로 확인해.
```

### English · Claude Code
```text
Use GSAP to build a scene where <target> elements gather into place in 3D. Fix start values with a seeded function: z +/-300px, rotationX +/-30 degrees, rotationY +/-70 degrees, opacity 0. Starting at 0.2 seconds, each element arrives over 1.0 second with power3.out at 50ms intervals, then holds 0.6 seconds. No Math.random, one paused timeline.
```

### English · Codex
```text
Apply depth-assemble to the element group in <file>. Compute start values z=rnd*600 and rotationY=rnd*140 from a seeded function; each tween at position 0.2+i*0.05, duration 1.0, ease power3.out returns z and rotation to 0. Render twice with no Math.random and confirm identical frames; capture 0.5s (scattered) and 1.9s (every element at identity transform).
```

예시 / Example: 3D 조립를 `.hero`에 적용해. / Apply Depth Assemble to `.hero`.

## 적용 / Application

- HyperFrames: 시작값은 set으로 시드 함수에서 계산해 timeline 앞에 고정하고, to 트윈만 paused 타임라인에 넣는다. seek해도 배치가 같다
- ReelForge: 오브젝트 씬에 요소 배열, 격자 좌표, 시드 값, 간격 50ms를 파라미터로 싣는다. 요소 수는 12장 이하로 제한한다
- Scrolline Deck: 진행률 0~1을 전체 타임라인에 매핑하고 도착 순서는 인덱스 비율로 나눈다. 스프링 대신 power3.out을 쓴다

조합 / Pair with: [스태거 · Stagger](../stagger/) · [3D 원근 틸트 리빌 · Perspective Tilt Reveal](../perspective-tilt/) · [조각 조립 · Piece Assembly](../piece-assembly/) · [분해도 조립 · Exploded Assembly](../exploded-assembly/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/char-slam-explode/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/rules/depth-scatter-assemble.md) (Apache-2.0) · local/hyperframes-animation (`claude-skill:hyperframes-animation/rules/depth-scatter-assemble.md`) (unknown) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/glass-shard-title/registry-item.json) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
