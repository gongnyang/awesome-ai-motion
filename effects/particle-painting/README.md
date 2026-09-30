# Nº 480 입자 붓질 · Particle Painting Advection

> 클립 렌더 예정 / Clip rendering planned.

**이미지 색을 가진 짧은 붓 자국들이 흐름장을 따라 이동하며 그림을 회화처럼 흐트러뜨림**

Short brush marks carrying the image's colors move along a flow field and scatter the picture like a painting.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 고급 | 분위기, 전환 | 숏폼, 설명 영상, 발표 | webgl |

다른 이름 / Also known as: 입자 붓질 이동

## 선택 기준 / Selection

정지 이미지가 유동적인 유화로 바뀌는 느낌. 사진에서 예술로 넘어가는 순간 / A still image turning into fluid oil paint. The moment photography passes into art.

- 사진을 페인팅 스타일로 전환하는 순간을 연출할 때 / Stage the moment a photo turns into a painting.
- 이미지가 흩어졌다가 원래 모습으로 되돌아오는 인트로를 만들 때 / Build an intro where an image scatters and then reassembles.

좋은 예 / Good: 붓 3000개가 이미지 색을 가지고 길이 8px, 폭 2px로 5초 동안 초속 12px 흐름을 따라 움직이다가 마지막에 원위치로 복귀한다
나쁜 예 / Bad: 붓이 너무 커서 이미지가 뭉개지거나 복귀가 없어 결과가 원본을 알아볼 수 없다
주의 / Avoid: 붓 길이 14px 초과 금지 · 복귀 구간 없이 종료 금지(원본 정체성 상실)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 붓 수 | 3000 | 1500~6000 | 격자 기반 고정 배치 |
| 붓 크기 | 8x2px | 6x2~12x3 | 흐름 방향으로 회전 |
| 이동 | 12px/s | 8~20 | 흐름장 속도 |
| 복귀 | 0.02 | 0.01~0.05 | 프레임당 원위치 당김 → 마지막 1.2초에 1.0 |
| 지속 | 5s | 3~8s | 재생 길이 |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
const u = { t: 0, back: 0 };
tl.to(u, { t: 5, duration: 5, ease: 'none', onUpdate: draw }, 0)
  .to(u, { back: 1, duration: 1.2, ease: 'sine.inOut', onUpdate: draw }, 3.8);
// 붓 i: 홈 위치 h_i(격자), 색은 원본에서 샘플
// pos = h + flow(h, t) * (1 - back); angle = atan2(flow.y, flow.x)
// flow(p,t) = vec2(cos(n), sin(n)) * 12 * t, n = fbm(p*0.004 + t*0.1) * 6.28
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 이미지에 입자 붓질 효과를 넣어줘. 격자로 고정 배치한 붓 3000개가 홈 위치의 이미지 색을 가지고, fbm 흐름장을 따라 초속 12px로 5초 동안 이동하며 길이 8px, 폭 2px 사각형으로 흐름 방향에 맞춰 회전하게 해. 3.8초부터 1.2초 동안 sine.inOut으로 홈 위치로 복귀해 원본 이미지가 되게 해.
```

### 한국어 · Codex
```text
<파일>의 캔버스에 붓 3000개를 격자로 배치하고 색은 원본 텍스처에서 샘플해. pos=home+flow(home,t)*(1-back), flow=vec2(cos n,sin n)*12*t, n=fbm(p*0.004+t*0.1)*6.28. t는 5초 선형, back은 3.8초부터 1.2초 sine.inOut로 0→1. 1초·3초·5초 캡처로 중간에 회화처럼 흐트러지고 끝에 원본이 복원되는지 확인해.
```

### English · Claude Code
```text
Add particle painting to the image in <target>. 3000 brush marks placed on a fixed grid carry the image colors at their home positions, move along an fbm flow field at 12px per second for 5 seconds as 8px by 2px rectangles rotated to the flow direction, then return home starting at 3.8 seconds over 1.2 seconds with sine.inOut so the original image is restored.
```

### English · Codex
```text
In the canvas of <file>, place 3000 brushes on a grid and sample their colors from the source texture. pos=home+flow(home,t)*(1-back), flow=vec2(cos n,sin n)*12*t, n=fbm(p*0.004+t*0.1)*6.28. Tween t linearly over 5 s and back 0 to 1 from 3.8 s over 1.2 s sine.inOut. Capture 1 s, 3 s and 5 s to confirm painterly scatter mid-way and full restoration at the end.
```

예시 / Example: 입자 붓질를 `.hero`에 적용해. / Apply Particle Painting Advection to `.hero`.

## 적용 / Application

- HyperFrames: 붓 위치를 홈 위치 + 흐름 적분 근사(flow*t)로 계산하고 복귀 계수 back으로 홈으로 당긴다. 상태가 없어 seek가 맞는다
- ReelForge: 씬 브리프에 이미지, 붓 3000, 크기 8x2, 이동 12px/s, 복귀 시작 3.8초를 싣는다
- Scrolline Deck: back을 진행률 0.75~1.0에 걸어 스크롤 끝에서 원본이 복원되게 한다. 스프링 대신 sine.inOut

조합 / Pair with: [흐름장 · Flow Field](../flow-field/) · [유체 잉크 · Fluid Ink Advection](../fluid-ink/) · [잉크 번짐 · Ink Bleed](../ink-bleed/) · [입자 이미지 공개 · Particle image reveal](../particle-image-reveal/)

출처 / Sources: [piellardj/paint-webgl](https://github.com/piellardj/paint-webgl) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
