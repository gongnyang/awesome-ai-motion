# Nº 358 변경점 공개 · Diff Reveal

> 클립 렌더 예정 / Clip rendering planned.

**추가된 줄과 삭제된 줄이 다른 색으로 나타나고 변경 표시가 함께 생기는 공개**

Added and removed lines appear in different colors with change markers.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 설명, 비교 | 설명 영상, 제품 시연, 발표 | gsap |

다른 이름 / Also known as: Semantic diff paint, 추가와 삭제 코드 색 공개

## 선택 기준 / Selection

무엇이 더해지고 무엇이 빠졌는지 방향으로 바로 구분한다 / The direction of a change is clear at a glance.

- 코드 리뷰·PR 변경을 설명할 때 / When explaining code review or PR changes
- 문서 두 버전의 차이를 보여 줄 때 / When showing the difference between two document versions

좋은 예 / Good: 삭제 줄은 적색 배경으로 0.25초에 나타나고 취소선이 그어진 뒤, 추가 줄이 녹색 배경으로 0.25초 뒤에 나타난다
나쁜 예 / Bad: 색만 다르고 +/- 표시가 없거나, 변경 줄이 너무 많아 읽을 수 없다
주의 / Avoid: +/- 기호를 색과 함께 둔다 · 한 화면 변경 줄 8개 이하 · 삭제를 먼저, 추가를 나중에

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 줄 등장 | 0.25s | 0.2~0.4s | 각 줄 fade |
| 삭제와 추가 간격 | 0.25s | 0.15~0.4s | 삭제 먼저 |
| 추가 색 | #1f9d55 배경 알파 0.18 | 알파 0.12~0.25 | 녹색 |
| 삭제 색 | #d64545 배경 알파 0.18 | 알파 0.12~0.25 | 적색 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
tl.from('.del', { opacity: 0, duration: 0.25, ease: 'power2.out' }, 0.3)
  .fromTo('.del-line', { scaleX: 0 }, { scaleX: 1, transformOrigin: '0 50%', duration: 0.25 }, 0.55)
  .from('.add', { opacity: 0, x: -12, duration: 0.25, ease: 'power2.out' }, 0.8);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상> 코드 변경을 공개해줘. .del 줄은 0.3초에 opacity 0에서 0.25초로 나타나 0.55초에 취소선을 0.25초 그리고, .add 줄은 0.8초에 x -12px, opacity 0에서 0.25초 power2.out으로 나타나. 삭제는 적색 알파 0.18, 추가는 녹색 알파 0.18에 +/- 기호를 함께 표시해.
```

### 한국어 · Codex
```text
<파일>의 <대상> diff에 diff-reveal을 적용해. .del from opacity 0(0.25s, position 0.3), .del-line scaleX 0→1(0.25s, 0.55), .add from {opacity 0, x -12}(0.25s, 0.8). 0.4초·0.7초·1.2초를 캡처해 삭제가 먼저이고 +/- 기호가 보이는지, 색 대비가 3:1 이상인지 확인해.
```

### English · Claude Code
```text
Reveal the code change in <target> with GSAP. The .del line fades in at 0.3s over 0.25s and gets a strikethrough drawn at 0.55s over 0.25s, then the .add line enters at 0.8s from x -12px, opacity 0 over 0.25s with power2.out. Deleted is red at alpha 0.18, added is green at alpha 0.18, and show +/- signs too.
```

### English · Codex
```text
Apply diff-reveal to the <target> diff in <file>. .del from opacity 0 (0.25s, position 0.3), .del-line scaleX 0 to 1 (0.25s, 0.55), .add from {opacity 0, x -12} (0.25s, 0.8). Capture at 0.4s, 0.7s and 1.2s to check deletions come first, +/- signs are visible and contrast is at least 3:1.
```

예시 / Example: 변경점 공개를 `.hero`에 적용해. / Apply Diff Reveal to `.hero`.

## 적용 / Application

- HyperFrames: 삭제 줄에 취소선 요소를 따로 두고 scaleX로 그린다. 줄마다 절대 시각을 주어 seek가 안전하다
- ReelForge: 브리프에 줄 목록(del/add), 색 토큰, 줄 간격을 JSON으로 싣는다
- Scrolline Deck: scrub에서는 삭제를 진행률 0~0.4, 추가를 0.5~0.9에 매핑한다. 색은 정지 상태에서 확정

조합 / Pair with: [코드 변경 전개 · Code Diff Reveal](../code-diff-reveal/) · [비교 분할 · Split Compare](../split-compare/) · [점진적 공개 · Progressive Disclosure](../progressive-disclosure/)

출처 / Sources: [code-hike/codehike](https://codehike.org/docs/code/diff) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
