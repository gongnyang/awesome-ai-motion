# Nº 596 점 먹기 로더 · Chomp Loader

> 클립 렌더 예정 / Clip rendering planned.

**입을 벌리는 원형 캐릭터가 연속된 작은 점을 삼킨다.**

A circular character opens its mouth as a row of dots moves into it.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 피드백, 순서·흐름 | 제품 시연, 설명 영상, 웹 UI | css |

다른 이름 / Also known as: Arcade Chomp Loader, 입을 벌려 점 먹기 로더

## 선택 기준 / Selection

대기 시간을 장난스럽게 표현한다. / Makes waiting feel playful.

- 게임 다운로드 대기에서 지속 활동을 표시할 때 / Use a playful waiting cue in a game-related interface.
- 짧은 반복으로 대기 시간을 장난스럽게 표현한다 때 / Use a short repeating motion to communicate makes waiting feel playful.

좋은 예 / Good: 게임 다운로드 대기에서 원형 캐릭터가 20px 간격의 점을 먹는다
나쁜 예 / Bad: 업무 오류 화면에 장난스러운 캐릭터를 넣어 상태의 심각성을 흐린다
주의 / Avoid: 업무 오류 화면에 장난스러운 캐릭터를 넣어 상태의 심각성을 흐린다 상황을 피한다 · 동작 감소 설정에서는 첫 프레임을 고정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 1000ms | 750~1500ms | 한 번의 반복에 걸리는 시간이다 |
| 입각 | 60deg | 40~80deg | 위아래 반원이 각각 30deg 움직인다 |
| 점 간격 | 20px | 16~28px | 점열이 한 주기마다 한 칸 이동한다 |
| 이징 | linear | linear \| ease-in-out | 경로 이동은 등속, 맥동은 부드러운 왕복을 쓴다 |

## 구현 / Implementation (GSAP)

```js
.fx .top,.fx .bottom { width:40px; height:20px; background:currentColor; transform-origin:50% 100%; border-radius:40px 40px 0 0; animation:jaw 1s linear infinite; }
.fx .bottom { rotate:180deg; animation-direction:reverse; }
.fx .dots { animation:food 1s linear infinite; }
@keyframes jaw { 0%,100% { transform:rotate(0); } 50% { transform:rotate(-30deg); } }
@keyframes food { to { transform:translateX(-20px); } }
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 점 먹기 로더를 적용해. 주기 1000ms, 입각 60deg, 점 간격 20px, 이징 linear로 구현해. 예시 코드의 요소 구조를 함께 만들고 하나의 paused 타임라인으로 seek 가능하게 연결해. 동작 감소 설정에서는 첫 프레임을 유지해.
```

### 한국어 · Codex
```text
<파일>의 대기 표시 또는 배경 영역에 점 먹기 로더를 적용해. 주기 1000ms, 입각 60deg, 점 간격 20px, 이징 linear를 사용하고 반복 위상을 절대 시간에서 계산해. 0초, 0.5초, 1초를 캡처해 중간 변화와 첫 프레임으로의 연결을 확인해.
```

### English · Claude Code
```text
Apply Chomp Loader to <target>. Use a 1-second cycle, a 60 degree mouth opening and 20px dot spacing, and linear easing. Include the required element structure and drive the effect with one paused, seekable timeline. Hold the first frame when reduced motion is enabled.
```

### English · Codex
```text
Apply Chomp Loader in the waiting indicator or background region of <file>. Use a 1-second cycle, a 60 degree mouth opening and 20px dot spacing, and linear easing; derive loop phase from absolute time. Capture at 0, 0.5, and 1 seconds to verify the intermediate change and the return to the starting frame.
```

예시 / Example: 점 먹기 로더를 `.hero`에 적용해. / Apply Chomp Loader to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 만들고 seek 시 CSS 애니메이션은 일시 정지하고 currentTime을 타임라인 시간으로 맞춘다. 주기는 1000ms로 고정한다.
- ReelForge: 씬 워커 브리프에 점 먹기 로더, 주기 1000ms, 입각 60deg, 점 간격 20px를 싣고 씬 길이에서 반복을 자른다.
- Scrolline Deck: 진행률 0~1을 1초 한 주기에 매핑한다. scrub은 스프링 대신 ease-out을 쓰고 끝점의 반복 연결을 확인한다.

조합 / Pair with: [로딩 도트 · Loading Dots](../loading-dots/) · [스태거 · Stagger](../stagger/) · [상태 보간 · State Tween](../state-tween/)

출처 / Sources: [css-loaders.com](https://css-loaders.com/) (unknown) · [uiverse-io/galaxy](https://github.com/uiverse-io/galaxy) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
