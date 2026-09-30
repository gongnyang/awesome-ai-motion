# Nº 309 지도 높이 돌출 · Map Extrusion

> 클립 렌더 예정 / Clip rendering planned.

**도시 구역이나 격자 셀이 바닥에서 솟아오르며 높이로 밀도를 나타낸다**

City districts or grid cells rise from the ground with height showing density.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 고급 | 데이터 증명, 강조 | 데이터 스토리, 발표, 설명 영상 | webgl |

다른 이름 / Also known as: Extruded density map rise, 입체 밀도 지도 상승

## 선택 기준 / Selection

지리적 위치와 수치의 큰 차이를 입체로 한눈에 느끼게 한다. 어디가 높은지 바로 보인다 / Lets viewers feel geographic position and large differences in value at a glance in 3D.

- 인구, 매출, 밀도를 지역별 높이로 보여 줄 때 / Show population, sales or density by region as height.
- 전과 후의 값 변화를 높이 변화로 비교할 때 / Compare before and after values as changes in height.

좋은 예 / Good: 1200ms 동안 각 구역이 cubicOut으로 바닥에서 값에 비례한 높이까지 솟는다. 카메라는 45도로 기울어 있고 높이 배율 1
나쁜 예 / Bad: 높이 배율을 3으로 올려 앞쪽 구역이 뒤쪽을 가리고, 모든 구역이 동시에 같은 속도로 올라 순위가 안 보인다
주의 / Avoid: 높이 배율은 뒤 구역이 가려지지 않게 조정 · 색이 높이와 같은 정보를 이중 부호화하도록 맞춘다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 1200ms | 900~1600ms |  |
| 높이 배율 | 1 | 0.6~1.5 | 값→px |
| 카메라 기울기 | 45도 | 35~60도 |  |
| 구역 stagger | 30ms | 20~50ms | 값 큰 구역부터 |

이징 / Ease: `power3.out`

## 구현 / Implementation (GSAP)

```js
cells.forEach((c, i) => tl.fromTo(c.mesh.scale, { y: 0.001 }, { y: c.value * 1, duration: 1.2, ease: 'power3.out' }, 0.3 + i * 0.03));
gsap.set(camera.rotation, { x: -Math.PI / 4 });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 지도에서 구역별로 값에 비례하는 높이가 솟게 해줘. WebGL 메시의 scale.y를 0.001에서 값*1까지 1.2초 동안 power3.out으로 올리고, 구역마다 30ms 간격으로 값이 큰 구역부터 시작해. 카메라는 45도 기울여 고정.
```

### 한국어 · Codex
```text
<파일>에 map extrusion을 구현해. scale.y 0.001→value*1, 1.2s, power3.out, stagger 0.03s 큰 값 우선, 카메라 rotation.x -45도 고정. 0.5초, 1.0초, 1.7초를 캡처해 순서대로 솟는지, 최종 높이 순서가 데이터 순위와 같은지 확인해.
```

### English · Claude Code
```text
On the map in <target>, raise each district to a height proportional to its value. Tween the mesh scale.y from 0.001 to value*1 over 1.2 seconds with power3.out, staggering 30ms per district with the largest values first. Keep the camera fixed tilted at 45 degrees.
```

### English · Codex
```text
Implement map extrusion in <file>: scale.y 0.001 to value*1, 1.2s, power3.out, stagger 0.03s with largest first, camera rotation.x fixed at -45 degrees. Capture at 0.5s, 1.0s and 1.7s and verify the districts rise in order and the final height ranking matches the data ranking.
```

예시 / Example: 지도 높이 돌출를 `.hero`에 적용해. / Apply Map Extrusion to `.hero`.

## 적용 / Application

- HyperFrames: Three.js 씬의 mesh.scale.y를 paused 타임라인으로 tween한다. 렌더러는 rAF 없이 timeline onUpdate에서 한 번씩 그린다
- ReelForge: 브리프에 지역 데이터 배열, 높이 배율, 카메라 각도, 색상 스케일을 싣는다
- Scrolline Deck: 진행률에 높이 성장을 대응시킨다. 카메라 각도는 고정하고 scrub은 높이만 움직인다

조합 / Pair with: [지도에서 막대 차트로 · Map to Bar Chart](../map-to-bar-chart/) · [코로플레스 색상 전환 · Choropleth Transition](../choropleth-transition/) · [데이터 면적 변화 · Animated Size Encoding](../size-encoding/)

출처 / Sources: [the-pudding/3d-cities-story](https://github.com/the-pudding/3d-cities-story) (MIT) · [Yang et al. Tilt Map](https://arxiv.org/abs/2006.14120) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
