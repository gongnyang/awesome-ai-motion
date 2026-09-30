# Nº 288 흐름 리본과 입자 전환 · Ribbon-to-particle Transition

> 클립 렌더 예정 / Clip rendering planned.

**넓은 흐름 띠가 같은 경로를 따라 이동하는 여러 단위 점으로 분해된다.**

An aggregate ribbon dissolves into unit particles that travel along the same flow paths.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 설명, 비교 | 설명 영상, 데이터 스토리, 스크롤덱 | svg |

다른 이름 / Also known as: Flow-band-to-particle decomposition, 흐름 리본과 입자 분해

## 선택 기준 / Selection

집계된 흐름량과 그 안의 개별 사례를 연결한다. / Connects aggregate flow volume to the individual cases it contains.

- 집계된 흐름량과 그 안의 개별 사례를 연결한다. 이때 항목 ID와 척도를 유지한다. / Use when you need to explain ribbon-to-particle transition while preserving item identities and chart scales.
- 흐름 띠를 1점당 10건의 입자로 바꿔 개별 사례의 이동을 보여준다. / Use when the audience needs to follow the intermediate states rather than only compare final snapshots.

좋은 예 / Good: 흐름 띠를 1점당 10건의 입자로 바꿔 개별 사례의 이동을 보여준다.
나쁜 예 / Bad: 리본 폭과 관계없는 점 개수를 써 수량을 왜곡한다.
주의 / Avoid: 리본 폭과 관계없는 점 개수를 써 수량을 왜곡한다. · 재생 중 임의 난수와 벽시계로 데이터나 좌표를 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 2.5s | 1.875~3.75s | 시점 또는 전환 한 회 기준 |
| 리본 페이드 | 400ms | 250~600ms | 입자와 교차 공개 |
| 입자 등장 | 500ms | 300~700ms | 점 개수는 값 비례 |
| 점당 단위 | 10건 | 1~100건 | 범례에 단위 명시 |
| 이징 | none | none | none은 선형 진행 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
const s = {time:0};
tl.to('.ribbon',{opacity:0,duration:0.4,ease:'none'},0);
tl.fromTo('.particle',{opacity:0},{opacity:1,duration:0.5,ease:'none'},0);
tl.to(s,{time:2.5,duration:2.5,ease:'none',onUpdate:()=>placeParticlesAtTime(paths,s.time,10)},0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 흐름 리본과 입자 전환을 적용해줘. 띠 내부에 값 비례 개수의 점을 배치하고 띠와 점의 opacity를 교차 보간한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 2.5s; 리본 페이드 400ms; 입자 등장 500ms; 점당 단위 10건; 이징 none로 구현하고 GSAP 코어 paused 타임라인 하나로 seek를 지원해. 흐름 띠를 1점당 10건의 입자로 바꿔 개별 사례의 이동을 보여준다.
```

### 한국어 · Codex
```text
<파일>의 데이터 차트 갱신 구간에 흐름 리본과 입자 전환을 적용해. 띠 내부에 값 비례 개수의 점을 배치하고 띠와 점의 opacity를 교차 보간한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 2.5s; 리본 페이드 400ms; 입자 등장 500ms; 점당 단위 10건; 이징 none를 사용해. 0.625초, 1.25초, 2.5초 시점을 캡처해 넓은 흐름 띠가 같은 경로를 따라 이동하는 여러 단위 점으로 분해된다. 항목 대응과 최종 수치를 확인하고 역방향 seek에서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Ribbon-to-particle Transition to <target>. Use a 2.5s transition with none easing and preserve item IDs, colors, and chart scales. Implement the geometry renderer used in the snippet with explicit before and after data; use a single paused GSAP core timeline and derive every frame from its playhead. An aggregate ribbon dissolves into unit particles that travel along the same flow paths.
```

### English · Codex
```text
Apply Ribbon-to-particle Transition in the chart update section of <file>. Use the card parameter defaults, a 2.5s transition, and none easing; implement the snippet geometry helpers from fixed input data. Capture at 0.625s, 1.25s, and 2.5s to verify item correspondence, the intermediate geometry, and final values. Seek backward and forward to confirm identical output at identical times.
```

예시 / Example: 흐름 리본과 입자 전환를 `.hero`에 적용해. / Apply Ribbon-to-particle Transition to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 2.5초 전환을 넣고 seek마다 입력 상태에서 좌표와 경로를 다시 계산한다. 띠 내부에 값 비례 개수의 점을 배치하고 띠와 점의 opacity를 교차 보간한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다.
- ReelForge: 씬 워커 브리프에 지속 시간 2.5s; 리본 페이드 400ms; 입자 등장 500ms; 점당 단위 10건; 이징 none와 항목 ID, 축 범위, 전후 데이터를 싣는다. 흐름 띠를 1점당 10건의 입자로 바꿔 개별 사례의 이동을 보여준다.
- Scrolline Deck: 진행률 0~1을 2.5초 타임라인에 매핑한다. scrub은 누적 상태 없이 같은 진행률에 같은 좌표를 내며 스프링 대신 power2.out 또는 선형 보간을 쓴다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 단계 전환 · Staged Chart Transition](../staged-chart-transition/)

출처 / Sources: [d3/d3-sankey](https://github.com/d3/d3-sankey) (BSD-3-Clause) · [The New York Times](https://www.nytimes.com/interactive/2018/03/19/upshot/race-class-white-and-black-men.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
