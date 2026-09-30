# 효과 고르는 결정표 · Motion decision tables

정본 [index.json](../index.json)에서 생성. 필요한 절만 읽는다.
Generated from [index.json](../index.json). Read only the relevant section.

## 장면 의도로 고르기 · Choose by scene intent

| 장면 · Scene | 구성 · Structure | 효과·레시피 · Effects and recipe |
|---|---|---|
| 교육·설명 영상 첫 5초 훅 · First five seconds of an educational or explainer video | 0~1초 질문·의외의 결과, 1~3초 원리나 비교의 단서, 3~5초 학습 약속과 읽을 홀드. 한 화면 한 주장. / 0~1s question or surprising result; 1~3s a clue to the mechanism or comparison; 3~5s a learning promise and readable hold. One claim per screen. | [mask-reveal](../effects/mask-reveal/README.md) · [split-compare](../effects/split-compare/README.md) · [count-up](../effects/count-up/README.md) · [annotation-callout](../effects/annotation-callout/README.md) · [edu-hook](../recipes/edu-hook/README.md) |

큰 카메라 이동은 질문이나 결과를 드러낼 때만 사용한다. 도해 설명 중에는 초점과 읽기 시간을 지킨다.
Use large camera motion only to reveal a question or result; preserve focus and reading time during explanation.

## 목적으로 고르기 · Choose by purpose

| 기준 · Criterion | 먼저 볼 효과 · Candidates | 전체 수 · Total |
|---|---|---|
| 주목 끌기 · Attention | [anticipation](../effects/anticipation/README.md) · [spring-overshoot](../effects/spring-overshoot/README.md) · [motion-hierarchy](../effects/motion-hierarchy/README.md) · [blinds-reveal](../effects/blinds-reveal/README.md) · [blur-reveal](../effects/blur-reveal/README.md) · [fade-slide](../effects/fade-slide/README.md) · [flip-reveal](../effects/flip-reveal/README.md) · [scale-pop](../effects/scale-pop/README.md) | 137 |
| 설명 · Explanation | [anticipation](../effects/anticipation/README.md) · [easing-curves](../effects/easing-curves/README.md) · [spring-overshoot](../effects/spring-overshoot/README.md) · [squash-stretch](../effects/squash-stretch/README.md) · [stagger](../effects/stagger/README.md) · [arc-motion](../effects/arc-motion/README.md) · [follow-through](../effects/follow-through/README.md) · [motion-hierarchy](../effects/motion-hierarchy/README.md) | 219 |
| 비교 · Comparison | [anticipation](../effects/anticipation/README.md) · [easing-curves](../effects/easing-curves/README.md) · [arc-motion](../effects/arc-motion/README.md) · [bar-chart-race](../effects/bar-chart-race/README.md) · [pie-donut-update](../effects/pie-donut-update/README.md) · [progress-ring](../effects/progress-ring/README.md) · [radar-morph](../effects/radar-morph/README.md) · [stacked-grouped-transition](../effects/stacked-grouped-transition/README.md) | 76 |
| 순서·흐름 · Sequence and flow | [overlapping-action](../effects/overlapping-action/README.md) · [stagger](../effects/stagger/README.md) · [arc-motion](../effects/arc-motion/README.md) · [motion-hierarchy](../effects/motion-hierarchy/README.md) · [focus-handoff](../effects/focus-handoff/README.md) · [char-stagger](../effects/char-stagger/README.md) · [kinetic-beats](../effects/kinetic-beats/README.md) · [mask-reveal](../effects/mask-reveal/README.md) | 170 |
| 강조 · Emphasis | [squash-stretch](../effects/squash-stretch/README.md) · [follow-through](../effects/follow-through/README.md) · [flip-reveal](../effects/flip-reveal/README.md) · [pulse](../effects/pulse/README.md) · [circumscribe](../effects/circumscribe/README.md) · [focus-handoff](../effects/focus-handoff/README.md) · [highlight-sweep](../effects/highlight-sweep/README.md) · [kinetic-beats](../effects/kinetic-beats/README.md) | 138 |
| 전환 · Transition | [blinds-reveal](../effects/blinds-reveal/README.md) · [blur-reveal](../effects/blur-reveal/README.md) · [fade-slide](../effects/fade-slide/README.md) · [scale-pop](../effects/scale-pop/README.md) · [crossfade](../effects/crossfade/README.md) · [push-transition](../effects/push-transition/README.md) · [wipe](../effects/wipe/README.md) · [iris-mask](../effects/iris-mask/README.md) | 147 |
| 데이터 증명 · Data evidence | [morph-match-cut](../effects/morph-match-cut/README.md) · [bar-grow](../effects/bar-grow/README.md) · [count-up](../effects/count-up/README.md) · [dot-regroup](../effects/dot-regroup/README.md) · [line-draw](../effects/line-draw/README.md) · [unit-grid](../effects/unit-grid/README.md) · [bar-chart-race](../effects/bar-chart-race/README.md) · [progress-ring](../effects/progress-ring/README.md) | 57 |
| 피드백 · Feedback | [easing-curves](../effects/easing-curves/README.md) · [spring-overshoot](../effects/spring-overshoot/README.md) · [squash-stretch](../effects/squash-stretch/README.md) · [shake](../effects/shake/README.md) · [typewriter](../effects/typewriter/README.md) · [answer-stream](../effects/answer-stream/README.md) · [cursor-click](../effects/cursor-click/README.md) · [typing-input](../effects/typing-input/README.md) | 99 |
| 분위기 · Atmosphere | [overlapping-action](../effects/overlapping-action/README.md) · [follow-through](../effects/follow-through/README.md) · [text-scramble](../effects/text-scramble/README.md) · [blur-dissolve](../effects/blur-dissolve/README.md) · [noise-dissolve](../effects/noise-dissolve/README.md) · [shader-wipe](../effects/shader-wipe/README.md) · [film-grain](../effects/film-grain/README.md) · [fluted-glass](../effects/fluted-glass/README.md) | 199 |
| 브랜딩 · Branding | [kinetic-type-sweep](../effects/kinetic-type-sweep/README.md) · [giant-mask-reveal](../effects/giant-mask-reveal/README.md) · [piece-assembly](../effects/piece-assembly/README.md) · [film-grain](../effects/film-grain/README.md) · [fluted-glass](../effects/fluted-glass/README.md) · [ink-bleed](../effects/ink-bleed/README.md) · [light-sweep](../effects/light-sweep/README.md) · [particle-image-reveal](../effects/particle-image-reveal/README.md) | 75 |

