# Nº 485 슬릿 스캔 · Slit Scan

> 클립 렌더 예정 / Clip rendering planned.

**행이나 열마다 시간을 다르게 샘플링해 이미지를 물결치듯 늘이고 휘게 하는 효과**

Each row or column is sampled at a different time so the image stretches and curves like a wave.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 고급 | 분위기, 전환, 주목 끌기 | 숏폼, 설명 영상 | canvas |

다른 이름 / Also known as: Time Displacement, 시간 변위

## 선택 기준 / Selection

시간이 공간으로 펼쳐지는 초현실적 느낌을 준다. 2001 스타게이트 같은 우주적 분위기를 만든다 / Makes time unfold across space in a surreal way and evokes cosmic, stargate-like atmosphere.

- 초현실 전환이나 타임워프 장면을 표현할 때 / For surreal transitions or time-warp scenes
- 인물이나 로고를 시간 왜곡으로 늘려 인상적으로 지울 때 / To erase a person or logo through time distortion in a memorable way

좋은 예 / Good: 이미지의 각 행이 2ms씩 늦게 샘플링되어 1.2초 동안 위에서 아래로 물결이 퍼지며 서서히 원본으로 돌아온다
나쁜 예 / Bad: 지연을 전 행에 균일하게 주어 단순 이동으로 보이거나, 2초 이상 유지해 원본이 계속 왜곡된다
주의 / Avoid: 지속 2초 초과 금지 · 행 지연 최대 200ms 초과 금지(이미지가 무엇인지 알 수 없음)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 행 시간차 | 2ms | 1~4ms | 행 index x 시간차 |
| 지연 감소 | 1200ms | 800~1800ms | 지연이 0으로 수렴 |
| 프레임 버퍼 | 72프레임 | 48~96프레임 | 약 3초 분량 링버퍼 |
| 방향 | 위에서 아래 | 상하/좌우 | 슬릿 축 |
| 곡선 | sine | sine/linear | 행 지연 분포 |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
// 링버퍼 frames[]에 최근 프레임 저장, 행 y는 지연 d(y)만큼 과거 프레임에서 복사
for(let y=0;y<H;y++){ const d=Math.round((y/H)*maxDelay*(1-p)); // p: 0..1
 ctx.drawImage(frames[(head-d+N)%N],0,y,W,1,0,y,W,1);}
// 정적 이미지면 행마다 sin(y*0.02+t)*amp*(1-p) 만큼 x 이동으로 근사
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<이미지>에 슬릿 스캔 효과를 넣어줘. 캔버스에서 각 행 y마다 sin(y*0.02+t)로 만든 x 이동을 주되, 진폭을 60px에서 0으로 1.2초 동안 power2.out으로 줄여 원본으로 돌아오게 해. 위에서 아래로 위상이 2ms씩 늦어지는 느낌으로 행 위상차를 줘. 난수 없이 progress 순수 함수로 그려 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 slit-scan 캔버스 근사를 구현해. 행 위상 sin(y*0.02+t), 진폭 60px에서 0, 지속 1200ms, ease power2.out. 0초, 0.4초, 0.8초, 1.3초를 캡처해 물결이 위에서 아래로 퍼지는지, 진폭이 줄어드는지, 1.3초에 원본과 픽셀 일치하는지 확인해.
```

### English · Claude Code
```text
Add a slit-scan effect to <image>. On a canvas, shift each row y in x by sin(y*0.02+t), with amplitude decaying from 60px to 0 over 1.2s using power2.out so it returns to the original. Give rows a phase lag from top to bottom of about 2ms each. No randomness; draw as a pure function of progress so it is seekable.
```

### English · Codex
```text
Implement a slit-scan canvas approximation in <file>: row phase sin(y*0.02+t), amplitude 60px to 0, duration 1200ms, ease power2.out. Capture at 0s, 0.4s, 0.8s, and 1.3s to verify the wave travels top to bottom, amplitude shrinks, and 1.3s matches the original pixel for pixel.
```

예시 / Example: 슬릿 스캔를 `.hero`에 적용해. / Apply Slit Scan to `.hero`.

## 적용 / Application

- HyperFrames: 영상 소스는 seek로 프레임 접근이 되므로 지연 프레임을 seek해 뽑는 캡처 방식이 정확하다. 정적 이미지는 행별 x 이동 sin 근사로 충분하다
- ReelForge: 브리프에 rowDelayMs, decayMs, axis를 싣고 정적 이미지 근사를 기본으로 삼는다. 영상 링버퍼는 워커 프레임 캡처 단계에서 처리한다
- Scrolline Deck: 진행률 p에서 지연 계수 (1-p)를 만든다. 스크럽 시 링버퍼가 없으므로 정적 근사(행별 x 이동)만 쓴다

조합 / Pair with: [웨이브 워프 · Wave Warp](../wave-warp/) · [시간 흔들림 · Temporal Wiggle](../temporal-wiggle/) · [파문 왜곡 · Ripple Distortion](../ripple-distortion/) · [글리치 전환 · Glitch Transition](../glitch-transition/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/slit-scan-reveal/registry-item.json) (Apache-2.0) · [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/time-effects.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
