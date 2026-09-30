# Nº 474 렌즈 플레어 · Lens Flare

> 클립 렌더 예정 / Clip rendering planned.

**밝은 점에서 가로로 긴 청보라 빛줄기가 뻗고 작은 반사 원이 뒤따르는 렌즈 플레어**

A long blue-violet horizontal streak extends from a bright point, with small reflection circles trailing.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 강조, 분위기, 전환 | 설명 영상, 숏폼, 제품 시연 | webgl |

다른 이름 / Also known as: Anamorphic flare, 아나모픽 플레어, Lens Flare Travel, 렌즈 플레어 이동

## 선택 기준 / Selection

강한 광원과 시네마틱 카메라의 존재감을 만든다. 밝은 순간을 강조하는 시각 신호가 된다 / Creates a strong light source and cinematic camera presence, and acts as a visual cue for a bright moment.

- 제품 공개, 로고 등장, 오프닝 타이틀에서 빛의 정점을 만들 때 / To create a light peak at a product reveal, logo appearance, or opening title
- 컷 전환 직전 밝은 점에서 빛이 번지게 할 때 / To let light bloom from a bright point just before a cut

좋은 예 / Good: 로고 오른쪽 위 밝은 점에서 청보라 가로 줄기가 0.6초 동안 480px 길이로 뻗고 0.5초 뒤 사라진다
나쁜 예 / Bad: 플레어를 여러 위치에 동시에 띄우거나 흰색 줄기가 화면 전체를 덮어 대비를 잃는다
주의 / Avoid: 플레어 최대 길이 화면 폭의 40% 초과 금지 · 한 장면에 플레어 하나만 쓴다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 등장 시간 | 600ms | 400~900ms | 가로 스트릭 확장 |
| 스트릭 길이 | 480px | 300~700px | 광원 중심 양쪽 |
| 틴트 | #7a8aff | 청보라 계열 | screen 혼합 |
| 샘플 수 | 80개 | 48~120개 | 가로 누적 샘플 |
| high-pass | 0.3 | 0.2~0.5 | 밝기 임계 |

이징 / Ease: `expo.out`

## 구현 / Implementation (GSAP)

```js
// 가로 스트릭: 밝은 점 중심에서 좌우로 scaleX
tl.fromTo('.streak',{scaleX:0,opacity:0},{scaleX:1,opacity:1,duration:.6,ease:'expo.out'},t)
 .to('.streak',{opacity:0,duration:.5,ease:'power2.in'},t+.6);
/* .streak{width:480px;height:6px;background:linear-gradient(90deg,transparent,#7a8aff,#fff,#7a8aff,transparent);mix-blend-mode:screen;filter:blur(2px)} */
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<로고> 오른쪽 위 밝은 점에 렌즈 플레어를 넣어줘. 가로 스트릭(길이 480px, 높이 6px, 청보라 #7a8aff에서 흰색 그라디언트)을 mix-blend-mode screen으로 얹고, 0.6초 동안 scaleX 0에서 1로 expo.out 확장한 뒤 0.5초 동안 페이드 아웃해. 작은 반사 원 3개는 광원 반대 방향에 배치해. paused 타임라인으로 구동해.
```

### 한국어 · Codex
```text
<파일>의 <로고> 위에 lens-flare 스트릭을 추가해. 길이 480px, 등장 600ms expo.out, 페이드 500ms, 틴트 #7a8aff, screen 혼합. 0.2초, 0.6초, 1.2초를 캡처해 스트릭이 커졌다 사라지는지, 로고 대비가 유지되는지, 1.2초에 오버레이 opacity가 0인지 확인해.
```

### English · Claude Code
```text
Add a lens flare at the bright point at the upper right of <logo>. Overlay a horizontal streak (480px long, 6px tall, blue-violet #7a8aff to white gradient) with mix-blend-mode screen, scaleX 0 to 1 over 0.6s with expo.out, then fade out over 0.5s. Place three small reflection circles opposite the source. Drive from a paused timeline.
```

### English · Codex
```text
Add a lens-flare streak over <logo> in <file>: length 480px, reveal 600ms expo.out, fade 500ms, tint #7a8aff, screen blend. Capture at 0.2s, 0.6s, and 1.2s to verify the streak grows and disappears, logo contrast holds, and overlay opacity is 0 at 1.2s.
```

예시 / Example: 렌즈 플레어를 `.hero`에 적용해. / Apply Lens Flare to `.hero`.

## 적용 / Application

- HyperFrames: CSS 그라디언트 스트릭과 원형 반사 몇 개로 충분히 근사된다. scaleX와 opacity만 paused 타임라인에서 보간해 seek를 지원한다
- ReelForge: 브리프에 sourceX/Y, streakPx, tint, showAtMs를 싣는다. 실제 광원 위치는 로고 좌표에 묶는다
- Scrolline Deck: 진행률을 scaleX 0~1에 매핑하고 opacity는 삼각형으로 준다. 스프링 대신 expo.out으로 확장한다

조합 / Pair with: [광선 전환 · Light Ray Transition](../light-ray-transition/) · [렌즈 플레어 전환 · Lens Flare Transition](../lens-flare-transition/) · [블룸 펄스 · Bloom Pulse](../bloom-pulse/) · [빛내림 · God Rays](../god-rays/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/vfx-anamorphic-flare/registry-item.json) (Apache-2.0) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/generate-effects.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
