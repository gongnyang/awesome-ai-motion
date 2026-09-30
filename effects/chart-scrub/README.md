# Nº 260 차트 스크럽 · Chart Scrub

> 클립 렌더 예정 / Clip rendering planned.

**이미 그려진 차트 위를 추적선과 점이 이동하고 현재 위치의 날짜와 값이 함께 바뀐다.**

A cursor and linked readout travel across a completed chart.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 데이터 · DATA | 중급 | 데이터 증명, 비교 | 설명 영상, 발표, 데이터 스토리 | svg |

다른 이름 / Also known as: 그래프 훑기, 차트 탐색 읽기, chart-scrub-readout, Linked chart time cursor, 차트 공통 시간 커서, Graph linked to moving readout, 그래프와 값 동시 추적

## 선택 기준 / Selection

그래프가 실제 수치를 가진 탐색 대상임을 보여준다. / Makes a chart readable as a sequence of values.

- 월별 매출을 훑으며 커서와 매출 숫자가 함께 이동한다. / Inspect values along an existing chart.
- 그래프가 실제 수치를 가진 탐색 대상임을 보여준다. 기준값과 대상을 함께 표시할 때. / Keep the encoded values, labels, and visual state synchronized.

좋은 예 / Good: 월별 매출을 훑으며 커서와 매출 숫자가 함께 이동한다.
나쁜 예 / Bad: 커서는 6월인데 라벨은 5월 값을 표시한다.
주의 / Avoid: 불규칙 날짜는 실제 시간 간격으로 매핑한다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 2000ms | 1500~3000ms | 탐색을 읽을 시간 확보 |
| 데이터 점 | 20 | 10~40 | 날짜와 값 동기화 |
| 커서 폭 | 2px | 1~4px | 차트 선과 구별 |

이징 / Ease: `power1.inOut`

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true}), s={p:0};
tl.to(s,{p:1,duration:2,ease:'power1.inOut',onUpdate:()=>{
 const f=s.p*(values.length-1),i=Math.min(Math.floor(f),values.length-2);
 const v=values[i]+(values[i+1]-values[i])*(f-i);
 cursor.setAttribute('x1',100+800*s.p);cursor.setAttribute('x2',100+800*s.p);
 dot.setAttribute('cx',100+800*s.p);dot.setAttribute('cy',500-v*4);
 label.textContent=v.toFixed(1);
}});
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 차트 스크럽을 적용해. 동일 진행값으로 선 위치, 데이터 보간 점, 인덱스 라벨을 계산한다. 지속 2000ms; 데이터 점 20; 커서 폭 2px을 적용한다. GSAP 코어의 paused 타임라인 하나로 seek 가능하게 만들고 임의 난수와 타이머를 쓰지 마.
```

### 한국어 · Codex
```text
<파일>의 설명 장면에서 <대상>에 차트 스크럽을 적용해. 동일 진행값으로 선 위치, 데이터 보간 점, 인덱스 라벨을 계산한다. 지속 2000ms; 데이터 점 20; 커서 폭 2px을 적용한다. 0초, 1초, 2초를 캡처해 시작 상태, 중간 진행, 최종 상태를 확인하고 같은 시각으로 다시 seek했을 때 좌표와 라벨이 같은지 검증해.
```

### English · Claude Code
```text
Implement Chart Scrub on <target> in <file>. Scrub 20 samples over 2000ms with a 2px cursor, interpolating the dot and value from the same progress. Use one paused GSAP core timeline, support seeking, and avoid random values and timers.
```

### English · Codex
```text
Implement Chart Scrub on <target> in <file>. Scrub 20 samples over 2000ms with a 2px cursor, interpolating the dot and value from the same progress. Use one paused GSAP core timeline, support seeking, and avoid random values and timers. Capture at 0s, 1s, and 2s to check the initial state, intermediate motion, and final state. Seek to each time again and verify identical geometry and labels.
```

예시 / Example: 차트 스크럽를 `.hero`에 적용해. / Apply Chart Scrub to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 차트 스크럽 상태를 넣고 seek 시 2초의 좌표와 색을 다시 계산한다.
- ReelForge: 씬 워커 브리프에 지속 2000ms; 데이터 점 20; 커서 폭 2px을 싣고 월별 매출을 훑으며 커서와 매출 숫자가 함께 이동한다.
- Scrolline Deck: 진행률 0~1을 2초 구간에 매핑한다. scrub에서는 스프링 대신 power2.out을 쓰고 역방향에서도 라벨과 도형을 함께 갱신한다.

조합 / Pair with: [선 그리기 · Line Draw](../line-draw/) · [카운트업 · Count-up](../count-up/)

출처 / Sources: local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/chart-scrub-readout.md`) (unknown) · [vega/vega](https://vega.github.io/vega/docs/event-streams/) (BSD-3-Clause) · [chartjs/Chart.js](https://www.chartjs.org/docs/latest/configuration/animations.html) (MIT) · [fnando/sparkline](https://github.com/fnando/sparkline) (MIT) · [3b1b/videos](https://github.com/3b1b/videos/blob/master/_2017/eoc/chapter2.py) (CC-BY-NC-SA-4.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
