# Nº 397 말풍선 생성과 접힘 · Speech Bubble Reveal

> 클립 렌더 예정 / Clip rendering planned.

**말풍선이 캐릭터 옆에서 커지고 문장이 나타난 뒤 말풍선과 문장이 함께 사라진다.**

A speech bubble opens beside a character, reveals text, then collapses.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 발표 | gsap |

다른 이름 / Also known as: Speech bubble build and collapse

## 선택 기준 / Selection

질문과 답변의 화자를 명확히 한다. / Makes the speaker of a question or answer clear.

- 말풍선 생성과 접힘으로 원인과 결과를 설명할 때 / Explain causes and results using speech bubble reveal.
- 대응하는 요소를 같은 화면에서 순서대로 읽게 할 때 / Present corresponding elements in a readable sequence within the same view.

좋은 예 / Good: 풍선을 펼친 뒤 문장을 읽게 하고 함께 접는다.
나쁜 예 / Bad: 문장이 나타나자마자 풍선을 닫는다.
주의 / Avoid: 문장이 나타나자마자 풍선을 닫는다. · 설명 라벨과 대응 색을 동작 중에 바꾸지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 0.45s | 0.32~0.63s | 첫 동작 또는 후보의 기본 단계 길이 |
| 읽기 유지 | 1800ms | 1200~3500ms | 문장 길이에 따라 늘린다 |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 주파수 변화는 선형으로 두고 위치 변화는 완만하게 연결한다. |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true});
tl.fromTo(bubble,{scale:0,opacity:0},{scale:1,opacity:1,duration:0.45,transformOrigin:"0% 100%",ease:"power2.out"});
tl.fromTo(text,{opacity:0},{opacity:1,duration:0.25},0.45);
tl.to([bubble,text],{opacity:0,duration:0.25},2.5);
tl.to(bubble,{scale:0,duration:0.3},2.5);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 말풍선 생성과 접힘을 적용해. 말풍선이 캐릭터 옆에서 커지고 문장이 나타난 뒤 말풍선과 문장이 함께 사라진다. 독립 SVG 말풍선의 scale과 HTML 텍스트 opacity를 순차 보간한다. 기본 지속은 0.45s, 읽기 유지은 1800ms, 이징은 power2.out로 설정한다. 하나의 paused GSAP 타임라인으로 구성하고 seek할 때 좌표와 표시 상태를 다시 계산해.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 말풍선 생성과 접힘을 적용해. 기본 지속은 0.45s, 읽기 유지은 1800ms, 이징은 power2.out로 설정한다. 0초, 0.225초, 0.45초 시점을 캡처해 초기 상태, 중간 대응 관계, 첫 동작의 완료 상태를 확인해. 원본과 결과의 의미 대응 및 라벨 가독성을 검증해.
```

### English · Claude Code
```text
Apply Speech Bubble Reveal to <target> in <file>. A speech bubble opens beside a character, reveals text, then collapses. Use a base duration of 0.45s and power2.out; use a 250ms text reveal and an 1800ms reading hold and preserve semantic correspondence. Build one paused GSAP timeline and recompute geometry and visibility when seeking.
```

### English · Codex
```text
Implement Speech Bubble Reveal in the explanatory scene of <file> for <target>, using 0.45s and power2.out with a 250ms text reveal and an 1800ms reading hold. Capture at 0, 0.225, and 0.45 seconds to check the initial state, intermediate correspondence, and completion of the first motion. Verify matching source and result elements and readable labels.
```

예시 / Example: 말풍선 생성과 접힘를 `.hero`에 적용해. / Apply Speech Bubble Reveal to `.hero`.

## 적용 / Application

- HyperFrames: 말풍선 생성과 접힘의 계산 상태와 표시를 paused 타임라인 하나에 묶는다. seek 시 onUpdate에서 좌표를 재계산하고 0초 초기 상태도 설정한다.
- ReelForge: 씬 워커 브리프에 말풍선 생성과 접힘, 기본 지속 0.45s, 읽기 유지 1800ms, 대응 요소의 키와 읽기 순서를 적는다.
- Scrolline Deck: 진행률 0~1을 전체 단계 시간에 매핑해 scrub한다. 읽기 유지 1800ms를 유지하고 스프링 대신 power2.out을 사용한다.

조합 / Pair with: [캐릭터 시선과 반응 · Character Gaze and Reaction](../character-gaze-reaction/) · [타자기 · Typewriter](../typewriter/)

출처 / Sources: [3b1b/videos](https://github.com/3b1b/videos/blob/master/custom/characters/pi_creature_animations.py) (CC-BY-NC-SA-4.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
