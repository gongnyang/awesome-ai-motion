# Nº 066 임계값 경고 펄스 · Threshold Pulse

> 클립 렌더 예정 / Clip rendering planned.

**값이 한계에 가까워질수록 숫자가 진해지고 튀어 오른다.**

A counter becomes more prominent and briefly scales up when it reaches a warning threshold.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 강조·주의 · EMPHASIS | 중급 | 피드백, 강조 | 설명 영상, 스크롤덱, 웹 UI | gsap |

다른 이름 / Also known as: Threshold counter pulse, 임계값 숫자 경고

## 선택 기준 / Selection

남은 용량이나 위험 구간을 알린다. / Signals limited remaining capacity or an approaching limit.

- 저장 공간 잔량이 20% 이하로 떨어질 때 / Warn when remaining storage falls below 20 percent.
- 남은 시간이 경고 구간에 진입할 때 / Emphasize a countdown entering its final warning range.

좋은 예 / Good: 잔량이 20%에 도달하면 숫자가 1.12배로 0.2초 커졌다가 원래 크기로 돌아온다.
나쁜 예 / Bad: 임계값 밖에서도 계속 튀어 경고와 정상 상태가 구분되지 않는다.
주의 / Avoid: 색만으로 경고를 전달하지 않는다.

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 임계값 | 20% | 10~30% | 잔량 기준으로 이하에서 경고한다. |
| 최대 배율 | 1.12 | 1.06~1.16 | 숫자 중심을 기준으로 한다. |
| 팝 시간 | 200ms | 120~300ms | 확대와 복귀에 각각 적용한다. |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 끝점을 넘지 않는 이징을 쓴다. |

## 구현 / Implementation (GSAP)

```js
const tl=gsap.timeline({paused:true});
const remaining=20, threshold=20;
if(remaining<=threshold){
  tl.fromTo('.counter',{scale:1,color:'#334155'},{scale:1.12,color:'#b91c1c',duration:0.2,ease:'power2.out'});
  tl.to('.counter',{scale:1,duration:0.2,ease:'power2.inOut'});
}
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 임계값 경고 펄스를 구현해. 값이 한계에 가까워질수록 숫자가 진해지고 튀어 오른다. 임계값 20%, 최대 배율 1.12, 팝 시간 200ms, 이징 power2.out를 적용하고 GSAP 코어의 paused 타임라인 하나로 seek 가능하게 작성해. 색만으로 경고를 전달하지 않는다.
```

### 한국어 · Codex
```text
<파일>의 <대상> 장면에 임계값 경고 펄스를 적용해. 임계값 20%, 최대 배율 1.12, 팝 시간 200ms, 이징 power2.out를 사용하고 다음 동작을 구현해: 수치의 임계 근접도를 color와 스프링 초기 속도에 매핑한다. 플러그인과 Math.random 없이 작성하고 0.1초·0.24초·0.4초를 캡처해 초기 상태, 중간 변화, 최종 상태가 연속적이며 다음 예시와 맞는지 확인해: 잔량이 20%에 도달하면 숫자가 1.12배로 0.2초 커졌다가 원래 크기로 돌아온다.
```

### English · Claude Code
```text
Implement Threshold Pulse for <target> in <file>. A counter becomes more prominent and briefly scales up when it reaches a warning threshold. Use warning threshold: 20%; peak scale: 1.12; pulse duration: 200ms; easing: power2.out in a single paused GSAP core timeline that supports seeking. Use a warning label as well as color.
```

### English · Codex
```text
Apply Threshold Pulse to the <target> scene in <file> using warning threshold: 20%; peak scale: 1.12; pulse duration: 200ms; easing: power2.out. A counter becomes more prominent and briefly scales up when it reaches a warning threshold. Use prepared data or geometry with GSAP core, no plugins, and no Math.random; capture at 0.1, 0.24, 0.4 seconds to verify continuous intermediate geometry, correct endpoints, and identical output after repeated seeks. Use a warning label as well as color.
```

예시 / Example: 임계값 경고 펄스를 `.hero`에 적용해. / Apply Threshold Pulse to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인 하나에 임계값 경고 펄스 상태를 넣고 seek(t)로 0.4초 구간을 재현한다. 현재 시간에서 도형을 계산해 프레임 누적을 피한다.
- ReelForge: 씬 워커 브리프에 임계값 20%, 최대 배율 1.12, 팝 시간 200ms, 이징 power2.out를 싣고 입력 자료와 초기 도형 좌표를 고정한다. 잔량이 20%에 도달하면 숫자가 1.12배로 0.2초 커졌다가 원래 크기로 돌아온다.
- Scrolline Deck: 진행률 0~1을 0.4초 구간에 매핑해 같은 타임라인을 scrub한다. 시간량은 none, 시각 전환은 power2.out을 쓰고 스프링 대신 끝점을 넘지 않는 ease-out을 쓴다.

조합 / Pair with: [카운트업 · Count-up](../count-up/) · [윤곽 펄스 · Outline Pulse](../outline-pulse/)

출처 / Sources: [motion.dev examples](https://motion.dev/examples/react-characters-remaining) (unknown)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
