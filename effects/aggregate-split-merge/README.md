# Nº 246 집계 분할과 합치기 · Aggregate Split and Merge

> 클립 렌더 예정 / Clip rendering planned.

**하나의 집계 도형이 여러 세부 도형으로 갈라지거나 세부 도형들이 하나로 모인다.**

An aggregate mark splits into detailed marks, or detailed marks merge into one aggregate.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 설명, 비교 | 설명 영상, 데이터 스토리, 스크롤덱 | svg |

다른 이름 / Also known as: 집계 마크 분할과 합치기

## 선택 기준 / Selection

집계와 세부 데이터의 포함 관계를 보여준다. / Shows the inclusion relationship between totals and their components.

- 집계와 세부 데이터의 포함 관계를 보여준다. 이때 항목 ID와 척도를 유지한다. / Use when you need to explain aggregate split and merge while preserving item identities and chart scales.
- 지역 합계 원이 면적 합계를 보존한 세 도시 원으로 갈라진다. / Use when the audience needs to follow the intermediate states rather than only compare final snapshots.

좋은 예 / Good: 지역 합계 원이 면적 합계를 보존한 세 도시 원으로 갈라진다.
나쁜 예 / Bad: 자식 크기를 임의로 정해 합계가 달라 보인다.
주의 / Avoid: 자식 크기를 임의로 정해 합계가 달라 보인다. · 재생 중 임의 난수와 벽시계로 데이터나 좌표를 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 1s | 0.75~1.5s | 시점 또는 전환 한 회 기준 |
| 면적 합계 | 100% | 100% | 자식 면적 합계는 부모와 같다 |
| 자식 간격 | 8px | 4~16px | 부모 ID로 대응 |
| 이징 | power2.inOut | power2.inOut | none은 선형 진행 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
children.forEach((el,i)=>{
  gsap.set(el,{attr:{cx:parent.x,cy:parent.y,r:Math.sqrt(values[i]/Math.PI)}});
  tl.to(el,{attr:{cx:targets[i].x,cy:targets[i].y},duration:1,ease:'power2.inOut'},0);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 집계 분할과 합치기을 적용해줘. 부모 도형 내부에서 자식 시작점을 정하고 목표 좌표와 크기로 보간한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 1s; 면적 합계 100%; 자식 간격 8px; 이징 power2.inOut로 구현하고 GSAP 코어 paused 타임라인 하나로 seek를 지원해. 지역 합계 원이 면적 합계를 보존한 세 도시 원으로 갈라진다.
```

### 한국어 · Codex
```text
<파일>의 데이터 차트 갱신 구간에 집계 분할과 합치기을 적용해. 부모 도형 내부에서 자식 시작점을 정하고 목표 좌표와 크기로 보간한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 1s; 면적 합계 100%; 자식 간격 8px; 이징 power2.inOut를 사용해. 0.25초, 0.5초, 1초 시점을 캡처해 하나의 집계 도형이 여러 세부 도형으로 갈라지거나 세부 도형들이 하나로 모인다. 항목 대응과 최종 수치를 확인하고 역방향 seek에서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Aggregate Split and Merge to <target>. Use a 1s transition with power2.inOut easing and preserve item IDs, colors, and chart scales. Implement the geometry renderer used in the snippet with explicit before and after data; use a single paused GSAP core timeline and derive every frame from its playhead. An aggregate mark splits into detailed marks, or detailed marks merge into one aggregate.
```

### English · Codex
```text
Apply Aggregate Split and Merge in the chart update section of <file>. Use the card parameter defaults, a 1s transition, and power2.inOut easing; implement the snippet geometry helpers from fixed input data. Capture at 0.25s, 0.5s, and 1s to verify item correspondence, the intermediate geometry, and final values. Seek backward and forward to confirm identical output at identical times.
```

예시 / Example: 집계 분할과 합치기를 `.hero`에 적용해. / Apply Aggregate Split and Merge to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 1초 전환을 넣고 seek마다 입력 상태에서 좌표와 경로를 다시 계산한다. 부모 도형 내부에서 자식 시작점을 정하고 목표 좌표와 크기로 보간한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다.
- ReelForge: 씬 워커 브리프에 지속 시간 1s; 면적 합계 100%; 자식 간격 8px; 이징 power2.inOut와 항목 ID, 축 범위, 전후 데이터를 싣는다. 지역 합계 원이 면적 합계를 보존한 세 도시 원으로 갈라진다.
- Scrolline Deck: 진행률 0~1을 1초 타임라인에 매핑한다. scrub은 누적 상태 없이 같은 진행률에 같은 좌표를 내며 스프링 대신 power2.out 또는 선형 보간을 쓴다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 단계 전환 · Staged Chart Transition](../staged-chart-transition/)

출처 / Sources: [apache/echarts](https://echarts.apache.org/handbook/en/basics/release-note/5-2-0/) (Apache-2.0) · [Heer & Robertson 2007](https://sites.stat.columbia.edu/gelman/communication/HeerRobertson2007.pdf) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
