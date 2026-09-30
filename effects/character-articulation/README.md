# Nº 370 캐릭터 관절 동작 · Character Articulation

> 클립 렌더 예정 / Clip rendering planned.

**평면 캐릭터의 팔과 다리가 관절을 중심으로 돌아 움직이고 몸이 함께 반응한다.**

Flat character limbs rotate around joints while the body responds.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 발표 | gsap |

다른 이름 / Also known as: Flat character articulation, 평면 캐릭터 관절 동작

## 선택 기준 / Selection

개념을 인물의 행동으로 쉽게 따라간다. / Makes a concept easier to follow through a character’s actions.

- 캐릭터 관절 동작으로 원인과 결과를 설명할 때 / Explain causes and results using character articulation.
- 대응하는 요소를 같은 화면에서 순서대로 읽게 할 때 / Present corresponding elements in a readable sequence within the same view.

좋은 예 / Good: 팔 그룹을 어깨 중심으로 돌리고 몸을 8px 기울여 인사한다.
나쁜 예 / Bad: 팔 중심을 기준으로 돌아 몸에서 떨어진다.
주의 / Avoid: 팔 중심을 기준으로 돌아 몸에서 떨어진다. · 설명 라벨과 대응 색을 동작 중에 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 0.8s | 0.56~1.12s | 첫 동작 또는 후보의 기본 단계 길이 |
| 관절 회전 | 20deg | 10~30deg | 관절 원점에서 회전한다 |
| 이징 | power2.inOut | none \| power2.out \| power2.inOut | 주파수 변화는 선형으로 두고 위치 변화는 완만하게 연결한다. |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
gsap.set(arm,{svgOrigin:"960 440"});
tl.to(arm,{rotation:20,duration:0.4,ease:"power2.inOut"});
tl.to(body,{x:8,duration:0.4,ease:"power2.inOut"},0);
tl.to([arm,body],{rotation:0,x:0,duration:0.4,ease:"power2.inOut"},0.4);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 캐릭터 관절 동작을 적용해. 평면 캐릭터의 팔과 다리가 관절을 중심으로 돌아 움직이고 몸이 함께 반응한다. 새로 만든 SVG 신체 그룹의 transform-origin과 회전을 보간한다. 기본 지속은 0.8s, 관절 회전은 20deg, 이징은 power2.inOut로 설정한다. 하나의 paused GSAP 타임라인으로 구성하고 seek할 때 좌표와 표시 상태를 다시 계산해.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 캐릭터 관절 동작을 적용해. 기본 지속은 0.8s, 관절 회전은 20deg, 이징은 power2.inOut로 설정한다. 0초, 0.4초, 0.8초 시점을 캡처해 초기 상태, 중간 대응 관계, 첫 동작의 완료 상태를 확인해. 원본과 결과의 의미 대응 및 라벨 가독성을 검증해.
```

### English · Claude Code
```text
Apply Character Articulation to <target> in <file>. Flat character limbs rotate around joints while the body responds. Use a base duration of 0.8s and power2.inOut; use 20deg joint rotation and 8px body displacement and preserve semantic correspondence. Build one paused GSAP timeline and recompute geometry and visibility when seeking.
```

### English · Codex
```text
Implement Character Articulation in the explanatory scene of <file> for <target>, using 0.8s and power2.inOut with 20deg joint rotation and 8px body displacement. Capture at 0, 0.4, and 0.8 seconds to check the initial state, intermediate correspondence, and completion of the first motion. Verify matching source and result elements and readable labels.
```

예시 / Example: 캐릭터 관절 동작를 `.hero`에 적용해. / Apply Character Articulation to `.hero`.

## 적용 / Application

- HyperFrames: 캐릭터 관절 동작의 계산 상태와 표시를 paused 타임라인 하나에 묶는다. seek 시 onUpdate에서 좌표를 재계산하고 0초 초기 상태도 설정한다.
- ReelForge: 씬 워커 브리프에 캐릭터 관절 동작, 기본 지속 0.8s, 관절 회전 20deg, 대응 요소의 키와 읽기 순서를 적는다.
- Scrolline Deck: 진행률 0~1을 전체 단계 시간에 매핑해 scrub한다. 관절 회전 20deg를 유지하고 스프링 대신 power2.out을 사용한다.

조합 / Pair with: [오버랩 · Overlapping Action](../overlapping-action/) · [캐릭터 시선과 반응 · Character Gaze and Reaction](../character-gaze-reaction/)

출처 / Sources: [Kurzgesagt](https://kurzgesagt.org/what-we-do?visit=videos) (unknown) · [TED-Ed](https://ed.ted.com/lessons/making-a-ted-ed-lesson-animating-zombies-with-puppets) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
