# Nº 065 알림 포위 · Overwhelm Surround

> 클립 렌더 예정 / Clip rendering planned.

**주인공은 고정된 채 알림과 작업 카드가 더 빠르게 주변을 채운다.**

Cards arrive increasingly quickly around a stationary focal subject.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 강조·주의 · EMPHASIS | 중급 | 분위기 | 설명 영상, 숏폼, 발표 | gsap |

다른 이름 / Also known as: 과부하 둘러싸기, 밀집 포위

## 선택 기준 / Selection

과부하와 공간적 압박을 느끼게 한다. / Builds a sense of overload and spatial pressure.

- 업무 과부하 문제를 소개할 때 / Introduce a workload problem.
- 해결책 등장 전 압박을 표현할 때 / Build pressure before presenting a solution.

좋은 예 / Good: 중앙 인물 주변에 카드 12개가 점점 빠르게 도착한다
나쁜 예 / Bad: 카드가 인물 얼굴과 핵심 문장을 완전히 덮는다
주의 / Avoid: 중심 인물과 핵심 문장의 안전 영역을 비워 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 카드 수 | 12 | 8~16 | 중앙 안전 영역 유지 |
| 누적 | 2500ms | 2000~4000ms | 도착 스케줄 길이 |
| 포위 정착 | 1200ms | 800~1600ms | 마지막 카드 정착 |
| 도착 간격 | 600~150ms | 600~150ms | 시간표를 2500ms 안으로 정규화 |

이징 / Ease: `power3.out`

## 구현 / Implementation (GSAP)

```js
const cards = gsap.utils.toArray('.surround-card').slice(0,12);
const weights = cards.map((_,i)=>0.6-i*0.45/11);
const total = weights.reduce((a,b)=>a+b,0);
let at=0;
cards.forEach((card,i)=>{
  const a=i*Math.PI/6;
  tl.fromTo(card,{x:Math.cos(a)*900,y:Math.sin(a)*600,opacity:0},{x:Math.cos(a)*600,y:Math.sin(a)*360,opacity:1,duration:1.2,ease:'power3.out'},at);
  at+=weights[i]/total*2.5;
});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 알림 포위을 적용한다. 카드 12개를 중앙에서 가로 600px, 세로 360px 타원에 놓고 도착 간격 600ms에서 150ms의 비율을 누적 2500ms로 정규화한다. 초기 상태를 명시한 paused 타임라인으로 만들고 고정 좌표와 시간만 사용해 seek를 재현한다.
```

### 한국어 · Codex
```text
<파일>에서 <대상>의 알림 포위 장면에 적용한다. 카드 12개를 중앙에서 가로 600px, 세로 360px 타원에 놓고 도착 간격 600ms에서 150ms의 비율을 누적 2500ms로 정규화한다. 0.93초·2.41초·3.90초 시점을 캡처해 시작 상태, 중간 관계, 최종 정착과 겹침 여부를 확인한다.
```

### English · Claude Code
```text
Apply Overwhelm Surround to <target> in <file>. Place twelve cards on a 600px by 360px elliptical orbit and normalize arrival gaps with a 600ms to 150ms ratio to a 2500ms schedule. Define the initial state and use a paused timeline with fixed coordinates and timings for repeatable seeking.
```

### English · Codex
```text
Implement Overwhelm Surround in the scene for <target> in <file>. Place twelve cards on a 600px by 360px elliptical orbit and normalize arrival gaps with a 600ms to 150ms ratio to a 2500ms schedule. Capture at 0.93s, 2.41s, 3.90s to verify the initial state, intermediate relationships, final settling, and unwanted overlap.
```

예시 / Example: 알림 포위를 `.hero`에 적용해. / Apply Overwhelm Surround to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 알림 포위의 초기 상태와 종료 상태를 함께 기록하고 3.70초까지 seek로 재현한다.
- ReelForge: 씬 워커 브리프에 알림 포위 대상 선택자와 카드 수 12, 누적 2500ms, 포위 정착 1200ms를 싣고 최종 상태 유지 시간을 지정한다.
- Scrolline Deck: 진행률 0~1을 3.70초 구간에 매핑하고 scrub에서는 스프링 대신 power3.out으로 위치를 계산한다.

조합 / Pair with: [알림 스택 · Toast Stack](../toast-stack/) · [레이아웃 자리 양보 · Layout Yield](../layout-yield/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/overwhelm-surround/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/notification-pileup/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/slack-notification-ad/registry-item.json) (Apache-2.0) · local/HyperFrames-skills (`claude-skill:hyperframes-animation/blueprints/overwhelm-surround.md`) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
