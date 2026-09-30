# Nº 461 ASCII 모션 · ASCII Motion

> 클립 렌더 예정 / Clip rendering planned.

**이미지를 밝기별 문자 격자로 바꿔 격자 크기가 줄어들며 원본으로 해석되는 효과**

An image becomes a grid of brightness-mapped characters, and the grid tightens until it resolves into the original.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 분위기, 전환, 설명 | 설명 영상, 숏폼, 발표 | canvas |

다른 이름 / Also known as: ASCII resolve, ASCII 해상도 복원, 문자 격자 영상, ASCII Mosaic Animation, ASCII 모자이크 애니메이션, ASCII art filter

## 선택 기준 / Selection

디지털 코드와 터미널 미학을 보여주고, 이미지가 데이터로 구성되었다는 인상을 준다 / Shows code and terminal aesthetics and the idea that an image is built from data.

- 개발자 도구, AI, 코드 주제의 인트로에서 이미지를 문자로 보여줄 때 / In dev-tool, AI, or code intros where an image should show as characters
- 이미지가 문자에서 실제 화면으로 해상되는 전환을 만들 때 / For a transition where characters resolve into the real picture

좋은 예 / Good: 이미지가 24px 격자의 문자 화면으로 시작해 1.5초 동안 6px로 촘촘해지며 원본으로 교차된다
나쁜 예 / Bad: 문자 종류가 너무 많아 알아보기 어렵거나, 격자가 너무 작아 성능이 떨어지고 문자가 뭉개진다
주의 / Avoid: 문자 단계 16개 초과 금지 · 격자 4px 미만 금지(문자 식별 불가)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 1500ms | 1000~2200ms | 해상 진행 |
| 격자 | 24px에서 6px | 32~4px | 셀 크기 |
| 문자 단계 | 10단계 | 6~16단계 | ' .:-=+*#%@' |
| 교차 | 마지막 300ms | 200~500ms | 원본으로 페이드 |
| 폰트 | 모노스페이스 700 | 고정폭 | 셀 폭과 일치 |

이징 / Ease: `power2.inOut`

## 구현 / Implementation (GSAP)

```js
const ramp=' .:-=+*#%@';
function draw(p){const cell=Math.round(24-18*p);
 for(let y=0;y<1080;y+=cell)for(let x=0;x<1920;x+=cell){
 const l=lum(x,y); ctx.fillText(ramp[Math.floor(l*9.99)],x,y+cell);}}
tl.to({p:0},{p:1,duration:1.5,ease:'power2.inOut',onUpdate(){draw(this.targets()[0].p)}},t);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<이미지>를 ASCII 문자 화면으로 바꿨다가 원본으로 해상해줘. 24px 격자로 시작해 1.5초 동안 6px까지 power2.inOut으로 촘촘하게 만들고, 문자 램프는 ' .:-=+*#%@' 10단계, 모노스페이스 700 폰트. 마지막 0.3초에 원본으로 교차하고 draw는 progress 순수 함수로 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 ascii-motion 캔버스를 구현해. 격자 24px에서 6px, 1500ms power2.inOut, 문자 10단계, 마지막 300ms 원본 교차. 0초, 0.5초, 1.0초, 1.6초를 캡처해 셀 크기가 줄어드는지, 문자 밝기가 원본 명암과 대응하는지, 1.6초에 원본이 온전한지 확인해.
```

### English · Claude Code
```text
Turn <image> into an ASCII character display and resolve it to the original. Start on a 24px grid and tighten to 6px over 1.5s with power2.inOut, using a 10-step ramp ' .:-=+*#%@' in a bold monospace font. Cross-fade to the original over the last 0.3s. Draw as a pure function of progress so it is seekable.
```

### English · Codex
```text
Implement an ascii-motion canvas in <file>: grid 24px to 6px, 1500ms power2.inOut, 10 characters, 300ms final crossfade to the original. Capture at 0s, 0.5s, 1.0s, and 1.6s to verify the cell size shrinks, character density tracks source luminance, and the original is intact at 1.6s.
```

예시 / Example: ASCII 모션를 `.hero`에 적용해. / Apply ASCII Motion to `.hero`.

## 적용 / Application

- HyperFrames: 밝기는 한 번 샘플링해 배열로 저장하고 draw는 진행값 p의 순수 함수로 둔다. 캔버스 폰트는 렌더 전에 로드 완료를 확인한다
- ReelForge: 브리프에 cellFrom, cellTo, ramp 문자열, crossfadeMs를 싣는다. 폰트는 프로젝트에 포함된 모노 폰트를 지정한다
- Scrolline Deck: 진행률 p에 셀 크기를 매핑해 스크럽하면 격자가 커졌다 줄었다 한다. 셀 크기는 정수로 반올림해 깜빡임을 막는다

조합 / Pair with: [스크램블 · Text Scramble](../text-scramble/) · [디더링 모션 · Animated Dithering](../animated-dither/) · [디픽셀 리빌 · Depixelate Reveal](../depixelate-reveal/) · [디지털 문자비 · Digital Rain](../digital-rain/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/ascii-render-pass/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/ascii-trail-reveal/registry-item.json) (Apache-2.0) · [ui.aceternity.com](https://ui.aceternity.com/components/ascii-art) (unknown) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [magicuidesign/magicui](https://magicui.design/docs/components/glyph-matrix) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
