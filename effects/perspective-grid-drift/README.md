# Nº 571 원근 격자 전진 · Perspective Grid Drift

> 클립 렌더 예정 / Clip rendering planned.

**수평선 쪽으로 모이는 격자 선이 앞으로 흘러오는 배경**

Grid lines converging toward the horizon flow forward toward the viewer.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 기본 | 분위기, 순서·흐름 | 숏폼, 설명 영상, 웹 UI | css |

다른 이름 / Also known as: 원근 격자 흐름

## 선택 기준 / Selection

넓은 가상 공간을 앞으로 나아가는 감각을 준다. 레트로 미래풍 분위기와 지속적 전진감을 만든다 / Gives the feeling of moving through a wide virtual space, with a retro-futuristic mood and steady forward motion.

- 오프닝 배경에 공간감과 속도를 줄 때 / Add space and speed to an opening background.
- 네온·레트로 톤 영상의 바닥을 만들 때 / The floor for a neon or retro toned video.
- 텍스트 뒤에서 조용히 흐르는 루프 배경이 필요할 때 / A quiet looping background behind text.

좋은 예 / Good: 기울기 65도로 눕힌 40px 격자가 4초에 한 칸 주기로 일정 속도로 앞으로 흘러오며 수평선에서 선이 모인다
나쁜 예 / Bad: 선 굵기가 원근에 관계없이 같아 평면처럼 보이거나, 루프 주기가 격자 간격과 안 맞아 반복 때 튄다
주의 / Avoid: 이동 거리는 격자 간격의 정수배로 해 루프가 이어지게 한다 · 격자 opacity는 0.4 이하로 한다 · 선이 모이는 수평선 근처는 페이드 처리한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 이동 시간 | 4s | 2~8s | 한 칸 또는 정수 칸 |
| 격자 간격 | 40px | 32~64px | 배경 크기 |
| 기울기 | 65deg | 55~75deg | rotateX |
| 선 opacity | 0.35 | 0.2~0.4 | 텍스트 뒤 |
| 이징 | none | none | 일정 속도 |

## 구현 / Implementation (GSAP)

```js
gsap.set('.floor', { rotationX: 65, transformPerspective: 800, backgroundSize: '40px 40px' });
// .floor { background-image: linear-gradient(#0ff4 1px, transparent 1px), linear-gradient(90deg, #0ff4 1px, transparent 1px) }
tl.fromTo('.floor', { backgroundPositionY: '0px' }, { backgroundPositionY: '40px', duration: 4, ease: 'none' }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
CSS와 GSAP으로 <대상> 배경에 원근 격자 전진을 만들어 줘. 40px 격자 배경을 rotateX 65도, perspective 800px로 눕히고, backgroundPositionY를 0에서 40px까지 4초 동안 ease none으로 이동시켜. 선 색은 시안 opacity 0.35, 수평선 근처는 페이드하고 루프는 격자 간격의 정수배로 이어지게 해.
```

### 한국어 · Codex
```text
<파일>의 바닥에 perspective-grid-drift를 적용해. .floor rotationX 65, transformPerspective 800, backgroundSize 40px 40px, backgroundPositionY 0→40px를 position 0, duration 4, ease none으로 건다. 0초와 4초 프레임이 격자 한 칸 이동 후 동일한지, 2초에 선이 수평선으로 모이는지 캡처로 확인해.
```

### English · Claude Code
```text
Use CSS and GSAP to make a perspective grid drift behind <target>. Tilt a 40px grid background with rotateX 65 degrees and perspective 800px, and move backgroundPositionY from 0 to 40px over 4 seconds with ease none. Cyan lines at opacity 0.35, fade near the horizon, and loop by an integer multiple of the grid spacing.
```

### English · Codex
```text
Apply perspective-grid-drift to the floor in <file>. .floor rotationX 65, transformPerspective 800, backgroundSize 40px 40px, backgroundPositionY 0 to 40px at position 0, duration 4, ease none. Capture 0s and 4s (identical after one cell), and 2s (lines converge at the horizon).
```

예시 / Example: 원근 격자 전진를 `.hero`에 적용해. / Apply Perspective Grid Drift to `.hero`.

## 적용 / Application

- HyperFrames: 정수 칸 이동으로 루프를 만든다. 무한 repeat 대신 총 길이만큼 정수 배 이동을 넣어 seek 길이를 확정한다
- ReelForge: 브리프에 격자 색, 간격 40, 기울기 65, 주기 4s를 싣는다. 텍스트 위에 놓지 않도록 레이어 순서를 지정한다
- Scrolline Deck: 진행률 1.0이 격자 한 칸이 되도록 매핑해 scrub 방향에 따라 앞뒤로 흐르게 한다

조합 / Pair with: [카메라 비행 · Camera Fly-through](../camera-flight/) · [스타필드 워프 · Starfield Warp](../starfield-warp/) · [앰비언트 글로우 · Ambient Glow](../ambient-glow/)

출처 / Sources: [magicuidesign/magicui](https://magicui.design/docs/components/retro-grid) (MIT) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
