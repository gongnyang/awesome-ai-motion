# Nº 063 나선 조립 · Spiral Assembly

> 클립 렌더 예정 / Clip rendering planned.

**조각들이 바깥의 나선 궤도를 따라 들어와 최종 형태에 붙는다.**

Pieces spiral inward and settle into their final arrangement.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 중급 | 설명, 강조 | 설명 영상, 웹 UI, 숏폼 | gsap |

다른 이름 / Also known as: 나선 궤도 조립, SpiralIn

## 선택 기준 / Selection

흩어진 조각이 하나의 구조로 모임을 느낀다. / Communicates convergence and assembly.

- 흩어진 조각을 조립할 때 / Assemble scattered pieces.
- 하나의 구조로 수렴함을 보여 줄 때 / Show separate parts becoming a single structure.

좋은 예 / Good: 로고 조각 여덟 개가 나선을 따라 각자의 최종 좌표에 붙는다.
나쁜 예 / Bad: 문장 글자를 크게 회전시켜 읽기 시작을 늦춘다.
주의 / Avoid: 같은 장면의 여러 대상에 동시에 적용하지 않는다. · 동작 감소 설정에서는 정적인 대표 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 1.5s | 1~2s | 1920x1080 기준. 장면 시작을 0초로 둔다. |
| 회전량 | 540deg | 180~540deg | 1920x1080 기준. 장면 시작을 0초로 둔다. |
| 시작 반경 | 300px | 160~400px | 1920x1080 기준. 장면 시작을 0초로 둔다. |
| 조각 시간차 | 0.04s | 0~0.08s | 1920x1080 기준. 장면 시작을 0초로 둔다. |

이징 / Ease: `power2.out`

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({ paused: true });
gsap.utils.toArray('.piece').forEach((el, i) => {
  const s = { p: 0 };
  tl.to(s, { p: 1, duration: 1.5, ease: 'power2.out', onUpdate: () => {
    const a = (1-s.p) * Math.PI * 3 + i * Math.PI / 4;
    gsap.set(el, { x: 300*(1-s.p)*Math.cos(a), y: 300*(1-s.p)*Math.sin(a) });
  } }, i * 0.04);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 나선 조립을 구현해. 지속 1.5s, 회전량 540deg, 시작 반경 300px, 조각 시간차 0.04s, 이징 power2.out을 적용해. 조각별 극좌표 반경과 각도를 최종 좌표까지 보간한다. paused 타임라인과 절대 시간으로 구동하고 Math.random 없이 같은 시점의 상태를 재현해.
```

### 한국어 · Codex
```text
<파일>의 나선 조립 장면 레이어에 적용해. 지속 1.5s, 회전량 540deg, 시작 반경 300px, 조각 시간차 0.04s, 이징 power2.out을 사용하고 본문과 분리해. 0초, 0.4초, 1.2초 시점을 캡처해 시작 상태와 중간 변화 및 대상 가독성을 확인하고 같은 시점을 다시 seek해 결과가 같은지 검증해.
```

### English · Claude Code
```text
Implement Spiral Assembly on <target>. Use duration 1.5s; rotation 540deg; initial radius 300px; piece stagger 0.04s; use power2.out easing. Drive the effect with a paused GSAP timeline and absolute time, and reproduce the same state on every seek without Math.random. Keep foreground text readable.
```

### English · Codex
```text
Apply Spiral Assembly to the scene layer in <file>. Use duration 1.5s; rotation 540deg; initial radius 300px; piece stagger 0.04s and power2.out easing. Capture at 0, 0.4, and 1.2 seconds to check the initial state, motion progression, and foreground readability; seek to each time again to verify identical output.
```

예시 / Example: 나선 조립를 `.hero`에 적용해. / Apply Spiral Assembly to `.hero`.

## 적용 / Application

- HyperFrames: paused GSAP 타임라인으로 나선 조립의 절대 시간을 구동하고 seek 뒤 같은 상태를 다시 그린다.
- ReelForge: 씬 워커 브리프에 지속 1.5s, 회전량 540deg, 시작 반경 300px, 조각 시간차 0.04s을 싣고 gsap 레이어의 대상과 합성 순서를 지정한다.
- Scrolline Deck: 진행률 0~1을 1.5s 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역스크롤에도 같은 상태를 계산한다.

조합 / Pair with: [조각 조립 · Piece Assembly](../piece-assembly/) · [아크 · Arcs](../arc-motion/)

출처 / Sources: [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/creation.py) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
