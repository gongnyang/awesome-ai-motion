# Nº 556 대기 원근 · Atmospheric Depth

> 클립 렌더 예정 / Clip rendering planned.

**먼 층은 안개 속에서 흐리고 옅게 보이다가 가까워지며 선명해지는 깊이 표현**

Distant objects look hazy and faint in fog, then sharpen as they come closer.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 기본 | 분위기, 설명 | 설명 영상, 스크롤덱, 발표 | css |

다른 이름 / Also known as: depth-fog-atmospheric-falloff, depth-of-field-blur, Moving Fog Reveal, 이동 안개 공개

## 선택 기준 / Selection

층 사이의 거리를 읽게 하고 공간이 깊다는 느낌을 만든다. 앞 정보가 먼저 눈에 들어오고 뒤는 배경으로 물러난다 / Makes distance between layers readable and gives the scene depth. Foreground information comes first while the back recedes.

- 여러 층의 배경을 겹쳐 깊이 있는 히어로를 만들 때 / Stack background layers for a deep hero.
- 카메라가 앞으로 나아가며 대상이 선명해지게 할 때 / Let a subject sharpen as the camera advances.
- 초점 밖 층을 물러나게 해 주제를 강조할 때 / Push out-of-focus layers back to emphasize the subject.

좋은 예 / Good: 먼 층이 opacity 0.3, blur 3px로 시작해 3초에 걸쳐 opacity 1, blur 0으로 선명해지며 가까운 층은 처음부터 또렷하다
나쁜 예 / Bad: blur가 8px 이상이라 형태가 무너지거나, 모든 층이 같은 값이라 깊이가 생기지 않는다
주의 / Avoid: blur 값은 4px 이하로 유지한다 · 층 사이 opacity 차이를 0.2 이상 둔다 · 텍스트 층에는 blur를 걸지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 전체 시간 | 3s | 2~5s | 접근 구간 |
| 먼 층 opacity | 0.3 | 0.2~0.5 | 시작값 |
| 먼 층 blur | 3px | 2~4px | 시작값 |
| 층 수 | 3 | 2~5 | 깊이 순서 |
| 이징 | sine.inOut | sine~power2 | 부드러운 접근 |

## 구현 / Implementation (GSAP)

```js
layers.forEach((l, i) => {
  const far = 1 - i / (layers.length - 1); // 0=가까움 1=멀음
  gsap.set(l, { opacity: 1 - far * 0.7, filter: `blur(${far * 3}px)` });
  tl.to(l, { opacity: 1, filter: 'blur(0px)', duration: 3, ease: 'sine.inOut' }, i * 0.4);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
GSAP으로 <대상> 배경 3개 층에 대기 원근을 넣어줘. 가장 먼 층은 opacity 0.3, blur 3px, 중간 층은 opacity 0.65, blur 1.5px로 시작하고, 3초 동안 sine.inOut으로 모두 opacity 1, blur 0이 되게 해. 층마다 0.4초씩 늦게 시작하고 가까운 층은 처음부터 또렷해야 해. 글자 층에는 blur를 쓰지 마.
```

### 한국어 · Codex
```text
<파일>의 배경 층에 atmospheric-depth를 적용해. 층 i의 초기값은 opacity 1-far*0.7, blur far*3px, tween은 position i*0.4, duration 3, ease sine.inOut. 0초에 먼 층이 흐린지, 1.5초에 중간 값인지, 4.5초에 모든 층 blur 0인지 캡처로 확인해.
```

### English · Claude Code
```text
Use GSAP to add atmospheric depth to three background layers of <target>. Start the farthest at opacity 0.3, blur 3px and the middle at opacity 0.65, blur 1.5px, and over 3 seconds bring all to opacity 1, blur 0 with sine.inOut. Each layer starts 0.4 seconds later; the nearest is sharp from the beginning. No blur on text layers.
```

### English · Codex
```text
Apply atmospheric-depth to the background layers in <file>. Initial values for layer i: opacity 1-far*0.7, blur far*3px; tween at position i*0.4, duration 3, ease sine.inOut. Capture 0s (far layer hazy), 1.5s (intermediate) and 4.5s (all layers blur 0).
```

예시 / Example: 대기 원근를 `.hero`에 적용해. / Apply Atmospheric Depth to `.hero`.

## 적용 / Application

- HyperFrames: filter blur는 paused 타임라인에서 문자열 보간이 안정적이므로 층 수를 5 이하로 둔다. 캡처는 0초, 1.5초, 3초에서 확인한다
- ReelForge: 브리프에 층 수, 각 층 이미지, 시작 opacity 0.3, blur 3px, 3s를 싣는다
- Scrolline Deck: 진행률 0~1을 층별 opacity와 blur에 매핑한다. 뒤 층이 늦게 선명해지도록 오프셋을 둔다

조합 / Pair with: [패럴랙스 · Parallax](../parallax/) · [랙 포커스 · Rack Focus](../rack-focus/) · [푸시인 · Push-in](../push-in/)

출처 / Sources: gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/03-camera-3d.md#depth-fog-atmospheric-falloff`) (Apache-2.0) · [oframe/ogl](https://oframe.github.io/ogl/examples/fog.html) (unknown) · local/hyperframes-animation (`claude-skill:hyperframes-animation/rules/depth-of-field-blur.md`) (unknown) · [mrdoob/three.js](https://threejs.org/examples/#webgpu_fog_height) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
