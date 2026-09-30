# Nº 465 필름 먼지와 스크래치 · Film Dust and Scratches

> 클립 렌더 예정 / Clip rendering planned.

**작은 먼지점과 세로 긁힘이 프레임에 나타났다가 위치를 바꾸거나 사라지는 필름 흠집 효과**

Small dust specks and vertical scratches appear on the frame, then shift position or vanish.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 기본 | 분위기, 브랜딩 | 설명 영상, 숏폼, 발표 | canvas |

## 선택 기준 / Selection

낡은 필름의 시간감과 수작업 아카이브 감성을 만든다 / Builds a sense of time on old film and handmade archive atmosphere.

- 회상, 다큐멘터리, 빈티지 브랜드 컷에 낡은 필름 흔적을 더할 때 / To add worn-film traces to recollection, documentary, or vintage brand shots
- 깨끗한 디지털 화면을 아날로그 아카이브처럼 보이게 할 때 / To make a clean digital picture look like an analog archive

좋은 예 / Good: 12fps로 먼지 20개가 한두 프레임씩 나타나고 세로 긁힘 2줄이 opacity 0.15로 스쳐 지나간다
나쁜 예 / Bad: 먼지와 긁힘이 너무 많고 진해 화면이 더러워 보이거나, 같은 위치에서 계속 반복되어 패턴이 보인다
주의 / Avoid: 최대 opacity 0.15 초과 금지 · 먼지 수 40개 초과 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 갱신율 | 12fps | 8~15fps | 프레임마다 재배치 |
| 먼지 수 | 20개 | 10~40개 | 시드 고정 |
| 스크래치 수 | 2줄 | 1~3줄 | 세로선, 수명 1~3프레임 |
| 최대 opacity | 0.15 | 0.08~0.2 | 흰색 또는 검정 |
| 크기 | 1~4px | 1~5px | 먼지 반경 |

이징 / Ease: `steps(1)`

## 구현 / Implementation (GSAP)

```js
function mulberry(a){return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t^=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function draw(frame){const r=mulberry(frame*97+13);ctx.clearRect(0,0,1920,1080);
 for(let i=0;i<20;i++){ctx.globalAlpha=.15*r();ctx.beginPath();ctx.arc(r()*1920,r()*1080,1+r()*3,0,6.283);ctx.fill();}
 if(r()<.5){ctx.globalAlpha=.12;ctx.fillRect(r()*1920,0,1,1080);}}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<영상> 위에 필름 먼지와 스크래치 오버레이를 얹어줘. canvas에서 12fps로 프레임 인덱스를 시드로 하는 난수(mulberry)로 먼지점 20개(반경 1~4px, opacity 최대 0.15)를 매 프레임 재배치하고, 절반 확률로 세로 스크래치 1~2줄을 1~3프레임 표시해. Math.random은 쓰지 마.
```

### 한국어 · Codex
```text
<파일>에 film-dust-scratches 캔버스 오버레이를 구현해. 12fps, 먼지 20개, 스크래치 2줄, 최대 opacity 0.15, 프레임 시드. 1.00초, 1.08초, 1.16초를 캡처해 먼지 위치가 프레임마다 바뀌는지, 같은 시점 재렌더가 동일한지, 피사체가 가려지지 않는지 확인해.
```

### English · Claude Code
```text
Overlay film dust and scratches on <video>. On a canvas at 12fps, use a frame-index-seeded random (mulberry) to reposition 20 dust specks (radius 1-4px, max opacity 0.15) every frame, and with 50% chance show 1-2 vertical scratches for 1-3 frames. Do not use Math.random.
```

### English · Codex
```text
Implement a film-dust-scratches canvas overlay in <file>: 12fps, 20 dust specks, 2 scratches, max opacity 0.15, frame-index seed. Capture at 1.00s, 1.08s, and 1.16s to verify dust positions change per frame, re-rendering the same time is identical, and the subject is not obscured.
```

예시 / Example: 필름 먼지와 스크래치를 `.hero`에 적용해. / Apply Film Dust and Scratches to `.hero`.

## 적용 / Application

- HyperFrames: draw(frame)는 프레임 인덱스를 시드로 쓰는 순수 함수라 seek 결과가 같다. frame = floor(tl.time()*12)
- ReelForge: 브리프에 dustCount, scratchCount, maxOpacity, fps를 싣는다. 캔버스를 영상 위 최상단 오버레이로 둔다
- Scrolline Deck: 진행률을 프레임 인덱스로 양자화해 draw를 호출한다. 스크롤이 멈추면 마지막 프레임 흠집이 남으므로 opacity를 0.08로 낮춘다

조합 / Pair with: [필름 그레인 · Film Grain](../film-grain/) · [게이트 위브 · Gate Weave](../gate-weave/) · [빛샘 · Light Leak](../light-leak/) · [VHS 트래킹 · VHS Tracking](../vhs-tracking/)

출처 / Sources: local/HyperFrames-skills (`claude-skill:media-use/references/media-treatment-recipes.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
