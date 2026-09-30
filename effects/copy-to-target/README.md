# Nº 374 복사본 이동 도출 · Copy-to-target Derivation

> 클립 렌더 예정 / Clip rendering planned.

**원본은 남아 있고 복사본이 이동하거나 변형되어 결과 위치에 도착한다.**

The original stays visible while a duplicate moves or transforms into the result.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 발표 | gsap |

다른 이름 / Also known as: TransformFromCopy, Matrix column to geometry link, 행렬 열과 도형 연결

## 선택 기준 / Selection

결과가 어디에서 유래했는지 추적한다. / Makes the origin of a derived result easy to trace.

- 복사본 이동 도출으로 원인과 결과를 설명할 때 / Explain causes and results using copy-to-target derivation.
- 대응하는 요소를 같은 화면에서 순서대로 읽게 할 때 / Present corresponding elements in a readable sequence within the same view.

좋은 예 / Good: 원본 수식을 남긴 채 복사본을 결과 도형으로 옮긴다.
나쁜 예 / Bad: 원본까지 지워 결과의 출처를 놓친다.
주의 / Avoid: 원본까지 지워 결과의 출처를 놓친다. · 설명 라벨과 대응 색을 동작 중에 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 0.9s | 0.63~1.26s | 첫 동작 또는 후보의 기본 단계 길이 |
| 이동 거리 | 200px | 80~400px | 복사본의 이동 거리 |
| 이징 | power2.inOut | none \| power2.out \| power2.inOut | 주파수 변화는 선형으로 두고 위치 변화는 완만하게 연결한다. |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
copy = source.cloneNode(true); source.parentNode.appendChild(copy);
tl.fromTo(copy, {x:0, y:0}, {x:200, y:0, duration:0.9, ease:"power2.inOut"});
tl.to(copy, {scale:0.8, duration:0.3}, 0.6);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 복사본 이동 도출을 적용해. 원본은 남아 있고 복사본이 이동하거나 변형되어 결과 위치에 도착한다. 원본의 별도 SVG 인스턴스를 만들고 위치 및 점 좌표를 보간한다. 기본 지속은 0.9s, 이동 거리은 200px, 이징은 power2.inOut로 설정한다. 하나의 paused GSAP 타임라인으로 구성하고 seek할 때 좌표와 표시 상태를 다시 계산해.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 복사본 이동 도출을 적용해. 기본 지속은 0.9s, 이동 거리은 200px, 이징은 power2.inOut로 설정한다. 0초, 0.45초, 0.9초 시점을 캡처해 초기 상태, 중간 대응 관계, 첫 동작의 완료 상태를 확인해. 원본과 결과의 의미 대응 및 라벨 가독성을 검증해.
```

### English · Claude Code
```text
Apply Copy-to-target Derivation to <target> in <file>. The original stays visible while a duplicate moves or transforms into the result. Use a base duration of 0.9s and power2.inOut; use duplicate travel 200px and preserve semantic correspondence. Build one paused GSAP timeline and recompute geometry and visibility when seeking.
```

### English · Codex
```text
Implement Copy-to-target Derivation in the explanatory scene of <file> for <target>, using 0.9s and power2.inOut with duplicate travel 200px. Capture at 0, 0.45, and 0.9 seconds to check the initial state, intermediate correspondence, and completion of the first motion. Verify matching source and result elements and readable labels.
```

예시 / Example: 복사본 이동 도출를 `.hero`에 적용해. / Apply Copy-to-target Derivation to `.hero`.

## 적용 / Application

- HyperFrames: 복사본 이동 도출의 계산 상태와 표시를 paused 타임라인 하나에 묶는다. seek 시 onUpdate에서 좌표를 재계산하고 0초 초기 상태도 설정한다.
- ReelForge: 씬 워커 브리프에 복사본 이동 도출, 기본 지속 0.9s, 이동 거리 200px, 대응 요소의 키와 읽기 순서를 적는다.
- Scrolline Deck: 진행률 0~1을 전체 단계 시간에 매핑해 scrub한다. 이동 거리 200px를 유지하고 스프링 대신 power2.out을 사용한다.

조합 / Pair with: [모프 전환 · Morph](../shape-morph/) · [주석 등장 · Annotation Callout](../annotation-callout/)

출처 / Sources: [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/transform.py) (MIT) · [3b1b/videos](https://github.com/3b1b/videos/blob/master/_2016/eola/chapter3.py) (CC-BY-NC-SA-4.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
