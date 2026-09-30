# Nº 259 차트 경로 모프 · Chart Path Morph

> 클립 렌더 예정 / Clip rendering planned.

**같은 그래프의 선이나 면이 새로운 데이터 모양으로 부드럽게 변한다.**

A chart line or area continuously reshapes to match a new dataset.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 비교, 데이터 증명 | 설명 영상, 데이터 스토리, 발표 | svg |

다른 이름 / Also known as: Data path reshaping, 데이터 경로 변화, Line and area shape update, 선과 면 윤곽 갱신

## 선택 기준 / Selection

이전과 이후 추세를 연속적으로 비교하게 한다. / Preserves continuity while comparing earlier and later trends.

- 선택 기간이 바뀔 때 선 그래프를 갱신할 때 / Update a line chart when the selected period changes.
- 같은 축에서 이전과 이후 추세를 비교할 때 / Compare two trend profiles on a fixed axis.

좋은 예 / Good: 같은 x 위치의 다섯 값을 0.9초 동안 보간하고 축과 표본 수를 유지한다.
나쁜 예 / Bad: 서로 다른 점 개수를 그대로 연결해 중간에 선이 뒤집힌다.
주의 / Avoid: 보간 중간값을 관측값으로 표기하지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전환 시간 | 900ms | 600~1400ms | 동일 x 좌표의 값을 보간한다. |
| 표본 수 | 5개 | 5~100개 | 양쪽 배열을 동일 길이로 맞춘다. |
| 점 간격 | 240px | 12~300px | 고정된 x 척도를 쓴다. |
| 이징 | power2.inOut | none \| power2.out \| power2.inOut | 끝점을 넘지 않는 이징을 쓴다. |

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true}), state={p:0};
const a=[400,250,350,180,280],b=[300,320,160,260,120];
tl.to(state,{p:1,duration:0.9,ease:'power2.inOut',onUpdate:()=>{
  const d=a.map((v,i)=>(i?'L':'M')+(200+i*240)+','+(v+(b[i]-v)*state.p)).join(' ');
  document.querySelector('.trend').setAttribute('d',d);
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 차트 경로 모프를 구현해. 같은 그래프의 선이나 면이 새로운 데이터 모양으로 부드럽게 변한다. 전환 시간 900ms, 표본 수 5개, 점 간격 240px, 이징 power2.inOut를 적용하고 GSAP 코어의 paused 타임라인 하나로 seek 가능하게 작성해. 보간 중간값을 관측값으로 표기하지 않는다.
```

### 한국어 · Codex
```text
<파일>의 <대상> 장면에 차트 경로 모프를 적용해. 전환 시간 900ms, 표본 수 5개, 점 간격 240px, 이징 power2.inOut를 사용하고 다음 동작을 구현해: 데이터 배열을 직접 보간한 뒤 매 프레임 SVG 경로를 다시 계산한다. 플러그인과 Math.random 없이 작성하고 0.23초·0.54초·0.9초를 캡처해 초기 상태, 중간 변화, 최종 상태가 연속적이며 다음 예시와 맞는지 확인해: 같은 x 위치의 다섯 값을 0.9초 동안 보간하고 축과 표본 수를 유지한다.
```

### English · Claude Code
```text
Implement Chart Path Morph for <target> in <file>. A chart line or area continuously reshapes to match a new dataset. Use transition duration: 900ms; sample count: 5; point spacing: 240px; easing: power2.inOut in a single paused GSAP core timeline that supports seeking. Normalize both datasets to matching sample counts; do not label interpolated values as observations.
```

### English · Codex
```text
Apply Chart Path Morph to the <target> scene in <file> using transition duration: 900ms; sample count: 5; point spacing: 240px; easing: power2.inOut. A chart line or area continuously reshapes to match a new dataset. Use prepared data or geometry with GSAP core, no plugins, and no Math.random; capture at 0.23, 0.54, 0.9 seconds to verify continuous intermediate geometry, correct endpoints, and identical output after repeated seeks. Normalize both datasets to matching sample counts; do not label interpolated values as observations.
```

예시 / Example: 차트 경로 모프를 `.hero`에 적용해. / Apply Chart Path Morph to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인 하나에 차트 경로 모프 상태를 넣고 seek(t)로 0.9초 구간을 재현한다. 현재 시간에서 도형을 계산해 프레임 누적을 피한다.
- ReelForge: 씬 워커 브리프에 전환 시간 900ms, 표본 수 5개, 점 간격 240px, 이징 power2.inOut를 싣고 입력 자료와 초기 도형 좌표를 고정한다. 같은 x 위치의 다섯 값을 0.9초 동안 보간하고 축과 표본 수를 유지한다.
- Scrolline Deck: 진행률 0~1을 0.9초 구간에 매핑해 같은 타임라인을 scrub한다. 시간량은 none, 시각 전환은 power2.out을 쓰고 스프링 대신 끝점을 넘지 않는 ease-out을 쓴다.

조합 / Pair with: [축 범위 전환 · Axis Rescaling](../axis-rescale/) · [주석 등장 · Annotation Callout](../annotation-callout/)

출처 / Sources: [greensock/GSAP](https://gsap.com/docs/v3/GSAP/CorePlugins/EndArray/) (GSAP Standard License) · [greensock/GSAP](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/) (GSAP Standard License) · [juliangarnier/anime](https://animejs.com/documentation/svg/morphto) (MIT) · [Observable @d3](https://observablehq.com/@d3/streamgraph-transitions) (unknown) · [chartjs/Chart.js](https://www.chartjs.org/docs/latest/configuration/animations.html) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
