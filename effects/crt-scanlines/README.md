# Nº 445 CRT 주사선 · CRT Scanlines

> 클립 렌더 예정 / Clip rendering planned.

**화면 위에 가는 주사선과 약한 곡면 왜곡, 스캔 밝기 띠가 겹쳐 CRT 모니터처럼 보이게 하는 효과**

Fine scanlines, mild curvature, and a moving bright band make the screen look like a CRT monitor.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 분위기, 브랜딩 | 숏폼, 설명 영상, 웹 UI | webgl |

다른 이름 / Also known as: Scanlines, 스캔라인, scanline-interlace, CRT Warp, 브라운관 왜곡, CRT Scanline Roll, CRT 주사선 이동, Rolling scanlines, CRTWarp, FaultyTerminal, Balatro, CRT 색 번짐

## 선택 기준 / Selection

레트로 컴퓨터와 아케이드의 정서를 만들고 화면이 실제 기기 속에 있는 듯한 인상을 준다 / Builds retro computer and arcade atmosphere and makes the content feel as if it lives inside a real device.

- 터미널, 아케이드, 90년대 컴퓨터 화면을 재현할 때 / To recreate terminals, arcades, and 90s computer screens
- 기술 회고나 레트로 톤의 타이틀 장면을 만들 때 / For retro-toned title scenes or tech retrospectives

좋은 예 / Good: 3px 간격 주사선 위로 밝은 스캔 띠가 60px/s로 내려가고 가장자리는 2% 휘어 보인다
나쁜 예 / Bad: 주사선 간격을 6px 이상으로 벌려 격자 무늬처럼 보이게 하거나, 곡면 왜곡을 5% 넘겨 글자가 찌그러진다
주의 / Avoid: 곡면 왜곡 0.04 초과 금지(글자 왜곡) · 주사선 opacity 0.25 초과 금지(밝기 손실)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 선 간격 | 3px | 2~4px | 1080p 기준 |
| 선 opacity | 0.18 | 0.1~0.25 | 검정 가로선 |
| 스캔 속도 | 60px/s | 30~120px/s | 밝은 띠 이동 |
| 곡면 왜곡 | 0.02 | 0.01~0.04 | 가장자리 barrel |
| 비네트 | 0.35 | 0.2~0.5 | 모서리 어둡게 |

이징 / Ease: `linear`

## 구현 / Implementation (GSAP)

```js
// fragment
vec2 c=uv*2.-1.;c*=1.+dot(c,c)*.02;vec2 u=c*.5+.5;
vec3 col=texture2D(tex,u).rgb;
col*=1.-.18*step(1.5,mod(gl_FragCoord.y,3.));
float bar=smoothstep(.08,0.,abs(fract(u.y-uTime*60./1080.)-.5)-.42);
col+=bar*.06; col*=1.-.35*dot(c,c)*.5;
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 화면에 CRT 주사선 효과를 얹어줘. 3px 간격 검정 가로선 opacity 0.18, 곡면 왜곡 0.02, 비네트 0.35, 밝기 0.06짜리 스캔 띠가 60px/s로 위에서 아래로 내려가게 해. 후처리 레이어는 pointer-events none, 시간은 paused 타임라인 진행값으로만 구동해.
```

### 한국어 · Codex
```text
<파일>에 crt-scanlines 후처리 레이어를 추가해. 선 간격 3px, 선 opacity 0.18, 스캔 60px/s, 곡면 0.02, 비네트 0.35. 0초, 1초, 2초를 캡처해 스캔 띠가 60px씩 내려갔는지, 본문 글자 가독성이 유지되는지, 주사선 간격이 3px인지 확대 확인해.
```

### English · Claude Code
```text
Overlay a CRT scanline effect on <target>. Use 3px-spaced black horizontal lines at opacity 0.18, curvature 0.02, vignette 0.35, and a 0.06-brightness scan band moving top to bottom at 60px/s. Keep the post layer pointer-events none and drive time only from paused timeline progress.
```

### English · Codex
```text
Add a crt-scanlines post-process layer in <file>: line gap 3px, line opacity 0.18, scan 60px/s, curvature 0.02, vignette 0.35. Capture at 0s, 1s, and 2s to verify the band moves 60px per second, body text stays legible, and zoom in to confirm 3px line spacing.
```

예시 / Example: CRT 주사선를 `.hero`에 적용해. / Apply CRT Scanlines to `.hero`.

## 적용 / Application

- HyperFrames: 전체 장면을 캔버스나 후처리 패스로 감싸고 uTime을 paused 타임라인 진행값으로 준다. 주사선은 gl_FragCoord로 그려 해상도가 바뀌어도 3px가 유지된다
- ReelForge: 브리프에 lineGap, lineOpacity, scanSpeed, curvature를 싣고 후처리 레이어를 최상단에 둔다
- Scrolline Deck: 스크롤 진행률로 스캔 띠 y를 옮기고 주사선은 고정한다. 곡면 왜곡은 정적 값이라 스크럽과 무관하다

조합 / Pair with: [VHS 트래킹 · VHS Tracking](../vhs-tracking/) · [필름 그레인 · Film Grain](../film-grain/) · [배럴 왜곡 · Barrel Lens Warp](../barrel-warp/) · [스캔 왜곡 띠 · Scan band](../glitch-scan-band/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/yt-lcd-background/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/yt-screen-warp/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-glitch-rgb/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/adapters/html-in-canvas-patterns.md`) (unknown) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/07-stylize-time.md#scanline-interlace`) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
