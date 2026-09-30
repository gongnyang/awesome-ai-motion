# Nº 115 가변 글꼴 축 변형 · Variable Font Axis Morph

> 클립 렌더 예정 / Clip rendering planned.

**한 단어의 굵기와 너비가 연속으로 변하며 강도와 성격을 바꾸는 가변 폰트 변형**

A word's weight and width change continuously, shifting its intensity and character.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 중급 | 강조, 분위기 | 숏폼, 발표, 웹 UI | css |

다른 이름 / Also known as: Variable font flex, 가변 글꼴 변형, Variable Font Width Breathing, 가변 폰트 폭 호흡, Variable Font Slant Motion, 가변 폰트 기울기 변화, Variable Font Custom Axis Morph, 가변 폰트 사용자 축 변형

## 선택 기준 / Selection

같은 단어가 가벼운 톤에서 단단한 톤으로 바뀌는 인상. 무게가 실린다 / The same word moves from a light voice to a solid one, gaining weight.

- 핵심 단어를 가늘게 시작해 굵게 키워 강조할 때 / When a key word should grow from thin to bold for emphasis
- 호버·선택 상태에서 텍스트 성격을 바꿀 때 / When text personality should change on hover or selection

좋은 예 / Good: "집중"이 0.7초 동안 wght 300에서 800, wdth 80에서 100으로 변하며 글자마다 0.06초 늦게 시작한다
나쁜 예 / Bad: 축 변화가 프레임마다 다른 값을 내 글자가 떨리거나 줄 바꿈이 바뀌어 레이아웃이 점프한다
주의 / Avoid: 줄 바꿈이 바뀌지 않도록 white-space nowrap과 고정 박스 폭을 준다 · wght와 wdth를 동시에 바꿀 때는 wdth 변화폭을 20% 이하로 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 0.7s | 0.5~1.0s | power2.inOut |
| wght | 300에서 800 | 200~900 | 폰트 지원 범위 |
| wdth | 80에서 100 | 75~100 | 너비 축 |
| 글자 시작 차 | 0.06s | 0~0.1s | 0이면 단어 전체 동시 |

이징 / Ease: `power2.inOut`

## 구현 / Implementation (GSAP)

```js
chars.forEach((_, i) => {
  const o = {w:300, d:80};
  tl.to(o, {w:800, d:100, duration:0.7, ease:'power2.inOut', onUpdate(){
    node(i).style.fontVariationSettings = `'wght' ${o.w}, 'wdth' ${o.d}`;
  }}, 0.2 + i * 0.06);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 단어에 가변 폰트 축 변형을 넣어줘. 0.7초 동안 wght 300에서 800, wdth 80에서 100으로 power2.inOut 변형하고 글자 시작 차 0.06초. 컨테이너 폭은 최종 상태 기준으로 고정하고 줄 바꿈을 막아 레이아웃이 움직이지 않게 해.
```

### 한국어 · Codex
```text
<파일>에 variable font axis morph를 적용해. 객체 {w:300,d:80}를 800/100으로 0.7초 power2.inOut 보간하고 onUpdate에서 font-variation-settings에 기록, 글자 stagger 0.06. 0.3초·0.6초·1.3초를 캡처해 wght 증가와 컨테이너 좌표 불변을 확인해.
```

### English · Claude Code
```text
Morph the word in <target> along variable-font axes: over 0.7s go wght 300 to 800 and wdth 80 to 100 with power2.inOut, glyph starts 0.06s apart. Fix the container width to the final state and forbid wrapping so layout never moves.
```

### English · Codex
```text
Apply variable font axis morph in <file>. Tween {w:300,d:80} to 800/100 over 0.7s power2.inOut, write to font-variation-settings in onUpdate, glyph stagger 0.06. Capture at 0.3s, 0.6s and 1.3s and verify wght rises while container coordinates stay fixed.
```

예시 / Example: 가변 글꼴 축 변형를 `.hero`에 적용해. / Apply Variable Font Axis Morph to `.hero`.

## 적용 / Application

- HyperFrames: GSAP가 객체 속성을 보간하고 onUpdate로 CSS 변수에 쓴다. 단어 컨테이너 폭은 최종(가장 넓은) 상태 기준으로 고정한다
- ReelForge: 브리프에 폰트와 축 범위, 시작·끝 값, 0.7초, 시작 차 0.06초를 싣는다
- Scrolline Deck: 진행률 0~1을 축 값에 직접 선형 매핑하고 이징은 진행률 쪽에서 준다. 단어가 화면 중앙에 오는 구간에서만 변화하게 구간을 잘라 쓴다

조합 / Pair with: [가변 글꼴 두께 파동 · Variable Font Weight Wave](../variable-font-weight-wave/) · [글꼴 셔플 · Font Shuffle](../font-shuffle/) · [단어 강조 · Word Emphasis](../word-emphasis/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/variable-axis-type/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/variable-font-flex/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-weight-shift/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/techniques.md`) (unknown) · [yanone/fontanimation](https://github.com/yanone/fontanimation) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
