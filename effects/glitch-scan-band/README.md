# Nº 470 스캔 왜곡 띠 · Scan band

> 클립 렌더 예정 / Clip rendering planned.

**좁은 대각 띠가 글자를 지나가고 띠 안에서만 RGB 어긋남이 보이는 효과**

A narrow diagonal band passes over the text, and RGB misalignment appears only inside it.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 질감·스타일 · TEXTURE & STYLE | 중급 | 강조, 주목 끌기, 분위기 | 숏폼, 설명 영상, 웹 UI | css |

## 선택 기준 / Selection

글자를 훑는 스캐너 같은 인상을 주며, 타이틀에 기술적이고 정밀한 강조를 더한다 / Feels like a scanner sweeping the text, adding precise, technical emphasis to a title.

- 제목이 나타난 직후 한 번 스캔되는 인트로를 만들 때 / For an intro where a title is scanned once right after appearing
- 핵심 단어를 스캔하듯 강조하고 싶을 때 / To scan-highlight a key word

좋은 예 / Good: 제목 위로 폭 15%의 대각 띠가 0.8초 동안 왼쪽에서 오른쪽으로 지나가고 띠 안에서만 R/B가 8px 갈라진다
나쁜 예 / Bad: 띠 폭이 넓어 글자 전체가 계속 깨져 보이거나, 띠를 여러 번 반복해 산만해진다
주의 / Avoid: 한 번 통과에 0.8~1.2초, 반복은 2회 이하 · 띠 밖 글자는 변형하지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 800ms | 600~1200ms | 띠 통과 시간 |
| 띠 폭 | 15% | 8~25% | 글자 폭 기준 |
| 채널 변위 | 8px | 5~12px | 띠 안에서만 |
| 띠 각도 | 20도 | 10~30도 | 대각 |
| 밝기 | +0.15 | 0.1~0.25 | 띠 안 약간 밝게 |

이징 / Ease: `power1.inOut`

## 구현 / Implementation (GSAP)

```js
/* .band를 clip-path 마스크로 쓰는 복사본 2장(R, B) */
tl.fromTo('.mask',{x:-320},{x:1920,duration:.8,ease:'power1.inOut'},t)
 .set('.r',{x:-8},t).set('.b',{x:8},t)
 .set('.r,.b',{x:0,opacity:0},t+.8);
// .mask는 skewX(-20deg) 폭 15% 띠, R/B 복사본은 이 마스크 안에서만 보임
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<제목>에 스캔 왜곡 띠를 넣어줘. 폭 15%, 20도 기울기의 띠를 0.8초 동안 왼쪽 밖에서 오른쪽 밖으로 power1.inOut으로 통과시키고, 띠 안에서만 빨강 복사본은 -8px, 파랑 복사본은 +8px 어긋나게 하고 밝기 +0.15. 띠 밖 글자는 그대로. 통과 후 복사본은 제거해. paused 타임라인으로 구동해.
```

### 한국어 · Codex
```text
<파일>의 <제목>에 glitch-scan-band를 구현해. 띠 폭 15%, 각도 20도, 통과 800ms power1.inOut, 채널 변위 8px. 0.2초, 0.4초, 0.6초, 1.0초를 캡처해 띠 안에서만 색 어긋남이 보이는지, 띠 밖 글자가 정상인지, 1.0초에 복사본이 없는지 확인해.
```

### English · Claude Code
```text
Add a scan glitch band to <title>. Pass a band 15% wide at a 20-degree slant from off-screen left to off-screen right over 0.8s with power1.inOut. Only inside the band, shift the red copy -8px and the blue copy +8px and raise brightness by 0.15. Text outside stays untouched. Remove the copies afterward. Drive from a paused timeline.
```

### English · Codex
```text
Implement glitch-scan-band on <title> in <file>: band width 15%, angle 20 degrees, pass 800ms power1.inOut, channel shift 8px. Capture at 0.2s, 0.4s, 0.6s, and 1.0s to verify color offset shows only inside the band, text outside is normal, and no copies remain at 1.0s.
```

예시 / Example: 스캔 왜곡 띠를 `.hero`에 적용해. / Apply Scan band to `.hero`.

## 적용 / Application

- HyperFrames: 띠 마스크의 x만 paused 타임라인에서 보간하고 R/B 복사본은 mask-image로 띠 안에서만 보이게 한다. 프레임 캡처에서 mask 지원을 먼저 스냅샷으로 확인한다
- ReelForge: 브리프에 bandWidthPct, angleDeg, shiftPx, passMs를 싣고 텍스트는 짧은 제목 한 줄로 제한한다
- Scrolline Deck: 진행률을 띠 x 위치에 선형에 가깝게 매핑한다. 끝에서 복사본 opacity를 0으로 두어 스크럽 후에도 잔상이 없게 한다

조합 / Pair with: [RGB 분리 글리치 · RGB Split Glitch](../glitch-rgb-split/) · [라이트 스윕 · Light Sweep](../light-sweep/) · [하이라이트 스윕 · Highlight Sweep](../highlight-sweep/) · [CRT 주사선 · CRT Scanlines](../crt-scanlines/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/scan-band/registry-item.json) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
