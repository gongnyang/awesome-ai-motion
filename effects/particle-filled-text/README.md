# Nº 546 입자 채움 글자 · Particle Filled Text

> 클립 렌더 예정 / Clip rendering planned.

**글자 내부의 작은 점들이 계속 움직이며 획의 형태를 이루는 입자 채움 글자**

Small dots inside letter shapes keep moving while still forming the strokes.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 고급 | 분위기, 주목 끌기 | 숏폼, 웹 UI, 설명 영상 | webgl |

다른 이름 / Also known as: Text Flies Particle Texture, 텍스트 날벌레 입자 질감

## 선택 기준 / Selection

살아 움직이는 군집이 문구를 이룬다. 데이터나 생명체로 이루어진 듯한 인상을 준다 / A living swarm forms the phrase, like data or organisms.

- AI·데이터·생명 같은 주제의 타이틀을 입자로 표현할 때 / Rendering an AI, data or life-themed title as particles
- 브랜드 필름의 오프닝 로고형 제목 / Opening-logo style titles in brand films

좋은 예 / Good: 제목 획 안을 반경 2px 점들이 6px 격자로 채우고 1.8초 주기로 흔들리며 커서가 다가오면 80px 반경 밖으로 피한다
나쁜 예 / Bad: 점이 획을 벗어나 배경으로 새어 나와 글자 형태가 무너진다
주의 / Avoid: 점은 반드시 글자 알파 마스크 안에서만 그린다 · 작은 크기 글자에는 쓰지 않는다. 획 굵기가 점 격자의 3배 이상이어야 읽힌다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 점 반경 | 2px | 1.5~3px | 1920x1080 |
| 셀 폭 | 6px | 5~8px | 격자 간격 |
| 주기 | 1.8s | 1.2~3s | 점 흔들림 |
| 회피 반경 | 80px | 60~120px | 장애물 피하기 |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
// 캔버스 2D: 글자를 그려 알파 마스크로 샘플링
const pts = []; // {x,y,seed}: 셀 중심 중 마스크 알파>128인 것만, 시드 고정
function draw(t){
  ctx.clearRect(0, 0, W, H);
  pts.forEach(p => {
    const a = t * 2 * Math.PI / 1.8 + p.seed;
    ctx.beginPath(); ctx.arc(p.x + Math.cos(a) * 2, p.y + Math.sin(a) * 2, 2, 0, 6.283); ctx.fill();
  });
}
tl.eventCallback('onUpdate', () => draw(tl.time()));
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 제목을 입자 채움 글자로 만들어줘. 캔버스에 글자를 그려 알파 마스크를 만들고 6px 격자 중 마스크 안의 셀에 반경 2px 점을 놓아. 점은 1.8초 주기로 원을 그리며 흔들리고 위상은 셀 인덱스 시드로 고정해. 총 점 4000개 이하.
```

### 한국어 · Codex
```text
<파일>에 particle filled text를 적용해. 캔버스 텍스트의 알파>128인 6px 셀에만 점을 두고 반경 2px, 주기 1.8초, 위상은 인덱스 시드. onUpdate에서 draw(tl.time()). 0초·0.9초·1.8초를 캡처해 점이 글자 밖으로 새지 않는지와 1.8초 시점이 0초와 동일한지 확인해.
```

### English · Claude Code
```text
Make the title in <target> a particle-filled text. Draw the text to a canvas to build an alpha mask, then place 2px-radius dots in every 6px cell inside the mask. Dots orbit on a 1.8s cycle with phase seeded from the cell index. Cap at 4000 dots.
```

### English · Codex
```text
Apply particle filled text in <file>. Place dots only in 6px cells where text alpha>128; radius 2px, period 1.8s, phase from index seed; draw(tl.time()) in onUpdate. Capture at 0s, 0.9s and 1.8s to verify no dots leak outside the glyphs and that the 1.8s frame equals the 0s frame.
```

예시 / Example: 입자 채움 글자를 `.hero`에 적용해. / Apply Particle Filled Text to `.hero`.

## 적용 / Application

- HyperFrames: 캔버스에 그리고 t에서 위치를 순수 계산한다. 점 위치의 시드는 셀 인덱스에서 뽑아 고정한다
- ReelForge: 브리프에 문구, 점 반경 2px, 셀 6px, 주기 1.8초, 회피 여부를 싣는다. WebGL이 아닌 2D 캔버스로 충분함을 알린다
- Scrolline Deck: 진행률에 따라 점의 진폭을 키우거나 줄인다. 정지한 스크롤에서는 제자리 미세 진동만 남기고, 점 개수는 4000개 이하로 제한한다

조합 / Pair with: [텍스트 입자 디졸브 · Text Particle Dissolve](../text-particle-dissolve/) · [흩어진 글자 조립 · Text Scatter Assemble](../text-scatter-assemble/) · [LED 문자 점등 · LED Matrix Text](../led-matrix-text/)

출처 / Sources: [bradley/Blotter](https://github.com/bradley/Blotter) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
