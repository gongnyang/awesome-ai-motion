# Attributions

출처와 라이선스 고지 · Sources and licenses

This repository collects motion **techniques** (ideas, vocabulary, parameters). All clip implementations, cards and prompts are original to this repository and released under MIT. No third-party code was copied into `effects/` or `recipes/`.

이 레포는 모션 **기법**(아이디어·용어·파라미터)을 모았다. 클립 구현, 카드, 프롬프트는 전부 이 레포에서 새로 썼고 MIT로 배포한다. `effects/`·`recipes/`에 서드파티 코드를 복사하지 않았다.

## Bundled third-party files

| File | Project | License |
|---|---|---|
| `lib/gsap.min.js` | [GSAP 3.14.2](https://gsap.com) by GreenSock (Webflow) | [GreenSock Standard "no charge" license](https://gsap.com/standard-license), redistributed unmodified |
| `lib/fonts/BodoniModa.ttf` | [Bodoni Moda](https://github.com/indestructible-type/Bodoni) by Owen Earl (indestructible type*) | SIL Open Font License 1.1 |
| `lib/fonts/IBMPlexMono-Regular.ttf` | [IBM Plex Mono](https://github.com/IBM/plex) by IBM | SIL Open Font License 1.1 |

Web fonts loaded at runtime on the site (not redistributed): Noto Serif KR (Google Fonts, OFL 1.1), Pretendard (jsDelivr, OFL 1.1).

## Concept sources cited by effect cards

| Source | License / use | Effects |
|---|---|---|
| [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) | MIT + Commons Clause v1.0 | `spring-overshoot` `follow-through` `fade-slide` `hinge-reveal` `puff-reveal` `blur-resolve` `paper-shred-exit` `jello` `letter-drop-pile` `mask-reveal` `glyph-roll` `split-flap` `warp-dissolve` `perspective-tilt` `annotation-callout` `dot-regroup` `line-draw` `spotlight` `adaptive-header` `card-stack-shuffle` `file-upload-stack` `icon-flight` `image-fanout` `magnetic-attraction` `scroll-grid-expand` `toggle-slide` `progressive-disclosure` `path-beam` `corner-peel` `elastic-mesh` `outline-then-fill` `perforated-tear` `glass-refraction` `god-rays` `liquid-metal` `silk-flow` `animated-dither` `ascii-motion` `flame-noise-loop` `flowmap-smear` `progressive-blur` `text-particle-dissolve` `fluid-ink` `particle-vortex` `rigid-body-cascade` `globe-connection-arcs` `object-turntable` `text-extrusion` `coverflow` `image-unroll` `paper-crumple` `perspective-flatten` `perspective-grid-drift` `starfield-warp` `float-loop` `ambient-glow` `bar-wave-loader` `color-cycle` `energy-orb` `flickering-grid` `flowing-wave-field` `gradient-drift` `grid-pulse` `mesh-gradient-flow` `orbit-loop` `radar-sweep` `tiled-pattern-drift` `circular-text-spin` |
| [mifi/editly](https://github.com/mifi/editly#transition-types) | MIT | `blur-dissolve` `bounce-transition` `clock-wipe` `column-melt` `cube-transition` `flash-transition` `halftone-dissolve` `page-turn` `perspective-swap` `ripple-dissolve` `rotating-tile-dissolve` `scale-swap` `squeeze-transition` `stereo-viewer-swap` `tangent-blur-spin` `channel-phase-dissolve` `color-distance-dissolve` `datamosh-transition` `fly-eye-transition` `glitch-transition` `grayscale-dissolve` `grid-flip` `hsv-dissolve` `kaleidoscope-transition` `light-leak-transition` `luma-wipe` `luminance-melt` `mosaic-traverse` `multiply-dissolve` `outline-dissolve` `retreat-cover` `ring-zoom` `shatter-transition` `static-band-wipe` `swirl-transition` `tinted-burn-dissolve` `translate-fade` `tv-static-transition` `tv-tracking-transition` `warp-dissolve` `wave-dissolve` `wind-wipe` `zoom-flash` `zoom-wipe` |
| [animista.net](https://animista.net/play) | BSD-2-Clause (FreeBSD) | `easing-curves` `blurred-slide` `elliptic-entrance` `fade-slide` `fade` `flicker-reveal` `flip-reveal` `hinge-reveal` `puff-reveal` `roll-reveal` `rotate-reveal` `slide` `swirl-reveal` `tilt-entrance` `blur-resolve` `jello` `pulse` `rotate-scale` `wobble` `blink` `bounce-attention` `swing` `tracking-reveal` `ken-burns` `neon-sign-flicker` `hard-shadow-pop` `shadow-elevation` `ripple-rings` `color-cycle` `gradient-drift` |
| [airbnb/lottie-web](https://github.com/airbnb/lottie-web) | MIT | `overlapping-action` `follow-through` `motion-blend` `smear-frame` `continuous-motion` `flicker-reveal` `blur-resolve` `swing` `grid-draw` `boolean-path-merge` `offset-path` `pucker-bloat` `round-corners` `shape-repeater` `tapered-stroke` `zigzag-path` `text-on-path` `hatch-fill` `light-sweep` `strobe-flash` `layer-separation` `shadow-elevation` `letter-flip-3d` `marquee` `stroke-chase` `wiggle` `marching-ants` `offset-loop` `lower-third-reveal` |
| [Heer & Robertson 2007](https://sites.stat.columbia.edu/gelman/communication/HeerRobertson2007.pdf) | unknown | `group-motion` `shape-morph` `dot-regroup` `aggregate-split-merge` `axis-rescale` `chart-filter-fade` `color-encoding-transition` `donut-ring-staging` `freeze-replay` `histogram-rebin` `linear-log-transition` `matrix-sort` `percent-normalization` `pie-donut-update` `rank-transition` `size-encoding` `stack-layer-addition` `stacked-grouped-transition` `streamgraph-baseline-shift` `table-to-chart` `tree-expand-collapse` `tree-reroot` `unit-aggregate-transition` `facet-single-transition` `fisheye-lens` `staged-chart-transition` `spotlight` `zoom-callout` `progressive-disclosure` |
| [greensock/GSAP](https://gsap.com/docs/v3/GSAP/Timeline/) | GSAP Standard License | `motion-hierarchy` `timing-spacing` `additive-motion` `temporal-overlap` `char-stagger` `kinetic-beats` `text-scramble` `typewriter` `word-emphasis` `iris-mask` `shape-morph` `whip-pan` `zoom-through` `annotation-callout` `bar-grow` `count-up` `dot-regroup` `line-draw` `unit-grid` `answer-stream` `cursor-click` `spotlight` `typing-input` `ui-scroll` `zoom-callout` `progressive-disclosure` `split-compare` |
| [animate-css/animate.css](https://github.com/animate-css/animate.css) | Hippocratic-2.1 | `spring-overshoot` `back-entrance` `fade-slide` `fade` `flip-reveal` `hinge-drop` `jack-in-the-box` `light-speed` `roll-reveal` `rotate-reveal` `slide` `letter-spin-in` `jello` `pulse` `tada` `wobble` `blink` `bounce-attention` `shake` `swing` `velocity-skew` `card-flip` |
| [css-loaders.com](https://css-loaders.com/) | unknown | `indeterminate-progress` `spin-loop` `bar-wave-loader` `chasing-dots` `chomp-loader` `circular-dot-wave` `flowing-wave-field` `folding-cube-loader` `grid-pulse` `hourglass-loader` `hypnotic-pattern` `infinity-path-loader` `nature-growth-loop` `orbit-loop` `path-conveyor` `rolling-shape-loop` `rotating-plane-loader` `wandering-squares` `watching-eyes` |
| [IanLunn/Hover](https://github.com/IanLunn/Hover) | MIT personal/open-source + paid commercial | `border-reveal` `pulse` `rotate-scale` `wobble` `blink` `bounce-attention` `underline-draw` `annotation-callout` `icon-flight` `corner-peel` `round-corners` `shadow-elevation` `float-loop` `ripple-rings` |
| [chartjs/Chart.js](https://www.chartjs.org/docs/latest/configuration/animations.html) | MIT | `selection-travel` `boxplot-update` `chart-filter-fade` `chart-path-morph` `chart-scrub` `color-encoding-transition` `confidence-band-reveal` `interval-expansion` `radar-morph` `size-encoding` `route-highlight` `line-tension-loop` |
| local/HyperFrames-skills (`claude-skill:embedded-captions/CATALOG.md`) | unknown | `handwriting-write-on` `oscilloscope-trace` `ink-bleed` `line-boil` `electric-arc` `analog-medium-text` `caption-takeover` `hologram-text-boot` `laser-ignite-text` `led-matrix-text` `papercut-placement` `stamp-impact` |
| [Adobe](https://helpx.adobe.com/premiere/desktop/add-video-effects/types-of-effects/transitions.html) | unknown | `spring-overshoot` `frame-border-transition` `lens-flare-transition` `light-leak-transition` `light-ray-transition` `luma-wipe` `mirror-transition` `origami-fold` `phosphor-dissolve` `shatter-transition` `solarized-dissolve` |
| [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/distort-effects.html) | unknown | `lens-distortion-zoom` `bend` `mesh-warp` `bulge-lens` `kaleidoscope` `polar-wrap` `turbulent-displace` `twirl` `wave-warp` `corner-pin` `spherize` |
| [motion-canvas/motion-canvas](https://github.com/motion-canvas/motion-canvas) | MIT | `spring-overshoot` `focus-handoff` `quote-card-build` `spatial-word-composition` `count-up` `rolling-digits` `countdown-ticker` `code-diff-reveal` `credit-roll` `lower-third-reveal` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/gallery-index.json`) | Apache-2.0 | `blinds-reveal` `text-scatter-assemble` `text-wave` `tracking-reveal` `camera-orbit` `vanishing-point-shift` `progress-ring` `dashed-flow` `outline-then-fill` `film-grain` |
| [tobiasahlin/SpinKit](https://github.com/tobiasahlin/SpinKit) | MIT | `loading-dots` `spin-loop` `bar-wave-loader` `chasing-dots` `circular-dot-wave` `folding-cube-loader` `grid-pulse` `orbit-loop` `rotating-plane-loader` `wandering-squares` |
| local/HyperFrames-skills (`claude-skill:music-to-video/references/motion-primitive-catalog.md`) | unknown | `beat-sync` `radial-speed-lines` `freeze-frame-dressing` `camera-shake` `pixel-sort` `text-light-rays` `gooey-text-morph` `domain-warping` `electric-arc` |
| [miniMAC/magic](https://github.com/miniMAC/magic) | MIT | `back-entrance` `bomb-exit` `foolish-reveal` `hinge-reveal` `magic-exit` `puff-reveal` `slide` `swap-entrance` `swirl-reveal` |
| [shadcn-ui/ui](https://github.com/shadcn-ui/ui) | MIT | `push-transition` `annotation-callout` `line-draw` `carousel-slide` `drawer-slide` `modal-lift` `toggle-slide` `indeterminate-progress` `skeleton-shimmer` |
| [greensock/GSAP](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | GSAP Standard License | `wipe` `zoom-to-detail` `scroll-scrub-cinema` `ui-scroll` `adaptive-header` `scroll-snap` `scroll-scrub` `pinned-scrollytelling` `velocity-skew` |
| [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/generate-effects.html) | unknown | `audio-spectrum` `audio-waveform` `path-beam` `grid-draw` `hatch-fill` `lens-flare` `light-sweep` `voronoi-motion` `stroke-chase` |
| [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/drawing-painting-and-paths/shapes-and-shape-attributes/shape-attributes-paint-operations-path.html) | unknown | `boolean-path-merge` `offset-path` `pucker-bloat` `round-corners` `shape-repeater` `zigzag-path` `line-boil` `stroke-chase` `marching-ants` |
| [greensock/GSAP](https://gsap.com/docs/v3/GSAP/CorePlugins/CSS/) | GSAP Standard License | `blur-reveal` `highlight-sweep` `push-transition` `giant-mask-reveal` `perspective-tilt` `turbulent-displace` `card-flip-stack` `deep-parallax` |
| [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/indication.py) | MIT | `pulse` `blink` `circumscribe` `focus-contraction` `radial-speed-lines` `shake` `path-highlight` `traveling-deformation-wave` |
| [apache/echarts](https://echarts.apache.org/handbook/en/basics/release-note/5-2-0/) | Apache-2.0 | `shape-morph` `aggregate-split-merge` `cartogram-transition` `percent-normalization` `pie-donut-update` `sankey-reflow` `treemap-resize` `map-to-bar-chart` |
| [pmndrs/react-spring](https://www.react-spring.dev/examples) | MIT | `accordion-expand` `carousel-slide` `cursor-follow` `dock-magnification` `layout-reflow` `toggle-slide` `turbulent-displace` `card-flip` |
| [jschr/textillate](https://github.com/jschr/textillate) | MIT | `spring-overshoot` `fade` `hinge-drop` `letter-spin-in` `swing` `quote-card-build` `lower-third-reveal` |
| [Richard E. Mayer / Wiley](https://onlinelibrary.wiley.com/doi/10.1111/jcal.12197) | unknown | `motion-hierarchy` `focus-handoff` `word-emphasis` `annotation-tracking` `step-recap` `narration-sync` `segmented-explanation` |
| [loadingio/css-spinner](https://github.com/loadingio/css-spinner) | CC0 loaders (README; root LICENSE absent) | `pulse` `spin-loop` `bar-wave-loader` `chasing-dots` `circular-dot-wave` `grid-pulse` `hourglass-loader` |
| [apache/echarts](https://echarts.apache.org/handbook/en/how-to/animation/transition/) | Apache-2.0 | `axis-rescale` `boxplot-update` `interval-expansion` `matrix-sort` `radar-morph` `waterfall-accumulation` `object-constant-update` |
| [vega/vega](https://vega.github.io/vega/docs/event-streams/) | BSD-3-Clause | `brush-linked-update` `chart-scrub` `density-field-animation` `freeze-replay` `hypothetical-outcome-cycle` `map-event-accumulation` `streaming-chart` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/adapters/html-in-canvas-patterns.md`) | unknown | `magnetic-distortion` `shatter` `crt-scanlines` `glass-refraction` `holographic-sheen` `pixel-sort` `portal-reveal` |
| [Disney 12 principles, Thomas & Johnston, The Illusion of Life (1981)](https://en.wikipedia.org/wiki/Twelve_basic_principles_of_animation) | 개념 인용 | `overlapping-action` `anticipation` `squash-stretch` `arc-motion` `follow-through` `timing-spacing` |
| [pixel-point/animate-text](https://github.com/pixel-point/animate-text) | unknown | `spring-overshoot` `fade` `slide` `blur-resolve` `phrase-push-build` `parallax` |
| [codrops/TextBlockTransitions](https://github.com/codrops/TextBlockTransitions) | MIT | `squash-stretch` `flicker-reveal` `slide` `text-scatter-assemble` `text-half-split` `letter-flip-3d` |
| [greensock/GSAP](https://gsap.com/docs/v3/GSAP/Tween/) | GSAP Standard License | `retarget-motion` `infinite-pan` `infinite-zoom` `particle-assemble` `camera-flythrough` `breathing-loop` |
| motion dictionary 1-principles.md#8. 2D 속성 기본 동작 | own | `rotate` `scale` `blur-resolve` `clip-reveal` `skew` `motion-blur` |
| [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/transform.py) | MIT | `state-tween` `color-transition` `translate-fade` `copy-to-target` `plane-transformation` `cyclic-position-swap` |
| [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/animating-text/text-animation/animating-text.html) | unknown | `flicker-reveal` `blur-resolve` `swing` `outline-then-fill` `text-on-path` `letter-flip-3d` |
| [Flourish](https://app.flourish.studio/@flourish/scatter) | unknown | `selection-travel` `dot-regroup` `boxplot-update` `motion-trails` `size-encoding` `facet-single-transition` |
| [FFmpeg/FFmpeg](https://ffmpeg.org/ffmpeg-filters.html#xfade) | LGPL-2.1-or-later | `clock-wipe` `dip-to-color` `squeeze-transition` `color-distance-dissolve` `grayscale-dissolve` `wind-wipe` |
| [GSAP Timeline.to()](https://gsap.com/docs/v3/GSAP/Timeline/to()/) | 공식 API 문서 참조 | `ken-burns` `pan` `parallax` `push-in` `rack-focus` `zoom-to-detail` |
| [fand/vfx-js](https://github.com/fand/vfx-js/tree/main/packages/effects#effects) | MIT | `digital-rain` `pixel-sort` `bloom-pulse` `codec-glitch` `halftone-motion` `voronoi-motion` |
| [iart-ai/webgl-animation-skills](https://github.com/iart-ai/webgl-animation-skills/blob/HEAD/skills/particle-system/SKILL.md) | MIT | `fire-plume` `particle-force-field` `particle-network` `rain-streaks` `smoke-plume` `spark-spray` |
| [motiondivision/motion](https://motion.dev/docs/react-layout-animations) | MIT | `arc-motion` `shape-morph` `accordion-expand` `active-indicator-glide` `layout-reflow` |
| motion dictionary 1-principles.md#6. 모션 위계·코레오그래피 | own | `motion-hierarchy` `group-motion` `retarget-motion` `state-tween` `progressive-disclosure` |
| [dcmcand/dynamic-typography-videos](https://github.com/dcmcand/dynamic-typography-videos) | Apache-2.0 | `spatial-word-composition` `countdown-ticker` `caption-page-swap` `karaoke-caption` `lyric-line-focus` |
| [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/work-with-layers/camera-layer/cameras-lights-points-interest.html) | unknown | `zoom-through` `pan` `push-in` `rack-focus` `camera-orbit` |
| [Screen Studio](https://screen.studio/) | unknown | `zoom-to-detail` `camera-follow` `cursor-click` `zoom-callout` `idle-cursor-hide` |
| [Flourish](https://flourish.studio/blog/line-chart-race/) | unknown | `camera-follow` `axis-rescale` `bump-rank-reveal` `line-chart-race` `timeline-scrub` |
| [Observable](https://old.observablehq.com/blog/effective-animation) | unknown | `cartogram-transition` `density-field-animation` `map-event-accumulation` `uncertainty-needle` `path-convoy` |
| local/bookforge (`claude-skill:bookforge/references/diagrams.md`) | MIT | `gantt-progress` `radar-morph` `sequence-message-draw` `state-transition-walk` `venn-overlap` |
| local/claude-synced-skills (`claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/algorithmic-art/SKILL.md`) | Apache-2.0 | `branch-growth` `flow-field` `packing-relaxation` `particle-force-field` `wave-interference` |
| [uiverse-io/galaxy](https://github.com/uiverse-io/galaxy) | MIT | `indeterminate-progress` `skeleton-shimmer` `spin-loop` `chomp-loader` `circular-dot-wave` |
| [greensock/GSAP](https://gsap.com/docs/v3/Eases/) | GSAP Standard License | `anticipation` `easing-curves` `spring-overshoot` `bounce-landing` |
| [codrops/LetterEffects](https://github.com/codrops/LetterEffects) | unknown | `squash-stretch` `letter-spin-in` `underline-draw` `letter-flip-3d` |
| [codrops/OnScrollTypographyAnimations](https://github.com/codrops/OnScrollTypographyAnimations) | MIT | `squash-stretch` `flicker-reveal` `text-scatter-assemble` `letter-flip-3d` |
| motion dictionary 4-explainer-learning.md#C. 템포·리듬·편집과 비트 동기 | own | `beat-sync` `hard-cut` `split-edit` `time-compression` |
| local/embedded-captions (`claude-skill:embedded-captions/references/motion-vocabulary.md`) | unknown | `bounce-landing` `blur-reveal` `word-rise-fade` `crosshair-caption` |
| [michalsnik/aos](https://github.com/michalsnik/aos) | MIT | `fade-slide` `fade` `flip-reveal` `slide` |
| [3b1b/manim](https://github.com/3b1b/manim/blob/master/manimlib/animation/indication.py) | MIT | `outline-flash-reveal` `circumscribe` `underline-draw` `path-highlight` |
| [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/creation.py) | MIT | `spiral-assembly` `handwriting-write-on` `anchored-substitution` `outline-then-fill` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/techniques.md`) | unknown | `audio-reactive-pulse` `variable-font-axis-morph` `film-grain` `domain-warping` |
| motion dictionary 1-principles.md#7. 연속성·공간 모델·시선 유도 | own | `focus-handoff` `match-cut` `line-draw` `object-constant-update` |
| [motion-canvas/motion-canvas](https://motioncanvas.io/docs/code/) | MIT | `selection-travel` `code-diff-reveal` `code-result-alternation` `matching-token-transform` |
| [codrops/TextStylesHoverEffects](https://github.com/codrops/TextStylesHoverEffects) | unknown | `text-color-wipe` `text-window-fill` `text-cutout-zoom` `text-half-split` |
| [Vox](https://www.youtube.com/watch?v=kIID5FDi2JQ) | unknown | `highlight-sweep` `map-outline-comparison` `globe-map-morph` `timeline-scrub` |
| [motiondivision/motion](https://motion.dev/docs/react-animate-presence) | MIT | `crossfade` `exit-before-enter` `layout-reflow` `modal-lift` |
| [Adobe](https://helpx.adobe.com/premiere/desktop/add-video-effects/effects-and-transitions-library/list-of-video-transitions.html) | unknown | `whip-pan` `band-slide` `paint-splatter-wipe` `zigzag-wipe` |
| [Adobe](https://www.adobe.com/creativecloud/video/post-production/cuts-in-film.html) | unknown | `eyeline-match` `insert-shot` `reaction-cut` `shot-reverse-shot` |
| [iart-ai/webgl-animation-skills, shader-glsl](https://github.com/iart-ai/webgl-animation-skills/blob/HEAD/skills/shader-glsl/SKILL.md) | MIT | `noise-dissolve` `ripple-distortion` `fractal-clouds` `mesh-gradient-flow` |
| [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/work-with-layers/3d-layers/3d-layers.html) | unknown | `parallax` `card-flip` `text-extrusion` `layer-separation` |
| [Apple](https://www.apple.com/apple-events/) | unknown | `push-in` `annotation-tracking` `object-turntable` `exploded-assembly` |
| [d3/d3-zoom](https://d3js.org/d3-zoom) | ISC | `camera-follow` `fly-to` `brush-linked-update` `zoom-callout` |
| [the-pudding/pop-love-songs](https://github.com/the-pudding/pop-love-songs) | MIT | `dot-regroup` `beeswarm-settling` `bump-rank-reveal` `unit-aggregate-transition` |
| [d3/d3-sankey](https://github.com/d3/d3-sankey) | BSD-3-Clause | `ribbon-particle-transition` `sankey-reflow` `sankey-ribbon-grow` `route-highlight` |
| [the-pudding/sankey-nba](https://github.com/the-pudding/sankey-nba) | MIT | `sankey-ribbon-grow` `tree-expand-collapse` `tree-reroot` `route-highlight` |
| [greensock/GSAP](https://gsap.com/docs/v3/GSAP/UtilityMethods/) | GSAP Standard License | `dependent-geometry` `graded-array-motion` `breathing-loop` `marquee` |
| [bradley/Blotter](https://github.com/bradley/Blotter) | MIT | `glitch-rgb-split` `text-liquid-distortion` `text-slice-offset` `particle-filled-text` |
| [magicuidesign/magicui](https://github.com/magicuidesign/magicui) | MIT | `neon-sign-flicker` `ripple-rings` `skeleton-shimmer` `mesh-gradient-flow` |
| [anthropics/skills](https://github.com/anthropics/skills/blob/HEAD/skills/algorithmic-art/SKILL.md) | Apache-2.0 | `branch-growth` `packing-relaxation` `voronoi-motion` `wave-interference` |
| [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/work-with-expressions/expression-examples/expression-examples.html) | unknown | `overlapping-action` `breathing-loop` `wiggle` |
| motion dictionary 1-principles.md#3. 디즈니 12원칙 전체 | own | `anticipation` `arc-motion` `additive-motion` |
| [motiondesign.school](https://motiondesign.school/blog/animation-principles-in-logo-animation/) | unknown | `anticipation` `squash-stretch` `follow-through` |
| [GSAP stagger 공식 문서](https://gsap.com/resources/getting-started/Staggers/) | 문서 참조 | `stagger` `path-convoy` `loading-dots` |
| motion dictionary 1-principles.md#5. 타이밍·간격·리듬 기본기 | own | `action-sequence` `temporal-overlap` `scroll-scrub` |
| motion dictionary 1-principles.md#4.1 곡선의 읽는 법 | own | `bounce-landing` `stepped-motion` `shake` |
| [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/work-with-expressions/expression-language-reference/expression-language-reference.html) | unknown | `continuous-motion` `temporal-wiggle` `offset-loop` |
| [d3/d3-transition](https://d3js.org/d3-transition) | ISC | `group-motion` `retarget-motion` `streaming-chart` |
| [motiondivision/motion](https://motion.dev/docs/react-transitions) | MIT | `inertial-glide` `elastic-boundary-return` `breathing-loop` |
| [jamiebuilds/tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) | MIT | `fade-slide` `fade` `rotate-reveal` |
| [foundation/motion-ui](https://github.com/foundation/motion-ui) | MIT | `fade` `hinge-reveal` `slide` |
| [Cambridge University Press](https://www.cambridge.org/core/books/abs/cambridge-handbook-of-multimedia-learning/principles-for-managing-essential-processing-in-multimedia-learning-segmenting-pretraining-and-modality-principles/DD24C2F48B9B1277CE59F78276110258) | unknown | `word-emphasis` `narration-sync` `segmented-explanation` |
| local/HyperFrames-skills (`claude-skill:music-to-video/references/template-catalog.md`) | unknown | `font-shuffle` `split-lockup` `texture-fill-motion` |
| [Art of the Title](https://www.artofthetitle.com/title/catch-me-if-you-can/) | unknown | `scene-integrated-title` `title-card-rhythm` `credit-roll` |
| [greensock/GSAP](https://gsap.com/docs/v3/Plugins/Flip/) | GSAP Standard License | `crossfade` `shape-morph` `layout-reflow` |
| [Kurzgesagt](https://kurzgesagt.org/what-we-do?visit=videos) | unknown | `zoom-through` `character-articulation` `process-loop` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/transitions/css-distortion.md`) | unknown | `chromatic-wipe` `glitch-rgb-split` `vhs-tracking` |
| [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/transition-effects.html) | unknown | `page-turn` `grid-flip` `luma-wipe` |
| [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/stylize-effects.html) | unknown | `edge-trace-transition` `shatter-transition` `strobe-flash` |
| [Adobe](https://www.adobe.com/creativecloud/video/production/cinematography/camera-shots-and-angles.html) | unknown | `insert-shot` `reaction-cut` `shot-reverse-shot` |
| motion dictionary 4-explainer-learning.md#B. 공개 순서와 시선 유도 | own | `zoom-to-detail` `annotation-callout` `cursor-click` |
| [pqina/flip](https://github.com/pqina/flip) | MIT | `count-up` `rolling-digits` `countdown-ticker` |
| [d3/d3-interpolate](https://d3js.org/d3-interpolate) | ISC | `unit-grid` `choropleth-transition` `color-encoding-transition` |
| [d3/d3-force](https://d3js.org/d3-force/simulation) | ISC | `beeswarm-settling` `force-layout-settling` `temporal-network` |
| [MIT Visualization Group](https://vis.csail.mit.edu/pubs/animated-vega-lite/) | unknown | `brush-linked-update` `matrix-sort` `facet-single-transition` |
| [Observable @d3](https://observablehq.com/@d3/streamgraph-transitions) | unknown | `chart-path-morph` `stack-layer-addition` `streamgraph-baseline-shift` |
| [3b1b/videos](https://github.com/3b1b/videos/blob/master/_2017/eoc/chapter2.py) | CC-BY-NC-SA-4.0 | `chart-scrub` `delta-triangle-shrink` `secant-to-tangent` |
| [Flourish](https://helpcenter.flourish.studio/hc/en-us/articles/8761554645263-Sports-race-an-overview) | unknown | `freeze-replay` `track-data-race` `timeline-scrub` |
| [motiondivision/motion](https://motion.dev/docs/react-drag) | MIT | `drag-and-drop` `elastic-boundary-return` `swipe-action-reveal` |
| [3b1b/videos](https://github.com/3b1b/videos/blob/master/_2016/eola/chapter3.py) | CC-BY-NC-SA-4.0 | `copy-to-target` `plane-transformation` `vector-tip-to-tail` |
| [codrops/AnimateSVGTextPath](https://github.com/codrops/AnimateSVGTextPath) | MIT | `text-on-path` `text-liquid-distortion` `path-conveyor` |
| [artcodev/three-fluid-fx](https://three-fluid-fx.artcreativecode.com/examples/glsl/minimal/distortion/) | MIT | `caustic-ripples` `flowmap-smear` `water-refraction` |
| local/HyperFrames-skills (`claude-skill:media-use/references/media-treatment-recipes.md`) | unknown | `vhs-tracking` `film-dust-scratches` `gate-weave` |
| [lukehaas/css-loaders](https://github.com/lukehaas/css-loaders) | MIT | `spin-loop` `bar-wave-loader` `circular-dot-wave` |
| motion dictionary 1-principles.md#3.1 함께 쓰지만 구분해야 할 하위 개념 | own | `overlapping-action` `follow-through` |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/adapters/lottie.md) | Apache-2.0 | `overlapping-action` `walk-cycle` |
| [juliangarnier/anime](https://animejs.com/documentation/utilities/stagger) | MIT | `stagger` `graded-array-motion` |
| [greensock/GSAP](https://gsap.com/docs/v3/Plugins/MotionPathPlugin/) | GSAP Standard License | `arc-motion` `path-convoy` |
| [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/animate-in-after-effects/animation-keyframes/keyframe-interpolation.html) | unknown | `arc-motion` `stepped-motion` |
| [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/composition.py) | MIT | `action-sequence` `concurrent-motion` |
| [motion-canvas/motion-canvas](https://motioncanvas.io/docs/flow/) | MIT | `action-sequence` `concurrent-motion` |
| [greensock/GSAP](https://gsap.com/docs/v3/Plugins/InertiaPlugin/) | GSAP Standard License | `inertial-glide` `scroll-snap` |
| [motiondivision/motion](https://motion.dev/docs/animate) | MIT | `temporal-overlap` `blur-reveal` |
| [ibelick/motion-primitives](https://github.com/ibelick/motion-primitives) | MIT | `puff-reveal` `annotation-callout` |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/techniques.md) | Apache-2.0 | `audio-reactive-pulse` `parallax` |
| [remotion-dev/skills](https://github.com/remotion-dev/skills/blob/HEAD/skills/remotion-best-practices/remotion-markup/audio-visualization.md) | unknown | `audio-reactive-pulse` `audio-spectrum` |
| [motion-canvas/motion-canvas](https://motioncanvas.io/docs/code) | MIT | `focus-handoff` `code-diff-reveal` |
| [fnando/sparkline](https://github.com/fnando/sparkline) | MIT | `selection-travel` `chart-scrub` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/mk-callout-highlight/registry-item.json) | Apache-2.0 | `highlight-sweep` `word-emphasis` |
| [greensock/GSAP](https://gsap.com/docs/v3/Plugins/DrawSVGPlugin/) | GSAP Standard License | `underline-draw` `arc-spinner` |
| [codrops/TextClipScroll](https://github.com/codrops/TextClipScroll) | MIT | `text-window-fill` `text-cutout-zoom` |
| [yanone/fontanimation](https://github.com/yanone/fontanimation) | Apache-2.0 | `variable-font-axis-morph` `variable-font-weight-wave` |
| [pmndrs/react-spring](https://www.react-spring.dev/docs/components/use-transition) | MIT | `crossfade` `exit-before-enter` |
| [Match cut](https://en.wikipedia.org/wiki/Match_cut) | 개념 인용 | `match-cut` `morph-match-cut` |
| [Adobe](https://helpx.adobe.com/premiere/desktop/add-video-effects/effects-and-transitions-library/list-of-video-dissolve-transitions.html) | unknown | `dip-to-color` `additive-dissolve` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/transitions/css-light.md`) | unknown | `flash-transition` `light-leak` |
| [Supademo](https://supademo.com/features/demo-editor) | unknown | `chapter-interstitial` `tracked-redaction` |
| [Fireship](https://www.youtube.com/watch?v=vKJpN5FAeF4) | unknown | `cutaway` `code-result-alternation` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/beat-freeze-cut/registry-item.json) | Apache-2.0 | `freeze-frame-dressing` `speed-ramp` |
| [motion-canvas/motion-canvas](https://motioncanvas.io/docs/transitions/) | MIT | `held-scene-overlap` `zoom-to-detail` |
| [Art of the Title](https://www.artofthetitle.com/title/se7en/) | unknown | `title-card-rhythm` `line-boil` |
| [basementstudio/scrollytelling](https://github.com/basementstudio/scrollytelling) | MIT | `parallax` `scroll-frame-scrub` |
| [theatre-js/theatre](https://www.theatrejs.com/docs/latest/getting-started/with-react-three-fiber) | Apache-2.0 / AGPL-3.0 (구성요소별) | `camera-flight` `animated-lighting` |
| [theatre-js/theatre](https://www.theatrejs.com/docs/latest/manual/sequences) | Apache-2.0 / AGPL-3.0 (구성요소별) | `camera-flight` `animated-lighting` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/data-chart/registry-item.json) | Apache-2.0 | `bar-grow` `line-draw` |
| [Flourish](https://flourish.studio/blog/number-ticker-countdown-templates/) | unknown | `count-up` `countdown-ticker` |
| [apache/echarts](https://echarts.apache.org/handbook/en/basics/release-note/v5-feature/) | Apache-2.0 | `count-up` `bar-chart-race` |
| [NilsRodrigues/d3-scattertrans](https://github.com/NilsRodrigues/d3-scattertrans) | MIT | `dot-regroup` `scatter-dimension-rotation` |
| [Flourish](https://flourish.studio/visualisations/pictogram-charts/) | unknown | `unit-grid` `fractional-icon-fill` |
| [reuters-graphics/chart-module-india-covid-cartogram](https://github.com/reuters-graphics/chart-module-india-covid-cartogram) | unknown | `axis-rescale` `cartogram-transition` |
| [Flourish](https://flourish.studio/blog/make-arrow-plots/) | unknown | `change-arrows` `motion-trails` |
| [Flourish](https://helpcenter.flourish.studio/hc/en-us/articles/9196682333199-Sports-template-player-animations) | unknown | `formation-transition` `motion-trails` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/stat-bars-and-fills.md`) | unknown | `fractional-icon-fill` `progress-ring` |
| [vega/vega](https://vega.github.io/vega/examples/hypothetical-outcome-plots/) | BSD-3-Clause | `hypothetical-outcome-cycle` `uncertainty-needle` |
| [Flourish](https://flourish.studio/visualisations/) | unknown | `radar-morph` `waterfall-accumulation` |
| [bost.ocks.org](https://bost.ocks.org/mike/constancy/) | unknown | `rank-transition` `object-constant-update` |
| [The New York Times](https://www.nytimes.com/interactive/2018/03/19/upshot/race-class-white-and-black-men.html) | unknown | `ribbon-particle-transition` `path-convoy` |
| [Observable @d3](https://observablehq.com/@d3/stacked-to-grouped-bars) | unknown | `stacked-grouped-transition` `staged-chart-transition` |
| [uwdata/gemini](https://github.com/uwdata/gemini) | BSD-3-Clause | `table-to-chart` `staged-chart-transition` |
| [Yang et al. Tilt Map](https://arxiv.org/abs/2006.14120) | unknown | `map-extrusion` `map-to-bar-chart` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/input-feedback/registry-item.json) | Apache-2.0 | `typing-input` `error-shake` |
| [greensock/GSAP](https://gsap.com/docs/v3/Plugins/Draggable/) | GSAP Standard License | `drag-and-drop` `elastic-boundary-return` |
| [juliangarnier/anime](https://animejs.com/documentation/draggable) | MIT | `drag-and-drop` `elastic-boundary-return` |
| [motiondivision/motion](https://motion.dev/docs/react-scroll-animations) | MIT | `scroll-scrub` `pinned-scrollytelling` |
| [3b1b/videos](https://github.com/3b1b/videos/blob/master/custom/characters/pi_creature_animations.py) | CC-BY-NC-SA-4.0 | `character-gaze-reaction` `speech-bubble-reveal` |
| local/HyperFrames-skills (`claude-skill:pr-to-video/references/code-vocabulary.md`) | unknown | `code-diff-reveal` `matching-token-transform` |
| local/hyperframes-animation (`claude-skill:hyperframes-animation/rules/svg-icon-enrichment.md`) | unknown | `dashed-flow` `hinged-oscillation` |
| local/ig-carousel-hub (`local:ig-carousel-hub/03_templates/motion/slot-spec.md`) | unknown | `state-transition-walk` `float-loop` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/blueprints/ticker-takeover.md`) | unknown | `collision-displacement` `caption-takeover` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/wordmark-tiles/registry-item.json) | Apache-2.0 | `piece-assembly` `tile-flip` |
| [cycorefx.com](https://cycorefx.com/downloads/cfx_hd_std/CycoreFX%201.6%20Manual.pdf) | unknown | `bend` `light-sweep` |
| [codrops/CircularTextEffect](https://github.com/codrops/CircularTextEffect) | MIT | `text-on-path` `circular-text-spin` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-glitch-rgb/registry-item.json) | Apache-2.0 | `crt-scanlines` `glitch-rgb-split` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/chromatic-glitch.md`) | unknown | `glitch-rgb-split` `vhs-tracking` |
| [codrops/TextDistortionEffects](https://github.com/codrops/TextDistortionEffects) | unknown | `glitch-rgb-split` `text-liquid-distortion` |
| [naughtyduk/particlesGL](https://github.com/naughtyduk/particlesGL) | custom personal-noncommercial/commercial-paid | `particle-video-mosaic` `particle-force-field` |
| [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/noise-grain-effects.html) | unknown | `ink-bleed` `fractal-clouds` |
| [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/time-effects.html) | unknown | `motion-blur` `slit-scan` |
| [paper-design/shaders](https://shaders.paper.design/water) | Apache-2.0 | `ripple-distortion` `water-refraction` |
| local/music-to-video (`claude-skill:music-to-video/references/template-catalog.md#held-text-strobe-burst`) | unknown | `strobe-flash` `texture-fill-motion` |
| [nature-of-code/noc-book-2](https://natureofcode.com/autonomous-agents/) | unknown | `seek-arrive` `boid-flocking` |
| [schoolofmotion.com](https://schoolofmotion.com/blog/sports-lower-thirds) | unknown | `marquee` `lower-third-reveal` |
| [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/textPath) | unknown | `path-conveyor` `circular-text-spin` |
| [remotion-dev/remotion](https://www.remotion.dev/docs/captions/create-tiktok-style-captions) | Remotion License (custom) | `caption-page-swap` `word-pop-caption` |
| [remotion-dev/remotion](https://www.remotion.dev/templates/tiktok) | Remotion License (custom) | `caption-page-swap` `word-pop-caption` |
| [iart-ai/generative-illustration-skills](https://github.com/iart-ai/generative-illustration-skills) | unknown | `overlapping-action` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/extended-keyframe/registry-item.json) | Apache-2.0 | `easing-curves` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/spring-pop/registry-item.json) | Apache-2.0 | `spring-overshoot` |
| [codrops/OnScrollLetterAnimations](https://github.com/codrops/OnScrollLetterAnimations) | MIT | `squash-stretch` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/hw-box-label/registry-item.json) | Apache-2.0 | `squash-stretch` |
| [greensock/GSAP](https://gsap.com/docs/v3/Eases/CustomBounce/) | GSAP Standard License | `squash-stretch` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/grid-card-assemble/registry-item.json) | Apache-2.0 | `stagger` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/logo-wall/registry-item.json) | Apache-2.0 | `stagger` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/trust-strip/registry-item.json) | Apache-2.0 | `stagger` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/mk-placeholder-grid/registry-item.json) | Apache-2.0 | `stagger` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/heygen-avatar-promo-card/registry-item.json) | Apache-2.0 | `stagger` |
| [motion.dev examples](https://motion.dev/examples/react-staggered-grid) | unknown | `stagger` |
| [greensock/GSAP](https://gsap.com/docs/v3/Plugins/Physics2DPlugin/) | GSAP Standard License | `arc-motion` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/arc-motion-path/registry-item.json) | Apache-2.0 | `arc-motion` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/offset-path-traveler/registry-item.json) | Apache-2.0 | `arc-motion` |
| [nature-of-code/noc-book-2](https://natureofcode.com/physics-libraries/) | unknown | `follow-through` |
| [mrdoob/three.js](https://threejs.org/examples/#physics_ammo_rope) | MIT | `follow-through` |
| [Material Design, Understanding motion](https://m2.material.io/design/motion/understanding-motion.html) | 개념 참조 | `motion-hierarchy` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/beat-timeline/registry-item.json) | Apache-2.0 | `motion-hierarchy` |
| [rive.app](https://rive.app/docs/editor/state-machine/states) | unknown | `motion-blend` |
| [rive-app/rive-runtime](https://github.com/rive-app/rive-runtime) | MIT | `motion-blend` |
| [schoolofmotion.com](https://schoolofmotion.com/courses/animation-bootcamp) | unknown | `smear-frame` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/01-anchor-transform.md#null-parent-rig`) | Apache-2.0 | `additive-motion` |
| [juliangarnier/anime](https://animejs.com/documentation/animation/tween-parameters/composition) | MIT | `additive-motion` |
| [theatre-js/theatre](https://www.theatrejs.com/docs/latest/manual/audio) | Apache-2.0 / AGPL-3.0 (구성요소별) | `beat-sync` |
| [theatre-js/theatre](https://www.theatrejs.com/docs/latest/concepts) | Apache-2.0 / AGPL-3.0 (구성요소별) | `beat-sync` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/02-easing-graph.md#bounce-drop-physics`) | Apache-2.0 | `bounce-landing` |
| [motionscript.com](https://motionscript.com/articles/bounce-and-overshoot.html) | unknown | `bounce-landing` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/02-easing-graph.md#rolling-tension-chain`) | Apache-2.0 | `continuous-motion` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/02-easing-graph.md#scene-boundary-tangent-handoff`) | Apache-2.0 | `continuous-motion` |
| [greensock/GSAP](https://gsap.com/docs/v3/Plugins/PhysicsPropsPlugin/) | GSAP Standard License | `inertial-glide` |
| [motiondivision/motionone](https://github.com/motiondivision/motionone/blob/main/README.md) | MIT | `inertial-glide` |
| [Popmotion/popmotion](https://github.com/Popmotion/popmotion) | MIT | `inertial-glide` |
| [bost.ocks.org](https://bost.ocks.org/mike/transition/) | unknown | `retarget-motion` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/02-easing-graph.md#hold-keyframe-stepped-values`) | Apache-2.0 | `stepped-motion` |
| [greensock/GSAP](https://gsap.com/docs/v3/Eases/SteppedEase/) | GSAP Standard License | `stepped-motion` |
| [greensock/GSAP](https://gsap.com/docs/v3/GSAP/CorePlugins/Snap/) | GSAP Standard License | `stepped-motion` |
| [pmndrs/react-spring](https://www.react-spring.dev/docs/components/use-chain) | MIT | `temporal-overlap` |
| [juliangarnier/anime](https://animejs.com/documentation/timeline) | MIT | `temporal-overlap` |
| local/hyperframes-animation (`claude-skill:hyperframes-animation/rules/split-tilt-cards.md`) | unknown | `symmetric-panel-open` |
| local/hyperframes-animation (`claude-skill:hyperframes-animation/blueprints/comparison-split.md`) | unknown | `symmetric-panel-open` |
| gongnyang/reelforge (`gongnyang/reelforge:blocks/compare/block.html`) | Apache-2.0 | `symmetric-panel-open` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/04-masks-mattes.md#line-sweep-diagonal-stripes`) | Apache-2.0 | `blinds-reveal` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/04-masks-mattes.md#blinds-stripe-reveal`) | Apache-2.0 | `blinds-reveal` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/fragments/object/blinds-stripe-triplet.html`) | Apache-2.0 | `blinds-reveal` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/fragments/object/blinds-stripe-triplet.meta.json`) | Apache-2.0 | `blinds-reveal` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/05-text-animator.md#blur-dissolve-in`) | Apache-2.0 | `blur-reveal` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitive-catalog.md#blur-resolve`) | unknown | `blur-reveal` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/04-masks-mattes.md#corner-swing-mask`) | Apache-2.0 | `corner-mask-swing` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/04-masks-mattes.md#dual-layer-counter-move`) | Apache-2.0 | `counter-moving-matte` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/canopy-part-title/registry-item.json) | Apache-2.0 | `curtain-reveal` |
| local/HyperFrames-skills (`claude-skill:media-use/references/media-treatments.md`) | unknown | `depixelate-reveal` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/01-anchor-transform.md#door-hinge-open`) | Apache-2.0 | `hinge-reveal` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/04-masks-mattes.md#mosaic-matte-collage`) | Apache-2.0 | `mosaic-reveal` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitive-catalog.md#tile-mosaic`) | unknown | `mosaic-reveal` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/tile-mosaic/scene.html`) | unknown | `mosaic-reveal` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/tile-mosaic/index.html`) | unknown | `mosaic-reveal` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/physical-exit/registry-item.json) | Apache-2.0 | `physical-exit` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-other/registry-item.json) | Apache-2.0 | `physical-exit` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/transitions/css-other.md`) | unknown | `physical-exit` |
| [magicuidesign/magicui](https://magicui.design/docs/components/blur-fade) | MIT | `puff-reveal` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/number-pop-in/registry-item.json) | Apache-2.0 | `scale-pop` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/instagram-follow/registry-item.json) | Apache-2.0 | `scale-pop` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/tiktok-follow/registry-item.json) | Apache-2.0 | `scale-pop` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/reddit-post/registry-item.json) | Apache-2.0 | `scale-pop` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/x-post/registry-item.json) | Apache-2.0 | `scale-pop` |
| [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/growing.py) | MIT | `swirl-reveal` |
| [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/animation.py) | MIT | `hard-appearance` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/overwhelm-surround/registry-item.json) | Apache-2.0 | `overwhelm-surround` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/notification-pileup/registry-item.json) | Apache-2.0 | `overwhelm-surround` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/slack-notification-ad/registry-item.json) | Apache-2.0 | `overwhelm-surround` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/blueprints/overwhelm-surround.md`) | unknown | `overwhelm-surround` |
| [motion.dev examples](https://motion.dev/examples/react-characters-remaining) | unknown | `threshold-pulse` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/beat-accent/registry-item.json) | Apache-2.0 | `audio-reactive-pulse` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/beat-pulse-background/registry-item.json) | Apache-2.0 | `audio-reactive-pulse` |
| gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:references/techniques.md#kinetic-titles`) | MIT | `focus-handoff` |
| gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:templates/scenes/kinetic-titles/scene.css`) | MIT | `focus-handoff` |
| [Cambridge University Press](https://www.cambridge.org/highereducation/books/multimedia-learning/FB7E79A165D24D47CEACEB4D2C426ECD/signaling-principle/9E37E775874EC1D93763620B8A296DD4) | unknown | `focus-handoff` |
| [mrdoob/three.js](https://threejs.org/examples/#webgl_postprocessing_outline) | MIT | `outline-pulse` |
| [mrdoob/three.js](https://threejs.org/examples/#webgl_postprocessing_sobel) | MIT | `outline-pulse` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/css-marker-patterns.md`) | unknown | `radial-speed-lines` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitive-catalog.md#radial-burst-lines`) | unknown | `radial-speed-lines` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/radial-burst-lines/scene.html`) | unknown | `radial-speed-lines` |
| [greensock/GSAP](https://gsap.com/docs/v3/Eases/CustomWiggle/) | GSAP Standard License | `shake` |
| [CodePen GreenSock](https://codepen.io/GreenSock/pen/wzkBYZ) | unknown | `shake` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/01-anchor-transform.md#anchor-corner-swing`) | Apache-2.0 | `swing` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/01-anchor-transform.md#pendulum-decay-swing`) | Apache-2.0 | `swing` |
| gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:references/techniques.md#tilt-card`) | MIT | `swing` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/07-stylize-time.md#vignette-impact-pulse`) | Apache-2.0 | `vignette-pulse` |
| [motion.dev examples](https://motion.dev/examples/react-loading-fill-text) | unknown | `text-color-wipe` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/colorama-wipe/registry-item.json) | Apache-2.0 | `text-color-wipe` |
| [Aqro/Physics-menu-threejs-cannonjs](https://github.com/Aqro/Physics-menu-threejs-cannonjs) | unknown | `letter-drop-pile` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/bottom-up-letters/registry-item.json) | Apache-2.0 | `char-stagger` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/top-down-letters/registry-item.json) | Apache-2.0 | `char-stagger` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/logo-brand-close/registry-item.json) | Apache-2.0 | `char-stagger` |
| [pixel-point/animate-text](https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/per-character-rise.json) | unknown | `char-stagger` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/marker-highlight/registry-item.json) | Apache-2.0 | `highlight-sweep` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/inline-highlight/registry-item.json) | Apache-2.0 | `highlight-sweep` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-highlight/registry-item.json) | Apache-2.0 | `highlight-sweep` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-kinetic-slam/registry-item.json) | Apache-2.0 | `kinetic-beats` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/headline-slam/registry-item.json) | Apache-2.0 | `kinetic-beats` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/shutter-slam/registry-item.json) | Apache-2.0 | `kinetic-beats` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/logo-sting/registry-item.json) | Apache-2.0 | `kinetic-beats` |
| [GSAP fromTo()](https://gsap.com/docs/v3/GSAP/Timeline/fromTo()) | 공식 문서 참조 | `mask-reveal` |
| [tympanus.net/codrops](https://tympanus.net/codrops/2020/07/01/creating-a-menu-image-animation-on-hover/) | unknown | `mask-reveal` |
| [ui.aceternity.com](https://ui.aceternity.com/components/direction-aware-hover) | unknown | `mask-reveal` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-clip-wipe/registry-item.json) | Apache-2.0 | `mask-reveal` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/line-by-line-slide/registry-item.json) | Apache-2.0 | `mask-reveal` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/svg-mask-reveal/registry-item.json) | Apache-2.0 | `mask-reveal` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/testimonial-card/registry-item.json) | Apache-2.0 | `mask-reveal` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/matrix-decode/registry-item.json) | Apache-2.0 | `text-scramble` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/scramble-reveal/registry-item.json) | Apache-2.0 | `text-scramble` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-matrix-decode/registry-item.json) | Apache-2.0 | `text-scramble` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/typewriter/registry-item.json) | Apache-2.0 | `typewriter` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/typed-prompt/registry-item.json) | Apache-2.0 | `typewriter` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/code-typing/registry-item.json) | Apache-2.0 | `typewriter` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/notes-typing/registry-item.json) | Apache-2.0 | `typewriter` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/notes-reveal/registry-item.json) | Apache-2.0 | `typewriter` |
| [MDN SVG pathLength](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength) | 공식 문서 참조 | `underline-draw` |
| [motiondivision/motion](https://motion.dev/docs/react-svg-animation) | MIT | `underline-draw` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/hw-underline/registry-item.json) | Apache-2.0 | `underline-draw` |
| motion dictionary 3-type-data-ui.md#07. 밑줄 드로우 · Underline draw | own | `underline-draw` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-editorial-emphasis/registry-item.json) | Apache-2.0 | `word-emphasis` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-neon-accent/registry-item.json) | Apache-2.0 | `word-emphasis` |
| [Kinetic typography (Wikipedia)](https://en.wikipedia.org/wiki/Kinetic_typography) | 개념 인용 | `kinetic-type-sweep` |
| [GSAP Eases](https://gsap.com/docs/v3/Eases) | 문서 참고 | `kinetic-type-sweep` |
| [codrops/KineticTypePageTransition](https://github.com/codrops/KineticTypePageTransition) | MIT | `kinetic-type-sweep` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/context-sensitive-cursor.md`) | unknown | `context-caret` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/hacker-flip-3d.md`) | unknown | `flip-decode-text` |
| local/music-to-video (`claude-skill:music-to-video/references/template-catalog.md#typewriter-phrase-keyword-shuffle`) | unknown | `font-shuffle` |
| [ibelick/motion-primitives](https://motion-primitives.com/docs/text-roll) | MIT | `glyph-roll` |
| [motion.dev examples](https://motion.dev/examples/react-rolling-text-button) | unknown | `glyph-roll` |
| [motion.dev examples](https://motion.dev/examples/react-rolling-text-button-stagger) | unknown | `glyph-roll` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/hw-write-title/registry-item.json) | Apache-2.0 | `handwriting-write-on` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/hw-path-text/registry-item.json) | Apache-2.0 | `handwriting-write-on` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/hw-title/registry-item.json) | Apache-2.0 | `handwriting-write-on` |
| [codrops/ImageExpansionTypography](https://github.com/codrops/ImageExpansionTypography) | MIT | `inline-image-expand` |
| [codrops/LetterShuffleMenu](https://github.com/codrops/LetterShuffleMenu) | MIT | `letter-anagram-shift` |
| [codrops/LettersAnimationLayout](https://github.com/codrops/LettersAnimationLayout) | MIT | `letter-anagram-shift` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/kinetic-center-build/registry-item.json) | MIT | `phrase-push-build` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/adapters/animate-text.md`) | unknown | `phrase-push-build` |
| [pixel-point/animate-text](https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/kinetic-center-build.json) | unknown | `phrase-push-build` |
| [pixel-point/animate-text](https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/short-slide-down.json) | unknown | `phrase-push-build` |
| [codrops/RepetitiveTypography](https://github.com/codrops/RepetitiveTypography) | MIT | `repeat-text-wall` |
| [codrops/TextRepetitionEffect](https://github.com/codrops/TextRepetitionEffect) | MIT | `repeat-text-wall` |
| [ui.aceternity.com](https://ui.aceternity.com/components/text-flipping-board) | unknown | `split-flap` |
| [magicuidesign/magicui](https://magicui.design/docs/components/text-3d-flip) | MIT | `split-flap` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/split-flap-board/registry-item.json) | Apache-2.0 | `split-flap` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/05-text-animator.md#flipboard-3d-rotateX`) | Apache-2.0 | `split-flap` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/strikethrough-replace/registry-item.json) | Apache-2.0 | `strikethrough-replace` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/05-text-animator.md#netflix-title-converge`) | Apache-2.0 | `text-scatter-assemble` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/fragments/typo/netflix-converge.html`) | Apache-2.0 | `text-scatter-assemble` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/05-text-animator.md#offset-cascade-wave`) | Apache-2.0 | `text-wave` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/fragments/typo/cascade-wave.html`) | Apache-2.0 | `text-wave` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/fragments/typo/cascade-wave.meta.json`) | Apache-2.0 | `text-wave` |
| [motion.dev examples](https://motion.dev/examples/react-split-text-wavy) | unknown | `text-wave` |
| [magicuidesign/magicui](https://magicui.design/docs/components/video-text) | MIT | `text-window-fill` |
| [ui.aceternity.com](https://ui.aceternity.com/components/canvas-text) | unknown | `text-window-fill` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/tracking-in/registry-item.json) | Apache-2.0 | `tracking-reveal` |
| local/HyperFrames-skills (`claude-skill:hyperframes-creative/references/motion-principles.md`) | unknown | `tracking-reveal` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/05-text-animator.md#tracking-kerning-tween`) | Apache-2.0 | `tracking-reveal` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/variable-axis-type/registry-item.json) | Apache-2.0 | `variable-font-axis-morph` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/variable-font-flex/registry-item.json) | Apache-2.0 | `variable-font-axis-morph` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-weight-shift/registry-item.json) | Apache-2.0 | `variable-font-axis-morph` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/weight-wave/registry-item.json) | OFL-1.1 | `variable-font-weight-wave` |
| [amazingcreationsltd/variable-font-animator](https://github.com/amazingcreationsltd/variable-font-animator) | unknown | `variable-font-weight-wave` |
| [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-variation-settings) | unknown | `variable-font-weight-wave` |
| gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:references/techniques.md#word-relay`) | MIT | `word-relay` |
| gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:templates/scenes/word-relay/scene.css`) | MIT | `word-relay` |
| gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:templates/scenes/word-relay/scene.html`) | MIT | `word-relay` |
| gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:templates/scenes/word-relay/scene.js`) | MIT | `word-relay` |
| gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:templates/scenes/word-relay/template.json`) | MIT | `word-relay` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/per-word-rise/registry-item.json) | Apache-2.0 | `word-rise-fade` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/per-word-crossfade/registry-item.json) | Apache-2.0 | `word-rise-fade` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/soft-blur-in/registry-item.json) | Apache-2.0 | `word-rise-fade` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/blur-in/registry-item.json) | Apache-2.0 | `word-rise-fade` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/kinetic-type-swap/registry-item.json) | Apache-2.0 | `word-slot-cycle` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/blueprints/fixed-anchor-cycle.md`) | unknown | `word-slot-cycle` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/line-swap/registry-item.json) | Apache-2.0 | `word-slot-cycle` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/shared-axis-y/registry-item.json) | Apache-2.0 | `word-slot-cycle` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/blur-out-up/registry-item.json) | Apache-2.0 | `word-slot-cycle` |
| [Dissolve (filmmaking)](https://en.wikipedia.org/wiki/Dissolve_(filmmaking)) | 개념 인용 | `crossfade` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-dissolve/registry-item.json) | Apache-2.0 | `crossfade` |
| [motion.dev examples](https://motion.dev/examples/react-curtains-fade) | unknown | `crossfade` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/sticky-mock-swap/registry-item.json) | Apache-2.0 | `crossfade` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/skeleton-reveal/registry-item.json) | Apache-2.0 | `crossfade` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/directional-wipe/registry-item.json) | Apache-2.0 | `push-transition` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/page-slide/registry-item.json) | Apache-2.0 | `push-transition` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-push/registry-item.json) | Apache-2.0 | `push-transition` |
| [pixel-point/animate-text](https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/shared-axis-x.json) | unknown | `push-transition` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Directional.glsl) | MIT | `push-transition` |
| [ibelick/motion-primitives](https://motion-primitives.com/docs/transition-panel) | MIT | `push-transition` |
| [Wipe (transition)](https://en.wikipedia.org/wiki/Wipe_(transition)) | 개념 인용 | `wipe` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-cover/registry-item.json) | Apache-2.0 | `wipe` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/lt-clean-bar/registry-item.json) | Apache-2.0 | `wipe` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/lt-bold-block/registry-item.json) | Apache-2.0 | `wipe` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/lt-stack-bars/registry-item.json) | Apache-2.0 | `wipe` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/lower-third-bild/registry-item.json) | Apache-2.0 | `wipe` |
| [motion.dev examples](https://motion.dev/examples/react-footer-reveal) | unknown | `wipe` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/iris-reveal/registry-item.json) | Apache-2.0 | `iris-mask` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/sdf-iris/registry-item.json) | Apache-2.0 | `iris-mask` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-radial/registry-item.json) | Apache-2.0 | `iris-mask` |
| [motion.dev Motion+](https://motion.dev/docs/react-use-curtains) | unknown | `iris-mask` |
| [motion.dev examples](https://motion.dev/examples/react-curtains-iris) | unknown | `iris-mask` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/match-cut/registry-item.json) | Apache-2.0 | `match-cut` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/text-match-cut/registry-item.json) | Apache-2.0 | `match-cut` |
| [Adobe](https://www.adobe.com/creativecloud/video/post-production/cuts-in-film/match-cut.html) | unknown | `match-cut` |
| [CapCut](https://www.capcut.com/resource/dissolve-transition-in-video) | unknown | `match-cut` |
| [Adobe](https://helpx.adobe.com/uk/premiere/desktop/add-video-effects/apply-video-transitions/apply-morph-cut-to-smoothen-jump-cuts.html) | unknown | `shape-morph` |
| [Blackmagic Design](https://www.blackmagicdesign.com/products/davinciresolve/edit) | unknown | `shape-morph` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/modal-morph/registry-item.json) | Apache-2.0 | `shape-morph` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/whip-pan/registry-item.json) | Apache-2.0 | `whip-pan` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/whip-pan-cut/registry-item.json) | Apache-2.0 | `whip-pan` |
| [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/blur-slide) | Remotion License | `whip-pan` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/zoom-through-transition/registry-item.json) | Apache-2.0 | `zoom-through` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/cinematic-zoom/registry-item.json) | Apache-2.0 | `zoom-through` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-scale/registry-item.json) | Apache-2.0 | `zoom-through` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/shared-axis-z/registry-item.json) | Apache-2.0 | `zoom-through` |
| [pixel-point/animate-text](https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/shared-axis-z.json) | unknown | `zoom-through` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-blur/registry-item.json) | Apache-2.0 | `blur-dissolve` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/DefocusBlur.glsl) | MIT | `blur-dissolve` |
| [remotion-dev/remotion](https://github.com/remotion-dev/remotion/blob/main/packages/template-prompt-to-video/src/lib/utils.ts) | Remotion License | `blur-dissolve` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/LinearBlur.glsl) | MIT | `blur-dissolve` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Bounce.glsl) | MIT | `bounce-transition` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/ridged-burn/registry-item.json) | Apache-2.0 | `burn-transition` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-destruction/registry-item.json) | Apache-2.0 | `burn-transition` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/dissolve.glsl) | MIT | `burn-transition` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/burn0.glsl) | MIT | `burn-transition` |
| [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/dissolve) | Remotion License | `burn-transition` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/chromatic-aberration-wipe/registry-item.json) | Apache-2.0 | `chromatic-wipe` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/chromatic-radial-split/registry-item.json) | Apache-2.0 | `chromatic-wipe` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/angular.glsl) | MIT | `clock-wipe` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Radial.glsl) | MIT | `clock-wipe` |
| [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/clock-wipe) | Remotion License | `clock-wipe` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/DoomScreenTransition.glsl) | MIT | `column-melt` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/cube.glsl) | MIT | `cube-transition` |
| [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/cube) | Remotion License | `cube-transition` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/fade-through/registry-item.json) | Apache-2.0 | `dip-to-color` |
| [pixel-point/animate-text](https://raw.githubusercontent.com/pixel-point/animate-text/master/skills/animate-text/assets/specs/fade-through.json) | unknown | `dip-to-color` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/fadecolor.glsl) | MIT | `dip-to-color` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/flash-through-white/registry-item.json) | Apache-2.0 | `flash-transition` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/editorial-flash-overlay/registry-item.json) | Apache-2.0 | `flash-transition` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Overexposure.glsl) | MIT | `flash-transition` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/halftone-dissolve/registry-item.json) | Apache-2.0 | `halftone-dissolve` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/PolkaDotsCurtain.glsl) | MIT | `halftone-dissolve` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/BookFlip.glsl) | MIT | `page-turn` |
| [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/book-flip) | Remotion License | `page-turn` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/InvertedPageCurl.glsl) | BSD-3-Clause | `page-turn` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/swap.glsl) | MIT | `perspective-swap` |
| [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/swap) | Remotion License | `perspective-swap` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/ripple-waves/registry-item.json) | Apache-2.0 | `ripple-dissolve` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/ripple.glsl) | MIT | `ripple-dissolve` |
| [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/ripple) | Remotion License | `ripple-dissolve` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/WaterDrop.glsl) | MIT | `ripple-dissolve` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/rotateTransition.glsl) | MIT | `rotating-tile-dissolve` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/morph-swap/registry-item.json) | Apache-2.0 | `scale-swap` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/icon-swap/registry-item.json) | Apache-2.0 | `scale-swap` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Slides.glsl) | MIT | `scale-swap` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/scale-swap-transition.md`) | unknown | `scale-swap` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/splitSlideInHorizontal.glsl) | MIT | `split-slide` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/splitSlideInVertical.glsl) | MIT | `split-slide` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/splitSlideOutHorizontal.glsl) | MIT | `split-slide` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/splitSlideOutVertical.glsl) | MIT | `split-slide` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/splitSlideInOutHorizontal.glsl) | MIT | `split-slide` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/squeeze.glsl) | MIT | `squeeze-transition` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Fold.glsl) | MIT | `squeeze-transition` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/transitions/css-push.md`) | unknown | `squeeze-transition` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/StereoViewer.glsl) | BSD-2-Clause | `stereo-viewer-swap` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/tangentMotionBlur.glsl) | MIT | `tangent-blur-spin` |
| [Blackmagic Design](https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-15-Advanced-Editing.pdf) | unknown | `additive-dissolve` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/colorphase.glsl) | MIT | `channel-phase-dissolve` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/mk-clone-wall-transition/registry-item.json) | Apache-2.0 | `clone-wall-wipe` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/ColourDistance.glsl) | MIT | `color-distance-dissolve` |
| [Adobe](https://www.adobe.com/creativecloud/video/post-production/cuts-in-film/cross-cut.html) | unknown | `cross-cutting` |
| [CapCut](https://www.capcut.com/resource/types-of-filmmaking-transitions) | unknown | `cutaway` |
| motion dictionary 2-transitions-camera.md#11. 컷어웨이 · Cutaway Shot | own | `cutaway` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/StripDatamoshGlitch.glsl) | MIT | `datamosh-transition` |
| [motion.dev examples](https://motion.dev/examples/react-animate-presence-modes) | unknown | `exit-before-enter` |
| [Adobe](https://www.adobe.com/creativecloud/video/hub/ideas/what-is-continuity-editing-in-film.html) | unknown | `eyeline-match` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/flyeye.glsl) | MIT | `fly-eye-transition` |
| [remotion-dev/remotion](https://www.remotion.dev/docs/freeze) | Remotion License | `freeze-cut` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/freeze-frame-dressing/registry-item.json) | Apache-2.0 | `freeze-frame-dressing` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/GlitchDisplace.glsl) | MIT | `glitch-transition` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/GlitchMemories.glsl) | MIT | `glitch-transition` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/parametric_glitch.glsl) | MIT | `glitch-transition` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Drop_Zone_Flicker.glsl) | MIT | `glitch-transition` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/gravitational-lens/registry-item.json) | Apache-2.0 | `gravitational-lens` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/fadegrayscale.glsl) | MIT | `grayscale-dissolve` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/GridFlip.glsl) | MIT | `grid-flip` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/PuzzleRight.glsl) | MIT | `grid-flip` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/TilesWave.glsl) | MIT | `grid-flip` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/HSVfade.glsl) | MIT | `hsv-dissolve` |
| motion dictionary 2-transitions-camera.md#10. 인서트 · Insert Shot / Cut-in | own | `insert-shot` |
| [Adobe](https://www.adobe.com/creativecloud/video/discover/jump-cut.html) | unknown | `jump-cut` |
| motion dictionary 2-transitions-camera.md#3. 점프컷 · Jump Cut | own | `jump-cut` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/kaleidoscope.glsl) | MIT | `kaleidoscope-transition` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/powerKaleido.glsl) | MIT | `kaleidoscope-transition` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/FilmBurn.glsl) | MIT | `light-leak-transition` |
| [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/film-burn) | Remotion License | `light-leak-transition` |
| motion dictionary 2-transitions-camera.md#18. 라이트 리크 · Light Leak Transition | own | `light-leak-transition` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/luma.glsl) | MIT | `luma-wipe` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/luminance_melt.glsl) | MIT | `luminance-melt` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/08-transitions-advanced.md#motion-vector-inheritance`) | Apache-2.0 | `match-on-action` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/08-transitions-advanced.md#axis-of-action-pan-handoff`) | Apache-2.0 | `match-on-action` |
| [Adobe](https://www.adobe.com/creativecloud/video/discover/edit-a-video.html) | unknown | `montage` |
| motion dictionary 2-transitions-camera.md#33. 몽타주 · Montage | own | `montage` |
| [SVG path elliptical arc commands (MDN)](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) | CC-BY-SA | `morph-match-cut` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Mosaic.glsl) | MIT | `mosaic-traverse` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/multiply_blend.glsl) | MIT | `multiply-dissolve` |
| [heygen-com/hyperframes, domain-warp-dissolve](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/domain-warp-dissolve/registry-item.json) | Apache-2.0 | `noise-dissolve` |
| [heygen-com/hyperframes, code-shader-dissolve](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/code-shader-dissolve/registry-item.json) | Apache-2.0 | `noise-dissolve` |
| [three.js examples, webgl_postprocessing_transition](https://threejs.org/examples/#webgl_postprocessing_transition) | MIT | `noise-dissolve` |
| [gl-transitions, randomNoisex](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/randomNoisex.glsl) | MIT | `noise-dissolve` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/EdgeTransition.glsl) | MIT | `outline-dissolve` |
| [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/transitionseries) | Remotion License | `overlay-bridge` |
| [remotion-dev/remotion](https://github.com/remotion-dev/remotion/tree/main/packages/template-overlay) | Remotion License | `overlay-bridge` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/LeftRight.glsl) | MIT | `retreat-cover` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/TopBottom.glsl) | MIT | `retreat-cover` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/ZoomInCircles.glsl) | MIT | `ring-zoom` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/hw-scribble-transition/registry-item.json) | Apache-2.0 | `scribble-wipe` |
| [gl-transitions, directionalwarp (아이디어 참고)](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/directionalwarp.glsl) | MIT | `shader-wipe` |
| [MDN, WebGL tutorial: Using textures in WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL) | CC-BY-SA 2.5 | `shader-wipe` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/fragment.glsl) | MIT | `shatter-transition` |
| [mrdoob/three.js](https://threejs.org/examples/#physics_ammo_break) | MIT | `shatter-transition` |
| [Adobe](https://www.adobe.com/creativecloud/video/post-production/cuts-in-film/smash-cut.html) | unknown | `smash-cut` |
| motion dictionary 2-transitions-camera.md#9. 스매시 컷 · Smash Cut | own | `smash-cut` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/07-stylize-time.md#speed-ramp-density`) | Apache-2.0 | `speed-ramp` |
| local/HyperFrames-skills (`claude-skill:hyperframes-core/references/creator-editing-recipes.md`) | unknown | `speed-ramp` |
| local/music-to-video (`claude-skill:music-to-video/references/template-catalog.md#roll-flipbook-word-cycle`) | unknown | `speed-ramp` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/type-match-cut/registry-item.json) | Apache-2.0 | `split-panel-handoff` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/static_wipe.glsl) | MIT | `static-band-wipe` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/swirl-vortex/registry-item.json) | Apache-2.0 | `swirl-transition` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Swirl.glsl) | MIT | `swirl-transition` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Revolve_Left.glsl) | MIT | `swirl-transition` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/burn.glsl) | MIT | `tinted-burn-dissolve` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/x_axis_translation.glsl) | MIT | `translate-fade` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/TVStatic.glsl) | MIT | `tv-static-transition` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/StaticFade.glsl) | MIT | `tv-static-transition` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/old_tv_lost_signal.glsl) | MIT | `tv-tracking-transition` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/cross-warp-morph/registry-item.json) | Apache-2.0 | `warp-dissolve` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/crosswarp.glsl) | MIT | `warp-dissolve` |
| [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/crosswarp) | Remotion License | `warp-dissolve` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/Dreamy.glsl) | MIT | `wave-dissolve` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/ButterflyWaveScrawler.glsl) | MIT | `wave-dissolve` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/CrazyParametricFun.glsl) | MIT | `wave-dissolve` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/wind.glsl) | MIT | `wind-wipe` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/DreamyZoom.glsl) | MIT | `zoom-flash` |
| [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/dreamy-zoom) | Remotion License | `zoom-flash` |
| [remotion-dev/remotion](https://www.remotion.dev/docs/transitions/presentations/push-cut) | Remotion License | `zoom-flash` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/08-transitions-advanced.md#speed-ramp-blur-flash`) | Apache-2.0 | `zoom-flash` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/ZoomLeftWipe.glsl) | MIT | `zoom-wipe` |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions/blob/master/transitions/ZoomRigthWipe.glsl) | MIT | `zoom-wipe` |
| motion dictionary 2-transitions-camera.md#24. 켄 번스 · Ken Burns Effect | own | `ken-burns` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/pan-stations/registry-item.json) | Apache-2.0 | `pan` |
| motion dictionary 2-transitions-camera.md#22. 팬 · Pan | own | `pan` |
| motion dictionary 2-transitions-camera.md#23. 틸트 · Tilt | own | `pan` |
| [iart-ai/webgl-animation-skills](https://github.com/iart-ai/webgl-animation-skills/blob/HEAD/skills/threejs-animation/SKILL.md) | MIT | `parallax` |
| [pixel-point/animate-text](https://github.com/pixel-point/animate-text/blob/HEAD/skills/animate-text/references/catalog.md#additional-bundled-specs) | unknown | `parallax` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/camera-rig-depth-stack/registry-item.json) | Apache-2.0 | `parallax` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/push-in/registry-item.json) | Apache-2.0 | `push-in` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/pull-back-reveal/registry-item.json) | Apache-2.0 | `push-in` |
| [greensock/GSAP](https://gsap.com/docs/v3/Eases/ExpoScaleEase/) | GSAP Standard License | `push-in` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/focus-rack/registry-item.json) | Apache-2.0 | `rack-focus` |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/rules/depth-of-field-blur.md) | Apache-2.0 | `rack-focus` |
| motion dictionary 2-transitions-camera.md#25. 랙 포커스 · Rack Focus / Focus Pull | own | `rack-focus` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/ui-focus-zoom/registry-item.json) | Apache-2.0 | `zoom-to-detail` |
| [Observable @d3](https://observablehq.com/@d3/zoomable-sunburst) | unknown | `zoom-to-detail` |
| [Observable @d3](https://observablehq.com/@d3/zoom-to-bounding-box) | unknown | `zoom-to-detail` |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/rules/3d-camera-flight.md) | Apache-2.0 | `camera-flight` |
| [codrops/InfiniteTubes](https://github.com/codrops/InfiniteTubes) | unknown | `camera-flight` |
| local/hyperframes-animation (`claude-skill:hyperframes-animation/rules/multi-phase-camera.md`) | unknown | `camera-flight` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-camera-follow/registry-item.json) | Apache-2.0 | `camera-follow` |
| local/hyperframes-animation (`claude-skill:hyperframes-animation/rules/camera-cursor-tracking.md`) | unknown | `camera-follow` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/03-camera-3d.md#camera-orbit-turntable`) | Apache-2.0 | `camera-orbit` |
| [processing/p5.js-website](https://p5js.org/examples/3D-Orbit-Control/) | MIT | `camera-orbit` |
| [Observable @d3](https://observablehq.com/@d3/world-tour) | unknown | `camera-orbit` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/camera-shake/registry-item.json) | Apache-2.0 | `camera-shake` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/03-camera-3d.md#crane-pedestal-tilt`) | Apache-2.0 | `crane-tilt` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/camera-dolly-zoom/registry-item.json) | Apache-2.0 | `dolly-zoom` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/03-camera-3d.md#dolly-zoom-vertigo`) | Apache-2.0 | `dolly-zoom` |
| motion dictionary 2-transitions-camera.md#38. 돌리 줌 · Dolly Zoom / Vertigo Effect | own | `dolly-zoom` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitive-catalog.md#dolly-zoom`) | unknown | `dolly-zoom` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/dolly-zoom/scene.html`) | unknown | `dolly-zoom` |
| [Observable @d3](https://observablehq.com/@d3/smooth-zooming) | unknown | `fly-to` |
| [maplibre/maplibre-gl-js](https://github.com/maplibre/maplibre-gl-js) | BSD-3-Clause | `fly-to` |
| gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:references/techniques.md#frame-scrub-hero`) | MIT | `frame-scrub` |
| [greensock/GSAP](https://gsap.com/docs/v3/HelperFunctions/) | GSAP Standard License | `frame-scrub` |
| gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:templates/scenes/frame-scrub-hero/scene.css`) | MIT | `frame-scrub` |
| gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:templates/scenes/frame-scrub-hero/scene.html`) | MIT | `frame-scrub` |
| gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:templates/scenes/frame-scrub-hero/scene.js`) | MIT | `frame-scrub` |
| [MDN <clipPath>](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath) | CC-BY-SA 2.5 | `giant-mask-reveal` |
| [motion.dev examples](https://motion.dev/examples/react-tilt-card) | unknown | `perspective-tilt` |
| [ui.aceternity.com](https://ui.aceternity.com/components/3d-card-effect) | unknown | `perspective-tilt` |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/rules/split-tilt-cards.md) | Apache-2.0 | `perspective-tilt` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitive-catalog.md#screen-shake`) | unknown | `screen-shake` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/screen-shake/scene.html`) | unknown | `screen-shake` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/screen-shake/index.html`) | unknown | `screen-shake` |
| local/music-to-video (`claude-skill:music-to-video/references/template-catalog.md#split-anchor-word-slot`) | unknown | `screen-shake` |
| local/claude-synced-skills (`claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/slack-gif-creator/SKILL.md`) | Apache-2.0 | `screen-shake` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/03-camera-3d.md#perspective-origin-eye-shift`) | Apache-2.0 | `vanishing-point-shift` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/fragments/camera/eye-shift.html`) | Apache-2.0 | `vanishing-point-shift` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/fragments/camera/eye-shift.meta.json`) | Apache-2.0 | `vanishing-point-shift` |
| [ui.aceternity.com](https://ui.aceternity.com/components/tooltip-card) | unknown | `annotation-callout` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/vox-annotate/registry-item.json) | Apache-2.0 | `annotation-callout` |
| [magicuidesign/magicui](https://magicui.design/docs/components/scroll-progress) | MIT | `bar-grow` |
| [ibelick/motion-primitives](https://motion-primitives.com/docs/scroll-progress) | MIT | `bar-grow` |
| [ui.aceternity.com](https://ui.aceternity.com/components/tracing-beam) | unknown | `bar-grow` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/animated-bar-chart/registry-item.json) | Apache-2.0 | `bar-grow` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/chart-story/registry-item.json) | Apache-2.0 | `bar-grow` |
| [Flourish](https://helpcenter.flourish.studio/hc/en-us/articles/8761548263823-Number-ticker-an-overview) | unknown | `count-up` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/count-up/registry-item.json) | Apache-2.0 | `count-up` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/decline-chart/registry-item.json) | Apache-2.0 | `count-up` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/particle-text-dissolve/registry-item.json) | Apache-2.0 | `dot-regroup` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/code-particle-assemble/registry-item.json) | Apache-2.0 | `dot-regroup` |
| [LottieFiles/Patrick Rigor](https://lottiefiles.com/free-animation/loading-animation-with-success-and-error-K2tYPTbs5Q) | Lottie Simple License | `line-draw` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/mk-line-graph/registry-item.json) | Apache-2.0 | `line-draw` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/svg-stroke-trace/registry-item.json) | Apache-2.0 | `line-draw` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/us-map-hex/registry-item.json) | Apache-2.0 | `unit-grid` |
| [reuters-graphics/chart-module-testing-dots](https://github.com/reuters-graphics/chart-module-testing-dots) | unknown | `unit-grid` |
| motion dictionary 3-type-data-ui.md#15. 단위 격자 채우기 · Unit grid / Waffle fill | own | `unit-grid` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/gsap-effects.md`) | unknown | `audio-spectrum` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/bar-chart-race/registry-item.json) | Apache-2.0 | `bar-chart-race` |
| [Observable @d3](https://observablehq.com/@d3/bar-chart-race) | unknown | `bar-chart-race` |
| [Observable @mbostock](https://observablehq.com/@mbostock/the-wealth-health-of-nations) | unknown | `bubble-time-series` |
| [vizabi/bubblechart](https://github.com/vizabi/bubblechart) | unknown | `bubble-time-series` |
| [greensock/GSAP](https://gsap.com/docs/v3/GSAP/CorePlugins/EndArray/) | GSAP Standard License | `chart-path-morph` |
| [greensock/GSAP](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/) | GSAP Standard License | `chart-path-morph` |
| [juliangarnier/anime](https://animejs.com/documentation/svg/morphto) | MIT | `chart-path-morph` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/chart-scrub-readout.md`) | unknown | `chart-scrub` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/us-map/registry-item.json) | Apache-2.0 | `choropleth-transition` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/spain-map/registry-item.json) | Apache-2.0 | `choropleth-transition` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/world-map/registry-item.json) | Apache-2.0 | `choropleth-transition` |
| [reuters-graphics/chart-module-global-rate-map](https://github.com/reuters-graphics/chart-module-global-rate-map) | unknown | `choropleth-transition` |
| [reuters-graphics/chart-module-polling-lines](https://github.com/reuters-graphics/chart-module-polling-lines) | unknown | `confidence-band-reveal` |
| [Reuters Graphics](https://www.reuters.com/graphics/HEALTH-BIRDFLU/MIGRATION/movaqmblrva/) | unknown | `density-field-animation` |
| [vega/vega](https://vega.github.io/vega/examples/force-directed-layout/) | BSD-3-Clause | `force-layout-settling` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/star-rating-fill/registry-item.json) | Apache-2.0 | `fractional-icon-fill` |
| [reuters-graphics/chart-module-countryRankingStrips](https://github.com/reuters-graphics/chart-module-countryRankingStrips) | unknown | `histogram-rebin` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/us-map-flow/registry-item.json) | Apache-2.0 | `map-route-animation` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/nyc-paris-flight/registry-item.json) | Apache-2.0 | `map-route-animation` |
| [ui.aceternity.com](https://ui.aceternity.com/components/world-map) | unknown | `map-route-animation` |
| [magicuidesign/magicui](https://magicui.design/docs/components/dotted-map) | MIT | `map-route-animation` |
| [mapbox/mapbox-gl-js](https://docs.mapbox.com/mapbox-gl-js/example/animate-point-along-route/) | Mapbox TOS proprietary; 포함된 v1.13 이하는 BSD-3-Clause | `map-route-animation` |
| [visgl/deck.gl](https://deck.gl/docs/api-reference/geo-layers/trips-layer) | MIT | `motion-trails` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/oscilloscope-trace/registry-item.json) | Apache-2.0 | `oscilloscope-trace` |
| [chartjs/Chart.js](https://www.chartjs.org/docs/latest/samples/animations/progressive-line.html) | MIT | `point-to-point-build` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/06-shapes-strokes.md#progress-ring-radial`) | Apache-2.0 | `progress-ring` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/fragments/data/progress-ring.html`) | Apache-2.0 | `progress-ring` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/fragments/data/progress-ring.meta.json`) | Apache-2.0 | `progress-ring` |
| [Observable @d3](https://observablehq.com/@d3/bar-chart-transitions/2) | unknown | `rank-transition` |
| [The New York Times](https://www.nytimes.com/interactive/2022/02/02/upshot/tom-brady-career-stats.html) | unknown | `rank-transition` |
| motion dictionary 3-type-data-ui.md#19. 순위 재배치 · Rank transition | own | `rank-transition` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/number-wheel/registry-item.json) | Apache-2.0 | `rolling-digits` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/slot-machine-roll/registry-item.json) | Apache-2.0 | `rolling-digits` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/vertical-spring-ticker.md`) | unknown | `rolling-digits` |
| gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:references/techniques.md#odometer-stats`) | MIT | `rolling-digits` |
| gongnyang/awesome-html-scrolline-deck (`gongnyang/awesome-html-scrolline-deck:templates/scenes/odometer-stats/scene.css`) | MIT | `rolling-digits` |
| [HubSpot/odometer](https://github.com/HubSpot/odometer) | MIT | `rolling-digits` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/us-map-bubble/registry-item.json) | Apache-2.0 | `size-encoding` |
| [reuters-graphics/chart-module-stacked-area-chart](https://github.com/reuters-graphics/chart-module-stacked-area-chart) | unknown | `stack-layer-addition` |
| [Observable @d3](https://observablehq.com/@d3/temporal-force-directed-graph) | unknown | `temporal-network` |
| [Observable @d3](https://observablehq.com/@d3/collapsible-tree) | unknown | `tree-expand-collapse` |
| [Observable @d3](https://observablehq.com/@d3/animated-treemap) | unknown | `treemap-resize` |
| [the-pudding/3d-cities-story](https://github.com/the-pudding/3d-cities-story) | MIT | `map-extrusion` |
| [Rodrigues et al. 2024](https://arxiv.org/abs/2401.04692) | unknown | `scatter-dimension-rotation` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/streaming-text/registry-item.json) | Apache-2.0 | `answer-stream` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/ai-chat-reveal/registry-item.json) | Apache-2.0 | `answer-stream` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/chatgpt-exchange/registry-item.json) | Apache-2.0 | `answer-stream` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/claude-exchange/registry-item.json) | Apache-2.0 | `answer-stream` |
| [greensock/GSAP](https://gsap.com/docs/v3/Plugins/TextPlugin/) | GSAP Standard License | `answer-stream` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/oversized-cursor/registry-item.json) | Apache-2.0 | `cursor-click` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/press-ripple/registry-item.json) | Apache-2.0 | `cursor-click` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/vpn-youtube-spot/registry-item.json) | Apache-2.0 | `cursor-click` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/gesture-tap/registry-item.json) | Apache-2.0 | `cursor-click` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/touch-indicator/registry-item.json) | Apache-2.0 | `cursor-click` |
| [ui.aceternity.com](https://ui.aceternity.com/components/focus-cards) | unknown | `spotlight` |
| [magicuidesign/magicui](https://magicui.design/docs/components/magic-card) | MIT | `spotlight` |
| [ui.aceternity.com](https://ui.aceternity.com/components/spotlight) | unknown | `spotlight` |
| [ibelick/motion-primitives](https://motion-primitives.com/docs/spotlight) | MIT | `spotlight` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/spotlight-card/registry-item.json) | Apache-2.0 | `spotlight` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/signup-flow/registry-item.json) | Apache-2.0 | `typing-input` |
| [ui.aceternity.com](https://ui.aceternity.com/components/keyboard) | unknown | `typing-input` |
| [magicuidesign/magicui](https://magicui.design/docs/components/terminal) | MIT | `typing-input` |
| [mattboldt/typed.js](https://github.com/mattboldt/typed.js) | GPL-3.0-or-later | `typing-input` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/scroll-camera-story/registry-item.json) | Apache-2.0 | `ui-scroll` |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/rules/3d-page-scroll.md) | Apache-2.0 | `ui-scroll` |
| [martinlaxenaire/curtainsjs](https://www.curtainsjs.com/examples/multiple-planes-scroll-effect/) | MIT | `ui-scroll` |
| [motion.dev examples](https://motion.dev/examples/react-scroll-horizontal) | unknown | `ui-scroll` |
| [magicuidesign/magicui](https://magicui.design/docs/components/lens) | MIT | `zoom-callout` |
| [ui.aceternity.com](https://ui.aceternity.com/components/lens) | unknown | `zoom-callout` |
| motion dictionary 3-type-data-ui.md#26. 확대 콜아웃 · Magnified callout / UI focus zoom | own | `zoom-callout` |
| motion dictionary 3-type-data-ui.md#16. 줌 인셋 · Zoom inset / Detail view | own | `zoom-callout` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/panel-reveal/registry-item.json) | Apache-2.0 | `accordion-expand` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/card-resize/registry-item.json) | Apache-2.0 | `accordion-expand` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/menu-morph/registry-item.json) | Apache-2.0 | `accordion-expand` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/tabs-slide-indicator/registry-item.json) | Apache-2.0 | `active-indicator-glide` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/micro-transitions/registry-item.json) | Apache-2.0 | `active-indicator-glide` |
| [motion.dev examples](https://motion.dev/examples/react-tab-select) | unknown | `active-indicator-glide` |
| [motion.dev examples](https://motion.dev/examples/react-smooth-tabs) | unknown | `active-indicator-glide` |
| [motion.dev examples](https://motion.dev/examples/react-scroll-hide-header) | unknown | `adaptive-header` |
| [ui.aceternity.com](https://ui.aceternity.com/components/notch) | unknown | `adaptive-header` |
| [ibelick/motion-primitives](https://motion-primitives.com/docs/toolbar-dynamic) | MIT | `adaptive-header` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/spring-stack-shuffle/registry-item.json) | Apache-2.0 | `card-stack-shuffle` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/keyframe-scrub-stack/registry-item.json) | Apache-2.0 | `card-stack-shuffle` |
| [ui.aceternity.com](https://ui.aceternity.com/components/card-stack) | unknown | `card-stack-shuffle` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/velocity-throw-snap/registry-item.json) | Apache-2.0 | `carousel-slide` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/screen-flow-carousel/registry-item.json) | Apache-2.0 | `carousel-slide` |
| [motion.dev examples](https://motion.dev/examples/react-carousel) | unknown | `carousel-slide` |
| [rive.app/yoonikuu](https://rive.app/community/files/4771-9633-login-teddy/) | CC-BY (version unverified) | `character-input-response` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/chat-message/registry-item.json) | Apache-2.0 | `chat-thread` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/chat-thread/registry-item.json) | Apache-2.0 | `chat-thread` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/thread-message-stack/registry-item.json) | Apache-2.0 | `chat-thread` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/message-thread-reveal/registry-item.json) | Apache-2.0 | `chat-thread` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/blueprints/transcript-scroll-artifact-reveal.md`) | unknown | `chat-thread` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/multiplayer-cursors/registry-item.json) | Apache-2.0 | `collaborative-cursors` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/multi-cursor-choreography.md`) | unknown | `collaborative-cursors` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/settings-toggle-flow/registry-item.json) | Apache-2.0 | `control-target-sync` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/control-target-sync.md`) | unknown | `control-target-sync` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/blueprints/panel-edit-live-sync.md`) | unknown | `control-target-sync` |
| [motion.dev examples](https://motion.dev/examples/react-follow-pointer-with-spring) | unknown | `cursor-follow` |
| [motion.dev examples](https://motion.dev/examples/react-cursor-follow) | unknown | `cursor-follow` |
| [pmndrs/react-spring](https://www.react-spring.dev/docs/components/use-trail) | MIT | `cursor-follow` |
| [motion.dev examples](https://motion.dev/examples/react-multifollow-pointer-with-spring) | unknown | `cursor-follow` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/cursor-glyph-trail/registry-item.json) | Apache-2.0 | `cursor-trail` |
| [demos.gsap.com](https://demos.gsap.com/demo/cursor-trail) | unknown | `cursor-trail` |
| [motion.dev examples](https://motion.dev/examples/react-cursor-trail) | unknown | `cursor-trail` |
| [motion.dev examples](https://motion.dev/examples/react-cursor-trail-velocity) | unknown | `cursor-trail` |
| [demos.gsap.com](https://demos.gsap.com/demo/macos-dock-effect) | unknown | `dock-magnification` |
| [demos.gsap.com](https://demos.gsap.com/demo/proximity-scale-grid) | unknown | `dock-magnification` |
| [magicuidesign/magicui](https://magicui.design/docs/components/dock) | MIT | `dock-magnification` |
| [ui.aceternity.com](https://ui.aceternity.com/components/floating-dock) | unknown | `dock-magnification` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/swipe-rail/registry-item.json) | Apache-2.0 | `drag-and-drop` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/cursor-drag.md`) | unknown | `drag-and-drop` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/sheet-spring-up/registry-item.json) | Apache-2.0 | `drawer-slide` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/share-sheet-carousel/registry-item.json) | Apache-2.0 | `drawer-slide` |
| [emilkowalski/vaul](https://github.com/emilkowalski/vaul) | MIT | `drawer-slide` |
| [ui.aceternity.com](https://ui.aceternity.com/components/sidebar) | unknown | `drawer-slide` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/success-check/registry-item.json) | Apache-2.0 | `error-shake` |
| [ui.aceternity.com](https://ui.aceternity.com/components/file-upload) | unknown | `file-upload-stack` |
| [motion.dev examples](https://motion.dev/examples/react-hold-to-confirm) | unknown | `hold-to-confirm` |
| [Arcade](https://docs.arcade.software/kb/build/interactive-demo/edit/hotspots-callouts-and-spotlights) | unknown | `hotspot-pulse` |
| [Supademo](https://docs.supademo.com/customize/hotspot) | unknown | `hotspot-pulse` |
| [ui.aceternity.com](https://ui.aceternity.com/components/images-badge) | unknown | `image-fanout` |
| [ui.aceternity.com](https://ui.aceternity.com/components) | unknown | `image-generation-scan` |
| [juliangarnier/anime](https://animejs.com/documentation/layout) | MIT | `layout-reflow` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/blueprints/video-text-pivot.md`) | unknown | `layout-yield` |
| [ibelick/motion-primitives](https://motion-primitives.com/docs/magnetic) | MIT | `magnetic-attraction` |
| [ui.aceternity.com](https://ui.aceternity.com/components/magnetic-button) | unknown | `magnetic-attraction` |
| [motion.dev examples](https://motion.dev/examples/react-modal) | unknown | `modal-lift` |
| [motion.dev examples](https://motion.dev/examples/react-sheet-modal) | unknown | `modal-lift` |
| [ui.aceternity.com](https://ui.aceternity.com/components/animated-modal) | unknown | `modal-lift` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/pull-to-refresh/registry-item.json) | Apache-2.0 | `pull-to-refresh` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/rubber-band-bumper/registry-item.json) | Apache-2.0 | `pull-to-refresh` |
| [motion.dev examples](https://motion.dev/examples/react-radial-menu) | unknown | `radial-menu-fanout` |
| [motion.dev examples](https://motion.dev/examples/react-floating-action-button) | unknown | `radial-menu-fanout` |
| [danhnm1203/scrollytelling](https://github.com/danhnm1203/scrollytelling) | MIT | `scroll-frame-scrub` |
| [vaitko/awesome-immersive-storytelling](https://github.com/vaitko/awesome-immersive-storytelling) | CC0-1.0 | `scroll-frame-scrub` |
| [tympanus.net/codrops](https://tympanus.net/codrops/2026/03/02/sticky-grid-scroll-building-a-scroll-driven-animated-grid/) | unknown | `scroll-grid-expand` |
| [codrops/ScrollBasedLayoutAnimations](https://github.com/codrops/ScrollBasedLayoutAnimations) | MIT | `scroll-grid-expand` |
| [motion.dev examples](https://motion.dev/examples/react-swipe-actions) | unknown | `swipe-action-reveal` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/code-terminal-run/registry-item.json) | Apache-2.0 | `terminal-run` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/terminal-simulator/registry-item.json) | Apache-2.0 | `terminal-run` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/native-notification-pop/registry-item.json) | Apache-2.0 | `toast-stack` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/notification-stack/registry-item.json) | Apache-2.0 | `toast-stack` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/notification-cascade/registry-item.json) | Apache-2.0 | `toast-stack` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/macos-notification/registry-item.json) | Apache-2.0 | `toast-stack` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/liquid-glass-notification/registry-item.json) | Apache-2.0 | `toast-stack` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/toggle-flip/registry-item.json) | Apache-2.0 | `toggle-slide` |
| [motion.dev examples](https://motion.dev/examples/react-radix-switch) | unknown | `toggle-slide` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/vector-editor-rig/registry-item.json) | Apache-2.0 | `vector-pen-demo` |
| [code-hike/codehike](https://codehike.org/docs/code/diff) | MIT | `diff-reveal` |
| [greensock/GSAP](https://gsap.com/docs/v3/Plugins/ScrollSmoother/) | GSAP Standard License | `scroll-lag` |
| [motiondivision/motion](https://motion.dev/docs/react-use-spring) | MIT | `scroll-lag` |
| [pmndrs/react-spring](https://www.react-spring.dev/docs/utilities/use-scroll) | MIT | `scroll-lag` |
| [juliangarnier/anime](https://animejs.com/documentation/events/onscroll) | MIT | `scroll-scrub` |
| [CodePen GreenSock](https://codepen.io/GreenSock/pen/WNjaxKp) | unknown | `scroll-scrub` |
| [Attention Is All You Need](https://arxiv.org/abs/1706.03762) | 개념 참고 | `attention-lines` |
| motion dictionary 3-type-data-ui.md#30. 어텐션 선 굵기 · Attention weight encoding | own | `attention-lines` |
| [Hugging Face Transformers, KV cache strategies](https://huggingface.co/docs/transformers/kv_cache) | 개념 참고 | `context-window` |
| [Google Machine Learning Crash Course, Embeddings](https://developers.google.com/machine-learning/crash-course/embeddings) | 개념 참고 | `embedding-space` |
| motion dictionary 3-type-data-ui.md#29. 임베딩 점 이동 · Embedding projection / Point movement | own | `embedding-space` |
| [Hugging Face Transformers, Generation strategies](https://huggingface.co/docs/transformers/generation_strategies) | 개념 참고 | `next-token` |
| motion dictionary 3-type-data-ui.md#31. 확률 막대 · Next-token probability bars | own | `next-token` |
| motion dictionary 3-type-data-ui.md#33. 자동회귀 생성 루프 · Autoregressive generation loop | own | `next-token` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/state-chip-rail/registry-item.json) | Apache-2.0 | `progressive-disclosure` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/onboarding-stepper-flow/registry-item.json) | Apache-2.0 | `progressive-disclosure` |
| [ui.aceternity.com](https://ui.aceternity.com/components/multi-step-loader) | unknown | `progressive-disclosure` |
| [ui.aceternity.com](https://ui.aceternity.com/components/sticky-scroll-reveal) | unknown | `progressive-disclosure` |
| [motion.dev examples](https://motion.dev/examples/react-image-reveal-slider) | unknown | `split-compare` |
| [ui.aceternity.com](https://ui.aceternity.com/components/compare) | unknown | `split-compare` |
| [ibelick/motion-primitives](https://motion-primitives.com/docs/image-comparison) | MIT | `split-compare` |
| [magicuidesign/magicui](https://magicui.design/docs/components/code-comparison) | MIT | `split-compare` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/before-after-wipe/registry-item.json) | Apache-2.0 | `split-compare` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/comparison-split/registry-item.json) | Apache-2.0 | `split-compare` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/grade-split-reveal/registry-item.json) | Apache-2.0 | `split-compare` |
| [Hugging Face Tokenizers 공식 문서](https://huggingface.co/docs/tokenizers/index) | 개념 참고 | `token-split` |
| motion dictionary 3-type-data-ui.md#28. 토큰 쪼개기 · Tokenization split | own | `token-split` |
| [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/updaters/update.py) | MIT | `annotation-tracking` |
| [TED-Ed](https://ed.ted.com/lessons/making-a-ted-ed-lesson-animating-zombies-with-puppets) | unknown | `character-articulation` |
| [3b1b/videos](https://github.com/3b1b/videos/blob/master/custom/characters/pi_creature.py) | CC-BY-NC-SA-4.0 | `character-gaze-reaction` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/code-diff/registry-item.json) | Apache-2.0 | `code-diff-reveal` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/06-shapes-strokes.md#line-connector-draw`) | Apache-2.0 | `dashed-flow` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/fragments/object/connector-tree-cascade.html`) | Apache-2.0 | `dashed-flow` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/gallery/fragments/object/connector-tree-cascade.meta.json`) | Apache-2.0 | `dashed-flow` |
| [motiondivision/motion](https://motion.dev/docs/react-use-transform) | MIT | `dependent-geometry` |
| [pmndrs/react-spring](https://www.react-spring.dev/docs/advanced/interpolation) | MIT | `dependent-geometry` |
| [juliangarnier/anime](https://animejs.com/documentation/utilities) | MIT | `dependent-geometry` |
| [Popmotion/popmotion](https://github.com/Popmotion/popmotion/blob/master/README.md) | MIT | `dependent-geometry` |
| [3b1b/videos](https://github.com/3b1b/videos/blob/master/_2018/fourier.py) | CC-BY-NC-SA-4.0 | `fourier-winding` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/avatar-cloud/registry-item.json) | Apache-2.0 | `graph-build` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/constellation-hub/registry-item.json) | Apache-2.0 | `graph-build` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/avatar-cloud-network.md`) | unknown | `graph-build` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/blueprints/constellation-hub.md`) | unknown | `graph-build` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/flowchart/registry-item.json) | Apache-2.0 | `graph-build` |
| [3b1b/videos](https://github.com/3b1b/videos/blob/master/_2019/diffyq/part2/fourier_series.py) | CC-BY-NC-SA-4.0 | `harmonic-assembly` |
| [mrdoob/three.js](https://threejs.org/examples/#webgl_animation_skinning_ik) | MIT | `inverse-kinematics-reach` |
| [motion-canvas/examples](https://github.com/motion-canvas/examples/blob/master/examples/deferred-lighting/src/scenes/lightComposite.tsx) | MIT | `lighting-pass-accumulation` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/code-morph/registry-item.json) | Apache-2.0 | `matching-token-transform` |
| [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/transform_matching_parts.py) | MIT | `matching-token-transform` |
| [3b1b/manim](https://github.com/3b1b/manim/blob/master/manimlib/animation/transform_matching_parts.py) | MIT | `matching-token-transform` |
| [shikijs/shiki-magic-move](https://github.com/shikijs/shiki-magic-move/blob/main/README.md) | MIT | `matching-token-transform` |
| [code-hike/codehike](https://codehike.org/docs/code/token-transitions) | MIT | `matching-token-transform` |
| [motion-canvas/examples](https://github.com/motion-canvas/examples/blob/master/examples/asset-code/src/scenes/memory.tsx) | MIT | `memory-allocation` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/camera-scan-gate/registry-item.json) | Apache-2.0 | `object-tracking-box` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/ai-tracking-box.md`) | unknown | `object-tracking-box` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/tracing-beam/registry-item.json) | Apache-2.0 | `path-beam` |
| [magicuidesign/magicui](https://magicui.design/docs/components/animated-beam) | MIT | `path-beam` |
| [ui.aceternity.com](https://ui.aceternity.com/components/background-beams) | unknown | `path-beam` |
| [juliangarnier/anime](https://animejs.com/documentation/svg/createmotionpath) | MIT | `path-convoy` |
| [pmndrs/react-spring](https://www.react-spring.dev/docs/components/parallax) | MIT | `pinned-scrollytelling` |
| [code-hike/codehike](https://codehike.org/docs/layouts/scrollycoding) | MIT | `pinned-scrollytelling` |
| motion dictionary 3-type-data-ui.md#18. 스크롤리텔링 단계 · Scrollytelling steps | own | `pinned-scrollytelling` |
| [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/movement.py) | MIT | `plane-transformation` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/01-anchor-transform.md#seesaw-fulcrum-tilt`) | Apache-2.0 | `seesaw-balance` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/segmentation-flood/registry-item.json) | Apache-2.0 | `segmentation-reveal` |
| [code-hike/codehike](https://codehike.org/docs/code/transpile) | MIT | `source-result-mapping` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/06-shapes-strokes.md#progress-bar-linear-segmented`) | Apache-2.0 | `state-transition-walk` |
| gongnyang/reelforge (`gongnyang/reelforge:blocks/numbered/block.html`) | Apache-2.0 | `state-transition-walk` |
| [motion-canvas/examples](https://github.com/motion-canvas/examples/blob/master/examples/asset-code/src/scenes/state-machine.tsx) | MIT | `state-transition-walk` |
| [code-hike/codehike](https://codehike.org/docs/layouts/spotlight) | MIT | `step-panel-walkthrough` |
| [motion.dev examples](https://motion.dev/examples/react-magnetic-filings) | unknown | `vector-field-alignment` |
| [jasonwebb/morphogenesis-resources](https://github.com/jasonwebb/morphogenesis-resources#wave-function-collapse-wfc) | unknown | `wave-function-collapse` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/reactive-displacement.md`) | unknown | `collision-displacement` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/vfx-magnetic/registry-item.json) | Apache-2.0 | `magnetic-distortion` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/soft-blob-touch/registry-item.json) | Apache-2.0 | `magnetic-distortion` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/logo-outro/registry-item.json) | Apache-2.0 | `piece-assembly` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitive-catalog.md#mosaic-pack`) | unknown | `piece-assembly` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/mosaic-pack/scene.html`) | unknown | `piece-assembly` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/blueprints/logo-assemble-lockup.md`) | unknown | `piece-assembly` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/vfx-shatter/registry-item.json) | Apache-2.0 | `shatter` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/frost-sequence-camera-orbit/registry-item.json) | Apache-2.0 | `shatter` |
| [armdz/tsl_elastic_vertex_destruction](https://github.com/armdz/tsl_elastic_vertex_destruction) | unknown | `shatter` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/01-anchor-transform.md#skew-pivot-peel`) | Apache-2.0 | `corner-peel` |
| [mrdoob/three.js](https://threejs.org/examples/#webgl_modifier_curve_instanced) | MIT | `curve-guided-deformation` |
| [mrdoob/three.js](https://threejs.org/examples/#webgpu_modifier_curve) | MIT | `curve-guided-deformation` |
| [chartjs/Chart.js](https://www.chartjs.org/docs/latest/samples/animations/loop.html) | MIT | `line-tension-loop` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/06-shapes-strokes.md#trace-then-fill`) | Apache-2.0 | `outline-then-fill` |
| [oframe/ogl](https://oframe.github.io/ogl/examples/wireframe-shader.html) | unknown | `outline-then-fill` |
| [mrdoob/three.js](https://threejs.org/examples/#webgpu_lines_fat_wireframe) | MIT | `outline-then-fill` |
| [ui.aceternity.com](https://ui.aceternity.com/components/text-hover-effect) | unknown | `outline-then-fill` |
| [paper-design/shaders](https://shaders.paper.design/pulsing-border) | Apache-2.0 | `path-highlight` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/01-anchor-transform.md#anchor-itself-animated`) | Apache-2.0 | `pivot-relay` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/01-anchor-transform.md#anchor-relay-handoff`) | Apache-2.0 | `pivot-relay` |
| [veltman/flubber](https://github.com/veltman/flubber) | MIT | `shape-split-merge` |
| [processing/p5.js-website](https://p5js.org/examples/Math-And-Physics-Soft-Body/) | MIT | `soft-body-jiggle` |
| [mrdoob/three.js](https://threejs.org/examples/#physics_ammo_volume) | MIT | `soft-body-jiggle` |
| [schoolofmotion.com](https://schoolofmotion.com/blog/after-effects-text-animator-tapered-stroke) | unknown | `tapered-stroke` |
| [codrops/DecorativeLetterAnimations](https://github.com/codrops/DecorativeLetterAnimations) | unknown | `shape-built-letters` |
| [codrops/FancyLetterAnimation](https://github.com/codrops/FancyLetterAnimation) | unknown | `shape-built-letters` |
| [codrops/AnimatedLetters](https://github.com/codrops/AnimatedLetters) | unknown | `shape-built-letters` |
| [tsparticles/presets](https://github.com/tsparticles/presets/blob/HEAD/presets/matrix/README.md) | MIT | `digital-rain` |
| [oframe/ogl](https://oframe.github.io/ogl/examples/fresnel.html) | unknown | `fresnel-rim` |
| [cloudai-x/threejs-skills](https://github.com/cloudai-x/threejs-skills) | unknown | `fresnel-rim` |
| [motion.dev examples](https://motion.dev/examples/js-three-uniforms) | unknown | `bulge-lens` |
| [Robpayot/webgl-distortion-bulge-effect](https://github.com/Robpayot/webgl-distortion-bulge-effect) | MIT | `bulge-lens` |
| [romanjeanelie/bulge-text-effect-codrops](https://github.com/romanjeanelie/bulge-text-effect-codrops) | MIT | `bulge-lens` |
| [mrdoob/three.js](https://threejs.org/examples/#webgpu_caustics) | MIT | `caustic-ripples` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/yt-lcd-background/registry-item.json) | Apache-2.0 | `crt-scanlines` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/yt-screen-warp/registry-item.json) | Apache-2.0 | `crt-scanlines` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/07-stylize-time.md#scanline-interlace`) | Apache-2.0 | `crt-scanlines` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/grain-overlay/registry-item.json) | Apache-2.0 | `film-grain` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/grain-field/registry-item.json) | Apache-2.0 | `film-grain` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/07-stylize-time.md#film-grain-seeded-flip`) | Apache-2.0 | `film-grain` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/liquid-glass-widgets/registry-item.json) | Apache-2.0 | `glass-refraction` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/ios26-liquid-glass/registry-item.json) | Apache-2.0 | `glass-refraction` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/macos-tahoe-liquid-glass/registry-item.json) | Apache-2.0 | `glass-refraction` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/glitch/registry-item.json) | Apache-2.0 | `glitch-rgb-split` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/rgb-glitch-text/registry-item.json) | Apache-2.0 | `glitch-rgb-split` |
| [magicuidesign/magicui](https://magicui.design/docs/components/light-rays) | MIT | `god-rays` |
| [mrdoob/three.js](https://threejs.org/examples/#webgl_postprocessing_godrays) | MIT | `god-rays` |
| [paper-design/shaders](https://shaders.paper.design/god-rays) | Apache-2.0 | `god-rays` |
| [ui.aceternity.com](https://ui.aceternity.com/components/lamp-effect) | unknown | `lamp-cone-reveal` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/light-leak/registry-item.json) | Apache-2.0 | `light-leak` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/organic-light-leak-overlay/registry-item.json) | Apache-2.0 | `light-leak` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-light/registry-item.json) | Apache-2.0 | `light-leak` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/07-stylize-time.md#light-leak-film-burn`) | Apache-2.0 | `light-leak` |
| [motiondesign.school](https://motiondesign.school/blog/after-effects-tutorial/) | unknown | `liquid-metal` |
| [paper-design/shaders](https://shaders.paper.design/liquid-metal) | Apache-2.0 | `liquid-metal` |
| [raphamorim/awesome-canvas](https://github.com/raphamorim/awesome-canvas) | MIT | `palette-cycle` |
| [motion.dev examples](https://motion.dev/examples/js-three-shader-topography) | unknown | `topographic-flow` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/camcorder-hud/registry-item.json) | Apache-2.0 | `vhs-tracking` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/07-stylize-time.md#vhs-tracking-glitch`) | Apache-2.0 | `vhs-tracking` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/ordered-dither-pass/registry-item.json) | Apache-2.0 | `animated-dither` |
| [ui.aceternity.com](https://ui.aceternity.com/components/dither-shader) | unknown | `animated-dither` |
| [paper-design/shaders](https://shaders.paper.design/dithering) | Apache-2.0 | `animated-dither` |
| [paper-design/shaders](https://shaders.paper.design/image-dithering) | Apache-2.0 | `animated-dither` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/ascii-render-pass/registry-item.json) | Apache-2.0 | `ascii-motion` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/ascii-trail-reveal/registry-item.json) | Apache-2.0 | `ascii-motion` |
| [ui.aceternity.com](https://ui.aceternity.com/components/ascii-art) | unknown | `ascii-motion` |
| [magicuidesign/magicui](https://magicui.design/docs/components/glyph-matrix) | MIT | `ascii-motion` |
| [paper-design/shaders](https://shaders.paper.design/lens-distortion) | Apache-2.0 | `barrel-warp` |
| [mrdoob/three.js](https://threejs.org/examples/#webgl_postprocessing_unreal_bloom) | MIT | `bloom-pulse` |
| [oframe/ogl](https://oframe.github.io/ogl/examples/post-bloom.html) | unknown | `bloom-pulse` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitive-catalog.md#datamosh-smear`) | unknown | `codec-glitch` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/datamosh-smear/scene.html`) | unknown | `codec-glitch` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/datamosh-smear/index.html`) | unknown | `codec-glitch` |
| [tympanus.net/codrops](https://tympanus.net/Tutorials/ShaderOnScroll/) | unknown | `flowmap-smear` |
| [martinlaxenaire/curtainsjs](https://www.curtainsjs.com/examples/ping-pong-shading-flowmap/) | MIT | `flowmap-smear` |
| [oframe/ogl](https://oframe.github.io/ogl/examples/mouse-flowmap.html) | unknown | `flowmap-smear` |
| [paper-design/shaders](https://shaders.paper.design/fluted-glass) | Apache-2.0 | `fluted-glass` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/scan-band/registry-item.json) | Apache-2.0 | `glitch-scan-band` |
| [rough-stuff/rough](https://github.com/rough-stuff/rough/blob/master/README.md) | MIT | `hatch-fill` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/ink-bleed-reveal/registry-item.json) | Apache-2.0 | `ink-bleed` |
| [processing/p5.js-website](https://p5js.org/examples/Repetition-Kaleidoscope/) | MIT | `kaleidoscope` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/vfx-anamorphic-flare/registry-item.json) | Apache-2.0 | `lens-flare` |
| [MDN background-clip](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip) | CC-BY-SA 2.5 | `light-sweep` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/hw-boil/registry-item.json) | Apache-2.0 | `line-boil` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/hw-frame/registry-item.json) | Apache-2.0 | `line-boil` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/hw-text-cloud/registry-item.json) | Apache-2.0 | `line-boil` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/motion-blur/registry-item.json) | Apache-2.0 | `motion-blur` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/motion-blur-streak.md`) | unknown | `motion-blur` |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/references/motion-blur.md) | Apache-2.0 | `motion-blur` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/light-sweep-pass/registry-item.json) | Apache-2.0 | `moving-light` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/04-masks-mattes.md#matte-invert-negative-space`) | Apache-2.0 | `negative-space-invert` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/08-transitions-advanced.md#silhouette-negative-space-match`) | Apache-2.0 | `negative-space-invert` |
| [piellardj/paint-webgl](https://github.com/piellardj/paint-webgl) | unknown | `particle-painting` |
| [ibelick/motion-primitives](https://motion-primitives.com/docs/progressive-blur) | MIT | `progressive-blur` |
| [magicuidesign/magicui](https://magicui.design/docs/components/progressive-blur) | MIT | `progressive-blur` |
| [codrops/RainEffect](https://github.com/codrops/RainEffect) | unknown | `raindrop-glass` |
| [motion.dev examples](https://motion.dev/examples/react-apple-intelligence) | unknown | `ripple-distortion` |
| [mrdoob/three.js](https://threejs.org/examples/#webgl_gpgpu_water) | MIT | `ripple-distortion` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/slit-scan-reveal/registry-item.json) | Apache-2.0 | `slit-scan` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/07-stylize-time.md#strobe-pulse-grid`) | Apache-2.0 | `strobe-flash` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/vfx-text-cursor/registry-item.json) | Apache-2.0 | `text-light-rays` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitive-catalog.md#text-spectral-rays`) | unknown | `text-light-rays` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/text-spectral-rays/scene.html`) | unknown | `text-light-rays` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/text-spectral-rays/index.html`) | unknown | `text-light-rays` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/texture-mask-text/registry-item.json) | Apache-2.0 | `texture-fill-motion` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-texture/registry-item.json) | Apache-2.0 | `texture-fill-motion` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/04-masks-mattes.md#bg-clip-text-shape`) | Apache-2.0 | `texture-fill-motion` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/thermal-distortion/registry-item.json) | Apache-2.0 | `turbulent-displace` |
| [willianjusten/awesome-svg](https://github.com/willianjusten/awesome-svg) | unknown | `turbulent-displace` |
| [motiondivision/motion](https://motion.dev/docs/react-use-velocity) | MIT | `velocity-skew` |
| [demos.gsap.com](https://demos.gsap.com/demo/velocity-skew) | unknown | `velocity-skew` |
| [mrdoob/three.js](https://threejs.org/examples/#webgl_shaders_ocean) | MIT | `water-refraction` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitive-catalog.md#text-wave-distort`) | unknown | `wave-warp` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/text-wave-distort/scene.html`) | unknown | `wave-warp` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/text-wave-distort/index.html`) | unknown | `wave-warp` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/morph-text/registry-item.json) | Apache-2.0 | `gooey-text-morph` |
| [codrops/GooeyTextHoverEffect](https://github.com/codrops/GooeyTextHoverEffect) | MIT | `gooey-text-morph` |
| [codrops/TextTrailEffect](https://github.com/codrops/TextTrailEffect) | unknown | `text-echo-trail` |
| [gnikoloff/text-trail-effect](https://github.com/gnikoloff/text-trail-effect) | MIT | `text-echo-trail` |
| [codrops/OnScrollSVGFilterText](https://github.com/codrops/OnScrollSVGFilterText) | MIT | `text-liquid-distortion` |
| [codrops/SlicedTextEffect](https://github.com/codrops/SlicedTextEffect) | MIT | `text-slice-offset` |
| [ui.aceternity.com](https://ui.aceternity.com/components/placeholders-and-vanish-input) | unknown | `text-particle-dissolve` |
| [WallabyMonochrome/WebGPU-clair-obscur-gommage-codrops](https://github.com/WallabyMonochrome/WebGPU-clair-obscur-gommage-codrops) | MIT | `text-particle-dissolve` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/mesh-gradient-bg/registry-item.json) | Apache-2.0 | `domain-warping` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/mk-background/registry-item.json) | Apache-2.0 | `domain-warping` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/aurora-drift/registry-item.json) | Apache-2.0 | `domain-warping` |
| [PavelDoGreat/WebGL-Fluid-Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation) | MIT | `fluid-ink` |
| [artcodev/three-fluid-fx](https://three-fluid-fx.artcreativecode.com/examples/glsl/minimal/overlay/) | MIT | `fluid-ink` |
| [ui.aceternity.com](https://ui.aceternity.com/components/cloud-shader) | unknown | `fractal-clouds` |
| [paper-design/shaders](https://shaders.paper.design/perlin-noise) | Apache-2.0 | `fractal-clouds` |
| [paper-design/shaders](https://shaders.paper.design/simplex-noise) | Apache-2.0 | `fractal-clouds` |
| [paper-design/shaders](https://shaders.paper.design/neuro-noise) | Apache-2.0 | `neuro-noise` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/confetti/registry-item.json) | Apache-2.0 | `particle-burst` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-particle-burst/registry-item.json) | Apache-2.0 | `particle-burst` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/rules/particle-burst.md`) | unknown | `particle-burst` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitive-catalog.md#particle-burst`) | unknown | `particle-burst` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/particle-burst/scene.html`) | unknown | `particle-burst` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/particle-image-reveal/registry-item.json) | Apache-2.0 | `particle-image-reveal` |
| [ui.aceternity.com](https://ui.aceternity.com/components/vortex) | unknown | `particle-vortex` |
| [mrdoob/three.js](https://threejs.org/examples/#webgpu_tsl_vfx_tornado) | MIT | `particle-vortex` |
| [magicuidesign/magicui](https://magicui.design/docs/components/meteors) | MIT | `shooting-stars` |
| [ui.aceternity.com](https://ui.aceternity.com/components/meteors) | unknown | `shooting-stars` |
| [paper-design/shaders](https://shaders.paper.design/smoke-ring) | Apache-2.0 | `smoke-ring` |
| [paper-design/shaders](https://shaders.paper.design/spiral) | Apache-2.0 | `spiral-field` |
| [paper-design/shaders](https://shaders.paper.design/swirl) | Apache-2.0 | `spiral-field` |
| [ui.aceternity.com](https://ui.aceternity.com/components/background-beams-with-collision) | unknown | `beam-collision-burst` |
| [processing/p5.js-website](https://p5js.org/examples/Classes-And-Objects-Flocking/) | MIT | `boid-flocking` |
| [mrdoob/three.js](https://threejs.org/examples/#webgl_gpgpu_birds) | MIT | `boid-flocking` |
| [processing/p5.js-website](https://p5js.org/examples/Repetition-Recursive-Tree/) | MIT | `branch-growth` |
| [nature-of-code/noc-book-2](https://natureofcode.com/fractals/) | unknown | `branch-growth` |
| [jasonwebb/morphogenesis-resources](https://github.com/jasonwebb/morphogenesis-resources#space-colonization) | unknown | `branch-growth` |
| [processing/p5.js-website](https://p5js.org/examples/Math-And-Physics-Game-Of-Life/) | MIT | `cellular-automaton` |
| [nature-of-code/noc-book-2](https://natureofcode.com/cellular-automata/) | unknown | `cellular-automaton` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/spiral-galaxy/registry-item.json) | Apache-2.0 | `differential-galaxy` |
| [jasonwebb/morphogenesis-resources](https://github.com/jasonwebb/morphogenesis-resources#differential-growth) | unknown | `differential-growth` |
| [jasonwebb/2d-differential-growth-experiments](https://github.com/jasonwebb/2d-differential-growth-experiments) | CC0-1.0 | `differential-growth` |
| [devloop01/differential-growth](https://github.com/devloop01/differential-growth) | unknown | `differential-growth` |
| [jasonwebb/morphogenesis-resources](https://github.com/jasonwebb/morphogenesis-resources#diffusion-limited-aggregation-dla) | unknown | `diffusion-limited-growth` |
| [jasonwebb/2d-diffusion-limited-aggregation-experiments](https://github.com/jasonwebb/2d-diffusion-limited-aggregation-experiments) | CC0-1.0 | `diffusion-limited-growth` |
| [RolandR/diffusion-limited-aggregation](https://github.com/RolandR/diffusion-limited-aggregation) | AGPL-3.0 | `diffusion-limited-growth` |
| [jasonwebb/morphogenesis-resources](https://github.com/jasonwebb/morphogenesis-resources#eden-growth-model) | unknown | `eden-growth` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitive-catalog.md#electric-arc`) | unknown | `electric-arc` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/electric-arc/scene.html`) | unknown | `electric-arc` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/electric-arc/index.html`) | unknown | `electric-arc` |
| [tsparticles/presets](https://github.com/tsparticles/presets/blob/HEAD/presets/fire/README.md) | MIT | `fire-plume` |
| [mrdoob/three.js](https://threejs.org/examples/#webgpu_tsl_vfx_flames) | MIT | `fire-plume` |
| [tsparticles/presets](https://github.com/tsparticles/presets/blob/HEAD/presets/fireworks/README.md) | MIT | `firework` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitive-catalog.md#bg-flow-field`) | unknown | `flow-field` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/bg-flow-field/scene.html`) | unknown | `flow-field` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/bg-flow-field/index.html`) | unknown | `flow-field` |
| local/music-to-video (`claude-skill:music-to-video/references/template-catalog.md#held-message-living-field`) | unknown | `flow-field` |
| [processing/p5.js-website](https://p5js.org/examples/Math-And-Physics-Mandelbrot/) | MIT | `fractal-zoom` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/halftone-field/registry-item.json) | Apache-2.0 | `halftone-motion` |
| [paper-design/shaders](https://shaders.paper.design/halftone-dots) | Apache-2.0 | `halftone-motion` |
| [paper-design/shaders](https://shaders.paper.design/halftone-cmyk) | Apache-2.0 | `halftone-motion` |
| [mrdoob/three.js](https://threejs.org/examples/#webgl_postprocessing_rgb_halftone) | MIT | `halftone-motion` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitive-catalog.md#gooey-metaball`) | unknown | `metaball` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/gooey-metaball/scene.html`) | unknown | `metaball` |
| local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/gooey-metaball/index.html`) | unknown | `metaball` |
| [nature-of-code/noc-book-2](https://natureofcode.com/forces/) | unknown | `nbody-cluster` |
| [mrdoob/three.js](https://threejs.org/examples/#webgl_gpgpu_protoplanet) | MIT | `nbody-cluster` |
| [jasonwebb/morphogenesis-resources](https://github.com/jasonwebb/morphogenesis-resources#lloyds-relaxation) | unknown | `packing-relaxation` |
| [jasonwebb/morphogenesis-resources](https://github.com/jasonwebb/morphogenesis-resources#weighted-voronoi-stippling) | unknown | `packing-relaxation` |
| [MDN, CanvasRenderingContext2D.getImageData()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData) | CC-BY-SA 2.5 | `particle-assemble` |
| [nature-of-code/noc-book-2](https://natureofcode.com/particles/) | unknown | `particle-force-field` |
| [tsparticles/presets](https://github.com/tsparticles/presets/blob/HEAD/presets/fountain/README.md) | MIT | `particle-fountain` |
| [jasonwebb/morphogenesis-resources](https://github.com/jasonwebb/morphogenesis-resources#particle-life) | unknown | `particle-life` |
| [tsparticles/presets](https://github.com/tsparticles/presets/blob/HEAD/presets/links/README.md) | MIT | `particle-network` |
| [processing/p5.js-website](https://p5js.org/examples/Classes-And-Objects-Connected-Particles/) | MIT | `particle-network` |
| [jasonwebb/morphogenesis-resources](https://github.com/jasonwebb/morphogenesis-resources#physarum) | unknown | `physarum-network` |
| [Bewelge/Physarum-WebGL](https://github.com/Bewelge/Physarum-WebGL) | MIT | `physarum-network` |
| [nicoptere/physarum](https://github.com/nicoptere/physarum) | Unlicense | `physarum-network` |
| [mrdoob/three.js](https://threejs.org/examples/#webgpu_compute_particles_rain) | MIT | `rain-streaks` |
| [nature-of-code/noc-book-2](https://natureofcode.com/random/) | unknown | `random-walk` |
| [jasonwebb/morphogenesis-resources](https://github.com/jasonwebb/morphogenesis-resources#reaction-diffusion) | unknown | `reaction-diffusion` |
| [cangdongcheng/reaction-diffusion](https://github.com/cangdongcheng/reaction-diffusion) | MIT | `reaction-diffusion` |
| [piellardj/reaction-diffusion-webgl](https://github.com/piellardj/reaction-diffusion-webgl) | MIT | `reaction-diffusion` |
| [jasonwebb/reaction-diffusion-playground](https://github.com/jasonwebb/reaction-diffusion-playground) | CC0-1.0 | `reaction-diffusion` |
| [mrdoob/three.js](https://threejs.org/examples/#physics_rapier_instancing) | MIT | `rigid-body-cascade` |
| [mrdoob/three.js](https://threejs.org/examples/#physics_ammo_instancing) | MIT | `rigid-body-cascade` |
| [tsparticles/presets](https://github.com/tsparticles/presets/blob/HEAD/presets/bubbles/README.md) | MIT | `rising-bubbles` |
| [processing/p5.js-website](https://p5js.org/examples/Math-And-Physics-Smoke-Particle-System/) | MIT | `smoke-plume` |
| [mrdoob/three.js](https://threejs.org/examples/#webgpu_volume_cloud) | MIT | `smoke-plume` |
| [QC20/Colourful-Attraction](https://github.com/QC20/Colourful-Attraction) | MIT | `strange-attractor` |
| [mrdoob/three.js](https://threejs.org/examples/#webgpu_tsl_compute_attractors_particles) | MIT | `strange-attractor` |
| [tsparticles/presets](https://github.com/tsparticles/presets/blob/HEAD/presets/seaAnemone/README.md) | MIT | `tendril-wave` |
| [paper-design/shaders](https://shaders.paper.design/voronoi) | Apache-2.0 | `voronoi-motion` |
| [paper-design/shaders](https://shaders.paper.design/waves) | Apache-2.0 | `wave-interference` |
| [magicuidesign/magicui](https://magicui.design/docs/components/globe) | MIT | `globe-connection-arcs` |
| [ui.aceternity.com](https://ui.aceternity.com/components/github-globe) | unknown | `globe-connection-arcs` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/transitions-3d/registry-item.json) | Apache-2.0 | `card-flip` |
| local/HyperFrames-skills (`claude-skill:hyperframes-animation/transitions/css-3d.md`) | unknown | `card-flip` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/char-slam-explode/registry-item.json) | Apache-2.0 | `depth-assemble` |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/rules/depth-scatter-assemble.md) | Apache-2.0 | `depth-assemble` |
| local/hyperframes-animation (`claude-skill:hyperframes-animation/rules/depth-scatter-assemble.md`) | unknown | `depth-assemble` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/glass-shard-title/registry-item.json) | Apache-2.0 | `depth-assemble` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/vfx-iphone-device/registry-item.json) | Apache-2.0 | `object-turntable` |
| [motion.dev examples](https://motion.dev/examples/react-use-animation-frame) | unknown | `object-turntable` |
| [mrdoob/three.js](https://threejs.org/examples/#webgl_geometry_teapot) | MIT | `object-turntable` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/vfx-portal/registry-item.json) | Apache-2.0 | `portal-reveal` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/wireframe-portal-title/registry-item.json) | Apache-2.0 | `portal-reveal` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/code-3d-extrude/registry-item.json) | Apache-2.0 | `text-extrusion` |
| local/hyperframes-animation (`claude-skill:hyperframes-animation/rules/3d-text-depth-layers.md`) | unknown | `text-extrusion` |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes/blob/HEAD/skills/hyperframes-animation/rules/3d-text-depth-layers.md) | Apache-2.0 | `text-extrusion` |
| [mrdoob/three.js](https://threejs.org/examples/#webgl_geometry_text) | MIT | `text-extrusion` |
| [uuuulala/WebGL-typing-tutorial](https://github.com/uuuulala/WebGL-typing-tutorial) | MIT | `text-extrusion` |
| [ehaakana/codrops-text-demo](https://github.com/ehaakana/codrops-text-demo) | MIT | `text-extrusion` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/code-slice-hero/registry-item.json) | Apache-2.0 | `tile-flip` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/blocks/cuboid-carousel/registry-item.json) | Apache-2.0 | `wave-carousel` |
| gongnyang/reelforge (`gongnyang/reelforge:skills/reelforge/references/grammar/03-camera-3d.md#depth-fog-atmospheric-falloff`) | Apache-2.0 | `atmospheric-depth` |
| [oframe/ogl](https://oframe.github.io/ogl/examples/fog.html) | unknown | `atmospheric-depth` |
| local/hyperframes-animation (`claude-skill:hyperframes-animation/rules/depth-of-field-blur.md`) | unknown | `atmospheric-depth` |
| [mrdoob/three.js](https://threejs.org/examples/#webgpu_fog_height) | MIT | `atmospheric-depth` |
| [motion.dev examples](https://motion.dev/examples/react-carousel-coverflow) | unknown | `coverflow` |
| [ui.aceternity.com](https://ui.aceternity.com/components/3d-marquee) | unknown | `coverflow` |
| local/music-to-video (`claude-skill:music-to-video/references/template-catalog.md#card-flyby`) | unknown | `depth-card-flyby` |
| [mrdoob/three.js](https://threejs.org/examples/#webgl_materials_cubemap_dynamic) | MIT | `dynamic-reflection` |
| [mrdoob/three.js](https://threejs.org/examples/#webgpu_mirror) | MIT | `dynamic-reflection` |
| [magicuidesign/magicui](https://magicui.design/docs/components/line-shadow-text) | MIT | `hard-shadow-pop` |
| [tympanus.net/codrops](https://tympanus.net/codrops/2024/02/07/on-scroll-revealing-webgl-image-explorations/) | unknown | `image-unroll` |
| [motion-canvas/examples](https://github.com/motion-canvas/examples/blob/master/examples/deferred-lighting/src/scenes/layers.tsx) | MIT | `layer-separation` |
| [codrops/WebGLBlobs](https://github.com/codrops/WebGLBlobs) | MIT | `noise-blob` |
| [mrdoob/three.js](https://threejs.org/examples/#webgl_morphtargets_sphere) | MIT | `noise-blob` |
| [ui.aceternity.com](https://ui.aceternity.com/components/container-scroll-animation) | unknown | `perspective-flatten` |
| [magicuidesign/magicui](https://magicui.design/docs/components/retro-grid) | MIT | `perspective-grid-drift` |
| [paper-design/shaders](https://shaders.paper.design/color-panels) | Apache-2.0 | `perspective-panel-rotation` |
| [TED-Ed](https://ed.ted.com/lessons/making-a-ted-ed-lesson-bringing-a-pop-up-book-to-life) | unknown | `popup-book` |
| [ui.aceternity.com](https://ui.aceternity.com/components/macbook-scroll) | unknown | `screen-emergence` |
| [helpx.adobe.com](https://helpx.adobe.com/after-effects/desktop/apply-effects-and-animation-presets/list-of-effects/perspective-effects.html) | unknown | `shadow-elevation` |
| [tsparticles/presets](https://github.com/tsparticles/presets/blob/HEAD/presets/hyperspace/README.md) | MIT | `starfield-warp` |
| [magicuidesign/magicui](https://magicui.design/docs/components/warp-background) | MIT | `starfield-warp` |
| [ui.aceternity.com](https://ui.aceternity.com/components/container-cover) | unknown | `starfield-warp` |
| [davidfaure/3d-text-animation-codrops](https://github.com/davidfaure/3d-text-animation-codrops) | MIT | `text-on-3d-surface` |
| [davidfaure/3d-text-circle-animation-codrops](https://github.com/davidfaure/3d-text-circle-animation-codrops) | MIT | `text-on-3d-surface` |
| [akella/twistedText](https://github.com/akella/twistedText) | unknown | `text-on-3d-surface` |
| [marioecg/codrops-kinetic-typo](https://github.com/marioecg/codrops-kinetic-typo) | MIT | `text-on-3d-surface` |
| [mrdoob/three.js](https://threejs.org/examples/#webgl_animation_walk) | MIT | `walk-cycle` |
| [mrdoob/three.js](https://threejs.org/examples/#webgl_animation_skinning_blending) | MIT | `walk-cycle` |
| [motion.dev examples](https://motion.dev/examples/react-loading-circle-spinner) | unknown | `arc-spinner` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/drift-hold/registry-item.json) | Apache-2.0 | `breathing-loop` |
| [motion.dev examples](https://motion.dev/examples/react-loading-progress-bar) | unknown | `indeterminate-progress` |
| [motion.dev examples](https://motion.dev/examples/react-loading-line-reveal) | unknown | `indeterminate-progress` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/typing-indicator/registry-item.json) | Apache-2.0 | `loading-dots` |
| [motion.dev examples](https://motion.dev/examples/react-loading-jumping-dots) | unknown | `loading-dots` |
| [motion.dev examples](https://motion.dev/examples/react-loading-three-dots-pulse) | unknown | `loading-dots` |
| [greensock/GSAP](https://gsap.com/docs/v3/GSAP/CorePlugins/Modifiers/) | GSAP Standard License | `marquee` |
| [motion.dev Motion+](https://motion.dev/docs/react-ticker) | unknown | `marquee` |
| [motion.dev examples](https://motion.dev/examples/react-ticker) | unknown | `marquee` |
| [demos.gsap.com](https://demos.gsap.com/demo/infinite-card-slider) | unknown | `marquee` |
| [codrops/CSSMarqueeMenu](https://github.com/codrops/CSSMarqueeMenu) | MIT | `marquee` |
| [motion.dev examples](https://motion.dev/examples/react-loading-ripple) | unknown | `ripple-rings` |
| [motion.dev examples](https://motion.dev/examples/react-material-design-ripple) | unknown | `ripple-rings` |
| [motion.dev examples](https://motion.dev/examples/react-skeleton-shimmer) | unknown | `skeleton-shimmer` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/svg-line-draw-loader/registry-item.json) | Apache-2.0 | `stroke-chase` |
| [ManimCommunity/manim](https://github.com/ManimCommunity/manim/blob/main/manim/animation/changing.py) | MIT | `stroke-chase` |
| [magicuidesign/magicui](https://magicui.design/docs/components/neon-gradient-card) | MIT | `ambient-glow` |
| [ui.aceternity.com](https://ui.aceternity.com/components/background-gradient) | unknown | `ambient-glow` |
| [ibelick/motion-primitives](https://motion-primitives.com/docs/glow-effect) | MIT | `ambient-glow` |
| [tsparticles/presets](https://github.com/tsparticles/presets/blob/HEAD/presets/ambient/README.md) | MIT | `ambient-particle-drift` |
| [tsparticles/presets](https://github.com/tsparticles/presets/blob/HEAD/presets/stars/README.md) | MIT | `ambient-particle-drift` |
| [tsparticles/presets](https://github.com/tsparticles/presets/blob/HEAD/presets/bigCircles/README.md) | MIT | `ambient-particle-drift` |
| [magicuidesign/magicui](https://magicui.design/docs/components/rainbow-button) | MIT | `color-cycle` |
| [magicuidesign/magicui](https://magicui.design/docs/components/aurora-text) | MIT | `color-cycle` |
| [ui.aceternity.com](https://ui.aceternity.com/components/colourful-text) | unknown | `color-cycle` |
| [tsparticles/presets](https://github.com/tsparticles/presets/blob/HEAD/presets/firefly/README.md) | MIT | `firefly-twinkle` |
| [magicuidesign/magicui](https://magicui.design/docs/components/flickering-grid) | MIT | `flickering-grid` |
| [ui.aceternity.com](https://ui.aceternity.com/components/dotted-glow-background) | unknown | `flickering-grid` |
| [ui.aceternity.com](https://ui.aceternity.com/components/wavy-background) | unknown | `flowing-wave-field` |
| [magicuidesign/magicui](https://magicui.design/docs/components/animated-gradient-text) | MIT | `gradient-drift` |
| [ui.aceternity.com](https://ui.aceternity.com/components/background-gradient-animation) | unknown | `gradient-drift` |
| [paper-design/shaders](https://shaders.paper.design/mesh-gradient) | Apache-2.0 | `mesh-gradient-flow` |
| [ui.aceternity.com](https://ui.aceternity.com/components/aurora-background) | unknown | `mesh-gradient-flow` |
| [magicuidesign/magicui](https://magicui.design/docs/components/orbiting-circles) | MIT | `orbit-loop` |
| [ui.aceternity.com](https://ui.aceternity.com/components/image-generation-loader) | unknown | `radar-sweep` |
| [ui.aceternity.com](https://ui.aceternity.com/components/scales) | unknown | `tiled-pattern-drift` |
| [motionscript.com](https://motionscript.com/design-guide/looping-wiggle.html) | unknown | `wiggle-loop` |
| [magicuidesign/magicui](https://magicui.design/docs/components/spinning-text) | MIT | `circular-text-spin` |
| [ibelick/motion-primitives](https://motion-primitives.com/docs/spinning-text) | MIT | `circular-text-spin` |
| [remotion-dev/remotion](https://github.com/remotion-dev/remotion) | Remotion License (custom) | `caption-page-swap` |
| local/HyperFrames-skills (`claude-skill:embedded-captions/themes/README.md`) | unknown | `caption-takeover` |
| local/HyperFrames-skills (`claude-skill:embedded-captions/modes/standard/_motion.md`) | unknown | `caption-takeover` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/ticker-takeover/registry-item.json) | Apache-2.0 | `caption-takeover` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-pill-karaoke/registry-item.json) | Apache-2.0 | `karaoke-caption` |
| local/HyperFrames-skills (`claude-skill:embedded-captions/references/rail.md`) | unknown | `karaoke-caption` |
| local/HyperFrames-skills (`claude-skill:media-use/audio/references/captions/motion.md`) | unknown | `karaoke-caption` |
| local/motion-graphics (`claude-skill:motion-graphics/references/motion-vocabulary.md`) | unknown | `karaoke-caption` |
| [schoolofmotion.com](https://schoolofmotion.com/blog/automation-in-after-effects) | unknown | `lower-third-reveal` |
| [rayanfer32/remotion-lyrics](https://github.com/rayanfer32/remotion-lyrics) | unknown | `lyric-line-focus` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/stop-motion-cadence/registry-item.json) | Apache-2.0 | `papercut-placement` |
| [heygen-com/hyperframes](https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry/components/caption-parallax-layers/registry-item.json) | Apache-2.0 | `subject-occluded-caption` |
| local/HyperFrames-skills (`claude-skill:embedded-captions/references/composition-craft.md`) | unknown | `subject-occluded-caption` |
| local/HyperFrames-skills (`claude-skill:hyperframes-creative/references/composition-patterns.md`) | unknown | `subject-occluded-caption` |
| local/embedded-captions (`claude-skill:embedded-captions/references/typographic-moves.md`) | unknown | `subject-occluded-caption` |

## Repositories and sites surveyed

From the collection ledger in [research/ledger/](research/ledger/). 234 sources. Licenses as recorded at collection time; GPL, AGPL and unlicensed sources were used for reference only.

| Source | License | Techniques referenced |
|---|---|---:|
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | Apache-2.0 | 413 |
| [local/HyperFrames-skills](https://github.com/local/HyperFrames-skills) | unknown | 213 |
| [gongnyang/reelforge](https://github.com/gongnyang/reelforge) | Apache-2.0 | 202 |
| [local/music-to-video](https://github.com/local/music-to-video) | unknown | 138 |
| [gl-transitions/gl-transitions](https://github.com/gl-transitions/gl-transitions) | MIT | 125 |
| [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) | MIT + Commons Clause v1.0 | 120 |
| [local/hyperframes-animation](https://github.com/local/hyperframes-animation) | unknown | 100 |
| [helpx.adobe.com](https://helpx.adobe.com) | unknown | 99 |
| [greensock/GSAP](https://github.com/greensock/GSAP) | GSAP Standard License | 98 |
| [mifi/editly](https://github.com/mifi/editly) | MIT | 97 |
| [gongnyang/awesome-html-scrolline-deck](https://github.com/gongnyang/awesome-html-scrolline-deck) | MIT | 96 |
| [motion.dev examples](https://motion.dev) | unknown | 82 |
| [airbnb/lottie-web](https://github.com/airbnb/lottie-web) | MIT | 81 |
| [ui.aceternity.com](https://ui.aceternity.com) | unknown | 75 |
| [magicuidesign/magicui](https://github.com/magicuidesign/magicui) | MIT | 60 |
| [mrdoob/three.js](https://github.com/mrdoob/three.js) | MIT | 59 |
| [ManimCommunity/manim](https://github.com/ManimCommunity/manim) | MIT | 55 |
| [Adobe](https://helpx.adobe.com) | unknown | 52 |
| [motiondivision/motion](https://github.com/motiondivision/motion) | MIT | 43 |
| [pixel-point/animate-text](https://github.com/pixel-point/animate-text) | unknown | 39 |
| [animista.net](https://animista.net) | BSD-2-Clause (FreeBSD) | 39 |
| [ibelick/motion-primitives](https://github.com/ibelick/motion-primitives) | MIT | 35 |
| [remotion-dev/remotion](https://github.com/remotion-dev/remotion) | Remotion License | 35 |
| [Heer & Robertson 2007](https://sites.stat.columbia.edu) | unknown | 33 |
| [Flourish](https://app.flourish.studio) | unknown | 31 |
| [juliangarnier/anime](https://github.com/juliangarnier/anime) | MIT | 29 |
| [animate-css/animate.css](https://github.com/animate-css/animate.css) | Hippocratic-2.1 | 29 |
| [paper-design/shaders](https://github.com/paper-design/shaders) | Apache-2.0 | 29 |
| [motion-canvas/motion-canvas](https://github.com/motion-canvas/motion-canvas) | MIT | 27 |
| [pmndrs/react-spring](https://github.com/pmndrs/react-spring) | MIT | 25 |
| [IanLunn/Hover](https://github.com/IanLunn/Hover) | MIT personal/open-source + paid commercial | 24 |
| [css-loaders.com](https://css-loaders.com) | unknown | 24 |
| [chartjs/Chart.js](https://github.com/chartjs/Chart.js) | MIT | 23 |
| [iart-ai/webgl-animation-skills](https://github.com/iart-ai/webgl-animation-skills) | MIT | 22 |
| [FFmpeg/FFmpeg](https://github.com/FFmpeg/FFmpeg) | LGPL-2.1-or-later | 21 |
| [apache/echarts](https://github.com/apache/echarts) | Apache-2.0 | 21 |
| [Observable @d3](https://observablehq.com) | unknown | 18 |
| [miniMAC/magic](https://github.com/miniMAC/magic) | MIT | 15 |
| [shadcn-ui/ui](https://github.com/shadcn-ui/ui) | MIT | 15 |
| [schoolofmotion.com](https://schoolofmotion.com) | unknown | 14 |
| [3b1b/videos](https://github.com/3b1b/videos) | CC-BY-NC-SA-4.0 | 14 |
| [processing/p5.js-website](https://github.com/processing/p5.js-website) | MIT | 14 |
| [tsparticles/presets](https://github.com/tsparticles/presets) | MIT | 14 |
| [local/embedded-captions](https://github.com/local/embedded-captions) | unknown | 13 |
| [local/claude-synced-skills](https://github.com/local/claude-synced-skills) | Apache-2.0 | 12 |
| [tobiasahlin/SpinKit](https://github.com/tobiasahlin/SpinKit) | MIT | 12 |
| [local/card-shorts](https://github.com/local/card-shorts) | unknown | 11 |
| [tympanus.net/codrops](https://github.com/tympanus.net/codrops) | unknown | 11 |
| [vega/vega](https://github.com/vega/vega) | BSD-3-Clause | 11 |
| [nature-of-code/noc-book-2](https://github.com/nature-of-code/noc-book-2) | unknown | 11 |
| [jschr/textillate](https://github.com/jschr/textillate) | MIT | 11 |
| [3b1b/manim](https://github.com/3b1b/manim) | MIT | 10 |
| [fand/vfx-js](https://github.com/fand/vfx-js) | MIT | 10 |
| [jasonwebb/morphogenesis-resources](https://github.com/jasonwebb/morphogenesis-resources) | unknown | 10 |
| [local/ig-carousel-hub](https://github.com/local/ig-carousel-hub) | unknown | 9 |
| [Popmotion/popmotion](https://github.com/Popmotion/popmotion) | MIT | 9 |
| [loadingio/css-spinner](https://github.com/loadingio/css-spinner) | CC0 loaders (README; root LICENSE absent) | 9 |
| [uiverse-io/galaxy](https://github.com/uiverse-io/galaxy) | MIT | 9 |
| [code-hike/codehike](https://github.com/code-hike/codehike) | MIT | 9 |
| [Screen Studio](https://screen.studio) | unknown | 9 |
| [Richard E. Mayer / Wiley](https://onlinelibrary.wiley.com) | unknown | 9 |
| [oframe/ogl](https://github.com/oframe/ogl) | unknown | 9 |
| [codrops/TextBlockTransitions](https://github.com/codrops/TextBlockTransitions) | MIT | 9 |
| [theatre-js/theatre](https://github.com/theatre-js/theatre) | Apache-2.0 / AGPL-3.0 (구성요소별) | 8 |
| [motion.dev Motion+](https://motion.dev) | unknown | 8 |
| [foundation/motion-ui](https://github.com/foundation/motion-ui) | MIT | 8 |
| [michalsnik/aos](https://github.com/michalsnik/aos) | MIT | 8 |
| [motiondesign.school](https://motiondesign.school) | unknown | 8 |
| [maxwellito/vivus](https://github.com/maxwellito/vivus) | MIT | 8 |
| [dcmcand/dynamic-typography-videos](https://github.com/dcmcand/dynamic-typography-videos) | Apache-2.0 | 8 |
| [local/bookforge](https://github.com/local/bookforge) | MIT | 7 |
| [CapCut](https://www.capcut.com) | unknown | 7 |
| [the-pudding/pop-love-songs](https://github.com/the-pudding/pop-love-songs) | MIT | 7 |
| [codrops/OnScrollTypographyAnimations](https://github.com/codrops/OnScrollTypographyAnimations) | MIT | 7 |
| [jamiebuilds/tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) | MIT | 6 |
| [d3/d3-transition](https://github.com/d3/d3-transition) | ISC | 6 |
| [d3/d3-zoom](https://github.com/d3/d3-zoom) | ISC | 6 |
| [Supademo](https://supademo.com) | unknown | 6 |
| [Apple](https://www.apple.com) | unknown | 6 |
| [anthropics/skills](https://github.com/anthropics/skills) | Apache-2.0 | 6 |
| [artcodev/three-fluid-fx](https://github.com/artcodev/three-fluid-fx) | MIT | 6 |
| [Art of the Title](https://www.artofthetitle.com) | unknown | 6 |
| [MDN](https://developer.mozilla.org) | unknown | 6 |
| [CodePen GreenSock](https://codepen.io) | unknown | 5 |
| [demos.gsap.com](https://demos.gsap.com) | unknown | 5 |
| [Observable](https://old.observablehq.com) | unknown | 5 |
| [d3/d3-sankey](https://github.com/d3/d3-sankey) | BSD-3-Clause | 5 |
| [TED-Ed](https://ed.ted.com) | unknown | 5 |
| [motion-canvas/examples](https://github.com/motion-canvas/examples) | MIT | 5 |
| [Cambridge University Press](https://www.cambridge.org) | unknown | 5 |
| [adobe-webplatform/Snap.svg](https://github.com/adobe-webplatform/Snap.svg) | Apache-2.0 | 5 |
| [bradley/Blotter](https://github.com/bradley/Blotter) | MIT | 5 |
| [pqina/flip](https://github.com/pqina/flip) | MIT | 5 |
| [Blackmagic Design](https://www.blackmagicdesign.com) | unknown | 4 |
| [cycorefx.com](https://cycorefx.com) | unknown | 4 |
| [uwdata/gemini](https://github.com/uwdata/gemini) | BSD-3-Clause | 4 |
| [the-pudding/sankey-nba](https://github.com/the-pudding/sankey-nba) | MIT | 4 |
| [the-pudding/how-to-implement-scrollytelling](https://github.com/the-pudding/how-to-implement-scrollytelling) | unknown | 4 |
| [Kurzgesagt](https://kurzgesagt.org) | unknown | 4 |
| [Vox](https://www.youtube.com) | unknown | 4 |
| [martinlaxenaire/curtainsjs](https://github.com/martinlaxenaire/curtainsjs) | MIT | 4 |
| [codrops/LetterEffects](https://github.com/codrops/LetterEffects) | unknown | 4 |
| [yanone/fontanimation](https://github.com/yanone/fontanimation) | Apache-2.0 | 4 |
| [codrops/TextStylesHoverEffects](https://github.com/codrops/TextStylesHoverEffects) | unknown | 4 |
| [lukehaas/css-loaders](https://github.com/lukehaas/css-loaders) | MIT | 3 |
| [LottieFiles/Patrick Rigor](https://lottiefiles.com) | Lottie Simple License | 3 |
| [motionscript.com](https://motionscript.com) | unknown | 3 |
| [bost.ocks.org](https://bost.ocks.org) | unknown | 3 |
| [The New York Times](https://www.nytimes.com) | unknown | 3 |
| [fnando/sparkline](https://github.com/fnando/sparkline) | MIT | 3 |
| [NilsRodrigues/d3-scattertrans](https://github.com/NilsRodrigues/d3-scattertrans) | MIT | 3 |
| [Rodrigues et al. 2024](https://arxiv.org) | unknown | 3 |
| [d3/d3-force](https://github.com/d3/d3-force) | ISC | 3 |
| [d3/d3-interpolate](https://github.com/d3/d3-interpolate) | ISC | 3 |
| [maplibre/maplibre-gl-js](https://github.com/maplibre/maplibre-gl-js) | BSD-3-Clause | 3 |
| [MIT Visualization Group](https://vis.csail.mit.edu) | unknown | 3 |
| [Fireship](https://www.youtube.com) | unknown | 3 |
| [rough-stuff/rough](https://github.com/rough-stuff/rough) | MIT | 3 |
| [Arcade](https://docs.arcade.software) | unknown | 3 |
| [naughtyduk/particlesGL](https://github.com/naughtyduk/particlesGL) | custom personal-noncommercial/commercial-paid | 3 |
| [cloudai-x/threejs-skills](https://github.com/cloudai-x/threejs-skills) | unknown | 3 |
| [thednp/kute.js](https://github.com/thednp/kute.js) | MIT | 3 |
| [diffusionstudio/lottie](https://github.com/diffusionstudio/lottie) | MIT | 3 |
| [shshaw/Splitting](https://github.com/shshaw/Splitting) | MIT | 3 |
| [uuuulala/WebGL-typing-tutorial](https://github.com/uuuulala/WebGL-typing-tutorial) | MIT | 3 |
| [codrops/AnimateSVGTextPath](https://github.com/codrops/AnimateSVGTextPath) | MIT | 3 |
| [codrops/TextDistortionEffects](https://github.com/codrops/TextDistortionEffects) | unknown | 3 |
| [davidfaure/3d-text-animation-codrops](https://github.com/davidfaure/3d-text-animation-codrops) | MIT | 3 |
| [rayanfer32/remotion-lyrics](https://github.com/rayanfer32/remotion-lyrics) | unknown | 3 |
| [motiondivision/motionone](https://github.com/motiondivision/motionone) | MIT | 2 |
| [rive.app/Bobbeh](https://github.com/rive.app/Bobbeh) | CC-BY (version unverified) | 2 |
| [codrops/ScrollBasedLayoutAnimations](https://github.com/codrops/ScrollBasedLayoutAnimations) | MIT | 2 |
| [reuters-graphics/chart-module-stacked-area-chart](https://github.com/reuters-graphics/chart-module-stacked-area-chart) | unknown | 2 |
| [reuters-graphics/chart-module-testing-dots](https://github.com/reuters-graphics/chart-module-testing-dots) | unknown | 2 |
| [reuters-graphics/chart-module-globetrotter](https://github.com/reuters-graphics/chart-module-globetrotter) | unknown | 2 |
| [Reuters Graphics](https://www.reuters.com) | unknown | 2 |
| [Yang et al. Tilt Map](https://arxiv.org) | unknown | 2 |
| [reuters-graphics/chart-module-india-covid-cartogram](https://github.com/reuters-graphics/chart-module-india-covid-cartogram) | unknown | 2 |
| [reuters-graphics/svelte-scroller](https://github.com/reuters-graphics/svelte-scroller) | custom permissive (Rich Harris 2018) | 2 |
| [sjwilliams/scrollstory](https://github.com/sjwilliams/scrollstory) | MIT | 2 |
| [reuters-graphics/example_svelte-graph-patterns](https://github.com/reuters-graphics/example_svelte-graph-patterns) | unknown | 2 |
| [russellsamora/scrollama](https://github.com/russellsamora/scrollama) | MIT | 2 |
| [basementstudio/scrollytelling](https://github.com/basementstudio/scrollytelling) | MIT | 2 |
| [veltman/flubber](https://github.com/veltman/flubber) | MIT | 2 |
| [remotion-dev/skills](https://github.com/remotion-dev/skills) | unknown | 2 |
| [mattboldt/typed.js](https://github.com/mattboldt/typed.js) | GPL-3.0-or-later | 2 |
| [codrops/OnScrollLetterAnimations](https://github.com/codrops/OnScrollLetterAnimations) | MIT | 2 |
| [codrops/LetterInteractions](https://github.com/codrops/LetterInteractions) | unknown | 2 |
| [codrops/AnimatedLetters](https://github.com/codrops/AnimatedLetters) | unknown | 2 |
| [codrops/FancyLetterAnimation](https://github.com/codrops/FancyLetterAnimation) | unknown | 2 |
| [codrops/CircularTextEffect](https://github.com/codrops/CircularTextEffect) | MIT | 2 |
| [codrops/TextClipScroll](https://github.com/codrops/TextClipScroll) | MIT | 2 |
| [marioecg/codrops-kinetic-typo](https://github.com/marioecg/codrops-kinetic-typo) | MIT | 2 |
| [codrops/OnScrollTextHighlight](https://github.com/codrops/OnScrollTextHighlight) | MIT | 2 |
| [local/motion-graphics](https://github.com/local/motion-graphics) | unknown | 1 |
| [elrumordelaluz/csshake](https://github.com/elrumordelaluz/csshake) | MIT | 1 |
| [matthieua/WOW](https://github.com/matthieua/WOW) | GPL-3.0 or commercial (README; LICENSE absent) | 1 |
| [emilkowalski/vaul](https://github.com/emilkowalski/vaul) | MIT | 1 |
| [rive.app/Raihan_DesignPX](https://github.com/rive.app/Raihan_DesignPX) | CC-BY (version unverified) | 1 |
| [codrops/RotatedRevealers](https://github.com/codrops/RotatedRevealers) | unknown | 1 |
| [rive.app/yoonikuu](https://github.com/rive.app/yoonikuu) | CC-BY (version unverified) | 1 |
| [LottieFiles/Creative Salt & Pepper](https://lottiefiles.com) | Lottie Simple License | 1 |
| [midrender/examples](https://github.com/midrender/examples) | 무라이선스 | 1 |
| [au.linkedin.com](https://au.linkedin.com) | unknown | 1 |
| [rive.app](https://rive.app) | unknown | 1 |
| [rive-app/rive-runtime](https://github.com/rive-app/rive-runtime) | MIT | 1 |
| [d3/d3-ease](https://github.com/d3/d3-ease) | BSD-3-Clause | 1 |
| [reuters-graphics/chart-module-polling-lines](https://github.com/reuters-graphics/chart-module-polling-lines) | unknown | 1 |
| [HubSpot/odometer](https://github.com/HubSpot/odometer) | MIT | 1 |
| [Observable @mbostock](https://observablehq.com) | unknown | 1 |
| [vizabi/bubblechart](https://github.com/vizabi/bubblechart) | unknown | 1 |
| [reuters-graphics/chart-module-countryRankingStrips](https://github.com/reuters-graphics/chart-module-countryRankingStrips) | unknown | 1 |
| [mapbox/mapbox-gl-js](https://github.com/mapbox/mapbox-gl-js) | Mapbox TOS proprietary; 포함된 v1.13 이하는 BSD-3-Clause | 1 |
| [visgl/deck.gl](https://github.com/visgl/deck.gl) | MIT | 1 |
| [reuters-graphics/chart-module-global-rate-map](https://github.com/reuters-graphics/chart-module-global-rate-map) | unknown | 1 |
| [reuters-graphics/chart-module-spike-map](https://github.com/reuters-graphics/chart-module-spike-map) | unknown | 1 |
| [the-pudding/3d-cities-story](https://github.com/the-pudding/3d-cities-story) | MIT | 1 |
| [the-pudding/responsive-scrollytelling](https://github.com/the-pudding/responsive-scrollytelling) | MIT | 1 |
| [shikijs/shiki-magic-move](https://github.com/shikijs/shiki-magic-move) | MIT | 1 |
| [ashima/webgl-noise](https://github.com/ashima/webgl-noise) | MIT | 1 |
| [piellardj/paint-webgl](https://github.com/piellardj/paint-webgl) | unknown | 1 |
| [PavelDoGreat/WebGL-Fluid-Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation) | MIT | 1 |
| [QC20/Colourful-Attraction](https://github.com/QC20/Colourful-Attraction) | MIT | 1 |
| [codrops/LiquidDistortion](https://github.com/codrops/LiquidDistortion) | unknown | 1 |
| [codrops/WebGLBlobs](https://github.com/codrops/WebGLBlobs) | MIT | 1 |
| [Robpayot/webgl-distortion-bulge-effect](https://github.com/Robpayot/webgl-distortion-bulge-effect) | MIT | 1 |
| [codrops/RainEffect](https://github.com/codrops/RainEffect) | unknown | 1 |
| [raphamorim/awesome-canvas](https://github.com/raphamorim/awesome-canvas) | MIT | 1 |
| [codrops/InfiniteTubes](https://github.com/codrops/InfiniteTubes) | unknown | 1 |
| [codrops/RotatingOnScrollAnimations](https://github.com/codrops/RotatingOnScrollAnimations) | MIT | 1 |
| [lottiefiles/motion-design-skill](https://github.com/lottiefiles/motion-design-skill) | MIT | 1 |
| [codrops/OnScrollShapeMorph](https://github.com/codrops/OnScrollShapeMorph) | MIT | 1 |
| [willianjusten/awesome-svg](https://github.com/willianjusten/awesome-svg) | unknown | 1 |
| [danhnm1203/scrollytelling](https://github.com/danhnm1203/scrollytelling) | MIT | 1 |
| [vaitko/awesome-immersive-storytelling](https://github.com/vaitko/awesome-immersive-storytelling) | CC0-1.0 | 1 |
| [iart-ai/javascript-animation-skills](https://github.com/iart-ai/javascript-animation-skills) | MIT | 1 |
| [iart-ai/generative-illustration-skills](https://github.com/iart-ai/generative-illustration-skills) | unknown | 1 |
| [cangdongcheng/reaction-diffusion](https://github.com/cangdongcheng/reaction-diffusion) | MIT | 1 |
| [piellardj/reaction-diffusion-webgl](https://github.com/piellardj/reaction-diffusion-webgl) | MIT | 1 |
| [jasonwebb/reaction-diffusion-playground](https://github.com/jasonwebb/reaction-diffusion-playground) | CC0-1.0 | 1 |
| [jasonwebb/2d-diffusion-limited-aggregation-experiments](https://github.com/jasonwebb/2d-diffusion-limited-aggregation-experiments) | CC0-1.0 | 1 |
| [RolandR/diffusion-limited-aggregation](https://github.com/RolandR/diffusion-limited-aggregation) | AGPL-3.0 | 1 |
| [jasonwebb/2d-differential-growth-experiments](https://github.com/jasonwebb/2d-differential-growth-experiments) | CC0-1.0 | 1 |
| [devloop01/differential-growth](https://github.com/devloop01/differential-growth) | unknown | 1 |
| [Bewelge/Physarum-WebGL](https://github.com/Bewelge/Physarum-WebGL) | MIT | 1 |
| [nicoptere/physarum](https://github.com/nicoptere/physarum) | Unlicense | 1 |
| [dsforza96/tree-gen](https://github.com/dsforza96/tree-gen) | MIT | 1 |
| [nicknikolov/pex-space-colonization](https://github.com/nicknikolov/pex-space-colonization) | unknown | 1 |
| [codrops/ScrollBlurTypography](https://github.com/codrops/ScrollBlurTypography) | MIT | 1 |
| [camwiegert/baffle](https://github.com/camwiegert/baffle) | MIT | 1 |
| [codrops/TypeShuffleAnimation](https://github.com/codrops/TypeShuffleAnimation) | MIT | 1 |
| [codrops/LineTextHoverAnimations](https://github.com/codrops/LineTextHoverAnimations) | MIT | 1 |
| [codrops/LetterShuffleMenu](https://github.com/codrops/LetterShuffleMenu) | MIT | 1 |
| [codrops/LettersAnimationLayout](https://github.com/codrops/LettersAnimationLayout) | MIT | 1 |
| [ValentinDBS/codrops-tutorial-text-animation](https://github.com/ValentinDBS/codrops-tutorial-text-animation) | MIT | 1 |
| [amazingcreationsltd/variable-font-animator](https://github.com/amazingcreationsltd/variable-font-animator) | unknown | 1 |
| [codrops/DecorativeLetterAnimations](https://github.com/codrops/DecorativeLetterAnimations) | unknown | 1 |
| [codrops/CSSMarqueeMenu](https://github.com/codrops/CSSMarqueeMenu) | MIT | 1 |
| [codrops/RepetitiveTypography](https://github.com/codrops/RepetitiveTypography) | MIT | 1 |
| [codrops/TextRepetitionEffect](https://github.com/codrops/TextRepetitionEffect) | MIT | 1 |
| [codrops/TextTrailEffect](https://github.com/codrops/TextTrailEffect) | unknown | 1 |
| [gnikoloff/text-trail-effect](https://github.com/gnikoloff/text-trail-effect) | MIT | 1 |
| [codrops/GooeyTextHoverEffect](https://github.com/codrops/GooeyTextHoverEffect) | MIT | 1 |
| [codrops/OnScrollSVGFilterText](https://github.com/codrops/OnScrollSVGFilterText) | MIT | 1 |
| [codrops/SlicedTextEffect](https://github.com/codrops/SlicedTextEffect) | MIT | 1 |
| [codrops/ImageExpansionTypography](https://github.com/codrops/ImageExpansionTypography) | MIT | 1 |
| [codrops/KineticTypePageTransition](https://github.com/codrops/KineticTypePageTransition) | MIT | 1 |
| [ehaakana/codrops-text-demo](https://github.com/ehaakana/codrops-text-demo) | MIT | 1 |
| [davidfaure/3d-text-circle-animation-codrops](https://github.com/davidfaure/3d-text-circle-animation-codrops) | MIT | 1 |
| [akella/twistedText](https://github.com/akella/twistedText) | unknown | 1 |
| [romanjeanelie/bulge-text-effect-codrops](https://github.com/romanjeanelie/bulge-text-effect-codrops) | MIT | 1 |
| [Aqro/Physics-menu-threejs-cannonjs](https://github.com/Aqro/Physics-menu-threejs-cannonjs) | unknown | 1 |
| [armdz/tsl_elastic_vertex_destruction](https://github.com/armdz/tsl_elastic_vertex_destruction) | unknown | 1 |
| [WallabyMonochrome/WebGPU-clair-obscur-gommage-codrops](https://github.com/WallabyMonochrome/WebGPU-clair-obscur-gommage-codrops) | MIT | 1 |

## Trademarks

Product and company names (Disney, Material Design, IBM Carbon, Apple, After Effects, Remotion, Manim, etc.) are used only to identify the source of a concept. No endorsement is implied.