## 매체로 고르기 · Choose by medium

| 기준 · Criterion | 먼저 볼 효과 · Candidates | 전체 수 · Total |
|---|---|---|
| 설명 영상 · Explainer video | [overlapping-action](../effects/overlapping-action/README.md) · [anticipation](../effects/anticipation/README.md) · [easing-curves](../effects/easing-curves/README.md) · [spring-overshoot](../effects/spring-overshoot/README.md) · [squash-stretch](../effects/squash-stretch/README.md) · [stagger](../effects/stagger/README.md) · [arc-motion](../effects/arc-motion/README.md) · [follow-through](../effects/follow-through/README.md) | 566 |
| 숏폼 · Short form | [overlapping-action](../effects/overlapping-action/README.md) · [anticipation](../effects/anticipation/README.md) · [squash-stretch](../effects/squash-stretch/README.md) · [arc-motion](../effects/arc-motion/README.md) · [follow-through](../effects/follow-through/README.md) · [blinds-reveal](../effects/blinds-reveal/README.md) · [blur-reveal](../effects/blur-reveal/README.md) · [fade-slide](../effects/fade-slide/README.md) | 352 |
| 스크롤덱 · Scroll deck | [motion-hierarchy](../effects/motion-hierarchy/README.md) · [focus-handoff](../effects/focus-handoff/README.md) · [highlight-sweep](../effects/highlight-sweep/README.md) · [underline-draw](../effects/underline-draw/README.md) · [crossfade](../effects/crossfade/README.md) · [push-transition](../effects/push-transition/README.md) · [wipe](../effects/wipe/README.md) · [match-cut](../effects/match-cut/README.md) | 125 |
| 발표 · Presentation | [easing-curves](../effects/easing-curves/README.md) · [stagger](../effects/stagger/README.md) · [arc-motion](../effects/arc-motion/README.md) · [motion-hierarchy](../effects/motion-hierarchy/README.md) · [flip-reveal](../effects/flip-reveal/README.md) · [circumscribe](../effects/circumscribe/README.md) · [focus-handoff](../effects/focus-handoff/README.md) · [highlight-sweep](../effects/highlight-sweep/README.md) | 285 |
| 제품 시연 · Product demo | [spring-overshoot](../effects/spring-overshoot/README.md) · [pulse](../effects/pulse/README.md) · [shake](../effects/shake/README.md) · [flash-transition](../effects/flash-transition/README.md) · [scale-swap](../effects/scale-swap/README.md) · [chapter-interstitial](../effects/chapter-interstitial/README.md) · [zoom-wipe](../effects/zoom-wipe/README.md) · [answer-stream](../effects/answer-stream/README.md) | 182 |
| 데이터 스토리 · Data story | [morph-match-cut](../effects/morph-match-cut/README.md) · [noise-dissolve](../effects/noise-dissolve/README.md) · [giant-mask-reveal](../effects/giant-mask-reveal/README.md) · [scroll-scrub-cinema](../effects/scroll-scrub-cinema/README.md) · [annotation-callout](../effects/annotation-callout/README.md) · [bar-grow](../effects/bar-grow/README.md) · [count-up](../effects/count-up/README.md) · [dot-regroup](../effects/dot-regroup/README.md) | 98 |
| 웹 UI · Web UI | [overlapping-action](../effects/overlapping-action/README.md) · [anticipation](../effects/anticipation/README.md) · [easing-curves](../effects/easing-curves/README.md) · [spring-overshoot](../effects/spring-overshoot/README.md) · [squash-stretch](../effects/squash-stretch/README.md) · [stagger](../effects/stagger/README.md) · [follow-through](../effects/follow-through/README.md) · [motion-hierarchy](../effects/motion-hierarchy/README.md) | 274 |

