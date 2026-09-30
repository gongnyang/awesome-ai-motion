# Nº 182 모자이크 이동 전환 · Mosaic Traversal

> 클립 렌더 예정 / Clip rendering planned.

**영상이 여러 복제 타일로 펼쳐지고 타일 좌표를 따라 이동하며 새 장면으로 들어가는 전환**

The footage spreads into cloned tiles, travels along the tile grid, and enters the new scene.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 순서·흐름 | 설명 영상, 숏폼, 제품 시연 | webgl |

다른 이름 / Also known as: Zoom mosaic traversal, 줌 모자이크 이동

## 선택 기준 / Selection

타일 세계를 가로지르는 큰 공간 이동. 화면이 지도처럼 축소됐다 다른 칸으로 진입한다 / A large move across a tiled world: the frame zooms out like a map and drops into another cell.

- 한 장면에서 옆 장면으로 넓은 공간을 이동하는 표현에서 / Express a wide spatial move from one scene to a neighboring one.
- 줌 아웃 후 줌 인으로 위치가 바뀌는 느낌이 필요할 때 / When a zoom-out then zoom-in should relocate the view.

좋은 예 / Good: 0.9초 동안 화면이 3x3 타일로 줌 아웃되고, 타일 좌표 (endx 2, endy -1)만큼 이동한 뒤 뒤 장면 타일로 줌 인해 들어간다
나쁜 예 / Bad: 이동 중 타일 경계가 어색하게 겹치거나 줌 아웃이 부족해 이동 감각이 없다
주의 / Avoid: 타일 수 5x5 초과 금지 · 줌 아웃 최소 scale 0.33(3x3) 이상 유지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 0.9s | 0.7~1.4s | 줌 아웃 0.3, 이동 0.3, 줌 인 0.3 |
| 타일 | 3x3 | 2x2~5x5 | 복제 격자 |
| 이동 | (2, -1) | 타일 좌표 | x, y 타일 수 |
| 이징 | power3.inOut |  | 각 구간 개별 |

## 구현 / Implementation (GSAP)

```js
tl.to('.world', { scale: 0.33, duration: 0.3, ease: 'power3.in' })
  .to('.world', { x: -1280, y: 720, duration: 0.3, ease: 'power2.inOut' })
  .to('.world', { scale: 1, x: -1920 * 2, y: 1080, duration: 0.3, ease: 'power3.out' });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 모자이크 트래버스 전환을 만들어줘. A와 B를 3x3 타일 world 안에 배치하고 0.3초 동안 scale 1에서 0.33(power3.in)으로 줌 아웃, 0.3초 동안 타일 (2, -1)만큼 이동(power2.inOut), 0.3초 동안 B 타일로 scale 1까지 줌 인(power3.out)해. transform만 쓰고 paused 타임라인 하나.
```

### 한국어 · Codex
```text
<파일>에 mosaic traverse를 적용해. .world scale 1에서 0.33 (0.3s power3.in), x -1280과 y 720으로 이동 (0.3s power2.inOut), scale 1과 목표 타일 좌표로 줌 인 (0.3s power3.out). 0.3초 캡처에서 3x3 타일이 모두 보이는지, 0.6초에 이동 중인지, 0.9초에 B가 정위치 scale 1인지 확인해.
```

### English · Claude Code
```text
Build a mosaic traverse from <targetA> to <targetB>. Place A and B in a 3x3 tile world, zoom out from scale 1 to 0.33 over 0.3 seconds (power3.in), move by tile (2, -1) over 0.3 seconds (power2.inOut), then zoom in to scale 1 on B's tile over 0.3 seconds (power3.out). Transforms only, one paused timeline.
```

### English · Codex
```text
Apply a mosaic traverse in <file>. .world scale 1 to 0.33 (0.3s power3.in), translate x -1280 and y 720 (0.3s power2.inOut), then zoom to scale 1 at the target tile (0.3s power3.out). Capture at 0.3 seconds to confirm all 3x3 tiles are visible, at 0.6 seconds to confirm mid-move, and at 0.9 seconds to confirm B sits in place at scale 1.
```

예시 / Example: 모자이크 이동 전환를 `.hero`에 적용해. / Apply Mosaic Traversal to `.hero`.

## 적용 / Application

- HyperFrames: A, B 장면을 넣은 큰 world 컨테이너를 만들고 x, y, scale만 움직인다. 복제 대신 타일별 컨테이너를 CSS grid에 미리 배치한다
- ReelForge: 씬 워커 브리프에 tilesX, tilesY, endTile, phases를 싣고 구간 시간을 파라미터로 한다
- Scrolline Deck: 진행률 0~0.33 줌 아웃, 0.33~0.66 이동, 0.66~1 줌 인. 각 구간에서 ease-out으로 스프링 없이

조합 / Pair with: [줌 전환 · Zoom Through](../zoom-through/) · [푸시 전환 · Push](../push-transition/) · [타일 플립 · Tile Flip](../tile-flip/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Mosaic.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
