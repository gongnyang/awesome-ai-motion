# Nº 072 워블 · Wobble

> 클립 렌더 예정 / Clip rendering planned.

**요소가 좌우로 넓게 밀리며 기울다가 진폭을 줄이며 정착하는 흔들림**

A wide left-right sway with tilt that shrinks in amplitude until it settles.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 강조·주의 · EMPHASIS | 기본 | 분위기, 주목 끌기 | 숏폼, 웹 UI | css |

다른 이름 / Also known as: 큰 좌우 비틀림

## 선택 기준 / Selection

불안정함, 익살, 또는 입력이 거부된 느낌. 감쇠하며 멈추는 점이 핵심이다 / Reads as instability, playfulness or a soft rejection. Decay to rest is the key.

- 귀여운 캐릭터·스티커가 반응할 때 / When a cute character or sticker reacts
- 잘못된 입력이 가볍게 튕겨 나오는 순간을 보여 줄 때 / When a bad input should bounce back lightly
- 가볍고 장난스러운 톤의 숏폼 강조 / When adding a playful emphasis in short-form video

좋은 예 / Good: 스티커가 x -25%→+20%→-15%→+10%→-5%→0으로 진폭을 줄이며 5도씩 기울고 정착한다
나쁜 예 / Bad: 진폭이 줄지 않고 같은 폭으로 계속 흔들리거나, 텍스트 본문에 적용해 읽을 수 없다
주의 / Avoid: 진폭이 매번 60~70%로 줄어야 한다 · 본문·표에는 사용 금지 · 1.2초 안에 정지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 이동 폭 | 25% | 10~30% | 요소 너비 기준 첫 번째 진폭 |
| 회전 | 5deg | 3~8deg | 이동 방향과 반대로 기움 |
| 반동 횟수 | 5회 | 3~6회 | 마지막은 0 |
| 총 길이 | 1.0s | 0.7~1.3s | 감쇠 포함 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
const amp = [-0.25, 0.2, -0.15, 0.1, -0.05, 0];
amp.forEach((a, i) => tl.to('.sticker', { xPercent: a * 100, rotation: -a * 20, duration: 0.17, ease: 'power2.out' }, 0.3 + i * 0.17));
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상>에 wobble을 넣어줘. 0.3초부터 0.17초 간격으로 xPercent가 -25, +20, -15, +10, -5, 0으로 줄어들고 rotation은 이동 반대 방향으로 진폭의 0.2배(최대 5도)로 기울어. 이징은 power2.out이고 배열은 코드에 고정해. paused 타임라인으로 만들어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 wobble을 적용해. amp 배열 [-0.25,0.2,-0.15,0.1,-0.05,0]를 forEach로 돌려 xPercent=a*100, rotation=-a*20, duration 0.17, position 0.3+i*0.17로 tween을 건다. 0.4초·0.9초·1.5초를 캡처해 진폭이 줄어드는지, 1.4초 이후 x=0인지 확인해.
```

### English · Claude Code
```text
Add a wobble to <target> with GSAP. From 0.3s, every 0.17s set xPercent to -25, 20, -15, 10, -5, 0 and rotate opposite to the shift by 0.2x the amplitude (max 5 degrees). Ease power2.out, keep the array fixed in code, and use a paused timeline.
```

### English · Codex
```text
Apply wobble to <target> in <file>. Loop the array [-0.25,0.2,-0.15,0.1,-0.05,0] with xPercent = a*100, rotation = -a*20, duration 0.17, position 0.3 + i*0.17. Capture at 0.4s, 0.9s and 1.5s to confirm the amplitude decays and x is 0 after 1.4s.
```

예시 / Example: 워블를 `.hero`에 적용해. / Apply Wobble to `.hero`.

## 적용 / Application

- HyperFrames: 진폭 배열을 코드에 고정해 결정론으로 만든다. 각 tween을 절대 시각에 배치해 seek 시 순서가 어긋나지 않게 한다
- ReelForge: 브리프에 이동 폭·회전·횟수를 넣고 중심점은 transform-origin 50% 100%로 지정한다
- Scrolline Deck: scrub에서는 감쇠 진폭 배열을 진행률 0~1에 나눠 매핑하고 정착 구간은 ease-out으로 닫는다

조합 / Pair with: [젤로 · Jello](../jello/) · [오류 셰이크 · Error Shake](../error-shake/) · [팔로스루 · Follow-through](../follow-through/)

출처 / Sources: [animate-css/animate.css](https://github.com/animate-css/animate.css) (Hippocratic-2.1) · [animista.net](https://animista.net/play) (BSD-2-Clause (FreeBSD)) · [IanLunn/Hover](https://github.com/IanLunn/Hover) (MIT personal/open-source + paid commercial)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
