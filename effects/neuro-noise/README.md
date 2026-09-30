# Nº 505 뉴로 노이즈 · Neuro Noise Veins

> 클립 렌더 예정 / Clip rendering planned.

**얇고 밝은 선과 골이 계속 접히고 퍼지며 신경망이나 혈관 같은 망 구조를 만든다**

Thin bright lines and valleys keep folding and spreading into a web like neurons or veins.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 중급 | 분위기, 브랜딩 | 설명 영상, 숏폼, 발표 | webgl |

다른 이름 / Also known as: 신경 노이즈 맥, Neuro noise

## 선택 기준 / Selection

살아 있는 신호망과 복잡한 활동의 인상을 준다. 정확한 정보 없이도 지능이나 생물의 배경 분위기를 만든다 / Suggests a living signal network and complex activity. It builds an intelligent, organic backdrop without carrying exact information.

- AI, 신경, 네트워크 주제의 표지나 구간 배경을 깔 때 / Set a cover or section background for AI, neural or network topics.
- 단색 배경이 너무 비어 보일 때 낮은 대비의 움직이는 질감을 더할 때 / Add a low-contrast moving texture when a flat background feels empty.

좋은 예 / Good: 어두운 남색 바탕에 폭 0.03UV의 밝은 선이 0.2/s 속도로 천천히 접히고 퍼지며, 전경 제목은 그 위에서 또렷이 읽힌다
나쁜 예 / Bad: 대비를 1.0으로 올리고 속도를 1.0/s 이상으로 빠르게 돌려 눈이 피로하고 제목이 묻힌다
주의 / Avoid: 대비 0.75 초과 금지(전경 글자가 묻힘) · 속도 0.4/s 초과 금지(맥이 아니라 소용돌이처럼 보임)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 스케일 | 3 | 2~5 | 클수록 선이 촘촘함 |
| 선 폭 | 0.03UV | 0.02~0.05UV | 좁은 밝기 띠의 폭 |
| 시간 속도 | 0.2/s | 0.1~0.4/s | 느릴수록 고급스러움 |
| 대비 | 0.75 | 0.5~0.85 | 배경일 때는 낮게 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const u = { t: 0 };
tl.to(u, { t: 1.2, duration: 6, ease: 'none',
  onUpdate: () => mat.uniforms.uTime.value = u.t }, 0); // 0.2/s x 6s
// GLSL: p = uv * 3.0; for (i<6) p += sin(p.yx * 1.7 + uTime) * 0.6; v = smoothstep(0.03, 0.0, abs(sin(p.x + p.y)));
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 뒤에 뉴로 노이즈 배경을 WebGL로 만들어줘. 스케일 3, 선 폭 0.03UV, 시간 속도 0.2/s, 대비 0.75, 색은 진남색 바탕에 청록 선으로 6초 동안 재생하고, uTime은 GSAP 타임라인 tween 하나로만 구동해.
```

### 한국어 · Codex
```text
<파일>에 neuro-noise 프래그먼트 셰이더를 추가해. 스케일 3, 선 폭 0.03UV, 속도 0.2/s, 대비 0.75, 6초, ease none. uTime은 timeline progress로만 갱신한다. 0초, 3초, 6초를 캡처해 선 굵기가 균일하고 무늬가 서서히 변하는지, 전경 제목이 가독성을 유지하는지 확인해.
```

### English · Claude Code
```text
Build a neuro noise background behind <target> in WebGL. Scale 3, line width 0.03 UV, time speed 0.2/s, contrast 0.75, teal lines on a deep navy base, 6 seconds. Drive uTime from a single GSAP timeline tween.
```

### English · Codex
```text
Add a neuro-noise fragment shader to <file>: scale 3, line width 0.03 UV, speed 0.2/s, contrast 0.75, 6 seconds, ease none. Update uTime from timeline progress only. Capture at 0s, 3s and 6s and verify line thickness is uniform, the pattern evolves slowly, and the foreground title stays legible.
```

예시 / Example: 뉴로 노이즈를 `.hero`에 적용해. / Apply Neuro Noise Veins to `.hero`.

## 적용 / Application

- HyperFrames: uTime을 paused 타임라인 tween으로만 올린다. 셰이더 안에 Date.now나 clock 의존이 없어야 seek 검증이 통과한다
- ReelForge: 씬 워커 브리프에 스케일 3, 선 폭 0.03, 속도 0.2/s, 대비 0.75, 색 두 가지를 싣는다. 제목 레이어는 z 위에 별도로 둔다
- Scrolline Deck: 진행률 0..1에 uTime 0~1.2를 선형으로 대응시킨다. 스크롤을 멈추면 무늬도 멈추므로 홀드 구간이 필요하면 아주 느린 별도 루프를 더한다

조합 / Pair with: [도메인 워핑 · Domain Warping](../domain-warping/) · [난류 왜곡 · Turbulent Displace](../turbulent-displace/) · [입자 연결망 · Connected Particle Network](../particle-network/)

출처 / Sources: [paper-design/shaders](https://shaders.paper.design/neuro-noise) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
