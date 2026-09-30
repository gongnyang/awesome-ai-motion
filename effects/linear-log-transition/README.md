# Nº 275 선형과 로그 좌표 전환 · Linear-to-log Transition

> 클립 렌더 예정 / Clip rendering planned.

**점과 눈금이 선형 위치에서 로그 위치로 비선형적으로 이동한다.**

Marks and ticks move from linear coordinates to logarithmic coordinates.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 데이터 증명, 비교 | 데이터 스토리, 발표, 웹 UI | svg |

다른 이름 / Also known as: Linear-to-log substrate transition

## 선택 기준 / Selection

축 체계가 바뀌면 분포가 어떻게 달라지는지 본다. / Shows how a scale choice changes the visible distribution.

- 규모 차이가 큰 양수 분포의 축 체계를 설명할 때 / Use when explaining linear-to-log transition in a presentation or interactive view.
- 전후 항목의 대응을 움직임으로 설명할 때 / Use when viewers need to track corresponding items between states.

좋은 예 / Good: 선형에서 로그 장면에서 점과 눈금이 선형 위치에서 로그 위치로 비선형적으로 이동한다. 1.1s 구간으로 항목 대응을 유지한다.
나쁜 예 / Bad: 0과 음수를 설명 없이 로그 위치로 보낸다
주의 / Avoid: 0과 음수를 설명 없이 로그 위치로 보낸다 같은 연출을 피한다. · 모션만으로 수치를 읽게 하지 않고 라벨과 정적 요약을 함께 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 구간 | 1.1s | 0.77~1.65s | 후보의 주요 이동 또는 유지 시간이다 |
| 로그 밑 | 10 | 2~10 | 모든 입력값은 양수여야 한다 |
| 축 제목 전환 | 300ms | 200~400ms | 1920x1080 화면 기준 기본값이다 |
| 이징 | power2.inOut | none 또는 power2.inOut | 시간 재생은 선형, 배치 이동은 완만하게 시작하고 멈춘다 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused: true});
points.forEach(p => {
  tl.fromTo(p.el, {attr: {cy: p.linearY}},
    {attr: {cy: p.logY}, duration: 1.1, ease: 'power2.inOut'}, 0);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 선형과 로그 좌표 전환 효과를 적용해. 동일 값의 선형 화면 좌표와 로그 화면 좌표를 보간한다. 기본 구간은 1.1초, 로그 밑은 10, 축 제목 전환은 300ms, 이징은 power2.inOut로 설정하고 값 축과 색 범위를 고정한다. GSAP 코어의 paused 타임라인 하나로 구성하고 seek 시 같은 결과를 그려줘.
```

### 한국어 · Codex
```text
<파일>의 선형과 로그 좌표 전환 장면에 적용해. 동일 값의 선형 화면 좌표와 로그 화면 좌표를 보간한다. 1.1초 구간과 power2.inOut, 로그 밑 10, 축 제목 전환 300ms를 적용하고 초기 상태를 명시해. 0초, 0.55초, 1.1초를 캡처해 항목 대응과 중간 상태를 확인하고 역방향 seek 후 같은 시점의 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Linear-to-log Transition to <target>. Marks and ticks move from linear coordinates to logarithmic coordinates. Use a 1.1-second primary interval with power2.inOut easing, and preserve item IDs and reference coordinates. Set the logarithm base to 10 and the axis title transition to 300ms. Use one paused GSAP core timeline with deterministic seeking.
```

### English · Codex
```text
Implement Linear-to-log Transition in the relevant scene in <file>. Marks and ticks move from linear coordinates to logarithmic coordinates. Use a 1.1-second primary interval with power2.inOut easing and explicit initial states. Set the logarithm base to 10 and the axis title transition to 300ms. Capture at 0, 0.55, and 1.1 seconds to verify item correspondence and intermediate states, then seek backward and confirm identical output at the same time.
```

예시 / Example: 선형과 로그 좌표 전환를 `.hero`에 적용해. / Apply Linear-to-log Transition to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 장면 시간으로 seek한다. 좌표와 표본을 미리 계산하고 onUpdate에서 전체 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 1.1초 구간, 로그 밑 10, 축 제목 전환 300ms와 항목 ID 대응표를 싣는다.
- Scrolline Deck: 진행률 0~1을 타임라인의 전체 길이에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 좌표 기준을 고정한다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 스크럽 · Chart Scrub](../chart-scrub/)

출처 / Sources: [Heer & Robertson 2007](https://sites.stat.columbia.edu/gelman/communication/HeerRobertson2007.pdf) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
