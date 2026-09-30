# Nº 625 자막 페이지 교체 · Caption Page Swap

> 클립 렌더 예정 / Clip rendering planned.

**한두 줄짜리 자막이 화면 하단 고정 위치에서 발화 구간에 맞춰 통째로 교체되는 방식**

One or two lines of caption swap wholesale in a fixed bottom slot, timed to each utterance.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 자막·하단 자막 · CAPTIONS | 기본 | 설명, 피드백 | 설명 영상, 발표, 숏폼 | gsap |

다른 이름 / Also known as: Two Line Dialogue Subtitle, 두 줄 대사 자막 교체, Caption Page Accumulation, 자막 페이지 누적

## 선택 기준 / Selection

대사가 안정적으로 읽힌다. 자막이 튀지 않아 인물과 화면에 집중할 수 있다 / Dialogue reads steadily and the caption never jumps, so attention stays on the speaker and the picture.

- 인터뷰·강의·내레이션 영상에 기본 자막을 붙일 때 / Basic captions on interviews, lectures and narration
- 움직임이 많은 장면 위에 방해 없이 대사를 보여 줄 때 / Showing dialogue over busy footage without distraction

좋은 예 / Good: 한 페이지가 최대 2줄, 줄당 16자 이내로 발화 시작에 80ms 페이드인되고 끝나면 80ms 페이드아웃된 뒤 다음 페이지가 같은 자리에 나온다
나쁜 예 / Bad: 문장이 3줄로 넘어가거나 페이지마다 위치가 달라 눈이 자막을 찾아다닌다
주의 / Avoid: 한 페이지 노출 시간은 최소 1.0초, 읽는 속도는 초당 8음절 이하로 맞춘다 · 줄바꿈은 어절 경계에서만. 조사나 명사 중간에서 끊지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 페이드 | 80ms | 60~120ms | 들어옴·나감 각각 |
| 최대 줄 수 | 2 | 1~2 | 줄당 16자 이내 |
| 하단 여백 | 화면 높이 8% | 6~10% | safe zone |
| 최소 노출 | 1.0s | 0.8~1.2s | 짧은 문장은 앞뒤로 붙임 |

이징 / Ease: `linear`

## 구현 / Implementation (GSAP)

```js
cues.forEach(c => {
  tl.fromTo('.cap', {opacity:0}, {opacity:1, duration:0.08, ease:'none', onStart(){ el.textContent = c.text; }}, c.start)
    .to('.cap', {opacity:0, duration:0.08, ease:'none'}, c.end - 0.08);
});
// 페이지 텍스트는 사전에 줄바꿈 확정(\n) 후 white-space:pre
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 영상에 페이지 교체 자막을 붙여줘. 각 대사(<큐 배열>)를 최대 2줄, 줄당 16자 이내로 어절 경계에서 나누고, 화면 하단 여백 8% 고정 위치에 발화 시작에서 80ms 페이드인, 끝 80ms 전에 페이드아웃으로 교체해. 페이지 노출은 최소 1.0초, 읽기 속도는 초당 8음절 이하.
```

### 한국어 · Codex
```text
<파일>에 caption page swap을 적용해. 큐마다 미리 만든 .page 요소의 opacity를 start에서 0에서 1(0.08초), end-0.08에서 1에서 0. 줄바꿈은 사전에 \n으로 확정. 각 큐 중간 시점과 큐 경계 직전·직후를 캡처해 두 페이지가 겹쳐 보이지 않는지, 텍스트가 하단 8% 안전 영역 안인지 확인해.
```

### English · Claude Code
```text
Add page-swap captions to the video in <target>. Break each cue (<cues>) into at most 2 lines of 16 characters on word boundaries, in a fixed slot at 8% bottom margin. Fade in 80ms at utterance start and out 80ms before its end. Minimum on-screen 1.0s, reading speed at most 8 syllables per second.
```

### English · Codex
```text
Apply caption page swap in <file>. Pre-build one .page element per cue and animate opacity 0 to 1 (0.08s) at start and 1 to 0 at end-0.08. Fix line breaks with \n in advance. Capture mid-cue and just before/after each boundary to verify no two pages overlap and text stays inside the 8% bottom safe zone.
```

예시 / Example: 자막 페이지 교체를 `.hero`에 적용해. / Apply Caption Page Swap to `.hero`.

## 적용 / Application

- HyperFrames: 큐 배열을 타임라인 position에 그대로 배치한다. onStart 대신 페이지별 요소를 미리 만들어 opacity만 켜야 역방향 seek에서도 올바르다
- ReelForge: 브리프에 큐 배열(text,start,end), 줄당 16자, 최대 2줄, 하단 8%, 페이드 80ms를 싣는다. 줄바꿈 계산은 워커가 어절 기준으로 미리 끝낸다
- Scrolline Deck: 스크롤덱에서는 진행률 구간마다 한 페이지를 대응시킨다. 구간 경계에서 cross fade 대신 0.08 분량의 짧은 페이드로 교체한다

조합 / Pair with: [카라오케 자막 · Karaoke Caption](../karaoke-caption/) · [단어 팝 자막 · Word Pop Caption](../word-pop-caption/) · [하단 자막 바 · Lower Third Reveal](../lower-third-reveal/)

출처 / Sources: [remotion-dev/remotion](https://github.com/remotion-dev/remotion) (Remotion License (custom)) · [dcmcand/dynamic-typography-videos](https://github.com/dcmcand/dynamic-typography-videos) (Apache-2.0) · [remotion-dev/remotion](https://www.remotion.dev/docs/captions/create-tiktok-style-captions) (Remotion License (custom)) · [remotion-dev/remotion](https://www.remotion.dev/templates/tiktok) (Remotion License (custom))

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
