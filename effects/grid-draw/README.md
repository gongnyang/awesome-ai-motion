# Nº 409 격자 그리기 · Grid Draw

> 클립 렌더 예정 / Clip rendering planned.

**가로·세로 선이 차례로 그려져 화면에 격자가 생긴다.**

Horizontal and vertical lines draw in sequence to build a grid.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 웹 UI | svg |

다른 이름 / Also known as: Grid Build, 격자 생성, Grid effect

## 선택 기준 / Selection

좌표와 모듈 구성의 기준을 알려준다. / Establishes a coordinate system or modular layout reference.

- 데이터를 표시하기 전에 좌표 기준을 소개할 때 / Introduce coordinates before plotting data.
- 디자인 시스템의 모듈 간격을 보여줄 때 / Reveal the module spacing of a design system.

좋은 예 / Good: 48px 간격의 격자선을 0.03초씩 늦춰 각각 0.8초 동안 그린다.
나쁜 예 / Bad: 배경 격자를 본문보다 진하게 그려 정보보다 선이 먼저 읽힌다.
주의 / Avoid: 격자 대비가 데이터 표시보다 높아지지 않게 한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 선 그리기 | 800ms | 500~1200ms | 각 선의 길이를 공개한다. |
| 셀 간격 | 48px | 32~96px | 가로와 세로 간격을 맞춘다. |
| 선 지연 | 30ms | 15~60ms | 선별 시작 시각의 차이다. |
| 선 두께 | 1px | 1~2px | 기준선으로 읽히게 둔다. |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 끝점을 넘지 않는 이징을 쓴다. |

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true});
document.querySelectorAll('.grid-line').forEach((line,i)=>{
  const length=line.getTotalLength();
  tl.fromTo(line,{strokeDasharray:length,strokeDashoffset:length},{strokeDashoffset:0,duration:0.8,ease:'power2.out'},i*0.03);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 격자 그리기를 구현해. 가로·세로 선이 차례로 그려져 화면에 격자가 생긴다. 선 그리기 800ms, 셀 간격 48px, 선 지연 30ms, 선 두께 1px, 이징 power2.out를 적용하고 GSAP 코어의 paused 타임라인 하나로 seek 가능하게 작성해. 격자 대비가 데이터 표시보다 높아지지 않게 한다.
```

### 한국어 · Codex
```text
<파일>의 <대상> 장면에 격자 그리기를 적용해. 선 그리기 800ms, 셀 간격 48px, 선 지연 30ms, 선 두께 1px, 이징 power2.out를 사용하고 다음 동작을 구현해: SVG 격자 선의 길이와 알파를 순차 보간한다. 플러그인과 Math.random 없이 작성하고 0.5초·1.2초·2초를 캡처해 초기 상태, 중간 변화, 최종 상태가 연속적이며 다음 예시와 맞는지 확인해: 48px 간격의 격자선을 0.03초씩 늦춰 각각 0.8초 동안 그린다.
```

### English · Claude Code
```text
Implement Grid Draw for <target> in <file>. Horizontal and vertical lines draw in sequence to build a grid. Use line duration: 800ms; cell spacing: 48px; line stagger: 30ms; stroke width: 1px; easing: power2.out in a single paused GSAP core timeline that supports seeking. Keep grid contrast lower than the plotted data.
```

### English · Codex
```text
Apply Grid Draw to the <target> scene in <file> using line duration: 800ms; cell spacing: 48px; line stagger: 30ms; stroke width: 1px; easing: power2.out. Horizontal and vertical lines draw in sequence to build a grid. Use prepared data or geometry with GSAP core, no plugins, and no Math.random; capture at 0.5, 1.2, 2 seconds to verify continuous intermediate geometry, correct endpoints, and identical output after repeated seeks. Keep grid contrast lower than the plotted data.
```

예시 / Example: 격자 그리기를 `.hero`에 적용해. / Apply Grid Draw to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인 하나에 격자 그리기 상태를 넣고 seek(t)로 2초 구간을 재현한다. 현재 시간에서 도형을 계산해 프레임 누적을 피한다.
- ReelForge: 씬 워커 브리프에 선 그리기 800ms, 셀 간격 48px, 선 지연 30ms, 선 두께 1px, 이징 power2.out를 싣고 입력 자료와 초기 도형 좌표를 고정한다. 48px 간격의 격자선을 0.03초씩 늦춰 각각 0.8초 동안 그린다.
- Scrolline Deck: 진행률 0~1을 2초 구간에 매핑해 같은 타임라인을 scrub한다. 시간량은 none, 시각 전환은 power2.out을 쓰고 스프링 대신 끝점을 넘지 않는 ease-out을 쓴다.

조합 / Pair with: [노드 연결망 구축 · Node-link Build](../graph-build/) · [단위 격자 · Unit Grid Fill](../unit-grid/)

출처 / Sources: [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/generate-effects.html) (unknown) · [airbnb/lottie-web](https://github.com/airbnb/lottie-web) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