## 동작 분류 · Motion families

| Family | 뜻 · Meaning | 효과 · Effects | 클립 · Clips |
|---|---|---|---|
| `principles` 기본기 · PRINCIPLES | 디즈니 12원칙, 이징, 타이밍과 간격. 모든 움직임의 문법 / Disney's 12 principles, easing, timing and spacing. The grammar of all motion | 26 | 9 |
| `entrance` 등장·퇴장 · ENTRANCE & EXIT | 요소가 화면에 들어오고 나가는 방식 / How elements come in and leave | 38 | 5 |
| `emphasis` 강조·주의 · EMPHASIS | 이미 보이는 것 중 하나로 시선을 끌어오는 방식 / Pulling the eye to something already on screen | 22 | 4 |
| `type` 타이포 · TYPOGRAPHY | 글자가 등장하고 바뀌고 강조되는 방식 / How text appears, changes and gets emphasis | 33 | 9 |
| `transitions` 전환·컷 · TRANSITIONS | 장면과 장면을 잇는 컷과 화면 전환 / Cuts and transitions that join scenes | 98 | 21 |
| `camera` 가상 카메라 · CAMERA | 화면 전체를 움직여 시선과 공간을 옮기는 법 / Moving the whole frame to move the eye and the space | 22 | 11 |
| `data` 데이터 · DATA | 숫자와 차트를 움직여 크기·변화·비교를 보이는 법 / Animating numbers and charts to show size, change and comparison | 74 | 14 |
| `ui` UI 시연 · UI DEMO | 화면 조작과 제품 사용을 영상으로 보여 주는 법 / Showing screen interaction and product use on video | 47 | 11 |
| `explainer` 원리 도해 · EXPLAINER | 보이지 않는 원리와 과정을 그림으로 풀어 보이는 법 / Drawing invisible mechanisms and processes | 48 | 12 |
| `shape` 도형·패스 · SHAPE & PATH | 선 그리기, 모프, 경로 이동, 셰이프 레이어 기법 / Line drawing, morphing, path motion, shape layers | 32 | 4 |
| `texture` 질감·스타일 · TEXTURE & STYLE | 글리치, 그레인, 빛, 인쇄 질감 같은 화면 처리 / Glitch, grain, light, print texture | 59 | 6 |
| `generative` 입자·생성 · GENERATIVE | 입자, 노이즈, 반복 규칙으로 만드는 움직임 / Particles, noise and rule-based repetition | 47 | 6 |
| `depth` 3D·깊이 · 3D & DEPTH | 원근, 회전, 레이어 깊이로 만드는 공간감 / Perspective, rotation and layered depth | 33 | 7 |
| `loop` 반복·앰비언트 · LOOP & AMBIENT | 로더, 숨쉬기, 배경 루프처럼 계속 도는 움직임 / Loaders, breathing, ambient loops | 44 | 5 |
| `caption` 자막·하단 자막 · CAPTIONS | 자막, 하단 자막, 인용과 출처 표기 / Captions, lower thirds, quotes and credits | 14 | 4 |
