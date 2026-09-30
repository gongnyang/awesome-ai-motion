# Nº 276 지도 사건 누적 · Map Event Accumulation

> 클립 렌더 예정 / Clip rendering planned.

**시간 순서에 따라 지도 위의 새로운 장소 표식이 늘어나며 이전 표식은 남는다.**

New map markers appear in time order while earlier markers remain visible.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 데이터 증명, 비교 | 데이터 스토리, 발표, 웹 UI | svg |

다른 이름 / Also known as: Geographic event accumulation, 지도 사건 누적 출현

## 선택 기준 / Selection

발생 지역과 확산 순서를 동시에 이해한다. / Connects geographic spread with the order of events.

- 점포 개점의 지역 확산 순서를 보여줄 때 / Use when explaining map event accumulation in a presentation or interactive view.
- 전후 항목의 대응을 움직임으로 설명할 때 / Use when viewers need to track corresponding items between states.

좋은 예 / Good: 점포 확산 장면에서 시간 순서에 따라 지도 위의 새로운 장소 표식이 늘어나며 이전 표식은 남는다. 6s 구간으로 항목 대응을 유지한다.
나쁜 예 / Bad: 이전 표식을 지워 누적과 순간 발생을 혼동시킨다
주의 / Avoid: 이전 표식을 지워 누적과 순간 발생을 혼동시킨다 같은 연출을 피한다. · 모션만으로 수치를 읽게 하지 않고 라벨과 정적 요약을 함께 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 구간 | 6s | 4.2~9s | 후보의 주요 이동 또는 유지 시간이다 |
| 등장 시간 | 150ms | 100~250ms | 누적 표식은 이후에도 유지한다 |
| 표식 반지름 | 3px | 2~6px | 1920x1080 화면 기준 기본값이다 |
| 이징 | none | none 또는 power2.inOut | 시간 재생은 선형, 배치 이동은 완만하게 시작하고 멈춘다 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused: true});
events.forEach(e => {
  tl.fromTo(e.el, {opacity: 0, attr: {r: 0}},
    {opacity: 1, attr: {r: 3}, duration: .15, ease: 'none'}, e.time01 * 5.85);
});
tl.to({}, {duration: 6}, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 지도 사건 누적 효과를 적용해. 사건 시각을 재생 시간과 비교해 해당 위치의 표식을 순차 공개한다. 기본 구간은 6초, 등장 시간은 150ms, 표식 반지름은 3px, 이징은 none로 설정하고 값 축과 색 범위를 고정한다. GSAP 코어의 paused 타임라인 하나로 구성하고 seek 시 같은 결과를 그려줘.
```

### 한국어 · Codex
```text
<파일>의 지도 사건 누적 장면에 적용해. 사건 시각을 재생 시간과 비교해 해당 위치의 표식을 순차 공개한다. 6초 구간과 none, 등장 시간 150ms, 표식 반지름 3px를 적용하고 초기 상태를 명시해. 0초, 3초, 6초를 캡처해 항목 대응과 중간 상태를 확인하고 역방향 seek 후 같은 시점의 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Map Event Accumulation to <target>. New map markers appear in time order while earlier markers remain visible. Use a 6-second primary interval with none easing, and preserve item IDs and reference coordinates. Set the entry duration to 150ms and the marker radius to 3px. Use one paused GSAP core timeline with deterministic seeking.
```

### English · Codex
```text
Implement Map Event Accumulation in the relevant scene in <file>. New map markers appear in time order while earlier markers remain visible. Use a 6-second primary interval with none easing and explicit initial states. Set the entry duration to 150ms and the marker radius to 3px. Capture at 0, 3, and 6 seconds to verify item correspondence and intermediate states, then seek backward and confirm identical output at the same time.
```

예시 / Example: 지도 사건 누적를 `.hero`에 적용해. / Apply Map Event Accumulation to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 장면 시간으로 seek한다. 좌표와 표본을 미리 계산하고 onUpdate에서 전체 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 6초 구간, 등장 시간 150ms, 표식 반지름 3px와 항목 ID 대응표를 싣는다.
- Scrolline Deck: 진행률 0~1을 타임라인의 전체 길이에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 좌표 기준을 고정한다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 스크럽 · Chart Scrub](../chart-scrub/)

출처 / Sources: [Observable](https://old.observablehq.com/blog/effective-animation) (unknown) · [vega/vega](https://vega.github.io/vega/docs/event-streams/) (BSD-3-Clause)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
