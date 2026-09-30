# Nº 459 VHS 트래킹 · VHS Tracking

> 클립 렌더 예정 / Clip rendering planned.

**가로 왜곡 띠와 색 번짐이 화면 아래에서 위로 지나가는 VHS 테이프 트래킹 오류 효과**

Horizontal distortion bands and color fringing sweep up the frame, like VHS tape tracking errors.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 분위기, 전환 | 숏폼, 설명 영상 | css |

다른 이름 / Also known as: vhs-tracking-glitch, chromatic-glitch

## 선택 기준 / Selection

낡은 비디오테이프의 기억감과 레트로 정서를 만든다. 아날로그 신호가 흔들리는 느낌을 준다 / Creates worn-tape nostalgia and a retro mood, with the feel of an unstable analog signal.

- 80~90년대 홈비디오, 레트로 회상 장면을 표현할 때 / To evoke 80s and 90s home video or retro flashbacks
- 화면이 재생 시작이나 되감기처럼 바뀌는 지점을 표시할 때 / To mark a switch that feels like playback start or rewind

좋은 예 / Good: 화면 아래에서 54px 높이의 왜곡 띠가 0.6초 동안 올라가며 띠 안의 줄이 좌우로 흔들린다
나쁜 예 / Bad: 화면 전체를 계속 떨리게 해 내용이 안 읽히거나, 띠를 너무 두껍게 잡아 피사체가 사라진다
주의 / Avoid: 띠 하나의 높이 120px 초과 금지 · 본문 텍스트가 있는 구간에서는 띠가 지나가는 동안 글자 변위를 6px 이하로 제한한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 600ms | 400~1000ms | 띠가 아래에서 위로 통과 |
| 줄 수 | 20줄 | 12~30줄 | 각 54px 이하로 얇게 |
| 줄 변위 | ±14px | 8~24px | 줄마다 시드 값 |
| 채널 opacity | 0.35 | 0.25~0.45 | 적청 번짐 |
| 정지 후 잔여 | 0.15s | 0.1~0.3s | 마지막에 살짝 떨림 |

이징 / Ease: `power1.inOut`

## 구현 / Implementation (GSAP)

```js
const N=20,H=54;
for(let i=0;i<N;i++){ const dx=Math.sin(i*12.9898)*14;
 tl.fromTo(`.row${i}`,{y:1080,x:0},{y:-H,duration:.6,ease:'power1.inOut'},t)
 .set(`.row${i}`,{x:dx},t+.05).set(`.row${i}`,{x:0},t+.6);}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 화면에 VHS 트래킹 오류 효과를 넣어줘. 화면을 54px 높이 줄 20개로 나눠 복제하고, 0.6초 동안 아래에서 위로 통과하는 왜곡 띠를 만들어. 띠 안 줄은 sin 기반 고정값으로 ±14px 좌우 이동, 적색과 청색 복사본은 opacity 0.35. 이징 power1.inOut, 끝나면 모든 줄을 원위치로 돌려. paused 타임라인으로 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 vhs-tracking을 구현해. 줄 20개, 각 54px, 통과 0.6s, 줄 변위 ±14px(고정 sin 값), 채널 opacity 0.35, ease power1.inOut. 0.1초, 0.3초, 0.7초를 캡처해 띠가 위로 이동하는지, 0.7초에 모든 줄 x가 0인지, 띠 통과 중 글자가 읽히는지 확인해.
```

### English · Claude Code
```text
Add a VHS tracking glitch to <target>. Slice the frame into 20 rows of 54px, and sweep a distortion band from bottom to top over 0.6s. Rows inside the band shift horizontally by a fixed sin-based value up to +/-14px, with red and blue copies at opacity 0.35. Ease power1.inOut, reset all rows to zero at the end. One paused timeline, seekable.
```

### English · Codex
```text
Implement vhs-tracking in <file>: 20 rows at 54px, pass duration 0.6s, row shift +/-14px from fixed sin values, channel opacity 0.35, ease power1.inOut. Capture at 0.1s, 0.3s, and 0.7s to verify the band moves upward, every row has x=0 at 0.7s, and text stays readable during the pass.
```

예시 / Example: VHS 트래킹를 `.hero`에 적용해. / Apply VHS Tracking to `.hero`.

## 적용 / Application

- HyperFrames: 행 슬라이스를 미리 만들어 두고 paused 타임라인에서 y와 x만 보간한다. 변위는 sin 기반 고정값이라 seek 결과가 같다
- ReelForge: 브리프에 bandHeight, rowCount, shiftPx, passDuration을 싣는다. 캔버스 대신 CSS 슬라이스 복제로 워커가 쉽게 재현한다
- Scrolline Deck: 띠 위치를 진행률 0~1에 y로 매핑해 스크롤 속도만큼 지나가게 한다. 정지 구간에서는 띠를 화면 밖에 둔다

조합 / Pair with: [CRT 주사선 · CRT Scanlines](../crt-scanlines/) · [TV 트래킹 전환 · TV Tracking Transition](../tv-tracking-transition/) · [RGB 분리 글리치 · RGB Split Glitch](../glitch-rgb-split/) · [필름 그레인 · Film Grain](../film-grain/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/camcorder-hud/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/transitions/css-distortion.md`) (unknown) · local/HyperFrames-skills (`claude-skill:media-use/references/media-treatment-recipes.md`) (unknown) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/07-stylize-time.md#vhs-tracking-glitch`) (Apache-2.0) · local/hyperframes-animation (`claude-skill:hyperframes-animation/rules/chromatic-glitch.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
