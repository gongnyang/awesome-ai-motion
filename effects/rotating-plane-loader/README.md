# Nº 617 회전 평면 로더 · Rotating Plane Loader

> 클립 렌더 예정 / Clip rendering planned.

**정사각형이 가로와 세로 3D 축을 번갈아 돌아 앞뒤를 보여 준다.**

A square flips around its horizontal and vertical axes in sequence.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 피드백, 순서·흐름 | 제품 시연, 설명 영상, 웹 UI | css |

다른 이름 / Also known as: 뒤집히는 면 로더

## 선택 기준 / Selection

단순한 기하 순환을 보여 준다. / Provides a simple repeating geometric waiting cue.

- 단순한 계산 대기 표시에서 지속 활동을 표시할 때 / Use a minimal geometric indicator during calculation.
- 짧은 반복으로 단순한 기하 순환을 보여 준다 때 / Use a short repeating motion to communicate provides a simple repeating geometric waiting cue.

좋은 예 / Good: 단순한 계산 대기 표시에서 40px 면이 두 축으로 번갈아 뒤집힌다
나쁜 예 / Bad: 읽어야 할 상태 텍스트를 회전 면에 넣는다
주의 / Avoid: 읽어야 할 상태 텍스트를 회전 면에 넣는다 상황을 피한다 · 동작 감소 설정에서는 첫 프레임을 고정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 1200ms | 900~1800ms | 한 번의 반복에 걸리는 시간이다 |
| 회전각 | 180deg | 90~180deg | 두 축을 순서대로 사용한다 |
| 원근 거리 | 120px | 120~300px | 부모 컨테이너에 적용한다 |
| 이징 | ease-in-out | linear \| ease-in-out | 경로 이동은 등속, 맥동은 부드러운 왕복을 쓴다 |

## 구현 / Implementation (GSAP)

```js
.fx { perspective:120px; }
.fx i { display:block; width:40px; height:40px; background:currentColor; animation:plane 1.2s ease-in-out infinite; }
@keyframes plane {
  0% { transform:rotateX(0) rotateY(0); }
  50% { transform:rotateX(180deg) rotateY(0); }
  100% { transform:rotateX(180deg) rotateY(180deg); }
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 회전 평면 로더를 적용해. 주기 1200ms, 회전각 180deg, 원근 거리 120px, 이징 ease-in-out로 구현해. 예시 코드의 요소 구조를 함께 만들고 하나의 paused 타임라인으로 seek 가능하게 연결해. 동작 감소 설정에서는 첫 프레임을 유지해.
```

### 한국어 · Codex
```text
<파일>의 대기 표시 또는 배경 영역에 회전 평면 로더를 적용해. 주기 1200ms, 회전각 180deg, 원근 거리 120px, 이징 ease-in-out를 사용하고 반복 위상을 절대 시간에서 계산해. 0초, 0.6초, 1.2초를 캡처해 중간 변화와 첫 프레임으로의 연결을 확인해.
```

### English · Claude Code
```text
Apply Rotating Plane Loader to <target>. Use a 1.2-second cycle, 180 degree turns on each axis and 120px perspective, and ease-in-out easing. Include the required element structure and drive the effect with one paused, seekable timeline. Hold the first frame when reduced motion is enabled.
```

### English · Codex
```text
Apply Rotating Plane Loader in the waiting indicator or background region of <file>. Use a 1.2-second cycle, 180 degree turns on each axis and 120px perspective, and ease-in-out easing; derive loop phase from absolute time. Capture at 0, 0.6, and 1.2 seconds to verify the intermediate change and the return to the starting frame.
```

예시 / Example: 회전 평면 로더를 `.hero`에 적용해. / Apply Rotating Plane Loader to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 만들고 seek 시 CSS 애니메이션은 일시 정지하고 currentTime을 타임라인 시간으로 맞춘다. 주기는 1200ms로 고정한다.
- ReelForge: 씬 워커 브리프에 회전 평면 로더, 주기 1200ms, 회전각 180deg, 원근 거리 120px를 싣고 씬 길이에서 반복을 자른다.
- Scrolline Deck: 진행률 0~1을 1.2초 한 주기에 매핑한다. scrub은 스프링 대신 ease-out을 쓰고 끝점의 반복 연결을 확인한다.

조합 / Pair with: [로딩 도트 · Loading Dots](../loading-dots/) · [스태거 · Stagger](../stagger/) · [상태 보간 · State Tween](../state-tween/)

출처 / Sources: [tobiasahlin/SpinKit](https://github.com/tobiasahlin/SpinKit) (MIT) · [css-loaders.com](https://css-loaders.com/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
