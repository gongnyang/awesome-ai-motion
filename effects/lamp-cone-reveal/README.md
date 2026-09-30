# Nº 451 램프 빛 펼치기 · Lamp Cone Reveal

> 클립 렌더 예정 / Clip rendering planned.

**화면 위쪽 양옆에서 빛 원뿔이 넓어지며 중앙 문구를 무대 조명처럼 비추어 드러내는 효과**

Two light cones widen from the top sides and reveal the center line like a stage lamp.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 기본 | 주목 끌기, 강조 | 발표, 숏폼, 웹 UI | css |

다른 이름 / Also known as: Lamp Effect, lamp-effect

## 선택 기준 / Selection

이제부터 이 문구가 주인공이라는 신호. 어둠 속에서 하나를 비추는 극적인 등장 / A signal that this line is the star. A dramatic entrance where one thing is lit in the dark.

- 히어로 제목이나 핵심 한 줄을 어두운 화면에서 등장시킬 때 / Introduce a hero title or key line on a dark screen.
- 섹션 시작에서 무대가 밝아지는 느낌을 줄 때 / Open a section with the feeling of a stage brightening.

좋은 예 / Good: 어두운 화면 중앙 위에서 청록 빛 원뿔 두 면이 0에서 600px 폭으로 1초 동안 펼쳐지며 그 아래 제목이 떠오른다
나쁜 예 / Bad: 빛이 너무 넓고 불투명해 제목 뒤가 전부 하얗게 날아가거나, 원뿔 두 면의 타이밍이 어긋나 한쪽만 먼저 켜진다
주의 / Avoid: 빛 폭 700px 초과 금지(제목 대비 붕괴) · 글자 색과 비슷한 밝은 빛은 쓰지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 1s | 0.7~1.4s | 원뿔이 펼쳐지는 시간 |
| 빛 폭 | 0 to 600px | 400~700px | 1920px 기준 각 면 |
| blur | 40px | 24~60px | 가장자리 번짐 |
| 문구 지연 | +0.35s | 0.2~0.5s | 빛이 절반쯤 퍼진 뒤 등장 |

이징 / Ease: `power3.out`

## 구현 / Implementation (GSAP)

```js
tl.fromTo('.cone-l', { width: 0, opacity: 0 }, { width: 600, opacity: 0.9, duration: 1, ease: 'power3.out' }, 0)
  .fromTo('.cone-r', { width: 0, opacity: 0 }, { width: 600, opacity: 0.9, duration: 1, ease: 'power3.out' }, 0)
  .fromTo('.title', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.35);
// .cone-*: conic-gradient(from 90deg at 50% 0, #2dd4bf, transparent 40%); filter: blur(40px)
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 어두운 화면에 램프 빛 펼치기를 넣어줘. 화면 위 중앙에서 좌우로 conic-gradient 빛 원뿔 두 면이 폭 0에서 600px까지 1초 동안 power3.out으로 펼쳐지고, blur는 40px로 고정해. 빛이 절반쯤 퍼진 0.35초에 제목이 y 20px 아래에서 올라오며 나타나게 하고, 이후 1.5초 정지해.
```

### 한국어 · Codex
```text
<파일>의 .hero에 .cone-l, .cone-r 두 요소를 추가해. conic-gradient 청록 빛, filter blur 40px, width 0→600px, opacity 0→0.9를 1초 power3.out로 걸고 .title은 0.35초에 시작한다. 0.3초·0.7초·1.6초 캡처로 빛이 좌우 대칭으로 커지고 제목 대비가 유지되는지 확인해.
```

### English · Claude Code
```text
Add a lamp cone reveal to the dark screen of <target>. Two conic-gradient light cones spread from the top center to each side, width 0 to 600px over 1 second with power3.out and a fixed 40px blur. At 0.35 seconds the title rises 20px into place. Hold for 1.5 seconds afterwards.
```

### English · Codex
```text
Add .cone-l and .cone-r to .hero in <file>. Teal conic-gradient, blur 40px, width 0 to 600, opacity 0 to 0.9 over 1 s power3.out; .title starts at 0.35 s. Capture at 0.3 s, 0.7 s and 1.6 s to check the cones grow symmetrically and title contrast holds.
```

예시 / Example: 램프 빛 펼치기를 `.hero`에 적용해. / Apply Lamp Cone Reveal to `.hero`.

## 적용 / Application

- HyperFrames: 두 원뿔과 제목을 한 paused 타임라인에 position 0, 0, 0.35로 배치하고 width와 opacity만 tween한다. blur는 고정값으로 둔다
- ReelForge: 씬 브리프에 빛 색, 폭 600px, 지속 1초, 제목 문구를 넣는다. 배경은 #05070d 계열 어두운 색으로 고정
- Scrolline Deck: 진행률 0~0.4 구간에 빛, 0.2~0.5 구간에 문구를 걸고 이후 홀드한다. ease-out만 쓴다

조합 / Pair with: [스포트라이트 · Spotlight](../spotlight/) · [라이트 스윕 · Light Sweep](../light-sweep/) · [빛내림 · God Rays](../god-rays/) · [앰비언트 글로우 · Ambient Glow](../ambient-glow/)

출처 / Sources: [ui.aceternity.com](https://ui.aceternity.com/components/lamp-effect) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
