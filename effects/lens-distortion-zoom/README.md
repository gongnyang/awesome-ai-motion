# Nº 235 렌즈 왜곡 줌 · Lens Distortion Zoom

> 클립 렌더 예정 / Clip rendering planned.

**화면 중심이 확대되는 동안 주변 직선이 휘어졌다가 원래 모양으로 돌아온다.**

Zoom toward the center while radial lens distortion rises and returns to zero.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 가상 카메라 · CAMERA | 고급 | 주목 끌기, 분위기 | 설명 영상, 숏폼, 발표 | webgl |

다른 이름 / Also known as: Optics Compensation

## 선택 기준 / Selection

강한 접근과 광각 렌즈의 공간 팽창감을 전달한다. / Conveys a strong approach and wide-angle spatial expansion.

- 짧은 접근으로 대상에 주목시킬 때 / Draw attention with a brief approach.
- 광각 공간 팽창감을 전환에 더할 때 / Add wide-angle expansion to a transition.

좋은 예 / Good: 700ms 동안 1.4배 접근하며 왜곡을 0.25까지 높였다가 0으로 되돌린다.
나쁜 예 / Bad: 왜곡된 상태로 작은 글자를 계속 읽게 한다.
주의 / Avoid: 왜곡 종료 후 텍스트를 보여준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 700ms | 450~1000ms | 접근과 정착 |
| 최대 왜곡 | 0.25 | 0.1~0.3 | 중간 시점 정점 |
| 종료 확대 | 1.4 | 1.15~1.5 | 화면 중심 배율 |
| 이징 | power2.inOut | power1.inOut~power3.inOut | 급격한 UV 변화 완화 |

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true}), s = {p:0};
// 기존 방사 UV 셰이더의 k와 zoom 유니폼을 구동한다.
tl.to(s, {p:1, duration:0.7, ease:'power2.inOut', onUpdate:()=>{
  uniforms.k.value = 0.25*Math.sin(Math.PI*s.p);
  uniforms.zoom.value = 1 + 0.4*s.p;
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 렌즈 왜곡 줌를 적용해. WebGL에서 중심 기준 방사 UV 왜곡과 화면 배율을 같은 진행값으로 계산한다. 지속 700ms; 최대 왜곡 0.25; 종료 확대 1.4; 이징 power2.inOut. 이징은 power2.inOut로 하고 GSAP 코어 paused 타임라인으로 역방향 seek도 같은 상태를 만들게 해.
```

### 한국어 · Codex
```text
<파일>의 대상 장면에 렌즈 왜곡 줌를 적용해. WebGL에서 중심 기준 방사 UV 왜곡과 화면 배율을 같은 진행값으로 계산한다. 지속 700ms; 최대 왜곡 0.25; 종료 확대 1.4; 이징 power2.inOut. 이징은 power2.inOut를 사용해. 0초·0.35초·0.7초 시점을 캡처하고 시작 상태, 중간 변화, 끝 상태가 정의와 일치하는지 확인해. 같은 시점을 역방향 seek해서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Lens Distortion Zoom to <target> in <file>. Drive a radial UV shader for 700ms: distortion follows 0.25*sin(pi*progress), and zoom increases from 1 to 1.4. Use power2.inOut and a paused GSAP core timeline that produces identical states when seeking backward.
```

### English · Codex
```text
Apply Lens Distortion Zoom to the target scene in <file>. Drive a radial UV shader for 700ms: distortion follows 0.25*sin(pi*progress), and zoom increases from 1 to 1.4. Use power2.inOut. Capture at 0, 0.35, and 0.7 seconds to verify the initial state, the defining intermediate change, and the final state. Seek backward to the same times and compare the images.
```

예시 / Example: 렌즈 왜곡 줌를 `.hero`에 적용해. / Apply Lens Distortion Zoom to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에서 0.7초 진행값을 구동하고 seek마다 좌표와 렌더 상태를 다시 계산한다.
- ReelForge: 씬 워커 브리프에 지속 700ms; 최대 왜곡 0.25; 종료 확대 1.4; 이징 power2.inOut를 싣고 대상 좌표계와 도착 상태를 명시한다.
- Scrolline Deck: 진행률 0~1을 0.7초 타임라인에 매핑하고 scrub에서는 스프링 대신 ease-out 또는 선형 진행을 쓴다.

조합 / Pair with: [줌 전환 · Zoom Through](../zoom-through/) · [방사 속도선 · Radial Speed Lines](../radial-speed-lines/)

출처 / Sources: [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/distort-effects.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
