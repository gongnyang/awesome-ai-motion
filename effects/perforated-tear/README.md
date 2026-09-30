# Nº 427 절취선 찢기 · Perforated Tear

> 클립 렌더 예정 / Clip rendering planned.

**표의 한 부분이 절취선을 따라 찢어지며 떨어져 나가고 몸체가 남는 분리**

A section of a ticket tears along a perforation and drops away while the body stays.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 도형·패스 · SHAPE & PATH | 중급 | 피드백, 전환 | 웹 UI, 숏폼, 제품 시연 | svg |

다른 이름 / Also known as: Perforated Ticket Tear, 절취선 뜯기

## 선택 기준 / Selection

사용이 끝난 부분이 몸체에서 분리되었다는 사실을 전달한다. 티켓, 쿠폰, 영수증 같은 소재와 잘 맞는다 / Communicates that the used part has separated from the body, matching tickets, coupons and receipts.

- 티켓의 일부를 떼어 사용 완료를 표시할 때 / Tear a stub off to mark a ticket as used.
- 쿠폰이나 영수증을 뜯어 넘기는 장면을 만들 때 / Rip off a coupon or receipt in a scene.
- 카드에서 일부 정보가 분리되어 나가는 것을 보일 때 / Show part of a card's information detaching.

좋은 예 / Good: 티켓의 오른쪽 조각이 절취선을 따라 800ms에 80px 떨어지고 20도 기울어 내려가며 몸체는 제자리에 남는다
나쁜 예 / Bad: 절취선이 없이 도형이 잘려 보이거나, 떨어진 조각이 화면에 남아 다음 정보를 가린다
주의 / Avoid: 절취선은 점선 또는 톱니 패스로 반드시 보이게 한다 · 분리 거리는 조각 폭의 절반 이하로 한다 · 조각은 0.4초 안에 opacity 0으로 사라지게 하거나 고정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 분리 시간 | 0.8s | 0.5~1.2s | 이동과 회전 |
| 분리 거리 | 80px | 40~140px | x |
| 회전 | 20deg | 10~30deg | 떨어지며 기울어짐 |
| 떨림 | 2px | 0~3px | 찢기 직전 미세 흔들림 |
| 이징 | power2.out | power1~power3 |  |

## 구현 / Implementation (GSAP)

```js
tl.to('.stub', { x: 4, duration: 0.08, yoyo: true, repeat: 3, ease: 'sine.inOut' }, 0.3) // 찢기 직전 떨림
  .to('.stub', { x: 80, y: 40, rotation: 20, duration: 0.8, ease: 'power2.out' }, 0.6)
  .to('.stub', { opacity: 0, duration: 0.3 }, 1.2);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <티켓>의 오른쪽 조각이 절취선을 따라 뜯겨 나가는 연출을 만들어 줘. 0.3초에 x 4px로 0.08초씩 4번 떨리고, 0.6초부터 0.8초 동안 x 80px, y 40px, rotation 20도로 power2.out 이동, 1.2초부터 0.3초 동안 opacity 0. 절취선은 점선으로 항상 보이게 하고 몸체는 움직이지 않게 해.
```

### 한국어 · Codex
```text
<파일>의 티켓에 perforated-tear를 적용해. .stub tween 세 개: 떨림 x 4 yoyo repeat 3 (position 0.3), 분리 x 80 y 40 rotation 20 duration 0.8 ease power2.out (position 0.6), 페이드 opacity 0 duration 0.3 (position 1.2). 0.5초는 절취선 앞 떨림, 1.0초는 분리 중, 1.7초는 조각 없이 몸체만 남았는지 캡처로 확인해.
```

### English · Claude Code
```text
Use GSAP to tear the right stub off <ticket> along its perforation. At 0.3 seconds shake it x 4px four times at 0.08 seconds each, from 0.6 seconds move it x 80px, y 40px, rotation 20 degrees over 0.8 seconds with power2.out, then fade opacity to 0 over 0.3 seconds from 1.2 seconds. Keep the dotted perforation visible and the body still.
```

### English · Codex
```text
Apply perforated-tear to the ticket in <file>. Three .stub tweens: shake x 4 yoyo repeat 3 at position 0.3, separation x 80 y 40 rotation 20 duration 0.8 ease power2.out at position 0.6, fade opacity 0 duration 0.3 at position 1.2. Capture 0.5s (shaking), 1.0s (separating) and 1.7s (only the body remains).
```

예시 / Example: 절취선 찢기를 `.hero`에 적용해. / Apply Perforated Tear to `.hero`.

## 적용 / Application

- HyperFrames: 떨림 repeat은 유한값으로 고정한다. 절취선 SVG는 정적으로 두고 조각 그룹의 transform만 paused 타임라인에서 움직인다
- ReelForge: 브리프에 티켓 몸체와 조각 SVG, 절취선 위치, 분리 80px, 회전 20도를 싣는다
- Scrolline Deck: 진행률 0~0.15에 떨림, 0.15~1.0에 분리를 매핑한다. 되감으면 조각이 붙는다

조합 / Pair with: [파편 분해 · Shatter](../shatter/) · [알림 스택 · Toast Stack](../toast-stack/) · [관성 퇴장 · Physical Exit](../physical-exit/)

출처 / Sources: [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
