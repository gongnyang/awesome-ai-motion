# Nº 118 단어 떠오르기 · Word Rise Fade

> 클립 렌더 예정 / Clip rendering planned.

**단어가 흐림을 벗으며 조금씩 위로 올라와 제자리에 자리 잡는 순차 공개**

Words rise slightly while shedding blur, settling into place one after another.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 기본 | 설명, 분위기 | 설명 영상, 발표, 스크롤덱 | gsap |

다른 이름 / Also known as: Word rise, Word Fade, 단어 페이드 상승, word-fade-up, Word Staggered Fade, 단어 순차 페이드, Wordwise text reveal, 단어 단위 공개

## 선택 기준 / Selection

차분하고 정돈된 문장 구성. 읽는 순서가 단어 순서로 그대로 드러난다 / A calm, orderly sentence build where reading order is visible as word order.

- 한두 문장짜리 설명 자막이나 부제를 부드럽게 공개할 때 / When revealing a one or two line explainer caption or subtitle softly
- 차분한 브랜드 톤의 영상 도입 문구 / For the calm brand-tone opening line of a video

좋은 예 / Good: "작게 시작해서 크게 배운다" 다섯 어절이 0.08초 간격으로 12px 올라오며 선명해진다
나쁜 예 / Bad: 글자마다 y 40px과 blur 20px을 걸어 등장에 1.5초가 걸리고 마지막 단어를 읽기 전에 화면이 바뀐다
주의 / Avoid: 전체 공개가 1.2초를 넘지 않게 한다. 어절이 많으면 간격을 줄인다 · 한국어는 어절 단위로 나눈다. 조사만 떼어 올리면 읽기 흐름이 끊긴다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 단어 간격 | 0.08s | 0.05~0.12s | 어절 수가 많으면 0.05s |
| 단어 지속 | 0.35s | 0.3~0.9s | soft-blur 계열은 0.9s |
| 올라오는 거리 | 12px | 8~14px | 1920x1080 기준 |
| 시작 블러 | 6px | 0~10px | 0이면 순수 상승 페이드 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
const words = text.split(' ').map(w => `<span class="w">${w}</span>`).join(' ');
el.innerHTML = words;
tl.from('.w', {y:12, opacity:0, filter:'blur(6px)', duration:0.35, ease:'power2.out', stagger:0.08}, 0.2);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 문장을 어절 단위 span으로 나눠 word rise fade로 공개해줘. 각 어절은 y 12px 아래에서 올라오며 opacity 0에서 1, blur 6px에서 0, 0.35초 power2.out이고 어절 간격은 0.08초야. 전체가 1.2초 안에 끝나게 하고 등장 뒤 1초 정지해.
```

### 한국어 · Codex
```text
<파일>의 문장 컨테이너에 word rise fade를 적용해. 공백 기준으로 span 분리, stagger 0.08, duration 0.35, y 12, blur 6px, power2.out. 0.3초·0.8초·1.6초 시점을 캡처해 단어가 왼쪽부터 순서대로 선명해지고 마지막에 전부 blur 0인지 확인해.
```

### English · Claude Code
```text
Reveal the sentence in <target> word by word. Each word rises 12px, fades 0 to 1 and de-blurs from 6px to 0 over 0.35s with power2.out, staggered 0.08s. Finish within 1.2s and hold for 1s.
```

### English · Codex
```text
Apply word rise fade to the sentence container in <file>. Split on spaces into spans; stagger 0.08, duration 0.35, y 12, blur 6px, power2.out. Capture at 0.3s, 0.8s and 1.6s and confirm words sharpen left to right and all end at blur 0.
```

예시 / Example: 단어 떠오르기를 `.hero`에 적용해. / Apply Word Rise Fade to `.hero`.

## 적용 / Application

- HyperFrames: 단어 span을 만들어 stagger 하나로 처리한다. filter blur는 프레임 캡처마다 비용이 크므로 blur 6px 이하로 둔다
- ReelForge: 씬 워커 브리프에 문장, 어절 수, 간격 0.08초, 이동 12px를 싣는다. 자막 길이에 맞춰 간격만 자동 조정하게 한다
- Scrolline Deck: 진행률 0.1~0.5에 stagger 전체를 매핑한다. scrub 중에는 스프링 대신 power2.out으로 두어 뒤로 돌려도 자연스럽다

조합 / Pair with: [글자별 스태거 · Per-character Rise](../char-stagger/) · [블러 리빌 · Blur Reveal](../blur-reveal/) · [스태거 · Stagger](../stagger/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/per-word-rise/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/per-word-crossfade/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/soft-blur-in/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/blur-in/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:embedded-captions/references/motion-vocabulary.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
