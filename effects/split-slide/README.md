# Nº 143 스플릿 슬라이드 · Split Slide

![스플릿 슬라이드 · Split Slide](preview.gif)

[MP4](clip.mp4) · [HTML](index.html)

**두 반쪽 장면이 서로 반대쪽으로 벌어지거나 모여 다음 장면과 교체된다**

Two halves of the frame slide apart or together in opposite directions and swap scenes.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 전환, 순서·흐름 | 발표, 설명 영상, 웹 UI | gsap |

다른 이름 / Also known as: 반쪽 슬라이드

## 선택 기준 / Selection

화면이 문처럼 반으로 열리거나 닫힌다. 좌우 대칭의 정돈된 교체를 만든다 / Gives openings and closings a clear, symmetric rhythm.

- 오프닝이나 섹션 시작에서 문이 열리듯 새 화면을 보여 줄 때 / When opening a new screen like doors at a section start
- 좌우 대칭 레이아웃의 화면을 정돈된 느낌으로 교체할 때 / When swapping a symmetric layout with a tidy, orderly feel

좋은 예 / Good: 이전 장면이 가운데에서 갈라져 좌우로 각각 화면 폭의 50%씩 0.65초 동안 밀려 나가고, 아래에서 새 장면이 드러난다
나쁜 예 / Bad: 양쪽 속도가 달라 중심선이 어긋나거나, 갈라진 틈에 검은 배경이 비친다
주의 / Avoid: 좌우 이동량은 같게 둔다(비대칭이면 의도 없는 흔들림) · 틈 뒤에는 반드시 다음 장면을 미리 깔아 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 650ms | 500~900ms | easeInOutCubic |
| 이동량 | 각 960px | 각 960px | 1920px 폭의 절반 |
| 방향 | 가로(수평 분할) | 가로 또는 세로 | 내용 흐름과 맞춘다 |
| 모드 | Out(열림) | In / Out / InOut | In은 닫힘, Out은 열림 |
| 시차 | 0ms | 0~60ms | 양쪽 동시가 기본 |

이징 / Ease: `power3.inOut`

## 구현 / Implementation (GSAP)

```js
tl.to('.half-l', { x: -960, duration: 0.65, ease: 'power3.inOut' }, 0);
tl.to('.half-r', { x: 960, duration: 0.65, ease: 'power3.inOut' }, 0);
// 아래에는 .next가 이미 있고, 끝난 뒤 반쪽은 hidden
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면을 좌우로 갈라 여는 스플릿 슬라이드 전환을 넣어줘. 이전 장면을 반쪽 두 개로 복제해 왼쪽은 x -960, 오른쪽은 x +960으로 0.65초 동안 power3.inOut으로 밀고, 아래에는 다음 장면이 미리 깔려 있게 해. 양쪽 트윈은 같은 시작 시각, 끝난 뒤 반쪽은 숨겨. 타임라인 하나로 seek 가능하게.
```

### 한국어 · Codex
```text
<파일>의 전환부에 스플릿 슬라이드를 구현해. .half-l x -960, .half-r x 960, duration 0.65, ease power3.inOut, 같은 position 0. 0.15초, 0.35초, 0.65초 시점을 캡처해 중심 틈이 좌우 대칭으로 벌어지는지, 틈 뒤에 다음 장면이 보이는지 확인해.
```

### English · Claude Code
```text
Add a Split Slide transition to <target>. Duplicate the previous scene into two halves; slide the left half to x -960 and the right half to x +960 over 0.65s with power3.inOut, starting at the same position. The next scene must already sit underneath. Hide the halves when done. One seekable GSAP timeline.
```

### English · Codex
```text
Implement Split Slide in <file>. .half-l x -960, .half-r x 960, duration 0.65, ease power3.inOut, both at position 0. Capture at 0.15s, 0.35s, and 0.65s to confirm the center gap opens symmetrically and that the next scene is visible through it.
```

예시 / Example: 스플릿 슬라이드를 `.hero`에 적용해. / Apply Split Slide to `.hero`.

## 적용 / Application

- HyperFrames: 이전 장면을 clip-path inset으로 잘라 반쪽 두 개로 복제하고 x만 움직인다. paused 타임라인에서 두 트윈을 같은 시작 시각에 둔다
- ReelForge: 씬 워커 브리프에 방향(가로/세로), 모드(열림/닫힘), 지속 650ms를 파라미터로 싣는다
- Scrolline Deck: scrub에서 이동량을 진행률 0~1에 선형 매핑하면 문을 손으로 여는 느낌이 나온다. 이징은 ease-out만 쓴다

조합 / Pair with: [와이프 · Wipe](../wipe/) · [마스크 전환 · Shape Mask Transition](../iris-mask/) · [푸시 전환 · Push](../push-transition/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/splitSlideInHorizontal.glsl) (MIT) · [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/splitSlideInVertical.glsl) (MIT) · [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/splitSlideOutHorizontal.glsl) (MIT) · [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/splitSlideOutVertical.glsl) (MIT) · [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/splitSlideInOutHorizontal.glsl) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
