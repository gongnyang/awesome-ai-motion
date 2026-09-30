# Nº 201 분할 패널 전환 · Split Panel Handoff

> 클립 렌더 예정 / Clip rendering planned.

**제목이 위아래로 갈라져 나가고 생긴 빈 공간에서 패널이 커져 화면을 차지하는 전환**

The title splits apart vertically and a panel grows from the opening to take over the screen.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 순서·흐름 | 제품 시연, 발표, 설명 영상 | gsap |

다른 이름 / Also known as: Type split panel handoff, 글자 분할 패널 전환

## 선택 기준 / Selection

말에서 구체적 화면으로 초점이 넘어간다는 감각. 제목이 문이 되어 열린다 / Focus hands off from words to a concrete screen, with the title acting as a door.

- 제목 카드에서 실제 화면이나 데모로 넘어갈 때 / Move from a title card into a real screen or demo.
- 챕터 제목에서 본문 콘텐츠로 열어 줄 때 / Open a chapter title into body content.

좋은 예 / Good: 제목이 중간에서 갈라져 위 절반은 -300px, 아래 절반은 +300px로 0.8초 동안 밀려 나가고 그 사이에서 패널이 scale 0에서 1로 커진다
나쁜 예 / Bad: 제목이 갈라져 나가는 동안 글자가 잘려 읽히지 않거나, 패널이 제목이 다 사라진 뒤에야 등장해 공백이 생긴다
주의 / Avoid: 제목 분할선은 글자 x-height 중간을 피해 가로줄 사이에 둔다 · 패널은 제목 이동과 겹쳐 시작한다(0.2초 늦춰 시작)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 0.8s | 0.6~1.1s | 제목과 패널 동시 |
| 제목 이동 | ±300px | 200~420px | 위와 아래 반대 |
| 패널 scale | 0→1 | 0.1→1 | 중앙 원점 |
| 패널 지연 | 0.2s | 0~0.3s | 제목이 열린 후 시작 |

이징 / Ease: `power3.inOut`

## 구현 / Implementation (GSAP)

```js
const tp = document.querySelector('.top'), bt = document.querySelector('.bot');
tl.to(tp, { y: -300, duration: 0.8, ease: 'power3.inOut' }, 0)
  .to(bt, { y: 300, duration: 0.8, ease: 'power3.inOut' }, 0)
  .fromTo('.panel', { scale: 0 }, { scale: 1, duration: 0.6, ease: 'power3.out' }, 0.2);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<제목>이 위아래로 갈라지며 <패널>이 열리는 전환을 만들어줘. 제목을 위/아래 절반으로 나눠 위쪽은 y -300px, 아래쪽은 y +300px로 0.8초 power3.inOut, 패널은 0.2초부터 0.6초 동안 scale 0에서 1로 power3.out. 분할선은 제목 가로 중앙이고 paused 타임라인 하나로 만들어.
```

### 한국어 · Codex
```text
<파일>의 제목 카드에 split panel handoff를 적용해. .top y -300px, .bot y +300px (0.8s, power3.inOut), .panel scale 0에서 1 (0.2초부터 0.6s, power3.out). 0.3초에 제목이 갈라졌는지, 0.6초에 패널이 화면의 절반 이상인지, 1.0초에 패널이 전체를 차지하는지 캡처로 확인해.
```

### English · Claude Code
```text
Build a split-panel handoff from <title> to <panel>. Split the title into top and bottom halves; the top goes y -300px and the bottom y +300px over 0.8 seconds (power3.inOut). The panel scales from 0 to 1 starting at 0.2 seconds for 0.6 seconds (power3.out). Split along the title's horizontal center and keep it in one paused timeline.
```

### English · Codex
```text
Apply a split panel handoff to the title card in <file>. .top y -300px, .bot y +300px (0.8s, power3.inOut), .panel scale 0 to 1 (start 0.2s, 0.6s, power3.out). Capture at 0.3 seconds to confirm the title has split, at 0.6 seconds to confirm the panel covers over half the frame, and at 1.0 seconds to confirm it fills the screen.
```

예시 / Example: 분할 패널 전환를 `.hero`에 적용해. / Apply Split Panel Handoff to `.hero`.

## 적용 / Application

- HyperFrames: 제목을 위/아래 두 요소로 클론하고 clipPath inset으로 각각 절반만 보이게 한다. 이동은 y만 쓴다
- ReelForge: 씬 워커 브리프에 splitPx, panelDelay, panelAsset을 싣는다
- Scrolline Deck: 진행률 하나로 제목 y와 패널 scale을 함께 계산한다. 진행률 0.25 이후 패널이 보이게 매핑

조합 / Pair with: [스케일 스왑 · Scale Swap](../scale-swap/) · [마스크 리빌 · Mask Reveal](../mask-reveal/) · [좌표 줌 · Zoom to Detail](../zoom-to-detail/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/type-match-cut/registry-item.json) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
