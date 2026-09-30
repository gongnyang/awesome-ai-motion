# Nº 049 관성 퇴장 · Physical Exit

> 클립 렌더 예정 / Clip rendering planned.

**요소가 회전하거나 가속하면서 화면 밖으로 던져지거나 떨어진다.**

An element accelerates off screen while rotating or falling.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 등장·퇴장 · ENTRANCE & EXIT | 기본 | 주목 끌기, 전환 | 설명 영상, 웹 UI, 숏폼 | gsap |

## 선택 기준 / Selection

퇴장에도 물리적 방향과 무게가 남는다. / Gives an exit direction and physical weight.

- 버린 카드를 화면 밖으로 보낼 때 / Use when presenting physical exit in a content reveal scene.
- 장면의 이전 오브젝트를 정리할 때 / Use for a focused title, image, or card with a clearly visible final state.

좋은 예 / Good: 폐기 카드가 오른쪽으로 가속하며 12도 기울어 사라진다.
나쁜 예 / Bad: 필수 안내가 읽히기 전에 떨어져 사라진다.
주의 / Avoid: 필수 안내가 읽히기 전에 떨어져 사라진다. · 완료 자세에서 내용이 가려지지 않게 한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 0.5s | 0.35~0.7s | 0초부터 시작하는 공개 구간 |
| 퇴장 거리 | 1200px | 800~2200px | 대상 경계가 화면 밖에 도착하도록 조정 |
| 회전 | 12deg | 6~24deg | 이동 방향에 맞춘 기울기 |
| 이징 | power2.in | power2.out, power3.out, sine.inOut | 움직임의 가속과 감속 |

## 구현 / Implementation (GSAP)

```js
gsap.set('.target', {x:0, rotation:0});
tl.to('.target', {x:1200, rotation:12, duration:0.5, ease:'power2.in'}, 0);
tl.set('.target', {visibility:'hidden'}, 0.5);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>에서 <대상>에 관성 퇴장을 적용해. 0.5초, 퇴장 거리 1200px; 회전 12deg, 이징 power2.in로 구현해. paused 타임라인으로 seek 가능하게 하고 완료 자세를 유지해.
```

### 한국어 · Codex
```text
<파일>의 <대상> 레이어에 관성 퇴장을 적용해. 0.5초, 퇴장 거리 1200px; 회전 12deg, power2.in를 사용하고 0초, 0.25초, 0.5초 캡처로 시작값, 중간 변화, 완료 자세를 확인해. 동일 시점을 두 번 seek해 같은 결과인지 검증해.
```

### English · Claude Code
```text
Apply Physical Exit to <target> in <file>. Use a 0.5s segment with power2.in; implement these explicit settings: Exit distance: 1200px, Rotation: 12deg. Use a paused, seekable timeline and hold the final pose.
```

### English · Codex
```text
Apply Physical Exit to the <target> layer in <file> with Exit distance: 1200px, Rotation: 12deg, using the supplied core snippet and a 0.5s segment with power2.in. Capture at 0s, 0.25s, and 0.5s to verify the initial pose, intermediate change, and final pose. Seek to the same timestamp twice and confirm identical output.
```

예시 / Example: 관성 퇴장를 `.hero`에 적용해. / Apply Physical Exit to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 0.5초 구간을 넣고 seek로 자세를 계산한다. 시작값과 완료값을 명시한다.
- ReelForge: 씬 워커 브리프에 관성 퇴장, 0.5초, 퇴장 거리 1200px; 회전 12deg, power2.in를 싣고 대상 레이어를 지정한다.
- Scrolline Deck: 진행률 0~1을 0.5초 구간에 매핑한다. scrub에서는 스프링 대신 ease-out으로 같은 시작값과 완료값을 보간한다.

조합 / Pair with: [페이드 슬라이드 · Fade Slide](../fade-slide/) · [스태거 · Stagger](../stagger/) · [스케일 팝 · Scale Pop](../scale-pop/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/physical-exit/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-other/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/transitions/css-other.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
