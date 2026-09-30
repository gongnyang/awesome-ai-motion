# Nº 190 리액션 컷 · Reaction Cut

> 클립 렌더 예정 / Clip rendering planned.

**사건이나 발언 다음에 그것을 본 사람의 얼굴 또는 반응 화면으로 컷한다**

After an event or line, the view cuts to the face or reaction of someone who saw it.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 피드백, 설명 | 숏폼, 설명 영상, 제품 시연 | gsap |

다른 이름 / Also known as: 반응 컷

## 선택 기준 / Selection

사건이나 발언 직후 그것을 본 사람의 표정으로 컷한다. 사건의 영향과 감정을 확인시킨다 / Confirms the emotion and impact of the event.

- 발표, 인터뷰, 시연에서 놀랄 만한 결과 직후 청자나 사용자의 반응을 보여 줄 때 / When showing an audience or user reaction right after a surprising result in a talk, interview, or demo
- 뉴스나 숏폼에서 발언 뒤 다른 사람의 반응을 붙여 감정을 강조할 때 / When attaching another person's reaction after a statement in news or shorts to underline emotion

좋은 예 / Good: 발언이 끝나고 0.1초 뒤 0ms로 반응 화면으로 바뀌어 0.8초 유지된 후 다음 장면으로 이어진다
나쁜 예 / Bad: 반응 화면이 발언 도중에 들어와 말이 끊기거나, 반응이 0.3초로 짧아 표정이 읽히지 않는다
주의 / Avoid: 반응 유지는 0.6초 이상 · 발언이 끝나기 전에는 컷하지 않는다(문장 말미에서 컷)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전환 길이 | 0ms | 고정 | 즉시 |
| 컷 지연 | 발언 종료 +0.1s | 0~0.2s | 문장 말미 |
| 반응 유지 | 800ms | 600~1200ms | 표정을 읽는 시간 |
| 반응 확대 | 1.05 서서히 1.0 | 1.0~1.08 | 유지 동안 아주 느리게 |
| 오디오 | 발언 여운 유지 |  | 반응 화면에서도 이어짐 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
tl.set('.speaker', { autoAlpha: 0 }, 2.1);
tl.set('.reaction', { autoAlpha: 1 }, 2.1);
tl.fromTo('.reaction', { scale: 1.05 }, { scale: 1, duration: 0.8, ease: 'none' }, 2.1);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 영상에서 발언이 끝나는 2.0초 뒤 0.1초에 리액션 컷을 넣어줘. .speaker를 숨기고 .reaction을 표시하는 것은 tl.set으로 즉시 처리하고, .reaction은 scale 1.05에서 1로 0.8초 ease none. 반응 뒤에도 발언 오디오의 여운이 이어지게 해줘.
```

### 한국어 · Codex
```text
<파일>에 리액션 컷을 구현해. 2.1초에 .speaker 숨김, .reaction 표시(tl.set), .reaction scale 1.05에서 1로 0.8초 none. 2.0초, 2.15초, 2.6초, 3.0초 시점을 캡처해 2.0초는 발언자, 2.15초부터 반응 화면인지, 2.6초에 scale이 중간값인지 확인해.
```

### English · Claude Code
```text
Add a Reaction Cut to <target> after the line ends at 2.0s. At 2.1s hide .speaker and show .reaction with tl.set, and let .reaction ease from scale 1.05 to 1 over 0.8s. Keep the tail of the speech audio playing over the reaction.
```

### English · Codex
```text
Implement Reaction Cut in <file>. At 2.1s hide .speaker and show .reaction via tl.set; .reaction scale 1.05 to 1 over 0.8s ease none. Capture at 2.0s, 2.15s, 2.6s, and 3.0s to confirm the speaker at 2.0s, the reaction from 2.15s, and a mid-range scale at 2.6s.
```

예시 / Example: 리액션 컷를 `.hero`에 적용해. / Apply Reaction Cut to `.hero`.

## 적용 / Application

- HyperFrames: 2.1초에 tl.set으로 즉시 교체하고 반응 화면 scale만 0.8초 동안 느리게 낮춘다. seek 시 오디오 트랙도 같은 시각을 기준으로 한다
- ReelForge: 씬 워커 브리프에 컷 시각(발언 종료 +0.1초)과 반응 유지 800ms를 싣는다
- Scrolline Deck: scrub에서는 컷을 진행률 임계값 하나에서 교체하고 반응 확대는 ease-out으로 한 번만 진행한다

조합 / Pair with: [컷어웨이 · Cutaway](../cutaway/) · [숏 리버스 숏 · Shot Reverse Shot](../shot-reverse-shot/) · [스매시 컷 · Smash Cut](../smash-cut/)

출처 / Sources: [Adobe](https://www.adobe.com/creativecloud/video/post-production/cuts-in-film.html) (unknown) · [Adobe](https://www.adobe.com/creativecloud/video/production/cinematography/camera-shots-and-angles.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
