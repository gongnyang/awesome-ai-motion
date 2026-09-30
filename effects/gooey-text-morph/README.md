# Nº 495 끈적한 글자 모프 · Gooey Text Morph

> 클립 렌더 예정 / Clip rendering planned.

**한 단어가 액체 덩어리처럼 뭉쳤다가 다음 단어로 변하는 모프**

One word blobs into liquid and re-forms as the next word.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 고급 | 분위기, 설명 | 숏폼, 웹 UI, 설명 영상 | svg |

다른 이름 / Also known as: Gooey Text Merge, 텍스트 끈적한 결합

## 선택 기준 / Selection

유기적인 언어 변화. 서로 다른 단어가 하나의 물질로 이어진 것처럼 읽힌다 / An organic shift of language, as if two words were one substance.

- 두 단어의 변화를 부드럽게 이어 주는 슬로건 교체 / Smoothly linking a slogan swap between two words
- 브랜드 필름의 감성적인 문구 전환 / An emotional phrase transition in a brand film

좋은 예 / Good: "생각"이 blur 12px로 번지고 알파 임계로 뭉쳐 1.0초 만에 "실행"으로 바뀐다
나쁜 예 / Bad: 임계값을 낮춰 글자가 잉크 얼룩처럼 뭉개져 어느 쪽 단어도 읽히지 않는 구간이 0.5초 넘게 이어진다
주의 / Avoid: 뭉개진 구간은 0.4초 이내로 둔다. 길면 아무것도 읽히지 않는다 · 필터는 단어 컨테이너에만 건다. 화면 전체에 걸면 렌더 비용이 커진다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 시간 | 1.0s | 0.7~1.4s | 모프 구간 |
| 최대 blur | 12px | 8~16px | 중간 프레임에서 |
| 알파 임계 | 18 -7 | 18 -7 ~ 22 -9 | feColorMatrix 마지막 두 값 |
| 정지 | 0.8s | 0.5~1.5s | 각 단어 읽는 시간 |

이징 / Ease: `power2.inOut`

## 구현 / Implementation (GSAP)

```js
// <filter id='goo'><feGaussianBlur id='b' stdDeviation='0'/><feColorMatrix values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7'/></filter>
const b = document.getElementById('b'), o = {p:0};
tl.to(o, {p:1, duration:1.0, ease:'power2.inOut', onUpdate(){
  const s = Math.sin(o.p * Math.PI) * 12;
  b.setAttribute('stdDeviation', s);
  A.style.opacity = 1 - o.p; B.style.opacity = o.p;
}}, 0.4);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>의 단어 A를 단어 B로 액체처럼 모프해줘. SVG feGaussianBlur와 feColorMatrix(알파 18 -7)를 컨테이너에만 적용하고, 1.0초 동안 blur를 sin(p*PI)*12px로 올렸다 내리며 A의 opacity를 1에서 0, B를 0에서 1로. 각 단어 정지 0.8초.
```

### 한국어 · Codex
```text
<파일>에 gooey text morph를 적용해. goo 필터(stdDeviation 0에서 최대 12, feColorMatrix 알파 18 -7)를 텍스트 컨테이너에만 걸고 p 0~1을 1.0초 power2.inOut로 진행. 0.4초·0.9초·1.4초를 캡처해 A 선명, 중간 뭉침, B 선명 순서인지 확인하고 뭉친 구간이 0.4초 이내인지 검사해.
```

### English · Claude Code
```text
Morph word A into word B in <target> like liquid. Apply SVG feGaussianBlur plus feColorMatrix (alpha 18 -7) only on the container; over 1.0s drive blur as sin(p*PI)*12px while A fades 1 to 0 and B 0 to 1. Hold each word 0.8s.
```

### English · Codex
```text
Apply gooey text morph in <file>. Put the goo filter (stdDeviation 0 to max 12, feColorMatrix alpha 18 -7) only on the text container and advance p 0..1 over 1.0s power2.inOut. Capture at 0.4s, 0.9s and 1.4s to verify A sharp, mid-blob, B sharp, and check the blobbed span lasts 0.4s or less.
```

예시 / Example: 끈적한 글자 모프를 `.hero`에 적용해. / Apply Gooey Text Morph to `.hero`.

## 적용 / Application

- HyperFrames: stdDeviation을 진행값의 사인으로 올렸다 내린다. SVG 필터가 headless 렌더에서 동작하는지 첫 캡처로 반드시 확인한다
- ReelForge: 브리프에 두 단어, 최대 blur 12px, 시간 1.0초, 알파 임계 18 -7을 싣는다. 단어 색은 단색으로 제한한다
- Scrolline Deck: 진행률 0.4~0.6에서만 모프하고 나머지는 홀드로 둔다. 필터 비용이 크므로 컨테이너를 좁게 잡는다

조합 / Pair with: [글자 액체 왜곡 · Text Liquid Distortion](../text-liquid-distortion/) · [블러 디졸브 · Blur Dissolve](../blur-dissolve/) · [스크램블 · Text Scramble](../text-scramble/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/morph-text/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:music-to-video/references/motion-primitive-catalog.md`) (unknown) · [codrops/GooeyTextHoverEffect](https://github.com/codrops/GooeyTextHoverEffect) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
