# Nº 151 타일 월 와이프 · Clone Wall Wipe

> 클립 렌더 예정 / Clip rendering planned.

**같은 단어의 타일 벽이 화면을 채우고 반전된 뒤 걷히는 전환**

A wall of tiles repeating the same word fills the frame, inverts, then clears.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 강조 | 숏폼, 발표, 설명 영상 | css |

다른 이름 / Also known as: Clone wall cover, 복제 글자벽 전환

## 선택 기준 / Selection

메시지를 반복해 각인시키는 강한 경계. 타이포 중심 스타일 / A hard boundary that hammers a message by repetition: typography-led style.

- 핵심 단어를 강하게 남기며 장면을 바꿀 때 / Leave a key word behind strongly as scenes change.
- 타이포 위주 오프닝이나 챕터 카드에서 / Use in type-driven openers or chapter cards.

좋은 예 / Good: 8x6 격자의 같은 단어 타일이 20ms 간격으로 채워지고 difference 혼합으로 반전되어 0.8초 안에 컷 후 걷힌다
나쁜 예 / Bad: 타일 단어가 읽히지 않는 작은 크기이거나, 채우는 시간이 길어 오히려 지루하다
주의 / Avoid: 단어는 1개, 한 화면에 반복은 48개 이하 · 반전 유지는 0.1초 이내

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 지속 | 0.8s | 0.6~1.2s | 채우기 0.4s 걷기 0.4s |
| 격자 | 8x6 | 6x4~10x8 | 타일 하나 240px 폭 |
| 타일 간격 | 20ms | 10~40ms | 좌상에서 우하 순서 |
| 혼합 | difference | difference/exclusion | 반전 표현 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
tl.from('.tile', { opacity: 0, scale: 0.8, duration: 0.2, ease: 'power2.out',
    stagger: { each: 0.02, grid: [6, 8], from: 'start' } })
  .set('.a', { display: 'none' })
  .to('.tile', { opacity: 0, duration: 0.2, stagger: { each: 0.02, grid: [6, 8], from: 'start' } }, '+=0.1');
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상A>에서 <대상B>로 클론 월 와이프를 만들어줘. '<단어>'를 8x6 격자로 48개 복제해 좌상에서 우하 순서로 20ms 간격, opacity 0과 scale 0.8에서 등장(0.2초, power2.out)시켜 화면을 채우고, 다 찬 뒤 A를 B로 교체하고 같은 순서로 걷어 줘. 타일 벽은 mix-blend-mode difference, 전체 paused 타임라인 하나.
```

### 한국어 · Codex
```text
<파일>에 clone wall wipe를 넣어. .tile 48개를 grid [6, 8], each 0.02s로 opacity 0, scale 0.8에서 등장(0.2s), 채워진 뒤 장면 교체, 이후 0.1초 홀드하고 같은 순서로 opacity 0. 0.3초에 타일이 채워지는 중인지, 0.5초에 화면 전체가 타일인지, 0.9초에 타일이 없는지 캡처로 확인해.
```

### English · Claude Code
```text
Build a clone wall wipe from <targetA> to <targetB>. Clone '<word>' into an 8x6 grid of 48 tiles, fill from top left to bottom right at 20ms intervals with each tile going opacity 0 and scale 0.8 to full over 0.2 seconds (power2.out). Once full, swap A for B and clear in the same order. Use mix-blend-mode difference and one paused timeline.
```

### English · Codex
```text
Add a clone wall wipe to <file>. Animate 48 .tile elements with grid [6, 8] and each 0.02s from opacity 0 and scale 0.8 (0.2s), swap scenes once filled, hold 0.1s, then fade out in the same order. Capture at 0.3 seconds to confirm filling is in progress, at 0.5 seconds for a full-frame wall, and at 0.9 seconds to confirm no tiles remain.
```

예시 / Example: 타일 월 와이프를 `.hero`에 적용해. / Apply Clone Wall Wipe to `.hero`.

## 적용 / Application

- HyperFrames: GSAP grid stagger로 타일 순서를 계산한다. 타일은 DOM 48개까지 문제없다
- ReelForge: 씬 워커 브리프에 word, gridCols, gridRows, staggerMs를 싣고 단어를 씬 텍스트에서 받는다
- Scrolline Deck: 진행률 0~0.45 채우기, 0.5 컷, 0.55~1 걷기로 나눈다. 타일 지연은 진행률 0.01 간격

조합 / Pair with: [토큰 쪼개기 · Token Split](../token-split/) · [스플릿 로고 리빌 · Split Logo Reveal](../split-lockup/) · [스태거 · Stagger](../stagger/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/mk-clone-wall-transition/registry-item.json) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
