# Nº 221 푸시인 · Push-in

![푸시인 · Push-in](preview.gif)

[MP4](clip.mp4) · [HTML](index.html)

**문장이나 장면의 특정 중심을 유지하면서 카메라가 천천히 다가가는 움직임**

A camera move that slowly approaches a fixed focal point in a sentence or scene.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 가상 카메라 · CAMERA | 기본 | 강조, 설명 | 설명 영상, 발표, 스크롤덱 | gsap |

다른 이름 / Also known as: 돌리 인, 카메라 접근, Push in, 푸시 인, Punch-in, Crash zoom, Multiplane Dolly, 다층 돌리 푸시

## 선택 기준 / Selection

핵심어의 중요도와 집중을 높인다 / Increases the emphasis on and attention to a key word.

- 문장 전체를 읽은 뒤 핵심어에 집중시킬 때 / When focusing on a key word after showing the full sentence
- 제품이나 대상의 중요한 부분을 가까이 보여줄 때 / When showing an important part of a product or subject up close

좋은 예 / Good: AI는 다음 말을 고른다 문장의 다음 말 중심으로 1.6배 다가가 주변 글자가 가장자리로 이동한다
나쁜 예 / Bad: 핵심어를 중심에서 벗어나게 확대하거나 주변 글자를 읽기 전에 확대한다
주의 / Avoid: 핵심어를 중심에서 벗어나게 확대하거나 주변 글자를 읽기 전에 확대한다 · 최종 상태를 0.5초 미만으로 유지하지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 확대율 | 1.6 | 1.3~1.7 | 핵심어 크기 증가 |
| 확대 중심 | 520.57px 85px | 핵심어 중앙 | 문장 내부 좌표 |
| 동작 시간 | 2.0s | 1.4~2.1s | 핵심어가 따라갈 수 있는 속도 |
| 이징 | power1.inOut | none / power1.inOut | 차분한 출발과 정지 |

## 구현 / Implementation (GSAP)

```js
tl.to('#sentence', {scale: 1.6, duration: 2.0, ease: 'power1.inOut'}, .3);
tl.to('#note', {opacity: 1, duration: .2}, 2.3);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 푸시인 효과를 GSAP 코어로 만들어줘. AI는 다음 말을 고른다 문장의 다음 말 중심으로 1.6배 다가가 주변 글자가 가장자리로 이동한다 3초 클립에서 0.3초까지 시작 상태를 유지하고 다음 기본값을 적용해: 확대율 1.6, 확대 중심 520.57px 85px, 동작 시간 2.0s, 이징 power1.inOut. 마지막 0.5초 이상은 완성 상태로 정지하고 시간 제어는 paused 타임라인 하나로 해.
```

### 한국어 · Codex
```text
<파일>의 scene 내부에 푸시인를 적용해. 확대율는 1.6. 확대 중심는 520.57px 85px. 동작 시간는 2.0s. 이징는 power1.inOut. 0.23초, 1.23초, 2.9초를 캡처해 시작 상태와 중간 변화, AI는 다음 말을 고른다 문장의 다음 말 중심으로 1.6배 다가가 주변 글자가 가장자리로 이동한다의 최종 상태를 확인해. 2.5초와 2.9초의 장면이 같은지, 의도한 카메라 프레임 외의 잘림과 라벨 겹침이 없는지 검증해.
```

### English · Claude Code
```text
Create a Push-in effect on <target> using GSAP core. Push in to 1.6 times the scale around "next word" in "AI picks the next word", moving the surrounding letters toward the edges. In a 3-second clip, hold the initial state until 0.3 seconds and apply these defaults: scale 1.6, zoom origin 520.57px 85px, duration 2.0s, ease power1.inOut. Hold the completed state for at least the final 0.5 seconds, and control timing with a single paused timeline.
```

### English · Codex
```text
Apply Push-in inside the scene in <file>. Use these settings: scale 1.6, zoom origin 520.57px 85px, duration 2.0s, ease power1.inOut. Capture at 0.23, 1.23, and 2.9 seconds to check the initial state, intermediate changes, and the final state: Push in to 1.6 times the scale around "next word" in "AI picks the next word", moving the surrounding letters toward the edges. Verify that the scenes at 2.5 and 2.9 seconds match, with no clipping beyond the intended camera frame or overlapping labels.
```

예시 / Example: 푸시인를 `.hero`에 적용해. / Apply Push-in to `.hero`.

## 적용 / Application

- HyperFrames: 장면 내부 래퍼를 하나의 paused GSAP 타임라인으로 움직이고 seek 시 같은 좌표를 재현한다.
- ReelForge: 장면 내부 요소의 transform 키프레임에 위 기본값을 적용하고 3초 끝까지 최종 상태를 유지한다.
- Scrolline Deck: 0.3~2.5초 동작 구간을 스크롤 진행률 0.1~0.83에 대응시키고 끝 구간은 최종 상태로 둔다.

조합 / Pair with: [단어 강조 · Word Emphasis](../word-emphasis/) · [스포트라이트 · Spotlight](../spotlight/) · [좌표 줌 · Zoom to Detail](../zoom-to-detail/)

출처 / Sources: [GSAP Timeline.to()](https://gsap.com/docs/v3/GSAP/Timeline/to()/) (공식 API 문서 참조) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/push-in/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/pull-back-reveal/registry-item.json) (Apache-2.0) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/work-with-layers/camera-layer/cameras-lights-points-interest.html) (unknown) · [greensock/GSAP](https://gsap.com/docs/v3/Eases/ExpoScaleEase/) (GSAP Standard License) · [Apple](https://www.apple.com/apple-events/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
