# Nº 634 종이 조각 놓기 · Papercut Placement

> 클립 렌더 예정 / Clip rendering planned.

**단어 종이 조각들이 비뚤어진 자세로 툭 놓이고 저프레임으로 조금씩 떠는 스톱모션 자막**

Paper word cutouts are dropped in at crooked angles and jitter at a low frame rate.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 자막·하단 자막 · CAPTIONS | 중급 | 분위기, 주목 끌기 | 숏폼, 설명 영상 | css |

## 선택 기준 / Selection

수공예와 스톱모션의 촉감. 손으로 붙인 듯한 온기와 유머가 있다 / The tactile warmth of craft and stop-motion, with a hand-made humor.

- 수공예·어린이·요리·DIY 톤의 영상 자막 / Captions in craft, kids, cooking or DIY toned videos
- 디지털 느낌을 벗은 따뜻한 타이틀 / Warm titles that shed the digital look

좋은 예 / Good: 단어 조각이 steps(2)로 톡 놓이고 -2에서 +2도 사이 시드 회전을 가진 채 5fps로 미세하게 떤다
나쁜 예 / Bad: 부드러운 이징으로 움직이고 회전이 모두 0도라 종이 느낌이 사라진다
주의 / Avoid: 이징은 steps만 쓴다. 부드러운 보간이 섞이면 스톱모션이 아니다 · 회전은 +/-2도 이내. 크면 정보가 어수선해진다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 등장 | steps(2) | steps(2~3) | 두 프레임에 걸쳐 놓임 |
| 떨림 프레임 | 5fps | 4~8fps | 저프레임 갱신 |
| 회전 | +/-2도 | 1~3도 | 조각마다 시드 고정 |
| 그림자 | 2px 3px | 1~4px | 종이 두께 |

이징 / Ease: `steps(2)`

## 구현 / Implementation (GSAP)

```js
pieces.forEach((p, i) => {
  const rot = ((i * 7919) % 5) - 2; // 시드 회전 -2..2
  tl.fromTo(p, {y:-30, opacity:0, rotation:rot}, {y:0, opacity:1, duration:0.2, ease:'steps(2)'}, 0.2 + i * 0.25);
});
// 5fps 떨림: 0.2초마다 미세 오프셋 시드 배열을 set
for (let f = 0; f < 15; f++) tl.set(pieces, {x:(i) => ((f * 31 + i * 17) % 3) - 1}, 0.2 * f);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 자막을 종이 조각 스톱모션으로 만들어줘. 단어마다 종이 배경 조각(그림자 2px 3px)을 만들고 조각 i는 -2~+2도 시드 회전, y -30px에서 steps(2)로 0.2초 안에 놓여. 이후 5fps로 x를 -1~+1px씩 갱신해 떨리게 하고 조각 간격은 0.25초.
```

### 한국어 · Codex
```text
<파일>에 papercut placement를 적용해. 조각마다 rotation=((i*7919)%5)-2, y -30에서 0을 0.2초 steps(2), 조각 간격 0.25초. 0.2초마다 x 오프셋을 시드 배열로 set. 0.3초·0.6초·1.5초를 캡처해 단계적으로 놓임, 회전 다양성, 두 번 렌더한 프레임 동일성을 확인해.
```

### English · Claude Code
```text
Make the caption in <target> a stop-motion paper cutout. Each word gets a paper chip (2px 3px shadow) with a seeded rotation of -2 to +2 degrees, placed from y -30px with steps(2) in 0.2s. Afterward jitter x by -1 to +1px at 5fps; chips arrive 0.25s apart.
```

### English · Codex
```text
Apply papercut placement in <file>. Rotation=((i*7919)%5)-2 per chip, y -30 to 0 over 0.2s steps(2), 0.25s between chips. Set a seeded x offset every 0.2s. Capture at 0.3s, 0.6s and 1.5s and verify stepped placement, rotation variety, and identical frames across two renders.
```

예시 / Example: 종이 조각 놓기를 `.hero`에 적용해. / Apply Papercut Placement to `.hero`.

## 적용 / Application

- HyperFrames: 5fps 떨림은 0.2초 간격 set으로 굳힌다. 30fps 렌더에서도 6프레임마다 갱신되어 스톱모션 리듬이 유지된다
- ReelForge: 브리프에 조각 배열, 등장 steps(2), 떨림 5fps, 회전 +/-2도, 종이 텍스처 이미지 경로를 싣는다
- Scrolline Deck: 진행률을 5단계 이하로 양자화해 단계마다 조각을 놓는다. 부드러운 보간이 아니라 단계 전환이라 스크롤 중에도 스톱모션답다

조합 / Pair with: [셰이크 · Shake](../shake/) · [스크리블 와이프 · Scribble Wipe](../scribble-wipe/) · [단어 팝 자막 · Word Pop Caption](../word-pop-caption/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/stop-motion-cadence/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:embedded-captions/CATALOG.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
