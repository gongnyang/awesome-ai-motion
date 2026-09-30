# Nº 578 글자 뒤집기 등장 · Letter Flip Reveal

> 클립 렌더 예정 / Clip rendering planned.

**납작하게 누워 있던 글자가 가로축이나 세로축으로 회전해 앞면을 드러내는 입체 등장**

Text lying flat tips up on a horizontal or vertical axis to reveal its front face.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 중급 | 주목 끌기, 분위기 | 숏폼, 설명 영상, 발표 | gsap |

다른 이름 / Also known as: Per Character 3D Flip, 글자별 3D 뒤집기, Per-character 3D

## 선택 기준 / Selection

글자가 공간에 세워지는 느낌. 제목에 깊이와 무게가 생긴다 / Letters seem to stand up in space, giving a title depth and weight.

- 짧은 제목 한 줄을 입체감 있게 등장시킬 때 / When a single short title should arrive with dimensional weight
- 섹션 도입부 타이틀 / For section-opening titles

좋은 예 / Good: "START"가 글자마다 rotateX -90도에서 0도로 0.55초 동안 세워지고 글자 시작 차는 0.04초다
나쁜 예 / Bad: 180도 이상 돌리며 perspective를 200px으로 낮춰 글자가 찌그러지고 읽히지 않는다
주의 / Avoid: perspective는 800px 이상을 쓴다. 낮으면 왜곡이 심하다 · 회전 중에는 opacity를 0에서 1로 함께 올려 뒷면 노출 깜빡임을 가린다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 글자당 시간 | 0.55s | 0.4~0.7s | power3.out |
| 시작 차 | 0.04s | 0.03~0.06s | 왼쪽부터 |
| 회전각 | -90deg | -90 또는 -180deg | rotateX 또는 rotateY |
| perspective | 1000px | 800~1200px | 부모에 적용 |

이징 / Ease: `power3.out`

## 구현 / Implementation (GSAP)

```js
gsap.set('.title', {perspective:1000});
tl.from('.ch', {rotationX:-90, opacity:0, transformOrigin:'50% 100%', duration:0.55, ease:'power3.out', stagger:0.04}, 0.2);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 제목 글자를 입체로 세워줘. 부모에 perspective 1000px, 글자마다 rotationX -90도에서 0도, opacity 0에서 1, 0.55초 power3.out, 바닥 경첩(transform-origin 50% 100%), 시작 차 0.04초. 한국어는 음절 단위로 span을 나눠.
```

### 한국어 · Codex
```text
<파일>의 제목에 letter flip 3d를 적용해. 부모 perspective 1000px, Intl.Segmenter로 분할한 .ch에 rotationX -90에서 0, opacity 0에서 1, 0.55초, stagger 0.04, origin 50% 100%. 0.4초·0.7초·1.4초를 캡처해 회전 중 뒷면이 보이지 않고 최종 글자가 정면인지 확인해.
```

### English · Claude Code
```text
Stand up the title letters in <target>. Put perspective 1000px on the parent; each glyph goes rotationX -90 to 0 and opacity 0 to 1 over 0.55s power3.out with a bottom hinge (transform-origin 50% 100%), staggered 0.04s. Split Korean by syllable.
```

### English · Codex
```text
Apply letter flip 3d to the title in <file>. Parent perspective 1000px; .ch from Intl.Segmenter with rotationX -90 to 0, opacity 0 to 1, 0.55s, stagger 0.04, origin 50% 100%. Capture at 0.4s, 0.7s and 1.4s, verify no back face shows mid-rotation and the final glyphs face front.
```

예시 / Example: 글자 뒤집기 등장를 `.hero`에 적용해. / Apply Letter Flip Reveal to `.hero`.

## 적용 / Application

- HyperFrames: perspective를 글자 span이 아니라 부모에 걸어 모든 글자가 같은 소실점을 쓰게 한다. 캡처는 회전 중 프레임에서 뒷면 노출을 확인한다
- ReelForge: 브리프에 문구, 회전축(X/Y), 각도, 0.55초, perspective 1000px를 싣는다. 한국어는 음절 단위로 나눈다
- Scrolline Deck: 진행률에 stagger를 매핑하고 스프링 대신 power3.out을 유지한다. 뒤로 감으면 글자가 다시 눕는다

조합 / Pair with: [글자별 스태거 · Per-character Rise](../char-stagger/) · [글자 회전 입장 · Letter Spin In](../letter-spin-in/) · [텍스트 익스트루전 · Text Extrusion](../text-extrusion/)

출처 / Sources: [codrops/LetterEffects](https://github.com/codrops/LetterEffects) (unknown) · [codrops/OnScrollTypographyAnimations](https://github.com/codrops/OnScrollTypographyAnimations) (MIT) · [codrops/TextBlockTransitions](https://github.com/codrops/TextBlockTransitions) (MIT) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/animating-text/text-animation/animating-text.html) (unknown) · [airbnb/lottie-web](https://github.com/airbnb/lottie-web) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
