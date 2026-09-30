# Nº 554 웨이브 캐러셀 · Wave Carousel

> 클립 렌더 예정 / Clip rendering planned.

**각진 상자들이 파동의 높낮이를 따라 이동하며 차례로 앞에 서는 순환 구조**

Angular boxes travel along a wave and each takes its turn at the front.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 고급 | 순서·흐름, 설명 | 웹 UI, 설명 영상, 제품 시연 | webgl |

다른 이름 / Also known as: Cuboid wave carousel, 입방체 파동 캐러셀

## 선택 기준 / Selection

여러 콘텐츠가 물리적 구조 위에서 순환한다는 인상을 준다. 목록이 한 줄로 나열되는 것보다 서로 연결된 묶음으로 읽힌다 / Shows content circulating on a physical structure, reading as a connected set rather than a flat list.

- 서비스 소개 카드 8개를 순환하며 보여 줄 때 / Rotate eight service cards through one scene.
- 기능 목록을 3D 구조물 위에서 돌릴 때 / Cycle a feature list on a 3D structure.
- 포트폴리오를 한 장면에 이어서 훑을 때 / Sweep a portfolio in one continuous shot.

좋은 예 / Good: 상자 8개가 주기 6초로 진폭 80px의 파동을 따라 흐르고, 앞에 온 상자의 면이 정면을 향하며 위상차 45도씩 이어진다
나쁜 예 / Bad: 진폭이 너무 커서 뒤 상자가 앞 상자를 가리거나, 정면에 온 상자의 텍스트가 기울어져 읽히지 않는다
주의 / Avoid: 정면에 오는 상자는 회전을 0으로 맞춰 읽히게 한다 · 상자는 8개를 넘기지 않는다 · 주기는 4초 이하로 줄이지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 6s | 4~9s | 한 바퀴 시간 |
| 상자 수 | 8 | 6~10 | 위상차 360/N |
| 파동 진폭 | 80px | 40~120px | y 변위 |
| 위상차 | 45deg | 36~60deg | 인덱스 기준 |
| 이징 | linear | linear | 일정 속도 순환 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const N = 8, T = 6;
boxes.forEach((b, i) => {
  const ph = (i / N) * Math.PI * 2;
  tl.to(b, { duration: T, ease: 'none', onUpdate() {
    const a = ph + this.progress() * Math.PI * 2;
    gsap.set(b, { x: Math.sin(a) * 520, z: Math.cos(a) * 260, y: Math.sin(a * 2) * 80, rotationY: -Math.sin(a) * 40 });
  } }, 0);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
WebGL이나 CSS 3D로 <항목 8개>를 상자 8개에 붙인 웨이브 캐러셀을 만들어 줘. 주기는 6초 linear, 진폭 80px, 인덱스 위상차 45도, 정면에 온 상자는 rotationY 0으로 읽히게 해. 위치는 진행률의 순수 함수로 계산하고 paused 타임라인 하나로 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 wave-carousel을 적용해. 상자 8개의 위치를 a=phase_i+progress*2π로 계산해 x=sin(a)*520, z=cos(a)*260, y=sin(2a)*80, rotationY=-sin(a)*40을 준다. duration 6, ease none. 0초, 0.75초, 3초 캡처로 정면 상자의 텍스트가 읽히고 상자 위상이 45도씩 어긋나는지 확인해.
```

### English · Claude Code
```text
Build a wave carousel in WebGL or CSS 3D with <8 items> mapped to 8 boxes. Period 6 seconds linear, amplitude 80px, 45-degree phase step per index, and the front box at rotationY 0 so its text is readable. Compute positions as a pure function of progress and use one paused, seekable timeline.
```

### English · Codex
```text
Apply wave-carousel in <file>. For each of 8 boxes compute a=phase_i+progress*2*PI and set x=sin(a)*520, z=cos(a)*260, y=sin(2a)*80, rotationY=-sin(a)*40. duration 6, ease none. Capture 0s, 0.75s and 3s: the front box text is readable and box phases differ by 45 degrees.
```

예시 / Example: 웨이브 캐러셀를 `.hero`에 적용해. / Apply Wave Carousel to `.hero`.

## 적용 / Application

- HyperFrames: 모든 위치를 진행률의 순수 함수로 계산해 seek 시 상태가 항상 같다. WebGL이면 시각을 uniform으로 넣는다
- ReelForge: 브리프에 항목 8개, 주기 6s, 진폭 80, 각 면 텍스처를 싣는다. 텍스트는 상자 면에 미리 렌더한 이미지로 받는다
- Scrolline Deck: 진행률 1.0이 한 바퀴가 되도록 매핑하고 정면 상자에서 홀드가 걸리도록 ease-out 스냅을 추가한다

조합 / Pair with: [커버플로우 · Coverflow](../coverflow/) · [오브젝트 턴테이블 · Object Turntable](../object-turntable/) · [스태거 · Stagger](../stagger/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/cuboid-carousel/registry-item.json) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
