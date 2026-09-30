# Nº 059 클립 리빌 · Clip Reveal

> 클립 렌더 예정 / Clip rendering planned.

**경계 안에서 보이는 영역을 넓혀 내용을 한쪽에서 드러내는 등장**

The visible region inside a boundary widens to reveal content from one side.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 기본 | 설명, 순서·흐름 | 설명 영상, 웹 UI, 스크롤덱, 발표 | gsap |

## 선택 기준 / Selection

경계를 따라 내용이 열리며 읽는 방향을 이끈다 / Content opens along its edge and guides the reading direction.

- 제목·이미지가 아래에서 위로 열리듯 나타날 때 / When a title or image opens upward like a shutter
- 차트 막대나 선이 방향성 있게 공개될 때 / When bars or lines are revealed with a direction

좋은 예 / Good: 이미지가 clip-path inset(100% 0 0 0)에서 inset(0)으로 350ms 동안 위로 열린다
나쁜 예 / Bad: clip-path 시작 상태가 CSS에 없어 첫 프레임에 전체가 보였다가 사라진다
주의 / Avoid: 시작 상태를 CSS에 미리 넣는다 · 방향은 읽는 방향과 맞춘다 · 길이 0.25~0.6초

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 길이 | 350ms | 250~600ms | 공개 시간 |
| inset | 100%→0% | 방향별 | 상향 공개 시 top |
| 방향 | 상향 | 상/하/좌/우 | 읽는 방향 기준 |
| 이징 | power3.out | power2~power4.out | 끝이 부드럽게 |

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.img', { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.35, ease: 'power3.out' }, 0.3);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상> 이미지에 클립 리빌을 넣어줘. 0.3초부터 0.35초 동안 clipPath를 inset(100% 0% 0% 0%)에서 inset(0% 0% 0% 0%)로 power3.out으로 열어 위쪽으로 공개해. 초기값을 CSS에도 같이 넣어 첫 프레임 깜빡임을 막아. paused 타임라인에 넣어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 clip-reveal을 적용해. fromTo clipPath inset(100% 0 0 0)→inset(0 0 0 0), 0.35s, power3.out, position 0.3, CSS 초기값도 동일. 0.0초·0.4초·0.8초를 캡처해 0초에 보이지 않고 0.8초에 전체가 보이는지 확인해.
```

### English · Claude Code
```text
Add a clip reveal to the <target> image with GSAP. From 0.3s over 0.35s open clipPath from inset(100% 0% 0% 0%) to inset(0% 0% 0% 0%) with power3.out, revealing upward. Put the same initial value in CSS to avoid a first-frame flash. Paused timeline.
```

### English · Codex
```text
Apply clip-reveal to <target> in <file>. fromTo clipPath inset(100% 0 0 0) to inset(0 0 0 0), 0.35s, power3.out, position 0.3, with the same initial value in CSS. Capture at 0s, 0.4s and 0.8s to check it is hidden at 0s and fully visible at 0.8s.
```

예시 / Example: 클립 리빌를 `.hero`에 적용해. / Apply Clip Reveal to `.hero`.

## 적용 / Application

- HyperFrames: clipPath 문자열 보간은 형식이 같아야 안전하다(inset 4값). fromTo로 시작을 명시하고 CSS에도 같은 초기값을 둔다
- ReelForge: 브리프에 방향·길이·대상 목록을 싣는다. 텍스트 줄 단위 공개는 줄마다 overflow 컨테이너 사용
- Scrolline Deck: scrub에서는 inset을 진행률에 선형으로 매핑하고 ease-out. 되감기 시 자연스럽게 닫힌다

조합 / Pair with: [마스크 리빌 · Mask Reveal](../mask-reveal/) · [와이프 · Wipe](../wipe/) · [블라인드 리빌 · Blinds Reveal](../blinds-reveal/)

출처 / Sources: motion dictionary 1-principles.md#8. 2D 속성 기본 동작 (own)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
