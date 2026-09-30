# Nº 603 폴딩 큐브 로더 · Folding Cube Loader

> 클립 렌더 예정 / Clip rendering planned.

**네 개의 작은 면이 차례로 3D 회전하며 접혔다 펼쳐진다.**

Four small panels fold and unfold in sequence.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 중급 | 피드백, 순서·흐름 | 제품 시연, 설명 영상, 웹 UI | css |

다른 이름 / Also known as: 접히는 정사각 로더

## 선택 기준 / Selection

조립되는 면의 순환을 보여 준다. / Suggests a repeating assembly cycle.

- 조립 작업 대기 표시에서 지속 활동을 표시할 때 / Use folding tiles for an assembly-related waiting state.
- 짧은 반복으로 조립되는 면의 순환을 보여 준다 때 / Use a short repeating motion to communicate suggests a repeating assembly cycle.

좋은 예 / Good: 조립 작업 대기 표시에서 네 면이 300ms 간격으로 접힌다
나쁜 예 / Bad: 얇은 글자까지 면과 함께 뒤집어 읽을 수 없게 한다
주의 / Avoid: 얇은 글자까지 면과 함께 뒤집어 읽을 수 없게 한다 상황을 피한다 · 동작 감소 설정에서는 첫 프레임을 고정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 2400ms | 1800~3600ms | 한 번의 반복에 걸리는 시간이다 |
| 격자 | 2x2 | 2x2 | 네 면을 사용한다 |
| 위상차 | 300ms | 200~400ms | 시계 방향으로 지연한다 |
| 원근 거리 | 140px | 120~300px | 작은 로더 크기에서 사용한다 |
| 이징 | ease-in-out | linear \| ease-in-out | 경로 이동은 등속, 맥동은 부드러운 왕복을 쓴다 |

## 구현 / Implementation (GSAP)

```js
.fx { display:grid; grid-template-columns:repeat(2,24px); perspective:140px; }
.fx i { height:24px; background:currentColor; transform-origin:100% 100%; animation:fold 2.4s ease-in-out infinite; animation-delay:calc(var(--i)*-300ms); }
@keyframes fold {
  0%,100% { transform:rotateX(0deg); opacity:1; }
  40%,60% { transform:rotateX(-180deg); opacity:.2; }
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 폴딩 큐브 로더를 적용해. 주기 2400ms, 격자 2x2, 위상차 300ms, 원근 거리 140px, 이징 ease-in-out로 구현해. 예시 코드의 요소 구조를 함께 만들고 하나의 paused 타임라인으로 seek 가능하게 연결해. 동작 감소 설정에서는 첫 프레임을 유지해.
```

### 한국어 · Codex
```text
<파일>의 대기 표시 또는 배경 영역에 폴딩 큐브 로더를 적용해. 주기 2400ms, 격자 2x2, 위상차 300ms, 원근 거리 140px, 이징 ease-in-out를 사용하고 반복 위상을 절대 시간에서 계산해. 0초, 1.2초, 2.4초를 캡처해 중간 변화와 첫 프레임으로의 연결을 확인해.
```

### English · Claude Code
```text
Apply Folding Cube Loader to <target>. Use a 2.4-second cycle, four tiles, 300ms offsets, and 140px perspective, and ease-in-out easing. Include the required element structure and drive the effect with one paused, seekable timeline. Hold the first frame when reduced motion is enabled.
```

### English · Codex
```text
Apply Folding Cube Loader in the waiting indicator or background region of <file>. Use a 2.4-second cycle, four tiles, 300ms offsets, and 140px perspective, and ease-in-out easing; derive loop phase from absolute time. Capture at 0, 1.2, and 2.4 seconds to verify the intermediate change and the return to the starting frame.
```

예시 / Example: 폴딩 큐브 로더를 `.hero`에 적용해. / Apply Folding Cube Loader to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 만들고 seek 시 CSS 애니메이션은 일시 정지하고 currentTime을 타임라인 시간으로 맞춘다. 주기는 2400ms로 고정한다.
- ReelForge: 씬 워커 브리프에 폴딩 큐브 로더, 주기 2400ms, 격자 2x2, 위상차 300ms, 원근 거리 140px를 싣고 씬 길이에서 반복을 자른다.
- Scrolline Deck: 진행률 0~1을 2.4초 한 주기에 매핑한다. scrub은 스프링 대신 ease-out을 쓰고 끝점의 반복 연결을 확인한다.

조합 / Pair with: [로딩 도트 · Loading Dots](../loading-dots/) · [스태거 · Stagger](../stagger/) · [상태 보간 · State Tween](../state-tween/)

출처 / Sources: [tobiasahlin/SpinKit](https://github.com/tobiasahlin/SpinKit) (MIT) · [css-loaders.com](https://css-loaders.com/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
