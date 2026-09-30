# Nº 353 터미널 실행 시연 · Terminal Run

> 클립 렌더 예정 / Clip rendering planned.

**명령이 입력되고 잠시 멈춘 뒤 로그가 줄마다 출력되어 새 프롬프트가 생긴다.**

A command is typed, executed, and followed by sequential output.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 설명 | 설명 영상, 제품 시연, 웹 UI | gsap |

다른 이름 / Also known as: 터미널 실행

## 선택 기준 / Selection

명령과 실행 결과의 인과 관계를 보여준다. / Connects a command to its execution result.

- 설치 명령과 결과를 소개할 때 / Introduce installation commands and results.
- 자동화 실행 과정을 설명할 때 / Explain an automated execution sequence.

좋은 예 / Good: 12자 명령 입력 후 300ms 기다리고 로그 3줄을 180ms 간격으로 보여준다
나쁜 예 / Bad: 실행 전에 성공 로그가 나타나 명령과 결과가 뒤섞인다
주의 / Avoid: 실제 출력처럼 보이는 임의 성공 수치를 넣지 않는다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 문자 간격 | 50ms | 30~80ms | 명령 12자 기준 |
| 실행 대기 | 300ms | 200~600ms | 입력과 출력 분리 |
| 로그 간격 | 180ms | 120~350ms | 줄별 읽기 시간 |
| 완료 유지 | 1000ms | 800~2000ms | 결과를 읽는 시간 |

이징 / Ease: `none`

## 구현 / Implementation (GSAP)

```js
gsap.set(['.command-char','.log','.next-prompt'],{opacity:0});
tl.to('.command-char',{opacity:1,duration:0,stagger:0.05},0);
tl.to('.log',{opacity:1,duration:0,stagger:0.18},0.9);
tl.set('.next-prompt',{opacity:1},1.44);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<파일>의 <대상>에 터미널 실행 시연을 적용한다. 명령을 12자 단위 요소로 나누고 50ms 간격 입력, 300ms 대기, 180ms 간격 로그 3줄을 배치한다. 초기 상태를 명시한 paused 타임라인으로 만들고 고정 좌표와 시간만 사용해 seek를 재현한다.
```

### 한국어 · Codex
```text
<파일>에서 <대상>의 터미널 실행 시연 장면에 적용한다. 명령을 12자 단위 요소로 나누고 50ms 간격 입력, 300ms 대기, 180ms 간격 로그 3줄을 배치한다. 0.36초·0.94초·1.64초 시점을 캡처해 시작 상태, 중간 관계, 최종 정착과 겹침 여부를 확인한다.
```

### English · Claude Code
```text
Apply Terminal Run to <target> in <file>. Split a 12-character command into spans, reveal each at 50ms intervals, wait 300ms, then reveal three log lines 180ms apart. Define the initial state and use a paused timeline with fixed coordinates and timings for repeatable seeking.
```

### English · Codex
```text
Implement Terminal Run in the scene for <target> in <file>. Split a 12-character command into spans, reveal each at 50ms intervals, wait 300ms, then reveal three log lines 180ms apart. Capture at 0.36s, 0.94s, 1.64s to verify the initial state, intermediate relationships, final settling, and unwanted overlap.
```

예시 / Example: 터미널 실행 시연를 `.hero`에 적용해. / Apply Terminal Run to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 터미널 실행 시연의 초기 상태와 종료 상태를 함께 기록하고 1.44초까지 seek로 재현한다.
- ReelForge: 씬 워커 브리프에 터미널 실행 시연 대상 선택자와 문자 간격 50ms, 실행 대기 300ms, 로그 간격 180ms를 싣고 최종 상태 유지 시간을 지정한다.
- Scrolline Deck: 진행률 0~1을 1.44초 구간에 매핑하고 선형 관계는 none으로 유지한다.

조합 / Pair with: [타자기 · Typewriter](../typewriter/) · [하이라이트 스윕 · Highlight Sweep](../highlight-sweep/)

출처 / Sources: [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/code-terminal-run/registry-item.json) (Apache-2.0) · [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/terminal-simulator/registry-item.json) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
