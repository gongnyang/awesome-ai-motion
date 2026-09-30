# Nº 595 체이싱 도트 · Chasing Dots

> 클립 렌더 예정 / Clip rendering planned.

**여러 점이 원을 따라 돌면서 크기와 간격을 바꾸며 서로를 쫓는다.**

Dots orbit together while their sizes change with phase offsets.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 피드백, 순서·흐름 | 제품 시연, 설명 영상, 웹 UI | css |

다른 이름 / Also known as: 추격 점 로더, Orbit Chase

## 선택 기준 / Selection

끊임없는 순환 작업을 보여 준다. / Signals continuous cyclic processing.

- 파일 처리 표시에서 지속 활동을 표시할 때 / Show that a file operation is still running.
- 짧은 반복으로 끊임없는 순환 작업을 보여 준다 때 / Use a short repeating motion to communicate signals continuous cyclic processing.

좋은 예 / Good: 파일 처리 표시에서 여섯 점이 돌며 차례로 커진다
나쁜 예 / Bad: 실제 처리율 숫자 옆에서 점의 개수를 완료 항목처럼 읽히게 한다
주의 / Avoid: 실제 처리율 숫자 옆에서 점의 개수를 완료 항목처럼 읽히게 한다 상황을 피한다 · 동작 감소 설정에서는 첫 프레임을 고정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 2000ms | 1500~3000ms | 한 번의 반복에 걸리는 시간이다 |
| 점 수 | 6개 | 3~8개 | 원 둘레에 균등 배치한다 |
| 위상차 | 120ms | 80~180ms | 점의 크기 변화에 적용한다 |
| 이징 | ease-in-out | linear \| ease-in-out | 경로 이동은 등속, 맥동은 부드러운 왕복을 쓴다 |

## 구현 / Implementation (GSAP)

```js
.fx { position:relative; width:64px; height:64px; animation:chase 2s linear infinite; }
.fx i { position:absolute; inset:26px; transform:rotate(calc(var(--i)*60deg)) translateX(24px); }
.fx b { display:block; width:12px; height:12px; border-radius:50%; background:currentColor; animation:dot 2s ease-in-out infinite; animation-delay:calc(var(--i)*-120ms); }
@keyframes chase { to { transform:rotate(360deg); } }
@keyframes dot { 0%,100% { transform:scale(.4); } 50% { transform:scale(1); } }
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 체이싱 도트를 적용해. 주기 2000ms, 점 수 6개, 위상차 120ms, 이징 ease-in-out로 구현해. 예시 코드의 요소 구조를 함께 만들고 하나의 paused 타임라인으로 seek 가능하게 연결해. 동작 감소 설정에서는 첫 프레임을 유지해.
```

### 한국어 · Codex
```text
<파일>의 대기 표시 또는 배경 영역에 체이싱 도트를 적용해. 주기 2000ms, 점 수 6개, 위상차 120ms, 이징 ease-in-out를 사용하고 반복 위상을 절대 시간에서 계산해. 0초, 1초, 2초를 캡처해 중간 변화와 첫 프레임으로의 연결을 확인해.
```

### English · Claude Code
```text
Apply Chasing Dots to <target>. Use a 2-second cycle, six dots with 120ms phase offsets, and ease-in-out easing. Include the required element structure and drive the effect with one paused, seekable timeline. Hold the first frame when reduced motion is enabled.
```

### English · Codex
```text
Apply Chasing Dots in the waiting indicator or background region of <file>. Use a 2-second cycle, six dots with 120ms phase offsets, and ease-in-out easing; derive loop phase from absolute time. Capture at 0, 1, and 2 seconds to verify the intermediate change and the return to the starting frame.
```

예시 / Example: 체이싱 도트를 `.hero`에 적용해. / Apply Chasing Dots to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 만들고 seek 시 CSS 애니메이션은 일시 정지하고 currentTime을 타임라인 시간으로 맞춘다. 주기는 2000ms로 고정한다.
- ReelForge: 씬 워커 브리프에 체이싱 도트, 주기 2000ms, 점 수 6개, 위상차 120ms를 싣고 씬 길이에서 반복을 자른다.
- Scrolline Deck: 진행률 0~1을 2초 한 주기에 매핑한다. scrub은 스프링 대신 ease-out을 쓰고 끝점의 반복 연결을 확인한다.

조합 / Pair with: [로딩 도트 · Loading Dots](../loading-dots/) · [스태거 · Stagger](../stagger/) · [상태 보간 · State Tween](../state-tween/)

출처 / Sources: [tobiasahlin/SpinKit](https://github.com/tobiasahlin/SpinKit) (MIT) · [loadingio/css-spinner](https://github.com/loadingio/css-spinner) (CC0 loaders (README; root LICENSE absent)) · [css-loaders.com](https://css-loaders.com/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
