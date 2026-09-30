# Nº 173 렌즈 플레어 전환 · Lens Flare Transition

> 클립 렌더 예정 / Clip rendering planned.

**강한 광점과 광학 링이 화면을 가로질러 컷을 덮은 뒤 사라진다**

A strong light point and optical rings cross the frame, cover the cut, and fade away.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 분위기 | 설명 영상, 제품 시연, 숏폼 | webgl |

다른 이름 / Also known as: Lens flare bridge, 렌즈 플레어 브리지

## 선택 기준 / Selection

강한 빛이 화면을 가로질러 컷을 덮는다. 카메라를 통해 공간을 넘어간 듯하다 / Suggests spatial travel through a camera and light.

- 영화 톤의 오프닝이나 제품 공개에서 빛으로 컷을 덮을 때 / For cinematic openers or product reveals where light covers the cut
- 장소가 바뀌는 여행, 일출 장면에서 이동감을 줄 때 / To convey movement in travel or sunrise scenes when the location changes

좋은 예 / Good: 광점이 500ms 동안 왼쪽 위에서 오른쪽 아래로 지나며 피크 밝기 2.0에서 컷을 덮고, 링과 가로 스트릭이 뒤따라 사라진다
나쁜 예 / Bad: 광점이 너무 작아 컷이 가려지지 않거나, 화면 전체가 하얗게 오래 유지된다
주의 / Avoid: 피크 흰 화면은 100ms 이하 · 플레어 색은 장면 색 온도에 맞춘다(따뜻한 장면에 노란 플레어)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 500ms | 400~700ms | easeInOutSine |
| 피크 밝기 | 2.0 | 1.5~2.5 | 가산 합성 |
| 광점 크기 | 화면 높이의 40% | 30~60% | 링 3개 |
| 컷 시점 | 250ms | 피크와 같음 |  |
| 이동 | (-300,-200)에서 (2200,1300) |  | 대각선 |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.flare', { x: -300, y: -200, opacity: 0 }, { x: 2200, y: 1300, duration: 0.5, ease: 'sine.inOut' }, 0);
tl.to('.flare', { opacity: 1, duration: 0.25, ease: 'sine.in' }, 0).to('.flare', { opacity: 0, duration: 0.25, ease: 'sine.out' }, 0.25);
tl.set('.prev', { autoAlpha: 0 }, 0.25).set('.next', { autoAlpha: 1 }, 0.25);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면 전환에 렌즈 플레어를 넣어줘. .flare(광점과 링 3개)를 mix-blend-mode plus-lighter로 얹고 (-300,-200)에서 (2200,1300)까지 0.5초 sine.inOut으로 이동시켜. opacity는 0.25초에 1까지 올랐다가 내려가고, 정점인 0.25초에 .prev를 숨기고 .next를 표시해. 흰 화면은 100ms를 넘기지 마.
```

### 한국어 · Codex
```text
<파일>에 렌즈 플레어 전환을 구현해. .flare x -300에서 2200, y -200에서 1300, 0.5초 sine.inOut, opacity 0에서 1(0.25초)에서 0(0.25초), 0.25초에 장면 교체. 0.12초, 0.25초, 0.38초, 0.5초 시점을 캡처해 정점에서 컷이 가려지는지, 0.5초에 플레어가 없는지 확인해.
```

### English · Claude Code
```text
Add a Lens Flare Transition to <target>. Overlay .flare (a light point plus three rings) with mix-blend-mode plus-lighter, moving from (-300,-200) to (2200,1300) over 0.5s with sine.inOut. Opacity rises to 1 by 0.25s and falls back; at 0.25s swap .prev for .next. Keep the pure white frame under 100ms.
```

### English · Codex
```text
Implement Lens Flare Transition in <file>. .flare x -300 to 2200 and y -200 to 1300 over 0.5s sine.inOut; opacity 0 to 1 in 0.25s then 1 to 0 in 0.25s; swap scenes at 0.25s. Capture at 0.12s, 0.25s, 0.38s, and 0.5s to confirm the cut is hidden at the peak and no flare remains at 0.5s.
```

예시 / Example: 렌즈 플레어 전환를 `.hero`에 적용해. / Apply Lens Flare Transition to `.hero`.

## 적용 / Application

- HyperFrames: 플레어를 mix-blend-mode screen 또는 plus-lighter로 얹는다. 이동과 opacity를 한 타임라인에 두고 컷은 피크 시각 0.25초에 tl.set
- ReelForge: 씬 워커 브리프에 광점 크기 40%, 피크 밝기 2.0, 컷 시점 250ms, 이동 방향을 싣는다
- Scrolline Deck: scrub에서는 opacity를 삼각 곡선(진행률 0.5 정점)으로, 컷은 0.5에서 교체한다

조합 / Pair with: [라이트 리크 전환 · Light Leak Transition](../light-leak-transition/) · [광선 전환 · Light Ray Transition](../light-ray-transition/) · [줌 플래시 · Zoom Flash](../zoom-flash/)

출처 / Sources: [Adobe](https://helpx.adobe.com/premiere/desktop/add-video-effects/types-of-effects/transitions.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
