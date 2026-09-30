# Nº 140 리플 디졸브 · Ripple Dissolve

> 클립 렌더 예정 / Clip rendering planned.

**한 지점에서 퍼지는 동심 파문이 화면을 휘게 하며 다음 장면을 드러내는 전환**

Concentric ripples spread from one point, bending the frame while revealing the next scene.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 분위기 | 설명 영상, 숏폼, 웹 UI | webgl |

다른 이름 / Also known as: Ripple distortion, 물결 왜곡, 물결 디졸브, Water drop reveal, 물방울 파문 공개

## 선택 기준 / Selection

물 위에 돌이 떨어진 듯한 유기적 흔들림. 장면이 액체처럼 교체된다 / An organic wobble like a stone dropped in water: the scene changes as if it were liquid.

- 장면 전환에 물성과 부드러움을 주고 싶을 때 / Give a scene change a soft, physical quality.
- 클릭이나 터치 지점에서 화면이 바뀌는 UI 연출에서 / Trigger the change from a click or touch point in UI demos.

좋은 예 / Good: 화면 중심에서 시작한 파문이 0.9초 동안 퍼지며 최대 30px 변위로 화면을 흔들고, 파문이 지나간 자리에 뒤 장면이 드러난다
나쁜 예 / Bad: 파동 주파수가 높아 화면이 유리 깨진 듯 지글거리거나, 변위가 화면 가장자리까지 그대로 남는다
주의 / Avoid: 변위는 파문 반경이 커질수록 감쇠시킨다(가장자리에서 0) · GPU 셰이더가 없는 환경에서는 clipPath 원 확장으로 폴백한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 0.9s | 0.6~1.4s | 파문이 화면 끝까지 |
| 최대 변위 | 30px | 10~40px | 1920x1080 기준 |
| 파동 수 | 3 | 2~5 | 반경당 개수 |
| 중심 | 50% 50% | 클릭 좌표 | UI에서는 커서 위치 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
const u = { p: 0 };
tl.to(u, { p: 1, duration: 0.9, ease: 'power2.out', onUpdate: () => {
  const r = u.p * 1.2, amp = 30 * (1 - u.p);
  ripple.setAttribute('scale', amp); mask.setAttribute('r', r * 960);
} });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 리플 디졸브 전환을 만들어줘. 중심 50% 50%에서 파문이 0.9초 동안 퍼지고, 변위 진폭은 30px에서 0으로 감쇠하며, 파문 반경 안쪽에 B가 드러나게 해. 이징 power2.out, 진행값은 GSAP 상태 객체 하나로 두고 paused 타임라인에서 seek되게 해.
```

### 한국어 · Codex
```text
<파일>에 ripple dissolve를 적용해. progress 0에서 1을 0.9초 power2.out으로 보간하고, 변위 진폭은 30*(1-p) px, 마스크 반경은 progress에 비례해 화면 대각선 이상까지 키운다. 0.3초, 0.6초, 0.9초 시점을 캡처해 파문 고리가 퍼지는지, 0.9초에 왜곡이 0인지 확인해.
```

### English · Claude Code
```text
Build a ripple dissolve from <targetA> to <targetB>. Ripples spread from the center (50% 50%) over 0.9 seconds, displacement amplitude decays from 30px to 0, and B is revealed inside the ripple radius. Use power2.out, drive it with a single GSAP state object, and keep it in one paused timeline that seeks.
```

### English · Codex
```text
Apply a ripple dissolve in <file>. Tween progress 0 to 1 over 0.9 seconds with power2.out, amplitude 30*(1-p) px, mask radius growing with progress beyond the frame diagonal. Capture at 0.3, 0.6, and 0.9 seconds to confirm the ring expands and that distortion is 0 at 0.9 seconds.
```

예시 / Example: 리플 디졸브를 `.hero`에 적용해. / Apply Ripple Dissolve to `.hero`.

## 적용 / Application

- HyperFrames: feDisplacementMap의 scale과 원 반경을 progress 객체 하나에서 계산한다. WebGL이면 uTime을 타임라인 값으로만 전달해 seek을 보장한다
- ReelForge: 씬 워커 브리프에 centerX, centerY, amplitudePx, waves를 파라미터로 싣고 셰이더 캔버스는 씬 안에서만 만든다
- Scrolline Deck: 진행률 p를 반경과 진폭 감쇠에 직접 매핑한다. 감쇠식은 ease-out이며 스프링을 쓰지 않는다

조합 / Pair with: [파문 왜곡 · Ripple Distortion](../ripple-distortion/) · [웨이브 디졸브 · Wave Dissolve](../wave-dissolve/) · [마스크 전환 · Shape Mask Transition](../iris-mask/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/ripple-waves/registry-item.json) (Apache-2.0) · [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/ripple.glsl) (MIT) · [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/ripple) (Remotion License) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT) · [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/WaterDrop.glsl) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
