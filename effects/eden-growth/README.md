# Nº 519 에덴 성장 · Eden Boundary Growth

> 클립 렌더 예정 / Clip rendering planned.

**작은 덩어리의 바깥 경계에 새 칸이 하나씩 붙어, 빈틈이 적은 둥근 군집이 점점 커진다**

New cells attach to the outer boundary of a small cluster, growing a round mass with few gaps.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 중급 | 설명, 데이터 증명 | 설명 영상, 데이터 스토리, 발표 | canvas |

다른 이름 / Also known as: 에덴 경계 성장, Eden growth model

## 선택 기준 / Selection

균일한 증식과 영역의 확대를 보여 준다. 세포 분열이나 시장 점유 확대의 은유로 쓸 수 있다 / Shows uniform proliferation and territory expansion. It works as a metaphor for cell division or market share growth.

- 세포나 커뮤니티가 퍼져 나가는 모습을 단순한 규칙으로 보여 줄 때 / Show spreading cells or communities with a simple rule.
- 영역 확장을 데이터 이야기의 배경으로 표현할 때 / Express territorial expansion as a backdrop for a data story.

좋은 예 / Good: 120x80 격자에 씨앗 3개로 시작해 40ms마다 8칸씩 붙어 5초 동안 세 군집이 커지다 만난다
나쁜 예 / Bad: 난수를 실시간으로 뽑아 재생할 때마다 모양이 다르고, 세대당 200칸씩 붙여 성장이 순식간이다
주의 / Avoid: 시드 난수와 부착 순서 저장을 쓴다 · 세대당 부착 20칸 초과 금지(성장 과정이 안 보임)

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 격자 | 120x80 | 96x64~160x90 | 칸 크기 16px |
| 씨앗 | 3개 | 1~5개 | 서로 만나는 지점이 볼거리 |
| 세대 간격 | 40ms | 30~60ms | steps 이징 |
| 세대당 부착 | 8칸 | 4~12칸 | 성장 속도 |

이징 / Ease: `steps`

## 구현 / Implementation (GSAP)

```js
const order = precomputeEden(120, 80, [ [30,40],[60,20],[90,50] ], perGen = 8, seed = 3); // 칸 순서
tl.to({ n: 0 }, { n: order.length, duration: 5, ease: 'steps(125)',
  onUpdate() { fill(order, Math.floor(this.targets()[0].n)); } }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 캔버스에 에덴 성장을 넣어줘. 격자 120x80, 씨앗 3곳에서 시작, 세대 40ms마다 경계 칸 8개가 붙게 해서 5초 동안 재생해. 부착 순서는 시드 3으로 미리 계산해 저장하고 steps 이징으로 세대감을 줘.
```

### 한국어 · Codex
```text
<파일>에 Eden growth 재생을 만들어줘. 120x80, 씨앗 3개, 세대당 8칸, 5초. 부착 순서를 시드 3으로 미리 계산해 배열에 저장하고 n을 steps로 진행한다. 0.5초, 2.5초, 5초를 캡처해 군집이 둥글게 커지다 서로 만나는지, 두 번 seek해도 같은 칸 수인지 확인해.
```

### English · Claude Code
```text
Add Eden growth to the <target> canvas. 120x80 grid, starting from 3 seeds, 8 boundary cells attach every 40ms generation, over 5 seconds. Precompute the attachment order with seed 3 and use stepped easing for a generational feel.
```

### English · Codex
```text
Implement Eden growth playback in <file>: 120x80, 3 seeds, 8 cells per generation, 5 seconds. Precompute the order with seed 3 into an array and advance n with steps easing. Capture at 0.5s, 2.5s and 5s and verify the clusters grow roundly and meet, and seeking twice gives the same cell count.
```

예시 / Example: 에덴 성장를 `.hero`에 적용해. / Apply Eden Boundary Growth to `.hero`.

## 적용 / Application

- HyperFrames: 부착 순서 배열을 시드로 미리 만들고 타임라인은 앞 n칸만 채운다. steps 이징으로 세대감을 준다
- ReelForge: 씬 워커 브리프에 격자 크기, 씨앗 좌표, 세대 간격 40ms, 세대당 8칸을 싣는다
- Scrolline Deck: 진행률을 n에 대응시킨다. 역스크롤은 n만 줄이면 되므로 자연스럽다

조합 / Pair with: [셀룰러 오토마타 · Cellular Automaton Evolution](../cellular-automaton/) · [가지 성장 · Branch Growth](../branch-growth/) · [패킹 이완 · Packing Relaxation](../packing-relaxation/)

출처 / Sources: [jasonwebb/morphogenesis-resources](https://github.com/jasonwebb/morphogenesis-resources#eden-growth-model) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
