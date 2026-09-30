# R1a 출처 조사 기록

조사일: 2026-09-30. 작업 범위는 로컬 HyperFrames 계열 스킬과 공식 레지스트리다. 코드를 복사하거나 효과를 구현하지 않았다. 원장은 기법의 현상, 전달 효과, 재현 방법만 새로 작성했다.

결과: 중복 변형을 병합한 217개 기법. 일반적인 60~150개 범위보다 많지만, 386개 블록과 컴포넌트 및 자막 세부 동작에서 서로 다른 현상을 분리한 결과다. 방향과 강도만 다른 변형은 합쳤다.

## 확보한 목록과 조사 방식

- `find -L`과 문서 파일 인벤토리로 로컬 21개 스킬의 Markdown 329개를 훑었다. 본문의 제목, 모션 관련 문단, 규칙 표, 카탈로그를 대조했다. 설치, 오디오 믹싱, 검증, 정적 팔레트만 다루는 문서는 별도 기법을 만들지 않았다.
- 요청에서 규칙 49개라고 지칭했으나 현재 로컬 `hyperframes-animation/rules`의 Markdown은 48개다. 48개 전부를 기존 기법 출처에 연결했다. 블루프린트 22개 전부도 연결했다.
- `transitions/catalog.md`와 `css-*.md` 13개를 확인했다. 방향별 push와 iris, 강도별 blur, 필름 번 변형을 통합했다.
- `npx --yes hyperframes catalog --json`으로 설치 가능한 블록과 컴포넌트 386개를 확보했다. 각 항목의 `registry-item.json` 386개를 전부 열어 설명, 변수, 파일 목록, 라이선스 표기를 확인했다.
- 원격 `registry/registry.json`은 394개다. 추가 8개는 example이며 블록과 컴포넌트가 아니다. 구현 예제를 기법 하나로 중복 등록하지 않았다.
- 레지스트리 384개를 원장 기법에 연결했다. 순수 정적 합성 2개는 제외 이유를 아래에 남겼다. hover 항목 2개는 접점 움직임을 스크립트로 보여주는 시차 변형으로 포함했다.
- Pixel Point의 24개 portable spec JSON을 실제로 열어 기본 시간과 이징을 확인했다. 로컬 어댑터의 이름 목록만으로 수치를 추정하지 않았다.
- embedded-captions의 35개 identity와 공통 10개 entry move, cinematic DNA, standard motion, theme 설명을 비교했다. 색과 폰트만 다른 스타일은 기법 행으로 중복하지 않았다.

## 라이선스 기준

