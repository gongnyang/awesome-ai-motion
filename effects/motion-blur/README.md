# Nº 477 모션 블러 · Motion Blur

> 클립 렌더 예정 / Clip rendering planned.

**빠르게 움직이는 물체의 이동 방향으로 여러 샘플을 겹쳐 흐림을 더하는 효과**

Multiple samples along the direction of motion are blended to add blur to fast-moving objects.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 분위기, 강조 | 설명 영상, 숏폼, 웹 UI | canvas |

다른 이름 / Also known as: Velocity blur, Motion Blur Shutter, 셔터 모션 블러, Temporal supersampling, Shutter Motion Blur, 축 방향 SVG 블러

## 선택 기준 / Selection

실제 카메라 셔터가 만든 속도감과 부드러운 연속성을 준다. 디지털 특유의 끊김을 줄인다 / Adds the speed and smooth continuity a real camera shutter produces, and reduces digital stutter.

- 빠르게 튀어 들어오는 타이틀이나 아이콘에 속도감을 줄 때 / To add speed to titles or icons that snap in quickly
- 프레임 레이트가 낮아 이동이 끊겨 보일 때 / When low frame rate makes motion look choppy

좋은 예 / Good: 제목이 0.35초 동안 1400px를 이동할 때 속도가 가장 빠른 구간에서만 최대 20px 흐려지고 정지하면 선명해진다
나쁜 예 / Bad: 정지한 상태에서도 blur가 남아 글자가 흐려 보이거나, 느린 이동에도 과한 blur를 건다
주의 / Avoid: 정지 프레임에서 blur 0 보장 · 최대 blur 30px 초과 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 셔터각 | 180도 | 90~270도 | 샘플 시간 폭 = 셔터각/360 x 프레임 |
| 샘플 수 | 8개 | 6~16개 | 많을수록 부드럽고 무거움 |
| 최대 blur | 20px | 10~30px | 속도에 비례 |
| 이동 시간 | 350ms | 250~600ms | 빠른 이동일수록 효과 큼 |
| 방향 | 이동 벡터 | x/y | transform 방향과 일치 |

이징 / Ease: `expo.out`

## 구현 / Implementation (GSAP)

```js
const o={x:-1400};
tl.to(o,{x:0,duration:.35,ease:'expo.out',onUpdate(){
 const v=Math.abs(o.x-(o.px??o.x)); o.px=o.x;
 gsap.set('.t',{x:o.x,filter:`blur(${Math.min(20,v*.4)}px)`});}},t);
// 오프라인 렌더는 tl.time 차이로 속도 계산
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>이 왼쪽에서 1400px 이동해 들어올 때 모션 블러를 넣어줘. 이동은 0.35초 expo.out, 속도에 비례해 이동 방향으로만 최대 20px blur를 걸고 정지 프레임에서는 blur 0이 되게 해. 속도는 ease 미분이나 시간 미소 차로 계산해서 paused 타임라인을 seek해도 같은 결과가 나오게 해.
```

### 한국어 · Codex
```text
<파일>의 <대상> 진입에 motion-blur를 적용해. 이동 350ms expo.out, 거리 1400px, 최대 blur 20px, 셔터각 180도 상당. 0.05초, 0.15초, 0.4초를 캡처해 속도가 클 때 blur가 최대이고 0.4초 정지 프레임에서 blur가 0인지, 글자가 선명한지 확인해.
```

### English · Claude Code
```text
Add motion blur to <target> as it enters from the left over 1400px. Move over 0.35s with expo.out and apply blur only along the motion direction, proportional to speed up to 20px, and 0 at rest. Compute speed from the ease derivative or a small time delta so seeking a paused timeline gives identical results.
```

### English · Codex
```text
Apply motion-blur to the entrance of <target> in <file>: move 350ms expo.out over 1400px, max blur 20px, about a 180-degree shutter. Capture at 0.05s, 0.15s, and 0.4s to verify blur peaks at high speed and is 0 at the 0.4s rest frame with crisp text.
```

예시 / Example: 모션 블러를 `.hero`에 적용해. / Apply Motion Blur to `.hero`.

## 적용 / Application

- HyperFrames: 속도는 현재 x와 직전 프레임 x의 차로 구하지 말고 ease 미분값(또는 시간 미소 차)으로 계산해 seek에서도 같게 만든다. 방향 blur는 SVG feGaussianBlur stdDeviation 'x 0'으로 처리한다
- ReelForge: 브리프에 shutterAngle, sampleCount, maxBlurPx, moveMs를 싣는다. 캔버스는 시간 샘플 8개를 add 혼합해 진짜 모션 블러를 만든다
- Scrolline Deck: 스크롤 속도가 아니라 진행률 미분값으로 blur를 정한다. 진행률이 멈추면 blur가 0이 되고 ease-out 구간에서 서서히 줄어든다

조합 / Pair with: [오버랩 · Overlapping Action](../overlapping-action/) · [스미어 프레임 · Smear Frame](../smear-frame/) · [휩팬 · Whip Pan](../whip-pan/) · [스피드 램프 · Speed Ramp](../speed-ramp/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/motion-blur/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/motion-blur-streak.md`) (unknown) · motion dictionary 1-principles.md#8. 2D 속성 기본 동작 (own) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/time-effects.html) (unknown) · [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/references/motion-blur.md) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
