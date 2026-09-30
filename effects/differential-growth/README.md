# Nº 517 차등 성장 · Differential Line Growth

> 클립 렌더 예정 / Clip rendering planned.

**짧은 선이나 고리가 계속 길어지며 주름지고 접혀 주어진 공간을 채운다**

A short line or loop keeps lengthening, wrinkling and folding to fill the available space.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 입자·생성 · GENERATIVE | 고급 | 분위기, 설명 | 설명 영상, 숏폼, 발표 | canvas |

다른 이름 / Also known as: 차등 선 성장, Differential growth

## 선택 기준 / Selection

제한된 공간에서 생기는 성장의 압력과 유기적인 형태를 보여 준다. 뇌 주름, 잎맥 같은 형태를 떠올리게 한다 / Shows the pressure of growth in a limited space and organic form. It recalls brain folds and leaf veins.

- 유기적인 형태가 자라는 과정을 배경이나 표지 그래픽으로 쓸 때 / Use organic growth as a background or cover graphic.
- 성장이 공간에 부딪혀 접힌다는 은유를 시각화할 때 / Visualize the metaphor of growth folding against its limits.

좋은 예 / Good: 노드 40개의 닫힌 고리가 7초 동안 삽입 거리 8px 규칙으로 늘어나며 반발 반경 14px 안에서 주름을 만든다
나쁜 예 / Bad: 반발을 약하게 해서 선이 서로 통과하거나 너무 강해서 폭발하듯 튄다. 시드 없이 실행해 매번 다른 모양이 나온다
주의 / Avoid: 정렬 힘 0.4 초과 금지(선이 직선으로 펴짐) · 노드 수는 4000개 이하로 제한한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 초기 노드 | 40개 | 30~60개 | 작은 원 고리 |
| 삽입 거리 | 8px | 6~12px | 이보다 길면 노드 삽입 |
| 반발 반경 | 14px | 10~20px | 이 안의 이웃을 밀어냄 |
| 정렬 힘 | 0.2 | 0.1~0.3 | 이웃 중점으로 당김 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
// 고정 스텝 시뮬: 16.67ms마다 step(nodes) 1회, 프레임 f의 상태는 f회 스텝의 결과
function step(n) { n.forEach((p, i) => { p.f = align(p, n[i-1], n[i+1], 0.2).add(repel(p, n, 14)); }); n.forEach(p => p.add(p.f)); split(n, 8); }
tl.to({}, { duration: 7, ease: 'none', onUpdate() { draw(stateAt(Math.round(this.progress() * 420))); } }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 캔버스에 차등 선 성장을 넣어줘. 초기 노드 40개 닫힌 고리, 삽입 거리 8px, 반발 반경 14px, 정렬 힘 0.2, 고정 스텝 16.67ms, 시드 고정으로 7초 동안 진행해. 선은 2px 흰색이고 배경은 어두운 남색으로 해줘.
```

### 한국어 · Codex
```text
<파일>에 differential growth 시뮬을 구현해. 노드 40, 삽입 8px, 반발 14px, 정렬 0.2, 7초(420스텝). 상태는 스텝 수로만 결정하고 60스텝마다 체크포인트를 캐시한다. 1.5초, 4초, 7초를 캡처해 선이 겹치지 않고 주름만 늘어나는지, 두 번 seek해도 같은 모양인지 확인해.
```

### English · Claude Code
```text
Add differential line growth to the <target> canvas. Start with a closed loop of 40 nodes, insertion distance 8px, repulsion radius 14px, alignment force 0.2, fixed step 16.67ms, fixed seed, running 7 seconds. Draw a 2px white line on dark navy.
```

### English · Codex
```text
Implement a differential growth simulation in <file>: 40 nodes, insertion 8px, repulsion 14px, alignment 0.2, 7 seconds (420 steps). Define state by step count only and cache a checkpoint every 60 steps. Capture at 1.5s, 4s and 7s and verify the line never crosses itself, only wrinkles more, and seeking twice gives the same shape.
```

예시 / Example: 차등 성장를 `.hero`에 적용해. / Apply Differential Line Growth to `.hero`.

## 적용 / Application

- HyperFrames: 프레임 상태를 스텝 수로만 정의하고 체크포인트를 캐시한다. 인접 탐색은 격자 해시로 가속한다
- ReelForge: 씬 워커 브리프에 초기 노드 40, 삽입 8px, 반발 14px, 정렬 0.2, 시드를 싣는다. 무거우면 프레임 시퀀스로 미리 굽는다
- Scrolline Deck: 진행률을 스텝 수 0~420에 대응시킨다. 시뮬은 되감기가 비싸므로 체크포인트 배열을 사용한다

조합 / Pair with: [패킹 이완 · Packing Relaxation](../packing-relaxation/) · [가지 성장 · Branch Growth](../branch-growth/) · [흐름장 · Flow Field](../flow-field/)

출처 / Sources: [jasonwebb/morphogenesis-resources](https://github.com/jasonwebb/morphogenesis-resources#differential-growth) (unknown) · [jasonwebb/2d-differential-growth-experiments](https://github.com/jasonwebb/2d-differential-growth-experiments) (CC0-1.0) · [devloop01/differential-growth](https://github.com/devloop01/differential-growth) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
