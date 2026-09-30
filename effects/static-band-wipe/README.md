# Nº 202 노이즈 띠 와이프 · Static Band Wipe

> 클립 렌더 예정 / Clip rendering planned.

**가로 잡음 띠가 위아래로 지나가며 띠 뒤쪽이 다음 장면으로 바뀐다**

A horizontal noise band sweeps up or down, and everything behind it becomes the next scene.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 순서·흐름 | 숏폼, 설명 영상, 웹 UI | webgl |

다른 이름 / Also known as: 잡음 띠 와이프

## 선택 기준 / Selection

잡음 띠가 화면을 훑고 지나가며 그 뒤쪽이 새 장면으로 바뀐다. 스캔하는 느낌이다 / Gives an electronic sense of a scan replacing the screen.

- 모니터, 감시 카메라, 화면 스캔 소재의 영상에서 화면을 바꿀 때 / When switching screens in videos about monitors, surveillance cameras, or scans
- 방향이 있는 와이프로 위에서 아래로 순서를 알릴 때 / For a directional wipe that signals order from top to bottom

좋은 예 / Good: 높이 화면의 12%인 잡음 띠가 550ms 동안 위에서 아래로 지나가고, 띠가 지나간 위쪽은 이미 다음 장면이다
나쁜 예 / Bad: 띠에 잡음이 없어 단색 바처럼 보이거나, 띠 뒤쪽이 아직 이전 장면이라 와이프 방향이 반대로 읽힌다
주의 / Avoid: 띠 높이는 화면의 8~20%로 한다 · 띠가 화면 밖에서 시작해 밖에서 끝나야 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 550ms | 400~800ms | linear |
| 띠 높이 | 화면의 12% | 8~20% | 129px |
| 방향 | 위에서 아래 | 상하좌우 | 읽는 순서와 맞춘다 |
| 잡음 밝기 | 0.7 | 0.5~0.9 | 띠 안 |
| 최대 잡음 폭 | 0.5 | 0.3~0.5 | 원 셰이더 파라미터 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const H = 1080, B = 130;
tl.fromTo('.band', { y: -B }, { y: H, duration: 0.55, ease: 'none' }, 0);
tl.fromTo('.next', { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.55, ease: 'none' }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면 전환에 노이즈 띠 와이프를 넣어줘. 높이 130px 잡음 띠가 위에서 아래로 0.55초 linear로 지나가고, .next는 clipPath inset(0 0 100% 0)에서 inset(0 0 0% 0)로 같은 속도로 열려 띠 바로 뒤가 다음 장면이 되게 해. 띠의 잡음은 프레임 번호 시드로 그리고 타임라인 하나로 seek 가능하게 만들어줘.
```

### 한국어 · Codex
```text
<파일>에 노이즈 띠 와이프를 구현해. .band y -130에서 1080, .next clipPath inset(0 0 100% 0)에서 inset(0 0 0% 0), 둘 다 0.55초 ease none. 0.1초, 0.27초, 0.45초 시점을 캡처해 띠 위쪽이 다음 장면, 아래쪽이 이전 장면인지, 띠 경계와 clip 경계가 어긋나지 않는지 확인해.
```

### English · Claude Code
```text
Add a Static Band Wipe to <target>. A noise band 130px tall travels top to bottom over 0.55s with linear ease, while .next opens via clipPath inset(0 0 100% 0) to inset(0 0 0% 0) at the same speed, so everything just behind the band is the next scene. Seed the noise by frame number and keep one seekable GSAP timeline.
```

### English · Codex
```text
Implement Static Band Wipe in <file>. .band y -130 to 1080 and .next clipPath inset(0 0 100% 0) to inset(0 0 0% 0), both 0.55s ease none. Capture at 0.1s, 0.27s, and 0.45s to confirm the area above the band is the next scene, below is the previous scene, and the band edge and clip edge stay aligned.
```

예시 / Example: 노이즈 띠 와이프를 `.hero`에 적용해. / Apply Static Band Wipe to `.hero`.

## 적용 / Application

- HyperFrames: .band 이동과 .next clipPath를 같은 duration, ease none으로 묶어 경계가 맞게 한다. paused 타임라인에서 seek해도 띠와 경계가 일치한다
- ReelForge: 씬 워커 브리프에 방향, 띠 높이 12%, 지속 550ms를 싣고 잡음은 프레임 시드 캔버스로 요구한다
- Scrolline Deck: scrub에서 띠 y를 진행률 0~1에 선형으로 묶는다. 스크롤 방향이 바뀌면 자연스럽게 위로 되돌아간다

조합 / Pair with: [와이프 · Wipe](../wipe/) · [TV 트래킹 전환 · TV Tracking Transition](../tv-tracking-transition/) · [TV 노이즈 전환 · TV Static Transition](../tv-static-transition/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/static_wipe.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
