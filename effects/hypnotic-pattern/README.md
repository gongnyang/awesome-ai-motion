# Nº 607 회전 패턴 루프 · Hypnotic Pattern

> 클립 렌더 예정 / Clip rendering planned.

**동심원이나 반복 줄무늬가 회전 또는 신축하며 시각적 진동을 만든다.**

Repeated geometric bands rotate to create a rhythmic visual pattern.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 반복·앰비언트 · LOOP & AMBIENT | 기본 | 분위기, 브랜딩 | 설명 영상, 숏폼, 웹 UI | css |

다른 이름 / Also known as: Hypnotic Pattern Loader, 최면 무늬 로더

## 선택 기준 / Selection

강한 몰입과 추상적 진행감을 준다. / Creates abstract momentum and concentrated visual attention.

- 추상적인 음악 전환 화면의 96px 패턴이 일정하게 돈다에서 지속 활동을 표시할 때 / Use a small abstract pattern in a music transition.
- 짧은 반복으로 강한 몰입과 추상적 진행감을 준다 때 / Use a short repeating motion to communicate creates abstract momentum and concentrated visual attention.

좋은 예 / Good: 추상적인 음악 전환 화면의 96px 패턴이 일정하게 돈다
나쁜 예 / Bad: 고대비 패턴으로 화면 전체를 덮어 본문 읽기를 방해한다
주의 / Avoid: 고대비 패턴으로 화면 전체를 덮어 본문 읽기를 방해한다 상황을 피한다 · 동작 감소 설정에서는 첫 프레임을 고정한다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 주기 | 2400ms | 1800~3600ms | 한 번의 반복에 걸리는 시간이다 |
| 무늬 수 | 8겹 | 4~8겹 | 작은 영역 안에 반복한다 |
| 회전각 | 360deg | 180~360deg | 한 주기에 회전하는 각도다 |
| 이징 | linear | linear \| ease-in-out | 경로 이동은 등속, 맥동은 부드러운 왕복을 쓴다 |

## 구현 / Implementation (GSAP)

```js
.fx { width:96px; height:96px; border-radius:50%; background:repeating-conic-gradient(#334155 0deg 22.5deg,#64748b 22.5deg 45deg); animation:pattern 2.4s linear infinite; }
@keyframes pattern {
  to { transform:rotate(360deg); }
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 회전 패턴 루프를 적용해. 주기 2400ms, 무늬 수 8겹, 회전각 360deg, 이징 linear로 구현해. 예시 코드의 요소 구조를 함께 만들고 하나의 paused 타임라인으로 seek 가능하게 연결해. 동작 감소 설정에서는 첫 프레임을 유지해.
```

### 한국어 · Codex
```text
<파일>의 대기 표시 또는 배경 영역에 회전 패턴 루프를 적용해. 주기 2400ms, 무늬 수 8겹, 회전각 360deg, 이징 linear를 사용하고 반복 위상을 절대 시간에서 계산해. 0초, 1.2초, 2.4초를 캡처해 중간 변화와 첫 프레임으로의 연결을 확인해.
```

### English · Claude Code
```text
Apply Hypnotic Pattern to <target>. Use a 2.4-second cycle, eight radial bands and a 360 degree rotation inside a 96px circle, and linear easing. Include the required element structure and drive the effect with one paused, seekable timeline. Hold the first frame when reduced motion is enabled.
```

### English · Codex
```text
Apply Hypnotic Pattern in the waiting indicator or background region of <file>. Use a 2.4-second cycle, eight radial bands and a 360 degree rotation inside a 96px circle, and linear easing; derive loop phase from absolute time. Capture at 0, 1.2, and 2.4 seconds to verify the intermediate change and the return to the starting frame.
```

예시 / Example: 회전 패턴 루프를 `.hero`에 적용해. / Apply Hypnotic Pattern to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인을 만들고 seek 시 CSS 애니메이션은 일시 정지하고 currentTime을 타임라인 시간으로 맞춘다. 주기는 2400ms로 고정한다.
- ReelForge: 씬 워커 브리프에 회전 패턴 루프, 주기 2400ms, 무늬 수 8겹, 회전각 360deg를 싣고 씬 길이에서 반복을 자른다.
- Scrolline Deck: 진행률 0~1을 2.4초 한 주기에 매핑한다. scrub은 스프링 대신 ease-out을 쓰고 끝점의 반복 연결을 확인한다.

조합 / Pair with: [브리딩 루프 · Breathing Loop](../breathing-loop/) · [색 전환 · Color Transition](../color-transition/) · [페이드 · Fade](../fade/)

출처 / Sources: [css-loaders.com](https://css-loaders.com/) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
