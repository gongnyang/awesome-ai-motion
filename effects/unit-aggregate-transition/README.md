# Nº 304 개별 단위와 집계 면 전환 · Unit-to-aggregate Transition

> 클립 렌더 예정 / Clip rendering planned.

**개별 점들이 데이터 구간 안에 모여 연속적인 막대나 면의 윤곽을 이룬다.**

Individual units gather into bins and form the outline of an aggregate bar or area.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 설명, 비교 | 설명 영상, 데이터 스토리, 스크롤덱 | svg |

다른 이름 / Also known as: Individual-to-aggregate continuum

## 선택 기준 / Selection

개별 사례가 전체 분포와 추세를 만든다는 것을 보여준다. / Connects individual cases to the distribution they collectively create.

- 개별 사례가 전체 분포와 추세를 만든다는 것을 보여준다. 이때 항목 ID와 척도를 유지한다. / Use when you need to explain unit-to-aggregate transition while preserving item identities and chart scales.
- 개별 응답 점을 구간별로 쌓고 같은 윤곽의 집계 막대를 공개한다. / Use when the audience needs to follow the intermediate states rather than only compare final snapshots.

좋은 예 / Good: 개별 응답 점을 구간별로 쌓고 같은 윤곽의 집계 막대를 공개한다.
나쁜 예 / Bad: 점을 제거하며 집계 값까지 바꿔 사례와 합계의 연결을 잃는다.
주의 / Avoid: 점을 제거하며 집계 값까지 바꿔 사례와 합계의 연결을 잃는다. · 재생 중 임의 난수와 벽시계로 데이터나 좌표를 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 1.3s | 0.975~1.95s | 시점 또는 전환 한 회 기준 |
| 점 이동 | 900ms | 600~1200ms | 단위 면적 고정 |
| 집계 면 공개 | 400ms | 250~600ms | 점 이동 뒤 시작 |
| 이징 | power2.inOut | power2.inOut | none은 선형 진행 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
units.forEach((el,i)=>{
  tl.to(el,{attr:{cx:slots[i].x,cy:slots[i].y},duration:0.9,ease:'power2.inOut'},0);
});
tl.fromTo('.aggregate',{opacity:0},{opacity:1,duration:0.4,ease:'none'},0.9);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 개별 단위와 집계 면 전환을 적용해줘. 구간별 단위 좌표로 이동한 뒤 집계 경계를 공개하고 점 사이 빈틈을 줄인다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 1.3s; 점 이동 900ms; 집계 면 공개 400ms; 이징 power2.inOut로 구현하고 GSAP 코어 paused 타임라인 하나로 seek를 지원해. 개별 응답 점을 구간별로 쌓고 같은 윤곽의 집계 막대를 공개한다.
```

### 한국어 · Codex
```text
<파일>의 데이터 차트 갱신 구간에 개별 단위와 집계 면 전환을 적용해. 구간별 단위 좌표로 이동한 뒤 집계 경계를 공개하고 점 사이 빈틈을 줄인다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다. 지속 시간 1.3s; 점 이동 900ms; 집계 면 공개 400ms; 이징 power2.inOut를 사용해. 0.325초, 0.65초, 1.3초 시점을 캡처해 개별 점들이 데이터 구간 안에 모여 연속적인 막대나 면의 윤곽을 이룬다. 항목 대응과 최종 수치를 확인하고 역방향 seek에서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Unit-to-aggregate Transition to <target>. Use a 1.3s transition with power2.inOut easing and preserve item IDs, colors, and chart scales. Implement the geometry renderer used in the snippet with explicit before and after data; use a single paused GSAP core timeline and derive every frame from its playhead. Individual units gather into bins and form the outline of an aggregate bar or area.
```

### English · Codex
```text
Apply Unit-to-aggregate Transition in the chart update section of <file>. Use the card parameter defaults, a 1.3s transition, and power2.inOut easing; implement the snippet geometry helpers from fixed input data. Capture at 0.325s, 0.65s, and 1.3s to verify item correspondence, the intermediate geometry, and final values. Seek backward and forward to confirm identical output at identical times.
```

예시 / Example: 개별 단위와 집계 면 전환를 `.hero`에 적용해. / Apply Unit-to-aggregate Transition to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 1.3초 전환을 넣고 seek마다 입력 상태에서 좌표와 경로를 다시 계산한다. 구간별 단위 좌표로 이동한 뒤 집계 경계를 공개하고 점 사이 빈틈을 줄인다. 입력 좌표와 ID 대응을 먼저 준비하고 snippet의 렌더 함수는 이 규칙으로 구현한다.
- ReelForge: 씬 워커 브리프에 지속 시간 1.3s; 점 이동 900ms; 집계 면 공개 400ms; 이징 power2.inOut와 항목 ID, 축 범위, 전후 데이터를 싣는다. 개별 응답 점을 구간별로 쌓고 같은 윤곽의 집계 막대를 공개한다.
- Scrolline Deck: 진행률 0~1을 1.3초 타임라인에 매핑한다. scrub은 누적 상태 없이 같은 진행률에 같은 좌표를 내며 스프링 대신 power2.out 또는 선형 보간을 쓴다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 단계 전환 · Staged Chart Transition](../staged-chart-transition/)

출처 / Sources: [the-pudding/pop-love-songs](https://github.com/the-pudding/pop-love-songs) (MIT) · [Heer & Robertson 2007](https://sites.stat.columbia.edu/gelman/communication/HeerRobertson2007.pdf) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
