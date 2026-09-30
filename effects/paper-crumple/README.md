# Nº 569 종이 구김과 복원 · Paper Crumple

> 클립 렌더 예정 / Clip rendering planned.

**평평한 종이가 여러 주름을 따라 작은 덩어리로 구겨지고 다시 펼쳐지는 변형**

Flat paper folds along several creases into a small ball, then opens back out.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 3D·깊이 · 3D & DEPTH | 고급 | 피드백, 전환 | 숏폼, 설명 영상, 제품 시연 | webgl |

다른 이름 / Also known as: Paper Crumple and Restore, 종이 구기기와 복원

## 선택 기준 / Selection

폐기, 압축, 실패 같은 결정을 물리적 사건으로 보여 준다. 복원되면 되돌릴 수 있다는 의미로 바뀐다 / Makes disposal, compression or failure a physical event, and turns into recovery when it reopens.

- 초안이나 실패한 안을 구겨 버리는 연출을 할 때 / Crumple a draft or a failed idea.
- 문서가 압축되어 작아지는 과정을 보일 때 / Show a document being compressed.
- 구겨진 종이가 다시 펴지며 복구되는 이야기를 할 때 / Tell a story of a crumpled sheet being restored.

좋은 예 / Good: 종이가 550ms 동안 주름 6개를 따라 구겨져 작은 덩어리가 되고 400ms에 다시 펼쳐지며 잔주름이 사라진다
나쁜 예 / Bad: 주름이 한 방향으로만 접혀 단순 접기처럼 보이거나, 조명 법선이 갱신되지 않아 구겨져도 평평하게 보인다
주의 / Avoid: 주름 축과 강도는 시드로 고정한다 · 구김 중에 법선 재계산을 빼지 않는다 · 텍스트는 구겨지기 전에 읽을 시간을 0.5초 이상 준다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 구김 시간 | 0.55s | 0.4~0.8s | 압축 |
| 복원 시간 | 0.4s | 0.3~0.7s | 펼침 |
| 주름 수 | 6 | 4~10 | 시드 고정 |
| 강도 | 0.85 | 0.6~1.0 | 최종 압축 정도 |
| 이징 | power3.in | 구김 in, 복원 out |  |

## 구현 / Implementation (GSAP)

```js
const p = { k: 0 };
tl.to(p, { k: 0.85, duration: 0.55, ease: 'power3.in', onUpdate: () => mat.uniforms.uCrumple.value = p.k }, 0.6);
tl.to(p, { k: 0, duration: 0.4, ease: 'power2.out', onUpdate: () => mat.uniforms.uCrumple.value = p.k }, 1.5);
// vertex: 주름축 6개(시드)에 대해 k만큼 접고 normal 재계산
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
WebGL과 GSAP으로 <종이 이미지>가 구겨졌다 펴지는 연출을 만들어 줘. 평면 메시를 시드로 정한 주름 축 6개를 따라 접고 법선을 재계산해 조명이 보이게 해. 0.6초부터 0.55초 동안 power3.in으로 강도 0에서 0.85, 1.5초부터 0.4초 동안 power2.out으로 0까지 복원해. 복원 후에는 평면과 동일해야 하고 Math.random은 쓰지 마.
```

### 한국어 · Codex
```text
<파일>에 paper-crumple을 적용해. uniform uCrumple을 position 0.6, duration 0.55, ease power3.in으로 0→0.85, position 1.5, duration 0.4, ease power2.out으로 0.85→0 tween한다. 주름 축은 상수 6개. 0.5초는 평평, 1.1초는 덩어리, 2.0초는 원본과 픽셀 차이가 0인지 캡처로 확인해.
```

### English · Claude Code
```text
Use WebGL and GSAP to crumple and unfold <paper image>. Fold a plane mesh along 6 seeded crease axes and recompute normals so lighting shows. From 0.6 seconds over 0.55 seconds with power3.in raise strength from 0 to 0.85; from 1.5 seconds over 0.4 seconds with power2.out return it to 0. After restoring it must match the flat plane. No Math.random.
```

### English · Codex
```text
Apply paper-crumple in <file>. Tween uniform uCrumple 0 to 0.85 at position 0.6, duration 0.55, ease power3.in, then 0.85 to 0 at position 1.5, duration 0.4, ease power2.out. Crease axes are 6 constants. Capture 0.5s (flat), 1.1s (ball) and 2.0s (zero pixel diff against the original).
```

예시 / Example: 종이 구김과 복원를 `.hero`에 적용해. / Apply Paper Crumple to `.hero`.

## 적용 / Application

- HyperFrames: 구김 강도 하나의 uniform만 tween해 seek 결정성을 확보한다. 주름 축은 코드 상수 배열이다
- ReelForge: 브리프에 이미지 또는 문서, 주름 6개 시드, 구김 0.55s, 복원 0.4s를 싣는다. 복원하지 않는 변형도 옵션으로 둔다
- Scrolline Deck: 진행률 0~0.5에 구김, 0.6~1.0에 복원을 매핑한다. 끝 구간에서 강도가 0으로 정확히 돌아오게 한다

조합 / Pair with: [파편 분해 · Shatter](../shatter/) · [모서리 말림 · Corner Peel](../corner-peel/) · [이미지 언롤 · Image Unroll](../image-unroll/)

출처 / Sources: [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
