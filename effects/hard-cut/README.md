# Nº 167 하드컷 · Hard Cut

> 클립 렌더 예정 / Clip rendering planned.

**겹침 없이 바로 다음 화면으로 바꾸는 편집**

Switches straight to the next picture with no overlap.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 전환, 순서·흐름 | 설명 영상, 숏폼, 발표 | gsap |

다른 이름 / Also known as: Hard cut / Semantic boundary, 하드컷·의미 경계

## 선택 기준 / Selection

새 장면의 시작과 의미 경계를 즉시 알린다. 리듬을 끊어 새 화제를 연다 / Marks the start of a new scene and a meaning boundary at once. It cuts rhythm to open a new topic.

- 주제가 바뀌는 지점을 분명히 나눌 때 / When the topic changes and the break should be clear
- 비트에 맞춰 장면을 빠르게 바꿀 때 / When cutting scenes quickly on the beat
- 놀람이나 대비를 주고 싶을 때 / When a surprise or contrast is wanted

좋은 예 / Good: 장면 A가 3.0초에 끝나고 같은 프레임에 장면 B가 시작해 3초 동안 유지된다
나쁜 예 / Bad: 연속 동작 중간을 잘라 튀는 컷이 되거나, 컷 뒤 화면 유지가 짧아 읽을 수 없다
주의 / Avoid: 컷 뒤 최소 유지 1.5초 · 동작 중간을 자르지 않는다 · 같은 구도 연속 컷 금지(점프컷 오해)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전환 길이 | 0ms | 0 | 겹침 없음 |
| 컷 뒤 유지 | 3.0s | 1.5~5s | 새 화면 읽는 시간 |
| 컷 간격 | 3.0s | 1.5~5s | 반복 시 일정하게 |
| 음악 정렬 | 비트 위 | 프레임 정확 | 컷은 비트에 맞춘다 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
tl.set('.sceneA', { autoAlpha: 0 }, 3.0)
  .set('.sceneB', { autoAlpha: 1 }, 3.0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상> 장면 A에서 B로 하드컷을 넣어줘. 3.0초 같은 프레임에 A를 autoAlpha 0, B를 autoAlpha 1로 tl.set하고 전환 효과는 넣지 마. 컷 뒤 B는 3초 이상 유지해. paused 타임라인에 넣어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 hard-cut을 적용해. tl.set(A, autoAlpha 0, 3.0)과 tl.set(B, autoAlpha 1, 3.0). 2.96초·3.0초·3.04초 프레임을 캡처해 A와 B가 동시에 보이는 프레임과 둘 다 비는 프레임이 0개인지 확인해.
```

### English · Claude Code
```text
Add a hard cut from scene A to B in <target> with GSAP. At 3.0s use tl.set to set A to autoAlpha 0 and B to autoAlpha 1 in the same frame, with no transition. Hold B for at least 3 seconds. Paused timeline.
```

### English · Codex
```text
Apply hard-cut to <target> in <file>. tl.set(A, autoAlpha 0, 3.0) and tl.set(B, autoAlpha 1, 3.0). Capture frames at 2.96s, 3.0s and 3.04s and check there are 0 frames where both are visible and 0 frames where both are empty.
```

예시 / Example: 하드컷를 `.hero`에 적용해. / Apply Hard Cut to `.hero`.

## 적용 / Application

- HyperFrames: tl.set으로 같은 시각에 A 숨김·B 표시를 함께 건다. 30fps에서 3.0초는 90프레임 정확이다. 컷 프레임이 어긋나면 한 프레임이 비어 보인다
- ReelForge: 씬 워커 브리프에 씬 경계 시각과 컷 종류(hard)를 적어 전환 워커가 겹침을 만들지 않게 한다
- Scrolline Deck: 스크롤에서는 진행률 임계점(예 0.5)에서 장면 토글. 되감기도 같은 임계점에서 돌아오도록 한다

조합 / Pair with: [점프 컷 · Jump Cut](../jump-cut/) · [스매시 컷 · Smash Cut](../smash-cut/) · [매치컷 · Match Cut](../match-cut/)

출처 / Sources: motion dictionary 4-explainer-learning.md#C. 템포·리듬·편집과 비트 동기 (own)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
