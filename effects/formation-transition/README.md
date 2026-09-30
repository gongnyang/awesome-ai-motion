# Nº 267 전술 배치 전환 · Formation Transition

> 클립 렌더 예정 / Clip rendering planned.

**선수 표식들이 경기장 위 이전 배치에서 새 배치로 움직이며 이동 궤적이 남는다.**

Player markers move between formations with trails showing their paths.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 데이터 증명, 비교 | 데이터 스토리, 발표, 웹 UI | svg |

다른 이름 / Also known as: Sports formation transition, 스포츠 전술 배치 전환

## 선택 기준 / Selection

팀의 이동과 공간 배치 변화의 원리를 이해한다. / Explains team movement and changes in spatial organization.

- 공격 배치에서 수비 배치로 바뀌는 원리를 설명할 때 / Use when explaining formation transition in a presentation or interactive view.
- 전후 항목의 대응을 움직임으로 설명할 때 / Use when viewers need to track corresponding items between states.

좋은 예 / Good: 축구 장면에서 선수 표식들이 경기장 위 이전 배치에서 새 배치로 움직이며 이동 궤적이 남는다. 1.5s 구간으로 항목 대응을 유지한다.
나쁜 예 / Bad: 선수 ID가 바뀌어 다른 선수의 이동으로 읽힌다
주의 / Avoid: 선수 ID가 바뀌어 다른 선수의 이동으로 읽힌다 같은 연출을 피한다. · 모션만으로 수치를 읽게 하지 않고 라벨과 정적 요약을 함께 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 구간 | 1.5s | 1.05~2.25s | 후보의 주요 이동 또는 유지 시간이다 |
| 표식 반지름 | 6px | 4~10px | 선수 ID와 색을 유지한다 |
| 궤적 불투명도 | 0.3 | 0.15~0.45 | 1920x1080 화면 기준 기본값이다 |
| 이징 | power2.inOut | none 또는 power2.inOut | 시간 재생은 선형, 배치 이동은 완만하게 시작하고 멈춘다 |

## 구현 / Implementation (GSAP)

```js
const state = {p: 0};
const tl = gsap.timeline({paused: true});
tl.to(state, {p: 1, duration: 1.5, ease: 'power2.inOut',
  onUpdate: () => drawFormationAndTrails(state.p, .3)}, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 전술 배치 전환 효과를 적용해. 선수 ID별 경기장 좌표를 보간하고 이전 위치에서 현재 위치로 경로를 그린다. 기본 구간은 1.5초, 표식 반지름은 6px, 궤적 불투명도은 0.3, 이징은 power2.inOut로 설정하고 값 축과 색 범위를 고정한다. GSAP 코어의 paused 타임라인 하나로 구성하고 seek 시 같은 결과를 그려줘.
```

### 한국어 · Codex
```text
<파일>의 전술 배치 전환 장면에 적용해. 선수 ID별 경기장 좌표를 보간하고 이전 위치에서 현재 위치로 경로를 그린다. 1.5초 구간과 power2.inOut, 표식 반지름 6px, 궤적 불투명도 0.3를 적용하고 초기 상태를 명시해. 0초, 0.75초, 1.5초를 캡처해 항목 대응과 중간 상태를 확인하고 역방향 seek 후 같은 시점의 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Formation Transition to <target>. Player markers move between formations with trails showing their paths. Use a 1.5-second primary interval with power2.inOut easing, and preserve item IDs and reference coordinates. Set the marker radius to 6px and the trail opacity to 0.3. Use one paused GSAP core timeline with deterministic seeking.
```

### English · Codex
```text
Implement Formation Transition in the relevant scene in <file>. Player markers move between formations with trails showing their paths. Use a 1.5-second primary interval with power2.inOut easing and explicit initial states. Set the marker radius to 6px and the trail opacity to 0.3. Capture at 0, 0.75, and 1.5 seconds to verify item correspondence and intermediate states, then seek backward and confirm identical output at the same time.
```

예시 / Example: 전술 배치 전환를 `.hero`에 적용해. / Apply Formation Transition to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 장면 시간으로 seek한다. 좌표와 표본을 미리 계산하고 onUpdate에서 전체 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 1.5초 구간, 표식 반지름 6px, 궤적 불투명도 0.3와 항목 ID 대응표를 싣는다.
- Scrolline Deck: 진행률 0~1을 타임라인의 전체 길이에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 좌표 기준을 고정한다.

조합 / Pair with: [객체 유지 갱신 · Object-constant Update](../object-constant-update/) · [주석 등장 · Annotation Callout](../annotation-callout/) · [차트 스크럽 · Chart Scrub](../chart-scrub/)

출처 / Sources: [Flourish](https://helpcenter.flourish.studio/hc/en-us/articles/9196682333199-Sports-template-player-animations) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
