# Nº 270 간트 시간 진행 · Gantt Progress

> 클립 렌더 예정 / Clip rendering planned.

**시간선이 작업 막대를 지나가고 해당 작업의 채워진 부분이 늘어난다.**

A time cursor crosses task bars while their completed portions grow.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 비교, 데이터 증명 | 설명 영상, 데이터 스토리, 발표 | svg |

## 선택 기준 / Selection

작업의 기간과 동시 진행 관계를 읽는다. / Makes task durations and overlapping schedules readable.

- 프로젝트 작업의 동시 진행을 설명할 때 / Explain overlapping tasks in a project schedule.
- 계획 일정에 실제 진행 상황을 겹쳐 볼 때 / Replay actual completion against planned dates.

좋은 예 / Good: 여섯 작업의 시작과 종료를 고정하고 5초 동안 시간선과 작업별 채움을 함께 갱신한다.
나쁜 예 / Bad: 각 막대를 같은 속도로 채워 서로 다른 작업 기간이 같아 보인다.
주의 / Avoid: 완료 비율과 경과 시간 비율을 혼동하지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 작업 수 | 6개 | 3~10개 | 행별 시작과 종료를 기록한다. |
| 재생 시간 | 5000ms | 3000~8000ms | 전체 시간축을 통과하는 시간이다. |
| 시간축 폭 | 1200px | 800~1500px | 1920px 화면에서 라벨 공간을 남긴다. |
| 이징 | none | none \| power2.out \| power2.inOut | 데이터의 시간 진행은 none을 유지한다. |

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true}), state={p:0};
const tasks=[{start:0,end:0.5},{start:0.2,end:0.8},{start:0.6,end:1},{start:0.1,end:0.4},{start:0.35,end:0.7},{start:0.7,end:0.95}];
tl.to(state,{p:1,duration:5,ease:'none',onUpdate:()=>{
  gsap.set('.time-cursor',{x:state.p*1200});
  tasks.forEach((t,i)=>gsap.set('.fill-'+i,{scaleX:Math.max(0,Math.min(1,(state.p-t.start)/(t.end-t.start))),transformOrigin:'left center'}));
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 간트 시간 진행를 구현해. 시간선이 작업 막대를 지나가고 해당 작업의 채워진 부분이 늘어난다. 작업 수 6개, 재생 시간 5000ms, 시간축 폭 1200px, 이징 none를 적용하고 GSAP 코어의 paused 타임라인 하나로 seek 가능하게 작성해. 완료 비율과 경과 시간 비율을 혼동하지 않는다.
```

### 한국어 · Codex
```text
<파일>의 <대상> 장면에 간트 시간 진행를 적용해. 작업 수 6개, 재생 시간 5000ms, 시간축 폭 1200px, 이징 none를 사용하고 다음 동작을 구현해: SVG 시간축 위치를 공통 진행값으로 두고 작업별 채움 clip을 계산한다. 플러그인과 Math.random 없이 작성하고 1.25초·3.0초·5초를 캡처해 초기 상태, 중간 변화, 최종 상태가 연속적이며 다음 예시와 맞는지 확인해: 여섯 작업의 시작과 종료를 고정하고 5초 동안 시간선과 작업별 채움을 함께 갱신한다.
```

### English · Claude Code
```text
Implement Gantt Progress for <target> in <file>. A time cursor crosses task bars while their completed portions grow. Use task count: 6; playback duration: 5000ms; time-axis width: 1200px; easing: none in a single paused GSAP core timeline that supports seeking. Distinguish elapsed schedule time from actual completion.
```

### English · Codex
```text
Apply Gantt Progress to the <target> scene in <file> using task count: 6; playback duration: 5000ms; time-axis width: 1200px; easing: none. A time cursor crosses task bars while their completed portions grow. Use prepared data or geometry with GSAP core, no plugins, and no Math.random; capture at 1.25, 3.0, 5 seconds to verify continuous intermediate geometry, correct endpoints, and identical output after repeated seeks. Distinguish elapsed schedule time from actual completion.
```

예시 / Example: 간트 시간 진행를 `.hero`에 적용해. / Apply Gantt Progress to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인 하나에 간트 시간 진행 상태를 넣고 seek(t)로 5초 구간을 재현한다. 현재 시간에서 도형을 계산해 프레임 누적을 피한다.
- ReelForge: 씬 워커 브리프에 작업 수 6개, 재생 시간 5000ms, 시간축 폭 1200px, 이징 none를 싣고 입력 자료와 초기 도형 좌표를 고정한다. 여섯 작업의 시작과 종료를 고정하고 5초 동안 시간선과 작업별 채움을 함께 갱신한다.
- Scrolline Deck: 진행률 0~1을 5초 구간에 매핑해 같은 타임라인을 scrub한다. 시간량은 none, 시각 전환은 power2.out을 쓰고 스프링 대신 끝점을 넘지 않는 ease-out을 쓴다.

조합 / Pair with: [타임라인 사건 전개 · Timeline Scrub](../timeline-scrub/) · [주석 등장 · Annotation Callout](../annotation-callout/)

출처 / Sources: local/bookforge (`claude-skill:bookforge/references/diagrams.md`) (MIT)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
