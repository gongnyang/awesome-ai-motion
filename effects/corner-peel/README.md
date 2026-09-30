# Nº 416 모서리 말림 · Corner Peel

> 클립 렌더 예정 / Clip rendering planned.

**얇은 면의 한 모서리가 비스듬히 말려 올라가며 뒷면과 그림자가 드러나는 움직임**

One corner of a thin surface curls up at an angle, exposing its back and a soft shadow.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 중급 | 분위기, 피드백 | 웹 UI, 숏폼, 제품 시연 | svg |

다른 이름 / Also known as: Skew Peel, 스티커 젖힘, skew-pivot-peel, Corner Curl, 종이 모서리 말림

## 선택 기준 / Selection

종이나 스티커처럼 얇고 붙어 있던 재질이라는 느낌을 준다. 그 아래에 무언가 숨어 있다는 기대를 만든다 / Gives the feel of paper or a sticker that was stuck down, and hints that something lies beneath.

- 스티커를 떼어 아래 정보를 보여 줄 때 / Peel a sticker to show information underneath.
- 종이 카드 모서리를 넘겨 다음 내용을 암시할 때 / Turn a paper card corner to hint at the next content.
- 쿠폰이나 스크래치 카드 같은 공개 연출을 할 때 / A coupon or scratch card style reveal.

좋은 예 / Good: 카드 우하단 모서리가 500ms 동안 40px 크기로 45도 방향에 말려 올라가고 뒷면 색과 옅은 그림자가 나타난다
나쁜 예 / Bad: 말림이 커져 카드 절반이 접힌 것처럼 보이거나, 그림자가 없어 평면 도형이 잘린 것처럼 보인다
주의 / Avoid: 말림 크기는 카드 짧은 변의 20% 이하로 유지한다 · 접힌 면에는 반드시 그림자를 넣는다 · 텍스트 위에 걸치지 않게 여백 모서리에 쓴다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 시간 | 0.5s | 0.3~0.8s | 말림 진행 |
| 말림 크기 | 40px | 24~80px | 대각선 접힘 변 |
| 접힘 방향 | 45deg | 30~60deg | 우하단 기준 |
| 그림자 opacity | 0.25 | 0.15~0.35 | 말림에 비례 |
| 이징 | power2.out | power1~power3 |  |

## 구현 / Implementation (GSAP)

```js
// .peel: 우하단 삼각형(접힌 면), .shade: 그림자 삼각형
tl.fromTo('.peel', { width: 0, height: 0 }, { width: 40, height: 40, duration: 0.5, ease: 'power2.out' }, 0.3);
tl.fromTo('.shade', { opacity: 0 }, { opacity: 0.25, duration: 0.5, ease: 'power2.out' }, 0.3);
// .peel { background: linear-gradient(135deg, #ddd, #fff); clip-path: polygon(0 0, 100% 0, 0 100%) }
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <카드> 우하단 모서리를 말아 올려 줘. 0.3초부터 0.5초 동안 접힌 삼각형을 0에서 40px까지 power2.out으로 키우고, 접힌 면은 밝은 회색 그라디언트, 그림자는 opacity 0에서 0.25로 함께 올려. 말림은 카드 짧은 변의 20%를 넘지 않게 하고 paused 타임라인으로 만들어.
```

### 한국어 · Codex
```text
<파일>의 카드에 corner-peel을 적용해. .peel width/height 0→40px, .shade opacity 0→0.25를 position 0.3, duration 0.5, ease power2.out으로 건다. 0.3초는 평평, 0.55초는 말림이 절반, 1.0초는 40px 말림과 그림자가 보이는지 캡처로 확인해.
```

### English · Claude Code
```text
Use GSAP to peel the bottom-right corner of <card>. From 0.3 seconds, grow a folded triangle from 0 to 40px over 0.5 seconds with power2.out, styled with a light gray gradient, while raising its shadow opacity from 0 to 0.25. Keep the curl under 20% of the card's short side. Paused timeline.
```

### English · Codex
```text
Apply corner-peel to the card in <file>. Tween .peel width and height 0 to 40px and .shade opacity 0 to 0.25 at position 0.3, duration 0.5, ease power2.out. Capture 0.3s (flat), 0.55s (half curled) and 1.0s (40px curl with shadow visible).
```

예시 / Example: 모서리 말림를 `.hero`에 적용해. / Apply Corner Peel to `.hero`.

## 적용 / Application

- HyperFrames: 모서리 삼각형의 width, height와 그림자 opacity만 paused 타임라인에서 움직인다. SVG 경로 보간 대신 CSS 삼각형이면 seek가 안정적이다
- ReelForge: 브리프에 카드 크기, 말림 크기 40px, 방향 45도, 뒷면 색을 싣는다
- Scrolline Deck: 진행률 0~1을 말림 크기 0~40px에 매핑한다. 스크롤을 되돌리면 모서리가 다시 붙는다

조합 / Pair with: [마스크 리빌 · Mask Reveal](../mask-reveal/) · [힌지 리빌 · Hinge Reveal](../hinge-reveal/) · [페이지 턴 · Page Turn](../page-turn/)

출처 / Sources: gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/01-anchor-transform.md#skew-pivot-peel`) (Apache-2.0) · [IanLunn/Hover](https://github.com/IanLunn/Hover) (MIT personal/open-source + paid commercial) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
