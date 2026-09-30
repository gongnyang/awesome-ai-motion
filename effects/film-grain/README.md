# Nº 446 필름 그레인 · Film Grain

![필름 그레인 · Film Grain](preview.gif)

[MP4](clip.mp4) · [HTML](index.html)

**프레임 위에 미세한 입자 노이즈를 낮은 프레임 레이트로 갱신해 필름 질감을 주는 효과**

A fine layer of grain updated at a low frame rate gives the frame a film texture.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 기본 | 분위기, 브랜딩 | 설명 영상, 숏폼, 발표 | canvas |

다른 이름 / Also known as: 살아있는 필름 그레인, film-grain-seeded-flip, Animated noise grain, 움직이는 노이즈 질감, Animated Grain, 움직이는 그레인, Noise Texture, Noise Background, Noise, Grainient, noise-texture, noise-background

## 선택 기준 / Selection

디지털 화면의 차가움을 덜고 필름 같은 유기적 질감과 통일감을 준다 / Softens digital coldness and adds organic texture and a consistent look.

- 전체 영상에 일관된 필름 톤을 깔고 싶을 때 / To lay a consistent film tone over a whole video
- AI 이미지나 합성 컷의 지나친 매끈함을 눌러줄 때 / To tame the over-smooth look of AI images and composited shots

좋은 예 / Good: opacity 0.08의 1~2px 입자가 12fps로 갱신되며 어두운 영역에서만 은은히 보인다
나쁜 예 / Bad: opacity 0.3 이상으로 지글거리게 해 압축 노이즈처럼 보이거나, 매 프레임 다른 무작위 값을 써 재렌더마다 결과가 다르다
주의 / Avoid: opacity 0.12 초과 금지 · 입자 갱신은 12fps 이하로 유지(24fps는 지글거림)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| opacity | 0.08 | 0.05~0.12 | overlay 혼합 |
| 갱신율 | 12fps | 8~15fps | 프레임 시드 교체 |
| 입자 크기 | 1.5px | 1~2px | 1080p 기준 |
| 타일 수 | 8장 | 6~12장 | 노이즈 타일 순환 |
| 혼합 | overlay | overlay/soft-light | 어두운 부분이 더 보임 |

이징 / Ease: `steps(1)`

## 구현 / Implementation (GSAP)

```js
// 시드가 다른 노이즈 타일 8장을 미리 만들어 12fps로 순환
const tiles=8;
const i=Math.floor(tl.time()*12)%tiles;
// 타임라인 진행값으로 인덱스를 정하므로 seek해도 같은 타일
grain.style.backgroundPosition=`${-i*256}px 0`;
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 영상 전체에 필름 그레인을 얹어줘. 256px 노이즈 타일 8장(시드 고정)을 만들어 overlay 혼합, opacity 0.08, 입자 1.5px로 얹고, 12fps로 타일을 순환시켜. 타일 선택은 타임라인 시간의 순수 함수로 하고 Math.random은 쓰지 마. 레이어는 pointer-events none.
```

### 한국어 · Codex
```text
<파일>에 film-grain 오버레이를 추가해. 타일 8장, opacity 0.08, 12fps 갱신, 입자 1.5px, mix-blend-mode overlay. 1.00초와 1.08초를 캡처해 두 프레임의 입자 패턴이 다른지, 같은 시점을 두 번 렌더하면 동일한지, 밝은 영역에서 노이즈가 과하지 않은지 확인해.
```

### English · Claude Code
```text
Add film grain over all of <target>. Build eight 256px noise tiles with a fixed seed, overlay them with mix-blend-mode overlay at opacity 0.08 and 1.5px grain, and cycle the tiles at 12fps. Choose the tile as a pure function of timeline time, no Math.random. Keep the layer pointer-events none.
```

### English · Codex
```text
Add a film-grain overlay in <file>: 8 tiles, opacity 0.08, 12fps update, 1.5px grain, mix-blend-mode overlay. Capture at 1.00s and 1.08s to verify the grain pattern differs, render the same time twice to verify identical output, and check that noise is not excessive on bright areas.
```

예시 / Example: 필름 그레인를 `.hero`에 적용해. / Apply Film Grain to `.hero`.

## 적용 / Application

- HyperFrames: 타일 인덱스를 tl.time() 기반 순수 함수로 계산한다. 레이어는 최상단 고정, mix-blend-mode overlay, pointer-events none
- ReelForge: 브리프에 grainOpacity, grainFps, tileCount를 싣는다. 미리 만든 PNG 타일 시트를 쓰면 워커 간 결과가 동일하다
- Scrolline Deck: 스크롤 진행률로 타일 인덱스를 12구간 단위로 바꾼다. 스크롤이 멈추면 입자도 멈추므로 거의 보이지 않게 opacity를 0.05로 낮춘다

조합 / Pair with: [필름 먼지와 스크래치 · Film Dust and Scratches](../film-dust-scratches/) · [게이트 위브 · Gate Weave](../gate-weave/) · [비네트 펄스 · Vignette Pulse](../vignette-pulse/) · [빛샘 · Light Leak](../light-leak/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/grain-overlay/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/grain-field/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/techniques.md`) (unknown) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/07-stylize-time.md#film-grain-seeded-flip`) (Apache-2.0) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/gallery-index.json`) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
