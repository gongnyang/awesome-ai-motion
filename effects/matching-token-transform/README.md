# Nº 384 대응 기호 이동 · Matching Token Transform

> 클립 렌더 예정 / Clip rendering planned.

**같은 의미의 코드 토큰이나 수식 기호가 다음 상태의 위치로 이동한다. 사라진 항은 흐려지고 새로운 항은 나타난다.**

Semantically matched tokens move to their next positions while other tokens fade.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 원리 도해 · EXPLAINER | 중급 | 설명, 순서·흐름 | 설명 영상, 제품 시연, 스크롤덱 | gsap |

다른 이름 / Also known as: Code token FLIP, 코드 토큰 이동, Matching-symbol equation transform, 동일 기호 수식 변환, TransformMatchingTex, TransformMatchingStrings, Matched code token move, 대응 코드 토큰 이동

## 선택 기준 / Selection

변환 전후에 유지되는 부분과 달라지는 부분을 구별한다. / Separates preserved meaning from added or removed terms.

- 등식의 같은 x 기호를 유지하며 우변 위치로 이동한다. / Explain code or equation transformations.
- 변환 전후에 유지되는 부분과 달라지는 부분을 구별한다. 기준값과 대상을 함께 표시할 때. / Keep the encoded values, labels, and visual state synchronized.

좋은 예 / Good: 등식의 같은 x 기호를 유지하며 우변 위치로 이동한다.
나쁜 예 / Bad: 문자가 같다는 이유로 의미가 다른 토큰을 연결한다.
주의 / Avoid: 반복 기호는 위치와 의미를 포함한 키로 대응한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 이동 지속 | 1000ms | 600~1500ms | 의미 키로 대응 |
| 줄 간격 | 60px | 40~90px | 1920x1080 기준 |
| 출입 페이드 | 250ms | 150~400ms | 새 기호와 삭제 기호만 |

이징 / Ease: `power2.inOut`

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true});
matches.forEach(m=>tl.fromTo(m.element,{x:m.from.x,y:m.from.y},{x:m.to.x,y:m.to.y,duration:1,ease:'power2.inOut'},0));
tl.to('.removed-token',{opacity:0,duration:0.25},0);
tl.fromTo('.new-token',{opacity:0},{opacity:1,duration:0.25},0.75);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 대응 기호 이동을 적용해. HTML 또는 SVG 기호를 의미 키로 대응해 전후 좌표와 불투명도를 GSAP 코어로 보간한다. 이동 지속 1000ms; 줄 간격 60px; 출입 페이드 250ms을 적용한다. GSAP 코어의 paused 타임라인 하나로 seek 가능하게 만들고 임의 난수와 타이머를 쓰지 마.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 대응 기호 이동을 적용해. HTML 또는 SVG 기호를 의미 키로 대응해 전후 좌표와 불투명도를 GSAP 코어로 보간한다. 이동 지속 1000ms; 줄 간격 60px; 출입 페이드 250ms을 적용한다. 0초, 0.5초, 1초를 캡처해 시작 상태, 중간 진행, 최종 상태를 확인하고 같은 시각으로 다시 seek했을 때 좌표와 라벨이 같은지 검증해.
```

### English · Claude Code
```text
Implement Matching Token Transform on <target> in <file>. Move tokens over 1000ms with 60px line spacing and 250ms entry and exit fades. Match tokens by semantic keys and distinct identifiers for repeated symbols. Use one paused GSAP core timeline, support seeking, and avoid random values and timers.
```

### English · Codex
```text
Implement Matching Token Transform on <target> in <file>. Move tokens over 1000ms with 60px line spacing and 250ms entry and exit fades. Match tokens by semantic keys and distinct identifiers for repeated symbols. Use one paused GSAP core timeline, support seeking, and avoid random values and timers. Capture at 0s, 0.5s, and 1s to check the initial state, intermediate motion, and final state. Seek to each time again and verify identical geometry and labels.
```

예시 / Example: 대응 기호 이동를 `.hero`에 적용해. / Apply Matching Token Transform to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 대응 기호 이동 상태를 넣고 seek 시 1초의 좌표와 색을 다시 계산한다.
- ReelForge: 씬 워커 브리프에 이동 지속 1000ms; 줄 간격 60px; 출입 페이드 250ms을 싣고 등식의 같은 x 기호를 유지하며 우변 위치로 이동한다.
- Scrolline Deck: 진행률 0~1을 1초 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역방향에서도 라벨과 도형을 함께 갱신한다.

조합 / Pair with: [코드 변경 전개 · Code Diff Reveal](../code-diff-reveal/) · [주석 등장 · Annotation Callout](../annotation-callout/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/code-morph/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:pr-to-video/references/code-vocabulary.md`) (unknown) · [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/transform_matching_parts.py) (MIT) · [3b1b/manim](https://github.com/3b1b/manim/blob/master/manimlib/animation/transform_matching_parts.py) (MIT) · [shikijs/shiki-magic-move](https://github.com/shikijs/shiki-magic-move/blob/main/README.md) (MIT) · [code-hike/codehike](https://codehike.org/docs/code/token-transitions) (MIT) · [motion-canvas/motion-canvas](https://motioncanvas.io/docs/code/) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
