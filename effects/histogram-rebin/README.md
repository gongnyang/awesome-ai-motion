# Nº 271 히스토그램 구간 재분배 · Histogram Rebinning

> 클립 렌더 예정 / Clip rendering planned.

**구간 경계가 바뀌면 막대 폭과 높이가 변하고 포함된 점들이 새 구간으로 이동한다.**

Bars and observations redistribute when histogram bin boundaries change.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 고급 | 설명, 비교 | 설명 영상, 데이터 스토리, 스크롤덱 | svg |

다른 이름 / Also known as: Histogram bin redistribution

## 선택 기준 / Selection

구간 선택에 따라 분포 모양이 달라짐을 이해한다. / Explains how bin choice affects the apparent shape of a distribution.

- 구간 선택에 따라 분포 모양이 달라짐을 이해한다. 이때 항목 ID와 척도를 유지한다. / Use when you need to explain histogram rebinning while preserving item identities and chart scales.
- 동일 표본을 10구간에서 20구간으로 재집계하고 총수를 표시한다. / Use when the audience needs to follow the intermediate states rather than only compare final snapshots.

좋은 예 / Good: 동일 표본을 10구간에서 20구간으로 재집계하고 총수를 표시한다.
나쁜 예 / Bad: 구간 폭이 다른데 빈도와 밀도 축을 혼용한다.
주의 / Avoid: 구간 폭이 다른데 빈도와 밀도 축을 혼용한다. · 재생 중 임의 난수와 벽시계로 데이터나 좌표를 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 1s | 0.75~1.5s | 시점 또는 전환 한 회 기준 |
| 시작 구간 수 | 10 | 5~20 | 값 축 범위 고정 |
| 목표 구간 수 | 20 | 10~40 | 표본 총수 보존 |
| 이징 | power2.inOut | power2.inOut | none은 선형 진행 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
const s = {p:0};
const mapping = rebinBySampleId(samples,10,20);
tl.to(s,{p:1,duration:1,ease:'power2.inOut',onUpdate:()=>{
  renderRebin(mapping,s.p);
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 히스토그램 구간 재분배을 적용해줘. 표본의 구간 대응을 다시 계산하고 경계와 막대 크기를 보간한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 1s; 시작 구간 수 10; 목표 구간 수 20; 이징 power2.inOut로 구현하고 GSAP 코어 paused 타임라인 하나로 seek를 지원해. 동일 표본을 10구간에서 20구간으로 재집계하고 총수를 표시한다.
```

### 한국어 · Codex
```text
<파일>의 데이터 차트 갱신 구간에 히스토그램 구간 재분배을 적용해. 표본의 구간 대응을 다시 계산하고 경계와 막대 크기를 보간한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 1s; 시작 구간 수 10; 목표 구간 수 20; 이징 power2.inOut를 사용해. 0.25초, 0.5초, 1초 시점을 캡처해 구간 경계가 바뀌면 막대 폭과 높이가 변하고 포함된 점들이 새 구간으로 이동한다. 항목 대응과 최종 수치를 확인하고 역방향 seek에서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Histogram Rebinning to <target>. Use a 1s transition with power2.inOut easing and preserve item IDs, colors, and chart scales. Implement the geometry renderer used in the snippet with explicit before and after data; use a single paused GSAP core timeline and derive every frame from its playhead. Bars and observations redistribute when histogram bin boundaries change.
```

### English · Codex
```text
Apply Histogram Rebinning in the chart update section of <file>. Use the card parameter defaults, a 1s transition, and power2.inOut easing; implement the snippet geometry helpers from fixed input data. Capture at 0.25s, 0.5s, and 1s to verify item correspondence, the intermediate geometry, and final values. Seek backward and forward to confirm identical output at identical times.
```

예시 / Example: 히스토그램 구간 재분배를 `.hero`에 적용해. / Apply Histogram Rebinning to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 1초 전환을 넣고 seek마다 입력 상태에서 좌표와 경로를 다시 계산한다. 표본의 구간 대응을 다시 계산하고 경계와 막대 크기를 보간한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다.
- ReelForge: 씬 워커 브리프에 지속 시간 1s; 시작 구간 수 10; 목표 구간 수 20; 이징 power2.inOut와 항목 ID, 축 범위, 전후 데이터를 싣는다. 동일 표본을 10구간에서 20구간으로 재집계하고 총수를 표시한다.
- Scrolline Deck: 진행률 0~1을 1초 타임라인에 매핑한다. scrub은 누적 상태 없이 같은 진행률에 같은 좌표를 내며 스프링 대신 power2.out 또는 선형 보간을 쓴다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 단계 전환 · Staged Chart Transition](../staged-chart-transition/)

출처 / Sources: [reuters-graphics/chart-module-countryRankingStrips](https://github.com/reuters-graphics/chart-module-countryRankingStrips) (unknown) · [Heer & Robertson 2007](https://sites.stat.columbia.edu/gelman/communication/HeerRobertson2007.pdf) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
