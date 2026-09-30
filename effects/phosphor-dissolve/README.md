# Nº 189 잔광 디졸브 · Phosphor Trail Dissolve

> 클립 렌더 예정 / Clip rendering planned.

**밝은 물체의 빛 자국이 오래 남는 동안 이전 화면이 다음 화면으로 바뀐다**

Trails of light from bright objects linger as the previous screen changes to the next.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 분위기 | 숏폼, 설명 영상 | webgl |

다른 이름 / Also known as: 형광 잔광 디졸브

## 선택 기준 / Selection

밝은 물체의 빛 자국이 오래 남는 채로 이전 화면이 다음 화면으로 바뀐다. 전자 화면의 잔향이다 / Evokes reverb and the memory of an electronic display.

- 오실로스코프, 레이더, CRT 소재의 영상에서 화면 잔광을 살릴 때 / To keep screen afterglow in oscilloscope, radar, or CRT-themed videos
- 밝은 UI나 텍스트가 남는 듯한 SF 톤의 전환 / For sci-fi transitions where bright UI or text seems to persist

좋은 예 / Good: 800ms 동안 이전 화면의 밝은 부분이 감쇠 0.85로 남아 다음 장면 위에 옅은 빛 자국으로 이어지다가 사라진다
나쁜 예 / Bad: 잔광이 너무 오래 남아 다음 장면 텍스트를 가리거나, 밝지 않은 화면이라 잔광이 보이지 않는다
주의 / Avoid: 잔광은 800ms 안에 완전히 사라진다 · 다음 장면의 주요 텍스트 위치를 잔광이 가리지 않게 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 800ms | 600~1000ms | linear |
| 잔광 감쇠 | 0.85 / 프레임 | 0.8~0.9 | 프레임마다 곱함 |
| 밝기 임계 | 0.7 | 0.6~0.8 | 이 이상만 남김 |
| 잔광 색 | #7CFFB2 (녹색 인광) |  | 장면에 맞춤 |
| 프레임 단계 | 24fps |  | 피드백 버퍼 갱신 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
// 잔광 opacity를 프레임 단위 감쇠로 근사 (결정론)
const fps = 24, n = 19;            // 0.8초
for (let f = 0; f < n; f++) {
  tl.set('.trail', { opacity: Math.pow(0.85, f) }, f / fps);
}
tl.set('.prev', { autoAlpha: 0 }, 0).set('.next', { autoAlpha: 1 }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면 전환에 잔광 디졸브를 넣어줘. 0초에 .next를 표시하고 이전 장면의 밝은 부분만 남긴 .trail 레이어(녹색 #7CFFB2)의 opacity를 프레임마다 0.85배로 줄여 24fps로 0.8초 동안 감쇠시켜. 결과가 seek해도 같도록 tl.set으로 프레임 번호에서 opacity를 계산해.
```

### 한국어 · Codex
```text
<파일>에 잔광 디졸브를 구현해. f=0..18에서 tl.set(.trail, opacity 0.85^f, f/24). 0초에 .next 표시. 0.0초, 0.2초, 0.5초, 0.8초 시점을 캡처해 잔광이 감쇠하는지, 0.8초에 잔광 opacity가 0.05 이하인지, 두 번 렌더한 프레임이 같은지 확인해.
```

### English · Claude Code
```text
Add a Phosphor Dissolve to <target>. Show .next from 0s and let the bright-only .trail layer (green #7CFFB2) decay by 0.85 per frame at 24fps over 0.8s. Compute opacity from the frame number with tl.set so seeking gives identical results.
```

### English · Codex
```text
Implement Phosphor Dissolve in <file>. For f=0..18, tl.set(.trail, opacity 0.85^f, f/24); show .next at 0s. Capture at 0.0s, 0.2s, 0.5s, and 0.8s to confirm the trail decays, opacity is 0.05 or lower at 0.8s, and two renders produce identical frames.
```

예시 / Example: 잔광 디졸브를 `.hero`에 적용해. / Apply Phosphor Trail Dissolve to `.hero`.

## 적용 / Application

- HyperFrames: 피드백 버퍼는 seek와 맞지 않으므로 프레임 번호 f에서 0.85^f로 잔광 opacity를 직접 계산한다. 캔버스에 f번째 잔상을 순서대로 그리는 대신 사전 렌더된 잔광 레이어 한 장을 쓴다
- ReelForge: 씬 워커 브리프에 감쇠 0.85, 임계 0.7, 잔광 색, 지속 800ms를 싣고 잔광 레이어를 미리 만들도록 한다
- Scrolline Deck: scrub에서는 진행률 p로 잔광 opacity를 exp(-5p)에 근사해 되감기에도 같은 값이 나오게 한다

조합 / Pair with: [모션 블러 · Motion Blur](../motion-blur/) · [CRT 주사선 · CRT Scanlines](../crt-scanlines/) · [가산 디졸브 · Additive Dissolve](../additive-dissolve/)

출처 / Sources: [Adobe](https://helpx.adobe.com/premiere/desktop/add-video-effects/types-of-effects/transitions.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
