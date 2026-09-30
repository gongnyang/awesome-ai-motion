# 레시피 목록 · Recipe index

정본 [index.json](../index.json)에서 생성. 필요한 절만 읽는다.
Generated from [index.json](../index.json). Read only the relevant section.

각 레시피의 순서·타이밍·프롬프트는 연결된 카드에서 읽는다.
Open a recipe card for timing, sequence and prompts.

| 레시피 · Recipe | 언제 · Use when | 효과 순서 · Sequence |
|---|---|---|
| [AI 원리 한 컷 · AI Principle in One Shot](../recipes/ai-principle/README.md) | AI 원리를 설명하는 교육 영상 / An educational video explaining an AI principle | [token-split](../effects/token-split/README.md) → [attention-lines](../effects/attention-lines/README.md) → [next-token](../effects/next-token/README.md) |
| [전후 비교 · Before and After](../recipes/before-after/README.md) | 제품 개선을 비교하는 발표와 데이터 영상 / Presentations and data videos comparing product improvements | [split-compare](../effects/split-compare/README.md) → [count-up](../effects/count-up/README.md) → [word-emphasis](../effects/word-emphasis/README.md) |
| [개념 설명 장면 · Concept Explainer](../recipes/concept-explainer/README.md) | AI 원리를 한 장면으로 설명하는 교육 영상 / An educational video explaining an AI principle in a single scene | [motion-hierarchy](../effects/motion-hierarchy/README.md) → [progressive-disclosure](../effects/progressive-disclosure/README.md) → [spotlight](../effects/spotlight/README.md) |
| [장 전환 카드 · Chapter Card Transition](../recipes/chapter-transition/README.md) | 교육 영상과 발표의 장 사이 전환 / Transitions between chapters in educational videos and presentations | [wipe](../effects/wipe/README.md) → [motion-hierarchy](../effects/motion-hierarchy/README.md) → [iris-mask](../effects/iris-mask/README.md) |
| [데이터 스토리 · Data Story](../recipes/data-story/README.md) | 수치 결론을 먼저 제시하는 데이터 설명 영상 / A data explainer video that leads with the numerical conclusion | [count-up](../effects/count-up/README.md) → [bar-grow](../effects/bar-grow/README.md) → [annotation-callout](../effects/annotation-callout/README.md) |
| [제품 UI 시연 · Product UI Demo](../recipes/product-demo/README.md) | AI 제품의 입력부터 응답까지 보여주는 제품 시연 / A product demo showing an AI product from input to response | [typing-input](../effects/typing-input/README.md) → [cursor-click](../effects/cursor-click/README.md) → [answer-stream](../effects/answer-stream/README.md) → [zoom-callout](../effects/zoom-callout/README.md) |
| [인용 강조 카드 · Quote Card](../recipes/quote-card/README.md) | 인용문과 핵심 메시지를 전달하는 설명 영상 / An explainer video presenting a quote and its key message | [mask-reveal](../effects/mask-reveal/README.md) → [highlight-sweep](../effects/highlight-sweep/README.md) → [annotation-callout](../effects/annotation-callout/README.md) |
| [스크롤덱 장면 3박자 · Scroll Deck Scene](../recipes/scrolldeck-scene/README.md) | 스크롤덱의 한 장면을 설계하는 교육 영상 / An educational video demonstrating how to design a scroll deck scene | [stagger](../effects/stagger/README.md) → [mask-reveal](../effects/mask-reveal/README.md) → [highlight-sweep](../effects/highlight-sweep/README.md) → [crossfade](../effects/crossfade/README.md) |
| [숏폼 훅 · Shorts Hook](../recipes/shorts-hook/README.md) | 세로 숏폼의 도입과 핵심 수치 전달 / An opening hook and key metric for vertical short-form video | [kinetic-beats](../effects/kinetic-beats/README.md) → [zoom-through](../effects/zoom-through/README.md) → [count-up](../effects/count-up/README.md) |
| [타이포 오프닝 · Title Opener](../recipes/title-opener/README.md) | 교육 영상의 첫 4초와 짧은 타이포 오프닝 / The first 4 seconds of an educational video or a short typographic opener | [mask-reveal](../effects/mask-reveal/README.md) → [char-stagger](../effects/char-stagger/README.md) → [underline-draw](../effects/underline-draw/README.md) |
| [교육 첫 5초 훅 · Educational Opening Hook](../recipes/edu-hook/README.md) | 교육·설명 영상의 가로형 첫 5초 / The first five seconds of a landscape educational or explainer video | [mask-reveal](../effects/mask-reveal/README.md) → [word-emphasis](../effects/word-emphasis/README.md) → [stagger](../effects/stagger/README.md) → [underline-draw](../effects/underline-draw/README.md) |
