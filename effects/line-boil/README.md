# Nº 476 라인 보일 · Line Boil

> 클립 렌더 예정 / Clip rendering planned.

**손그림 선이 낮은 프레임 레이트로 미세하게 떨려 살아 있는 듯 보이는 효과**

Hand-drawn lines jitter slightly at a low frame rate so they look alive.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 기본 | 분위기, 브랜딩 | 설명 영상, 숏폼, 발표 | svg |

다른 이름 / Also known as: Hand draw boil, 손그림 보일, Wiggle Paths, 위글 패스, Roughen Edges, 거친 외곽, Boiling Line

## 선택 기준 / Selection

수작업 애니메이션의 불완전한 생동감과 스케치 질감을 준다 / Gives the imperfect vitality of hand-made animation and a sketch texture.

- 손그림 도해나 낙서 스타일 설명 영상에서 정적 선에 생동감을 줄 때 / To bring still lines to life in hand-drawn diagrams or doodle-style explainers
- 스케치 톤의 브랜드 영상에서 배경 선을 살아 있게 할 때 / For background lines in sketch-toned brand videos

좋은 예 / Good: 도해 선이 5fps로 위치 ±1px, 회전 0.4도씩만 흔들리고 채움 색은 움직이지 않는다
나쁜 예 / Bad: 진폭을 3px 이상으로 키워 선이 심하게 떨리거나, 24fps로 갱신해 지글거린다
주의 / Avoid: 갱신 8fps 초과 금지 · 진폭 2px 초과 금지 · 채운 면과 글자에는 걸지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 갱신율 | 5fps | 4~8fps | 프레임 사이 유지 |
| 위치 진폭 | 1px | 0.5~2px | x,y 각각 |
| 회전 진폭 | 0.4도 | 0.2~0.8도 | 중심 기준 |
| 변형 세트 | 4개 | 3~6개 | feTurbulence seed 순환 |
| displacement scale | 3 | 2~5 | SVG 필터 방식 |

이징 / Ease: `steps(1)`

## 구현 / Implementation (GSAP)

```js
/* <feTurbulence baseFrequency=.02 seed=1/> <feDisplacementMap scale=3/> */
const seeds=[1,7,13,29];
for(let f=0;f<Math.ceil(dur*5);f++)
 tl.set('#turb',{attr:{seed:seeds[f%4]}},t+f/5);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<도해>에 라인 보일을 넣어줘. 선 요소에만 SVG feTurbulence(baseFrequency 0.02)와 feDisplacementMap(scale 3)을 걸고, seed를 1, 7, 13, 29로 5fps 순환시켜 선이 ±1px 정도만 떨리게 해. 채움 면과 텍스트는 제외하고 tl.set 스텝으로 만들어 paused 타임라인에서 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>의 <도해> 선에 line-boil을 적용해. 5fps, displacement scale 3, seed 4종 순환, 회전 0.4도 상당. 0.0초, 0.2초, 0.4초를 캡처해 프레임마다 선이 미세하게 다른지, 채움과 글자는 같은지, 같은 시점 재렌더가 동일한지 확인해.
```

### English · Claude Code
```text
Add line boil to <diagram>. Apply SVG feTurbulence (baseFrequency 0.02) and feDisplacementMap (scale 3) to line elements only, cycling seed through 1, 7, 13, 29 at 5fps so lines jitter about +/-1px. Exclude filled shapes and text. Use tl.set steps on a paused timeline so it is seekable.
```

### English · Codex
```text
Apply line-boil to the lines of <diagram> in <file>: 5fps, displacement scale 3, four seeds cycling, about 0.4 degrees rotation. Capture at 0.0s, 0.2s, and 0.4s to verify lines differ slightly per frame, fills and text stay identical, and re-rendering the same time is identical.
```

예시 / Example: 라인 보일를 `.hero`에 적용해. / Apply Line Boil to `.hero`.

## 적용 / Application

- HyperFrames: seed attribute를 tl.set으로 5fps에 맞춰 바꾸는 방식이 seek에 안전하다. 보간은 쓰지 않는다
- ReelForge: 브리프에 boilFps, amplitudePx, variantCount를 싣는다. 벡터 소스라면 path마다 다른 오프셋 세트를 미리 만든다
- Scrolline Deck: 진행률을 5fps 스텝 인덱스로 양자화해 seed를 고른다. 스크롤이 멈추면 마지막 세트를 유지한다

조합 / Pair with: [위글 · Wiggle](../wiggle/) · [시간 흔들림 · Temporal Wiggle](../temporal-wiggle/) · [윤곽 후 채움 · Outline Then Fill](../outline-then-fill/) · [스크리블 와이프 · Scribble Wipe](../scribble-wipe/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/hw-boil/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/hw-frame/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/hw-text-cloud/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:embedded-captions/CATALOG.md`) (unknown) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/drawing-painting-and-paths/shapes-and-shape-attributes/shape-attributes-paint-operations-path.html) (unknown) · [Art of the Title](https://www.artofthetitle.com/title/se7en/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
