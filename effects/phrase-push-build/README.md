# Nº 104 문장 밀어 쌓기 · Phrase Push Build

> 클립 렌더 예정 / Clip rendering planned.

**새 단어가 오른쪽에서 들어오면 이미 쓴 단어들이 왼쪽으로 밀려 전체 문장이 항상 중앙에 놓이는 효과**

Each new word enters from the right and pushes earlier words left, keeping the whole phrase centered.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 타이포 · TYPOGRAPHY | 중급 | 순서·흐름, 설명, 주목 끌기 | 숏폼, 설명 영상, 발표 | gsap |

다른 이름 / Also known as: Kinetic center build, 중앙 정렬 문장 쌓기, Centered Phrase Push Build, 중앙 문장 밀어 쌓기, Vertical phrase build, 세로 문장 쌓기, Kinetic Type Layout Relay, 키네틱 타이포 배치 릴레이

## 선택 기준 / Selection

문장이 자라면서도 시선은 화면 중앙 한 곳에 머문다. 말이 이어지는 호흡이 만들어진다 / The sentence grows while the eye stays on one center point, matching spoken rhythm.

- 짧은 슬로건을 단어 단위로 쌓아 완성 문장으로 끝낼 때 / When building a short slogan word by word into a finished sentence
- 내레이션 한 문장을 리듬 있게 타이포로 보여 줄 때 / When showing one line of narration as rhythmic typography

좋은 예 / Good: "작게 / 시작해서 / 크게 / 배운다" 네 마디가 0.18초 간격으로 들어오고 매번 묶음이 0.35초 안에 중앙으로 재정렬된다
나쁜 예 / Bad: 단어를 밀 때 폭 측정을 하지 않아 문장이 오른쪽으로 치우친 채 끝난다
주의 / Avoid: 마디는 6개 이하로 한다. 길어지면 최종 폭이 화면을 넘는다 · 밀리는 단어에 이징을 따로 걸지 않는다. 묶음 전체가 같은 이징으로 함께 움직여야 한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 마디 등장 | 0.35s | 0.3~0.45s | 오른쪽 80px에서 진입 |
| 마디 간격 | 0.18s | 0.12~0.3s | 내레이션 속도에 맞춤 |
| 최종 정지 | 1.0s | 0.8~1.5s | 완성 문장 읽기 |
| 진입 거리 | 80px | 60~120px | 1920x1080 기준 |

이징 / Ease: `cubic-bezier(0.2,0.8,0.2,1)`

## 구현 / Implementation (GSAP)

```js
const parts = ['작게','시작해서','크게','배운다'];
const widths = parts.map((_, i) => el(i).offsetWidth + gap);
let sum = 0;
parts.forEach((p, i) => {
  sum += widths[i];
  const shift = -sum / 2 + widths[i] / 2; // 묶음을 중앙에 맞추는 이동
  tl.fromTo(el(i), {x: shift + 80, opacity:0}, {x: shift, opacity:1, duration:0.35, ease:'expo.out'}, 0.3 + i * 0.18);
  for (let j = 0; j < i; j++) tl.to(el(j), {x: '-=' + widths[i] / 2, duration:0.35, ease:'expo.out'}, 0.3 + i * 0.18);
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 문장을 마디(<마디들>) 단위로 쌓아줘. 새 마디는 오른쪽 80px에서 0.35초 expo.out으로 들어오고, 이미 놓인 마디들은 새 마디 폭의 절반만큼 왼쪽으로 함께 밀려 묶음이 항상 화면 중앙에 오게 해. 마디 간격 0.18초, 마지막 정지 1초.
```

### 한국어 · Codex
```text
<파일>에 phrase push build를 적용해. fonts.ready 뒤 각 마디 offsetWidth를 측정해 x 목표를 배열로 계산하고 tween은 duration 0.35, ease expo.out, 간격 0.18초. 각 단계 직후(0.7초, 1.0초, 최종) 캡처해 묶음의 좌우 여백 차이가 4px 이하인지 확인해.
```

### English · Claude Code
```text
Build the phrase in <target> from chunks (<chunks>). Each new chunk enters from 80px right in 0.35s with expo.out, and earlier chunks shift left by half the new chunk width so the group stays centered. 0.18s between chunks, 1s final hold.
```

### English · Codex
```text
Apply phrase push build in <file>. After fonts.ready, measure each chunk offsetWidth and precompute x targets; tweens use duration 0.35, expo.out, gap 0.18s. Capture right after each step (0.7s, 1.0s, final) and check that left and right margins of the group differ by 4px or less.
```

예시 / Example: 문장 밀어 쌓기를 `.hero`에 적용해. / Apply Phrase Push Build to `.hero`.

## 적용 / Application

- HyperFrames: 폭은 fonts.ready 뒤 미리 측정해 x 목표를 배열로 굳힌다. 측정을 렌더 중에 하지 않아야 seek가 결정론이 된다
- ReelForge: 브리프에 마디 배열과 마디 간격, 정지 시간을 싣는다. 내레이션 타이밍이 있으면 마디 시작 시각을 초 단위로 받는다
- Scrolline Deck: 마디 수로 진행률을 나눠 x 목표를 보간한다. 스크롤을 되돌리면 문장이 줄어들며 중앙에 다시 맞는다

조합 / Pair with: [키네틱 비트 · Kinetic Beats](../kinetic-beats/) · [단어 릴레이 · Word Relay](../word-relay/) · [흩어진 글자 조립 · Text Scatter Assemble](../text-scatter-assemble/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/kinetic-center-build/registry-item.json) (MIT) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/adapters/animate-text.md`) (unknown) · [pixel-point/animate-text](https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/kinetic-center-build.json) (unknown) · [pixel-point/animate-text](https://github.com/pixel-point/animate-text) (unknown) · [pixel-point/animate-text](https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/short-slide-down.json) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
