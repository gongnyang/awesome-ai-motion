# Nº 110 취소선 교체 · Strikethrough Replace

> 클립 렌더 예정 / Clip rendering planned.

**기존 문구에 취소선이 그어진 뒤 새 문구가 옆이나 아래에 나타나는 교체 효과**

A strikethrough is drawn over the old text, then the new text appears beside or below it.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 기본 | 강조, 비교, 피드백 | 설명 영상, 발표, 제품 시연 | svg |

## 선택 기준 / Selection

이전 주장이 폐기되고 새 값으로 바뀌었다는 사실이 순서로 전달된다 / It shows that a claim was withdrawn and replaced, through order alone.

- 가격·수치·정책처럼 바뀐 값을 이전 값과 함께 보여 줄 때 / When showing a changed price, figure or policy next to its previous value
- 틀린 통념을 지우고 바른 주장을 세우는 장면 / When striking down a myth and putting the correct claim in its place

좋은 예 / Good: "월 29,000원"에 0.35초간 선이 좌에서 우로 그어지고 0.1초 뒤 "월 19,000원"이 아래에서 올라온다
나쁜 예 / Bad: 취소선과 새 문구가 동시에 나오거나 취소선이 글자보다 옅어 지워졌는지 알 수 없다
주의 / Avoid: 취소선이 끝나기 전에 새 문구를 띄우지 않는다. 순서가 뒤섞이면 어느 쪽이 정답인지 모호하다 · 옛 문구는 지운 뒤에도 opacity 0.45 이상 남겨 무엇이 바뀌었는지 보이게 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 취소선 시간 | 0.35s | 0.25~0.5s | 좌에서 우로 scaleX 0에서 1 |
| 취소선과 교체 사이 | 0.1s | 0.05~0.2s | 정지가 있어야 지웠다는 것이 읽힘 |
| 새 문구 등장 | 0.25s | 0.2~0.4s | y 12px 아래에서 위로 |
| 옛 문구 남는 불투명도 | 0.45 | 0.35~0.6 | 지운 뒤 흐리게 유지 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.strike', {scaleX:0}, {scaleX:1, duration:0.35, ease:'power2.inOut', transformOrigin:'left center'}, 0.4)
  .to('.old', {opacity:0.45, duration:0.2}, 0.75)
  .fromTo('.new', {y:12, opacity:0}, {y:0, opacity:1, duration:0.25, ease:'power2.out'}, 0.85);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>의 "이전 값"에 취소선이 좌에서 우로 0.35초 동안 그어지게 하고, 0.1초 쉰 뒤 "새 값"이 12px 아래에서 0.25초에 올라오게 만들어줘. 옛 값은 취소선 뒤 불투명도 0.45로 남겨. 세 동작은 한 GSAP 타임라인 하나로 묶어.
```

### 한국어 · Codex
```text
<파일>에 취소선 교체를 적용해. .strike scaleX 0에서 1을 0.4초 시작, 0.35초, power2.inOut. .old opacity 0.45는 0.75초, .new는 0.85초에 y 12에서 0으로 0.25초. 0.3초·0.7초·1.3초 시점을 캡처해 선 진행 중, 선 완료, 새 문구 완료가 순서대로 보이는지 확인해.
```

### English · Claude Code
```text
On <target>, draw a strikethrough over the old value left to right in 0.35s, wait 0.1s, then bring in the new value from 12px below in 0.25s. Leave the old value at 0.45 opacity after the strike. Bind all three moves in a single GSAP timeline.
```

### English · Codex
```text
Apply strikethrough replace in <file>. .strike scaleX 0 to 1 at 0.4s, 0.35s, power2.inOut; .old opacity 0.45 at 0.75s; .new y 12 to 0 at 0.85s over 0.25s. Capture at 0.3s, 0.7s and 1.3s and verify the strike mid-draw, the strike complete, and the new text settled, in that order.
```

예시 / Example: 취소선 교체를 `.hero`에 적용해. / Apply Strikethrough Replace to `.hero`.

## 적용 / Application

- HyperFrames: 취소선은 span의 background나 별도 div의 scaleX로 만든다. 세 tween을 한 paused 타임라인에 position으로 고정해 seek 가능하게 한다
- ReelForge: 씬 브리프에 옛 값, 새 값, 취소선 0.35초, 정지 0.1초를 넣는다. 새 값 위치(옆/아래)는 파라미터로 노출한다
- Scrolline Deck: 진행률 0~0.4에 선, 0.4~0.7에 새 문구를 매핑한다. scrub 중에는 선이 뒤로 감기므로 scaleX 값만 진행률에 묶는다

조합 / Pair with: [마스크 리빌 · Mask Reveal](../mask-reveal/) · [단어 강조 · Word Emphasis](../word-emphasis/) · [변경점 공개 · Diff Reveal](../diff-reveal/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/strikethrough-replace/registry-item.json) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
