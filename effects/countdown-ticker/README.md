# Nº 313 카운트다운 · Countdown Ticker

> 클립 렌더 예정 / Clip rendering planned.

**남은 일·시·분·초가 일정한 간격으로 줄어들며 자릿수가 교체되는 카운트다운**

Remaining days, hours, minutes and seconds tick down at a steady interval with digit swaps.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 기본 | 데이터 증명, 주목 끌기, 피드백 | 숏폼, 웹 UI, 제품 시연 | css |

다른 이름 / Also known as: Countdown clock, 목표 시점 카운트다운, Numeric Countdown Beat, 숫자 카운트다운 박자, Karaoke Count In

## 선택 기준 / Selection

마감이나 사건까지 남은 시간이 눈으로 줄어드는 긴장감을 준다 / The shrinking time to a deadline or event builds tension you can see.

- 행사·출시·마감까지 남은 시간을 보여 줄 때 / Showing time left to an event, launch or deadline
- 타이머가 끝나는 순간까지 긴장감을 쌓을 때 / Building tension until a timer ends

좋은 예 / Good: "02일 14:59:58"에서 초 단위 숫자가 1초마다 250ms 세로 교체로 줄어들고 초가 0이 되는 순간 분이 함께 바뀐다
나쁜 예 / Bad: 초 숫자만 갱신하고 분·시가 갱신되지 않거나 자릿수 폭이 변해 숫자가 좌우로 흔들린다
주의 / Avoid: 숫자 폰트는 tabular-nums로 자릿수 폭을 고정한다 · 목표 시각은 화면에 명시한다. 남은 시간만 있으면 언제까지인지 알 수 없다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 갱신 간격 | 1000ms | 1000ms 고정 | 초 단위 |
| 교체 애니메이션 | 250ms | 200~300ms | 세로 슬라이드 |
| 숫자 폰트 | tabular-nums | 고정 | 자릿수 폭 일정 |
| 목표 시각 | 명시 | 필수 | 예: 12/31 23:59 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
const target = 3 * 86400; // 목표까지 남은 초
for (let s = 0; s < 6; s++) {
  const remain = target - s;
  tl.call(() => setDigits(remain), null, s);
  tl.fromTo('.sec', {y:14, opacity:0}, {y:0, opacity:1, duration:0.25, ease:'power2.out'}, s);
}
// setDigits는 remain에서 일·시·분·초를 계산해 textContent에 쓴다
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 화면에 카운트다운 티커를 만들어줘. 남은 시간을 "DD일 HH:MM:SS"로 tabular-nums로 표시하고 1초마다 초 숫자가 y 14px에서 0.25초 power2.out으로 교체돼. 목표 시각은 화면 하단에 작게 명시하고 현재 시각 함수는 쓰지 말고 t의 함수로만 계산해.
```

### 한국어 · Codex
```text
<파일>에 countdown ticker를 적용해. remain=start-floor(t)로 일·시·분·초를 계산해 숫자 span에 반영하고 초 요소는 매초 y 14에서 0, opacity 0에서 1을 0.25초. font-variant-numeric tabular-nums. 0초·1.1초·5.9초를 캡처해 숫자 감소와 자릿수 폭이 일정한지, 두 번 렌더 후 동일한지 확인해.
```

### English · Claude Code
```text
Build a countdown ticker in <target>. Show remaining time as "DD days HH:MM:SS" in tabular-nums; each second the seconds digits swap from y 14px over 0.25s power2.out. State the target time small at the bottom and compute everything as a pure function of t, never from the current clock.
```

### English · Codex
```text
Apply countdown ticker in <file>. Compute remain=start-floor(t) into days, hours, minutes, seconds; the seconds element goes y 14 to 0 and opacity 0 to 1 over 0.25s each second; font-variant-numeric tabular-nums. Capture at 0s, 1.1s and 5.9s to verify decrement and constant digit width, and render twice for identical output.
```

예시 / Example: 카운트다운를 `.hero`에 적용해. / Apply Countdown Ticker to `.hero`.

## 적용 / Application

- HyperFrames: tl.call은 seek 시 누락될 수 있으니 초마다 숫자 요소를 미리 만들어 opacity로 전환하는 방식이 안전하다. 계산은 t의 함수로만 한다
- ReelForge: 브리프에 목표 시각, 표시 형식(일 시:분:초), 교체 250ms, tabular-nums를 싣는다. 현재 시각은 쓰지 않고 시작값을 고정한다
- Scrolline Deck: 진행률 p를 남은 시간에 선형 매핑한다. 숫자 갱신은 정수 초 경계에서만 일어나게 반올림한다

조합 / Pair with: [카운트업 · Count-up](../count-up/) · [글자 롤링 교체 · Glyph Roll](../glyph-roll/) · [분할 플랩 문자판 · Split Flap Display](../split-flap/)

출처 / Sources: [Flourish](https://flourish.studio/blog/number-ticker-countdown-templates/) (unknown) · [pqina/flip](https://github.com/pqina/flip) (MIT) · [dcmcand/dynamic-typography-videos](https://github.com/dcmcand/dynamic-typography-videos) (Apache-2.0) · [motion-canvas/motion-canvas](https://github.com/motion-canvas/motion-canvas) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
