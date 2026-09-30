# Nº 116 가변 글꼴 두께 파동 · Variable Font Weight Wave

> 클립 렌더 예정 / Clip rendering planned.

**굵기와 기울기의 봉우리가 글자를 차례로 지나가는 가변 폰트 파동**

A wave of weight and slant passes through the letters of a variable font.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 고급 | 분위기, 주목 끌기, 브랜딩 | 숏폼, 웹 UI, 설명 영상 | css |

다른 이름 / Also known as: Weight wave, 글꼴 두께 파동, 가변 폰트 굵기 물결

## 선택 기준 / Selection

글자 자체에 살아 있는 물성과 리듬이 있다. 로고 없이도 브랜드 톤을 준다 / The type itself feels alive and rhythmic, carrying brand tone without a logo.

- 가변 폰트를 쓰는 브랜드 헤드라인에 생동감을 줄 때 / When adding life to a variable-font brand headline
- 로딩·대기 화면에서 텍스트만으로 움직임을 줄 때 / When a loading or idle screen needs motion from text alone

좋은 예 / Good: "Flow Motion" 위를 폭 4글자의 파동이 1.5초에 한 번 지나가며 걸린 글자만 wght 300에서 900으로 부풀었다 돌아온다
나쁜 예 / Bad: 글자 폭이 변해 전체 줄이 흔들리도록 wdth까지 함께 건다
주의 / Avoid: 축 값을 바꿔도 줄 전체 폭이 변하지 않게 글자 슬롯 폭을 고정하거나 wdth 축은 잠근다 · 한국어 웹폰트는 가변 축 지원 여부를 먼저 확인한다. 미지원이면 라틴 문구에만 쓴다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 1.5s | 1.0~2.5s | 파동이 한 번 지나가는 시간 |
| wght 범위 | 300~900 | 200~900 | 폰트 지원 범위 안 |
| 파장 | 4글자 | 3~6글자 | 봉우리 폭 |
| slnt | 0~-10 | 0~-12 | 기울기 |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
const N = chars.length, L = 4;
const o = {p:0};
tl.to(o, {p:1, duration:1.5, ease:'none', repeat:0, onUpdate(){
  chars.forEach((_, i) => {
    const d = Math.abs(i - o.p * (N + L) + L / 2);
    const k = Math.max(0, 1 - d / (L / 2));
    node(i).style.fontVariationSettings = `'wght' ${300 + 600 * k}, 'slnt' ${-10 * k}`;
  });
}}, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 헤드라인에 가변 폰트 굵기 파동을 넣어줘. 파동은 폭 4글자, 1.5초에 문장을 한 번 지나가며 걸린 글자의 wght를 300에서 900, slnt를 0에서 -10으로 올렸다 되돌려. 줄 전체 폭이 변하지 않게 글자 슬롯 폭을 고정하고, 축 값은 t의 함수로만 계산해.
```

### 한국어 · Codex
```text
<파일>에 variable font weight wave를 적용해. fonts.load 이후 onUpdate에서 글자 i의 k=max(0,1-|i-p*(N+4)+2|/2)를 계산해 wght 300+600k, slnt -10k를 font-variation-settings에 쓴다. 주기 1.5초. 0.3초·0.75초·1.2초를 캡처해 굵은 봉우리가 왼쪽에서 오른쪽으로 이동하고 줄 폭 변화가 2px 이하인지 확인해.
```

### English · Claude Code
```text
Add a variable-font weight wave to the headline in <target>. A wave 4 glyphs wide sweeps the line once every 1.5s, raising wght from 300 to 900 and slnt from 0 to -10 on the glyphs it touches, then relaxing. Fix glyph slot widths so the line width never changes, and compute axes purely from t.
```

### English · Codex
```text
Apply variable font weight wave in <file>. After fonts.load, in onUpdate compute k=max(0,1-|i-p*(N+4)+2|/2) for glyph i and write wght 300+600k, slnt -10k into font-variation-settings; period 1.5s. Capture at 0.3s, 0.75s and 1.2s, verify the heavy crest moves left to right and line width varies by 2px or less.
```

예시 / Example: 가변 글꼴 두께 파동를 `.hero`에 적용해. / Apply Variable Font Weight Wave to `.hero`.

## 적용 / Application

- HyperFrames: onUpdate에서 t의 함수로 축 값을 계산한다. 렌더 전에 document.fonts.load로 가변 폰트를 확실히 적재한다
- ReelForge: 브리프에 폰트명과 지원 축 범위, 주기 1.5초, 파장 4글자를 싣는다. 폰트 파일 경로는 프로젝트 내부로 고정한다
- Scrolline Deck: 진행률 p를 파동 위치로 직접 쓴다. 스크롤에 따라 파동이 문장 위를 오간다. 축 값은 부드러운 함수라 스프링 없이도 자연스럽다

조합 / Pair with: [가변 글꼴 축 변형 · Variable Font Axis Morph](../variable-font-axis-morph/) · [글자 웨이브 · Text Wave](../text-wave/) · [글꼴 셔플 · Font Shuffle](../font-shuffle/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/weight-wave/registry-item.json) (OFL-1.1) · [amazingcreationsltd/variable-font-animator](https://github.com/amazingcreationsltd/variable-font-animator) (unknown) · [yanone/fontanimation](https://github.com/yanone/fontanimation) (Apache-2.0) · [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-variation-settings) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
