# Nº 209 워프 디졸브 · Warp Dissolve

> 클립 렌더 예정 / Clip rendering planned.

**앞 장면과 뒤 장면이 서로 반대 방향으로 휘고 늘어나며 교체되는 전환**

The outgoing and incoming scenes bend and stretch in opposite directions as they swap, then the warp relaxes.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 분위기 | 설명 영상, 제품 시연, 숏폼 | webgl |

다른 이름 / Also known as: Cross warp, 교차 왜곡 모프, 교차 왜곡, Displacement Image Transition, 변위 이미지 전환, Liquid distortion slideshow, Directional warp, 방향 압축 왜곡, Displacement map dissolve, 변위 맵 디졸브, Color driven morph, 색 기반 모프

## 선택 기준 / Selection

두 상태의 형태가 유동적으로 이어진다는 감각. 모프에 가까운 부드러운 변형 / Two states flow into each other like a morph.

- 형태나 색이 비슷한 두 장면이 이어져 보이게 할 때 / Make two scenes of similar shape or color feel connected.
- 단순 크로스페이드가 밋밋한 챕터 전환에서 / Replace a flat crossfade at a chapter change.

좋은 예 / Good: 앞 장면은 화면 폭의 8%만큼 오른쪽으로, 뒤 장면은 왼쪽으로 휘며 0.9초 동안 교차해 정점에서 왜곡이 최대가 되고 도착 때 0으로 풀린다
나쁜 예 / Bad: 변위 맵이 거칠어 노이즈가 반짝이거나, 변위가 화면의 20%를 넘어 알아볼 수 없다
주의 / Avoid: 변위 강도 화면 12% 초과 금지 · 변위 맵 이미지가 없으면 저주파 노이즈로 대체하고 시드를 고정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 0.9s | 0.6~1.4s | 교차점 50% |
| 변위 강도 | 화면 8% | 3~12% | 앞 뒤 반대 방향 |
| 변위 맵 | 1장(저주파) | 노이즈/그라디언트 | 선택 |
| 이징 | power2.inOut | sine~power3 | 정점이 부드럽게 |

## 구현 / Implementation (GSAP)

```js
const u = { p: 0 };
tl.to(u, { p: 1, duration: 0.9, ease: 'power2.inOut', onUpdate: () => {
  const a = 0.08 * Math.sin(Math.PI * u.p);         // 화면 폭 비율
  warpA.set(+a, u.p); warpB.set(-a, 1 - u.p);
} });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>와 <대상B> 사이에 워프 디졸브를 만들어줘. 0.9초 동안 진행값 p를 0에서 1로 power2.inOut으로 올리고, 변위는 화면 폭의 8%*sin(pi*p)로 A는 +방향, B는 -방향으로 걸어. 혼합률은 p이며 변위 맵은 <파일>의 저주파 노이즈 이미지를 써. paused 타임라인 하나에서 seek되게 해.
```

### 한국어 · Codex
```text
<파일>에 warp dissolve를 적용해. p를 0에서 1로 0.9s power2.inOut으로 올리고 A 변위 +0.08*sin(pi p), B 변위 -0.08*sin(pi p), 혼합 mix(A,B,p). 0.45초 캡처에서 왜곡이 최대이고 두 장면이 절반씩 섞였는지, 0초와 0.9초에서 왜곡이 0인지 확인해.
```

### English · Claude Code
```text
Build a warp dissolve between <targetA> and <targetB>. Ramp progress p from 0 to 1 over 0.9 seconds with power2.inOut. Displace A by 8% of frame width times sin(pi*p) in one direction and B in the opposite direction, blending by p, using the low-frequency noise map in <file>. Keep it in one paused timeline that seeks.
```

### English · Codex
```text
Apply a warp dissolve in <file>. Tween p from 0 to 1 over 0.9s with power2.inOut, A displacement +0.08*sin(pi p), B displacement -0.08*sin(pi p), blend mix(A,B,p). Capture at 0.45 seconds to confirm maximum warp with the scenes half mixed, and at 0 and 0.9 seconds to confirm zero distortion.
```

예시 / Example: 워프 디졸브를 `.hero`에 적용해. / Apply Warp Dissolve to `.hero`.

## 적용 / Application

- HyperFrames: displacement 값과 혼합률을 진행값 하나에서 계산한다. 변위 맵은 프로젝트에 파일로 포함해 렌더 환경 차이를 없앤다
- ReelForge: 씬 워커 브리프에 strengthPct, mapAsset, midPoint를 싣는다. 변위 맵 이름을 파라미터로 열어 둔다
- Scrolline Deck: 진행률 p를 sin(pi*p)로 변위에 매핑해 양 끝에서 0이 되게 한다. 스크롤이 멈춰도 왜곡이 남지 않는 구간을 양 끝에 둔다

조합 / Pair with: [스월 전환 · Swirl Transition](../swirl-transition/) · [웨이브 디졸브 · Wave Dissolve](../wave-dissolve/) · [크로스페이드 · Crossfade](../crossfade/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/cross-warp-morph/registry-item.json) (Apache-2.0) · [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/crosswarp.glsl) (MIT) · [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/crosswarp) (Remotion License) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
