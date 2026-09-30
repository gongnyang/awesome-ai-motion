# Nº 081 방사 속도선 · Radial Speed Lines

> 클립 렌더 예정 / Clip rendering planned.

**중심에서 바깥으로 향하는 선들이 짧게 뻗었다가 사라진다**

Lines from the center burst outward briefly and vanish.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 강조·주의 · EMPHASIS | 기본 | 강조, 주목 끌기 | 숏폼, 설명 영상, 제품 시연 | svg |

다른 이름 / Also known as: radial-burst-lines, Radial flash, 방사형 섬광, Flash

## 선택 기준 / Selection

충격과 빠른 확대의 에너지를 한순간에 전한다. 만화의 집중선처럼 시선을 중심으로 모은다 / Delivers impact and rapid expansion in one moment. Like manga focus lines, it gathers the eye at the center.

- 핵심 단어나 제품이 화면에 꽝 하고 나타나는 순간을 강조할 때 / Emphasize the instant a key word or product slams onto the screen.
- 컷 전환 직후 시선을 중심으로 모으고 싶을 때 / Pull attention to the center right after a cut.

좋은 예 / Good: 선 16개가 반경 60px에서 400px까지 300ms 동안 뻗고 마지막 100ms에 투명해진다. 중앙 제목은 같은 시점에 나타난다
나쁜 예 / Bad: 선을 100개 이상 촘촘히 넣고 1.5초 동안 유지해 배경이 지저분해진다. 매 장면마다 반복해 효과가 무뎌진다
주의 / Avoid: 한 장면에 한 번만 쓴다 · 지속 500ms 초과 금지(정보가 가려짐)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 선 개수 | 16 | 12~24 | 각도 22.5도 간격 |
| 반경 범위 | 60~400px | 시작 40~80, 끝 350~500 | 1920x1080 중심 기준 |
| 지속 | 300ms | 200~400ms | 마지막 1/3에 페이드 |
| 선 두께 | 3px | 2~4px | 끝으로 가늘어짐 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
const N = 16;
for (let i = 0; i < N; i++) {
  const a = i / N * Math.PI * 2;
  tl.fromTo(`.ray${i}`, { attr: { x1: 60 * Math.cos(a), y1: 60 * Math.sin(a), x2: 60 * Math.cos(a), y2: 60 * Math.sin(a) }, opacity: 1 },
    { attr: { x1: 240 * Math.cos(a), y1: 240 * Math.sin(a), x2: 400 * Math.cos(a), y2: 400 * Math.sin(a) }, opacity: 0, duration: 0.3, ease: 'power2.out' }, 0.5);
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 제목이 나타나는 순간에 방사 속도선을 넣어줘. SVG 선 16개, 시작 반경 60px에서 끝 반경 400px까지 0.3초 동안 power2.out으로 뻗고 opacity가 1에서 0으로 사라지게 해. 시작 시각은 제목 등장과 같은 0.5초이고, 선 두께는 3px 흰색이야.
```

### 한국어 · Codex
```text
<파일>에 radial speed lines를 추가해. 선 16개, 중심 (960,540), 반경 60에서 400px, 0.3초, ease power2.out, 시작 0.5초. 0.5초, 0.65초, 0.8초를 캡처해 선이 대칭으로 균일하게 뻗는지, 0.8초에는 완전히 사라져 잔상이 없는지 확인해.
```

### English · Claude Code
```text
Add radial speed lines when the title in <target> appears. Use 16 SVG lines extending from radius 60px to 400px over 0.3 seconds with power2.out while opacity goes from 1 to 0. Start at 0.5 seconds with the title; lines are 3px white.
```

### English · Codex
```text
Add radial speed lines to <file>: 16 lines, center (960,540), radius 60 to 400px, 0.3s, ease power2.out, start at 0.5s. Capture at 0.5s, 0.65s and 0.8s and verify the lines extend symmetrically and uniformly and are fully gone by 0.8s with no residue.
```

예시 / Example: 방사 속도선를 `.hero`에 적용해. / Apply Radial Speed Lines to `.hero`.

## 적용 / Application

- HyperFrames: SVG 선 attr를 paused 타임라인으로 보간한다. 컷 프레임과 같은 시각에 시작해 첫 프레임에 이미 보이게 한다
- ReelForge: 씬 워커 브리프에 중심 좌표, 선 개수, 반경 범위, 지속, 색을 싣는다
- Scrolline Deck: 진행률 구간 2~3%에 걸쳐 재생한다. scrub 중에는 짧은 효과가 스치기 쉬워 5% 폭으로 넓힌다

조합 / Pair with: [줌 플래시 · Zoom Flash](../zoom-flash/) · [어텐션 선 · Attention Lines](../attention-lines/) · [화면 흔들림 · Screen Shake](../screen-shake/)

출처 / Sources: local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/css-marker-patterns.md`) (unknown) · local/music-to-video (`claude-skill:music-to-video/references/motion-primitive-catalog.md#radial-burst-lines`) (unknown) · [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/indication.py) (MIT) · local/HyperFrames-skills (`claude-skill:music-to-video/references/motion-primitive-catalog.md`) (unknown) · local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/radial-burst-lines/scene.html`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
