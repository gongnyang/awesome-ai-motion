# Nº 404 벤 집합 겹침 · Venn Overlap

> 클립 렌더 예정 / Clip rendering planned.

**원들이 서로 다가가 겹치는 영역이 강조되고 라벨이 나타난다.**

Circles move together, then reveal the highlighted intersection and its label.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 웹 UI | svg |

## 선택 기준 / Selection

집합의 공통점과 차이를 이해한다. / Distinguishes shared properties from differences between sets.

- 두세 개 개념의 공통 속성을 설명할 때 / Explain shared features of two or three concepts.
- 고객 집단이 겹치는 조건을 보여줄 때 / Reveal the intersection of audience segments.

좋은 예 / Good: 세 원이 1초 동안 모인 뒤 교집합과 라벨을 0.3초에 공개한다.
나쁜 예 / Bad: 원의 크기를 임의로 바꿔 실제 집합의 규모를 나타내는 것처럼 보인다.
주의 / Avoid: 정량 자료가 없으면 원 면적을 수량으로 해석하게 하지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 원 수 | 3개 | 2~3개 | 라벨을 각 집합에 연결한다. |
| 이동 시간 | 1000ms | 700~1400ms | 원 중심을 목표 위치로 옮긴다. |
| 이동 거리 | 180px | 100~260px | 겹침 면적을 읽을 수 있게 둔다. |
| 교집합 공개 | 300ms | 200~450ms | 원 도착 뒤 시작한다. |
| 이징 | power2.inOut | none \| power2.out \| power2.inOut | 끝점을 넘지 않는 이징을 쓴다. |

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true});
tl.fromTo('.set-a',{x:-180},{x:0,duration:1,ease:'power2.inOut'},0);
tl.fromTo('.set-b',{x:180},{x:0,duration:1,ease:'power2.inOut'},0);
tl.fromTo('.set-c',{y:180},{y:0,duration:1,ease:'power2.inOut'},0);
tl.fromTo('.intersection, .intersection-label',{opacity:0},{opacity:1,duration:0.3},1);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 벤 집합 겹침를 구현해. 원들이 서로 다가가 겹치는 영역이 강조되고 라벨이 나타난다. 원 수 3개, 이동 시간 1000ms, 이동 거리 180px, 교집합 공개 300ms, 이징 power2.inOut를 적용하고 GSAP 코어의 paused 타임라인 하나로 seek 가능하게 작성해. 정량 자료가 없으면 원 면적을 수량으로 해석하게 하지 않는다.
```

### 한국어 · Codex
```text
<파일>의 <대상> 장면에 벤 집합 겹침를 적용해. 원 수 3개, 이동 시간 1000ms, 이동 거리 180px, 교집합 공개 300ms, 이징 power2.inOut를 사용하고 다음 동작을 구현해: SVG 원 위치를 보간하고 교집합 clip 레이어의 opacity를 올린다. 플러그인과 Math.random 없이 작성하고 0.33초·0.78초·1.3초를 캡처해 초기 상태, 중간 변화, 최종 상태가 연속적이며 다음 예시와 맞는지 확인해: 세 원이 1초 동안 모인 뒤 교집합과 라벨을 0.3초에 공개한다.
```

### English · Claude Code
```text
Implement Venn Overlap for <target> in <file>. Circles move together, then reveal the highlighted intersection and its label. Use circle count: 3; movement duration: 1000ms; travel distance: 180px; intersection reveal duration: 300ms; easing: power2.inOut in a single paused GSAP core timeline that supports seeking. Do not imply quantities through circle areas without quantitative data.
```

### English · Codex
```text
Apply Venn Overlap to the <target> scene in <file> using circle count: 3; movement duration: 1000ms; travel distance: 180px; intersection reveal duration: 300ms; easing: power2.inOut. Circles move together, then reveal the highlighted intersection and its label. Use prepared data or geometry with GSAP core, no plugins, and no Math.random; capture at 0.33, 0.78, 1.3 seconds to verify continuous intermediate geometry, correct endpoints, and identical output after repeated seeks. Do not imply quantities through circle areas without quantitative data.
```

예시 / Example: 벤 집합 겹침를 `.hero`에 적용해. / Apply Venn Overlap to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인 하나에 벤 집합 겹침 상태를 넣고 seek(t)로 1.3초 구간을 재현한다. 현재 시간에서 도형을 계산해 프레임 누적을 피한다.
- ReelForge: 씬 워커 브리프에 원 수 3개, 이동 시간 1000ms, 이동 거리 180px, 교집합 공개 300ms, 이징 power2.inOut를 싣고 입력 자료와 초기 도형 좌표를 고정한다. 세 원이 1초 동안 모인 뒤 교집합과 라벨을 0.3초에 공개한다.
- Scrolline Deck: 진행률 0~1을 1.3초 구간에 매핑해 같은 타임라인을 scrub한다. 시간량은 none, 시각 전환은 power2.out을 쓰고 스프링 대신 끝점을 넘지 않는 ease-out을 쓴다.

조합 / Pair with: [하이라이트 스윕 · Highlight Sweep](../highlight-sweep/) · [주석 등장 · Annotation Callout](../annotation-callout/)

출처 / Sources: local/bookforge (`claude-skill:bookforge/references/diagrams.md`) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
