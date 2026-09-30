# Nº 575 그림자 엘리베이션 · Shadow Elevation

> 클립 렌더 예정 / Clip rendering planned.

**대상이 위로 떠오를수록 그림자가 넓어지고 옅어져 떠 있는 높이가 드러나는 표현**

As an object rises off the surface, its shadow widens and fades, revealing how high it floats.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 기본 | 피드백, 강조 | 웹 UI, 제품 시연, 숏폼 | css |

다른 이름 / Also known as: 그림자 부상, Elevation Reveal, Shadow Distance Motion, 거리 연동 그림자

## 선택 기준 / Selection

선택된 대상이 바닥에서 떨어져 있다는 높이감을 준다. 중요도와 상호작용 상태를 조용하게 알린다 / Gives a selected object a sense of height and quietly signals importance or interaction state.

- 카드를 선택하거나 들어 올릴 때 / Select or lift a card.
- 버튼 호버 상태를 보여 줄 때 / Show a button hover state.
- 드래그 시작과 놓는 순간의 높이 변화를 보일 때 / Show the height change when a drag starts and ends.

좋은 예 / Good: 카드가 600ms에 24px 떠오르며 그림자 blur가 4px에서 24px로 넓어지고 opacity는 0.3에서 0.15로 옅어진다
나쁜 예 / Bad: 카드는 뜨는데 그림자가 그대로라 붙어 보이거나, 그림자가 오히려 진해져 무겁게 느껴진다
주의 / Avoid: 그림자 offset y는 높이의 절반 이하로 한다 · 높이가 오를수록 opacity는 낮춘다 · 한 화면에서 동시에 띄우는 카드는 2장 이하로 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 시간 | 0.6s | 0.3~0.9s | 상승 |
| 높이 | 24px | 8~40px | translateY 음수 |
| 그림자 blur | 4→24px | 2~40px | 높이에 비례 |
| 그림자 opacity | 0.3→0.15 | 0.1~0.35 | 높이와 반비례 |
| 이징 | power2.out | power1~power3 |  |

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.card',
  { y: 0, boxShadow: '0 2px 4px rgba(0,0,0,0.30)' },
  { y: -24, boxShadow: '0 12px 24px rgba(0,0,0,0.15)', duration: 0.6, ease: 'power2.out' }, 0.4);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <카드>가 0.4초부터 0.6초 동안 위로 24px 떠오르는 동안 그림자를 넓히고 옅게 해줘. boxShadow를 0 2px 4px rgba(0,0,0,0.30)에서 0 12px 24px rgba(0,0,0,0.15)로 fromTo, 이징 power2.out. 그림자 offset은 높이의 절반, 그림자가 진해지지 않게 하고 paused 타임라인으로 만들어.
```

### 한국어 · Codex
```text
<파일>의 카드에 shadow-elevation을 적용해. fromTo로 y 0→-24, boxShadow '0 2px 4px rgba(0,0,0,0.30)'→'0 12px 24px rgba(0,0,0,0.15)'를 position 0.4, duration 0.6, ease power2.out으로 건다. 0.3초는 붙어 있고, 0.7초는 중간, 1.2초는 y -24와 넓고 옅은 그림자인지 캡처로 확인해.
```

### English · Claude Code
```text
Use GSAP to lift <card> 24px starting at 0.4 seconds over 0.6 seconds while widening and lightening its shadow. Tween boxShadow with fromTo from 0 2px 4px rgba(0,0,0,0.30) to 0 12px 24px rgba(0,0,0,0.15), ease power2.out. The shadow must not get darker. One paused timeline.
```

### English · Codex
```text
Apply shadow-elevation to the card in <file>. fromTo y 0 to -24 and boxShadow '0 2px 4px rgba(0,0,0,0.30)' to '0 12px 24px rgba(0,0,0,0.15)' at position 0.4, duration 0.6, ease power2.out. Capture 0.3s (resting), 0.7s (midway) and 1.2s (y -24 with a wide, faint shadow).
```

예시 / Example: 그림자 엘리베이션를 `.hero`에 적용해. / Apply Shadow Elevation to `.hero`.

## 적용 / Application

- HyperFrames: boxShadow 문자열 tween은 paused 타임라인에서 안정적이다. 반드시 fromTo로 시작값을 명시해 seek 시 튐이 없게 한다
- ReelForge: 브리프에 카드, 높이 24, blur 4→24, opacity 0.3→0.15를 싣는다. 착지 그림자는 역방향으로 재사용한다
- Scrolline Deck: 진행률 0~1을 높이와 그림자에 함께 매핑한다. 진행률이 되돌아가면 착지 그림자가 된다

조합 / Pair with: [스쿼시 앤 스트레치 · Squash & Stretch](../squash-stretch/) · [바운스 착지 · Bounce Landing](../bounce-landing/) · [모달 등장 · Modal Lift](../modal-lift/)

출처 / Sources: [animista.net](https://animista.net/play) (BSD-2-Clause (FreeBSD)) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/perspective-effects.html) (unknown) · [IanLunn/Hover](https://github.com/IanLunn/Hover) (MIT personal/open-source + paid commercial) · [airbnb/lottie-web](https://github.com/airbnb/lottie-web) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
