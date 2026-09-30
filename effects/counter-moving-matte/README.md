# Nº 034 역방향 매트 · Counter Moving Matte

> 클립 렌더 예정 / Clip rendering planned.

**창은 한쪽으로 열리고 안쪽 그림은 반대쪽으로 움직이며 나타난다.**

A revealing window and its content move in opposite directions.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 중급 | 주목 끌기, 전환 | 설명 영상, 웹 UI, 숏폼 | gsap |

다른 이름 / Also known as: 역방향 매트 이동, dual-layer-counter-move

## 선택 기준 / Selection

경계와 내용이 분리된 역동적인 공개를 느낀다. / Separates the boundary from the image for a dynamic reveal.

- 제품 사진을 역동적으로 공개할 때 / Use when presenting counter moving matte in a content reveal scene.
- 섹션의 이미지 창을 열 때 / Use for a focused title, image, or card with a clearly visible final state.

좋은 예 / Good: 창은 오른쪽에서 오고 내부 사진은 왼쪽에서 정렬된다.
나쁜 예 / Bad: 부모 overflow가 없어 창 밖 사진이 보인다.
주의 / Avoid: 부모 overflow가 없어 창 밖 사진이 보인다. · 완료 자세에서 내용이 가려지지 않게 한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 0.6s | 0.42~0.84s | 0초부터 시작하는 공개 구간 |
| 창 시작 이동 | 100% | 80~100% | 오버플로 숨김 부모 내부 |
| 내용 시작 이동 | -30% | -15~-40% | 창과 반대 방향 |
| 이징 | power3.out | power2.out, power3.out, sine.inOut | 움직임의 가속과 감속 |

## 구현 / Implementation (GSAP)

```js
gsap.set('.frame', {overflow:'hidden'});
tl.fromTo('.matte', {xPercent:100}, {xPercent:0, duration:0.6, ease:'power3.out'}, 0);
tl.fromTo('.content', {xPercent:-30}, {xPercent:0, duration:0.6, ease:'power3.out'}, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 역방향 매트을 적용해. 0.6초, 창 시작 이동 100%; 내용 시작 이동 -30%, 이징 power3.out로 구현해. paused 타임라인으로 seek 가능하게 하고 완료 자세를 유지해.
```

### 한국어 · Codex
```text
<파일>의 <대상> 레이어에 역방향 매트을 적용해. 0.6초, 창 시작 이동 100%; 내용 시작 이동 -30%, power3.out를 사용하고 0초, 0.3초, 0.6초 캡처로 시작값, 중간 변화, 완료 자세를 확인해. 동일 시점을 두 번 seek해 같은 결과인지 검증해.
```

### English · Claude Code
```text
Apply Counter Moving Matte to <target> in <file>. Use a 0.6s segment with power3.out; implement these explicit settings: Initial window translation: 100%, Initial content translation: -30%. Use a paused, seekable timeline and hold the final pose.
```

### English · Codex
```text
Apply Counter Moving Matte to the <target> layer in <file> with Initial window translation: 100%, Initial content translation: -30%, using the supplied core snippet and a 0.6s segment with power3.out. Capture at 0s, 0.3s, and 0.6s to verify the initial pose, intermediate change, and final pose. Seek to the same timestamp twice and confirm identical output.
```

예시 / Example: 역방향 매트를 `.hero`에 적용해. / Apply Counter Moving Matte to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 0.6초 구간을 넣고 seek로 자세를 계산한다. 시작값과 완료값을 명시한다.
- ReelForge: 씬 워커 브리프에 역방향 매트, 0.6초, 창 시작 이동 100%; 내용 시작 이동 -30%, power3.out를 싣고 대상 레이어를 지정한다.
- Scrolline Deck: 진행률 0~1을 0.6초 구간에 매핑한다. scrub에서는 스프링 대신 ease-out으로 같은 시작값과 완료값을 보간한다.

조합 / Pair with: [페이드 슬라이드 · Fade Slide](../fade-slide/) · [스태거 · Stagger](../stagger/) · [스케일 팝 · Scale Pop](../scale-pop/)

출처 / Sources: gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/04-masks-mattes.md#dual-layer-counter-move`) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
