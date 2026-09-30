# Nº 499 글자 조각 어긋남 · Text Slice Offset

> 클립 렌더 예정 / Clip rendering planned.

**글자를 가른 평행 띠들이 번갈아 서로 다른 방향으로 밀려나는 효과**

Parallel bands of a word shift in alternating directions.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 주목 끌기, 분위기 | 숏폼, 웹 UI | webgl |

다른 이름 / Also known as: Text Sliding Stripe Distortion, 텍스트 줄무늬 슬라이딩 왜곡, Sliced Glass Text Offset, 유리 조각 텍스트 어긋남

## 선택 기준 / Selection

분절과 기계적인 변형. 데이터 오류나 스캔 같은 긴장감이 생긴다 / Segmentation and mechanical distortion, like a data error or a scan.

- 제목이 등장하거나 장면이 전환되는 순간에 짧게 흔들림을 줄 때 / A brief jolt when a title arrives or a scene changes
- 오류·노이즈·신호 이상을 글자로 표현할 때 / Depicting errors, noise or signal faults through text

좋은 예 / Good: 제목이 8개 띠로 나뉘어 홀수 띠는 +12px, 짝수 띠는 -12px 밀렸다가 0.15초 뒤 제자리로 돌아온다
나쁜 예 / Bad: 띠 이동이 40px을 넘어 글자를 읽을 수 없고 1.5초 내내 계속 흔들린다
주의 / Avoid: 오프셋은 글자 높이의 10% 이하로 둔다 · 흔들림은 0.4초 이내의 짧은 순간에만 쓴다. 지속 시 가독성이 사라진다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 띠 개수 | 8 | 6~12 | 가로 띠 |
| 이동량 | 12px | 6~16px | 홀짝 반대 방향 |
| 버스트 길이 | 0.2s | 0.1~0.4s | 정지 상태로 복귀 |
| 주기 | 1.5s | 1~3s | 반복 시 사이에 홀드 |

이징 / Ease: `power4.out`

## 구현 / Implementation (GSAP)

```js
const strips = document.querySelectorAll('.strip'); // 같은 텍스트 복제, clip-path: inset(top% 0 bottom% 0)
strips.forEach((s, i) => {
  const dir = i % 2 ? -1 : 1;
  tl.fromTo(s, {x:dir * 12}, {x:0, duration:0.2, ease:'power4.out'}, 0.3);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 제목에 슬라이스 오프셋을 넣어줘. 같은 텍스트를 8개 가로 띠(clip-path inset)로 복제하고, 0.3초에 홀수 띠 +12px, 짝수 띠 -12px에서 0.2초 power4.out으로 제자리로 돌아오게 해. 나머지 시간은 정지 상태로 읽히게 해.
```

### 한국어 · Codex
```text
<파일>에 text slice offset을 적용해. 텍스트를 8개 .strip으로 복제하고 각 clip-path inset을 i/8, (7-i)/8로 지정, x 시작값 ±12에서 0으로 0.2초 power4.out, 시작 0.3초. 0.32초·0.5초·1.0초를 캡처해 띠 어긋남, 복귀, 정지 상태에서 텍스트 정렬이 정확히 일치하는지 확인해.
```

### English · Claude Code
```text
Add a slice offset to the title in <target>. Duplicate the text into 8 horizontal strips (clip-path inset); at 0.3s odd strips start at +12px and even strips at -12px and return to 0 over 0.2s power4.out. Keep the rest of the time still and readable.
```

### English · Codex
```text
Apply text slice offset in <file>. Duplicate the text into 8 .strip layers with clip-path inset i/8 and (7-i)/8; x from +/-12 to 0 over 0.2s power4.out at 0.3s. Capture at 0.32s, 0.5s and 1.0s and verify mismatch, recovery, and exact alignment at rest.
```

예시 / Example: 글자 조각 어긋남를 `.hero`에 적용해. / Apply Text Slice Offset to `.hero`.

## 적용 / Application

- HyperFrames: 같은 텍스트를 띠 수만큼 복제해 clip-path로 자르고 x만 움직인다. WebGL 없이 DOM 복제로 충분하다
- ReelForge: 브리프에 띠 개수 8, 이동 12px, 버스트 0.2초, 발생 시각들을 초 단위로 싣는다
- Scrolline Deck: 진행률 임계 구간에서만 버스트가 발생하게 한다. 임계를 지나면 0으로 복귀해 스크롤 중에도 읽을 수 있다

조합 / Pair with: [RGB 분리 글리치 · RGB Split Glitch](../glitch-rgb-split/) · [스캔 왜곡 띠 · Scan band](../glitch-scan-band/) · [글자 복제 잔상 · Text Echo Trail](../text-echo-trail/)

출처 / Sources: [bradley/Blotter](https://github.com/bradley/Blotter) (MIT) · [codrops/SlicedTextEffect](https://github.com/codrops/SlicedTextEffect) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
