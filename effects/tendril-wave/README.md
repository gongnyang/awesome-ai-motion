# Nº 543 촉수 물결 · Tendril Wave

> 클립 렌더 예정 / Clip rendering planned.

**중심에서 퍼진 가는 촉수들이 엇갈린 위상으로 구부러지고 다시 펴지는 방사 움직임**

Thin tendrils radiate from a center and bend and straighten in staggered phases.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 중급 | 분위기, 브랜딩 | 숏폼, 설명 영상, 웹 UI | canvas |

다른 이름 / Also known as: Sea Anemone Tendrils, 말미잘 촉수

## 선택 기준 / Selection

해양 생물이나 식물처럼 유연하게 살아 있는 반복 운동. 방사형 생명감 / Flexible, living repetition like marine life or plants. A radial sense of life.

- AI·생명·유기체 컨셉의 로고 뒤 배경이나 히어로 오브젝트를 만들 때 / Build a hero object or logo backdrop for an AI, life or organism concept.
- 로딩 표시를 유기적인 방사 움직임으로 대체할 때 / Replace a loading indicator with an organic radial motion.

좋은 예 / Good: 촉수 36개가 길이 140px로 중심에서 뻗고 2.2초 주기로 각도 20도까지 위상이 엇갈리며 구부러진다
나쁜 예 / Bad: 위상이 모두 같아 한 덩어리로 흔들리거나, 진폭이 40도 이상이라 뒤엉켜 실타래처럼 보인다
주의 / Avoid: 흔들림 30도 초과 금지 · 촉수 굵기는 끝으로 갈수록 가늘게

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 촉수 수 | 36 | 24~60 | 균등 각도 |
| 길이 | 140px | 100~200 | 마디 8개 |
| 흔들림 | 20deg | 10~30 | 끝단 최대 각 |
| 주기 | 2200ms | 1600~3200ms | 루프 |
| 위상 간격 | 2π/36*3 | 고정 | 이웃 촉수 위상차 |

이징 / Ease: `sine.inOut`

## 구현 / Implementation (GSAP)

```js
const u = { t: 0 };
tl.to(u, { t: Math.PI * 2, duration: 2.2, ease: 'none', repeat: 2, onUpdate() {
  for (let i = 0; i < 36; i++) { const base = i / 36 * Math.PI * 2, ph = i * 3 / 36 * Math.PI * 2; let x = 960, y = 540, a = base;
    const pts = [[x, y]];
    for (let s = 1; s <= 8; s++) { a += Math.sin(u.t + ph - s * 0.4) * (20 * Math.PI / 180) / 8; x += Math.cos(a) * 17.5; y += Math.sin(a) * 17.5; pts.push([x, y]); }
    stroke(pts, 3 - i % 1); } } }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 뒤에 촉수 물결을 넣어줘. 중심 (960,540)에서 36개의 촉수가 균등 각도로 뻗고 길이는 140px, 마디는 8개야. 각 마디가 sin(t+위상-마디*0.4)로 구부러지되 끝단 최대 20도, 이웃 촉수 위상차는 2π*3/36, 주기 2.2초로 반복해. 굵기는 3px에서 1px로 가늘어지고 색은 #7dd3fc 불투명도 0.8.
```

### 한국어 · Codex
```text
<파일>의 캔버스에 촉수 36개를 그려. 촉수 i는 각 a=i/36*2π에서 시작해 마디 s=1..8마다 a+=sin(t+i*3/36*2π-s*0.4)*(20°)/8, 마디 길이 17.5px. t는 2.2초에 0→2π 선형이고 총 길이를 6.6초로 명시. 0초와 2.2초 프레임이 같은지, 0.55초 캡처에서 촉수가 엇갈려 구부러지는지 확인해.
```

### English · Claude Code
```text
Add a tendril wave behind <target>. From the center (960,540), 36 tendrils spread at equal angles, length 140px with 8 segments. Each segment bends by sin(t + phase - segment*0.4), up to 20 degrees at the tip, neighbor phase difference 2π*3/36, repeating every 2.2 seconds. Stroke tapers from 3px to 1px in #7dd3fc at 0.8 opacity.
```

### English · Codex
```text
Draw 36 tendrils in the canvas of <file>. Tendril i starts at angle a=i/36*2π and for segments s=1..8 does a+=sin(t+i*3/36*2π-s*0.4)*(20°)/8 with 17.5px per segment. Tween t 0 to 2π linearly over 2.2 s, with total length set to 6.6 s. Capture 0 s and 2.2 s to confirm they match and 0.55 s to confirm staggered bending.
```

예시 / Example: 촉수 물결를 `.hero`에 적용해. / Apply Tendril Wave to `.hero`.

## 적용 / Application

- HyperFrames: 촉수 형태를 t와 인덱스의 함수로 계산해 상태가 없다. 루프 길이 2.2초를 타임라인에 맞추고 repeat 대신 총 길이를 명시하는 편이 seek에 안전하다
- ReelForge: 씬 브리프에 촉수 36, 길이 140px, 흔들림 20도, 주기 2.2초, 굵기 3px→1px, 색을 싣는다
- Scrolline Deck: 진행률을 위상 t에 선형 매핑한다. 촉수는 가벼워 스크럽 부하가 낮다

조합 / Pair with: [웨이브 워프 · Wave Warp](../wave-warp/) · [흐름장 · Flow Field](../flow-field/) · [브리딩 루프 · Breathing Loop](../breathing-loop/) · [힌지 개폐 · Hinged Oscillation](../hinged-oscillation/)

출처 / Sources: [tsparticles/presets](https://github.com/tsparticles/presets/blob/HEAD/presets/seaAnemone/README.md) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
