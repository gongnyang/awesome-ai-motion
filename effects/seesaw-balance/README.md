# Nº 393 시소 균형 · Seesaw Balance

> 클립 렌더 예정 / Clip rendering planned.

**막대 양쪽이 반대 높이로 움직이고 접시는 수평을 유지한다.**

A beam tilts around a shared fulcrum while its pans counter-rotate.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 제품 시연, 스크롤덱 | gsap |

다른 이름 / Also known as: seesaw-fulcrum-tilt

## 선택 기준 / Selection

두 선택지의 무게와 트레이드오프를 비교한다. / Expresses balance and tradeoffs.

- 양쪽 선택지의 무게를 비교하며 접시 라벨을 수평으로 유지한다. / Compare the weight of two choices.
- 두 선택지의 무게와 트레이드오프를 비교한다. 기준값과 대상을 함께 표시할 때. / Keep the encoded values, labels, and visual state synchronized.

좋은 예 / Good: 양쪽 선택지의 무게를 비교하며 접시 라벨을 수평으로 유지한다.
나쁜 예 / Bad: 접시도 막대와 함께 기울여 설명 텍스트를 읽기 어렵게 만든다.
주의 / Avoid: 접시 역회전은 막대 회전값과 정확히 반대로 둔다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 2000ms | 1500~3000ms | 한 왕복 기준 |
| 기울기 | 8deg | 4~12deg | 가독성 유지 |
| 받침점 | 50% 50% | 45~55% 50% | 공유 회전축 |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true});
tl.to('.beam',{rotation:8,duration:1,ease:'sine.inOut',transformOrigin:'50% 50%'},0);
tl.to('.pan',{rotation:-8,duration:1,ease:'sine.inOut'},0);
tl.to('.beam',{rotation:-8,duration:1,ease:'sine.inOut'},1);
tl.to('.pan',{rotation:8,duration:1,ease:'sine.inOut'},1);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 시소 균형을 적용해. HTML 공유 받침점으로 막대를 회전하고 접시를 역회전한다. 주기 2000ms; 기울기 8deg; 받침점 50% 50%을 적용한다. GSAP 코어의 paused 타임라인 하나로 seek 가능하게 만들고 임의 난수와 타이머를 쓰지 마.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 시소 균형을 적용해. HTML 공유 받침점으로 막대를 회전하고 접시를 역회전한다. 주기 2000ms; 기울기 8deg; 받침점 50% 50%을 적용한다. 0초, 1초, 2초를 캡처해 시작 상태, 중간 진행, 최종 상태를 확인하고 같은 시각으로 다시 seek했을 때 좌표와 라벨이 같은지 검증해.
```

### English · Claude Code
```text
Implement Seesaw Balance on <target> in <file>. Use a 2000ms cycle and an 8 degree tilt around a shared center fulcrum at 50% 50%. Counter-rotate each pan by the opposite angle to keep labels level. Use one paused GSAP core timeline, support seeking, and avoid random values and timers.
```

### English · Codex
```text
Implement Seesaw Balance on <target> in <file>. Use a 2000ms cycle and an 8 degree tilt around a shared center fulcrum at 50% 50%. Counter-rotate each pan by the opposite angle to keep labels level. Use one paused GSAP core timeline, support seeking, and avoid random values and timers. Capture at 0s, 1s, and 2s to check the initial state, intermediate motion, and final state. Seek to each time again and verify identical geometry and labels.
```

예시 / Example: 시소 균형를 `.hero`에 적용해. / Apply Seesaw Balance to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 시소 균형 상태를 넣고 seek 시 2초의 좌표와 색을 다시 계산한다.
- ReelForge: 씬 워커 브리프에 주기 2000ms; 기울기 8deg; 받침점 50% 50%을 싣고 양쪽 선택지의 무게를 비교하며 접시 라벨을 수평으로 유지한다.
- Scrolline Deck: 진행률 0~1을 2초 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역방향에서도 라벨과 도형을 함께 갱신한다.

조합 / Pair with: [비교 분할 · Split Compare](../split-compare/) · [주석 등장 · Annotation Callout](../annotation-callout/)

출처 / Sources: gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/01-anchor-transform.md#seesaw-fulcrum-tilt`) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
