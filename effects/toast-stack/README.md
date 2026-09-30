# Nº 354 알림 스택 · Toast Stack

> 클립 렌더 예정 / Clip rendering planned.

**새 알림이 가장자리에서 들어와 기존 알림을 밀거나 겹쳐 쌓이고 퇴장하면 남은 알림이 재정렬된다.**

Toasts enter, stack, and close gaps after dismissal.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 피드백 | 설명 영상, 제품 시연, 웹 UI | gsap |

다른 이름 / Also known as: Notification stack, 알림 쌓기, Toast stack reshuffle, 알림 스택 재정렬, Toast Slide, 토스트 알림

## 선택 기준 / Selection

도착한 사건의 수와 우선순위를 보여준다. / Shows incoming events while preserving their order.

- 여러 작업 완료를 알려줄 때 / Report multiple completed tasks.
- 연속 도착한 사건의 우선순위를 보여줄 때 / Show the priority of incoming events.

좋은 예 / Good: 12px 간격으로 알림 3개가 쌓이고 첫 알림 퇴장 후 빈자리가 닫힌다
나쁜 예 / Bad: 알림이 중요한 버튼을 덮고 계속 늘어난다
주의 / Avoid: 동시에 읽을 알림은 3개 이내로 제한한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 등장 | 350ms | 250~450ms | 오른쪽에서 진입 |
| 유지 | 2500ms | 2000~4000ms | 짧은 문장 읽기 |
| 퇴장 | 250ms | 180~350ms | 오른쪽으로 퇴장 |
| 카드 간격 | 12px | 8~24px | 스택 여백 |
| 카드 높이 | 96px | 72~144px | 재배치 계산 기준 |

이징 / Ease: `power3.out`

## 구현 / Implementation (GSAP)

```js
gsap.set('.toast',{x:400,opacity:0});
tl.to('.toast',{x:0,opacity:1,duration:0.35,ease:'power3.out'},0);
tl.to('.toast',{x:400,opacity:0,duration:0.25},2.85);
tl.to('.toast-next',{y:-108,duration:0.35,ease:'power3.out'},3.1);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 알림 스택을 적용한다. 알림을 350ms 등장, 2500ms 유지, 250ms 퇴장시키고 높이 96px와 여백 12px만큼 후속 알림을 재배치한다. 초기 상태를 명시한 paused 타임라인으로 만들고 고정 좌표와 시간만 사용해 seek를 재현한다.
```

### 한국어 · Codex
```text
<파일>에서 <대상>의 알림 스택 장면에 적용한다. 알림을 350ms 등장, 2500ms 유지, 250ms 퇴장시키고 높이 96px와 여백 12px만큼 후속 알림을 재배치한다. 0.86초·2.24초·3.65초 시점을 캡처해 시작 상태, 중간 관계, 최종 정착과 겹침 여부를 확인한다.
```

### English · Claude Code
```text
Apply Toast Stack to <target> in <file>. Enter a toast in 350ms, hold for 2500ms, exit in 250ms, then close a 108px gap formed by its 96px height and 12px spacing. Define the initial state and use a paused timeline with fixed coordinates and timings for repeatable seeking.
```

### English · Codex
```text
Implement Toast Stack in the scene for <target> in <file>. Enter a toast in 350ms, hold for 2500ms, exit in 250ms, then close a 108px gap formed by its 96px height and 12px spacing. Capture at 0.86s, 2.24s, 3.65s to verify the initial state, intermediate relationships, final settling, and unwanted overlap.
```

예시 / Example: 알림 스택를 `.hero`에 적용해. / Apply Toast Stack to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 알림 스택의 초기 상태와 종료 상태를 함께 기록하고 3.45초까지 seek로 재현한다.
- ReelForge: 씬 워커 브리프에 알림 스택 대상 선택자와 등장 350ms, 유지 2500ms, 퇴장 250ms를 싣고 최종 상태 유지 시간을 지정한다.
- Scrolline Deck: 진행률 0~1을 3.45초 구간에 매핑하고 scrub에서는 스프링 대신 power3.out으로 위치를 계산한다.

조합 / Pair with: [레이아웃 재배치 · Layout Reflow](../layout-reflow/) · [커서 이동과 클릭 · Cursor Move & Click](../cursor-click/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/native-notification-pop/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/notification-stack/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/notification-cascade/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/macos-notification/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/liquid-glass-notification/registry-item.json) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
