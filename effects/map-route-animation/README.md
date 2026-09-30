# Nº 278 지도 경로 애니메이션 · Map Route Animation

> 클립 렌더 예정 / Clip rendering planned.

**지도 위의 곡선이 그려지고 표식이나 비행기가 경로를 따라 이동한다.**

A route is drawn as a marker travels along its geometry.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 데이터 증명, 비교 | 설명 영상, 발표, 데이터 스토리 | svg |

다른 이름 / Also known as: Flow map, 지도 이동 경로, Map Connection Draw, 지도 연결선 그리기, Animated geographic route marker, 지도 경로 이동 표식, Point along route

## 선택 기준 / Selection

출발지와 목적지, 이동 방향을 보여준다. / Shows where movement starts, ends, and proceeds.

- 서울에서 부산까지 선을 그리며 표식을 2초 동안 이동시킨다. / Explain origin, destination, and travel direction.
- 출발지와 목적지, 이동 방향을 보여준다. 기준값과 대상을 함께 표시할 때. / Keep the encoded values, labels, and visual state synchronized.

좋은 예 / Good: 서울에서 부산까지 선을 그리며 표식을 2초 동안 이동시킨다.
나쁜 예 / Bad: 곡선만으로 실제 비행 경로와 속도를 단정한다.
주의 / Avoid: 도식 경로와 실제 경로를 구분해 표기한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 이동 지속 | 2000ms | 1200~4000ms | 길이 기준 이동 |
| 도착 강조 | 300ms | 200~500ms | 도착 이후 시작 |
| 경로 폭 | 4px | 2~6px | 지도 배경과 대비 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true}),s={p:0},L=route.getTotalLength();
gsap.set(route,{strokeDasharray:L,strokeDashoffset:L});
tl.to(s,{p:1,duration:2,ease:'none',onUpdate:()=>{
 const q=route.getPointAtLength(s.p*L);
 marker.setAttribute('transform',`translate(${q.x} ${q.y})`);
 route.style.strokeDashoffset=L*(1-s.p);
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 지도 경로 애니메이션을 적용해. 지도 좌표의 베지어 경로를 그리며 이동체의 위치와 접선을 계산한다. 이동 지속 2000ms; 도착 강조 300ms; 경로 폭 4px을 적용한다. GSAP 코어의 paused 타임라인 하나로 seek 가능하게 만들고 임의 난수와 타이머를 쓰지 마.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 지도 경로 애니메이션을 적용해. 지도 좌표의 베지어 경로를 그리며 이동체의 위치와 접선을 계산한다. 이동 지속 2000ms; 도착 강조 300ms; 경로 폭 4px을 적용한다. 0초, 1초, 2초를 캡처해 시작 상태, 중간 진행, 최종 상태를 확인하고 같은 시각으로 다시 seek했을 때 좌표와 라벨이 같은지 검증해.
```

### English · Claude Code
```text
Implement Map Route Animation on <target> in <file>. Draw and traverse the route over 2000ms with a 4px stroke and linear progress. Add a 300ms arrival pulse after the marker arrives. Use one paused GSAP core timeline, support seeking, and avoid random values and timers.
```

### English · Codex
```text
Implement Map Route Animation on <target> in <file>. Draw and traverse the route over 2000ms with a 4px stroke and linear progress. Add a 300ms arrival pulse after the marker arrives. Use one paused GSAP core timeline, support seeking, and avoid random values and timers. Capture at 0s, 1s, and 2s to check the initial state, intermediate motion, and final state. Seek to each time again and verify identical geometry and labels.
```

예시 / Example: 지도 경로 애니메이션를 `.hero`에 적용해. / Apply Map Route Animation to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 지도 경로 애니메이션 상태를 넣고 seek 시 2초의 좌표와 색을 다시 계산한다.
- ReelForge: 씬 워커 브리프에 이동 지속 2000ms; 도착 강조 300ms; 경로 폭 4px을 싣고 서울에서 부산까지 선을 그리며 표식을 2초 동안 이동시킨다.
- Scrolline Deck: 진행률 0~1을 2초 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역방향에서도 라벨과 도형을 함께 갱신한다.

조합 / Pair with: [선 그리기 · Line Draw](../line-draw/) · [펄스 · Pulse](../pulse/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/us-map-flow/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/nyc-paris-flight/registry-item.json) (Apache-2.0) · [ui.aceternity.com](https://ui.aceternity.com/components/world-map) (unknown) · [magicuidesign/magicui](https://magicui.design/docs/components/dotted-map) (MIT) · [mapbox/mapbox-gl-js](https://docs.mapbox.com/mapbox-gl-js/example/animate-point-along-route/) (Mapbox TOS proprietary; 포함된 v1.13 이하는 BSD-3-Clause)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
