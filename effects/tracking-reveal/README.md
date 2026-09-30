# Nº 114 자간 공개 · Tracking Reveal

> 클립 렌더 예정 / Clip rendering planned.

**넓게 벌어져 있던 글자 사이 간격이 줄어들며 제목이 한 덩어리로 정돈되는 효과**

Widely spaced letters tighten together until the title settles into one compact unit.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 기본 | 분위기, 브랜딩 | 설명 영상, 발표, 스크롤덱 | gsap |

다른 이름 / Also known as: 자간 변화 리빌, Tracking Converge, 자간 수렴, tracking-kerning-tween, Tracking Animation, 자간 애니메이션, Text Tracking Expansion

## 선택 기준 / Selection

고급스러운 응집. 흩어진 것이 정렬되며 신뢰와 차분함을 준다 / Refined cohesion: scattered elements aligning to signal trust and calm.

- 럭셔리·브랜드 필름의 제목 등장 / Title reveals in luxury or brand films
- 섹션 이름이나 부제를 조용히 정착시킬 때 / Settling a section name or subtitle quietly

좋은 예 / Good: "COLLECTION"이 letter-spacing 0.2em에서 0으로 0.8초 동안 모이며 opacity 0에서 1로 올라온다
나쁜 예 / Bad: 간격을 0.6em 이상 벌려 글자가 서로 무관한 조각처럼 보이고 줄이 화면 밖으로 넘친다
주의 / Avoid: letter-spacing 자체를 보간하면 리플로가 생겨 줄이 흔들린다. 글자 위치를 고정하고 transform x로 보간한다 · 한국어는 자간이 벌어지면 읽기가 끊긴다. 벌림은 0.2em 이하로 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 0.8s | 0.6~1.2s | 천천히 모임 |
| 시작 자간 | 0.2em | 0.1~0.4em | 한국어는 0.2em 이하 |
| opacity | 0에서 1 | 0~1 | 앞 60%에서 올라옴 |
| 이징 | power2.out | power2~power4 | 끝이 부드럽게 정지 |

## 구현 / Implementation (GSAP)

```js
// 최종 위치를 측정한 뒤 x 오프셋으로 벌림을 만든다
chars.forEach((c, i) => {
  const off = (i - (N - 1) / 2) * 0.2 * fontSize;
  tl.fromTo(node(i), {x: off, opacity:0}, {x:0, opacity:1, duration:0.8, ease:'power2.out'}, 0.2);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 제목에 tracking reveal을 넣어줘. 글자를 중앙 기준 0.2em 간격 오프셋에서 0으로 0.8초 동안 power2.out으로 모으고 opacity 0에서 1로 올려. letter-spacing 대신 글자별 transform x를 써서 리플로가 없게, 완료 뒤 1초 정지.
```

### 한국어 · Codex
```text
<파일>의 제목에 tracking reveal을 적용해. 글자 i의 x 시작값=(i-(N-1)/2)*0.2*fontSize, x 0으로 0.8초 power2.out, opacity 0에서 1. 0.3초·0.7초·1.5초를 캡처해 글자 간격이 줄고 마지막 프레임에서 정상 자간인지, 줄 좌우 폭이 최종에서 화면 안인지 확인해.
```

### English · Claude Code
```text
Add a tracking reveal to the title in <target>. Pull the letters from 0.2em offsets around the center to 0 over 0.8s power2.out while opacity goes 0 to 1. Use per-glyph transform x instead of letter-spacing to avoid reflow; hold 1s at the end.
```

### English · Codex
```text
Apply tracking reveal to the title in <file>. Glyph i starts at x=(i-(N-1)/2)*0.2*fontSize, tweens to 0 over 0.8s power2.out, opacity 0 to 1. Capture at 0.3s, 0.7s and 1.5s and verify spacing tightens, ends at normal tracking, and the line stays within the frame.
```

예시 / Example: 자간 공개를 `.hero`에 적용해. / Apply Tracking Reveal to `.hero`.

## 적용 / Application

- HyperFrames: 글자 span의 x를 중앙 기준 오프셋으로 시작해 0으로 모은다. letter-spacing을 건드리지 않아 리플로가 없다
- ReelForge: 브리프에 문구, 시작 자간 0.2em, 0.8초, 글자 크기를 싣는다. 크기가 바뀌면 오프셋을 다시 계산하게 한다
- Scrolline Deck: 진행률 0~0.5에 매핑한다. 홀드 구간에서 자간이 다시 벌어지지 않도록 종료 상태를 고정한다

조합 / Pair with: [블러 리빌 · Blur Reveal](../blur-reveal/) · [단어 떠오르기 · Word Rise Fade](../word-rise-fade/) · [클립 리빌 · Clip Reveal](../clip-reveal/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/tracking-in/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:hyperframes-creative/references/motion-principles.md`) (unknown) · [animista.net](https://animista.net/play) (BSD-2-Clause (FreeBSD)) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/05-text-animator.md#tracking-kerning-tween`) (Apache-2.0) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/gallery-index.json`) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
