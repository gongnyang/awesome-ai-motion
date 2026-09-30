# Nº 545 파동 간섭 · Wave Interference

> 클립 렌더 예정 / Clip rendering planned.

**격자의 점들이 서로 다른 사인 위상으로 움직여 밝은 결절과 빈 영역을 만드는 패턴**

Grid dots move with different sine phases, creating bright nodes and empty regions.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 중급 | 설명, 분위기, 브랜딩 | 설명 영상, 발표, 웹 UI | canvas |

다른 이름 / Also known as: Harmonic Interference, 위상 간섭 파동

## 선택 기준 / Selection

단순한 규칙에서 나오는 복잡한 질서를 보여주고 소리와 물결의 간섭을 직관적으로 설명한다 / Shows complex order from simple rules and makes sound and wave interference intuitive.

- 파동, 공명, 신호 간섭 개념을 설명하는 장면 / To explain waves, resonance, or signal interference
- 기하학적이고 명상적인 배경 루프를 만들 때 / To build a geometric, meditative background loop

좋은 예 / Good: 30x30 점이 주파수 비 2:3의 두 파동으로 6초 동안 움직이며 중앙에 밝은 결절과 가장자리에 빈 영역이 생긴다
나쁜 예 / Bad: 주파수 비를 복잡하게 잡아 규칙이 안 보이거나, 진폭이 커서 점이 겹쳐 뭉친다
주의 / Avoid: 진폭 12px 초과 금지 · 주파수 비는 정수비(2:3, 3:4)만 사용

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 루프 길이 | 6000ms | 4000~9000ms | 위상 한 바퀴 |
| 격자 | 30x30점 | 20x20~40x40 | 간격 48px |
| 주파수 비 | 2:3 | 2:3/3:4/1:2 | 정수비 |
| 진폭 | 8px | 4~12px | 점 이동량 |
| 점 반경 | 2~5px | 2~6px | 간섭 값에 비례 |

이징 / Ease: `linear`

## 구현 / Implementation (GSAP)

```js
function draw(p){const ph=p*6.283;
 for(let i=0;i<30;i++)for(let j=0;j<30;j++){
 const x=240+i*48,y=60+j*32;
 const v=Math.sin(i*.42*2+ph)+Math.sin(j*.42*3-ph);
 ctx.beginPath();ctx.arc(x+v*4,y+v*4,3.5+v*1.2,0,6.283);ctx.fill();}}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<배경>에 파동 간섭 격자를 만들어줘. canvas에 30x30 점을 간격 48x32px로 깔고, 각 점을 sin(i*0.84+phase)+sin(j*1.26-phase) (주파수 비 2:3)의 값 v로 v*4px 이동시키고 반경을 3.5+v*1.2px로 해. phase는 6초 동안 0에서 2π로 linear 반복. progress 순수 함수로 그려 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 wave-interference 캔버스를 구현해. 30x30점, 주파수 비 2:3, 진폭 8px, 루프 6000ms. 0초, 1.5초, 3초, 6초를 캡처해 밝은 결절과 빈 영역이 이동하는지, 0초와 6초가 같은 프레임인지 확인해.
```

### English · Claude Code
```text
Build a wave interference grid for <target>. On a canvas, lay 30x30 dots at 48x32px spacing and displace each by v*4px where v = sin(i*0.84+phase) + sin(j*1.26-phase) (a 2:3 frequency ratio), with radius 3.5+v*1.2px. Loop phase from 0 to 2pi over 6s, linear. Draw as a pure function of progress so it is seekable.
```

### English · Codex
```text
Implement a wave-interference canvas in <file>: 30x30 dots, frequency ratio 2:3, amplitude 8px, loop 6000ms. Capture at 0s, 1.5s, 3s, and 6s to verify bright nodes and empty areas migrate and that 0s and 6s frames are identical.
```

예시 / Example: 파동 간섭를 `.hero`에 적용해. / Apply Wave Interference to `.hero`.

## 적용 / Application

- HyperFrames: draw(p)는 위상 p만 받는 순수 함수이므로 paused 타임라인의 선형 tween 하나로 구동하면 seek가 정확하다. p=0과 1이 같아 루프도 이어진다
- ReelForge: 브리프에 gridN, freqRatio, amplitudePx, loopMs를 싣는다. 색은 단색과 alpha만 쓴다
- Scrolline Deck: 진행률 0~1을 위상 한 바퀴에 매핑한다. 스크롤 방향에 따라 파동이 되감기며 간섭 무늬가 그대로 재현된다

조합 / Pair with: [웨이브 워프 · Wave Warp](../wave-warp/) · [리플 링 · Ripple Rings](../ripple-rings/) · [회전 패턴 루프 · Hypnotic Pattern](../hypnotic-pattern/) · [격자 펄스 · Grid Pulse](../grid-pulse/)

출처 / Sources: local/claude-synced-skills (`claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/algorithmic-art/SKILL.md`) (Apache-2.0) · [anthropics/skills](https://github.com/anthropics/skills/blob/HEAD/skills/algorithmic-art/SKILL.md) (Apache-2.0) · [paper-design/shaders](https://shaders.paper.design/waves) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
