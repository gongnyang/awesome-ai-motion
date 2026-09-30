# Nº 347 당겨서 새로고침 · Pull to Refresh

> 클립 렌더 예정 / Clip rendering planned.

**리스트를 당길수록 저항이 커지고 임계점에서 로더가 뜬 뒤 원위치로 튕겨 돌아온다.**

A resistant pull reaches a refresh threshold, waits, and returns.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 피드백 | 설명 영상, 제품 시연, 웹 UI | gsap |

다른 이름 / Also known as: 당겨 새로고침

## 선택 기준 / Selection

사용자 조작과 대기, 갱신 완료를 보여준다. / Connects the gesture to loading and completion.

- 목록 갱신 제스처를 설명할 때 / Explain a list refresh gesture.
- 로딩과 완료 상태를 구분할 때 / Distinguish loading from completion.

좋은 예 / Good: 목록을 100px 당기면 로더가 나타나고 갱신 뒤 제자리로 돌아온다
나쁜 예 / Bad: 임계점 전에 로딩이 시작되어 당김과 실행의 관계가 흐려진다
주의 / Avoid: 임계점과 로딩 시작을 서로 다른 시간에 두지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 당김 | 800ms | 600~1200ms | 비선형 저항 |
| 임계 거리 | 100px | 80~140px | 1920x1080 기준 |
| 로딩 | 800ms | 600~1600ms | 고정 시연 시간 |
| 복구 | 500ms | 350~700ms | 원위치 정착 |

이징 / Ease: `back.out(1.2)`

## 구현 / Implementation (GSAP)

```js
tl.to('.refresh-list',{y:100,duration:0.8,ease:'power2.out'},0);
tl.fromTo('.loader',{opacity:0},{opacity:1,duration:0.1},0.8);
tl.to('.loader',{rotation:360,duration:0.8,ease:'none'},0.8);
tl.to('.loader',{opacity:0,duration:0.1},1.6);
tl.to('.refresh-list',{y:0,duration:0.5,ease:'back.out(1.2)'},1.6);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 당겨서 새로고침을 적용한다. 800ms에 100px 임계점에 도착하고 로더를 800ms 회전시킨 다음 500ms에 목록을 복구한다. 초기 상태를 명시한 paused 타임라인으로 만들고 고정 좌표와 시간만 사용해 seek를 재현한다.
```

### 한국어 · Codex
```text
<파일>에서 <대상>의 당겨서 새로고침 장면에 적용한다. 800ms에 100px 임계점에 도착하고 로더를 800ms 회전시킨 다음 500ms에 목록을 복구한다. 0.53초·1.37초·2.30초 시점을 캡처해 시작 상태, 중간 관계, 최종 정착과 겹침 여부를 확인한다.
```

### English · Claude Code
```text
Apply Pull to Refresh to <target> in <file>. Reach a 100px threshold in 800ms, rotate the loader for 800ms, then restore the list in 500ms. Define the initial state and use a paused timeline with fixed coordinates and timings for repeatable seeking.
```

### English · Codex
```text
Implement Pull to Refresh in the scene for <target> in <file>. Reach a 100px threshold in 800ms, rotate the loader for 800ms, then restore the list in 500ms. Capture at 0.53s, 1.37s, 2.30s to verify the initial state, intermediate relationships, final settling, and unwanted overlap.
```

예시 / Example: 당겨서 새로고침를 `.hero`에 적용해. / Apply Pull to Refresh to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 당겨서 새로고침의 초기 상태와 종료 상태를 함께 기록하고 2.10초까지 seek로 재현한다.
- ReelForge: 씬 워커 브리프에 당겨서 새로고침 대상 선택자와 당김 800ms, 임계 거리 100px, 로딩 800ms를 싣고 최종 상태 유지 시간을 지정한다.
- Scrolline Deck: 진행률 0~1을 2.10초 구간에 매핑하고 scrub에서는 스프링 대신 power3.out으로 위치를 계산한다.

조합 / Pair with: [점진적 공개 · Progressive Disclosure](../progressive-disclosure/) · [탄성 경계 복귀 · Elastic Boundary Return](../elastic-boundary-return/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/pull-to-refresh/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/rubber-band-bumper/registry-item.json) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
