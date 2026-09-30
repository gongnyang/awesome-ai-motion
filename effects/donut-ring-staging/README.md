# Nº 265 도넛 다중 링 단계화 · Donut Ring Staging

> 클립 렌더 예정 / Clip rendering planned.

**도넛 조각들이 여러 동심원으로 나뉜 뒤 각도와 크기를 바꾸고 한 링으로 모인다.**

Donut slices separate into concentric rings, change position and share, then reunite.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 고급 | 설명, 비교 | 설명 영상, 데이터 스토리, 스크롤덱 | svg |

다른 이름 / Also known as: Donut multi-ring staging

## 선택 기준 / Selection

조각의 위치 변화와 비율 변화를 분리해 추적한다. / Separates positional changes from proportional changes for easier tracking.

- 조각의 위치 변화와 비율 변화를 분리해 추적한다. 이때 항목 ID와 척도를 유지한다. / Use when you need to explain donut ring staging while preserving item identities and chart scales.
- 조각을 두 링으로 나눈 뒤 순서와 비율을 바꾸고 다시 합친다. / Use when the audience needs to follow the intermediate states rather than only compare final snapshots.

좋은 예 / Good: 조각을 두 링으로 나눈 뒤 순서와 비율을 바꾸고 다시 합친다.
나쁜 예 / Bad: 반지름과 각도를 한꺼번에 바꿔 조각 추적이 끊긴다.
주의 / Avoid: 반지름과 각도를 한꺼번에 바꿔 조각 추적이 끊긴다. · 재생 중 임의 난수와 벽시계로 데이터나 좌표를 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 1.4s | 1.05~2.1s | 시점 또는 전환 한 회 기준 |
| 단계 시간 | 350ms | 250~500ms | 분리, 회전, 비율, 결합 순서 |
| 링 간격 | 18px | 12~32px | 조각 사이 추적 공간 |
| 이징 | power2.inOut | power2.inOut | none은 선형 진행 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
const s = {stage:0};
[1,2,3,4].forEach((stage,i)=>{
  tl.to(s,{stage,duration:0.35,ease:'power2.inOut',onUpdate:()=>renderRingStages(s.stage,18)},i*0.35);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 도넛 다중 링 단계화을 적용해줘. 조각별 반지름, 중심각, 호 길이를 단계적으로 보간한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 1.4s; 단계 시간 350ms; 링 간격 18px; 이징 power2.inOut로 구현하고 GSAP 코어 paused 타임라인 하나로 seek를 지원해. 조각을 두 링으로 나눈 뒤 순서와 비율을 바꾸고 다시 합친다.
```

### 한국어 · Codex
```text
<파일>의 데이터 차트 갱신 구간에 도넛 다중 링 단계화을 적용해. 조각별 반지름, 중심각, 호 길이를 단계적으로 보간한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 1.4s; 단계 시간 350ms; 링 간격 18px; 이징 power2.inOut를 사용해. 0.35초, 0.7초, 1.4초 시점을 캡처해 도넛 조각들이 여러 동심원으로 나뉜 뒤 각도와 크기를 바꾸고 한 링으로 모인다. 항목 대응과 최종 수치를 확인하고 역방향 seek에서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Donut Ring Staging to <target>. Use a 1.4s transition with power2.inOut easing and preserve item IDs, colors, and chart scales. Implement the geometry renderer used in the snippet with explicit before and after data; use a single paused GSAP core timeline and derive every frame from its playhead. Donut slices separate into concentric rings, change position and share, then reunite.
```

### English · Codex
```text
Apply Donut Ring Staging in the chart update section of <file>. Use the card parameter defaults, a 1.4s transition, and power2.inOut easing; implement the snippet geometry helpers from fixed input data. Capture at 0.35s, 0.7s, and 1.4s to verify item correspondence, the intermediate geometry, and final values. Seek backward and forward to confirm identical output at identical times.
```

예시 / Example: 도넛 다중 링 단계화를 `.hero`에 적용해. / Apply Donut Ring Staging to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 1.4초 전환을 넣고 seek마다 입력 상태에서 좌표와 경로를 다시 계산한다. 조각별 반지름, 중심각, 호 길이를 단계적으로 보간한다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다.
- ReelForge: 씬 워커 브리프에 지속 시간 1.4s; 단계 시간 350ms; 링 간격 18px; 이징 power2.inOut와 항목 ID, 축 범위, 전후 데이터를 싣는다. 조각을 두 링으로 나눈 뒤 순서와 비율을 바꾸고 다시 합친다.
- Scrolline Deck: 진행률 0~1을 1.4초 타임라인에 매핑한다. scrub은 누적 상태 없이 같은 진행률에 같은 좌표를 내며 스프링 대신 power2.out 또는 선형 보간을 쓴다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 단계 전환 · Staged Chart Transition](../staged-chart-transition/)

출처 / Sources: [Heer & Robertson 2007](https://sites.stat.columbia.edu/gelman/communication/HeerRobertson2007.pdf) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
