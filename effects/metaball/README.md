# Nº 526 메타볼 · Metaball

> 클립 렌더 예정 / Clip rendering planned.

**둥근 방울들이 가까워지면 목이 생겨 붙고 멀어지면 다시 분리되는 액체 합체 효과**

Round blobs grow necks and fuse as they approach, then separate again as they move apart.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 중급 | 분위기, 설명, 전환 | 설명 영상, 웹 UI, 숏폼 | svg |

다른 이름 / Also known as: Gooey Metaball, 점성 방울 합체

## 선택 기준 / Selection

부드러운 유기적 연결과 분열을 보여주고 개체가 하나로 합쳐지는 은유를 만든다 / Shows soft organic connection and division, a metaphor for individual pieces becoming one.

- 요소가 합쳐지거나 나뉘는 과정을 액체처럼 보여줄 때 / To show elements merging or splitting like liquid
- 로딩, 메뉴 버튼, 로고 인트로에 끈적이는 물질감을 줄 때 / To give loaders, menu buttons, and logo intros a sticky material feel

좋은 예 / Good: 반경 30px 방울 5개가 2.2초 동안 중앙으로 모이며 목으로 이어져 하나의 큰 방울이 된다
나쁜 예 / Bad: blur가 커서 경계가 뭉개진 채 남거나, 방울이 너무 많아 어떤 것이 합쳐지는지 알 수 없다
주의 / Avoid: 최종 프레임에서 threshold로 경계가 또렷해야 한다 · 방울 8개 초과 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 합체 구간 | 2200ms | 1400~3000ms | 모임에서 합체 |
| 방울 수 | 5개 | 3~8개 | 반경 30px |
| blur | 12px | 8~18px | feGaussianBlur |
| 임계 필터 | alpha 20/-9 | 18~24/-8~-10 | feColorMatrix |
| 이징 | power2.inOut | power2~power3 | 중심 모임 |

## 구현 / Implementation (GSAP)

```js
/* <filter id=goo><feGaussianBlur stdDeviation=12/><feColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -9'/></filter> 을 <g filter=url(#goo)>에 적용 */
circles.forEach((c,i)=>tl.to(c,{attr:{cx:960,cy:540},duration:2.2,ease:'power2.inOut'},t+i*.05));
tl.to('.big',{attr:{r:70},duration:.6,ease:'back.out(1.4)'},t+1.9);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<로고>가 방울 5개가 합쳐져 나타나게 해줘. SVG에서 원 5개(반경 30px)를 g에 담아 feGaussianBlur 12px와 feColorMatrix 알파 20/-9 goo 필터를 걸고, 2.2초 동안 power2.inOut으로 화면 중심으로 모으며 0.05초씩 어긋나게 출발시켜. 합쳐진 뒤 반경을 70px로 0.6초 키워. paused 타임라인으로 구동해.
```

### 한국어 · Codex
```text
<파일>에 metaball goo 효과를 구현해. 방울 5개 반경 30px, blur 12px, 알파 20/-9, 합체 2200ms power2.inOut, 시작차 50ms. 0초, 0.8초, 1.6초, 2.4초를 캡처해 목이 생기며 붙는지, 최종 경계가 또렷한지, 방울 하나로 보이는지 확인해.
```

### English · Claude Code
```text
Make <logo> appear from five merging blobs. In SVG, put five circles (radius 30px) in a group with a goo filter (feGaussianBlur 12px, feColorMatrix alpha 20/-9), gather them to screen center over 2.2s with power2.inOut, staggered by 0.05s. After merging, grow the radius to 70px over 0.6s. Drive from a paused timeline.
```

### English · Codex
```text
Implement a metaball goo effect in <file>: 5 blobs radius 30px, blur 12px, alpha 20/-9, merge 2200ms power2.inOut, stagger 50ms. Capture at 0s, 0.8s, 1.6s, and 2.4s to verify necks form as blobs join, the final edge is crisp, and it reads as one blob.
```

예시 / Example: 메타볼를 `.hero`에 적용해. / Apply Metaball to `.hero`.

## 적용 / Application

- HyperFrames: filter는 g 그룹에 한 번만 건다. cx, cy attr을 paused 타임라인에서 보간한다. 캡처 렌더러의 SVG filter 지원은 스냅샷으로 확인
- ReelForge: 브리프에 blobCount, radiusPx, mergeMs, gooBlur를 싣는다. 색은 브랜드 하나로 통일해야 threshold 경계가 깔끔하다
- Scrolline Deck: 진행률을 cx, cy에 선형에 가깝게 매핑하고 스프링 back은 쓰지 않고 power2.out으로 마무리한다

조합 / Pair with: [모프 전환 · Morph](../shape-morph/) · [점 재배치 · Dot Regroup](../dot-regroup/) · [노이즈 블롭 · Noise Blob](../noise-blob/) · [도형 분할과 통합 · Shape Split and Merge](../shape-split-merge/)

출처 / Sources: local/music-to-video (`claude-skill:music-to-video/references/motion-primitive-catalog.md#gooey-metaball`) (unknown) · local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/gooey-metaball/scene.html`) (unknown) · local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/gooey-metaball/index.html`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
