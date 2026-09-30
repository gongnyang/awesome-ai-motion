# Nº 602 웨이브 흐름 · Flowing Wave Field

> 클립 렌더 예정 / Clip rendering planned.

**여러 곡선과 줄무늬가 위상을 달리하며 파도처럼 움직인다.**

Phase-shifted curves flow across the frame like waves.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 고급 | 분위기, 브랜딩 | 설명 영상, 숏폼, 웹 UI | canvas |

다른 이름 / Also known as: 흐르는 물결 배경, Zigzag and Wave Loader, 지그재그와 물결 로더

## 선택 기준 / Selection

유기적인 흐름과 연결감을 준다. / Creates an organic sense of flow and connection.

- 기술 소개 배경에서 지속 활동을 표시할 때 / Build a calm wave background for a technology introduction.
- 짧은 반복으로 유기적인 흐름과 연결감을 준다 때 / Use a short repeating motion to communicate creates an organic sense of flow and connection.

좋은 예 / Good: 기술 소개 배경에서 열두 물결이 30px 진폭으로 천천히 흐른다
나쁜 예 / Bad: 데이터 그래프 뒤의 물결이 실제 그래프 선처럼 읽힌다
주의 / Avoid: 데이터 그래프 뒤의 물결이 실제 그래프 선처럼 읽힌다 상황을 피한다 · 동작 감소 설정에서는 첫 프레임을 고정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 6000ms | 4500~9000ms | 한 번의 반복에 걸리는 시간이다 |
| 진폭 | 30px | 8~50px | 배경 물결의 세로 이동 폭이다 |
| 파장 | 240px | 120~400px | 한 사인 주기의 가로 길이다 |
| 선 수 | 12개 | 6~16개 | 선 간격은 36px로 시작한다 |
| 이징 | none | none \| sine.inOut | 경로 이동은 등속, 맥동은 부드러운 왕복을 쓴다 |

## 구현 / Implementation (GSAP)

```js
const phase = { value: 0 };
const tl = gsap.timeline({ paused: true });
tl.to(phase, { value: Math.PI * 2, duration: 6, ease: 'none', repeat: -1, onUpdate: () => {
  ctx.clearRect(0, 0, 1920, 1080);
  for (let j=0; j<12; j++) { ctx.beginPath();
    for (let x=0; x<=1920; x+=8) { const y=300+j*36+30*Math.sin(x/240*Math.PI*2+phase.value+j*.3); x===0?ctx.moveTo(x,y):ctx.lineTo(x,y); }
    ctx.stroke();
  }
} });
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 웨이브 흐름를 적용해. 주기 6000ms, 진폭 30px, 파장 240px, 선 수 12개, 이징 none로 구현해. 예시 코드의 요소 구조를 함께 만들고 하나의 paused 타임라인으로 seek 가능하게 연결해. 동작 감소 설정에서는 첫 프레임을 유지해.
```

### 한국어 · Codex
```text
<파일>의 대기 표시 또는 배경 영역에 웨이브 흐름를 적용해. 주기 6000ms, 진폭 30px, 파장 240px, 선 수 12개, 이징 none를 사용하고 반복 위상을 절대 시간에서 계산해. 0초, 3초, 6초를 캡처해 중간 변화와 첫 프레임으로의 연결을 확인해.
```

### English · Claude Code
```text
Apply Flowing Wave Field to <target>. Use a 6-second cycle, 12 lines, 30px amplitude, 240px wavelength, and 36px line spacing, and none easing. Include the required element structure and drive the effect with one paused, seekable timeline. Hold the first frame when reduced motion is enabled.
```

### English · Codex
```text
Apply Flowing Wave Field in the waiting indicator or background region of <file>. Use a 6-second cycle, 12 lines, 30px amplitude, 240px wavelength, and 36px line spacing, and none easing; derive loop phase from absolute time. Capture at 0, 3, and 6 seconds to verify the intermediate change and the return to the starting frame.
```

예시 / Example: 웨이브 흐름를 `.hero`에 적용해. / Apply Flowing Wave Field to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 만들고 seek 시 캔버스 갱신을 GSAP onUpdate에 두고 같은 시간에 같은 물결을 그린다. 주기는 6000ms로 고정한다.
- ReelForge: 씬 워커 브리프에 웨이브 흐름, 주기 6000ms, 진폭 30px, 파장 240px, 선 수 12개를 싣고 씬 길이에서 반복을 자른다.
- Scrolline Deck: 진행률 0~1을 6초 한 주기에 매핑한다. scrub은 스프링 대신 ease-out을 쓰고 끝점의 반복 연결을 확인한다.

조합 / Pair with: [브리딩 루프 · Breathing Loop](../breathing-loop/) · [색 전환 · Color Transition](../color-transition/) · [페이드 · Fade](../fade/)

출처 / Sources: [ui.aceternity.com](https://ui.aceternity.com/components/wavy-background) (unknown) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [css-loaders.com](https://css-loaders.com/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
