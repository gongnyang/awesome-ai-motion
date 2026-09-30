# Nº 463 블룸 펄스 · Bloom Pulse

> 클립 렌더 예정 / Clip rendering planned.

**밝은 물체 주변으로 부드러운 빛이 퍼졌다가 줄어드는 맥동**

Soft light spreads around a bright object and then contracts.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 고급 | 분위기, 강조 | 숏폼, 설명 영상, 웹 UI | webgl |

다른 이름 / Also known as: 블룸 맥박, Glow bloom

## 선택 기준 / Selection

주인공과 에너지의 절정. 빛이 번지며 존재감이 커진다 / The peak of a hero and its energy. Light blooms and presence grows.

- 로고나 핵심 오브젝트가 클라이맥스에서 빛나야 할 때 / When a logo or key object should glow at the climax
- 네온·발광 UI를 비트에 맞춰 강조할 때 / When neon or glowing UI should be stressed on the beat

좋은 예 / Good: 강도 0.2에서 1.1로 0.8초 올라갔다 0.8초에 걸쳐 0.2로 돌아오며 반경 0.35로 번진다
나쁜 예 / Bad: 강도가 커서 글자 외곽이 번져 읽을 수 없거나, 전체 화면이 뿌옇다
주의 / Avoid: 글자 위에는 강도 0.6 이하 · 임계값 0.8 이상 밝은 부분만 번지게 · 1.6초 안에 원래 상태

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 길이 | 1.6s | 1.0~2.4s | 상승과 복귀 합산 |
| 임계값 | 0.8 | 0.7~0.9 | 이 이상만 발광 |
| 강도 | 0.2→1.1 | 0.6~1.4 | CSS는 blur 반경으로 대체 |
| 이징 | sine.inOut | sine~power2.inOut | 맥동 |

## 구현 / Implementation (GSAP)

```js
tl.to('.logo', { filter: 'drop-shadow(0 0 28px rgba(120,190,255,0.95))', duration: 0.8, ease: 'sine.inOut', yoyo: true, repeat: 1 }, 0.4);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상>에 블룸 맥동을 넣어줘. 0.4초부터 0.8초 동안 filter drop-shadow(0 0 28px rgba(120,190,255,0.95))로 sine.inOut 상승한 뒤 같은 곡선으로 0.8초에 0으로 돌아와. 글자 위에서는 강도를 0.6 이하로 낮춰. paused 타임라인에 넣어.
```

### 한국어 · Codex
```text
<파일>의 <대상>에 bloom-pulse를 적용해. drop-shadow 0→(0 0 28px 알파 0.95), 0.8s, sine.inOut, yoyo true, repeat 1, position 0.4. 0.4초·1.2초·2.0초를 캡처해 밝기 번짐이 최대일 때 글자 가독성(대비 4.5:1)이 유지되는지와 2.0초에 원상태인지 확인해.
```

### English · Claude Code
```text
Add a bloom pulse to <target> with GSAP. From 0.4s ease a filter drop-shadow(0 0 28px rgba(120,190,255,0.95)) in over 0.8s with sine.inOut and back to none over 0.8s with the same curve. Keep intensity at 0.6 or less over text. Paused timeline.
```

### English · Codex
```text
Apply bloom-pulse to <target> in <file>. Tween drop-shadow from none to (0 0 28px alpha 0.95), 0.8s, sine.inOut, yoyo true, repeat 1, position 0.4. Capture at 0.4s, 1.2s and 2.0s to check text contrast stays at 4.5:1 at the peak and the element is back to normal at 2.0s.
```

예시 / Example: 블룸 펄스를 `.hero`에 적용해. / Apply Bloom Pulse to `.hero`.

## 적용 / Application

- HyperFrames: WebGL 대신 CSS drop-shadow 두 겹(반경 8px, 28px)으로 근사할 수 있다. filter는 seek에서도 결정론이다. 3D 발광은 셰이더 유니폼을 tween
- ReelForge: 브리프에 대상 요소, 강도 범위, 반경, 길이, 색을 싣는다. 흰 글자에는 글로 색을 배경 톤으로
- Scrolline Deck: scrub에서는 강도를 진행률 0~0.5에 상승, 0.5~1에 복귀로 매핑한다. sine.inOut, 스프링 없음

조합 / Pair with: [윤곽 펄스 · Outline Pulse](../outline-pulse/) · [앰비언트 글로우 · Ambient Glow](../ambient-glow/) · [오디오 반응 펄스 · Audio Reactive Pulse](../audio-reactive-pulse/)

출처 / Sources: [mrdoob/three.js](https://threejs.org/examples/#webgl_postprocessing_unreal_bloom) (MIT) · [fand/vfx-js](https://github.com/fand/vfx-js/tree/main/packages/effects#effects) (MIT) · [oframe/ogl](https://oframe.github.io/ogl/examples/post-bloom.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
