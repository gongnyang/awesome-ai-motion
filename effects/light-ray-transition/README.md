# Nº 175 광선 전환 · Light Ray Transition

> 클립 렌더 예정 / Clip rendering planned.

**한 지점에서 광선이 길게 뻗어 화면을 덮고 다음 장면으로 걷힌다**

Rays extend from a single point, cover the frame, and clear to the next scene.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 전환, 주목 끌기 | 숏폼, 제품 시연, 설명 영상 | webgl |

다른 이름 / Also known as: Light ray burst, 광선 폭발 전환

## 선택 기준 / Selection

한 점에서 광선이 뻗어 화면을 덮고 다음 장면으로 걷힌다. 에너지가 퍼지는 공개 연출이다 / Conveys a strong reveal and spreading energy.

- 제품이나 로고를 드러내기 직전에 에너지가 폭발하듯 화면을 바꿀 때 / Just before revealing a product or logo, to change scenes with an energy burst
- 챕터 시작에서 강한 도입을 원할 때 / To open a chapter with a strong entrance

좋은 예 / Good: 화면 중앙의 한 점에서 광선 24개가 300ms 동안 뻗어 화면을 덮고, 300ms에 걸쳐 걷히며 다음 장면이 드러난다
나쁜 예 / Bad: 광선이 너무 굵어 그냥 흰 화면이 되거나, 광원이 화면 밖이라 방향이 어색하다
주의 / Avoid: 광선은 20~32개, 각 폭은 좁게 · 전환 중 텍스트를 읽어야 하는 장면에서는 쓰지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 600ms | 450~800ms | easeOutCubic |
| 광선 수 | 24 | 16~32 | 방사형 |
| 뻗음 시간 | 300ms | 200~350ms | 피크 이전 |
| 걷힘 시간 | 300ms | 250~400ms | 피크 이후 |
| 피크 밝기 | 1.6 | 1.2~2.0 | 가산 합성 |

이징 / Ease: `power3.out`

## 구현 / Implementation (GSAP)

```js
const R = 24;
for (let i = 0; i < R; i++) {
  tl.fromTo(`.ray-${i}`, { scaleY: 0, rotation: i * 360 / R }, { scaleY: 1, duration: 0.3, ease: 'power3.out' }, 0);
}
tl.set('.prev', { autoAlpha: 0 }, 0.3).set('.next', { autoAlpha: 1 }, 0.3);
tl.to('.rays', { opacity: 0, duration: 0.3, ease: 'power2.in' }, 0.3);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면 전환에 광선 전환을 넣어줘. 화면 중앙에서 그라디언트 막대 24개를 rotation i*15도로 배치하고, 0.3초 동안 scaleY 0에서 1로 power3.out으로 뻗게 해. 0.3초에 장면을 교체하고 0.3초부터 0.3초 동안 광선 전체 opacity를 0으로 걷어. 난수는 쓰지 말고 paused 타임라인에서 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 광선 전환을 구현해. .ray-i 24개 rotation i*15, scaleY 0에서 1 (0.3초 power3.out), 0.3초에 장면 교체, .rays opacity 1에서 0 (0.3초부터 0.3초). 0.15초, 0.3초, 0.45초, 0.6초 시점을 캡처해 정점에 광선이 화면을 덮는지, 0.6초에 광선이 없는지 확인해.
```

### English · Claude Code
```text
Add a Light Ray Transition to <target>. Place 24 gradient bars at the frame center with rotation i*15deg and scale their Y from 0 to 1 over 0.3s with power3.out. Swap scenes at 0.3s and fade the whole ray group to opacity 0 over the next 0.3s. No randomness, on a paused seekable timeline.
```

### English · Codex
```text
Implement Light Ray Transition in <file>. 24 .ray-i elements rotation i*15, scaleY 0 to 1 over 0.3s power3.out; swap scenes at 0.3s; .rays opacity 1 to 0 from 0.3s for 0.3s. Capture at 0.15s, 0.3s, 0.45s, and 0.6s to confirm rays cover the frame at the peak and none remain at 0.6s.
```

예시 / Example: 광선 전환를 `.hero`에 적용해. / Apply Light Ray Transition to `.hero`.

## 적용 / Application

- HyperFrames: 광선은 미리 만든 그라디언트 막대 24개를 rotation으로 배치하고 scaleY만 보간한다. 난수 없이 seek 가능
- ReelForge: 씬 워커 브리프에 광원 위치, 광선 수 24, 피크 시각 300ms를 싣는다
- Scrolline Deck: scrub에서는 진행률 0~0.5에 뻗음, 0.5~1에 걷힘으로 나누고 컷은 0.5에서 교체한다

조합 / Pair with: [빛내림 · God Rays](../god-rays/) · [렌즈 플레어 전환 · Lens Flare Transition](../lens-flare-transition/) · [줌 플래시 · Zoom Flash](../zoom-flash/)

출처 / Sources: [Adobe](https://helpx.adobe.com/premiere/desktop/add-video-effects/types-of-effects/transitions.html) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
