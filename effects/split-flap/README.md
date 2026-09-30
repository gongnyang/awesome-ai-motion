# Nº 109 분할 플랩 문자판 · Split Flap Display

> 클립 렌더 예정 / Clip rendering planned.

**글자판의 위아래 반쪽이 경첩을 따라 넘어가며 새 글자가 만들어지는 기계식 문자판**

The top and bottom halves of each character card flip along a hinge to form a new glyph.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 고급 | 피드백, 분위기 | 웹 UI, 숏폼, 제품 시연 | css |

다른 이름 / Also known as: Split flap, Flipboard Text, 플랩 보드 글자, flipboard-3d-rotateX, hacker-flip-3d, Split Flap Number Flip, 분할 플랩 숫자 뒤집기

## 선택 기준 / Selection

공항 안내판 같은 기계식 정보 갱신. 순차로 바뀌는 상태를 손에 잡히게 전달한다 / Mechanical, sequential information updates, like an airport board, made tangible.

- 도착·출발 시각, 순위, 재고처럼 표로 갱신되는 짧은 정보 / Short tabular info that updates, such as times, rankings or stock counts
- 복고 기계 분위기의 카운터나 타이틀 / A retro mechanical counter or title

좋은 예 / Good: "서울"이 "부산"으로 바뀔 때 글자마다 0.2초씩 위 반쪽이 아래로 접히고 글자 사이 시작 차 0.04초로 왼쪽부터 정착한다
나쁜 예 / Bad: 플랩 수를 늘려 글자당 1초 넘게 넘기거나 perspective를 100px로 줘 형태가 찌그러진다
주의 / Avoid: perspective 400px 안팎을 지키고 rotateX만 쓴다. Y 회전을 섞으면 경첩이 어색하다 · 긴 문장에는 쓰지 않는다. 8글자 이하 라벨에 적합하다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 글자당 시간 | 0.2s | 0.15~0.3s | 한 번 넘김 |
| 시작 차 | 0.04s | 0.02~0.06s | 왼쪽부터 |
| perspective | 400px | 300~600px | 깊이감 |
| 중간 글자 수 | 2 | 0~4 | 넘기는 동안 거치는 임의 글자 |

이징 / Ease: `power1.in (상반) / power1.out (하반)`

## 구현 / Implementation (GSAP)

```js
chars.forEach((c, i) => {
  const t = 0.3 + i * 0.04;
  tl.to(top(i), {rotationX:-90, duration:0.1, ease:'power1.in', transformOrigin:'50% 100%'}, t)
    .set(topBack(i), {opacity:1}, t + 0.1)
    .fromTo(bottomNew(i), {rotationX:90}, {rotationX:0, duration:0.1, ease:'power1.out', transformOrigin:'50% 0%'}, t + 0.1);
});
// 부모: perspective:400px; 반쪽은 clip-path로 상/하 절반만 표시
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 라벨을 분할 플랩 문자판으로 바꿔줘. 글자마다 위 반쪽이 0.1초 동안 -90도로 접히고 아래 반쪽이 새 글자로 0.1초에 펼쳐지게, 글자 시작 차 0.04초, perspective 400px, 경첩은 글자 중앙선. clip-path로 반쪽을 나누고 rotateX만 써.
```

### 한국어 · Codex
```text
<파일>에 split flap을 적용해. 글자별 상/하 반쪽을 clip-path로 분리, 상반 rotationX 0에서 -90(0.1초), 하반 90에서 0(0.1초), 시작 차 0.04, perspective 400px. 0.35초·0.42초·1.0초를 캡처해 접히는 중, 펼쳐지는 중, 완료 상태에서 뒷면이 비치지 않는지 확인해.
```

### English · Claude Code
```text
Turn the label in <target> into a split-flap display. Per character, the top half folds to -90deg in 0.1s and the bottom half unfolds to the new glyph in 0.1s, starting 0.04s apart, perspective 400px, hinge at the glyph midline. Split halves with clip-path and use rotateX only.
```

### English · Codex
```text
Apply split flap in <file>. Split each glyph into top and bottom halves via clip-path; top rotationX 0 to -90 (0.1s), bottom 90 to 0 (0.1s), stagger 0.04, perspective 400px. Capture at 0.35s, 0.42s and 1.0s and verify no back face bleeds through during fold, unfold or at rest.
```

예시 / Example: 분할 플랩 문자판를 `.hero`에 적용해. / Apply Split Flap Display to `.hero`.

## 적용 / Application

- HyperFrames: 반쪽 4장(위 이전, 위 새, 아래 이전, 아래 새)을 clip-path로 구성하고 rotationX만 보간한다. backface-visibility hidden으로 뒷면 깜빡임을 막는다
- ReelForge: 브리프에 글자열, 글자당 0.2초, 시작 차 0.04초, perspective 400px를 싣는다. 반쪽 마크업은 워커가 생성하고 값만 파라미터로 노출한다
- Scrolline Deck: 진행률에 글자별 위상을 곱해 rotationX를 결정한다. 넘김이 반쯤 걸친 채 멈추지 않도록 구간 끝을 스냅한다

조합 / Pair with: [글자 롤링 교체 · Glyph Roll](../glyph-roll/) · [3D 회전 해독 · 3D Flip Decode](../flip-decode-text/) · [글자 뒤집기 등장 · Letter Flip Reveal](../letter-flip-3d/)

출처 / Sources: [ui.aceternity.com](https://ui.aceternity.com/components/text-flipping-board) (unknown) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [magicuidesign/magicui](https://magicui.design/docs/components/text-3d-flip) (MIT) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/split-flap-board/registry-item.json) (Apache-2.0) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/05-text-animator.md#flipboard-3d-rotateX`) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
