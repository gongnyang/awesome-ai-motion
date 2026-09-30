# Nº 131 크로매틱 와이프 · Chromatic Wipe

> 클립 렌더 예정 / Clip rendering planned.

**색 채널이 벌어지며 화면이 밀려 나가고 새 화면에서 다시 합쳐지는 전환**

Color channels split apart as the frame slides away, then recombine on the new frame.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 주목 끌기 | 숏폼, 제품 시연, 웹 UI | css |

다른 이름 / Also known as: 색수차 와이프

## 선택 기준 / Selection

디지털 속도감과 렌즈 왜곡. 빠르고 차가운 기술적 인상 / Digital speed and lens distortion: a cold, technical impression.

- 기술 제품이나 사이버 톤의 영상에서 빠르게 장면을 넘길 때 / Move quickly between scenes in a tech or cyber-toned video.
- 와이프에 한 겹 더 질감을 얹고 싶을 때 / Add an extra layer of texture on top of a wipe.

좋은 예 / Good: 빨강 복사본이 왼쪽으로 최대 80px, 파랑 복사본이 오른쪽으로 80px 벌어지며 화면이 밀리고, 0.5초 안에 새 화면에서 채널이 합쳐진다
나쁜 예 / Bad: 변위를 200px 넘게 벌려 세 화면이 따로 보이거나, 밝은 글자가 색 번짐으로 읽히지 않는다
주의 / Avoid: 채널 변위 최대 80px 초과 금지(1920px 기준) · 글자 장면은 변위 정점을 0.1초 이내로 끊는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 0.5s | 0.35~0.8s | 와이프와 변위가 함께 |
| 최대 채널 변위 | 80px | 30~100px | R는 음의 x, B는 양의 x |
| 와이프 방향 | 좌에서 우 | 4방향 | 변위 방향과 맞춘다 |
| 합성 | screen 또는 plus-lighter |  | 채널 복사본 합성 |

이징 / Ease: `power3.inOut`

## 구현 / Implementation (GSAP)

```js
tl.to('.r', { x: -80, duration: 0.25, ease: 'power2.out' }, 0)
  .to('.b', { x: 80, duration: 0.25, ease: 'power2.out' }, 0)
  .to('.clip', { clipPath: 'inset(0 0 0 100%)', duration: 0.5, ease: 'power3.inOut' }, 0)
  .to(['.r', '.b'], { x: 0, duration: 0.25, ease: 'power2.in' }, 0.25);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 크로매틱 와이프를 만들어줘. A의 빨강 복사본을 -80px, 파랑 복사본을 +80px로 0.25초 동안 벌리면서 왼쪽에서 오른쪽으로 0.5초 동안 와이프하고, 뒤 절반 0.25초에 채널이 0으로 합쳐지게 해. 이징 power3.inOut, mix-blend-mode screen, paused 타임라인 하나.
```

### 한국어 · Codex
```text
<파일>에 chromatic wipe를 넣어. R 복사본 x -80px, B 복사본 x +80px (각 0.25s power2.out), 동시에 inset clipPath 와이프 0.5s power3.inOut, 이후 채널 x를 0으로 복귀 (0.25s). 0.25초 시점 캡처에서 색 분리가 보이는지, 0.5초에 분리가 사라졌는지, 텍스트 가독성이 유지되는지 확인해.
```

### English · Claude Code
```text
Build a chromatic wipe from <targetA> to <targetB>. Split A's red copy to -80px and blue copy to +80px over 0.25 seconds while wiping left to right over 0.5 seconds, then bring the channels back to 0 in the last 0.25 seconds. Use power3.inOut, mix-blend-mode screen, one paused timeline.
```

### English · Codex
```text
Add a chromatic wipe in <file>. R copy x to -80px, B copy x to +80px (0.25s each, power2.out), with an inset clipPath wipe over 0.5s power3.inOut, then return channels to x 0 (0.25s). Capture at 0.25 seconds to confirm visible color separation, at 0.5 seconds to confirm it has closed, and check text legibility.
```

예시 / Example: 크로매틱 와이프를 `.hero`에 적용해. / Apply Chromatic Wipe to `.hero`.

## 적용 / Application

- HyperFrames: R, G, B 복사본은 mix-blend-mode: screen으로 겹치고 x만 타임라인에서 움직인다. 복사본이 3배 무거워지므로 해상도가 큰 영상은 미리 확인한다
- ReelForge: 씬 워커 브리프에 maxShiftPx, wipeMs, direction을 실어 채널 복사 레이어가 씬 안에서만 생성되게 한다
- Scrolline Deck: 진행률 0~0.5에 변위를 0에서 80px로, 0.5~1에 80px에서 0으로 삼각형 매핑한다. 스프링은 쓰지 않는다

조합 / Pair with: [RGB 분리 글리치 · RGB Split Glitch](../glitch-rgb-split/) · [와이프 · Wipe](../wipe/) · [글리치 전환 · Glitch Transition](../glitch-transition/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/chromatic-aberration-wipe/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/chromatic-radial-split/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/transitions/css-distortion.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
