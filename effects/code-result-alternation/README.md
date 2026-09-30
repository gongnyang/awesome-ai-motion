# Nº 373 코드와 실행 결과 교대 · Code-result Alternation

> 클립 렌더 예정 / Clip rendering planned.

**코드 일부가 강조된 뒤 결과 화면으로 전환되고 다시 해당 코드로 돌아온다.**

Highlighted code alternates with its execution result, then returns to the source.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 발표 | gsap |

다른 이름 / Also known as: Code and result alternation

## 선택 기준 / Selection

작성한 코드가 어떤 결과를 만드는지 연결한다. / Connects a code statement to the behavior it produces.

- 코드와 실행 결과 교대으로 원인과 결과를 설명할 때 / Explain causes and results using code-result alternation.
- 대응하는 요소를 같은 화면에서 순서대로 읽게 할 때 / Present corresponding elements in a readable sequence within the same view.

좋은 예 / Good: 코드 줄을 읽은 뒤 실행 결과를 보여 주고 같은 줄로 돌아온다.
나쁜 예 / Bad: 결과 화면으로 넘어갈 때 강조한 코드가 바뀐다.
주의 / Avoid: 결과 화면으로 넘어갈 때 강조한 코드가 바뀐다. · 설명 라벨과 대응 색을 동작 중에 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 0.3s | 0.21~0.42s | 첫 동작 또는 후보의 기본 단계 길이 |
| 코드 읽기 | 1600ms | 1200~2500ms | 강조 줄을 먼저 읽게 한다 |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 주파수 변화는 선형으로 두고 위치 변화는 완만하게 연결한다. |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
tl.set(code,{opacity:1}); tl.set(result,{opacity:0});
tl.to(line,{backgroundColor:"#335577",duration:0.3});
tl.to(code,{opacity:0,duration:0.3},1.6); tl.to(result,{opacity:1,duration:0.3},1.6);
tl.to(result,{opacity:0,duration:0.3},3.1); tl.to(code,{opacity:1,duration:0.3},3.1);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 코드와 실행 결과 교대을 적용해. 코드 일부가 강조된 뒤 결과 화면으로 전환되고 다시 해당 코드로 돌아온다. 코드와 자체 결과 그룹을 교차 표시하며 같은 의미 키를 강조한다. 기본 지속은 0.3s, 코드 읽기은 1600ms, 이징은 power2.out로 설정한다. 하나의 paused GSAP 타임라인으로 구성하고 seek할 때 좌표와 표시 상태를 다시 계산해.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 코드와 실행 결과 교대을 적용해. 기본 지속은 0.3s, 코드 읽기은 1600ms, 이징은 power2.out로 설정한다. 0초, 0.15초, 0.3초 시점을 캡처해 초기 상태, 중간 대응 관계, 첫 동작의 완료 상태를 확인해. 원본과 결과의 의미 대응 및 라벨 가독성을 검증해.
```

### English · Claude Code
```text
Apply Code-result Alternation to <target> in <file>. Highlighted code alternates with its execution result, then returns to the source. Use a base duration of 0.3s and power2.out; use 1600ms code reading, 1200ms result reading, and 300ms crossfades and preserve semantic correspondence. Build one paused GSAP timeline and recompute geometry and visibility when seeking.
```

### English · Codex
```text
Implement Code-result Alternation in the explanatory scene of <file> for <target>, using 0.3s and power2.out with 1600ms code reading, 1200ms result reading, and 300ms crossfades. Capture at 0, 0.15, and 0.3 seconds to check the initial state, intermediate correspondence, and completion of the first motion. Verify matching source and result elements and readable labels.
```

예시 / Example: 코드와 실행 결과 교대를 `.hero`에 적용해. / Apply Code-result Alternation to `.hero`.

## 적용 / Application

- HyperFrames: 코드와 실행 결과 교대의 계산 상태와 표시를 paused 타임라인 하나에 묶는다. seek 시 onUpdate에서 좌표를 재계산하고 0초 초기 상태도 설정한다.
- ReelForge: 씬 워커 브리프에 코드와 실행 결과 교대, 기본 지속 0.3s, 코드 읽기 1600ms, 대응 요소의 키와 읽기 순서를 적는다.
- Scrolline Deck: 진행률 0~1을 전체 단계 시간에 매핑해 scrub한다. 코드 읽기 1600ms를 유지하고 스프링 대신 power2.out을 사용한다.

조합 / Pair with: [코드 변경 전개 · Code Diff Reveal](../code-diff-reveal/) · [크로스페이드 · Crossfade](../crossfade/)

출처 / Sources: [Fireship](https://www.youtube.com/watch?v=vKJpN5FAeF4) (unknown) · [motion-canvas/motion-canvas](https://motioncanvas.io/docs/code/) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
