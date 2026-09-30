# Nº 377 종속 도형 동기 갱신 · Dependent Geometry Update

> 클립 렌더 예정 / Clip rendering planned.

**점이 움직일 때 연결선, 각도, 길이 표시도 매 순간 함께 바뀐다.**

A moving point updates its connected line, angle, and length at the same instant.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 웹 UI | svg |

다른 이름 / Also known as: Mapped synchronized values, 값 매핑 동기화, UpdateFromFunc, UpdateFromAlphaFunc

## 선택 기준 / Selection

하나의 변화가 다른 값에 미치는 관계를 이해한다. / Reveals how one changing quantity determines related geometry.

- 점의 이동과 선 길이의 관계를 설명할 때 / Explain how a moving point changes a line length.
- 기하 시연에서 각도와 거리 라벨을 동기화할 때 / Keep angle and distance labels attached during a geometry demonstration.

좋은 예 / Good: 점의 x가 300px에서 900px로 움직일 때 연결선과 길이 숫자를 같은 진행값으로 계산한다.
나쁜 예 / Bad: 점과 연결선을 별도 지연으로 움직여 선 끝이 점에서 떨어진다.
주의 / Avoid: 종속 도형에 독립 이징을 적용하지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 변화 시간 | 1200ms | 800~1800ms | 모든 종속값이 같은 진행률을 쓴다. |
| 이동 거리 | 600px | 200~800px | 점의 x 이동 기준이다. |
| 갱신 기준 | 60fps | 30~60fps | 프레임 누적 대신 현재 진행률로 계산한다. |
| 이징 | none | none \| power2.out \| power2.inOut | 데이터의 시간 진행은 none을 유지한다. |

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true}), state={p:0};
tl.to(state,{p:1,duration:1.2,ease:'none',onUpdate:()=>{
  const x=300+600*state.p,y=400;
  gsap.set('.point',{attr:{cx:x,cy:y}});
  gsap.set('.link',{attr:{x1:300,y1:700,x2:x,y2:y}});
  document.querySelector('.length').textContent=Math.hypot(x-300,y-700).toFixed(0);
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 종속 도형 동기 갱신를 구현해. 점이 움직일 때 연결선, 각도, 길이 표시도 매 순간 함께 바뀐다. 변화 시간 1200ms, 이동 거리 600px, 갱신 기준 60fps, 이징 none를 적용하고 GSAP 코어의 paused 타임라인 하나로 seek 가능하게 작성해. 종속 도형에 독립 이징을 적용하지 않는다.
```

### 한국어 · Codex
```text
<파일>의 <대상> 장면에 종속 도형 동기 갱신를 적용해. 변화 시간 1200ms, 이동 거리 600px, 갱신 기준 60fps, 이징 none를 사용하고 다음 동작을 구현해: 단일 진행률에서 점 좌표와 종속 SVG 도형을 함께 계산한다. 플러그인과 Math.random 없이 작성하고 0.3초·0.72초·1.2초를 캡처해 초기 상태, 중간 변화, 최종 상태가 연속적이며 다음 예시와 맞는지 확인해: 점의 x가 300px에서 900px로 움직일 때 연결선과 길이 숫자를 같은 진행값으로 계산한다.
```

### English · Claude Code
```text
Implement Dependent Geometry Update for <target> in <file>. A moving point updates its connected line, angle, and length at the same instant. Use transition duration: 1200ms; travel distance: 600px; update rate: 60fps; easing: none in a single paused GSAP core timeline that supports seeking. Calculate all dependent geometry from one progress value without separate easing.
```

### English · Codex
```text
Apply Dependent Geometry Update to the <target> scene in <file> using transition duration: 1200ms; travel distance: 600px; update rate: 60fps; easing: none. A moving point updates its connected line, angle, and length at the same instant. Use prepared data or geometry with GSAP core, no plugins, and no Math.random; capture at 0.3, 0.72, 1.2 seconds to verify continuous intermediate geometry, correct endpoints, and identical output after repeated seeks. Calculate all dependent geometry from one progress value without separate easing.
```

예시 / Example: 종속 도형 동기 갱신를 `.hero`에 적용해. / Apply Dependent Geometry Update to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인 하나에 종속 도형 동기 갱신 상태를 넣고 seek(t)로 1.2초 구간을 재현한다. 현재 시간에서 도형을 계산해 프레임 누적을 피한다.
- ReelForge: 씬 워커 브리프에 변화 시간 1200ms, 이동 거리 600px, 갱신 기준 60fps, 이징 none를 싣고 입력 자료와 초기 도형 좌표를 고정한다. 점의 x가 300px에서 900px로 움직일 때 연결선과 길이 숫자를 같은 진행값으로 계산한다.
- Scrolline Deck: 진행률 0~1을 1.2초 구간에 매핑해 같은 타임라인을 scrub한다. 시간량은 none, 시각 전환은 power2.out을 쓰고 스프링 대신 끝점을 넘지 않는 ease-out을 쓴다.

조합 / Pair with: [벡터 끝잇기 · Vector Tip-to-tail Construction](../vector-tip-to-tail/) · [주석 위치 추적 · Annotation Tracking](../annotation-tracking/)

출처 / Sources: [greensock/GSAP](https://gsap.com/docs/v3/GSAP/UtilityMethods/) (GSAP Standard License) · [motiondivision/motion](https://motion.dev/docs/react-use-transform) (MIT) · [pmndrs/react-spring](https://www.react-spring.dev/docs/advanced/interpolation) (MIT) · [juliangarnier/anime](https://animejs.com/documentation/utilities) (MIT) · [Popmotion/popmotion](https://github.com/Popmotion/popmotion/blob/master/README.md) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
