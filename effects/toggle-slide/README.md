# Nº 355 토글 슬라이드 · Toggle Slide

> 클립 렌더 예정 / Clip rendering planned.

**스위치 손잡이가 이동해 약간 지나쳤다 돌아오고 트랙 색이 바뀐다.**

A switch thumb travels and settles as the track changes color.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 기본 | 피드백 | 설명 영상, 제품 시연, 웹 UI | css |

다른 이름 / Also known as: Toggle flip, 토글 전환, Switch thumb travel, 스위치 손잡이 이동, Animated Toggle, 토글 상태 전환

## 선택 기준 / Selection

켜짐과 꺼짐의 전환을 촉각적으로 전달한다. / Provides a tactile cue for an on or off state.

- 설정의 켜짐 상태를 안내할 때 / Explain an enabled setting.
- 두 가지 옵션의 전환을 시연할 때 / Demonstrate switching between two options.

좋은 예 / Good: 손잡이가 40px 이동하고 6% 지나쳤다가 켜짐 위치에 멈춘다
나쁜 예 / Bad: 트랙만 색이 바뀌어 선택 상태가 색각에 의존한다
주의 / Avoid: 상태 구분을 색상 하나에 의존하지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 손잡이 이동 | 400ms | 250~500ms | 정착 포함 |
| 이동 거리 | 40px | 24~64px | 트랙 내부 이동폭 |
| 오버슛 | 6% | 0~8% | 최종 이동폭 기준 |
| 트랙 색 | 200ms | 150~300ms | 켜짐 색 전환 |

이징 / Ease: `power3.out`

## 구현 / Implementation (GSAP)

```js
.thumb { animation: switch-on 400ms both; }
.track { transition: background-color 200ms; }
.track.on { background-color: #2563eb; }
@keyframes switch-on {
  0% { transform: translateX(0); }
  70% { transform: translateX(42.4px); }
  100% { transform: translateX(40px); }
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 토글 슬라이드을 적용한다. 손잡이를 400ms 동안 40px 이동하고 42.4px에서 되돌아오며 트랙 색은 200ms에 바꾼다. 초기 상태를 명시한 paused 타임라인으로 만들고 고정 좌표와 시간만 사용해 seek를 재현한다.
```

### 한국어 · Codex
```text
<파일>에서 <대상>의 토글 슬라이드 장면에 적용한다. 손잡이를 400ms 동안 40px 이동하고 42.4px에서 되돌아오며 트랙 색은 200ms에 바꾼다. 0.10초·0.26초·0.60초 시점을 캡처해 시작 상태, 중간 관계, 최종 정착과 겹침 여부를 확인한다.
```

### English · Claude Code
```text
Apply Toggle Slide to <target> in <file>. Move the thumb 40px over 400ms with a 42.4px overshoot, and change the track color over 200ms. Define the initial state and use a paused timeline with fixed coordinates and timings for repeatable seeking.
```

### English · Codex
```text
Implement Toggle Slide in the scene for <target> in <file>. Move the thumb 40px over 400ms with a 42.4px overshoot, and change the track color over 200ms. Capture at 0.10s, 0.26s, 0.60s to verify the initial state, intermediate relationships, final settling, and unwanted overlap.
```

예시 / Example: 토글 슬라이드를 `.hero`에 적용해. / Apply Toggle Slide to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 토글 슬라이드의 초기 상태와 종료 상태를 함께 기록하고 0.40초까지 seek로 재현한다.
- ReelForge: 씬 워커 브리프에 토글 슬라이드 대상 선택자와 손잡이 이동 400ms, 이동 거리 40px, 오버슛 6%를 싣고 최종 상태 유지 시간을 지정한다.
- Scrolline Deck: 진행률 0~1을 0.40초 구간에 매핑하고 scrub에서는 스프링 대신 power3.out으로 위치를 계산한다.

조합 / Pair with: [컨트롤 연동 · Control Target Sync](../control-target-sync/) · [커서 이동과 클릭 · Cursor Move & Click](../cursor-click/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/toggle-flip/registry-item.json) (Apache-2.0) · [motion.dev examples](https://motion.dev/examples/react-radix-switch) (unknown) · [pmndrs/react-spring](https://www.react-spring.dev/examples) (MIT) · [shadcn-ui/ui](https://github.com/shadcn-ui/ui) (MIT) · [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) (MIT + Commons Clause v1.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
