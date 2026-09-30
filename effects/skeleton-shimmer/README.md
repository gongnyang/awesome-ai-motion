# Nº 588 스켈레톤 시머 · Skeleton Shimmer

> 클립 렌더 예정 / Clip rendering planned.

**내용 자리의 옅은 블록 위로 밝은 띠가 지나간다.**

A bright band travels across muted content placeholders.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 피드백 | 웹 UI, 제품 시연 | css |

다른 이름 / Also known as: 스켈레톤 반짝임, Skeleton Loading, 스켈레톤 로딩, Placeholder Pulse

## 선택 기준 / Selection

정보가 들어올 위치와 대기 상태를 알려준다. / Shows where content will arrive and that loading is in progress.

- 카드 데이터를 기다릴 때 / Indicate that card data is loading.
- 불러올 콘텐츠의 배치를 미리 보여 줄 때 / Preview the layout of content that is still loading.

좋은 예 / Good: 상품 이미지와 제목 자리에 옅은 블록을 놓고 빛을 한 번씩 통과시킨다.
나쁜 예 / Bad: 여러 요소에 동시에 적용해 대기 상태와 완료 상태를 구분하기 어렵게 만든다.
주의 / Avoid: 응답 완료 뒤에도 반복하지 않는다. · 동작 줄이기 설정에서는 정적인 최종 상태를 보여 준다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 시간 | 1800ms | 1260~2520ms | 한 주기 기준 |
| 밝은 띠 폭 | 25% | 15~35% | 내용 블록 너비 기준 |
| 띠 불투명도 | 0.2 | 0.1~0.3 | 밝은 그라디언트 레이어 |

이징 / Ease: `linear`

## 구현 / Implementation (GSAP)

```js
.placeholder { position: relative; overflow: hidden; background: #e5e7eb; }
.effect { position: absolute; inset: 0 auto 0 0; width: 25%; opacity: .2; background: linear-gradient(90deg, transparent, white, transparent); animation: effect 1800ms linear infinite; }
@keyframes effect {
  0%{transform:translateX(-100%)} 100%{transform:translateX(400%)}
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 스켈레톤 시머을 적용해. 지속 1800ms, 밝은 띠 폭 25%, 띠 불투명도 0.2, 이징 linear으로 위 키프레임을 구현하고 최종 상태를 유지해. 1800ms 주기로 반복하고 응답 완료 때 종료해.
```

### 한국어 · Codex
```text
<파일>의 <대상> 스타일에 스켈레톤 시머 키프레임을 추가해. 지속 1800ms, 밝은 띠 폭 25%, 띠 불투명도 0.2, 이징 linear을 적용하고 0초·0.9초·1.8초 시점을 캡처해 시작 상태, 중간 변화, 최종 띠 위치를 확인해. 고정 키프레임으로 재현하고 동작 줄이기 설정을 확인해.
```

### English · Claude Code
```text
Apply Skeleton Shimmer to <target> in <file>. Implement the provided keyframes with 1800ms duration, band width 25%, band opacity 0.2, easing linear. Repeat every 1800ms and stop when loading finishes.
```

### English · Codex
```text
Add Skeleton Shimmer keyframes to the styles for <target> in <file> using 1800ms duration, band width 25%, band opacity 0.2, easing linear. Capture at 0, 0.9, and 1.8 seconds to verify the initial state, intermediate motion, and band position. Use fixed keyframes and verify reduced-motion behavior.
```

예시 / Example: 스켈레톤 시머를 `.hero`에 적용해. / Apply Skeleton Shimmer to `.hero`.

## 적용 / Application

- HyperFrames: CSS 키프레임 값을 paused 타임라인에 옮겨 1.8초 구간을 seek한다. 반복은 전체 영상 길이만큼 고정 횟수로 배치한다.
- ReelForge: 씬 워커 브리프에 스켈레톤 시머의 지속 1800ms, 밝은 띠 폭 25%, 띠 불투명도 0.2, 이징 linear을 싣고 대상 한 요소와 안전 영역을 지정한다.
- Scrolline Deck: 진행률 0~1을 1.8초 동작에 매핑한다. scrub에서는 스프링 대신 ease-out을 사용한다.

조합 / Pair with: [페이드 · Fade](../fade/) · [스태거 · Stagger](../stagger/)

출처 / Sources: [motion.dev examples](https://motion.dev/examples/react-skeleton-shimmer) (unknown) · [shadcn-ui/ui](https://github.com/shadcn-ui/ui) (MIT) · [uiverse-io/galaxy](https://github.com/uiverse-io/galaxy) (MIT) · [magicuidesign/magicui](https://github.com/magicuidesign/magicui) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
