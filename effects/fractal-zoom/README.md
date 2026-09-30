# Nº 524 프랙탈 줌 · Fractal Zoom

> 클립 렌더 예정 / Clip rendering planned.

**반복 무늬의 작은 부분으로 계속 확대하면 비슷한 구조와 새로운 세부가 다시 나타난다.**

Continuously zoom into a recomputed fractal to reveal repeating structure and new detail.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 고급 | 주목 끌기, 분위기 | 설명 영상, 숏폼, 발표 | webgl |

## 선택 기준 / Selection

자기 유사성과 무한히 이어지는 규모를 시각화한다. / Conveys self-similarity and an extending sense of scale.

- 자기 유사성을 설명할 때 / Explain self-similarity.
- 반복 구조의 규모를 분위기로 보여줄 때 / Suggest scale through repeating structure.

좋은 예 / Good: 경계 중심을 고정하고 6초 동안 로그 배율로 16배 확대해 세부가 이어진다.
나쁜 예 / Bad: 단순 이미지 한 장을 확대해 픽셀만 커진다.
주의 / Avoid: 실제 프랙탈 재계산과 충분한 수치 정밀도를 확보한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 6000ms | 4000~10000ms | 세부 관찰 시간 |
| 확대 범위 | 1~16 | 1~8 또는 1~32 | 로그 배율 보간 |
| 최대 반복 | 100 | 60~200 | 셰이더 계산 상한 |
| 중심 좌표 | -0.7435, 0.1314 | 경계의 유효 복소 좌표 | 세부가 이어지는 위치 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true}), s = {p:0};
// 기존 프랙탈 셰이더는 center, zoom, iterations를 사용한다.
uniforms.center.value.set(-0.7435,0.1314);
uniforms.iterations.value = 100;
tl.to(s, {p:1, duration:6, ease:'none', onUpdate:()=>{
  uniforms.zoom.value = Math.exp(Math.log(16)*s.p);
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 프랙탈 줌를 적용해. WebGL 프래그먼트 셰이더에서 복소평면 중심과 배율을 보간하고 프랙탈을 매 프레임 다시 계산한다. 지속 6000ms; 확대 범위 1~16; 최대 반복 100; 중심 좌표 -0.7435, 0.1314. 이징은 none로 하고 GSAP 코어 paused 타임라인으로 역방향 seek도 같은 상태를 만들게 해.
```

### 한국어 · Codex
```text
<파일>의 대상 장면에 프랙탈 줌를 적용해. WebGL 프래그먼트 셰이더에서 복소평면 중심과 배율을 보간하고 프랙탈을 매 프레임 다시 계산한다. 지속 6000ms; 확대 범위 1~16; 최대 반복 100; 중심 좌표 -0.7435, 0.1314. 이징은 none를 사용해. 0초·3.0초·6초 시점을 캡처하고 시작 상태, 중간 변화, 끝 상태가 정의와 일치하는지 확인해. 같은 시점을 역방향 seek해서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Fractal Zoom to <target> in <file>. Recompute the fractal in a shader, centered at (-0.7435, 0.1314), with 100 iterations; interpolate zoom logarithmically from 1 to 16 over 6000ms. Use none and a paused GSAP core timeline that produces identical states when seeking backward.
```

### English · Codex
```text
Apply Fractal Zoom to the target scene in <file>. Recompute the fractal in a shader, centered at (-0.7435, 0.1314), with 100 iterations; interpolate zoom logarithmically from 1 to 16 over 6000ms. Use none. Capture at 0, 3.0, and 6 seconds to verify the initial state, the defining intermediate change, and the final state. Seek backward to the same times and compare the images.
```

예시 / Example: 프랙탈 줌를 `.hero`에 적용해. / Apply Fractal Zoom to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에서 6초 진행값을 구동하고 seek마다 좌표와 렌더 상태를 다시 계산한다.
- ReelForge: 씬 워커 브리프에 지속 6000ms; 확대 범위 1~16; 최대 반복 100; 중심 좌표 -0.7435, 0.1314를 싣고 대상 좌표계와 도착 상태를 명시한다.
- Scrolline Deck: 진행률 0~1을 6초 타임라인에 매핑하고 scrub에서는 스프링 대신 ease-out 또는 선형 진행을 쓴다.

조합 / Pair with: [프랙탈 구름 · Fractal Clouds](../fractal-clouds/) · [연속 이동 · Continuous Motion](../continuous-motion/)

출처 / Sources: [processing/p5.js-website](https://p5js.org/examples/Math-And-Physics-Mandelbrot/) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
