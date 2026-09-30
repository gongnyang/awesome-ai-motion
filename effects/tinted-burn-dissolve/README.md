# Nº 205 색조 번 디졸브 · Tinted Burn Dissolve

> 클립 렌더 예정 / Clip rendering planned.

**이전 장면의 색이 뜨거운 색조로 바뀌면서 다음 장면으로 섞이는 전환**

The previous scene's color shifts to a hot tint as it blends into the next scene.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 분위기 | 설명 영상, 숏폼, 발표 | webgl |

다른 이름 / Also known as: 색조 연소 페이드

## 선택 기준 / Selection

온도감 있는 장면 이동. 노을빛이나 열기로 덮였다가 새 장면이 나온다 / A warm, temperature-laden move: covered in sunset or heat before the new scene emerges.

- 열, 에너지, 노을 같은 따뜻한 분위기의 장면 이동에서 / Move between scenes with warm mood, such as heat, energy, or sunset.
- 번 전환보다 부드러운 색조 기반 교체가 필요할 때 / When a color-tint swap is needed that is gentler than a burn.

좋은 예 / Good: 앞 장면이 0.7초 동안 주황(0.9, 0.4, 0.2) 색조로 물들며 밝기가 오르고 그 색조가 뒤 장면 위로 이어지다 풀린다
나쁜 예 / Bad: 색조가 너무 진해 두 장면 모두 뭉개지거나, 차가운 톤의 장면에 억지로 걸어 어색하다
주의 / Avoid: 색조 강도 최대 0.6 · 어두운 톤 장면에서는 밝기 부스트를 낮춘다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 0.7s | 0.5~1.0s | 선형 |
| 색조 | (0.9, 0.4, 0.2) | 주황~적갈 | rgb 0~1 |
| 색조 강도 | 0.5 | 0.3~0.6 | 정점 50% |
| 밝기 부스트 | +20% | 0~30% | 중간점 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
tl.to('.tint', { opacity: 0.5, duration: 0.35, ease: 'sine.in' }, 0)
  .to('.a', { opacity: 0, duration: 0.7, ease: 'none' }, 0)
  .fromTo('.b', { opacity: 0 }, { opacity: 1, duration: 0.7, ease: 'none' }, 0)
  .to('.tint', { opacity: 0, duration: 0.35, ease: 'sine.out' }, 0.35);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 색조 번 디졸브를 만들어줘. A와 B는 0.7초 동안 선형으로 교차하고, 그 위에 #e6663a 색조 레이어(mix-blend-mode screen)를 0.35초 동안 opacity 0에서 0.5(sine.in)로 올렸다가 0.35초 동안 0으로(sine.out) 내려. paused 타임라인 하나로 seek되게 해.
```

### 한국어 · Codex
```text
<파일>에 tinted burn dissolve를 넣어. .a opacity 1에서 0과 .b 0에서 1을 0.7s ease none, .tint(#e6663a, screen) opacity 0에서 0.5 (0.35s sine.in) 후 0 (0.35s sine.out). 0.35초 캡처에서 화면 전체가 주황빛이고 두 장면이 반씩 보이는지, 0.7초에 색조가 없는지 확인해.
```

### English · Claude Code
```text
Build a tinted burn dissolve from <targetA> to <targetB>. A and B cross linearly over 0.7 seconds, and over them a #e6663a tint layer (mix-blend-mode screen) rises from opacity 0 to 0.5 over 0.35 seconds (sine.in) and falls back to 0 over 0.35 seconds (sine.out). One paused timeline.
```

### English · Codex
```text
Add a tinted burn dissolve to <file>. .a opacity 1 to 0 and .b 0 to 1 over 0.7s with ease none; .tint (#e6663a, screen) opacity 0 to 0.5 (0.35s sine.in) then to 0 (0.35s sine.out). Capture at 0.35 seconds to confirm an orange-lit frame with both scenes half visible, and at 0.7 seconds to confirm the tint is gone.
```

예시 / Example: 색조 번 디졸브를 `.hero`에 적용해. / Apply Tinted Burn Dissolve to `.hero`.

## 적용 / Application

- HyperFrames: 색조 레이어(#e6663a, mix-blend-mode screen)를 두 장면 사이에 두고 opacity만 움직인다. 정점 시각을 타임라인 0.35초로 고정한다
- ReelForge: 씬 워커 브리프에 tintHex, tintMax, durationMs를 싣고 색조를 씬 팔레트에서 받는다
- Scrolline Deck: 진행률 삼각파(0.5에서 최대)로 색조 강도를 주고 장면 교차는 선형으로 둔다

조합 / Pair with: [번 전환 · Burn Transition](../burn-transition/) · [빛샘 · Light Leak](../light-leak/) · [딥 투 컬러 · Dip to Color](../dip-to-color/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/burn.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
