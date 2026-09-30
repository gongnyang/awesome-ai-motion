# Nº 130 번 전환 · Burn Transition

> 클립 렌더 예정 / Clip rendering planned.

**불규칙한 경계가 타들어 가듯 퍼지며 앞 장면을 지우고 다음 장면을 드러내는 전환**

An irregular edge burns outward, erasing the old scene and revealing the next, leaving a hot glow along the border.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 주목 끌기 | 숏폼, 설명 영상, 제품 시연 | webgl |

다른 이름 / Also known as: Page burn, 페이지 소각, Noise burn edge, 노이즈 연소 테두리, dissolve(), Undulating burn out, 물결 연소 와이프

## 선택 기준 / Selection

파괴와 새 시작. 경계에 남는 뜨거운 빛이 극적인 무게를 준다 / Destruction and a fresh start, given dramatic weight by the glowing edge.

- 낡은 방식에서 새 방식으로 넘어가는 이야기의 전환점에서 / Mark the turning point from an old way to a new one in a story.
- 극적이고 손에 잡히는 질감이 필요한 오프닝이나 클라이맥스에서 / Open or climax a piece that needs a tactile, dramatic texture.

좋은 예 / Good: 노이즈 임계값이 1초 동안 0에서 1로 올라가며 타는 경계가 번지고, 경계 폭 화면의 1%에 주황색 빛이 남는다
나쁜 예 / Bad: 경계 노이즈가 프레임마다 달라져 깜빡이거나, 발광색이 채도 100%라 화면이 조잡해 보인다
주의 / Avoid: 노이즈 시드는 고정한다(Math.random 금지) · 발광 경계 폭 화면 2% 초과 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 1.0s | 0.7~1.5s | 진행률 0에서 1 |
| 시드 | 1 | 정수 | 고정 필수 |
| 발광 폭 | 화면의 1% | 0.5~2% | 경계 띠 두께 |
| 발광색 | #ff8a3d | 주황~황색 | 중심은 밝게 #ffd9a0 |

이징 / Ease: `power1.inOut`

## 구현 / Implementation (GSAP)

```js
const u = { p: 0 };
tl.to(u, { p: 1, duration: 1.0, ease: 'power1.inOut', onUpdate: () => {
  const t = u.p * 1.2 - 0.1;                 // 임계값
  matte.setAttribute('tableValues', `0 ${t} ${t + 0.02} 1`);
} });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 번 전환을 만들어줘. seed 1 고정 노이즈 마스크의 임계값을 1초 동안 power1.inOut으로 0에서 1로 올려 A를 태우며 B를 드러내고, 경계에 화면의 1% 폭으로 #ff8a3d 발광 띠를 넣어. Math.random은 쓰지 말고 진행값은 GSAP 상태 객체로 paused 타임라인에서 seek되게 해.
```

### 한국어 · Codex
```text
<파일>에 burn transition을 적용해. 고정 seed=1 노이즈 임계값 progress를 1.0s, power1.inOut으로 0에서 1로 보간하고 임계값 근처 1% 폭에 #ff8a3d 발광을 합성한다. 0.3초, 0.5초, 0.8초 프레임에서 구멍이 확장하는지 확인하고 같은 시각을 두 번 캡처해 픽셀이 동일한지도 비교해.
```

### English · Claude Code
```text
Build a burn transition from <targetA> to <targetB>. Raise a fixed-seed (seed 1) noise mask threshold from 0 to 1 over 1 second with power1.inOut to burn A away and reveal B, with a #ff8a3d glowing band about 1% of the frame wide at the edge. No Math.random; drive progress from a GSAP state object in one paused timeline that seeks.
```

### English · Codex
```text
Apply a burn transition in <file>. Tween a fixed seed=1 noise threshold from 0 to 1 over 1.0s with power1.inOut and composite a #ff8a3d glow across a 1% band near the threshold. Check that holes expand at 0.3, 0.5, and 0.8 seconds, and capture the same timestamp twice to confirm identical pixels.
```

예시 / Example: 번 전환를 `.hero`에 적용해. / Apply Burn Transition to `.hero`.

## 적용 / Application

- HyperFrames: SVG feTurbulence의 seed를 고정하고 feComponentTransfer로 임계값만 움직인다. 발광 띠는 임계값 ±0.02 구간에 합성한다
- ReelForge: 씬 워커 브리프에 seed, burnWidthPct, edgeColor, durationMs를 싣는다. 노이즈 텍스처는 미리 구워 두면 렌더가 안정적이다
- Scrolline Deck: 진행률 p를 임계값에 직접 매핑한다. 스크롤을 정지했을 때 반쯤 탄 화면이 남는 것이 의도이므로 경계 색을 절제한다

조합 / Pair with: [노이즈 디졸브 전환 · Noise Dissolve Transition](../noise-dissolve/) · [빛샘 · Light Leak](../light-leak/) · [윤곽 추출 스타일 전환 · Edge Trace Stylization](../edge-trace-transition/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/ridged-burn/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-destruction/registry-item.json) (Apache-2.0) · [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/dissolve.glsl) (MIT) · [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/burn0.glsl) (MIT) · [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/dissolve) (Remotion License)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
