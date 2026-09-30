# Nº 473 만화경 · Kaleidoscope Motion

> 클립 렌더 예정 / Clip rendering planned.

**이미지가 대칭으로 복제되고 중심 회전에 따라 무늬가 계속 바뀌는 만화경**

An image is mirrored into symmetry and its pattern keeps changing as the center rotates.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 분위기, 주목 끌기 | 숏폼, 설명 영상, 발표 | webgl |

다른 이름 / Also known as: Mirror Kaleidoscope, 거울 만화경, Mirror symmetry, 만화경 모션

## 선택 기준 / Selection

복잡한 대칭과 환상적인 리듬. 작은 재료가 화려한 패턴으로 바뀐다 / Complex symmetry and a dreamlike rhythm. Small material turns into an ornate pattern.

- 이미지나 로고를 대칭 패턴 배경으로 변환할 때 / Turn an image or logo into a symmetric pattern background.
- 음악 영상이나 오프닝의 환상적인 배경 루프가 필요할 때 / Provide a fantastical background loop for an opener or music video.

좋은 예 / Good: 6대칭 만화경이 3초 동안 60도 회전하며 원본 사진 한 조각이 방사형 꽃무늬로 바뀐다
나쁜 예 / Bad: 대칭 수를 16 이상으로 올려 무늬가 뭉개지거나, 회전이 빨라 눈이 어지럽다
주의 / Avoid: 대칭 수 12 초과 금지 · 회전 속도 60deg/s 초과 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 3s | 2~6s | 한 번 회전 |
| 대칭 수 | 6 | 4~12 | 섹터 개수 |
| 회전 | 60deg | 30~120 | 전체 회전각 |
| 줌 | 1.4 | 1~2 | 원본 샘플링 배율 |
| 진입 | 0.6s | 0.4~1s | 대칭 수 1에서 6으로 전개 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const u = { rot: 0, n: 1 };
tl.to(u, { n: 6, duration: 0.6, ease: 'power2.out', onUpdate: draw }, 0)
  .to(u, { rot: Math.PI / 3, duration: 3, ease: 'none', onUpdate: draw }, 0);
// GLSL: float a = atan(p.y, p.x) + rot; float s = 6.2832 / n;
// a = abs(mod(a, s) - s*0.5); uv = 0.5 + length(p) * vec2(cos(a), sin(a)) / zoom;
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 이미지에 만화경 효과를 넣어줘. 0초에 대칭 수 1에서 시작해 0.6초에 power2.out으로 6까지 전개하고, 3초 동안 선형으로 60도 회전하게 해. 소스 샘플링 줌은 1.4이고 화면 중앙(960,540)을 중심으로 섹터를 접어 반사 UV로 샘플링해. 마지막에 0.5초 정지해.
```

### 한국어 · Codex
```text
<파일>의 이미지 캔버스에 kaleidoscope 셰이더를 추가해. a=atan(p.y,p.x)+rot, s=2π/n, a=abs(mod(a,s)-s/2), uv=0.5+length(p)*vec2(cos a,sin a)/1.4. n은 0.6초 power2.out로 1→6, rot는 3초 선형 0→π/3. 0.3초·1.5초·3.2초 캡처로 대칭이 전개되고 회전이 이어지는지 확인해.
```

### English · Claude Code
```text
Add a kaleidoscope to the image in <target>. Start at symmetry 1 and expand to 6 over 0.6 seconds with power2.out, while rotating 60 degrees linearly over 3 seconds. Source sampling zoom 1.4, folding sectors around the center (960,540) and sampling with reflected UVs. Hold for 0.5 seconds at the end.
```

### English · Codex
```text
Add a kaleidoscope shader to the image canvas in <file>. a=atan(p.y,p.x)+rot; s=2π/n; a=abs(mod(a,s)-s/2); uv=0.5+length(p)*vec2(cos a,sin a)/1.4. Tween n 1 to 6 over 0.6 s power2.out and rot 0 to π/3 over 3 s linear. Capture 0.3 s, 1.5 s and 3.2 s to confirm symmetry expands and rotation continues.
```

예시 / Example: 만화경를 `.hero`에 적용해. / Apply Kaleidoscope Motion to `.hero`.

## 적용 / Application

- HyperFrames: rot와 n을 paused 타임라인에서 tween한다. 섹터 접기는 abs(mod())로 결정론적이라 seek가 맞는다
- ReelForge: 씬 브리프에 소스 이미지, 대칭 6, 회전 60도, 3초, 줌 1.4를 싣고 중앙 원형 마스크를 선택으로 둔다
- Scrolline Deck: 회전을 진행률에 선형 매핑하고 대칭 수 전개는 ease-out으로 초반에 끝낸다. 스프링은 쓰지 않는다

조합 / Pair with: [칼레이도스코프 전환 · Kaleidoscope Transition](../kaleidoscope-transition/) · [미러 전환 · Mirror Transition](../mirror-transition/) · [극좌표 말기 · Polar Coordinates Wrap](../polar-wrap/) · [홀로그램 광택 · Holographic sheen](../holographic-sheen/)

출처 / Sources: [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/distort-effects.html) (unknown) · [processing/p5.js-website](https://p5js.org/examples/Repetition-Kaleidoscope/) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
