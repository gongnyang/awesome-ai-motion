# Nº 255 순위 곡선 전개 · Bump Chart Reveal

> 클립 렌더 예정 / Clip rendering planned.

**항목들의 순위 선이 시간에 따라 위아래로 교차하며 새로운 구간이 드러난다.**

Rank trajectories unfold over time, crossing as items exchange positions.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 설명, 비교 | 설명 영상, 데이터 스토리, 스크롤덱 | svg |

다른 이름 / Also known as: Bump rank timeline, 순위 곡선 타임라인, Bump chart animation

## 선택 기준 / Selection

절대 값보다 순위 교체와 지속 시간을 강조한다. / Emphasizes changes in rank and how long each rank persists.

- 절대 값보다 순위 교체와 지속 시간을 강조한다. 이때 항목 ID와 척도를 유지한다. / Use when you need to explain bump chart reveal while preserving item identities and chart scales.
- 분기별 상위 다섯 항목의 순위 교체가 교차 곡선으로 드러난다. / Use when the audience needs to follow the intermediate states rather than only compare final snapshots.

좋은 예 / Good: 분기별 상위 다섯 항목의 순위 교체가 교차 곡선으로 드러난다.
나쁜 예 / Bad: 순위 축에 매출 단위를 써 절대값 변화로 오해하게 한다.
주의 / Avoid: 순위 축에 매출 단위를 써 절대값 변화로 오해하게 한다. · 재생 중 임의 난수와 벽시계로 데이터나 좌표를 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 0.6s | 0.45~0.9s | 시점 또는 전환 한 회 기준 |
| 순위 간격 | 24px | 24~48px | 1위는 위쪽 |
| 선폭 | 3px | 2~5px | 항목별 색 고정 |
| 이징 | none | none | none은 선형 진행 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
const s = {segment:0};
tl.to(s,{segment:ranks[0].length-1,duration:(ranks[0].length-1)*0.6,ease:'none',onUpdate:()=>{
  drawRankPrefix(ranks,s.segment,24);
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 순위 곡선 전개을 적용해줘. 시간별 순위 좌표로 선을 만들고 현재 구간의 경로와 끝 라벨을 공개한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 0.6s; 순위 간격 24px; 선폭 3px; 이징 none로 구현하고 GSAP 코어 paused 타임라인 하나로 seek를 지원해. 분기별 상위 다섯 항목의 순위 교체가 교차 곡선으로 드러난다.
```

### 한국어 · Codex
```text
<파일>의 데이터 차트 갱신 구간에 순위 곡선 전개을 적용해. 시간별 순위 좌표로 선을 만들고 현재 구간의 경로와 끝 라벨을 공개한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 0.6s; 순위 간격 24px; 선폭 3px; 이징 none를 사용해. 0.15초, 0.3초, 0.6초 시점을 캡처해 항목들의 순위 선이 시간에 따라 위아래로 교차하며 새로운 구간이 드러난다. 항목 대응과 최종 수치를 확인하고 역방향 seek에서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Bump Chart Reveal to <target>. Use a 0.6s transition with none easing and preserve item IDs, colors, and chart scales. Implement the geometry renderer used in the snippet with explicit before and after data; use a single paused GSAP core timeline and derive every frame from its playhead. Rank trajectories unfold over time, crossing as items exchange positions.
```

### English · Codex
```text
Apply Bump Chart Reveal in the chart update section of <file>. Use the card parameter defaults, a 0.6s transition, and none easing; implement the snippet geometry helpers from fixed input data. Capture at 0.15s, 0.3s, and 0.6s to verify item correspondence, the intermediate geometry, and final values. Seek backward and forward to confirm identical output at identical times.
```

예시 / Example: 순위 곡선 전개를 `.hero`에 적용해. / Apply Bump Chart Reveal to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 0.6초 전환을 넣고 seek마다 입력 상태에서 좌표와 경로를 다시 계산한다. 시간별 순위 좌표로 선을 만들고 현재 구간의 경로와 끝 라벨을 공개한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다.
- ReelForge: 씬 워커 브리프에 지속 시간 0.6s; 순위 간격 24px; 선폭 3px; 이징 none와 항목 ID, 축 범위, 전후 데이터를 싣는다. 분기별 상위 다섯 항목의 순위 교체가 교차 곡선으로 드러난다.
- Scrolline Deck: 진행률 0~1을 0.6초 타임라인에 매핑한다. scrub은 누적 상태 없이 같은 진행률에 같은 좌표를 내며 스프링 대신 power2.out 또는 선형 보간을 쓴다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 단계 전환 · Staged Chart Transition](../staged-chart-transition/)

출처 / Sources: [Flourish](https://flourish.studio/blog/line-chart-race/) (unknown) · [the-pudding/pop-love-songs](https://github.com/the-pudding/pop-love-songs) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
