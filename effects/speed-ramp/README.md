# Nº 199 스피드 램프 · Speed Ramp

> 클립 렌더 예정 / Clip rendering planned.

**이미 진행 중인 동작이나 영상의 재생 속도가 느려졌다 빨라지며 중요한 순간에 다시 감속한다.**

Vary playback speed to slow down the peak of an action and accelerate surrounding movement.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 전환·컷 · TRANSITIONS | 중급 | 설명, 순서·흐름 | 설명 영상, 스크롤덱, 제품 시연 | canvas |

다른 이름 / Also known as: 속도 램프, speed-ramp-density

## 선택 기준 / Selection

동작의 절정에 시간을 집중시키고 리듬을 바꾼다. / Concentrates attention on the action peak and changes rhythm.

- 동작 절정에 시간을 집중할 때 / Spend more time on the peak of an action.
- 제품 시연의 반복 구간을 빠르게 넘길 때 / Accelerate repetitive parts of a product demonstration.

좋은 예 / Good: 접근은 4배로 넘기고 절정 800ms는 0.25배로 읽힌다.
나쁜 예 / Bad: 재생 속도만 바꾸고 원본 시간을 다시 계산하지 않아 seek마다 다른 프레임이 나온다.
주의 / Avoid: 음성 설명과 자막은 별도 시간축으로 유지한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 총 지속 | 2000ms | 1500~3000ms | 시간 매핑 전체 길이 |
| 속도 범위 | 0.25~4배 | 0.25~4배 | 원본 시간 대비 |
| 속도 전환 | 300ms | 200~500ms | 속도를 연속 보간 |
| 절정 구간 | 800ms | 500~1000ms | 느린 속도로 세부를 읽기 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
const tl = gsap.timeline({paused:true}), s = {t:0};
const v = t=>t<0.3 ? 4+(0.25-4)*t/0.3 : t<1.1 ? 0.25 : t<1.4 ? 0.25+(4-0.25)*(t-1.1)/0.3 : 4;
const sourceTime = t=>{let sum=0;const n=400,dt=t/n; for(let i=0;i<n;i++) sum+=v((i+0.5)*dt)*dt; return sum;};
tl.to(s, {t:2, duration:2, ease:'none', onUpdate:()=>{
  drawSourceAt(sourceTime(s.t));
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 스피드 램프를 적용해. Canvas에서 속도 곡선을 적분한 원본 시간으로 프레임을 선택하거나 GSAP 코어 진행값에 같은 시간 매핑을 적용한다. 총 지속 2000ms; 속도 범위 0.25~4배; 속도 전환 300ms; 절정 구간 800ms. 이징은 none로 하고 GSAP 코어 paused 타임라인으로 역방향 seek도 같은 상태를 만들게 해.
```

### 한국어 · Codex
```text
<파일>의 대상 장면에 스피드 램프를 적용해. Canvas에서 속도 곡선을 적분한 원본 시간으로 프레임을 선택하거나 GSAP 코어 진행값에 같은 시간 매핑을 적용한다. 총 지속 2000ms; 속도 범위 0.25~4배; 속도 전환 300ms; 절정 구간 800ms. 이징은 none를 사용해. 0초·1.0초·2초 시점을 캡처하고 시작 상태, 중간 변화, 끝 상태가 정의와 일치하는지 확인해. 같은 시점을 역방향 seek해서도 같은 화면인지 검증해.
```

### English · Claude Code
```text
Apply Speed Ramp to <target> in <file>. Integrate a continuous speed curve over 2000ms: ramp from 4x to 0.25x in 300ms, hold slow motion for 800ms, then ramp back to 4x in 300ms. Draw the source at the integrated time for deterministic seeking. Use none and a paused GSAP core timeline that produces identical states when seeking backward.
```

### English · Codex
```text
Apply Speed Ramp to the target scene in <file>. Integrate a continuous speed curve over 2000ms: ramp from 4x to 0.25x in 300ms, hold slow motion for 800ms, then ramp back to 4x in 300ms. Draw the source at the integrated time for deterministic seeking. Use none. Capture at 0, 1.0, and 2 seconds to verify the initial state, the defining intermediate change, and the final state. Seek backward to the same times and compare the images.
```

예시 / Example: 스피드 램프를 `.hero`에 적용해. / Apply Speed Ramp to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에서 2초 진행값을 구동하고 seek마다 좌표와 렌더 상태를 다시 계산한다.
- ReelForge: 씬 워커 브리프에 총 지속 2000ms; 속도 범위 0.25~4배; 속도 전환 300ms; 절정 구간 800ms를 싣고 대상 좌표계와 도착 상태를 명시한다.
- Scrolline Deck: 진행률 0~1을 2초 타임라인에 매핑하고 scrub에서는 스프링 대신 ease-out 또는 선형 진행을 쓴다.

조합 / Pair with: [프리즈 컷 · Freeze Cut](../freeze-cut/) · [모션 블러 · Motion Blur](../motion-blur/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/beat-freeze-cut/registry-item.json) (Apache-2.0) · gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/07-stylize-time.md#speed-ramp-density`) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:hyperframes-core/references/creator-editing-recipes.md`) (unknown) · local/music-to-video (`claude-skill:music-to-video/references/template-catalog.md#roll-flipbook-word-cycle`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
