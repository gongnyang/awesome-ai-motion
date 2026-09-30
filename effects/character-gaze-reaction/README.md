# Nº 371 캐릭터 시선과 반응 · Character Gaze and Reaction

> 클립 렌더 예정 / Clip rendering planned.

**캐릭터의 눈이 대상 쪽으로 움직이고 표정이나 몸 자세가 바뀐다.**

A character looks toward a subject and changes expression or posture.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 발표 | svg |

## 선택 기준 / Selection

관객의 시선을 안내하고 질문 또는 놀라움을 전달한다. / Guides attention and communicates a question or surprise.

- 캐릭터 시선과 반응으로 원인과 결과를 설명할 때 / Explain causes and results using character gaze and reaction.
- 대응하는 요소를 같은 화면에서 순서대로 읽게 할 때 / Present corresponding elements in a readable sequence within the same view.

좋은 예 / Good: 캐릭터가 그래프를 바라본 뒤 눈썹을 올려 질문을 전달한다.
나쁜 예 / Bad: 눈이 눈 밖으로 나가거나 반응이 설명보다 먼저 나온다.
주의 / Avoid: 눈이 눈 밖으로 나가거나 반응이 설명보다 먼저 나온다. · 설명 라벨과 대응 색을 동작 중에 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 0.3s | 0.21~0.42s | 첫 동작 또는 후보의 기본 단계 길이 |
| 눈 이동 | 8px | 4~12px | 눈의 경계를 넘지 않는다 |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 주파수 변화는 선형으로 두고 위치 변화는 완만하게 연결한다. |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
tl.to(pupils,{x:8,duration:0.3,ease:"power2.out"});
tl.to(brows,{y:-6,rotation:-8,duration:0.45,ease:"power2.out"},0.3);
tl.to(body,{y:-4,duration:0.45,ease:"power2.out"},0.3);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 캐릭터 시선과 반응을 적용해. 캐릭터의 눈이 대상 쪽으로 움직이고 표정이나 몸 자세가 바뀐다. 새로 만든 캐릭터 SVG의 눈 위치와 표정 패스를 보간한다. 기본 지속은 0.3s, 눈 이동은 8px, 이징은 power2.out로 설정한다. 하나의 paused GSAP 타임라인으로 구성하고 seek할 때 좌표와 표시 상태를 다시 계산해.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 캐릭터 시선과 반응을 적용해. 기본 지속은 0.3s, 눈 이동은 8px, 이징은 power2.out로 설정한다. 0초, 0.15초, 0.3초 시점을 캡처해 초기 상태, 중간 대응 관계, 첫 동작의 완료 상태를 확인해. 원본과 결과의 의미 대응 및 라벨 가독성을 검증해.
```

### English · Claude Code
```text
Apply Character Gaze and Reaction to <target> in <file>. A character looks toward a subject and changes expression or posture. Use a base duration of 0.3s and power2.out; use an 8px pupil shift followed by a 450ms expression change and preserve semantic correspondence. Build one paused GSAP timeline and recompute geometry and visibility when seeking.
```

### English · Codex
```text
Implement Character Gaze and Reaction in the explanatory scene of <file> for <target>, using 0.3s and power2.out with an 8px pupil shift followed by a 450ms expression change. Capture at 0, 0.15, and 0.3 seconds to check the initial state, intermediate correspondence, and completion of the first motion. Verify matching source and result elements and readable labels.
```

예시 / Example: 캐릭터 시선과 반응를 `.hero`에 적용해. / Apply Character Gaze and Reaction to `.hero`.

## 적용 / Application

- HyperFrames: 캐릭터 시선과 반응의 계산 상태와 표시를 paused 타임라인 하나에 묶는다. seek 시 onUpdate에서 좌표를 재계산하고 0초 초기 상태도 설정한다.
- ReelForge: 씬 워커 브리프에 캐릭터 시선과 반응, 기본 지속 0.3s, 눈 이동 8px, 대응 요소의 키와 읽기 순서를 적는다.
- Scrolline Deck: 진행률 0~1을 전체 단계 시간에 매핑해 scrub한다. 눈 이동 8px를 유지하고 스프링 대신 power2.out을 사용한다.

조합 / Pair with: [말풍선 생성과 접힘 · Speech Bubble Reveal](../speech-bubble-reveal/) · [캐릭터 관절 동작 · Character Articulation](../character-articulation/)

출처 / Sources: [3b1b/videos](https://github.com/3b1b/videos/blob/master/custom/characters/pi_creature_animations.py) (CC-BY-NC-SA-4.0) · [3b1b/videos](https://github.com/3b1b/videos/blob/master/custom/characters/pi_creature.py) (CC-BY-NC-SA-4.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
