# Nº 155 데이터모시 전환 · Datamosh Transition

> 클립 렌더 예정 / Clip rendering planned.

**가로 띠와 세로 틈이 찢기고 이전 영상 잔해가 늘어 붙으며 다음 화면으로 바뀐다**

Horizontal strips and vertical slits tear, old footage residue smears, and the next screen takes over.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 고급 | 전환, 주목 끌기 | 숏폼, 설명 영상 | webgl |

다른 이름 / Also known as: Strip datamosh, 띠 데이터모시

## 선택 기준 / Selection

압축이 깨진 영상처럼 이전 화면이 늘어 붙으며 다음 장면으로 끌려간다. 파괴감이 강하다 / Produces the friction and destruction of corrupted compressed video.

- 뮤직비디오, 게임, 실험 영상에서 장면을 찢듯 넘길 때 / In music videos, games, and experimental pieces when tearing between scenes
- 충격적인 반전 컷에서 붕괴하는 느낌이 필요할 때 / On a shocking reversal cut that needs a collapsing feel

좋은 예 / Good: 600ms 동안 가로 띠 42개가 서로 다른 거리로 밀려 나가고, 이전 영상의 잔해가 62% 세기로 늘어 붙었다가 다음 화면에 자리를 내준다
나쁜 예 / Bad: 띠가 균일하게 밀려 단순 슬라이드처럼 보이거나, 잔해와 노이즈가 너무 세서 다음 장면이 읽히지 않는다
주의 / Avoid: 잔해 세기는 0.7 이하, 끝 프레임에서는 0으로 정리한다 · 장식용으로 반복하지 않는다. 한 영상에 한두 번만 쓴다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 600ms | 450~800ms | linear |
| 가로 띠 수 | 42 | 24~60 | 띠별 밀림 거리 다름 |
| 세로 틈 수 | 18 | 8~24 | 찢어지는 균열 |
| 잔해 세기 | 0.62 | 0.4~0.7 | 이전 프레임 잔상 |
| 색 분리 | 화면 폭 3.2% | 2~4% | RGB 오프셋 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const h = i => Math.abs(Math.sin(i * 91.7 + 3) * 43758.5) % 1;
for (let i = 0; i < 42; i++) {
  tl.to(`.bar-${i}`, { x: (h(i) - 0.5) * 300, duration: 0.6, ease: 'none' }, 0);
  tl.to(`.bar-${i}`, { opacity: 0, duration: 0.2 }, 0.4);
}
tl.to('.residue', { opacity: 0.62, duration: 0.3, yoyo: true, repeat: 1, ease: 'none' }, 0);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 장면 전환에 데이터모시 전환을 넣어줘. 이전 장면을 가로 띠 42개로 복제해 각 띠를 시드 해시로 정한 -150에서 +150px 사이 거리로 0.6초 동안 linear로 밀고, 0.4초부터 0.2초간 opacity를 0으로 낮춰. 이전 프레임 잔해 레이어는 opacity 0.62까지 올렸다 내려. 난수는 시드 고정 해시만 쓰고 paused 타임라인으로 seek 가능하게 해.
```

### 한국어 · Codex
```text
<파일>에 데이터모시 전환을 구현해. 띠 42개 x=(h(i)-0.5)*300, duration 0.6 linear, 0.4초부터 opacity 0. .residue는 0.62까지 올라갔다 내려오는 yoyo. 0.15초, 0.3초, 0.45초, 0.6초 시점을 캡처해 띠마다 밀림이 다른지, 0.6초에 잔해와 띠가 남지 않는지 확인해.
```

### English · Claude Code
```text
Add a Datamosh Transition to <target>. Duplicate the previous scene into 42 horizontal strips; push each by a seeded-hash offset between -150 and +150px over 0.6s with linear ease, and fade each out over 0.2s starting at 0.4s. Bring a residue layer up to opacity 0.62 and back. Use only a seeded hash for randomness and keep it on a paused, seekable GSAP timeline.
```

### English · Codex
```text
Implement Datamosh Transition in <file>. 42 strips with x=(h(i)-0.5)*300, duration 0.6 linear, opacity to 0 from 0.4s. .residue yoyos to 0.62 and back. Capture at 0.15s, 0.3s, 0.45s, and 0.6s to confirm each strip is displaced differently and that no residue or strips remain at 0.6s.
```

예시 / Example: 데이터모시 전환를 `.hero`에 적용해. / Apply Datamosh Transition to `.hero`.

## 적용 / Application

- HyperFrames: 띠 42개를 이전 장면 clip 복제로 만들고 x 이동량은 시드 해시로 고정한다. 잔해 레이어는 이전 프레임의 복제 하나만 쓴다
- ReelForge: 씬 워커 브리프에 띠 수 42, 잔해 세기 0.62, 색 분리 3.2%, 시드 1을 싣는다. 실제 코덱 오류를 흉내내지 않고 레이어 합성으로 처리하도록 명시한다
- Scrolline Deck: scrub에서는 띠 이동량을 진행률 p에 선형으로 곱하고 잔해는 진행률 0.5에서 정점인 삼각 곡선으로 둔다. 스프링 금지

조합 / Pair with: [글리치 전환 · Glitch Transition](../glitch-transition/) · [코덱 글리치 · Codec Glitch](../codec-glitch/) · [TV 노이즈 전환 · TV Static Transition](../tv-static-transition/)

출처 / Sources: [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/StripDatamoshGlitch.glsl) (MIT) · [mifi/editly](https://github.com/mifi/editly#transition-types) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