- [HyperFrames 저장소 LICENSE](https://github.com/heygen-com/hyperframes/blob/main/LICENSE): Apache-2.0. 원격 LICENSE 원문을 열어 확인했다. 항목별 별도 표기가 없을 때 저장소 라이선스를 적용했다.
- `kinetic-center-build`는 registry-item에 MIT를 명시했다. `weight-wave`는 OFL-1.1을 명시했다. 원장에는 항목별 표기를 우선 기록했다. 후자는 폰트 자산 라이선스와 기법 자료의 라이선스가 섞일 수 있어 재구현 시 별도 확인이 필요하다.
- 로컬 설치본에는 스킬별 LICENSE 파일이 없다. 원격 저장소와 동일 파일임을 검증하지 않았으므로 로컬 출처는 unknown이며 notes에 참고만을 표시했다.
- [pixel-point/animate-text](https://github.com/pixel-point/animate-text): root LICENSE, LICENSE.md, LICENSE.txt가 master에서 모두 404다. 로컬 어댑터도 명시 라이선스 없음을 설명한다. 완전한 법적 선언을 확인하지 못해 unknown과 참고만으로 기록했다.
- 재현 기본값 제안은 조사자가 제안한 시작값이다. 출처 기본값과 레지스트리 기본값은 실제 명세의 값이다. 두 종류를 params 안에서 구분했다.

## 최상위 출처

| 출처 | 라이선스 | 얻은 내용 |
| :--- | :--- | :--- |
| https://github.com/heygen-com/hyperframes | Apache-2.0 | 공식 블록과 컴포넌트의 기법 설명과 변수 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/registry.json | Apache-2.0 | 394개 원격 항목 인벤토리 |
| https://hyperframes.heygen.com/catalog | Apache-2.0 저장소 기준 | CLI 검색이 가리키는 공식 카탈로그 |
| ~/.claude/skills | unknown | 로컬 HyperFrames 스킬 21종의 모션 문서 |
| https://github.com/pixel-point/animate-text | unknown | 텍스트 효과 24종 실제 portable contract |

## 로컬 문서별 조사 목록

| file 경로 | 라이선스 | 얻은 내용과 병합 위치 |
| :--- | :--- | :--- |
| claude-skill:embedded-captions/CATALOG.md | unknown | 기법 근거 R1a-147, R1a-148, R1a-149, R1a-167, R1a-177, R1a-179, R1a-180, R1a-181, R1a-182, R1a-183, R1a-184, R1a-185, R1a-186, R1a-187, R1a-188, R1a-189 |
| claude-skill:embedded-captions/SKILL.md | unknown | 관련 동작과 중복 여부를 훑음: Embedded Captions / Operational flow (TL;DR) / Caption model : rail + embed |
| claude-skill:embedded-captions/dna/README.md | unknown | 관련 동작과 중복 여부를 훑음: DNA registry : pick a visual language, not a preset / Category lock (deliveries field, enforced by the compilers) / The ten |
| claude-skill:embedded-captions/modes/cinematic/README.md | unknown | 관련 동작과 중복 여부를 훑음: Cinematic mode (pure embed) : one engine, six DNAs / Workflow / What the engine generates (never author these) |
| claude-skill:embedded-captions/modes/cinematic/_archive/champion/spec.md | unknown | 관련 동작과 중복 여부를 훑음: Template: champion / When to apply / Layout decisions agent makes |
| claude-skill:embedded-captions/modes/cinematic/_archive/memory-wall/spec.md | unknown | 관련 동작과 중복 여부를 훑음: Template: memory-wall / When to apply / What agent decides per scene |
| claude-skill:embedded-captions/modes/cinematic/_archive/portrait-header/spec.md | unknown | 관련 동작과 중복 여부를 훑음: Template: portrait-header / When to apply / Layout decisions |
| claude-skill:embedded-captions/modes/cinematic/cinematic-cream/spec.md | unknown | 관련 동작과 중복 여부를 훑음: cinematic-cream : spec |
| claude-skill:embedded-captions/modes/standard/_anatomy.md | unknown | 관련 동작과 중복 여부를 훑음: Caption Template : Anatomy (the shared engine) / 1 · Asset prep (two CLI calls) / 1) The person : transparent talking-head cutout over the scene (VP9 + alpha) |
| claude-skill:embedded-captions/modes/standard/_motion.md | unknown | 기법 근거 R1a-177 |
| claude-skill:embedded-captions/references/aesthetic-principles.md | unknown | 관련 동작과 중복 여부를 훑음: Aesthetic Principles for Cinematic Captions / The 18 rules / 1. The subject always wins |
| claude-skill:embedded-captions/references/anti-patterns.md | unknown | 관련 동작과 중복 여부를 훑음: Anti-Patterns / Layout / You default to center-aligned crown. |
| claude-skill:embedded-captions/references/bespoke-vs-presets.md | unknown | 관련 동작과 중복 여부를 훑음: Bespoke design vs. presets : when to override, when to clone / Canonical example renders / When presets are wrong |
| claude-skill:embedded-captions/references/caption-grouping.md | unknown | 관련 동작과 중복 여부를 훑음: Caption Grouping / Goal / Input |
| claude-skill:embedded-captions/references/composition-craft.md | unknown | 기법 근거 R1a-175 |
| claude-skill:embedded-captions/references/direction-catalog.md | unknown | 관련 동작과 중복 여부를 훑음: Direction catalog / Direction specs / 1. documentary-dignified _(Errol Morris / PBS Frontline)_ : Standard-mode direction (no prebuilt Cinematic template) |
| claude-skill:embedded-captions/references/failure-modes.md | unknown | 관련 동작과 중복 여부를 훑음: Failure Modes : learned the hard way / Matting / CoreML execution provider corrupts face alpha |
| claude-skill:embedded-captions/references/layout-heuristics.md | unknown | 관련 동작과 중복 여부를 훑음: Layout Heuristics / Step 1: Sample 3 frames / Step 2: Find the clean zone |
| claude-skill:embedded-captions/references/motion-vocabulary.md | unknown | 기법 근거 R1a-061, R1a-065, R1a-178 |
| claude-skill:embedded-captions/references/rail.md | unknown | 기법 근거 R1a-176 |
| claude-skill:embedded-captions/references/reference-bar.md | unknown | 관련 동작과 중복 여부를 훑음: The reference bar : what world-class looks like / Per register / The five positive checks (run on the preview sheet, after the failure checks) |
| claude-skill:embedded-captions/references/scene-types.md | unknown | 관련 동작과 중복 여부를 훑음: Scene Types : picking the right template / wall-embed : "text is printed on a real surface" / Four conditions : ALL must hold |
| claude-skill:embedded-captions/references/typographic-moves.md | unknown | 관련 동작과 중복 여부를 훑음: Typographic moves : a palette, not a cage / Size vs text length : DO THIS BEFORE PICKING SIZE / Sizing discipline (frame-height-relative) |
| claude-skill:embedded-captions/references/typography-presets.md | unknown | 관련 동작과 중복 여부를 훑음: Typography Presets / Tone field / Picking automatically |
| claude-skill:embedded-captions/themes/README.md | unknown | 기법 근거 R1a-177 |
| claude-skill:faceless-explainer/SKILL.md | unknown | 기법 근거 R1a-117 |
| claude-skill:faceless-explainer/references/cut-catalog.md | unknown | 기법 근거 R1a-025, R1a-042 |
| claude-skill:faceless-explainer/references/motion-language.md | unknown | 관련 동작과 중복 여부를 훑음: Motion language : the move vocabulary + the motion doctrine + the seek-safe core / Part 1 : the move vocabulary / Kinetic type |
| claude-skill:faceless-explainer/references/story-design.md | unknown | 관련 동작과 중복 여부를 훑음: Story design : faceless explainer video / Read first / Output |
| claude-skill:faceless-explainer/references/visual-design.md | unknown | 기법 근거 R1a-117 |
| claude-skill:faceless-explainer/sub-agents/frame-worker.md | unknown | 관련 동작과 중복 여부를 훑음: Frame worker : faceless-explainer delta / Your `focal:` / `roles:` : invented elements / Designing each element (faceless-explainer constraint) |
| claude-skill:figma/SKILL.md | unknown | 기법 근거 R1a-102 |
| claude-skill:general-video/SKILL.md | unknown | 기법 근거 R1a-044 |
| claude-skill:general-video/sub-agents/frame-worker.md | unknown | 관련 동작과 중복 여부를 훑음: Frame worker : general-video delta / Your scene is invented, not captured / Design truth |
| claude-skill:hyperframes-animation/SKILL.md | unknown | 관련 동작과 중복 여부를 훑음: HyperFrames Animation / Default: compose atomic rules / Load a blueprint when |
| claude-skill:hyperframes-animation/adapters/animate-text.md | unknown | 기법 근거 R1a-064, R1a-067, R1a-068, R1a-071, R1a-206, R1a-207 |
| claude-skill:hyperframes-animation/adapters/animejs.md | unknown | 관련 동작과 중복 여부를 훑음: Anime.js for HyperFrames / Contract / Loading v4 |
| claude-skill:hyperframes-animation/adapters/css-animations.md | unknown | 관련 동작과 중복 여부를 훑음: CSS Animations for HyperFrames / Contract / Basic Pattern |
| claude-skill:hyperframes-animation/adapters/gsap-easing-and-stagger.md | unknown | 기법 근거 R1a-001, R1a-007 |
| claude-skill:hyperframes-animation/adapters/gsap-timeline-and-labels.md | unknown | 관련 동작과 중복 여부를 훑음: Timelines and Labels / Creating a Timeline / Position Parameter |
| claude-skill:hyperframes-animation/adapters/gsap-transforms-and-perf.md | unknown | 관련 동작과 중복 여부를 훑음: Transforms and Performance / Transform Aliases / autoAlpha |
| claude-skill:hyperframes-animation/adapters/gsap.md | unknown | 관련 동작과 중복 여부를 훑음: HyperFrames GSAP / HyperFrames Contract / Core Tween Methods |
| claude-skill:hyperframes-animation/adapters/html-in-canvas-patterns.md | unknown | 기법 근거 R1a-130, R1a-131, R1a-132, R1a-133, R1a-134, R1a-135, R1a-136, R1a-137, R1a-138 |
| claude-skill:hyperframes-animation/adapters/lottie.md | unknown | 관련 동작과 중복 여부를 훑음: Lottie for HyperFrames / Contract / lottie-web Pattern |
| claude-skill:hyperframes-animation/adapters/three.md | unknown | 관련 동작과 중복 여부를 훑음: Three.js for HyperFrames / Contract / Basic Pattern |
| claude-skill:hyperframes-animation/adapters/typegpu.md | unknown | 관련 동작과 중복 여부를 훑음: TypeGPU / WebGPU for HyperFrames / Render-environment prerequisite (WebGPU + html-in-canvas) / Contract |
| claude-skill:hyperframes-animation/adapters/waapi.md | unknown | 관련 동작과 중복 여부를 훑음: Web Animations API for HyperFrames / Contract / Basic Pattern |
| claude-skill:hyperframes-animation/blueprints-index.md | unknown | 관련 동작과 중복 여부를 훑음: Blueprints (the proven shapes) / The 22 blueprints / Role → blueprint menu |
| claude-skill:hyperframes-animation/blueprints/agent-progress-theater.md | unknown | 기법 근거 R1a-108, R1a-204 |
| claude-skill:hyperframes-animation/blueprints/camera-journey.md | unknown | 기법 근거 R1a-052 |
| claude-skill:hyperframes-animation/blueprints/comparison-split.md | unknown | 기법 근거 R1a-193 |
| claude-skill:hyperframes-animation/blueprints/constellation-hub.md | unknown | 기법 근거 R1a-060 |
| claude-skill:hyperframes-animation/blueprints/cta-morph-press.md | unknown | 기법 근거 R1a-093 |
| claude-skill:hyperframes-animation/blueprints/cursor-ui-demo.md | unknown | 기법 근거 R1a-093 |
| claude-skill:hyperframes-animation/blueprints/dataviz-countup.md | unknown | 기법 근거 R1a-084 |
| claude-skill:hyperframes-animation/blueprints/device-surface-showcase.md | unknown | 기법 근거 R1a-077, R1a-163 |
| claude-skill:hyperframes-animation/blueprints/fixed-anchor-cycle.md | unknown | 기법 근거 R1a-070 |
| claude-skill:hyperframes-animation/blueprints/grid-card-assemble.md | unknown | 기법 근거 R1a-107, R1a-194 |
| claude-skill:hyperframes-animation/blueprints/kinetic-type-beats.md | unknown | 기법 근거 R1a-069 |
| claude-skill:hyperframes-animation/blueprints/logo-assemble-lockup.md | unknown | 기법 근거 R1a-195 |
| claude-skill:hyperframes-animation/blueprints/overwhelm-surround.md | unknown | 기법 근거 R1a-111 |
| claude-skill:hyperframes-animation/blueprints/panel-edit-live-sync.md | unknown | 기법 근거 R1a-104 |
| claude-skill:hyperframes-animation/blueprints/prompt-type-submit-generate.md | unknown | 기법 근거 R1a-098 |
| claude-skill:hyperframes-animation/blueprints/spatial-pan-stations.md | unknown | 기법 근거 R1a-046 |
| claude-skill:hyperframes-animation/blueprints/ticker-takeover.md | unknown | 기법 근거 R1a-197, R1a-116 |
| claude-skill:hyperframes-animation/blueprints/titlecard-reveal.md | unknown | 기법 근거 R1a-015 |
| claude-skill:hyperframes-animation/blueprints/transcript-scroll-artifact-reveal.md | unknown | 기법 근거 R1a-109 |
| claude-skill:hyperframes-animation/blueprints/typewriter-reveal.md | unknown | 기법 근거 R1a-062 |
| claude-skill:hyperframes-animation/blueprints/video-text-pivot.md | unknown | 기법 근거 R1a-211 |
| claude-skill:hyperframes-animation/blueprints/zoom-out-workspace-reveal.md | unknown | 기법 근거 R1a-026 |
| claude-skill:hyperframes-animation/references/motion-blur.md | unknown | 관련 동작과 중복 여부를 훑음: Motion blur : shutter smear on any animated element / Read this part before you blur anything / Two routes, and they are not interchangeable |
| claude-skill:hyperframes-animation/rules-index.md | unknown | 관련 동작과 중복 여부를 훑음: Rules Index / The contract : every rule assumes this / Text & Typography |
| claude-skill:hyperframes-animation/rules/3d-camera-flight.md | unknown | 기법 근거 R1a-052 |
| claude-skill:hyperframes-animation/rules/3d-page-scroll.md | unknown | 기법 근거 R1a-054 |
| claude-skill:hyperframes-animation/rules/3d-text-depth-layers.md | unknown | 기법 근거 R1a-058 |
| claude-skill:hyperframes-animation/rules/ai-tracking-box.md | unknown | 기법 근거 R1a-120 |
| claude-skill:hyperframes-animation/rules/ambient-glow-bloom.md | unknown | 기법 근거 R1a-124 |
| claude-skill:hyperframes-animation/rules/anchored-layout-expand.md | unknown | 기법 근거 R1a-101 |
| claude-skill:hyperframes-animation/rules/asr-keyword-glow.md | unknown | 기법 근거 R1a-073 |
| claude-skill:hyperframes-animation/rules/avatar-cloud-network.md | unknown | 기법 근거 R1a-060 |
| claude-skill:hyperframes-animation/rules/camera-cursor-tracking.md | unknown | 기법 근거 R1a-048 |
| claude-skill:hyperframes-animation/rules/card-morph-anchor.md | unknown | 기법 근거 R1a-102 |
| claude-skill:hyperframes-animation/rules/center-outward-expansion.md | unknown | 기법 근거 R1a-059 |
| claude-skill:hyperframes-animation/rules/chart-scrub-readout.md | unknown | 기법 근거 R1a-089 |
| claude-skill:hyperframes-animation/rules/chromatic-glitch.md | unknown | 기법 근거 R1a-034 |
| claude-skill:hyperframes-animation/rules/context-sensitive-cursor.md | unknown | 기법 근거 R1a-063 |
| claude-skill:hyperframes-animation/rules/control-target-sync.md | unknown | 기법 근거 R1a-104 |
| claude-skill:hyperframes-animation/rules/coordinate-target-zoom.md | unknown | 기법 근거 R1a-047 |
| claude-skill:hyperframes-animation/rules/counting-dynamic-scale.md | unknown | 기법 근거 R1a-084 |
| claude-skill:hyperframes-animation/rules/css-marker-patterns.md | unknown | 기법 근거 R1a-074, R1a-075, R1a-076, R1a-199 |
| claude-skill:hyperframes-animation/rules/cursor-click-ripple.md | unknown | 기법 근거 R1a-093 |
| claude-skill:hyperframes-animation/rules/cursor-drag.md | unknown | 기법 근거 R1a-095 |
| claude-skill:hyperframes-animation/rules/depth-of-field-blur.md | unknown | 기법 근거 R1a-049 |
| claude-skill:hyperframes-animation/rules/depth-scatter-assemble.md | unknown | 기법 근거 R1a-055 |
| claude-skill:hyperframes-animation/rules/discrete-text-sequence.md | unknown | 기법 근거 R1a-061, R1a-062 |
| claude-skill:hyperframes-animation/rules/dynamic-content-sequencing.md | unknown | 기법 근거 R1a-009 |
| claude-skill:hyperframes-animation/rules/gradient-text-sweep.md | unknown | 기법 근거 R1a-078 |
| claude-skill:hyperframes-animation/rules/gsap-effects.md | unknown | 기법 근거 R1a-213, R1a-118 |
| claude-skill:hyperframes-animation/rules/hacker-flip-3d.md | unknown | 기법 근거 R1a-072 |
| claude-skill:hyperframes-animation/rules/kinetic-beat-slam.md | unknown | 기법 근거 R1a-069 |
| claude-skill:hyperframes-animation/rules/motion-blur-streak.md | unknown | 기법 근거 R1a-140, R1a-141 |
| claude-skill:hyperframes-animation/rules/multi-cursor-choreography.md | unknown | 기법 근거 R1a-096 |
| claude-skill:hyperframes-animation/rules/multi-phase-camera.md | unknown | 기법 근거 R1a-045 |
| claude-skill:hyperframes-animation/rules/nudge-curve.md | unknown | 기법 근거 R1a-011 |
| claude-skill:hyperframes-animation/rules/orbit-3d-entry.md | unknown | 기법 근거 R1a-056 |
| claude-skill:hyperframes-animation/rules/particle-burst.md | unknown | 기법 근거 R1a-126, R1a-127 |
| claude-skill:hyperframes-animation/rules/physics-press-reaction.md | unknown | 기법 근거 R1a-093 |
| claude-skill:hyperframes-animation/rules/press-release-spring.md | unknown | 기법 근거 R1a-003, R1a-094 |
| claude-skill:hyperframes-animation/rules/reactive-displacement.md | unknown | 기법 근거 R1a-116 |
| claude-skill:hyperframes-animation/rules/scale-swap-transition.md | unknown | 기법 근거 R1a-040 |
| claude-skill:hyperframes-animation/rules/sine-wave-loop.md | unknown | 기법 근거 R1a-123 |
| claude-skill:hyperframes-animation/rules/split-tilt-cards.md | unknown | 기법 근거 R1a-057 |
| claude-skill:hyperframes-animation/rules/spring-pop-entrance.md | unknown | 기법 근거 R1a-008, R1a-015 |
| claude-skill:hyperframes-animation/rules/stat-bars-and-fills.md | unknown | 기법 근거 R1a-085, R1a-087, R1a-088 |
| claude-skill:hyperframes-animation/rules/svg-icon-enrichment.md | unknown | 기법 근거 R1a-119 |
| claude-skill:hyperframes-animation/rules/svg-path-draw.md | unknown | 기법 근거 R1a-086, R1a-118 |
| claude-skill:hyperframes-animation/rules/theme-crossfade-morph.md | unknown | 기법 근거 R1a-103 |
| claude-skill:hyperframes-animation/rules/vertical-spring-ticker.md | unknown | 기법 근거 R1a-091 |
| claude-skill:hyperframes-animation/rules/viewport-change.md | unknown | 기법 근거 R1a-046 |
| claude-skill:hyperframes-animation/rules/waterfall-entry.md | unknown | 기법 근거 R1a-006, R1a-014 |
| claude-skill:hyperframes-animation/techniques.md | unknown | 기법 근거 R1a-004, R1a-042, R1a-066, R1a-079, R1a-125, R1a-129, R1a-139 |
| claude-skill:hyperframes-animation/transitions/TRANSITION-REGISTRY.md | unknown | 관련 동작과 중복 여부를 훑음: Transition Registry : machine source of truth / How the injector applies a transition / Template placeholders |
| claude-skill:hyperframes-animation/transitions/catalog.md | unknown | 관련 동작과 중복 여부를 훑음: Transition Catalog / Contents / Hard Rules (CSS) |
| claude-skill:hyperframes-animation/transitions/css-3d.md | unknown | 기법 근거 R1a-024 |
| claude-skill:hyperframes-animation/transitions/css-blur.md | unknown | 기법 근거 R1a-018 |
| claude-skill:hyperframes-animation/transitions/css-cover.md | unknown | 기법 근거 R1a-027, R1a-028 |
| claude-skill:hyperframes-animation/transitions/css-destruction.md | unknown | 기법 근거 R1a-038 |
| claude-skill:hyperframes-animation/transitions/css-dissolve.md | unknown | 기법 근거 R1a-017, R1a-018, R1a-019, R1a-049 |
| claude-skill:hyperframes-animation/transitions/css-distortion.md | unknown | 기법 근거 R1a-034, R1a-035, R1a-036, R1a-037 |
| claude-skill:hyperframes-animation/transitions/css-grid.md | unknown | 기법 근거 R1a-031 |
| claude-skill:hyperframes-animation/transitions/css-light.md | unknown | 기법 근거 R1a-032, R1a-033 |
| claude-skill:hyperframes-animation/transitions/css-mechanical.md | unknown | 기법 근거 R1a-029, R1a-030 |
| claude-skill:hyperframes-animation/transitions/css-other.md | unknown | 기법 근거 R1a-016 |
| claude-skill:hyperframes-animation/transitions/css-push.md | unknown | 기법 근거 R1a-020, R1a-021 |
| claude-skill:hyperframes-animation/transitions/css-radial.md | unknown | 기법 근거 R1a-022, R1a-023 |
| claude-skill:hyperframes-animation/transitions/css-scale.md | unknown | 기법 근거 R1a-025, R1a-026 |
| claude-skill:hyperframes-animation/transitions/overview.md | unknown | 관련 동작과 중복 여부를 훑음: Scene Transitions / Contents / Animation Rules for Multi-Scene Compositions |
| claude-skill:hyperframes-audio/SKILL.md | unknown | 타임라인과 검증 또는 오디오 운영 지침. 화면 기법은 기존 행과 중복하거나 범위 밖 |
| claude-skill:hyperframes-audio/references/attributes.md | unknown | 타임라인과 검증 또는 오디오 운영 지침. 화면 기법은 기존 행과 중복하거나 범위 밖 |
| claude-skill:hyperframes-audio/references/diagnosis.md | unknown | 타임라인과 검증 또는 오디오 운영 지침. 화면 기법은 기존 행과 중복하거나 범위 밖 |
| claude-skill:hyperframes-audio/references/fx-registry.md | unknown | 타임라인과 검증 또는 오디오 운영 지침. 화면 기법은 기존 행과 중복하거나 범위 밖 |
| claude-skill:hyperframes-audio/references/presets.md | unknown | 타임라인과 검증 또는 오디오 운영 지침. 화면 기법은 기존 행과 중복하거나 범위 밖 |
| claude-skill:hyperframes-cli/SKILL.md | unknown | 타임라인과 검증 또는 오디오 운영 지침. 화면 기법은 기존 행과 중복하거나 범위 밖 |
| claude-skill:hyperframes-cli/references/beats.md | unknown | 타임라인과 검증 또는 오디오 운영 지침. 화면 기법은 기존 행과 중복하거나 범위 밖 |
| claude-skill:hyperframes-cli/references/cloud.md | unknown | 타임라인과 검증 또는 오디오 운영 지침. 화면 기법은 기존 행과 중복하거나 범위 밖 |
| claude-skill:hyperframes-cli/references/cloudrun.md | unknown | 타임라인과 검증 또는 오디오 운영 지침. 화면 기법은 기존 행과 중복하거나 범위 밖 |
| claude-skill:hyperframes-cli/references/compare-and-batch.md | unknown | 타임라인과 검증 또는 오디오 운영 지침. 화면 기법은 기존 행과 중복하거나 범위 밖 |
| claude-skill:hyperframes-cli/references/doctor-browser.md | unknown | 타임라인과 검증 또는 오디오 운영 지침. 화면 기법은 기존 행과 중복하거나 범위 밖 |
| claude-skill:hyperframes-cli/references/init-and-scaffold.md | unknown | 타임라인과 검증 또는 오디오 운영 지침. 화면 기법은 기존 행과 중복하거나 범위 밖 |
| claude-skill:hyperframes-cli/references/lambda.md | unknown | 타임라인과 검증 또는 오디오 운영 지침. 화면 기법은 기존 행과 중복하거나 범위 밖 |
| claude-skill:hyperframes-cli/references/lint-validate-inspect.md | unknown | 타임라인과 검증 또는 오디오 운영 지침. 화면 기법은 기존 행과 중복하거나 범위 밖 |
| claude-skill:hyperframes-cli/references/preview-render.md | unknown | 타임라인과 검증 또는 오디오 운영 지침. 화면 기법은 기존 행과 중복하거나 범위 밖 |
| claude-skill:hyperframes-cli/references/upgrade-info-misc.md | unknown | 타임라인과 검증 또는 오디오 운영 지침. 화면 기법은 기존 행과 중복하거나 범위 밖 |
| claude-skill:hyperframes-core/SKILL.md | unknown | 관련 동작과 중복 여부를 훑음: HyperFrames Core / References / Building a composition |
| claude-skill:hyperframes-core/references/composition-patterns.md | unknown | 관련 동작과 중복 여부를 훑음: Composition Patterns / Two Architectures / Modular Orchestrator Pattern |
| claude-skill:hyperframes-core/references/creator-editing-recipes.md | unknown | 기법 근거 R1a-192 |
| claude-skill:hyperframes-core/references/data-attributes.md | unknown | 관련 동작과 중복 여부를 훑음: Data Attributes Reference / Composition Root / Clip Attributes |
| claude-skill:hyperframes-core/references/determinism-rules.md | unknown | 관련 동작과 중복 여부를 훑음: Determinism, Animation Runtime, and Layout / Animation Runtime Contract / Determinism Rules |
| claude-skill:hyperframes-core/references/full-screen-motion.md | unknown | 관련 동작과 중복 여부를 훑음: Full-Screen Motion Pattern / Pattern / Rules |
| claude-skill:hyperframes-core/references/minimal-composition.md | unknown | 관련 동작과 중복 여부를 훑음: Minimal Composition |
| claude-skill:hyperframes-core/references/sub-compositions.md | unknown | 관련 동작과 중복 여부를 훑음: Sub-Compositions / Host Wiring / Sub-Composition File Structure |
| claude-skill:hyperframes-core/references/tailwind.md | unknown | 관련 동작과 중복 여부를 훑음: HyperFrames Tailwind / Version Contract / v4 Browser Runtime Rules |
| claude-skill:hyperframes-core/references/tracks-and-clips.md | unknown | 관련 동작과 중복 여부를 훑음: Tracks and Clips / What is a Clip / Tracks Are a Display Lane |
| claude-skill:hyperframes-core/references/variables-and-media.md | unknown | 관련 동작과 중복 여부를 훑음: Variables and Media / Variables / Variable Rules |
| claude-skill:hyperframes-creative/SKILL.md | unknown | 관련 동작과 중복 여부를 훑음: HyperFrames Creative / Workflow / Routing |
| claude-skill:hyperframes-creative/frame-presets/biennale-yellow/FRAME.md | unknown | 색, 글꼴, 프레임 구성과 모션 언급을 훑음. 독립적인 새 동작 없음 |
| claude-skill:hyperframes-creative/frame-presets/blockframe/FRAME.md | unknown | 색, 글꼴, 프레임 구성과 모션 언급을 훑음. 독립적인 새 동작 없음 |
| claude-skill:hyperframes-creative/frame-presets/blue-professional/FRAME.md | unknown | 색, 글꼴, 프레임 구성과 모션 언급을 훑음. 독립적인 새 동작 없음 |
| claude-skill:hyperframes-creative/frame-presets/bold-poster/FRAME.md | unknown | 색, 글꼴, 프레임 구성과 모션 언급을 훑음. 독립적인 새 동작 없음 |
| claude-skill:hyperframes-creative/frame-presets/broadside/FRAME.md | unknown | 색, 글꼴, 프레임 구성과 모션 언급을 훑음. 독립적인 새 동작 없음 |
| claude-skill:hyperframes-creative/frame-presets/capsule/FRAME.md | unknown | 색, 글꼴, 프레임 구성과 모션 언급을 훑음. 독립적인 새 동작 없음 |
| claude-skill:hyperframes-creative/frame-presets/cartesian/FRAME.md | unknown | 색, 글꼴, 프레임 구성과 모션 언급을 훑음. 독립적인 새 동작 없음 |
| claude-skill:hyperframes-creative/frame-presets/cobalt-grid/FRAME.md | unknown | 색, 글꼴, 프레임 구성과 모션 언급을 훑음. 독립적인 새 동작 없음 |
| claude-skill:hyperframes-creative/frame-presets/code-editorial/FRAME.md | unknown | 색, 글꼴, 프레임 구성과 모션 언급을 훑음. 독립적인 새 동작 없음 |
| claude-skill:hyperframes-creative/frame-presets/coral/FRAME.md | unknown | 색, 글꼴, 프레임 구성과 모션 언급을 훑음. 독립적인 새 동작 없음 |
| claude-skill:hyperframes-creative/frame-presets/creative-mode/FRAME.md | unknown | 색, 글꼴, 프레임 구성과 모션 언급을 훑음. 독립적인 새 동작 없음 |
| claude-skill:hyperframes-creative/frame-presets/daisy-days/FRAME.md | unknown | 색, 글꼴, 프레임 구성과 모션 언급을 훑음. 독립적인 새 동작 없음 |
| claude-skill:hyperframes-creative/frame-presets/editorial-forest/FRAME.md | unknown | 색, 글꼴, 프레임 구성과 모션 언급을 훑음. 독립적인 새 동작 없음 |
| claude-skill:hyperframes-creative/palettes/bold-energetic.md | unknown | 색, 글꼴, 프레임 구성과 모션 언급을 훑음. 독립적인 새 동작 없음 |
| claude-skill:hyperframes-creative/palettes/clean-corporate.md | unknown | 색, 글꼴, 프레임 구성과 모션 언급을 훑음. 독립적인 새 동작 없음 |
| claude-skill:hyperframes-creative/palettes/dark-premium.md | unknown | 색, 글꼴, 프레임 구성과 모션 언급을 훑음. 독립적인 새 동작 없음 |
| claude-skill:hyperframes-creative/palettes/jewel-rich.md | unknown | 색, 글꼴, 프레임 구성과 모션 언급을 훑음. 독립적인 새 동작 없음 |
| claude-skill:hyperframes-creative/palettes/monochrome.md | unknown | 색, 글꼴, 프레임 구성과 모션 언급을 훑음. 독립적인 새 동작 없음 |
| claude-skill:hyperframes-creative/palettes/nature-earth.md | unknown | 색, 글꼴, 프레임 구성과 모션 언급을 훑음. 독립적인 새 동작 없음 |
| claude-skill:hyperframes-creative/palettes/neon-electric.md | unknown | 색, 글꼴, 프레임 구성과 모션 언급을 훑음. 독립적인 새 동작 없음 |
| claude-skill:hyperframes-creative/palettes/pastel-soft.md | unknown | 색, 글꼴, 프레임 구성과 모션 언급을 훑음. 독립적인 새 동작 없음 |
| claude-skill:hyperframes-creative/palettes/warm-editorial.md | unknown | 색, 글꼴, 프레임 구성과 모션 언급을 훑음. 독립적인 새 동작 없음 |
| claude-skill:hyperframes-creative/references/audio-reactive.md | unknown | 기법 근거 R1a-125 |
| claude-skill:hyperframes-creative/references/beat-direction.md | unknown | 관련 동작과 중복 여부를 훑음: Beat Direction / Contents / Per-Beat Direction |
| claude-skill:hyperframes-creative/references/composition-patterns.md | unknown | 기법 근거 R1a-175 |
| claude-skill:hyperframes-creative/references/data-in-motion.md | unknown | 관련 동작과 중복 여부를 훑음: Data in Motion / Visual Continuity / Numbers Need Visual Weight |
| claude-skill:hyperframes-creative/references/design-adherence.md | unknown | 관련 동작과 중복 여부를 훑음: Design Adherence |
| claude-skill:hyperframes-creative/references/design-picker.md | unknown | 관련 동작과 중복 여부를 훑음: Design Picker / Contents / Prerequisites |
| claude-skill:hyperframes-creative/references/design-spec.md | unknown | 관련 동작과 중복 여부를 훑음: Design Spec : `frame.md` / `design.md` / What `frame.md` is / Resolving which spec to read |
| claude-skill:hyperframes-creative/references/house-style.md | unknown | 관련 동작과 중복 여부를 훑음: House Style / Before Writing HTML / Lazy Defaults to Question |
| claude-skill:hyperframes-creative/references/motion-principles.md | unknown | 기법 근거 R1a-006, R1a-009, R1a-010, R1a-044, R1a-053, R1a-081 |
| claude-skill:hyperframes-creative/references/narration.md | unknown | 관련 동작과 중복 여부를 훑음: Narration & Script / Pacing / Tone |
| claude-skill:hyperframes-creative/references/prompt-expansion.md | unknown | 관련 동작과 중복 여부를 훑음: Prompt Expansion / Prerequisites / Why always run it |
| claude-skill:hyperframes-creative/references/story-spine.md | unknown | 관련 동작과 중복 여부를 훑음: Story spine : value-first narrative doctrine / 1. The hook speaks the viewer's language / 2. Reverse iceberg : value before evidence |
| claude-skill:hyperframes-creative/references/storyboard-recipe.md | unknown | 관련 동작과 중복 여부를 훑음: Storyboard recipe : plan a video like the launch films / 1. Open with the decisions, before any beat / 2. The beat list |
| claude-skill:hyperframes-creative/references/typography.md | unknown | 관련 동작과 중복 여부를 훑음: Typography / Contents / Fonts That Embed (auto-resolve) |
| claude-skill:hyperframes-creative/references/video-composition.md | unknown | 관련 동작과 중복 여부를 훑음: Video Composition / The Design Spec Is Brand, Not Layout / Density |
| claude-skill:hyperframes-creative/references/visual-styles.md | unknown | 관련 동작과 중복 여부를 훑음: Visual Style Library / Contents / Quick Reference |
| claude-skill:hyperframes-keyframes/SKILL.md | unknown | 기법 근거 R1a-002, R1a-005, R1a-041, R1a-044 |
| claude-skill:hyperframes-keyframes/references/keyframe-patterns.md | unknown | 기법 근거 R1a-039 |
| claude-skill:hyperframes-registry/SKILL.md | unknown | 관련 동작과 중복 여부를 훑음: HyperFrames Registry / Quick reference / Install locations |
| claude-skill:hyperframes-registry/examples/add-block.md | unknown | 관련 동작과 중복 여부를 훑음: Worked Example: Adding a Block / Scenario / Steps |
| claude-skill:hyperframes-registry/examples/add-component.md | unknown | 관련 동작과 중복 여부를 훑음: Worked Example: Adding a Component / Scenario / Steps |
| claude-skill:hyperframes-registry/references/component-quality-bar.md | unknown | 관련 동작과 중복 여부를 훑음: Component quality bar / The one rule / How an audit runs |
| claude-skill:hyperframes-registry/references/contributing.md | unknown | 관련 동작과 중복 여부를 훑음: Contributing a Block or Component to the Registry / Workflow / Step 1: Clarify |
| claude-skill:hyperframes-registry/references/demo-html-pattern.md | unknown | 관련 동작과 중복 여부를 훑음: The demo.html Convention / Why components ship demo.html / Demo structure |
| claude-skill:hyperframes-registry/references/discovery.md | unknown | 관련 동작과 중복 여부를 훑음: Registry discovery / Use the catalog command first / Read the registry manifest as a fallback |
| claude-skill:hyperframes-registry/references/install-locations.md | unknown | 관련 동작과 중복 여부를 훑음: Install Locations / Default paths / How path remapping works |
| claude-skill:hyperframes-registry/references/placeholder-material.md | unknown | 관련 동작과 중복 여부를 훑음: Placeholder material / The one rule / The ramp |
| claude-skill:hyperframes-registry/references/templates.md | unknown | 관련 동작과 중복 여부를 훑음: Contribute Templates / Caption Template / VFX Template |
| claude-skill:hyperframes-registry/references/wiring-blocks.md | unknown | 관련 동작과 중복 여부를 훑음: Wiring Blocks / Basic wiring / Required attributes |
| claude-skill:hyperframes-registry/references/wiring-components.md | unknown | 관련 동작과 중복 여부를 훑음: Wiring Components / General process / Example: grain-overlay (CSS-only, no timeline integration) |
| claude-skill:hyperframes-studio/SKILL.md | unknown | 타임라인과 검증 또는 오디오 운영 지침. 화면 기법은 기존 행과 중복하거나 범위 밖 |
| claude-skill:hyperframes/SKILL.md | unknown | 관련 동작과 중복 여부를 훑음: HyperFrames entry point / 1. Start from project state / Keep the project's CLI current |
| claude-skill:hyperframes/references/brief-contract.md | unknown | 관련 동작과 중복 여부를 훑음: Brief contract / Contents / 1. Run shape |
| claude-skill:hyperframes/references/brief-format.md | unknown | 관련 동작과 중복 여부를 훑음: Brief format : `BRIEF.md` / Frontmatter : the confirmed fields / Body : the intent in prose |
| claude-skill:hyperframes/references/capability-menu.md | unknown | 관련 동작과 중복 여부를 훑음: Capability menu : what HyperFrames can bring to a video / The design ask : have it, pick it, or leave it / Genre lenses : the shipped workflows' taste, borrowable |
| claude-skill:hyperframes/references/frame-worker-core.md | unknown | 관련 동작과 중복 여부를 훑음: Frame worker : core contract (shared by the narrative video workflows) / When a confirmed sketch exists / You do NOT decide |
| claude-skill:hyperframes/references/intent-interview.md | unknown | 관련 동작과 중복 여부를 훑음: The intent layer : one conversation, before any workflow runs / Adapt orthogonal inputs first / The eight steps |
| claude-skill:hyperframes/references/pitch-round.md | unknown | 관련 동작과 중복 여부를 훑음: Pitch round : the intent layer's divergent step / When it runs / The sampling gate : internal, always |
| claude-skill:hyperframes/references/production-loop.md | unknown | 관련 동작과 중복 여부를 훑음: Production loop : from an approved plan to a delivered video / Scheduling economics (facts you can't see from inside the session) |
| claude-skill:hyperframes/references/review-loop.md | unknown | 관련 동작과 중복 여부를 훑음: The review loop : plan, sketch, build / § 1 : The plan, in chat / § 2 : The sketch pass (collaborative, unless skipped) |
| claude-skill:hyperframes/references/route-briefs.md | unknown | 관련 동작과 중복 여부를 훑음: Route briefs (moved) |
| claude-skill:hyperframes/references/routes/embedded-captions.md | unknown | 관련 동작과 중복 여부를 훑음: Route: embedded-captions / Interview |
| claude-skill:hyperframes/references/routes/faceless-explainer.md | unknown | 관련 동작과 중복 여부를 훑음: Route: faceless-explainer / Interview |
| claude-skill:hyperframes/references/routes/general-video.md | unknown | 관련 동작과 중복 여부를 훑음: Route: general-video / Interview |
| claude-skill:hyperframes/references/routes/motion-graphics.md | unknown | 관련 동작과 중복 여부를 훑음: Route: motion-graphics / Interview |
| claude-skill:hyperframes/references/routes/music-to-video.md | unknown | 관련 동작과 중복 여부를 훑음: Route: music-to-video / Interview |
| claude-skill:hyperframes/references/routes/pr-to-video.md | unknown | 관련 동작과 중복 여부를 훑음: Route: pr-to-video / Interview |
| claude-skill:hyperframes/references/routes/product-launch-video.md | unknown | 관련 동작과 중복 여부를 훑음: Route: product-launch-video / Interview |
| claude-skill:hyperframes/references/routes/remotion-to-hyperframes.md | unknown | 관련 동작과 중복 여부를 훑음: Route: remotion-to-hyperframes / Interview |
| claude-skill:hyperframes/references/routes/slideshow.md | unknown | 관련 동작과 중복 여부를 훑음: Route: slideshow / Interview |
| claude-skill:hyperframes/references/routes/talking-head-recut.md | unknown | 관련 동작과 중복 여부를 훑음: Route: talking-head-recut / Interview |
| claude-skill:hyperframes/references/script-format.md | unknown | 관련 동작과 중복 여부를 훑음: `SCRIPT.md` : locked narration (optional) / Shape / Example |
| claude-skill:hyperframes/references/skill-lifecycle.md | unknown | 관련 동작과 중복 여부를 훑음: Skill installation and freshness / What `init` does / Diagnose and update |
| claude-skill:hyperframes/references/storyboard-format.md | unknown | 관련 동작과 중복 여부를 훑음: Storyboard format : `STORYBOARD.md` + parsed manifest / Frontmatter (global direction) / Per-frame sections |
| claude-skill:hyperframes/references/subagent-dispatch.md | unknown | 관련 동작과 중복 여부를 훑음: Subagent dispatch : harness adapter / The contract (identical on every harness) / Concurrency cap → batching rule (cap never changes scope) |
| claude-skill:hyperframes/references/workflow-catalog.md | unknown | 관련 동작과 중복 여부를 훑음: Workflow catalog (moved) |
| claude-skill:media-use/SKILL.md | unknown | 관련 동작과 중복 여부를 훑음: media-use / Resolve : the one verb / Treat broad visual feedback as media intent |
| claude-skill:media-use/audio/assets/sfx/CREDITS.md | unknown | 관련 동작과 중복 여부를 훑음: SFX Credits / Files / License |
| claude-skill:media-use/audio/references/bgm.md | unknown | 관련 동작과 중복 여부를 훑음: Background music (BGM) / Driving it from the request / HeyGen retrieval (default) |
| claude-skill:media-use/audio/references/captions/authoring.md | unknown | 관련 동작과 중복 여부를 훑음: Captions / Transcript Source / Style Detection (When No Style Specified) |
| claude-skill:media-use/audio/references/captions/motion.md | unknown | 기법 근거 R1a-176, R1a-125 |
| claude-skill:media-use/audio/references/captions/transcript-handling.md | unknown | 관련 동작과 중복 여부를 훑음: Transcript Guide / Supported Input Formats / Transcript Quality Check (Mandatory) |
| claude-skill:media-use/audio/references/remove-background.md | unknown | 관련 동작과 중복 여부를 훑음: Background Removal / Output Format / Quality (`--quality`) |
| claude-skill:media-use/audio/references/requirements.md | unknown | 관련 동작과 중복 여부를 훑음: Requirements & Caches / Credential & key priority / Model caches & system dependencies |
| claude-skill:media-use/audio/references/sfx.md | unknown | 관련 동작과 중복 여부를 훑음: Sound effects (SFX) / Cues : request → meta / HeyGen retrieval (credentialed) |
| claude-skill:media-use/audio/references/transcribe.md | unknown | 관련 동작과 중복 여부를 훑음: Transcription / Language Rule (Non-Negotiable) / Model Sizes |
| claude-skill:media-use/audio/references/tts-to-captions.md | unknown | 관련 동작과 중복 여부를 훑음: TTS → Captions / Path A : HeyGen (single call, no Whisper) / Path B : ElevenLabs / Kokoro (TTS → Whisper) |
| claude-skill:media-use/audio/references/tts.md | unknown | 관련 동작과 중복 여부를 훑음: Text To Speech / Narrating a HyperFrames docs video / Available routes |
| claude-skill:media-use/luts/README.md | unknown | 관련 동작과 중복 여부를 훑음: LUT library (authoring) / Hosting a new look (operators) |
| claude-skill:media-use/references/audio.md | unknown | 관련 동작과 중복 여부를 훑음: Audio engine : voiceover, music, SFX, captions, transcription |
| claude-skill:media-use/references/grading.md | unknown | 관련 동작과 중복 여부를 훑음: Color grading : grade blocks and LUTs |
| claude-skill:media-use/references/media-treatment-recipes.md | unknown | 기법 근거 R1a-215, R1a-217, R1a-036 |
| claude-skill:media-use/references/media-treatments.md | unknown | 기법 근거 R1a-216 |
| claude-skill:media-use/references/memory.md | unknown | 관련 동작과 중복 여부를 훑음: User memory : preferences and recipes / Preferences : remembered defaults / Recipes : frozen video bundles |
| claude-skill:media-use/references/meta.md | unknown | 관련 동작과 중복 여부를 훑음: Ownership matrix, usage stats, telemetry, privacy / What it owns (the gaps HyperFrames leaves) / Usage stats |
| claude-skill:media-use/references/operations.md | unknown | 관련 동작과 중복 여부를 훑음: Media operations: agent guidance / Cut / trim: keep a slice / Reframe / crop: change aspect ratio |
| claude-skill:media-use/references/resolve.md | unknown | 관련 동작과 중복 여부를 훑음: Resolve : command, flags, reuse, adopt, inventory / Types / Examples |
| claude-skill:media-use/references/setup-providers.md | unknown | 관련 동작과 중복 여부를 훑음: Setup and providers : install, auth, RAM ladders, forcing a provider / Setup : install heygen first (free-usage path) / Providers |
| claude-skill:media-use/references/telemetry-dashboard.md | unknown | 관련 동작과 중복 여부를 훑음: media-use usage dashboard / Identity (see `scripts/lib/telemetry.mjs`) / Event catalog (verified present in-project) |
| claude-skill:motion-graphics/SKILL.md | unknown | 관련 동작과 중복 여부를 훑음: motion-graphics : dispatch entry / Categories : split by the search decision / Prerequisites |
| claude-skill:motion-graphics/agents/builder.md | unknown | 관련 동작과 중복 여부를 훑음: Motion-Graphics Builder / Reuse-first (the default) / The HF contract (non-negotiable) |
| claude-skill:motion-graphics/agents/director.md | unknown | 관련 동작과 중복 여부를 훑음: Motion-Graphics Director / Part 1 : Plan (before sourcing) / Part 2 : Design (after sourcing) |
| claude-skill:motion-graphics/agents/finalize.md | unknown | 관련 동작과 중복 여부를 훑음: Finalize / repair subagent / Dispatch context / Flow |
| claude-skill:motion-graphics/catalog-map.md | unknown | 관련 동작과 중복 여부를 훑음: Director → catalog block map (reuse-first) / Category → block(s) / Reuse mechanics |
| claude-skill:motion-graphics/categories/asset-fusion/module.md | unknown | 기법 근거 R1a-074 |
| claude-skill:motion-graphics/categories/charts/module.md | unknown | 기법 근거 R1a-084 |
| claude-skill:motion-graphics/categories/kinetic-type/module.md | unknown | 관련 동작과 중복 여부를 훑음: kinetic-type : category module / Plan (Director) / Vocabulary |
| claude-skill:motion-graphics/categories/logo-reveal/module.md | unknown | 기법 근거 R1a-118 |
| claude-skill:motion-graphics/categories/lower-thirds/module.md | unknown | 관련 동작과 중복 여부를 훑음: lower-thirds : category module / Plan (Director) / Vocabulary / leans on |
| claude-skill:motion-graphics/categories/maps/module.md | unknown | 기법 근거 R1a-047 |
| claude-skill:motion-graphics/categories/news/module.md | unknown | 기법 근거 R1a-074 |
| claude-skill:motion-graphics/categories/stat/module.md | unknown | 기법 근거 R1a-084 |
| claude-skill:motion-graphics/categories/tweet/module.md | unknown | 관련 동작과 중복 여부를 훑음: tweet : category module (search-driven) / Source (Step 2) / Vocabulary / leans on |
| claude-skill:motion-graphics/categories/webpage/module.md | unknown | 관련 동작과 중복 여부를 훑음: webpage : category module (search-driven) / Source (Step 2) / Vocabulary / leans on |
| claude-skill:motion-graphics/grounding/PROTOCOL.md | unknown | 관련 동작과 중복 여부를 훑음: locate : find "X" in an image (no detector API assumed) / Why this exists / Routing : pick the cheapest path that's actually available |
| claude-skill:motion-graphics/phases/source/guide.md | unknown | 관련 동작과 중복 여부를 훑음: source phase : asset sourcing (asset-first) / Per asset_need / Steps |
| claude-skill:motion-graphics/references/builder-contract.md | unknown | 관련 동작과 중복 여부를 훑음: Builder contract : composition rules (detail behind agents/builder.md) / Root must be sized / Layout before animation |
| claude-skill:motion-graphics/references/motion-vocabulary.md | unknown | 관련 동작과 중복 여부를 훑음: text module · motion vocabulary (primitive → GSAP) / Entry / Emphasis (in place, often on a beat) |
| claude-skill:motion-graphics/references/shot-plan-ir.md | unknown | 관련 동작과 중복 여부를 훑음: shot-plan IR |
| claude-skill:music-to-video/SKILL.md | unknown | 관련 동작과 중복 여부를 훑음: music-to-video : one music-grounded, beat-synced video workflow / Two ideas that shape everything / Step 0: Setup, BGM, and inputs |
| claude-skill:music-to-video/references/frame-skeleton.md | unknown | 관련 동작과 중복 여부를 훑음: Frame skeleton (Step 2) : read the music, lay out the frames / The trust boundary (read this first) / How to lay out frames (run in order) |
| claude-skill:music-to-video/references/montage.md | unknown | 기법 근거 R1a-044 |
| claude-skill:music-to-video/references/motion-primitive-catalog.md | unknown | 기법 근거 R1a-012, R1a-043, R1a-051, R1a-082, R1a-129, R1a-138, R1a-155, R1a-182, R1a-183, R1a-191, R1a-199 |
| claude-skill:music-to-video/references/motion-primitives/text-spectral-rays/USAGE.md | unknown | 관련 동작과 중복 여부를 훑음: Using `text-spectral-rays` : it OWNS its wordmark / The one trap: never give the word a second source / Integrate in one pass |
| claude-skill:music-to-video/references/planning.md | unknown | 관련 동작과 중복 여부를 훑음: Planning (Step 3) : pick the brand, fill every frame / Inputs / Step A : pick the brand spine (one preset, unmodified) |
| claude-skill:music-to-video/references/storyboard-format.md | unknown | 관련 동작과 중복 여부를 훑음: STORYBOARD.md format : frames → groups / File shape / Frame 1 : f1 |
| claude-skill:music-to-video/references/template-catalog.md | unknown | 기법 근거 R1a-152, R1a-190, R1a-196 |
| claude-skill:music-to-video/sub-agents/frame-worker.md | unknown | 관련 동작과 중복 여부를 훑음: Frame worker : per-frame composition author (music-to-video) / Inputs (your dispatch context) / What comes fixed : realize it as given |
| claude-skill:pr-to-video/SKILL.md | unknown | 관련 동작과 중복 여부를 훑음: PR to HyperFrames / Step 0: Setup / Step 1: Ingest the PR (no capture) |
| claude-skill:pr-to-video/references/code-vocabulary.md | unknown | 기법 근거 R1a-172, R1a-173 |
| claude-skill:pr-to-video/references/cut-catalog.md | unknown | 관련 동작과 중복 여부를 훑음: Cut catalog : within-frame seams (worker-built) / Blur Logic (applies to all Z-axis variants) / 1. Zoom-Through (forward) |
| claude-skill:pr-to-video/references/motion-language.md | unknown | 관련 동작과 중복 여부를 훑음: Motion language : the move vocabulary + the motion doctrine + the seek-safe core / Part 1 : the move vocabulary / Kinetic type |
| claude-skill:pr-to-video/references/story-design.md | unknown | 관련 동작과 중복 여부를 훑음: Story design : PR → narrative / Read first / Output |
| claude-skill:pr-to-video/references/visual-design.md | unknown | 기법 근거 R1a-117 |
| claude-skill:pr-to-video/sub-agents/frame-worker.md | unknown | 관련 동작과 중복 여부를 훑음: Frame worker : PR-to-video delta / Batch dispatch : you build a small packet batch / Mostly invented : you build the visual (except code blocks + the credits avatars) |
| claude-skill:product-launch-video/SKILL.md | unknown | 기법 근거 R1a-098 |
| claude-skill:product-launch-video/references/cut-catalog.md | unknown | 관련 동작과 중복 여부를 훑음: Cut catalog : within-frame seams (worker-built) / Blur Logic (applies to all Z-axis variants) / 1. Zoom-Through (forward) |
| claude-skill:product-launch-video/references/motion-language.md | unknown | 기법 근거 R1a-074 |
| claude-skill:product-launch-video/references/story-design.md | unknown | 관련 동작과 중복 여부를 훑음: Story design : product launch video / What story design produces / Read first |
| claude-skill:product-launch-video/references/visual-design.md | unknown | 관련 동작과 중복 여부를 훑음: Visual design : product-launch per-frame shot method / The unit is a time-coded shot sequence / Pick the shape : instantiate a blueprint |
| claude-skill:product-launch-video/sub-agents/frame-worker.md | unknown | 관련 동작과 중복 여부를 훑음: Frame worker : product-launch delta / Your `focal:` / `roles:` : real captured media / Placing candidates (product-launch constraint) |
| claude-skill:remotion-to-hyperframes/SKILL.md | unknown | 관련 동작과 중복 여부를 훑음: Remotion to HyperFrames / Overview / When to use |
| claude-skill:remotion-to-hyperframes/assets/test-corpus/tier-1-title-card/README.md | unknown | 관련 동작과 중복 여부를 훑음: Tier 1 : title-card-fade / What it tests / Translation walk-through |
| claude-skill:remotion-to-hyperframes/assets/test-corpus/tier-2-multi-scene/README.md | unknown | 관련 동작과 중복 여부를 훑음: Tier 2 : title-image-outro / What it tests / Translation walk-through |
| claude-skill:remotion-to-hyperframes/assets/test-corpus/tier-3-data-driven/README.md | unknown | 관련 동작과 중복 여부를 훑음: Tier 3 : stargazed-data-driven / What it tests / Composition shape |
| claude-skill:remotion-to-hyperframes/assets/test-corpus/tier-4-escape-hatch/README.md | unknown | 관련 동작과 중복 여부를 훑음: Tier 4 : escape-hatch / What it tests / Cases |
| claude-skill:remotion-to-hyperframes/references/api-map.md | unknown | 관련 동작과 중복 여부를 훑음: Remotion → HyperFrames API Map / Reading this table / Composition root |
| claude-skill:remotion-to-hyperframes/references/escape-hatch.md | unknown | 관련 동작과 중복 여부를 훑음: When to bow out: the runtime interop pattern / When to recommend interop / What the interop pattern actually does |
| claude-skill:remotion-to-hyperframes/references/eval.md | unknown | 관련 동작과 중복 여부를 훑음: Eval: how to validate a translation end-to-end / The three scripts / Per-fixture flow |
| claude-skill:remotion-to-hyperframes/references/fonts.md | unknown | 관련 동작과 중복 여부를 훑음: Font translation / Pattern: `@remotion/google-fonts/<Family>` / Pattern: local fonts via `@font-face` |
| claude-skill:remotion-to-hyperframes/references/limitations.md | unknown | 관련 동작과 중복 여부를 훑음: Translation limitations / React patterns the skill refuses / Patterns that work with caveats |
| claude-skill:remotion-to-hyperframes/references/lottie.md | unknown | 관련 동작과 중복 여부를 훑음: Lottie translation: @remotion/lottie → HF lottie adapter / Pattern / Asset handling |
| claude-skill:remotion-to-hyperframes/references/media.md | unknown | 관련 동작과 중복 여부를 훑음: Media translation: Audio, Video, Img, IFrame, staticFile / Asset paths / `<Audio>` |
| claude-skill:remotion-to-hyperframes/references/parameters.md | unknown | 관련 동작과 중복 여부를 훑음: Parameter translation: Zod schemas, defaultProps, calculateMetadata / Sync calculateMetadata (translatable) / Async calculateMetadata (NOT translatable) |
| claude-skill:remotion-to-hyperframes/references/sequencing.md | unknown | 관련 동작과 중복 여부를 훑음: Sequencing translation: Sequence, Series, Composition root / The core idea / `<Composition>` → root `#stage` |
| claude-skill:remotion-to-hyperframes/references/timing.md | unknown | 관련 동작과 중복 여부를 훑음: Timing translation: interpolate, spring, easing / Conversion: frames → seconds / interpolate : linear |
| claude-skill:remotion-to-hyperframes/references/transitions.md | unknown | 관련 동작과 중복 여부를 훑음: Transitions translation: @remotion/transitions → HF crossfades / shader-transitions / Pattern: `<TransitionSeries>` is `<Series>` with overlap / Presentation table |
| claude-skill:slideshow/SKILL.md | unknown | 관련 동작과 중복 여부를 훑음: Slideshow authoring contract / Output : a navigable deck, not a linear MP4 / Intent confirmation |
| claude-skill:slideshow/references/standalone-harness.md | unknown | 관련 동작과 중복 여부를 훑음: Standalone HyperFrames Slideshow Harness / 1. Interim framing : why this exists / 2. The parent wrapper (`index.html` for deliverables, `demo.html` in examples) |
| claude-skill:talking-head-recut/NOTICE.md | unknown | 관련 동작과 중복 여부를 훑음: Attribution |
| claude-skill:talking-head-recut/SKILL.md | unknown | 기법 근거 R1a-074, R1a-084 |
| claude-skill:talking-head-recut/references/DESIGN_INDEX.md | unknown | 관련 동작과 중복 여부를 훑음: V:Take Visual Design Library / Layouts : how video and card share the canvas / Styles : the card's visual language |

## 레지스트리 항목별 조사 목록

각 링크는 실제로 열어 확인한 registry-item.json이다. 테마와 플랫폼 차이는 해당 기법의 변형에 병합했다. 렌더 길이는 전체 데모의 길이이며 개별 모션의 시간으로 오인하지 않았다.

| 항목 출처 | 라이선스 | 얻은 기법 또는 제외 이유 |
| :--- | :--- | :--- |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/ai-chat-reveal/registry-item.json | Apache-2.0 | R1a-099 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/app-showcase/registry-item.json | Apache-2.0 | R1a-163 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/apple-money-count/registry-item.json | Apache-2.0 | R1a-084 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/bar-chart-race/registry-item.json | Apache-2.0 | R1a-090 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/beat-freeze-cut/registry-item.json | Apache-2.0 | R1a-191, R1a-192 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/blue-sweater-intro-video/registry-item.json | Apache-2.0 | R1a-069 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/camcorder-hud/registry-item.json | Apache-2.0 | R1a-036 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/camera-dolly-zoom/registry-item.json | Apache-2.0 | R1a-050 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/canopy-part-title/registry-item.json | Apache-2.0 | R1a-201 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-circle-1/registry-item.json | Apache-2.0 | R1a-056 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-circle-2/registry-item.json | Apache-2.0 | R1a-056 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-circle-3/registry-item.json | Apache-2.0 | R1a-056 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-circle-4/registry-item.json | Apache-2.0 | R1a-056 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-circle-5/registry-item.json | Apache-2.0 | R1a-056 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-orbit-1/registry-item.json | Apache-2.0 | R1a-056 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-orbit-2/registry-item.json | Apache-2.0 | R1a-056 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-orbit-3/registry-item.json | Apache-2.0 | R1a-056 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-orbit-4/registry-item.json | Apache-2.0 | R1a-056 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-orbit-5/registry-item.json | Apache-2.0 | R1a-056 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-path-1/registry-item.json | Apache-2.0 | R1a-004 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-path-2/registry-item.json | Apache-2.0 | R1a-004 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-path-3/registry-item.json | Apache-2.0 | R1a-004 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-path-4/registry-item.json | Apache-2.0 | R1a-004 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-path-5/registry-item.json | Apache-2.0 | R1a-004 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-text-circle-1/registry-item.json | Apache-2.0 | R1a-056 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-text-circle-2/registry-item.json | Apache-2.0 | R1a-056 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-text-circle-3/registry-item.json | Apache-2.0 | R1a-056 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-text-circle-4/registry-item.json | Apache-2.0 | R1a-056 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-text-circle-5/registry-item.json | Apache-2.0 | R1a-056 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-vision-1/registry-item.json | Apache-2.0 | R1a-056 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-vision-2/registry-item.json | Apache-2.0 | R1a-056 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-vision-3/registry-item.json | Apache-2.0 | R1a-056 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-vision-4/registry-item.json | Apache-2.0 | R1a-056 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/carousel-vision-5/registry-item.json | Apache-2.0 | R1a-056 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/chatgpt-exchange/registry-item.json | Apache-2.0 | R1a-099 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/chromatic-radial-split/registry-item.json | Apache-2.0 | R1a-035 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/cinematic-zoom/registry-item.json | Apache-2.0 | R1a-025 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/claude-exchange/registry-item.json | Apache-2.0 | R1a-099 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/code-3d-extrude/registry-item.json | Apache-2.0 | R1a-058 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/code-diff/registry-item.json | Apache-2.0 | R1a-172 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/code-highlight/registry-item.json | Apache-2.0 | R1a-077 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/code-morph/registry-item.json | Apache-2.0 | R1a-173 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/code-particle-assemble/registry-item.json | Apache-2.0 | R1a-127 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/code-scroll/registry-item.json | Apache-2.0 | R1a-047 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/code-shader-dissolve/registry-item.json | Apache-2.0 | R1a-130 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/code-slice-hero/registry-item.json | Apache-2.0 | R1a-174 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/code-snippet-apple-terminal-pro/registry-item.json | Apache-2.0 | R1a-061 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/code-snippet-dark-2026/registry-item.json | Apache-2.0 | R1a-061 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/code-snippet-dark-modern/registry-item.json | Apache-2.0 | R1a-061 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/code-typing/registry-item.json | Apache-2.0 | R1a-061 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/cosmic-orb/registry-item.json | Apache-2.0 | R1a-165 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/cross-warp-morph/registry-item.json | Apache-2.0 | R1a-159 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/cuboid-carousel/registry-item.json | Apache-2.0 | R1a-162 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/data-chart/registry-item.json | Apache-2.0 | R1a-085, R1a-086 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/domain-warp-dissolve/registry-item.json | Apache-2.0 | R1a-130 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/editorial-flash-overlay/registry-item.json | Apache-2.0 | R1a-033 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/flash-through-white/registry-item.json | Apache-2.0 | R1a-033 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/flowchart/registry-item.json | Apache-2.0 | R1a-117 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/flowchart-vertical/registry-item.json | Apache-2.0 | R1a-117 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/freeze-frame-dressing/registry-item.json | Apache-2.0 | R1a-191 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/frost-sequence-camera-orbit/registry-item.json | Apache-2.0 | R1a-132 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/gallery-tunnel/registry-item.json | Apache-2.0 | R1a-161 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/glass-shard-title/registry-item.json | Apache-2.0 | R1a-055 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/glitch/registry-item.json | Apache-2.0 | R1a-034 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/gravitational-lens/registry-item.json | Apache-2.0 | R1a-158 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/halftone-field/registry-item.json | Apache-2.0 | R1a-145 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/heygen-avatar-promo-card/registry-item.json | Apache-2.0 | R1a-194 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/hw-frame/registry-item.json | Apache-2.0 | R1a-149 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/hw-path-text/registry-item.json | Apache-2.0 | R1a-148 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/hw-pipeline/registry-item.json | Apache-2.0 | R1a-117 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/hw-scribble-transition/registry-item.json | Apache-2.0 | R1a-150 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/hw-text-cloud/registry-item.json | Apache-2.0 | R1a-149 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/hw-title/registry-item.json | Apache-2.0 | R1a-148 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/hw-write-title/registry-item.json | Apache-2.0 | R1a-148 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/instagram-follow/registry-item.json | Apache-2.0 | R1a-015 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/ios26-liquid-glass/registry-item.json | Apache-2.0 | R1a-136 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/light-leak/registry-item.json | Apache-2.0 | R1a-032 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/liquid-glass-notification/registry-item.json | Apache-2.0 | R1a-110 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/liquid-glass-widgets/registry-item.json | Apache-2.0 | R1a-136 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/logo-outro/registry-item.json | Apache-2.0 | R1a-195 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/lottie-character-walk/registry-item.json | Apache-2.0 | R1a-212 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/lower-third-bild/registry-item.json | Apache-2.0 | R1a-027 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/lt-accent-underline/registry-item.json | Apache-2.0 | R1a-075 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/lt-bold-block/registry-item.json | Apache-2.0 | R1a-027 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/lt-clean-bar/registry-item.json | Apache-2.0 | R1a-027 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/lt-color-block/registry-item.json | Apache-2.0 | R1a-008 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/lt-dark-card/registry-item.json | Apache-2.0 | R1a-065 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/lt-kicker-name/registry-item.json | Apache-2.0 | R1a-075 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/lt-mask-reveal/registry-item.json | Apache-2.0 | R1a-074 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/lt-neon-border/registry-item.json | Apache-2.0 | R1a-209 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/lt-side-rule/registry-item.json | Apache-2.0 | R1a-075 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/lt-soft-pill/registry-item.json | Apache-2.0 | R1a-015 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/lt-stack-bars/registry-item.json | Apache-2.0 | R1a-027 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/macos-notification/registry-item.json | Apache-2.0 | R1a-110 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/macos-tahoe-liquid-glass/registry-item.json | Apache-2.0 | R1a-136 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/message-thread-reveal/registry-item.json | Apache-2.0 | R1a-109 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/mk-background/registry-item.json | Apache-2.0 | R1a-129 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/mk-callout-highlight/registry-item.json | Apache-2.0 | R1a-073, R1a-074 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/mk-clone-wall-transition/registry-item.json | Apache-2.0 | R1a-200 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/mk-line-graph/registry-item.json | Apache-2.0 | R1a-086 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/mk-placeholder-grid/registry-item.json | Apache-2.0 | R1a-194 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/mk-progress-stat/registry-item.json | Apache-2.0 | R1a-084, R1a-087 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/mk-specs-list/registry-item.json | Apache-2.0 | R1a-194 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/news-ticker/registry-item.json | Apache-2.0 | R1a-198 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/north-korea-locked-down/registry-item.json | Apache-2.0 | R1a-047 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/notes-reveal/registry-item.json | Apache-2.0 | R1a-061 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/notification-cascade/registry-item.json | Apache-2.0 | R1a-110 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/nyc-paris-flight/registry-item.json | Apache-2.0 | R1a-170 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/orbit-card/registry-item.json | Apache-2.0 | R1a-056 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/organic-light-leak-overlay/registry-item.json | Apache-2.0 | R1a-032 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/oscilloscope-trace/registry-item.json | Apache-2.0 | R1a-167 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/rack-focus/registry-item.json | Apache-2.0 | R1a-049 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/reddit-post/registry-item.json | Apache-2.0 | R1a-015 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/ridged-burn/registry-item.json | Apache-2.0 | R1a-038 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/ripple-waves/registry-item.json | Apache-2.0 | R1a-037 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/sdf-iris/registry-item.json | Apache-2.0 | R1a-022 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/share-sheet-carousel/registry-item.json | Apache-2.0 | R1a-113 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/slack-notification-ad/registry-item.json | Apache-2.0 | R1a-111 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/spain-map/registry-item.json | Apache-2.0 | R1a-168 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/spiral-galaxy/registry-item.json | Apache-2.0 | R1a-166 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/split-flap-board/registry-item.json | Apache-2.0 | R1a-092 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/spotify-card/registry-item.json | Apache-2.0 | R1a-087 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/swirl-vortex/registry-item.json | Apache-2.0 | R1a-157 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/thermal-distortion/registry-item.json | Apache-2.0 | R1a-160 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/thread-message-stack/registry-item.json | Apache-2.0 | R1a-109 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/tiktok-follow/registry-item.json | Apache-2.0 | R1a-015 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-3d/registry-item.json | Apache-2.0 | R1a-024 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-blur/registry-item.json | Apache-2.0 | R1a-018 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-cover/registry-item.json | Apache-2.0 | R1a-027 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-destruction/registry-item.json | Apache-2.0 | R1a-038 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-dissolve/registry-item.json | Apache-2.0 | R1a-017 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-distortion/registry-item.json | Apache-2.0 | R1a-034 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-grid/registry-item.json | Apache-2.0 | R1a-031 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-light/registry-item.json | Apache-2.0 | R1a-032 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-mechanical/registry-item.json | Apache-2.0 | R1a-029 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-other/registry-item.json | Apache-2.0 | R1a-016 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-push/registry-item.json | Apache-2.0 | R1a-020 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-radial/registry-item.json | Apache-2.0 | R1a-022 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-scale/registry-item.json | Apache-2.0 | R1a-025 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/ui-3d-reveal/registry-item.json | Apache-2.0 | R1a-053 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/us-map/registry-item.json | Apache-2.0 | R1a-168 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/us-map-bubble/registry-item.json | Apache-2.0 | R1a-169 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/us-map-flow/registry-item.json | Apache-2.0 | R1a-170 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/us-map-hex/registry-item.json | Apache-2.0 | R1a-171 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/vfx-anamorphic-flare/registry-item.json | Apache-2.0 | R1a-154 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/vfx-iphone-device/registry-item.json | Apache-2.0 | R1a-164 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/vfx-liquid-background/registry-item.json | Apache-2.0 | R1a-133 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/vfx-liquid-glass/registry-item.json | Apache-2.0 | R1a-133 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/vfx-magnetic/registry-item.json | Apache-2.0 | R1a-131 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/vfx-portal/registry-item.json | Apache-2.0 | R1a-134 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/vfx-shatter/registry-item.json | Apache-2.0 | R1a-132 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/vfx-text-cursor/registry-item.json | Apache-2.0 | R1a-155 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/vpn-youtube-spot/registry-item.json | Apache-2.0 | R1a-093 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/weight-wave/registry-item.json | OFL-1.1 | R1a-080 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/whip-pan/registry-item.json | Apache-2.0 | R1a-043 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/wireframe-portal-title/registry-item.json | Apache-2.0 | R1a-134 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/world-map/registry-item.json | Apache-2.0 | R1a-168 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/x-post/registry-item.json | Apache-2.0 | R1a-015 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/yt-comment-card/registry-item.json | Apache-2.0 | R1a-061 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/yt-lcd-background/registry-item.json | Apache-2.0 | R1a-137 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/yt-logo-intro/registry-item.json | Apache-2.0 | R1a-069 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/yt-lower-third/registry-item.json | Apache-2.0 | R1a-015 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/yt-prism-title/registry-item.json | Apache-2.0 | R1a-065 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/yt-vertical-fill/registry-item.json | Apache-2.0 | 정적 종횡비 채움과 복제 배경 구성이다. 모션은 새로운 기법이 아니다. |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/animated-bar-chart/registry-item.json | Apache-2.0 | R1a-085 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/arc-motion-path/registry-item.json | Apache-2.0 | R1a-004 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/ascii-render-pass/registry-item.json | Apache-2.0 | R1a-143 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/ascii-trail-reveal/registry-item.json | Apache-2.0 | R1a-143 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/aurora-drift/registry-item.json | Apache-2.0 | R1a-129 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/avatar-cloud/registry-item.json | Apache-2.0 | R1a-060 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/avatar-group-hover/registry-item.json | Apache-2.0 | R1a-053 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/badge-pop/registry-item.json | Apache-2.0 | R1a-008 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/beat-accent/registry-item.json | Apache-2.0 | R1a-125 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/beat-pulse-background/registry-item.json | Apache-2.0 | R1a-125 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/beat-timeline/registry-item.json | Apache-2.0 | R1a-010 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/before-after-wipe/registry-item.json | Apache-2.0 | R1a-193 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/blur-in/registry-item.json | Apache-2.0 | R1a-065 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/blur-out-up/registry-item.json | Apache-2.0 | R1a-067 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/bottom-up-letters/registry-item.json | Apache-2.0 | R1a-064 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/browser-device-stage/registry-item.json | Apache-2.0 | R1a-015 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/camera-rig-depth-stack/registry-item.json | Apache-2.0 | R1a-053 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/camera-scan-gate/registry-item.json | Apache-2.0 | R1a-120 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/camera-shake/registry-item.json | Apache-2.0 | R1a-051 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-blend-difference/registry-item.json | Apache-2.0 | 고정 글자의 픽셀 혼합법이다. 모션 기법 없이 색만 반전한다. |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-camera-follow/registry-item.json | Apache-2.0 | R1a-048 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-clip-wipe/registry-item.json | Apache-2.0 | R1a-066 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-editorial-emphasis/registry-item.json | Apache-2.0 | R1a-073 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-emoji-pop/registry-item.json | Apache-2.0 | R1a-003 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-glitch-rgb/registry-item.json | Apache-2.0 | R1a-034, R1a-137 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-gradient-fill/registry-item.json | Apache-2.0 | R1a-008 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-highlight/registry-item.json | Apache-2.0 | R1a-074 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-kinetic-slam/registry-item.json | Apache-2.0 | R1a-069 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-matrix-decode/registry-item.json | Apache-2.0 | R1a-071 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-neon-accent/registry-item.json | Apache-2.0 | R1a-073 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-neon-glow/registry-item.json | Apache-2.0 | R1a-182 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-parallax-layers/registry-item.json | Apache-2.0 | R1a-175 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-particle-burst/registry-item.json | Apache-2.0 | R1a-126 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-pill-karaoke/registry-item.json | Apache-2.0 | R1a-176 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-texture/registry-item.json | Apache-2.0 | R1a-152 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-weight-shift/registry-item.json | Apache-2.0 | R1a-079 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/card-resize/registry-item.json | Apache-2.0 | R1a-101 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/char-slam-explode/registry-item.json | Apache-2.0 | R1a-055 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/chart-story/registry-item.json | Apache-2.0 | R1a-085 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/chat-message/registry-item.json | Apache-2.0 | R1a-109 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/chat-thread/registry-item.json | Apache-2.0 | R1a-109 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/chromatic-aberration-wipe/registry-item.json | Apache-2.0 | R1a-035 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/code-terminal-run/registry-item.json | Apache-2.0 | R1a-100 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/colorama-wipe/registry-item.json | Apache-2.0 | R1a-210 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/comparison-split/registry-item.json | Apache-2.0 | R1a-193 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/confetti/registry-item.json | Apache-2.0 | R1a-126 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/conic-progress-ring/registry-item.json | Apache-2.0 | R1a-087 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/constellation-hub/registry-item.json | Apache-2.0 | R1a-060 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/count-up/registry-item.json | Apache-2.0 | R1a-084 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/cta-close/registry-item.json | Apache-2.0 | R1a-015 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/cta-lockup/registry-item.json | Apache-2.0 | R1a-015 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/cursor-glyph-trail/registry-item.json | Apache-2.0 | R1a-097 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/cut-the-curve/registry-item.json | Apache-2.0 | R1a-042 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/decline-chart/registry-item.json | Apache-2.0 | R1a-084 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/device-frame-stage/registry-item.json | Apache-2.0 | R1a-015 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/directional-wipe/registry-item.json | Apache-2.0 | R1a-020 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/drift-hold/registry-item.json | Apache-2.0 | R1a-123 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/dynamic-grid/registry-item.json | Apache-2.0 | R1a-214 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/echo-trail/registry-item.json | Apache-2.0 | R1a-141 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/extended-keyframe/registry-item.json | Apache-2.0 | R1a-013 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/facet-morph/registry-item.json | Apache-2.0 | R1a-039 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/fade-through/registry-item.json | Apache-2.0 | R1a-019 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/focus-blur-resolve/registry-item.json | Apache-2.0 | R1a-049 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/focus-rack/registry-item.json | Apache-2.0 | R1a-049 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/focus-swap/registry-item.json | Apache-2.0 | R1a-049 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/gesture-tap/registry-item.json | Apache-2.0 | R1a-094 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/gloss-sweep/registry-item.json | Apache-2.0 | R1a-078 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/grade-split-reveal/registry-item.json | Apache-2.0 | R1a-193 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/grain-field/registry-item.json | Apache-2.0 | R1a-139 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/grain-overlay/registry-item.json | Apache-2.0 | R1a-139 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/grid-card-assemble/registry-item.json | Apache-2.0 | R1a-194 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/grid-pixelate-wipe/registry-item.json | Apache-2.0 | R1a-031 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/halftone-dissolve/registry-item.json | Apache-2.0 | R1a-146 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/headline-slam/registry-item.json | Apache-2.0 | R1a-069 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/hw-arrow/registry-item.json | Apache-2.0 | R1a-076 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/hw-boil/registry-item.json | Apache-2.0 | R1a-149 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/hw-box-label/registry-item.json | Apache-2.0 | R1a-003, R1a-076 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/hw-callout-circle/registry-item.json | Apache-2.0 | R1a-003, R1a-076 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/hw-underline/registry-item.json | Apache-2.0 | R1a-075 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/icon-morph-beat/registry-item.json | Apache-2.0 | R1a-039 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/icon-swap/registry-item.json | Apache-2.0 | R1a-040 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/ink-bleed-reveal/registry-item.json | Apache-2.0 | R1a-147 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/inline-highlight/registry-item.json | Apache-2.0 | R1a-074 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/input-feedback/registry-item.json | Apache-2.0 | R1a-098, R1a-203 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/iris-reveal/registry-item.json | Apache-2.0 | R1a-022 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/keyframe-scrub-stack/registry-item.json | Apache-2.0 | R1a-115 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/kinetic-center-build/registry-item.json | MIT | R1a-068 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/kinetic-type-swap/registry-item.json | Apache-2.0 | R1a-070 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/light-sweep-pass/registry-item.json | Apache-2.0 | R1a-153 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/line-by-line-slide/registry-item.json | Apache-2.0 | R1a-066 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/line-swap/registry-item.json | Apache-2.0 | R1a-067 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/locked-nucleus-orbit/registry-item.json | Apache-2.0 | R1a-056 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/logo-brand-close/registry-item.json | Apache-2.0 | R1a-064 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/logo-sting/registry-item.json | Apache-2.0 | R1a-069 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/logo-wall/registry-item.json | Apache-2.0 | R1a-194 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/marker-checklist-card/registry-item.json | Apache-2.0 | R1a-194 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/marker-highlight/registry-item.json | Apache-2.0 | R1a-074 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/match-cut/registry-item.json | Apache-2.0 | R1a-041 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/matrix-decode/registry-item.json | Apache-2.0 | R1a-071 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/menu-morph/registry-item.json | Apache-2.0 | R1a-039, R1a-101 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/mesh-gradient-bg/registry-item.json | Apache-2.0 | R1a-129 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/micro-transitions/registry-item.json | Apache-2.0 | R1a-106 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/mk-emphasis-type/registry-item.json | Apache-2.0 | R1a-044 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/mk-usage-arc/registry-item.json | Apache-2.0 | R1a-087 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/modal-morph/registry-item.json | Apache-2.0 | R1a-102 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/morph-swap/registry-item.json | Apache-2.0 | R1a-040 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/morph-text/registry-item.json | Apache-2.0 | R1a-082 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/motion-blur/registry-item.json | Apache-2.0 | R1a-140 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/multi-device-splay/registry-item.json | Apache-2.0 | R1a-163 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/multiplayer-cursors/registry-item.json | Apache-2.0 | R1a-096 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/native-notification-pop/registry-item.json | Apache-2.0 | R1a-110 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/notes-typing/registry-item.json | Apache-2.0 | R1a-061 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/notification-pileup/registry-item.json | Apache-2.0 | R1a-111 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/notification-stack/registry-item.json | Apache-2.0 | R1a-110 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/number-pop-in/registry-item.json | Apache-2.0 | R1a-015 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/number-wheel/registry-item.json | Apache-2.0 | R1a-091 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/offset-path-traveler/registry-item.json | Apache-2.0 | R1a-004 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/onboarding-stepper-flow/registry-item.json | Apache-2.0 | R1a-108 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/ordered-dither-pass/registry-item.json | Apache-2.0 | R1a-144 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/outline-draw/registry-item.json | Apache-2.0 | R1a-118 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/oversized-cursor/registry-item.json | Apache-2.0 | R1a-093 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/overwhelm-surround/registry-item.json | Apache-2.0 | R1a-111 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/page-slide/registry-item.json | Apache-2.0 | R1a-020 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/pan-stations/registry-item.json | Apache-2.0 | R1a-046 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/panel-reveal/registry-item.json | Apache-2.0 | R1a-101 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/parallax-device-dive/registry-item.json | Apache-2.0 | R1a-053 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/parallax-unzoom/registry-item.json | Apache-2.0 | R1a-026 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/parallax-zoom/registry-item.json | Apache-2.0 | R1a-053 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/particle-image-reveal/registry-item.json | Apache-2.0 | R1a-128 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/particle-text-dissolve/registry-item.json | Apache-2.0 | R1a-127 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/per-word-crossfade/registry-item.json | Apache-2.0 | R1a-065 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/per-word-rise/registry-item.json | Apache-2.0 | R1a-065 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/perspective-marquee/registry-item.json | Apache-2.0 | R1a-198 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/physical-exit/registry-item.json | Apache-2.0 | R1a-016 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/press-ripple/registry-item.json | Apache-2.0 | R1a-093 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/pull-back-reveal/registry-item.json | Apache-2.0 | R1a-026 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/pull-to-refresh/registry-item.json | Apache-2.0 | R1a-112 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/push-in/registry-item.json | Apache-2.0 | R1a-045 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/radial-surround/registry-item.json | Apache-2.0 | R1a-059 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/rgb-glitch-text/registry-item.json | Apache-2.0 | R1a-034 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/rubber-band-bumper/registry-item.json | Apache-2.0 | R1a-112 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/scan-band/registry-item.json | Apache-2.0 | R1a-156 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/scramble-reveal/registry-item.json | Apache-2.0 | R1a-071 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/screen-flow-carousel/registry-item.json | Apache-2.0 | R1a-114 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/scroll-camera-story/registry-item.json | Apache-2.0 | R1a-054 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/scroll-feed/registry-item.json | Apache-2.0 | R1a-198 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/segmentation-flood/registry-item.json | Apache-2.0 | R1a-121 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/separator/registry-item.json | Apache-2.0 | R1a-118 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/settings-toggle-flow/registry-item.json | Apache-2.0 | R1a-104 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/shared-axis-y/registry-item.json | Apache-2.0 | R1a-067 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/shared-axis-z/registry-item.json | Apache-2.0 | R1a-025 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/sheet-spring-up/registry-item.json | Apache-2.0 | R1a-113 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/shimmer-sweep/registry-item.json | Apache-2.0 | R1a-078 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/shutter-slam/registry-item.json | Apache-2.0 | R1a-069 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/signup-flow/registry-item.json | Apache-2.0 | R1a-098 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/skeleton-reveal/registry-item.json | Apache-2.0 | R1a-107 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/slit-scan-reveal/registry-item.json | Apache-2.0 | R1a-142 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/slot-machine-roll/registry-item.json | Apache-2.0 | R1a-091 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/social-proof-card/registry-item.json | Apache-2.0 | R1a-194 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/soft-blob-touch/registry-item.json | Apache-2.0 | R1a-131 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/soft-blur-in/registry-item.json | Apache-2.0 | R1a-065 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/split-tilt-cards/registry-item.json | Apache-2.0 | R1a-057 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/spotlight-card/registry-item.json | Apache-2.0 | R1a-077 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/spring-pop/registry-item.json | Apache-2.0 | R1a-008 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/spring-stack-shuffle/registry-item.json | Apache-2.0 | R1a-115 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/stagger-cascade/registry-item.json | Apache-2.0 | R1a-007 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/stagger-lattice/registry-item.json | Apache-2.0 | R1a-007 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/staggered-fade-up/registry-item.json | Apache-2.0 | R1a-007 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/star-rating-fill/registry-item.json | Apache-2.0 | R1a-088 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/state-chip-rail/registry-item.json | Apache-2.0 | R1a-108 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/sticky-mock-swap/registry-item.json | Apache-2.0 | R1a-103 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/stitched-text-draw/registry-item.json | Apache-2.0 | R1a-151 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/stop-motion-cadence/registry-item.json | Apache-2.0 | R1a-185 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/store-badge-lockup/registry-item.json | Apache-2.0 | R1a-015 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/streaming-text/registry-item.json | Apache-2.0 | R1a-099 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/strikethrough-replace/registry-item.json | Apache-2.0 | R1a-083 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/success-check/registry-item.json | Apache-2.0 | R1a-203 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/svg-line-draw-loader/registry-item.json | Apache-2.0 | R1a-205 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/svg-mask-reveal/registry-item.json | Apache-2.0 | R1a-066 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/svg-stroke-trace/registry-item.json | Apache-2.0 | R1a-118 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/swipe-rail/registry-item.json | Apache-2.0 | R1a-095 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/tabs-slide-indicator/registry-item.json | Apache-2.0 | R1a-106 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/telemetry-hud/registry-item.json | Apache-2.0 | R1a-076 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/terminal-simulator/registry-item.json | Apache-2.0 | R1a-100 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/testimonial-card/registry-item.json | Apache-2.0 | R1a-066 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/testimonial-proof-card/registry-item.json | Apache-2.0 | R1a-066 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/text-match-cut/registry-item.json | Apache-2.0 | R1a-041 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/text-shimmer/registry-item.json | Apache-2.0 | R1a-078 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/text-stagger/registry-item.json | Apache-2.0 | R1a-007 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/text-state-swap/registry-item.json | Apache-2.0 | R1a-067 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/texture-mask-text/registry-item.json | Apache-2.0 | R1a-152 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/three-orbiting-cards/registry-item.json | Apache-2.0 | R1a-056 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/ticker-takeover/registry-item.json | Apache-2.0 | R1a-197 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/tilt-card/registry-item.json | Apache-2.0 | R1a-053 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/titlecard-calm/registry-item.json | Apache-2.0 | R1a-065 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/titlecard-lockup/registry-item.json | Apache-2.0 | R1a-065 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/toggle-flip/registry-item.json | Apache-2.0 | R1a-105 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/top-down-letters/registry-item.json | Apache-2.0 | R1a-064 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/touch-indicator/registry-item.json | Apache-2.0 | R1a-094 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/tracing-beam/registry-item.json | Apache-2.0 | R1a-202 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/tracking-in/registry-item.json | Apache-2.0 | R1a-081 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/trust-strip/registry-item.json | Apache-2.0 | R1a-194 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/type-match-cut/registry-item.json | Apache-2.0 | R1a-208 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/typed-prompt/registry-item.json | Apache-2.0 | R1a-061 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/typewriter/registry-item.json | Apache-2.0 | R1a-061 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/typing-indicator/registry-item.json | Apache-2.0 | R1a-204 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/ui-focus-zoom/registry-item.json | Apache-2.0 | R1a-047 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/variable-axis-type/registry-item.json | Apache-2.0 | R1a-079 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/variable-font-flex/registry-item.json | Apache-2.0 | R1a-079 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/vector-editor-rig/registry-item.json | Apache-2.0 | R1a-122 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/velocity-throw-snap/registry-item.json | Apache-2.0 | R1a-114 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/vignette/registry-item.json | Apache-2.0 | R1a-077 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/vox-annotate/registry-item.json | Apache-2.0 | R1a-076 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/whip-pan-cut/registry-item.json | Apache-2.0 | R1a-043 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/whiteboard-ink/registry-item.json | Apache-2.0 | R1a-118 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/wordmark-tiles/registry-item.json | Apache-2.0 | R1a-174, R1a-195 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/x-follow-card/registry-item.json | Apache-2.0 | R1a-015 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/yt-camera-move/registry-item.json | Apache-2.0 | R1a-047 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/yt-circle-pointer/registry-item.json | Apache-2.0 | R1a-076 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/yt-feather-highlight/registry-item.json | Apache-2.0 | R1a-077 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/yt-screen-warp/registry-item.json | Apache-2.0 | R1a-137 |
| https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/zoom-through-transition/registry-item.json | Apache-2.0 | R1a-025 |

## example 8개 분류

블록과 컴포넌트 목록과 별도로 manifest에서 확인한 예제다. 완성 영상이나 미학 예제를 같은 이름의 기법으로 추가하지 않았다.

| 항목 | 처리 |
| :--- | :--- |
| decision-tree | example 형식. 이번 블록과 컴포넌트 모션 원장에서는 제외 |
| kinetic-type | example 형식. 이번 블록과 컴포넌트 모션 원장에서는 제외 |
| nyt-graph | example 형식. 이번 블록과 컴포넌트 모션 원장에서는 제외 |
| play-mode | example 형식. 이번 블록과 컴포넌트 모션 원장에서는 제외 |
| product-promo | example 형식. 이번 블록과 컴포넌트 모션 원장에서는 제외 |
| swiss-grid | example 형식. 이번 블록과 컴포넌트 모션 원장에서는 제외 |
| vignelli | example 형식. 이번 블록과 컴포넌트 모션 원장에서는 제외 |
| warm-grain | example 형식. 이번 블록과 컴포넌트 모션 원장에서는 제외 |

## animate-text 24종

| 실제 portable spec 출처 | 라이선스 | 병합 기법 |
| :--- | :--- | :--- |
| https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/soft-blur-in.json | unknown, 참고만 | R1a-065, 단어 떠오르기 |
| https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/per-character-rise.json | unknown, 참고만 | R1a-064, 글자 시간차 등장 |
| https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/typewriter.json | unknown, 참고만 | R1a-061, 타자기 |
| https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/bottom-up-letters.json | unknown, 참고만 | R1a-064, 글자 시간차 등장 |
| https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/top-down-letters.json | unknown, 참고만 | R1a-064, 글자 시간차 등장 |
| https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/stagger-from-center.json | unknown, 참고만 | R1a-064, 글자 시간차 등장 |
| https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/stagger-from-edges.json | unknown, 참고만 | R1a-064, 글자 시간차 등장 |
| https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/per-word-crossfade.json | unknown, 참고만 | R1a-065, 단어 떠오르기 |
| https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/spring-scale-in.json | unknown, 참고만 | R1a-008, 스프링 오버슈트 |
| https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/shared-axis-y.json | unknown, 참고만 | R1a-069, 박자 타이포 |
| https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/blur-out-up.json | unknown, 참고만 | R1a-067, 줄 교체 |
| https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/kinetic-center-build.json | unknown, 참고만 | R1a-068, 중앙 정렬 문장 쌓기 |
| https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/short-slide-right.json | unknown, 참고만 | R1a-206, 묶음 이동과 단어 공개 |
| https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/short-slide-down.json | unknown, 참고만 | R1a-207, 세로 문장 쌓기 |
| https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/depth-parallax-words.json | unknown, 참고만 | R1a-053, 시차 이동 |
| https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/mask-reveal-up.json | unknown, 참고만 | R1a-066, 마스크 글자 공개 |
| https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/line-by-line-slide.json | unknown, 참고만 | R1a-066, 마스크 글자 공개 |
| https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/micro-scale-fade.json | unknown, 참고만 | R1a-015, 스케일 팝 등장 |
| https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/shimmer-sweep.json | unknown, 참고만 | R1a-206, 묶음 이동과 단어 공개 |
| https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/fade-through.json | unknown, 참고만 | R1a-019, 색면 경유 전환 |
| https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/shared-axis-z.json | unknown, 참고만 | R1a-025, 줌 통과 |
| https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/scale-down-fade.json | unknown, 참고만 | R1a-015, 스케일 팝 등장 |
| https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/focus-blur-resolve.json | unknown, 참고만 | R1a-049, 랙 포커스 |
| https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/shared-axis-x.json | unknown, 참고만 | R1a-020, 밀기 전환 |

`shared-axis-y`의 실제 명세는 이동 없는 계단형 단어 하드 컷이다. `shimmer-sweep`의 실제 명세는 짧은 좌우 이동과 흐림 공개다. 레지스트리의 같은 이름과 동작이 다르므로 실제 현상에 따라 병합했다.

## 자막 identity 35종 병합

출처: claude-skill:embedded-captions/CATALOG.md. 라이선스 unknown. 색과 글꼴 등 정적 특징은 독립 기법으로 세지 않았다.

| identity | 사용한 동작 |
| :--- | :--- |
| cream | R1a-065, R1a-124 |
| ink | R1a-179 |
| editorial | R1a-148 |
| keynote | R1a-066 |
| documentary | R1a-069 |
| loud | R1a-069 |
| neon | R1a-182 |
| glitch | R1a-034 |
| chrome | R1a-078 |
| velocity | R1a-140 |
| anchor | R1a-065, R1a-075 |
| ordnance | R1a-179, R1a-051 |
| terminal | R1a-061, R1a-071 |
| neonsign | R1a-148, R1a-182 |
| stardust | R1a-127 |
| stomp | R1a-177, R1a-069 |
| lastpage | R1a-049 |
| scoreboard | R1a-092, R1a-091 |
| transit | R1a-180 |
| vhs | R1a-036, R1a-141 |
| arcade | R1a-031, R1a-015 |
| dossier | R1a-061, R1a-179 |
| laser | R1a-184 |
| thunder | R1a-183 |
| hologram | R1a-181 |
| biolume | R1a-124, R1a-123 |
| aurora | R1a-129, R1a-078 |
| spectrum | R1a-167 |
| papercut | R1a-185 |
| popup | R1a-186 |
| chalkboard | R1a-187 |
| graffiti | R1a-188 |
| brush | R1a-189 |
| inkwater | R1a-147 |
| ransom | R1a-185, R1a-179 |

## 못 연 곳과 제한

- https://api.github.com/repos/heygen-com/hyperframes/git/trees/main?recursive=1 : HTTP 403. API 트리 대신 공식 CLI 목록과 386개 raw registry-item.json을 전부 확보해 조사 완료했다.
- https://raw.githubusercontent.com/pixel-point/animate-text/main/SKILL.md : HTTP 404. 실제 기본 브랜치 master의 skills/animate-text/assets/specs 경로로 24개 모두 확보했다.
- pixel-point/animate-text의 master 루트 LICENSE, LICENSE.md, LICENSE.txt : 모두 HTTP 404. 라이선스는 unknown으로 남겼다.
- 원격 리비전은 현재 main과 master다. CLI 스냅샷과 읽은 metadata를 .cache/R1a에 남겼다. 향후 항목 변경 시 원장 출처의 내용을 다시 확인해야 한다.
- local:System Volume Information : 상위 AGENTS 검색에서 권한 거부였다. 작업 폴더와 대상 스킬 조사에는 영향을 주지 않았다.

## 검증

- JSONL 전 행을 파싱하고 필수 키, 허용 family와 runtime, ID 연속성, 출처 존재, 금지 줄표, 이름 중복을 검사했다.
- 규칙 48개, 블루프린트 22개, CSS 전환 문서 13개, 텍스트 명세 24개, 레지스트리 블록과 컴포넌트 386개가 분류 누락 없이 연결되거나 제외 이유를 갖는다.
- 원장은 실행 코드와 프롬프트 템플릿을 포함하지 않는다. 사용자 지정 스키마에 prompt 키가 없어 정의, 파라미터, 전달 효과를 이후 도감의 프롬프트 작성 근거로 남겼다.
