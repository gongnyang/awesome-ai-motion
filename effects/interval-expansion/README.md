# Nº 273 구간 막대 확장 · Interval Expansion

> 클립 렌더 예정 / Clip rendering planned.

**점이나 짧은 막대가 양 끝으로 벌어져 최솟값과 최댓값의 구간이 된다.**

A point expands in both directions to reveal the endpoints of an interval.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 비교, 데이터 증명 | 설명 영상, 데이터 스토리, 발표 | svg |

다른 이름 / Also known as: Floating interval expansion

## 선택 기준 / Selection

단일 추정값과 값의 범위를 구분한다. / Distinguishes a single estimate from its range of possible values.

- 추정값 주변의 신뢰구간을 공개할 때 / Reveal a confidence interval around an estimate.
- 중앙 표식을 유지하며 최솟값과 최댓값을 보여줄 때 / Show minimum and maximum values while preserving the central marker.

좋은 예 / Good: 중앙 700px에서 시작해 왼쪽 520px와 오른쪽 980px로 0.65초 동안 벌어진다.
나쁜 예 / Bad: 중앙값을 구간 중점으로 강제로 옮겨 원래 추정값을 바꾼다.
주의 / Avoid: 범위와 신뢰구간의 의미를 라벨로 구분한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 확장 시간 | 650ms | 450~950ms | 양 끝을 동시에 움직인다. |
| 왼쪽 거리 | 180px | 60~300px | 자료 척도로 산출한다. |
| 오른쪽 거리 | 280px | 60~400px | 대칭을 강제하지 않는다. |
| 끝 표식 높이 | 16px | 12~24px | 양 끝을 읽을 수 있게 한다. |
| 이징 | power2.inOut | none \| power2.out \| power2.inOut | 끝점을 넘지 않는 이징을 쓴다. |

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true});
tl.fromTo('.interval',{attr:{x1:700,x2:700}},{attr:{x1:520,x2:980},duration:0.65,ease:'power2.inOut'},0);
tl.fromTo('.cap-left',{attr:{x1:700,x2:700}},{attr:{x1:520,x2:520},duration:0.65,ease:'power2.inOut'},0);
tl.fromTo('.cap-right',{attr:{x1:700,x2:700}},{attr:{x1:980,x2:980},duration:0.65,ease:'power2.inOut'},0);
gsap.set('.estimate',{attr:{cx:700}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 구간 막대 확장를 구현해. 점이나 짧은 막대가 양 끝으로 벌어져 최솟값과 최댓값의 구간이 된다. 확장 시간 650ms, 왼쪽 거리 180px, 오른쪽 거리 280px, 끝 표식 높이 16px, 이징 power2.inOut를 적용하고 GSAP 코어의 paused 타임라인 하나로 seek 가능하게 작성해. 범위와 신뢰구간의 의미를 라벨로 구분한다.
```

### 한국어 · Codex
```text
<파일>의 <대상> 장면에 구간 막대 확장를 적용해. 확장 시간 650ms, 왼쪽 거리 180px, 오른쪽 거리 280px, 끝 표식 높이 16px, 이징 power2.inOut를 사용하고 다음 동작을 구현해: SVG 선의 양 끝 좌표와 중앙 표식을 독립적으로 보간한다. 플러그인과 Math.random 없이 작성하고 0.16초·0.39초·0.65초를 캡처해 초기 상태, 중간 변화, 최종 상태가 연속적이며 다음 예시와 맞는지 확인해: 중앙 700px에서 시작해 왼쪽 520px와 오른쪽 980px로 0.65초 동안 벌어진다.
```

### English · Claude Code
```text
Implement Interval Expansion for <target> in <file>. A point expands in both directions to reveal the endpoints of an interval. Use expansion duration: 650ms; leftward distance: 180px; rightward distance: 280px; end-cap height: 16px; easing: power2.inOut in a single paused GSAP core timeline that supports seeking. Label whether the range is a minimum-to-maximum range or a confidence interval; preserve the estimate position.
```

### English · Codex
```text
Apply Interval Expansion to the <target> scene in <file> using expansion duration: 650ms; leftward distance: 180px; rightward distance: 280px; end-cap height: 16px; easing: power2.inOut. A point expands in both directions to reveal the endpoints of an interval. Use prepared data or geometry with GSAP core, no plugins, and no Math.random; capture at 0.16, 0.39, 0.65 seconds to verify continuous intermediate geometry, correct endpoints, and identical output after repeated seeks. Label whether the range is a minimum-to-maximum range or a confidence interval; preserve the estimate position.
```

예시 / Example: 구간 막대 확장를 `.hero`에 적용해. / Apply Interval Expansion to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인 하나에 구간 막대 확장 상태를 넣고 seek(t)로 0.65초 구간을 재현한다. 현재 시간에서 도형을 계산해 프레임 누적을 피한다.
- ReelForge: 씬 워커 브리프에 확장 시간 650ms, 왼쪽 거리 180px, 오른쪽 거리 280px, 끝 표식 높이 16px, 이징 power2.inOut를 싣고 입력 자료와 초기 도형 좌표를 고정한다. 중앙 700px에서 시작해 왼쪽 520px와 오른쪽 980px로 0.65초 동안 벌어진다.
- Scrolline Deck: 진행률 0~1을 0.65초 구간에 매핑해 같은 타임라인을 scrub한다. 시간량은 none, 시각 전환은 power2.out을 쓰고 스프링 대신 끝점을 넘지 않는 ease-out을 쓴다.

조합 / Pair with: [불확실성 띠 공개 · Confidence Band Reveal](../confidence-band-reveal/) · [주석 등장 · Annotation Callout](../annotation-callout/)

출처 / Sources: [chartjs/Chart.js](https://www.chartjs.org/docs/latest/configuration/animations.html) (MIT) · [apache/echarts](https://echarts.apache.org/handbook/en/how-to/animation/transition/) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
