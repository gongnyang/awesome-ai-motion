# Nº 492 속도 기반 스큐 · Velocity Skew

> 클립 렌더 예정 / Clip rendering planned.

**스크롤이 빨라질수록 글자와 카드가 기울고 멈추면 원래 모양으로 돌아오는 효과**

The faster you scroll, the more letters and cards skew; when it stops they return to their shape.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 피드백, 분위기, 강조 | 웹 UI, 스크롤덱, 숏폼 | gsap |

다른 이름 / Also known as: Scroll velocity skew, 스크롤 속도 기울임, Text Speed Skew Arrival, 텍스트 속도 기울임 등장

## 선택 기준 / Selection

움직임의 속도를 물질의 변형으로 보여준다. 스크롤이나 이동에 물리적 관성감을 준다 / Shows speed as material deformation and gives scroll or movement a physical sense of inertia.

- 스크롤 속도에 반응하는 카드나 타이틀을 만들 때 / For cards or titles that react to scroll speed
- 빠른 이동 뒤 관성으로 늘어지는 느낌을 줄 때 / To give a stretched feel of inertia after fast movement

좋은 예 / Good: 스크롤 속도에 비례해 카드가 최대 ±12도 기울고 정지하면 300ms 안에 0도로 돌아온다
나쁜 예 / Bad: 기울기 제한이 없어 30도 이상 기울어 글자를 읽을 수 없거나, 복귀가 느려 멈춘 뒤에도 기울어 있다
주의 / Avoid: skew ±12도 제한 · 복귀 300ms 이하, 정지 시 반드시 0도

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 최대 skew | ±12도 | 6~15도 | 속도에 비례하되 clamp |
| 복귀 시간 | 300ms | 200~500ms | 정지 후 |
| 속도 계수 | 0.02도/(px/s) | 0.01~0.03 | 진행값 미분 |
| 이징 | power3.out | power2~power4 | 복귀 |
| 대상 | 제목과 카드 | 글자 굵게 | 본문에는 쓰지 않음 |

## 구현 / Implementation (GSAP)

```js
const set=gsap.quickSetter('.card','skewY','deg'); let last=0,sk=0;
function tick(p){ const v=(p-last)*fps; last=p;
 const target=gsap.utils.clamp(-12,12,v*400);
 sk+=(target-sk)*.3; set(sk); }
// 복귀: tl.to('.card',{skewY:0,duration:.3,ease:'power3.out'}) 를 정지 시점에 실행
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<카드>에 속도 기반 스큐를 넣어줘. 스크롤 진행값의 시간 미분(속도)에 0.02도/(px/s)를 곱해 skewY를 ±12도로 clamp하고, 매 프레임 30%씩 목표에 접근시켜 부드럽게 해. 스크롤이 멈추면 300ms power3.out으로 0도로 복귀. 본문에는 걸지 않고 제목과 카드에만 적용해.
```

### 한국어 · Codex
```text
<파일>의 <카드>에 velocity-skew를 구현해. 최대 ±12도, 복귀 300ms power3.out, 계수 0.02도/(px/s). 빠르게 스크롤할 때와 멈춘 뒤 0.4초를 캡처해 빠를 때 기울고 정지 후 0도인지, 기울기가 12도를 넘지 않는지, 글자가 읽히는지 확인해.
```

### English · Claude Code
```text
Add velocity skew to <card>. Multiply the time derivative of scroll progress (speed) by 0.02 deg/(px/s), clamp skewY to +/-12 degrees, and ease toward the target by 30% each frame. When scrolling stops, return to 0 degrees over 300ms with power3.out. Apply only to titles and cards, not body text.
```

### English · Codex
```text
Implement velocity-skew on <card> in <file>: max +/-12 degrees, release 300ms power3.out, coefficient 0.02 deg/(px/s). Capture during a fast scroll and 0.4s after stopping to verify it tilts when fast, returns to 0 at rest, never exceeds 12 degrees, and stays readable.
```

예시 / Example: 속도 기반 스큐를 `.hero`에 적용해. / Apply Velocity Skew to `.hero`.

## 적용 / Application

- HyperFrames: 진행값의 시간 미분을 skew에 매핑하므로 오프라인 렌더에서는 ease 미분을 해석식으로 넣는 편이 seek에 안전하다. 자막과 본문에는 걸지 않는다
- ReelForge: 브리프에 maxSkewDeg, releaseMs, target 선택자를 싣는다. 스크롤이 없는 영상에서는 이동 tween의 속도에 연결한다
- Scrolline Deck: 실제 스크롤 속도를 clamp해 skew에 매핑하는 것이 기본 사용처다. 복귀에는 스프링 대신 power3.out을 쓰고 정지 시 0도를 보장한다

조합 / Pair with: [스크롤 지연 추종 · Scroll Lag](../scroll-lag/) · [관성 이동 · Inertial Glide](../inertial-glide/) · [스미어 프레임 · Smear Frame](../smear-frame/) · [3D 원근 틸트 리빌 · Perspective Tilt Reveal](../perspective-tilt/)

출처 / Sources: [greensock/GSAP](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) (GSAP Standard License) · [motiondivision/motion](https://motion.dev/docs/react-use-velocity) (MIT) · [demos.gsap.com](https://demos.gsap.com/demo/velocity-skew) (unknown) · [animate-css/animate.css](https://github.com/animate-css/animate.css) (Hippocratic-2.1)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
