# Nº 537 반응 확산 · Reaction Diffusion Growth

> 클립 렌더 예정 / Clip rendering planned.

**작은 얼룩이 번지고 갈라지며 줄무늬나 미로 같은 무늬로 바뀌는 성장 과정을 보여 준다**

Small blobs spread, split and settle into stripes or a maze-like pattern.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 고급 | 설명, 분위기 | 설명 영상, 발표, 숏폼 | webgl |

다른 이름 / Also known as: 반응 확산 성장, Gray-Scott pattern, Reaction-diffusion

## 선택 기준 / Selection

이웃 사이의 작은 반응이 전체 패턴을 만든다는 것을 느끼게 한다. 자연물의 무늬가 자라는 방식을 설명하는 데 어울린다 / Shows that small local reactions between neighbors build a global pattern. It suits explaining how natural markings grow.

- 동물 무늬, 산호, 지문처럼 국소 규칙이 전체 패턴을 만드는 원리를 설명할 때 / Explain how local rules create whole patterns, as in animal coats, coral or fingerprints.
- 생명 같은 추상 질감 배경을 시간에 따라 자라게 할 때 / Let an abstract, life-like texture grow over time behind content.

좋은 예 / Good: 256x144 격자에서 씨앗 몇 개로 시작해 8초 동안 얼룩이 퍼지며 미로 무늬로 채워진다. 고정 스텝 16.67ms로 매 프레임이 같다
나쁜 예 / Bad: 씨앗을 화면 전체에 무작위로 뿌리고 난수를 실시간 사용해 다시 재생할 때마다 무늬가 달라진다. 스텝이 가변이라 seek가 어긋난다
주의 / Avoid: 실시간 dt 사용 금지(고정 스텝 16.67ms만) · feed와 kill을 화면 중간에 크게 바꾸지 않는다(무늬가 붕괴함)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 격자 | 256x144 | 192x108~384x216 | 크면 무겁다 |
| 고정 스텝 | 16.67ms | 한 프레임 시뮬 2~4회 | seek는 체크포인트에서 재계산 |
| feed / kill | 0.055 / 0.062 | 0.03~0.07 / 0.055~0.065 | 미로 계열 |
| 확산 A / B | 1.0 / 0.5 | 고정 | Gray-Scott 표준 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const N = 8 * 60; // 8s @ 60fps
function stateAt(f) { let s = seed0(); for (let i = 0; i < f; i++) s = step(s); return s; } // 체크포인트 캐시 권장
tl.to({}, { duration: 8, ease: 'none', onUpdate() { render(stateAt(Math.round(this.progress() * N))); } }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 배경에 반응 확산(Gray-Scott) 성장을 넣어줘. 격자 256x144, 고정 스텝 16.67ms, 확산 A 1.0, B 0.5, feed 0.055, kill 0.062, 씨앗 3곳에서 시작해 8초 재생. 난수는 시드로 고정하고 프레임 상태는 스텝 수로만 결정되게 만들어줘.
```

### 한국어 · Codex
```text
<파일>에 reaction-diffusion 시뮬레이션을 추가해. 256x144, 고정 스텝 16.67ms, feed 0.055, kill 0.062, 8초. 60스텝마다 체크포인트를 캐시하고 seek는 가장 가까운 체크포인트에서 재계산한다. 1초, 4초, 8초를 캡처하고, 같은 시점을 두 번 seek했을 때 해시가 같은지 확인해.
```

### English · Claude Code
```text
Add a Gray-Scott reaction diffusion growth behind <target>. Grid 256x144, fixed step 16.67ms, diffusion A 1.0 and B 0.5, feed 0.055, kill 0.062, seeded from 3 spots, 8 seconds. Fix randomness with a seed and make each frame depend only on the step count.
```

### English · Codex
```text
Add a reaction-diffusion simulation to <file>: 256x144, fixed step 16.67ms, feed 0.055, kill 0.062, 8 seconds. Cache a checkpoint every 60 steps and let seeking recompute from the nearest one. Capture at 1s, 4s and 8s and verify that seeking the same time twice gives identical hashes.
```

예시 / Example: 반응 확산를 `.hero`에 적용해. / Apply Reaction Diffusion Growth to `.hero`.

## 적용 / Application

- HyperFrames: 프레임 f의 상태를 0부터 f스텝 돌린 결과로 정의하고, 60스텝마다 체크포인트를 캐시한다. seek가 임의 시점에서도 같은 무늬를 낸다
- ReelForge: 씬 워커 브리프에 격자 크기, feed, kill, 씨앗 좌표, 총 8초를 싣는다. 시뮬레이션은 오프라인으로 프레임 시퀀스를 굽는 편이 안전하다
- Scrolline Deck: 진행률을 스텝 수에 대응시킨다. 역스크롤이 필요하면 체크포인트 배열을 미리 구워 두고 인덱스만 읽는다

조합 / Pair with: [셀룰러 오토마타 · Cellular Automaton Evolution](../cellular-automaton/) · [차등 회전 은하 · Differential galaxy](../differential-galaxy/) · [질감 채움 모션 · Animated Texture Fill](../texture-fill-motion/)

출처 / Sources: [jasonwebb/morphogenesis-resources](https://github.com/jasonwebb/morphogenesis-resources#reaction-diffusion) (unknown) · [cangdongcheng/reaction-diffusion](https://github.com/cangdongcheng/reaction-diffusion) (MIT) · [piellardj/reaction-diffusion-webgl](https://github.com/piellardj/reaction-diffusion-webgl) (MIT) · [jasonwebb/reaction-diffusion-playground](https://github.com/jasonwebb/reaction-diffusion-playground) (CC0-1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
