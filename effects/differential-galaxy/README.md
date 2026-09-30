# Nº 516 차등 회전 은하 · Differential galaxy

> 클립 렌더 예정 / Clip rendering planned.

**안쪽 별이 바깥 별보다 빨리 돌아 나선팔이 시간에 따라 감기는 은하 시각화**

Inner stars orbit faster than outer ones, so spiral arms wind up over time.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 고급 | 분위기, 설명, 브랜딩 | 설명 영상, 숏폼, 발표 | webgl |

## 선택 기준 / Selection

차등 회전이 만드는 나선 구조를 보여주고, 규모와 우주적 경외감을 준다 / Shows the spiral structure produced by differential rotation and gives a sense of scale and cosmic awe.

- 우주, 데이터 규모, 네트워크 성장을 은유하는 배경을 만들 때 / For backgrounds that metaphorize space, data scale, or network growth
- 안쪽과 바깥의 속도 차이를 설명하는 장면 / To explain speed differences between inner and outer parts

좋은 예 / Good: 별 20000개가 8초 동안 안쪽 각속도가 바깥의 2배로 돌며 처음 흩어진 점이 나선팔로 감긴다
나쁜 예 / Bad: 별 수가 너무 많아 렌더가 끊기거나, 모든 별이 같은 속도로 돌아 나선이 생기지 않는다
주의 / Avoid: 별 30000개 초과 금지(WebGL points 기준) · 각속도 비 3배 초과 금지(팔이 과하게 감김)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 총 지속 | 8000ms | 5000~12000ms | 한 번 감김 |
| 별 수 | 20000개 | 8000~30000개 | 시드 고정 |
| 안쪽 각속도 | 2배 | 1.5~3배 | 바깥 대비 |
| 반경 | 80~420px | 300~520px | 1920x1080 기준 |
| 점 크기 | 1.5px | 1~2.5px | additive 혼합 |

이징 / Ease: `linear`

## 구현 / Implementation (GSAP)

```js
// vertex: theta = theta0 + omega(r)*uProg*T,  omega(r)=mix(2.,1.,r/R)
float r=length(pos0.xy);
float w=mix(2.,1.,clamp(r/uR,0.,1.));
float a=atan(pos0.y,pos0.x)+w*uProg*6.283*.6;
vec2 p=r*vec2(cos(a),sin(a));
gl_Position=proj*vec4(p,0.,1.); gl_PointSize=1.5;
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<배경>에 차등 회전 은하를 넣어줘. WebGL points로 별 20000개(시드 고정)를 반경 80~420px에 로그 스파이럴로 흩어놓고, 정점 셰이더에서 각속도를 안쪽 2배에서 바깥 1배로 mix해 8초 동안 linear로 회전시켜. 점 크기 1.5px, additive 혼합, 안쪽은 따뜻하고 바깥은 차가운 색. uProg만 paused 타임라인이 구동해.
```

### 한국어 · Codex
```text
<파일>에 differential-galaxy WebGL을 구현해. 별 20000개, 8000ms linear, 안쪽 각속도 2배, 반경 80~420px, seed 고정. 0초, 4초, 8초를 캡처해 시간이 갈수록 나선팔이 감기는지, 안쪽이 더 많이 돌았는지, 60fps 근처로 재생되는지 확인해.
```

### English · Claude Code
```text
Add a differentially rotating galaxy behind <target>. With WebGL points, scatter 20000 stars (fixed seed) across radius 80-420px on a log spiral, and in the vertex shader mix angular velocity from 2x at the center to 1x at the rim, rotating over 8s linear. Point size 1.5px, additive blending, warm inside and cool outside. Only uProg is driven by a paused timeline.
```

### English · Codex
```text
Implement a differential-galaxy WebGL scene in <file>: 20000 stars, 8000ms linear, inner angular speed 2x, radius 80-420px, fixed seed. Capture at 0s, 4s, and 8s to verify spiral arms wind up over time, the inner region rotated more, and playback stays near 60fps.
```

예시 / Example: 차등 회전 은하를 `.hero`에 적용해. / Apply Differential galaxy to `.hero`.

## 적용 / Application

- HyperFrames: 정점 셰이더에서 별 위치를 uProg의 순수 함수로 계산한다. 별 초기 분포는 시드 고정 버퍼로 만들고 paused 타임라인이 uProg만 구동한다
- ReelForge: 브리프에 starCount, omegaInner, radiusRange, seed를 싣는다. 색은 안쪽 따뜻하게 바깥 차갑게 그라디언트 하나
- Scrolline Deck: 스크롤 진행률을 uProg에 그대로 매핑해 되감기하면 나선이 풀린다. 별의 이동량을 제한해 스크럽 시 번쩍임을 막는다

조합 / Pair with: [입자 소용돌이 · Particle Vortex](../particle-vortex/) · [스타필드 워프 · Starfield Warp](../starfield-warp/) · [이상 끌개 · Strange Attractor Trails](../strange-attractor/) · [다체 궤도 군집 · N-body Orbital Cluster](../nbody-cluster/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/spiral-galaxy/registry-item.json) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
