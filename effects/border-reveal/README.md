# Nº 067 테두리 리빌 · Border Reveal

> 클립 렌더 예정 / Clip rendering planned.

**요소의 테두리 선이 바깥에서 안으로 들어오며 윤곽을 드러내는 표시**

A border line closes in from outside the element to reveal its outline.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 강조·주의 · EMPHASIS | 기본 | 강조, 피드백 | 웹 UI, 제품 시연, 설명 영상 | css |

다른 이름 / Also known as: 테두리 드러내기

## 선택 기준 / Selection

선택되었거나 경계가 중요한 대상을 표시한다. 채움 없이 가볍게 지정한다 / Marks a selected element or an important boundary without filling it.

- 폼 필드·카드가 선택 상태로 바뀔 때 / When a form field or card becomes selected
- 화면 요소의 경계를 짚어 설명할 때 / When pointing at the edge of an on-screen element

좋은 예 / Good: 입력 카드 주위 8px 바깥에 2px 선이 0.35초 동안 카드 경계로 좁혀 들어오며 선명해진다
나쁜 예 / Bad: 선 두께 6px 이상으로 요소보다 테두리가 더 튀거나 색이 배경과 대비되지 않는다
주의 / Avoid: 테두리와 배경의 대비비 3:1 이상 · 두께 4px 초과 금지 · 동시에 강조하는 요소는 2개 이하

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 두께 | 2px | 1~4px | 1920x1080 기준 |
| 시작 간격 | 8px | 4~12px | 경계 바깥 오프셋 |
| 길이 | 0.35s | 0.25~0.5s | 이동과 페이드 합산 |
| 이징 | power2.out | power2~power3.out | 도착 직전 감속 |

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.ring', { outlineOffset: 8, outlineColor: 'rgba(0,120,255,0)' }, { outlineOffset: 0, outlineColor: 'rgba(0,120,255,1)', duration: 0.35, ease: 'power2.out' }, 0.4);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상> 요소에 테두리 리빌을 넣어줘. 0.4초에 outline 2px, outlineOffset 8px, 알파 0에서 시작해 0.35초 동안 outlineOffset 0, 알파 1로 power2.out. 색은 <색상>이고 배경과 대비 3:1 이상이어야 해. 레이아웃이 밀리지 않게 outline을 써.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 border-reveal을 적용해. outline 2px solid, fromTo outlineOffset 8→0, 알파 0→1, 0.35s, power2.out, position 0.4. 0.4초·0.6초·0.9초를 캡처해 선이 안쪽으로 들어오는지, 최종에 레이아웃 이동이 0px인지 확인해.
```

### English · Claude Code
```text
Add a border reveal to <target> with GSAP. At 0.4s start with a 2px outline, outlineOffset 8px, alpha 0 and animate to offset 0, alpha 1 over 0.35s with power2.out. Use <color> with at least 3:1 contrast against the background, and use outline so layout does not shift.
```

### English · Codex
```text
Apply border-reveal to <target> in <file>. Use outline 2px solid, fromTo outlineOffset 8 to 0 and alpha 0 to 1, 0.35s, power2.out, position 0.4. Capture at 0.4s, 0.6s and 0.9s to check the line moves inward and that layout shift is 0px at the end.
```

예시 / Example: 테두리 리빌를 `.hero`에 적용해. / Apply Border Reveal to `.hero`.

## 적용 / Application

- HyperFrames: outline은 레이아웃을 바꾸지 않으므로 그대로 tween한다. 색은 rgba로 알파를 같이 올려 seek에서도 안전하다
- ReelForge: 브리프에 두께·시작 간격·색 토큰을 실어 브랜드 색으로 바꾼다
- Scrolline Deck: scrub에서는 outlineOffset 8→0을 진행률 0~0.4에 매핑하고 이후 유지한다

조합 / Pair with: [둘레선 강조 · Circumscribe](../circumscribe/) · [스포트라이트 · Spotlight](../spotlight/) · [핫스팟 펄스 · Hotspot Pulse](../hotspot-pulse/)

출처 / Sources: [IanLunn/Hover](https://github.com/IanLunn/Hover) (MIT personal/open-source + paid commercial)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
