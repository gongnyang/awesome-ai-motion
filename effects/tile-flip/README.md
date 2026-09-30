# Nº 553 타일 플립 · Tile Flip

> 클립 렌더 예정 / Clip rendering planned.

**글자 표면의 작은 타일들이 파도처럼 차례로 뒤집혀 반대 면의 글자를 드러내는 움직임**

Small tiles across a headline flip like a wave to reveal the text on their other face.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 중급 | 전환, 강조 | 숏폼, 발표, 설명 영상 | css |

다른 이름 / Also known as: Tiled face flip, 타일 면 뒤집기

## 선택 기준 / Selection

큰 메시지가 바뀌는 과정이 작은 물리적 단위로 나뉘어 진행되어 변화가 눈에 잘 보인다 / A big message change is broken into small physical units, so the change is easy to follow.

- 슬로건이 다른 문구로 바뀔 때 / Change a slogan into another phrase.
- 숫자판이나 안내판처럼 기계적으로 값이 바뀌는 느낌을 줄 때 / Give a mechanical departure-board feel to changing values.
- 제목 전환에 리듬을 줄 때 / Add rhythm to a title transition.

좋은 예 / Good: 12x6 격자 타일이 25ms 간격으로 왼쪽 위에서 오른쪽 아래로 뒤집히고 1.5초 후 새 문구가 완전히 보인다
나쁜 예 / Bad: 타일 사이 틈이 커서 글자가 잘게 갈라지거나, 간격이 0이라 파도가 아닌 한꺼번에 뒤집힌다
주의 / Avoid: 타일 경계는 글자 획을 자르지 않는 위치로 잡는다 · 격자는 72칸을 넘기지 않는다 · 두 면의 배경 색을 같게 해 틈이 튀지 않게 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 총 시간 | 1.5s | 1.0~2.2s | 마지막 타일 기준 |
| 격자 | 12x6 | 8x4~16x8 | 글자 크기에 맞춤 |
| 타일 간격 | 25ms | 15~50ms | 대각선 기준 지연 |
| 회전 | 180deg | 180deg | X축 |
| 이징 | power2.inOut | power1~power3 | 타일별 |

## 구현 / Implementation (GSAP)

```js
const cols = 12, rows = 6;
tiles.forEach((t, i) => {
  const c = i % cols, r = Math.floor(i / cols);
  tl.to(t, { rotationX: 180, duration: 0.6, ease: 'power2.inOut' }, 0.3 + (c + r) * 0.025);
});
// .tile { transform-style: preserve-3d } .tile > * { backface-visibility: hidden }
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <제목>의 글자를 12x6 타일로 나눠 다른 문구로 뒤집어 줘. 각 타일은 X축 180도 회전, 0.6초 power2.inOut, 시작 지연은 (열+행)*25ms에 0.3초를 더해. 앞뒤 면은 backface-visibility hidden으로 겹치고 뒤 면에 새 문구를 같은 배경으로 넣어. 전체 1.5초 안에 끝나고 paused 타임라인으로 작성해.
```

### 한국어 · Codex
```text
<파일>의 제목에 tile-flip을 적용해. 타일 72개를 만들고 i번째 tween을 position 0.3+(c+r)*0.025, duration 0.6, rotationX 180, ease power2.inOut으로 건다. 0.3초는 원문 그대로, 0.9초는 대각선 파도가 지나는 중, 1.9초는 새 문구가 틈 없이 읽히는지 캡처로 확인해.
```

### English · Claude Code
```text
Use GSAP to split <title> into a 12x6 tile grid and flip it to a new phrase. Each tile rotates 180 degrees on X over 0.6 seconds with power2.inOut, delayed by (col+row)*25ms plus 0.3 seconds. Front and back faces overlap with backface-visibility hidden, the back showing the new phrase on the same background. Finish within 1.5 seconds on a paused timeline.
```

### English · Codex
```text
Apply tile-flip to the title in <file>. Build 72 tiles and tween tile i at position 0.3+(c+r)*0.025, duration 0.6, rotationX 180, ease power2.inOut. Capture 0.3s (original text intact), 0.9s (diagonal wave in progress) and 1.9s (new phrase readable with no gaps).
```

예시 / Example: 타일 플립를 `.hero`에 적용해. / Apply Tile Flip to `.hero`.

## 적용 / Application

- HyperFrames: 타일 72개의 transform만 paused 타임라인에서 건다. 두 면 배경은 각 타일에 background-position으로 잘라 넣는다
- ReelForge: 브리프에 앞 문구, 뒤 문구, 격자 12x6, 간격 25ms를 싣는다. 타일 분할은 워커가 마크업으로 만든다
- Scrolline Deck: 진행률을 (c+r) 대각선 인덱스에 매핑하고 타일별 지속은 짧게 잡아 scrub에서도 파도가 유지되게 한다

조합 / Pair with: [카드 플립 · Card Flip](../card-flip/) · [스태거 · Stagger](../stagger/) · [모자이크 리빌 · Mosaic Reveal](../mosaic-reveal/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/code-slice-hero/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/wordmark-tiles/registry-item.json) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
