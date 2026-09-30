# Nº 207 TV 노이즈 전환 · TV Static Transition

> 클립 렌더 예정 / Clip rendering planned.

**무채색 잡음이 화면을 잠깐 덮거나 장면과 섞인 뒤 다음 장면이 나타난다**

Gray noise covers the screen briefly or blends with the scene before the next one appears.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 기본 | 전환, 분위기 | 숏폼, 설명 영상 | webgl |

다른 이름 / Also known as: TV static interruption, TV 잡음 삽입, Static blended fade, 잡음 혼합 페이드

## 선택 기준 / Selection

채널이 바뀌거나 신호가 끊기는 순간. 짧게 화면을 잡음으로 덮는다 / Evokes a channel change or signal loss.

- 뉴스, 레트로, 호러 톤에서 화면을 다른 채널로 넘길 때 / In news, retro, or horror tones when switching to another channel
- 짧은 신호 단절로 장면 전환 충격을 줄 때 / To deliver a short signal drop as a scene-change jolt

좋은 예 / Good: 500ms 동안 잡음 opacity가 0에서 1로 올라 100ms 정점에서 장면을 바꾸고, 다시 0으로 빠지며 다음 장면이 나타난다
나쁜 예 / Bad: 잡음 정점이 너무 길어 화면이 죽어 보이거나, 프레임마다 시드가 같아 노이즈가 멈춰 보인다
주의 / Avoid: 잡음 정점은 100~150ms로 짧게 · 흑백 잡음 위에 다른 색 오버레이를 쌓지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 500ms | 300~700ms | 전체 |
| 정점 유지 | 100ms | 80~150ms | 장면 교체 지점 |
| 잡음 opacity | 1 | 0.8~1 | 정점 |
| 시드 | 프레임 번호 | 고정 함수 | 프레임마다 변화 |
| 오디오 | 화이트 노이즈 120ms | 80~150ms | 정점에 맞춤 |

이징 / Ease: `power1.inOut`

## 구현 / Implementation (GSAP)

```js
tl.to('.static', { opacity: 1, duration: 0.2, ease: 'power1.in' }, 0);
tl.set('.prev', { autoAlpha: 0 }, 0.2).set('.next', { autoAlpha: 1 }, 0.2);
tl.to('.static', { opacity: 0, duration: 0.2, ease: 'power1.out' }, 0.3);
// 잡음 타일 위치는 프레임 f마다 (f * 37) % 64 로 이동
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면 전환에 TV 노이즈 전환을 넣어줘. 전체 500ms에서 .static을 200ms 동안 opacity 0에서 1로 올리고, 200ms 시점에 장면을 교체한 뒤 300ms부터 200ms 동안 0으로 내려. 잡음은 프레임 번호를 시드로 그린 캔버스를 쓰고 Math.random은 쓰지 마. 타임라인 하나로 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 TV 노이즈 전환을 구현해. .static opacity 0에서 1 (0~0.2초, power1.in), 0.2초에 .prev를 숨기고 .next를 표시, 0.3초부터 0.2초간 0으로. 잡음은 프레임 시드 캔버스. 0.1초, 0.2초, 0.3초, 0.5초 시점을 캡처해 정점에서 전체가 잡음인지, 0.5초에 잡음이 없는지, 두 번 렌더해도 같은 프레임인지 확인해.
```

### English · Claude Code
```text
Add a TV Static Transition to <target>. Over 500ms, raise .static opacity from 0 to 1 in 200ms, swap scenes at 200ms, then lower it back to 0 over 200ms starting at 300ms. Draw the noise on a canvas seeded by the frame number and avoid Math.random. Keep it on one seekable GSAP timeline.
```

### English · Codex
```text
Implement TV Static Transition in <file>. .static opacity 0 to 1 over 0 to 0.2s (power1.in), hide .prev and show .next at 0.2s, then fade to 0 over 0.2s from 0.3s. Noise is a frame-seeded canvas. Capture at 0.1s, 0.2s, 0.3s, and 0.5s to confirm full noise at the peak, none at 0.5s, and identical frames across two renders.
```

예시 / Example: TV 노이즈 전환를 `.hero`에 적용해. / Apply TV Static Transition to `.hero`.

## 적용 / Application

- HyperFrames: 잡음은 캔버스에서 프레임 번호를 시드로 그리고 opacity만 타임라인이 조절한다. 0.2초에 장면을 교체하고 seek 시 같은 잡음이 나오게 한다
- ReelForge: 씬 워커 브리프에 지속 500ms, 정점 유지 100ms, 소리 120ms를 싣고 잡음은 프레임 시드 캔버스로 요구한다
- Scrolline Deck: scrub에서는 잡음 시드를 진행률 구간 번호로 바꾸고 opacity는 진행률 0.4~0.6에서 1을 유지한다

조합 / Pair with: [글리치 전환 · Glitch Transition](../glitch-transition/) · [노이즈 띠 와이프 · Static Band Wipe](../static-band-wipe/) · [TV 트래킹 전환 · TV Tracking Transition](../tv-tracking-transition/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/TVStatic.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT) · [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/StaticFade.glsl) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
