# Nº 402 벡터장 방향 정렬 · Vector Field Alignment

> 클립 렌더 예정 / Clip rendering planned.

**격자의 작은 막대들이 이동하는 기준점을 향해 방향을 돌린다.**

Short bars in a grid turn toward a moving reference point.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 웹 UI | canvas |

다른 이름 / Also known as: Magnetic field filings, 자기장 쇳가루

## 선택 기준 / Selection

벡터장의 방향과 공간적 영향을 보여준다. / Shows the direction and spatial influence of a vector field.

- 이동하는 기준점 주변의 방향장을 설명할 때 / Illustrate the directions around a moving field source.
- 기준점 위치에 따른 방향 패턴을 비교할 때 / Compare spatial direction patterns at different source positions.

좋은 예 / Good: 16×16 막대의 중심에서 기준점까지 atan2를 계산해 0.3초 동안 방향을 보간한다.
나쁜 예 / Bad: 좌우 경계에서 각도를 360도 회전시켜 방향이 튄다.
주의 / Avoid: 각도 보간은 가장 짧은 회전 경로로 계산한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 격자 | 16×16 | 8×8~24×24 | 막대 중심을 고정한다. |
| 반응 시간 | 300ms | 200~600ms | 최단 각도 차이를 보간한다. |
| 격자 간격 | 48px | 32~64px | 1920×1080 화면 기준이다. |
| 막대 길이 | 24px | 16~32px | 간격보다 짧게 둔다. |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 끝점을 넘지 않는 이징을 쓴다. |

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true}), state={p:0};
const canvas=document.querySelector('canvas'),ctx=canvas.getContext('2d');
tl.to(state,{p:1,duration:0.3,ease:'power2.out',onUpdate:()=>{
  ctx.clearRect(0,0,canvas.width,canvas.height);ctx.beginPath();
  for(let r=0;r<16;r++)for(let c=0;c<16;c++){const x=100+c*48,y=100+r*48,a=Math.atan2(480-y,900-x)*state.p;ctx.moveTo(x-12*Math.cos(a),y-12*Math.sin(a));ctx.lineTo(x+12*Math.cos(a),y+12*Math.sin(a));}
  ctx.stroke();
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 벡터장 방향 정렬를 구현해. 격자의 작은 막대들이 이동하는 기준점을 향해 방향을 돌린다. 격자 16×16, 반응 시간 300ms, 격자 간격 48px, 막대 길이 24px, 이징 power2.out를 적용하고 GSAP 코어의 paused 타임라인 하나로 seek 가능하게 작성해. 각도 보간은 가장 짧은 회전 경로로 계산한다.
```

### 한국어 · Codex
```text
<파일>의 <대상> 장면에 벡터장 방향 정렬를 적용해. 격자 16×16, 반응 시간 300ms, 격자 간격 48px, 막대 길이 24px, 이징 power2.out를 사용하고 다음 동작을 구현해: 막대 중심과 가상 기준점 사이의 atan2 각도를 계산하고 회전을 보간한다. 플러그인과 Math.random 없이 작성하고 0.07초·0.18초·0.3초를 캡처해 초기 상태, 중간 변화, 최종 상태가 연속적이며 다음 예시와 맞는지 확인해: 16×16 막대의 중심에서 기준점까지 atan2를 계산해 0.3초 동안 방향을 보간한다.
```

### English · Claude Code
```text
Implement Vector Field Alignment for <target> in <file>. Short bars in a grid turn toward a moving reference point. Use grid dimensions: 16×16; response duration: 300ms; grid spacing: 48px; bar length: 24px; easing: power2.out in a single paused GSAP core timeline that supports seeking. Interpolate angles along the shortest rotation path.
```

### English · Codex
```text
Apply Vector Field Alignment to the <target> scene in <file> using grid dimensions: 16×16; response duration: 300ms; grid spacing: 48px; bar length: 24px; easing: power2.out. Short bars in a grid turn toward a moving reference point. Use prepared data or geometry with GSAP core, no plugins, and no Math.random; capture at 0.07, 0.18, 0.3 seconds to verify continuous intermediate geometry, correct endpoints, and identical output after repeated seeks. Interpolate angles along the shortest rotation path.
```

예시 / Example: 벡터장 방향 정렬를 `.hero`에 적용해. / Apply Vector Field Alignment to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인 하나에 벡터장 방향 정렬 상태를 넣고 seek(t)로 0.3초 구간을 재현한다. 현재 시간에서 도형을 계산해 프레임 누적을 피한다.
- ReelForge: 씬 워커 브리프에 격자 16×16, 반응 시간 300ms, 격자 간격 48px, 막대 길이 24px, 이징 power2.out를 싣고 입력 자료와 초기 도형 좌표를 고정한다. 16×16 막대의 중심에서 기준점까지 atan2를 계산해 0.3초 동안 방향을 보간한다.
- Scrolline Deck: 진행률 0~1을 0.3초 구간에 매핑해 같은 타임라인을 scrub한다. 시간량은 none, 시각 전환은 power2.out을 쓰고 스프링 대신 끝점을 넘지 않는 ease-out을 쓴다.

조합 / Pair with: [종속 도형 동기 갱신 · Dependent Geometry Update](../dependent-geometry/) · [마그네틱 모션 · Magnetic Attraction](../magnetic-attraction/)

출처 / Sources: [motion.dev examples](https://motion.dev/examples/react-magnetic-filings) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
