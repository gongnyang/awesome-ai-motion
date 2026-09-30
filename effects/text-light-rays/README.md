# Nº 488 글자 광선 · Text Light Rays

> 클립 렌더 예정 / Clip rendering planned.

**글자 모양에서 빛점 방향으로 색 가장자리를 가진 광선이 길게 뻗는 타이틀 효과**

Colored-edge rays stretch from the letter shapes toward a moving light point.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 고급 | 강조, 브랜딩, 분위기 | 숏폼, 설명 영상, 발표 | webgl |

다른 이름 / Also known as: Spectral text rays, 글자 스펙트럼 광선, Text Spectral Rays, 글자 광선 투사

## 선택 기준 / Selection

글자가 빛을 뿜는 듯한 극적인 무게를 주고, 타이틀에 볼륨감을 더한다 / Gives a title dramatic weight as if the letters emit light, and adds volume.

- 영화 예고편 스타일의 타이틀 공개 / Trailer-style title reveals
- 글자 뒤에서 빛이 새어 나오는 도입부를 만들 때 / Openings where light leaks from behind the letters

좋은 예 / Good: 굵은 제목이 나타난 뒤 3초 동안 글자에서 오른쪽 위 빛점 방향으로 300px 길이 광선이 강도 0.4로 번졌다 잦아든다
나쁜 예 / Bad: 광선 강도를 1.0으로 올려 글자 자체가 뭉개지거나 색 분리가 커서 무지개처럼 번진다
주의 / Avoid: 광선 강도 0.6 초과 금지 · 글자 본체는 광선 위에 선명하게 다시 그린다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 3000ms | 2000~4500ms | 등장 후 잦아듦 |
| 광선 길이 | 300px | 180~480px | 광원 방향 샘플 반복 |
| 강도 | 0.4 | 0.25~0.6 | screen 혼합 |
| 샘플 수 | 48개 | 32~80개 | 방사형 블러 근사 |
| 색 분리 | 3px | 0~6px | R/B 오프셋 |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
// 방사형 블러 근사: 글자 마스크를 광원 방향으로 N번 스케일 누적
for(let i=1;i<=48;i++){ const k=i/48; ctx.globalAlpha=.4*(1-k)/6;
 ctx.setTransform(1+k*.35,0,0,1+k*.35,lx*(-k*.35),ly*(-k*.35)); ctx.drawImage(textCanvas,0,0);}
// 마지막에 글자 본체를 정상 스케일로 다시 그림
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<제목> 글자에서 광선이 뻗는 효과를 넣어줘. 글자 마스크를 오프스크린 캔버스에 그리고, 오른쪽 위 빛점 방향으로 스케일 누적 48번 샘플링해 300px 길이 광선을 만들어 screen 혼합, 강도는 3초 동안 0에서 0.4로 올렸다 0.1로 잦아들게. 색 분리는 3px, 글자 본체는 광선 위에 선명하게 다시 그려. progress 순수 함수로 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>의 <제목>에 text-light-rays를 구현해. 광선 길이 300px, 강도 0에서 0.4로 다시 0.1, 지속 3000ms sine.inOut, 샘플 48개, 색 분리 3px. 0.5초, 1.5초, 3.0초를 캡처해 광선이 빛점 방향으로 뻗는지, 글자 본체 가장자리가 선명한지, 3초에 강도가 낮아졌는지 확인해.
```

### English · Claude Code
```text
Add light rays streaming from the letters of <title>. Draw the text mask on an offscreen canvas and accumulate 48 scaled samples toward a light point at the upper right for 300px rays with screen blending. Ramp intensity 0 to 0.4 then settle to 0.1 over 3s. Chromatic split 3px, and redraw the crisp letter body above the rays. Pure function of progress so it is seekable.
```

### English · Codex
```text
Implement text-light-rays on <title> in <file>: ray length 300px, intensity 0 to 0.4 then 0.1, duration 3000ms sine.inOut, 48 samples, color split 3px. Capture at 0.5s, 1.5s, and 3.0s to verify rays extend toward the light point, letter edges stay crisp, and intensity has settled at 3s.
```

예시 / Example: 글자 광선를 `.hero`에 적용해. / Apply Text Light Rays to `.hero`.

## 적용 / Application

- HyperFrames: 텍스트를 오프스크린 캔버스에 한 번 그려 두고 광원 방향 스케일 누적으로 광선을 만든다. 강도만 paused 타임라인에서 sine.inOut으로 보간한다
- ReelForge: 브리프에 lightX/Y, rayLengthPx, intensity, tint를 싣는다. 글자는 DOM으로 위에 얹어 선명도를 확보한다
- Scrolline Deck: 진행률을 intensity에 매핑하고 광원 위치는 고정한다. 스크럽에서 광선 각도가 바뀌면 어지러우므로 위치는 움직이지 않는다

조합 / Pair with: [빛내림 · God Rays](../god-rays/) · [라이트 스윕 · Light Sweep](../light-sweep/) · [블룸 펄스 · Bloom Pulse](../bloom-pulse/) · [키네틱 비트 · Kinetic Beats](../kinetic-beats/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/vfx-text-cursor/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:music-to-video/references/motion-primitive-catalog.md`) (unknown) · local/music-to-video (`claude-skill:music-to-video/references/motion-primitive-catalog.md#text-spectral-rays`) (unknown) · local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/text-spectral-rays/scene.html`) (unknown) · local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/text-spectral-rays/index.html`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
