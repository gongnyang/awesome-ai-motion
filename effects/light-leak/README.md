# Nº 452 빛샘 · Light Leak

> 클립 렌더 예정 / Clip rendering planned.

**화면보다 큰 따뜻한 빛 덩어리가 프레임을 가로질러 번졌다가 사라지는 필름 질감 효과**

Large warm light blobs drift across the frame and fade out, like a film leak.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 기본 | 분위기, 전환 | 설명 영상, 숏폼, 발표 | css |

다른 이름 / Also known as: 빛샘 전환, Film burn, 필름 빛샘, light-leak-film-burn

## 선택 기준 / Selection

필름으로 찍은 기억 같은 온기와 감정적 거리를 만든다. 컷 사이에 얹으면 장면이 부드럽게 이어진다 / Gives a filmed-memory warmth and soft emotional distance. Placed on a cut, it lets the two scenes flow into each other.

- 회상, 인터뷰, 감성 브랜드 컷에 따뜻한 질감을 얹을 때 / For warm texture on recollection, interview, or brand mood shots
- 두 장면 사이 컷 지점에 빛이 지나가며 이어 붙이고 싶을 때 / To bridge two scenes with light passing across the cut

좋은 예 / Good: 컷 직전 0.35초에 주황 빛이 왼쪽에서 번져 컷 순간 정점에 이르고, 다음 장면 위에서 0.35초 동안 걷힌다
나쁜 예 / Bad: 빛 레이어를 불투명도 0.8 이상으로 올려 피사체를 가리거나, 모든 컷마다 같은 빛을 반복한다
주의 / Avoid: opacity 0.5 초과 금지(피사체와 글자가 가려짐) · 글자가 읽혀야 하는 구간에는 빛이 글자 위를 지나지 않게 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 700ms | 500~1000ms | 정점은 중간 지점 |
| 빛 레이어 수 | 3개 | 2~3개 | 크기와 색을 다르게 |
| 최대 opacity | 0.35 | 0.25~0.5 | screen 혼합 |
| 시작차 | 60ms | 40~90ms | 레이어마다 어긋나게 |
| 이동 거리 | -40vw에서 +40vw | 30~60vw | 화면 밖에서 시작 |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
const L=gsap.utils.toArray('.leak');
L.forEach((el,i)=>tl.fromTo(el,{xPercent:-60,opacity:0},{xPercent:40,duration:.7,ease:'sine.inOut'},t+i*.06)
 .to(el,{opacity:.35,duration:.35,yoyo:true,repeat:1,ease:'sine.inOut'},t+i*.06));
/* .leak{mix-blend-mode:screen;background:radial-gradient(circle,#ff9a3c,#ff4d2e 55%,transparent 70%)} */
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면 전환에 빛샘을 넣어줘. 화면보다 큰 radial gradient 레이어 3개(주황, 빨강, 노랑)를 mix-blend-mode screen으로 얹고, 0.7초 동안 왼쪽 밖에서 오른쪽으로 옮기면서 opacity를 0에서 0.35로 올렸다 되돌려. 레이어 시작차는 0.06초, 이징은 sine.inOut. 컷 시각에 정점이 오게 하고 paused 타임라인 하나로 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>의 컷 지점에 light-leak 오버레이를 추가해. 레이어 3개, duration 0.7s, peak opacity 0.35, stagger 0.06s, ease sine.inOut. Math.random 없이 위치를 고정값으로 쓰고, 컷 -0.35초, 컷 시점, 컷 +0.35초를 캡처해 정점에서 피사체 대비가 유지되는지, 종료 후 오버레이가 opacity 0인지 확인해.
```

### English · Claude Code
```text
Add a light leak transition to <target>. Overlay three oversized radial-gradient layers (orange, red, yellow) with mix-blend-mode screen. Move them from off-screen left to the right over 0.7s while opacity rises from 0 to 0.35 and back. Stagger layers by 0.06s, ease sine.inOut, and peak exactly on the cut. Use one paused GSAP timeline that can be seeked.
```

### English · Codex
```text
Add a light-leak overlay at the cut in <file>: 3 layers, duration 0.7s, peak opacity 0.35, stagger 0.06s, ease sine.inOut. Use fixed positions, no Math.random. Capture at cut -0.35s, at the cut, and at cut +0.35s to check that subject contrast holds at the peak and that overlay opacity returns to 0 afterward.
```

예시 / Example: 빛샘를 `.hero`에 적용해. / Apply Light Leak to `.hero`.

## 적용 / Application

- HyperFrames: 빛 레이어를 paused 타임라인에 얹고 xPercent와 opacity만 보간한다. mix-blend-mode screen 레이어는 컷 시각 기준으로 앞뒤 0.35초에 배치한다
- ReelForge: 씬 워커 브리프에 leakDuration, layerCount, peakOpacity, cutAt을 싣고 컷 시각에 정점을 맞춘다
- Scrolline Deck: 진행률 0~1을 x 이동에 매핑하고 opacity는 삼각형 곡선으로 준다. 스프링 대신 sine.inOut을 쓴다

조합 / Pair with: [플래시 전환 · Flash Transition](../flash-transition/) · [필름 그레인 · Film Grain](../film-grain/) · [딥 투 컬러 · Dip to Color](../dip-to-color/) · [크로스페이드 · Crossfade](../crossfade/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/light-leak/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/organic-light-leak-overlay/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/transitions/css-light.md`) (unknown) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-light/registry-item.json) (Apache-2.0) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/07-stylize-time.md#light-leak-film-burn`) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
