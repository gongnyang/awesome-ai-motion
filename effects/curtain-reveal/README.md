# Nº 035 커튼 리빌 · Curtain Reveal

> 클립 렌더 예정 / Clip rendering planned.

**앞쪽 잎이나 물체가 양쪽으로 쓸려 나가 뒤의 제목이 보인다.**

Foreground objects part to reveal a title behind them.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 중급 | 주목 끌기, 전환 | 설명 영상, 웹 UI, 숏폼 | css |

다른 이름 / Also known as: Canopy part, 전경 가림막 열기

## 선택 기준 / Selection

숨어 있던 장면과 깊이를 공개한다. / Reveals a hidden scene with depth.

- 전경 뒤의 제목을 공개할 때 / Use when presenting curtain reveal in a content reveal scene.
- 풍경 장면의 깊이를 열어 보일 때 / Use for a focused title, image, or card with a clearly visible final state.

좋은 예 / Good: 앞쪽 잎 두 층이 좌우 600px 이동해 제목을 연다.
나쁜 예 / Bad: 가림막이 제목 위에 남아 글자를 가린다.
주의 / Avoid: 가림막이 제목 위에 남아 글자를 가린다. · 완료 자세에서 내용이 가려지지 않게 한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 1.2s | 0.84~1.68s | 0초부터 시작하는 공개 구간 |
| 좌우 거리 | 600px | 400~1100px | 가림막이 제목을 완전히 벗어남 |
| 층 시간차 | 0.08s | 0~0.15s | 전경 층의 깊이 표현 |
| 이징 | power3.inOut | power2.out, power3.out, sine.inOut | 움직임의 가속과 감속 |

## 구현 / Implementation (GSAP)

```js
gsap.set('.curtain-left, .curtain-right', {x:0});
tl.to('.curtain-left', {x:-600, duration:1.2, ease:'power3.inOut'}, 0);
tl.to('.curtain-right', {x:600, duration:1.2, ease:'power3.inOut'}, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 커튼 리빌을 적용해. 1.2초, 좌우 거리 600px; 층 시간차 0.08s, 이징 power3.inOut로 구현해. paused 타임라인으로 seek 가능하게 하고 완료 자세를 유지해.
```

### 한국어 · Codex
```text
<파일>의 <대상> 레이어에 커튼 리빌을 적용해. 1.2초, 좌우 거리 600px; 층 시간차 0.08s, power3.inOut를 사용하고 0초, 0.6초, 1.2초 캡처로 시작값, 중간 변화, 완료 자세를 확인해. 동일 시점을 두 번 seek해 같은 결과인지 검증해.
```

### English · Claude Code
```text
Apply Curtain Reveal to <target> in <file>. Use a 1.2s segment with power3.inOut; implement these explicit settings: Horizontal travel per side: 600px, Layer delay: 0.08s. Use a paused, seekable timeline and hold the final pose.
```

### English · Codex
```text
Apply Curtain Reveal to the <target> layer in <file> with Horizontal travel per side: 600px, Layer delay: 0.08s, using the supplied core snippet and a 1.2s segment with power3.inOut. Capture at 0s, 0.6s, and 1.2s to verify the initial pose, intermediate change, and final pose. Seek to the same timestamp twice and confirm identical output.
```

예시 / Example: 커튼 리빌를 `.hero`에 적용해. / Apply Curtain Reveal to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 1.2초 구간을 넣고 seek로 자세를 계산한다. 시작값과 완료값을 명시한다.
- ReelForge: 씬 워커 브리프에 커튼 리빌, 1.2초, 좌우 거리 600px; 층 시간차 0.08s, power3.inOut를 싣고 대상 레이어를 지정한다.
- Scrolline Deck: 진행률 0~1을 1.2초 구간에 매핑한다. scrub에서는 스프링 대신 ease-out으로 같은 시작값과 완료값을 보간한다.

조합 / Pair with: [페이드 슬라이드 · Fade Slide](../fade-slide/) · [스태거 · Stagger](../stagger/) · [스케일 팝 · Scale Pop](../scale-pop/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/canopy-part-title/registry-item.json) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
