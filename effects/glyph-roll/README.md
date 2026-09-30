# Nº 100 글자 롤링 교체 · Glyph Roll

> 클립 렌더 예정 / Clip rendering planned.

**글자마다 세로 슬롯이 굴러 다음 글자로 정착하는 교체 효과**

Each character sits in a vertical slot that rolls until the next glyph lands.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 중급 | 피드백, 데이터 증명 | 웹 UI, 제품 시연, 숏폼 | css |

다른 이름 / Also known as: Rolling Glyphs, 굴러 바뀌는 글자, Rolling glyph replacement

## 선택 기준 / Selection

정보가 정교하게 갱신되는 느낌. 기계식 카운터나 예약판처럼 믿음직하게 읽힌다 / Information updates with mechanical precision, like a counter or a booking board.

- 버튼 문구나 상태 라벨이 다른 값으로 바뀔 때 / When a button label or status word changes to another value
- 짧은 코드·번호·상태어가 갱신되는 순간 / When a short code, number or status word refreshes

좋은 예 / Good: "대기" 두 글자가 0.7초 동안 세로로 굴러 "완료"로 바뀌고 글자 사이 시작 차는 0.05초다
나쁜 예 / Bad: 롤링 거리를 3em 이상 주어 글자가 번쩍이는 것처럼 보이고 무슨 글자인지 읽히지 않는다
주의 / Avoid: 슬롯은 overflow hidden으로 한 글자 높이만 보이게 한다. 삐져나오면 롤링이 지저분하다 · 5글자를 넘기면 전체 시간이 길어진다. 짧은 문자열에만 쓴다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 글자당 시간 | 0.7s | 0.5~0.9s | ease-out |
| 글자 간 시작 차 | 0.05s | 0.03~0.08s | 왼쪽부터 |
| 슬롯 이동 | 1em | 1~1.2em | 한 글자 높이 |
| 방향 | 위로 | 위/아래 | 선택지 순서에 맞춤 |

이징 / Ease: `power3.out`

## 구현 / Implementation (GSAP)

```js
chars.forEach((c, i) => {
  // 각 슬롯: .slot > .col(이전 글자, 다음 글자 세로 배열)
  tl.fromTo(slot(i).querySelector('.col'), {yPercent:0}, {yPercent:-50, duration:0.7, ease:'power3.out'}, 0.3 + i * 0.05);
});
// .slot { height:1.2em; overflow:hidden } .col { display:flex; flex-direction:column }
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 라벨을 글자별 세로 롤링으로 바꿔줘. 각 글자는 한 글자 높이의 슬롯(overflow hidden) 안에서 이전 글자가 위로 나가고 다음 글자가 아래에서 올라오며, 0.7초 power3.out, 글자 사이 시작 차 0.05초. 한국어는 음절 단위로 나눠.
```

### 한국어 · Codex
```text
<파일>의 상태 라벨에 glyph roll을 적용해. Intl.Segmenter로 grapheme 분할, 슬롯 height 1.2em overflow hidden, .col yPercent 0에서 -50, duration 0.7, stagger 0.05, power3.out. 0.5초·0.8초·1.3초를 캡처해 중간에 두 글자가 슬롯 안에 걸쳐 보이고 끝에는 새 글자만 보이는지 확인해.
```

### English · Claude Code
```text
Convert the label in <target> to a per-glyph vertical roll. Each character lives in a one-glyph-tall slot with overflow hidden; the old glyph exits up and the new one rises from below over 0.7s power3.out, starting 0.05s apart. Split Korean by syllable.
```

### English · Codex
```text
Apply glyph roll to the status label in <file>. Split by grapheme with Intl.Segmenter; slot height 1.2em with overflow hidden; .col yPercent 0 to -50, duration 0.7, stagger 0.05, power3.out. Capture at 0.5s, 0.8s and 1.3s and confirm two glyphs straddle the slot mid-roll and only the new glyph remains at the end.
```

예시 / Example: 글자 롤링 교체를 `.hero`에 적용해. / Apply Glyph Roll to `.hero`.

## 적용 / Application

- HyperFrames: 슬롯마다 두 글자를 세로로 쌓고 yPercent -50만 움직인다. 한국어는 grapheme 단위로 나눠 완성형 음절을 쪼개지 않는다
- ReelForge: 브리프에 이전 문자열과 다음 문자열, 글자 수, 시간 0.7초, 시작 차 0.05초를 싣는다. 글자 수가 다르면 앞쪽을 공백으로 채운다
- Scrolline Deck: 진행률 0~1을 글자별 지연으로 나눠 yPercent에 연결한다. 스크롤을 멈춰도 글자가 반쯤 걸치지 않게 진행률 스냅을 둔다

조합 / Pair with: [3D 회전 해독 · 3D Flip Decode](../flip-decode-text/) · [분할 플랩 문자판 · Split Flap Display](../split-flap/) · [카운트업 · Count-up](../count-up/)

출처 / Sources: [ibelick/motion-primitives](https://motion-primitives.com/docs/text-roll) (MIT) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [motion.dev examples](https://motion.dev/examples/react-rolling-text-button) (unknown) · [motion.dev examples](https://motion.dev/examples/react-rolling-text-button-stagger) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
