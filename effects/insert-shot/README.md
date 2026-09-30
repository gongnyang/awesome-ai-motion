# Nº 170 인서트 컷 · Insert Shot

> 클립 렌더 예정 / Clip rendering planned.

**전체 행동 사이에 같은 공간의 손이나 물건 같은 세부 화면이 짧게 들어간다**

A close-up of a hand or object briefly cuts in between wide action.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 설명, 강조 | 설명 영상, 제품 시연, 숏폼 | gsap |

다른 이름 / Also known as: Insert Shot / Cut-in, 인서트

## 선택 기준 / Selection

전체 행동 사이에 손이나 물건의 세부가 잠깐 들어와 핵심 단서를 또렷하게 보여 준다 / Makes an important clue in the action unmistakable.

- 제품 조작 중 버튼이나 화면의 작은 부분을 확대해 보여 줄 때 / To magnify a small button or screen area during a product operation
- 요리, 공정처럼 손 동작 중 재료나 도구의 디테일을 보충할 때 / To supplement a material or tool detail during cooking or process footage

좋은 예 / Good: 전체 장면 중 2.0초에 세부 화면으로 0ms 컷, 1.0초 유지한 뒤 원래 장면으로 복귀하고 0.7초 더 유지한다
나쁜 예 / Bad: 세부 화면이 0.4초 이하라 읽히지 않거나, 원 장면과 세부의 시간이 이어지지 않아 동작이 반복된다
주의 / Avoid: 세부 화면은 최소 0.8초는 유지한다 · 같은 동작의 시간 흐름을 이어 붙인다(되감기 없이)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 입출 컷 | 0ms | 고정 | 즉시 |
| 세부 홀드 | 1000ms | 800~1400ms | 읽는 시간 |
| 복귀 홀드 | 700ms | 500~1000ms | 맥락 되찾기 |
| 삽입 시각 | 동작 정점 직전 |  | 핵심 동작 0.1초 전 |
| 세부 확대율 | 3.0 | 2.5~4 | 원본 대비 crop |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
tl.set('.detail', { autoAlpha: 1 }, 2.0);
tl.set('.wide', { autoAlpha: 0 }, 2.0);
tl.set('.wide', { autoAlpha: 1 }, 3.0);
tl.set('.detail', { autoAlpha: 0 }, 3.0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 영상에 인서트 컷을 넣어줘. 2.0초에 .wide를 숨기고 세부 화면 .detail을 표시해 1.0초 유지한 뒤 3.0초에 원래 장면으로 돌아와. 두 레이어는 같은 시간 흐름으로 재생하고 전환 트윈은 없이 tl.set만 써. 복귀 뒤 0.7초 더 유지해줘.
```

### 한국어 · Codex
```text
<파일>에 인서트 컷을 구현해. 2.0초 .detail 표시 및 .wide 숨김, 3.0초 반대로 복귀, 모두 tl.set. 1.9초, 2.5초, 3.1초, 3.8초 시점을 캡처해 2.5초에 세부 화면이 보이는지, 3.1초에 원 장면이 되돌아왔는지, 두 화면의 동작 진행이 연속인지 확인해.
```

### English · Claude Code
```text
Add an Insert Shot to <target>. At 2.0s hide .wide and show the detail layer .detail for 1.0s, then return to the wide shot at 3.0s and hold 0.7s more. Both layers play on the same time flow. Use tl.set only, no transition tweens.
```

### English · Codex
```text
Implement Insert Shot in <file>. At 2.0s show .detail and hide .wide; at 3.0s reverse, all via tl.set. Capture at 1.9s, 2.5s, 3.1s, and 3.8s to confirm the detail is visible at 2.5s, the wide shot is back at 3.1s, and that action progress is continuous across both layers.
```

예시 / Example: 인서트 컷를 `.hero`에 적용해. / Apply Insert Shot to `.hero`.

## 적용 / Application

- HyperFrames: .wide와 .detail 두 레이어를 같은 사건 시계로 재생하고 가시성만 tl.set으로 교체한다. 두 레이어의 내부 타임라인은 seek로 맞춘다
- ReelForge: 씬 워커 브리프에 삽입 시각 2.0초, 세부 홀드 1.0초, 복귀 홀드 0.7초를 싣는다
- Scrolline Deck: scrub에서는 진행률 구간(0.4~0.6)에서만 세부 레이어를 보이고 그 구간 진행률은 정지하지 않는다

조합 / Pair with: [컷어웨이 · Cutaway](../cutaway/) · [좌표 줌 · Zoom to Detail](../zoom-to-detail/) · [동작 연결 컷 · Match on Action](../match-on-action/)

출처 / Sources: [Adobe](https://www.adobe.com/creativecloud/video/post-production/cuts-in-film.html) (unknown) · [Adobe](https://www.adobe.com/creativecloud/video/production/cinematography/camera-shots-and-angles.html) (unknown) · motion dictionary 2-transitions-camera.md#10. 인서트 · Insert Shot / Cut-in (own)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
