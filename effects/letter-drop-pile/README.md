# Nº 087 글자 낙하와 쌓임 · Letter Drop Pile

> 클립 렌더 예정 / Clip rendering planned.

**문장의 글자들이 떨어져 바닥에 부딪히고 쌓이는 효과**

The letters of a sentence detach, fall, hit the ground, and pile up.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 고급 | 주목 끌기, 피드백 | 숏폼, 설명 영상 | canvas |

다른 이름 / Also known as: Falling Letters, 글자 낙하, Physical Letter Drop, 물리 글자 낙하

## 선택 기준 / Selection

문구가 무너지거나 해체되는 사건을 무게감 있게 보여준다. 쌓인 글자 더미가 결과를 남긴다 / Shows a phrase breaking apart with weight, and leaves a heap of letters as the result.

- '무너진다, 쏟아진다'는 뜻의 문구를 시각으로 뒷받침할 때 / Back up a phrase that means collapse or spill with a visual.
- 오류·실패 장면에서 텍스트를 해체할 때 / Break text apart in an error or failure scene.

좋은 예 / Good: 'FALL' 네 글자가 0.06초 간격으로 떨어져 900px/s² 중력, 반발 0.3으로 두세 번 튀고 서로 겹치지 않은 채 쌓인다
나쁜 예 / Bad: 글자가 바닥을 뚫거나 화면 밖으로 튕겨 나가고 매번 결과가 달라진다
주의 / Avoid: 물리는 고정 스텝(1/60초)과 시드로만 계산한다 · 글자 수 12 초과 금지 · 읽어야 하는 핵심 문구에는 사용하지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 중력 | 900px/s² | 600~1400 | 낙하 가속도 |
| 반발 | 0.3 | 0.2~0.45 | 튕김 크기 |
| 낙하 간격 | 60ms | 30~120ms | 글자별 출발 |
| 초기 회전 | ±30deg | ±10~±45 | 도착 자세 |

이징 / Ease: `bounce.out`

## 구현 / Implementation (GSAP)

```js
const floor = 900;
chars.forEach((el, i) => {
  const rot = (i % 2 ? 1 : -1) * (10 + (i * 7) % 20);
  tl.fromTo(el, { y: -600, rotation: 0 }, { y: floor - el.offsetTop, rotation: rot,
    duration: 0.9, ease: 'bounce.out' }, i * 0.06);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 문구 '<문구>'를 글자(한글은 음절) 단위로 나눠 위에서 떨어뜨려줘. 글자마다 0.06초 간격, 화면 위 -600px에서 바닥 y까지 0.9초 bounce.out으로 떨어지고, 인덱스에 따라 ±10~30도로 기울어져 쌓이게 해. 난수는 쓰지 말고 결정식으로 계산해. 마지막 글자 도착 뒤 1초 정지.
```

### 한국어 · Codex
```text
<파일>의 문구를 span으로 분리해 i*0.06초 간격의 tl.fromTo(y -600→바닥, rotation 0→±(10~30), 0.9s, bounce.out)로 낙하시켜. Math.random 금지. 0.5초와 2.0초를 캡처해 글자가 바닥 아래로 뚫지 않고 서로 겹치지 않는지 확인해.
```

### English · Claude Code
```text
Drop the phrase '<text>' in <target> letter by letter (per syllable for Korean). 0.06 seconds apart, each falls from -600px to the floor in 0.9 seconds with bounce.out and lands tilted between 10 and 30 degrees by index. No random values, use deterministic formulas. Hold 1 second after the last letter lands.
```

### English · Codex
```text
In <file> split the phrase into spans and drop each with tl.fromTo (y -600 to floor, rotation 0 to +/-(10 to 30), 0.9s, bounce.out) at i*0.06. No Math.random. Capture at 0.5s and 2.0s and verify no letter passes below the floor or overlaps another.
```

예시 / Example: 글자 낙하와 쌓임를 `.hero`에 적용해. / Apply Letter Drop Pile to `.hero`.

## 적용 / Application

- HyperFrames: 엄밀한 충돌 대신 bounce.out으로 근사하고 회전값은 인덱스 기반 결정식으로 둔다. 진짜 물리는 고정 스텝으로 사전 베이크해 배열로 seek한다
- ReelForge: 물리 씬 브리프에 중력, 반발, 시드를 싣고 캔버스 시뮬레이션은 프레임별 결과를 미리 굽는다
- Scrolline Deck: 낙하 진행을 진행률 0..1에 베이크된 궤적으로 매핑한다. 되감기에서 물리가 다시 계산되지 않도록 시뮬레이션은 시간 기반이 아닌 인덱스 기반으로 한다

조합 / Pair with: [바운스 착지 · Bounce Landing](../bounce-landing/) · [텍스트 입자 디졸브 · Text Particle Dissolve](../text-particle-dissolve/) · [스태거 · Stagger](../stagger/)

출처 / Sources: [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0) · [Aqro/Physics-menu-threejs-cannonjs](https://github.com/Aqro/Physics-menu-threejs-cannonjs) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
