# Nº 310 지도에서 막대 차트로 · Map to Bar Chart

> 클립 렌더 예정 / Clip rendering planned.

**평면 지도가 기울어 높이 지도가 된 뒤 지역별 막대가 나란한 차트로 옮겨 간다**

A flat map tilts into a height map, then region prisms move into an aligned bar chart.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 고급 | 데이터 증명, 설명 | 데이터 스토리, 발표, 설명 영상 | webgl |

다른 이름 / Also known as: Map tilt to chart, 지도 기울이기와 차트 전환

## 선택 기준 / Selection

지리 맥락과 정확한 값 비교를 하나의 흐름으로 잇는다. 지도에서 본 그 지역이 막대 차트의 그 막대라는 것을 알게 한다 / Links geographic context and exact value comparison in one flow, so viewers see that a region on the map is a bar in the chart.

- 지도에서 어느 지역이 높은지 보여 준 뒤 정확한 순위를 비교하게 할 때 / Show which region is high on the map, then let viewers compare exact ranks.
- 지역 정보와 값 비교를 한 화면 흐름으로 연결할 때 / Connect region information and value comparison in one screen flow.

좋은 예 / Good: 기울임 600ms, 높이 600ms, 재배치 900ms로 총 2100ms. 지역 ID가 유지되어 각 프리즘이 해당 막대로 이동한다
나쁜 예 / Bad: 지도에서 사라지고 막대 차트가 새로 나타나 어느 막대가 어느 지역인지 알 수 없다. 재배치 중 색이 바뀐다
주의 / Avoid: 지역 ID와 색을 전 구간 유지한다 · 재배치 중 라벨을 숨기지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기울임 | 600ms | 400~800ms | 0→45도 |
| 높이 | 600ms | 400~800ms | 프리즘 솟음 |
| 재배치 | 900ms | 700~1200ms | 막대 기준선으로 |
| 이징 | power3.inOut | power2.inOut |  |

이징 / Ease: `power2.inOut`

## 구현 / Implementation (GSAP)

```js
tl.to(camera.rotation, { x: -Math.PI / 4, duration: 0.6, ease: 'power2.inOut' }, 0.3)
  .to(cells.map(c => c.mesh.scale), { y: (i) => cells[i].value, duration: 0.6, ease: 'power2.out' })
  .to(cells.map(c => c.mesh.position), { x: (i) => barX[i], z: 0, duration: 0.9, ease: 'power2.inOut' }, '+=0.1');
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 지도가 막대 차트가 되게 해줘. 0.3초부터 카메라를 0.6초 동안 45도 기울이고, 이어서 지역별 높이를 0.6초로 올린 뒤, 프리즘을 0.9초 동안 power2.inOut으로 막대 기준선의 정렬 위치로 옮겨. 지역 색은 끝까지 유지해.
```

### 한국어 · Codex
```text
<파일>에 map to bar chart 전환을 구현해. 카메라 0.6s, 높이 0.6s, 재배치 0.9s(power2.inOut). 0.6초, 1.2초, 2.0초에 캡처해 각 프리즘이 같은 색으로 막대 위치로 이동하는지, 최종 막대 순서가 값 순서와 같은지 확인해.
```

### English · Claude Code
```text
Turn the map in <target> into a bar chart. From 0.3 seconds tilt the camera 45 degrees over 0.6s, then raise regional heights over 0.6s, then move the prisms to the bar baseline positions over 0.9s with power2.inOut. Keep each region's color to the end.
```

### English · Codex
```text
Implement a map to bar chart transition in <file>: camera 0.6s, heights 0.6s, rearrange 0.9s (power2.inOut). Capture at 0.6s, 1.2s and 2.0s and verify each prism keeps its color while moving to a bar position and the final bar order matches value order.
```

예시 / Example: 지도에서 막대 차트로를 `.hero`에 적용해. / Apply Map to Bar Chart to `.hero`.

## 적용 / Application

- HyperFrames: 세 단계를 하나의 타임라인에 순차 배치한다. 지역 ID 배열 순서를 그대로 barX 배열과 맞춘다
- ReelForge: 브리프에 지역 목록, 막대 정렬 기준, 세 단계 시간을 싣는다
- Scrolline Deck: 진행률 0~0.29 기울임, 0.29~0.57 높이, 0.57~1 재배치. 역스크롤로 지도로 돌아갈 수 있다

조합 / Pair with: [지도 높이 돌출 · Map Extrusion](../map-extrusion/) · [표에서 차트로 전환 · Table-to-chart Transition](../table-to-chart/) · [순위 재배치 · Rank Transition](../rank-transition/)

출처 / Sources: [Yang et al. Tilt Map](https://arxiv.org/abs/2006.14120) (unknown) · [apache/echarts](https://echarts.apache.org/handbook/en/basics/release-note/5-2-0/) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
