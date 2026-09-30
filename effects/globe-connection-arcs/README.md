# Nº 547 회전 지구 연결 호 · Rotating Globe Connections

> 클립 렌더 예정 / Clip rendering planned.

**지구가 천천히 회전하고 지역 점 사이에 빛나는 호가 순서대로 나타난다.**

A globe rotates slowly as connection arcs appear between geographic locations.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 고급 | 설명, 브랜딩 | 설명 영상, 스크롤덱, 웹 UI | webgl |

다른 이름 / Also known as: Rotating Globe and Arcs, 회전 지구와 연결 호

## 선택 기준 / Selection

국제적 연결과 분포를 보여 준다. / Communicates international reach and geographic connections.

- 지역 사무소 사이의 연결을 공개할 때 / Reveal connections between regional offices.
- 국제 배송망의 출발지와 도착지를 보여줄 때 / Show a global delivery network with geographic endpoints.

좋은 예 / Good: 지구를 12초에 한 바퀴 돌리고 연결 호를 각각 1.5초 동안 공개한다.
나쁜 예 / Bad: 뒤쪽 호도 같은 밝기로 그려 지구 앞뒤 관계가 사라진다.
주의 / Avoid: 호의 높이나 밝기를 실제 거리나 물량으로 혼동하게 하지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 회전 주기 | 12000ms | 10000~20000ms | 한 주기에 360도 회전한다. |
| 호 공개 시간 | 1500ms | 900~2200ms | 선의 정점 순서대로 공개한다. |
| 지점 수 | 30개 | 8~50개 | 실제 좌표를 고정 배열로 둔다. |
| 호 간격 | 500ms | 300~900ms | 연결을 순서대로 공개한다. |
| 이징 | none | none \| power2.out \| power2.inOut | 데이터의 시간 진행은 none을 유지한다. |

## 구현 / Implementation (GSAP)

```js
// globe is a prepared WebGL group; arcs are prepared line meshes.
const tl=gsap.timeline({paused:true});
tl.fromTo(globe.rotation,{y:0},{y:Math.PI*2,duration:12,ease:'none'},0);
arcs.forEach((arc,i)=>{
  const state={p:0},count=arc.geometry.attributes.position.count;
  tl.fromTo(state,{p:0},{p:1,duration:1.5,ease:'none',onUpdate:()=>arc.geometry.setDrawRange(0,Math.floor(count*state.p))},i*0.5);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 회전 지구 연결 호를 구현해. 지구가 천천히 회전하고 지역 점 사이에 빛나는 호가 순서대로 나타난다. 회전 주기 12000ms, 호 공개 시간 1500ms, 지점 수 30개, 호 간격 500ms, 이징 none를 적용하고 GSAP 코어의 paused 타임라인 하나로 seek 가능하게 작성해. 호의 높이나 밝기를 실제 거리나 물량으로 혼동하게 하지 않는다.
```

### 한국어 · Codex
```text
<파일>의 <대상> 장면에 회전 지구 연결 호를 적용해. 회전 주기 12000ms, 호 공개 시간 1500ms, 지점 수 30개, 호 간격 500ms, 이징 none를 사용하고 다음 동작을 구현해: WebGL 구면 점과 곡선을 그리거나 canvas 구면 좌표를 투영한다 플러그인과 Math.random 없이 작성하고 3.0초·7.2초·12초를 캡처해 초기 상태, 중간 변화, 최종 상태가 연속적이며 다음 예시와 맞는지 확인해: 지구를 12초에 한 바퀴 돌리고 연결 호를 각각 1.5초 동안 공개한다.
```

### English · Claude Code
```text
Implement Rotating Globe Connections for <target> in <file>. A globe rotates slowly as connection arcs appear between geographic locations. Use rotation period: 12000ms; arc reveal duration: 1500ms; location count: 30; arc spacing: 500ms; easing: none in a single paused GSAP core timeline that supports seeking. Do not imply distance or volume through arc height or brightness.
```

### English · Codex
```text
Apply Rotating Globe Connections to the <target> scene in <file> using rotation period: 12000ms; arc reveal duration: 1500ms; location count: 30; arc spacing: 500ms; easing: none. A globe rotates slowly as connection arcs appear between geographic locations. Use prepared data or geometry with GSAP core, no plugins, and no Math.random; capture at 3.0, 7.2, 12 seconds to verify continuous intermediate geometry, correct endpoints, and identical output after repeated seeks. Do not imply distance or volume through arc height or brightness.
```

예시 / Example: 회전 지구 연결 호를 `.hero`에 적용해. / Apply Rotating Globe Connections to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인 하나에 회전 지구 연결 호 상태를 넣고 seek(t)로 12초 구간을 재현한다. 현재 시간에서 도형을 계산해 프레임 누적을 피한다.
- ReelForge: 씬 워커 브리프에 회전 주기 12000ms, 호 공개 시간 1500ms, 지점 수 30개, 호 간격 500ms, 이징 none를 싣고 입력 자료와 초기 도형 좌표를 고정한다. 지구를 12초에 한 바퀴 돌리고 연결 호를 각각 1.5초 동안 공개한다.
- Scrolline Deck: 진행률 0~1을 12초 구간에 매핑해 같은 타임라인을 scrub한다. 시간량은 none, 시각 전환은 power2.out을 쓰고 스프링 대신 끝점을 넘지 않는 ease-out을 쓴다.

조합 / Pair with: [지도 경로 애니메이션 · Map Route Animation](../map-route-animation/) · [주석 위치 추적 · Annotation Tracking](../annotation-tracking/)

출처 / Sources: [magicuidesign/magicui](https://magicui.design/docs/components/globe) (MIT) · [ui.aceternity.com](https://ui.aceternity.com/components/github-globe) (unknown) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
