# Nº 415 부울 패스 결합 · Boolean Path Merge

> 클립 렌더 예정 / Clip rendering planned.

**겹친 도형이 하나로 붙거나 교차 부분이 뚫리며 하나의 실루엣을 만드는 결합**

Overlapping shapes join, or their intersection is cut out, forming a single silhouette.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 중급 | 설명, 비교 | 설명 영상, 발표, 데이터 스토리 | svg |

다른 이름 / Also known as: Merge Paths Animation, 패스 병합 애니메이션

## 선택 기준 / Selection

합집합, 차집합, 교집합 같은 집합 관계를 화면의 형태로 이해하게 한다. 두 도형이 어떻게 만나는지 명확하다 / Makes set relations like union, difference and intersection understandable as forms, showing how two shapes meet.

- 벤 다이어그램의 결합과 교차를 설명할 때 / Explain union and intersection in a Venn diagram.
- 두 로고 형태가 합쳐 새 마크가 되는 연출을 할 때 / Two logo shapes combining into a new mark.
- 도형 뚫기로 창이나 구멍을 만드는 과정을 보일 때 / Show cutting a window or hole out of a shape.

좋은 예 / Good: 두 원이 40px 겹치는 위치까지 800ms에 다가온 뒤 합쳐 한 실루엣이 되고, 교차 영역이 강조색으로 남는다
나쁜 예 / Bad: 겹침이 없어 결합이 일어나지 않거나, 색이 같아 교차 영역이 구분되지 않는다
주의 / Avoid: 교차 영역은 반드시 다른 색이나 opacity로 구분한다 · 겹침 거리는 반지름의 1/3~1/2로 한다 · 연산 종류 라벨을 화면에 함께 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 이동 시간 | 0.8s | 0.5~1.2s | 접근 |
| 겹침 | 0→40px | 0~반지름의 1/2 | 교차 폭 |
| 연산 | 합집합 | 합/차/교/배타 | 선택 |
| 교차 색 | #ffcc33 | 보조색 | 강조 |
| 이징 | power2.inOut | power1~power3 |  |

## 구현 / Implementation (GSAP)

```js
// SVG mask로 합성: 교집합 = A를 B로 마스크
tl.to('.a', { x: 20, duration: 0.8, ease: 'power2.inOut' }, 0.3)
  .to('.b', { x: -20, duration: 0.8, ease: 'power2.inOut' }, 0.3)
  .to('.inter', { opacity: 1, duration: 0.3 }, 1.0);
// .inter: <circle class=a> 을 <mask id=mb>(원 b)로 마스크한 교차 영역
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP과 SVG mask로 <두 원>의 합집합과 교집합을 보여 줘. 0.3초부터 0.8초 동안 두 원이 서로 20px씩 다가와 40px 겹치게 하고(power2.inOut), 1.0초에 교차 영역을 mask로 만든 노랑 #ffcc33으로 0.3초 페이드 인해. 교차 영역이 다른 색으로 구분되고 paused 타임라인으로 작성해.
```

### 한국어 · Codex
```text
<파일>에 boolean-path-merge를 적용해. .a x 20, .b x -20을 position 0.3, duration 0.8, ease power2.inOut으로 옮기고 .inter(마스크로 만든 교차 영역) opacity 0→1을 position 1.0, duration 0.3으로 건다. 0.3초는 겹침 없음, 1.1초는 교차 영역 등장, 1.8초는 40px 겹침과 교차 영역이 노랑으로 구분되는지 캡처로 확인해.
```

### English · Claude Code
```text
Use GSAP and an SVG mask to show the union and intersection of <two circles>. From 0.3 seconds over 0.8 seconds move each circle 20px toward the other with power2.inOut so they overlap by 40px, and at 1.0 seconds fade in the intersection region, made with a mask, in yellow #ffcc33 over 0.3 seconds. The intersection must read as a distinct color. Paused timeline.
```

### English · Codex
```text
Apply boolean-path-merge in <file>. Move .a x 20 and .b x -20 at position 0.3, duration 0.8, ease power2.inOut, and tween .inter (mask-built intersection) opacity 0 to 1 at position 1.0, duration 0.3. Capture 0.3s (no overlap), 1.1s (intersection appearing) and 1.8s (40px overlap with the intersection clearly yellow).
```

예시 / Example: 부울 패스 결합를 `.hero`에 적용해. / Apply Boolean Path Merge to `.hero`.

## 적용 / Application

- HyperFrames: mask 기반 합성은 두 도형의 transform이 시간의 함수라 seek해도 교차 영역이 자동으로 따라온다. 경로 연산 라이브러리는 로드 시 계산해 정적으로 쓴다
- ReelForge: 브리프에 두 도형, 연산 종류, 겹침 40, 교차 색을 싣는다
- Scrolline Deck: 진행률 0~1을 접근 거리에 매핑하고 교차 영역 opacity는 겹침 깊이에 비례하게 둔다

조합 / Pair with: [모프 전환 · Morph](../shape-morph/) · [벤 집합 겹침 · Venn Overlap](../venn-overlap/) · [도형 분할과 통합 · Shape Split and Merge](../shape-split-merge/)

출처 / Sources: [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/drawing-painting-and-paths/shapes-and-shape-attributes/shape-attributes-paint-operations-path.html) (unknown) · [airbnb/lottie-web](https://github.com/airbnb/lottie-web) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
