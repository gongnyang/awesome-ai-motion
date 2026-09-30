# Nº 454 팔레트 순환 · Palette Color Cycling

> 클립 렌더 예정 / Clip rendering planned.

**그림의 픽셀 위치는 고정한 채 팔레트의 색 대응만 순서대로 돌려 물이나 빛이 흐르는 듯 보이게 한다**

Pixel positions stay fixed while the palette's color mapping rotates in order, so water or light seems to flow.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 분위기, 브랜딩 | 숏폼, 웹 UI, 설명 영상 | canvas |

다른 이름 / Also known as: 팔레트 색 순환

## 선택 기준 / Selection

적은 프레임과 정지 이미지만으로 반복 움직임을 만든다. 8비트 시절의 레트로한 질감을 전한다 / Creates looping movement from a still image and very few frames. It carries the retro texture of 8-bit graphics.

- 픽셀 아트 배경의 물, 불, 네온에 낮은 비용으로 움직임을 줄 때 / Add cheap motion to water, fire or neon in pixel art backgrounds.
- 레트로 게임 느낌의 브랜드 화면을 만들 때 / Build a retro-game feeling brand screen.

좋은 예 / Good: 8색 팔레트가 120ms마다 한 칸씩 돌고 4초 동안 물결 띠가 위로 흐른다. 윤곽 픽셀은 고정이다
나쁜 예 / Bad: 색 단계를 32개로 늘리고 간격을 16ms로 줄여 일반 그라데이션 애니메이션처럼 보인다. 윤곽까지 함께 돌아 형태가 깨진다
주의 / Avoid: 윤곽선 픽셀은 순환에서 제외한다 · 순환 색 12개 초과 금지(계단 질감이 사라짐)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 순환 색 | 8개 | 6~12개 | 순환하는 색 슬롯 수 |
| 단계 간격 | 120ms | 80~160ms | 짧을수록 매끈함 |
| 총 길이 | 4s | 3~5s | 약 33단계 |
| 고정 영역 | 윤곽 픽셀 | 마스크로 지정 | 순환하지 않는 인덱스 |

이징 / Ease: `steps(1)`

## 구현 / Implementation (GSAP)

```js
const pal = ['#0b1d3a','#12406b','#1f6f9b','#3aa0c4','#7fd0e0','#3aa0c4','#1f6f9b','#12406b'];
const u = { s: 0 };
tl.to(u, { s: 33, duration: 4, ease: 'none', onUpdate: () => {
  const k = Math.floor(u.s); slots.forEach((px, i) => setColor(px, pal[(i + k) % pal.length])); } }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>(픽셀 아트 또는 인덱스 컬러 이미지)에 팔레트 순환을 넣어줘. 순환 슬롯 8개를 120ms마다 한 칸씩 돌리고 4초 동안 재생, 윤곽선 픽셀은 순환에서 제외해. 오프셋은 Math.floor(진행률*33)로 계산해서 seek해도 같은 프레임이 나오게 해.
```

### 한국어 · Codex
```text
<파일>의 canvas 이미지에 palette cycling을 적용해. 슬롯 8개, 간격 120ms, 4초. 오프셋은 timeline progress로만 계산한다. 0초, 0.12초, 0.24초를 캡처해 윤곽선 픽셀 색이 변하지 않는지, 슬롯 색만 한 칸씩 이동하는지 확인해.
```

### English · Claude Code
```text
Apply palette cycling to <target> (a pixel art or indexed color image). Rotate 8 palette slots by one step every 120ms for 4 seconds, excluding outline pixels. Compute the offset as Math.floor(progress * 33) so seeking gives identical frames.
```

### English · Codex
```text
Apply palette cycling to the canvas image in <file>: 8 slots, 120ms step, 4 seconds. Compute the offset from timeline progress only. Capture at 0s, 0.12s and 0.24s and verify outline pixel colors never change while slot colors shift by one step.
```

예시 / Example: 팔레트 순환를 `.hero`에 적용해. / Apply Palette Color Cycling to `.hero`.

## 적용 / Application

- HyperFrames: 단계값 s를 정수로 내림해 팔레트 오프셋에 쓴다. 같은 시각 seek는 같은 오프셋이 되어 결정론적이다
- ReelForge: 씬 워커 브리프에 이미지 인덱스 맵, 순환 슬롯, 단계 간격 120ms를 싣는다
- Scrolline Deck: 진행률 0..1을 0~33단계에 대응시킨다. 스크롤에서는 스텝 경계에서 색이 튀므로 홀드 구간을 짧게 둔다

조합 / Pair with: [계단식 모션 · Stepped Motion](../stepped-motion/) · [디더링 모션 · Animated Dithering](../animated-dither/) · [컬러 사이클 · Color Cycle](../color-cycle/)

출처 / Sources: [raphamorim/awesome-canvas](https://github.com/raphamorim/awesome-canvas) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
