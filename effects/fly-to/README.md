# Nº 230 플라이 투 · Fly-to

> 클립 렌더 예정 / Clip rendering planned.

**시점이 출발 지역에서 줌아웃하고 넓어진 시야로 이동한 뒤 목표 지역에 다시 줌인한다.**

Zoom out from one place, travel across the wider view, then zoom into the destination.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 가상 카메라 · CAMERA | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 제품 시연 | svg |

다른 이름 / Also known as: Geographic fly-to, 지도 비행 이동

## 선택 기준 / Selection

멀리 떨어진 장소의 거리와 위치 관계를 유지하며 시선을 옮긴다. / Preserves the relationship between distant locations.

- 멀리 떨어진 두 장소를 연결할 때 / Connect two distant places.
- 지역 목록을 차례로 방문할 때 / Visit a list of regions in sequence.

좋은 예 / Good: 출발지에서 0.5배 줌아웃하고 이동한 뒤 목적지에 줌인한다.
나쁜 예 / Bad: 동일 배율로 빠르게 이동해 출발지와 목적지 관계가 사라진다.
주의 / Avoid: 목적지 라벨은 도착 뒤 400ms 유지한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 이동 지속 | 1800ms | 1200~2600ms | 홀드 제외 |
| 중간 배율 | 0.5 | 0.35~0.7 | 시작 배율 대비 |
| 양 끝 홀드 | 400ms | 200~800ms | 출발과 목적지 읽기 |
| 이징 | power1.inOut | power1.inOut~power2.inOut | 구간 경계에서 감속 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
gsap.set('.map', {x:0, y:0, scale:1, transformOrigin:'50% 50%'});
tl.to({}, {duration:0.4});
tl.to('.map', {scale:0.5, duration:0.6, ease:'power1.inOut'});
tl.to('.map', {x:-480, y:180, duration:0.6, ease:'power1.inOut'});
tl.to('.map', {scale:1, duration:0.6, ease:'power1.inOut'});
tl.to({}, {duration:0.4});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 플라이 투를 적용해. SVG 지도 그룹의 중심과 배율을 줌아웃, 이동, 줌인의 연속 경로로 계산해 함께 보간한다. 이동 지속 1800ms; 중간 배율 0.5; 양 끝 홀드 400ms; 이징 power1.inOut. 이징은 power1.inOut로 하고 GSAP 코어 paused 타임라인으로 역방향 seek도 같은 상태를 만들게 해.
```

### 한국어 · Codex
```text
<파일>의 대상 장면에 플라이 투를 적용해. SVG 지도 그룹의 중심과 배율을 줌아웃, 이동, 줌인의 연속 경로로 계산해 함께 보간한다. 이동 지속 1800ms; 중간 배율 0.5; 양 끝 홀드 400ms; 이징 power1.inOut. 이징은 power1.inOut를 사용해. 0초·0.9초·1.8초 시점을 캡처하고 시작 상태, 중간 변화, 끝 상태가 정의와 일치하는지 확인해. 같은 시점을 역방향 seek해서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Fly-to to <target> in <file>. Hold 400ms, zoom to 0.5 scale for 600ms, travel for 600ms, zoom back for 600ms, and hold 400ms at the destination. Use power1.inOut and a paused GSAP core timeline that produces identical states when seeking backward.
```

### English · Codex
```text
Apply Fly-to to the target scene in <file>. Hold 400ms, zoom to 0.5 scale for 600ms, travel for 600ms, zoom back for 600ms, and hold 400ms at the destination. Use power1.inOut. Capture at 0, 0.9, and 1.8 seconds to verify the initial state, the defining intermediate change, and the final state. Seek backward to the same times and compare the images.
```

예시 / Example: 플라이 투를 `.hero`에 적용해. / Apply Fly-to to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에서 1.8초 진행값을 구동하고 seek마다 좌표와 렌더 상태를 다시 계산한다.
- ReelForge: 씬 워커 브리프에 이동 지속 1800ms; 중간 배율 0.5; 양 끝 홀드 400ms; 이징 power1.inOut를 싣고 대상 좌표계와 도착 상태를 명시한다.
- Scrolline Deck: 진행률 0~1을 1.8초 타임라인에 매핑하고 scrub에서는 스프링 대신 ease-out 또는 선형 진행을 쓴다.

조합 / Pair with: [지도 경로 애니메이션 · Map Route Animation](../map-route-animation/) · [주석 등장 · Annotation Callout](../annotation-callout/)

출처 / Sources: [Observable @d3](https://observablehq.com/@d3/smooth-zooming) (unknown) · [d3/d3-zoom](https://d3js.org/d3-zoom) (ISC) · [maplibre/maplibre-gl-js](https://github.com/maplibre/maplibre-gl-js) (BSD-3-Clause)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
