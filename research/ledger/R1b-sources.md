# R1b 로컬 모션 조사 출처

기법 164줄. 실제 열람한 파일 853개. 원장에는 기법 아이디어와 새 구현 방향만 기록했다. 소스 코드는 복사하지 않았다.

## 조사 범위와 얻은 내용

- https://github.com/gongnyang/reelforge 및 `local:reelforge-v5-engine`: 루트 LICENSE의 Apache-2.0 확인. 8도메인 101기법을 전건 대조했고 갤러리 31엔트리와 8종 블록을 읽었다. 코어 GSAP과 SVG로 재현 가능한 앵커, 이징, 카메라, 매트, 타이포, 선, 질감, 전환을 얻었다.
- https://github.com/gongnyang/awesome-html-scrolline-deck 및 `local:awesome-html-scrolline-deck`: 루트 LICENSE의 MIT 확인. techniques 12종, choreography, design 및 템플릿을 읽었다. 프레임 스크럽, 릴레이, 팬 갤러리, 주석, 종이 팬, 숫자 릴과 3박 장면 구성을 얻었다.
- `claude-skill:card-shorts`: 스킬 단위 LICENSE 없음, unknown, 참고만. shorts-specs, render-recipe, build_shorts, 7티어, carousel-templates 6종을 읽었다. 슬라이드 진입과 컷, 숫자, 순차 목록, 강조를 얻었다. 캐러셀 시퀀스는 카피 구조이므로 별도 모션으로 부풀리지 않았다.
- `claude-skill:bookforge`에서 `local:PDF스킬/bookforge`로 연결: bookforge/LICENSE의 MIT 확인. 정적 도해 계약과 123종 적합성 원장을 읽었다. 메시지, 상태, 간트, 레이더, 벤, 산점, 관계 구조를 자체 영상화로 표시했다. 정적 템플릿의 색이나 배치 차이는 별도 모션에서 제외했다.
- `claude-skill:deck-factory`: unknown, 참고만. SKILL은 정적 HTML 덱과 품질 게이트 중심이며 독립 모션 목록은 없다. 정본 incubator 경로는 이 환경에 없다.
- `claude-skill:ig-carousel`에서 `local:ig-carousel-hub/ops/skill/ig-carousel`로 연결: 루트 LICENSE 없음, unknown, 참고만. 슬롯 명세, 렌더러, 시퀀스 두 버전을 읽었다. 수치, 마스크, 선 그리기, CTA 펄스와 화살표 반복을 얻었다. 플랜 미정 값은 확정값으로 인용하지 않았다.
- `claude-skill:slideshow`: unknown, 참고만. 슬라이드 fragment 순차 공개와 프레젠터 하네스를 읽었다. 순차 공개에 병합했고 순수 탐색 UI는 제외했다.
- `claude-skill:hyperframes-animation`: unknown, 참고만. 48개 rule과 22개 blueprint를 전건 읽었다. 커서 조작, UI 생성, 실시간 제어 동기, 깊이 조립, 카메라 여정과 데이터 탐색을 얻었다.
- `claude-skill:music-to-video`: unknown, 참고만. 46개 모션 primitive와 9개 그룹 템플릿을 전건 대조했다. 입자, 액체, 픽셀, 모자이크, 광선, 비트 타이포와 서체 순환을 얻었다. 에셋 PNG나 구현 코드는 복사하지 않았다.
- `claude-skill:embedded-captions`, `talking-head-recut`, `motion-graphics`: unknown, 참고만. 자막 10종, 타이포 위치와 매트 합성, 타입 및 강조 팔레트를 읽었다. 발화 동기, 크로스헤어, 교대 방향, 임베드와 카라오케를 얻었다.
- `claude-skill:hyperframes-keyframes`, `hyperframes-creative`, `faceless-explainer`, `product-launch-video`, `general-video`, `pr-to-video`, `remotion-to-hyperframes`: unknown, 참고만. 관련 참조를 읽어 기존 원자 기법에 병합했다. 구현 라이브러리와 워크플로우 이름은 효과로 따로 세지 않았다.
- `claude-skill:hyperframes`, `hyperframes-core`, `hyperframes-cli`, `hyperframes-studio`, `hyperframes-audio`, `hyperframes-registry`, `media-use`, `figma`: unknown, 참고만. 영상 저작과 렌더 계약을 읽었다. 오디오 믹스, 설치, 검증, 미디어 관리만 다루는 항목은 시각 모션에서 제외했다.
- `claude-skill:infographic-creator`, `pattern-foundry`, `design-apple`, `design-linear`, `design-notion`, `design-stripe`, `design-vercel`: unknown, 참고만. 정적 도해 카탈로그와 디자인 추출 참조를 읽었다. 이징과 기존 리빌에 연결하고 정적 스타일 및 hover 전용 규칙은 제외했다.
- `claude-skill:synced/*/slack-gif-creator`와 `algorithmic-art`: 각 LICENSE.txt의 Apache-2.0 확인. 흔들림, 펄스, 바운스, 회전 및 노이즈 흐름장, 공명, 재귀 성장, 패킹 완화, 힘장을 얻었다.
- `claude-skill:synced/*/canvas-design`, `pptx` 및 연결 데이터 시각화 스킬: LICENSE.txt가 존재하는 배포본은 파일별 확인. 정적 제작 또는 분석 지침 중심이며 새 원자 모션은 없었다.
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design`: 루트 LICENSE의 MIT 확인. 플러그인 SKILL 3종, motion 스텁과 로컬 추출 보고서를 읽었다. 모션 preset은 스텁이며 보고서의 이징과 시차 토큰은 기존 기법과 중복임을 확인했다. 원사이트 실행은 검증하지 않아 원장 직접 출처에는 붙이지 않았다.
- `~/.claude/plugins`의 synced, cache, marketplaces 및 .trash 배포본: find와 SKILL 본문을 전건 검색했다. 마케팅, 데이터, 개발 오케스트레이션과 vendor/paperthin의 영상 언급은 실제 모션 기법이 없어 제외했다. 동일 배포본은 새 기법으로 중복 집계하지 않았다.

## 기준

params의 기본값은 출처가 직접 제공한 기준에서 대표값을 선택했다. 권장값은 새 구현을 위한 제안이다. Scrolline의 원래 시간축은 초가 아니라 0~1 진행값과 vh이므로, 영상 시간은 권장값으로 따로 표시했다. 런타임은 출처의 제품명이 아니라 새로 재현할 표준 방식이다. 외부 링크는 로컬 문서의 근거일 뿐 직접 열람한 웹 출처로 주장하지 않는다.

모든 LICENSE는 아래 파일 목록에 실제 읽은 파일을 남겼다. 하위 node_modules의 LICENSE로 상위 자체 스킬의 라이선스를 추정하지 않았다. unknown 출처가 함께 있는 병합 행에는 참고만을 표시했다.

## ReelForge 101기법 대응표

| 원 기법 ID | 원장 ID 또는 제외 근거 |
|---|---|
| anchor-corner-swing | R1b-001 |
| door-hinge-open | R1b-002 |
| seesaw-fulcrum-tilt | R1b-003 |
| orbital-revolve | R1b-004 |
| axis-isolated-transform-stack | R1b-005 |
| anchor-itself-animated | R1b-006 |
| null-parent-rig | R1b-007 |
| edge-flip-reveal | R1b-008 |
| pendulum-decay-swing | R1b-009 |
| skew-pivot-peel | R1b-010 |
| anchor-relay-handoff | R1b-011 |
| offset-origin-idle-breathe | R1b-012 |
| speed-graph-power-family | R1b-013 |
| value-graph-overshoot-settle | R1b-014 |
| keyframe-velocity-to-cubic-bezier | R1b-013 |
| easy-ease-linear-hold-usage | R1b-013 |
| custom-function-ease | R1b-013 |
| anticipation-windup-chain | R1b-015 |
| rolling-tension-chain | R1b-016 |
| elastic-amplitude-period | R1b-014 |
| bounce-drop-physics | R1b-017 |
| weighted-deceleration-mass | R1b-018 |
| hold-keyframe-stepped-values | R1b-019 |
| separate-dimensions-axis-ease | R1b-020 |
| scene-boundary-tangent-handoff | R1b-016 |
| parallax-3plane-rule | R1b-021 |
| multiplane-dolly-push | R1b-022 |
| camera-orbit-turntable | R1b-023 |
| dolly-zoom-vertigo | R1b-024 |
| whip-pan-cut-mask | R1b-025 |
| crane-pedestal-tilt | R1b-026 |
| rack-focus-reference | R1b-027 |
| perspective-origin-eye-shift | R1b-028 |
| preserve-3d-layer-safety | 제외: 3D 레이어 체인 설정으로 독립된 화면 모션이 아니다. |
| gpu-compositing-budget | 제외: 성능과 렌더 예산 규칙으로 독립된 화면 모션이 아니다. |
| ambient-parallax-breathing | R1b-021 |
| depth-fog-atmospheric-falloff | R1b-029 |
| inset-wipe-reveal | R1b-030 |
| polygon-diagonal-wipe | R1b-031 |
| iris-circle-directional | R1b-032 |
| gradient-mask-soft-wipe | R1b-033 |
| mask-spotlight-drift | R1b-034 |
| bg-clip-text-shape | R1b-035 |
| dual-layer-counter-move | R1b-036 |
| crop-reveal-overflow | R1b-030 |
| line-sweep-diagonal-stripes | R1b-037 |
| blinds-stripe-reveal | R1b-037 |
| alpha-matte-cutout | R1b-038 |
| word-clip-stagger | R1b-030 |
| corner-swing-mask | R1b-039 |
| matte-invert-negative-space | R1b-040 |
| mosaic-matte-collage | R1b-041 |
| range-selector-stagger-map | R1b-042 |
| char-word-line-split-strategy | 제외: 텍스트 분해 준비 규칙으로 결과 모션은 스태거와 리빌에 기록했다. |
| tracking-kerning-tween | R1b-043 |
| offset-cascade-wave | R1b-044 |
| flipboard-3d-rotateX | R1b-045 |
| blur-dissolve-in | R1b-046 |
| scale-jump-stairstep | R1b-047 |
| typewriter-vs-fade-sequence | R1b-048 |
| netflix-title-converge | R1b-050 |
| mask-line-slide-reveal | R1b-030 |
| word-swap-crossfade | R1b-051 |
| selective-emphasis-pop | R1b-052 |
| svg-stroke-draw-on | R1b-053 |
| trace-then-fill | R1b-054 |
| underline-emphasis-sweep | R1b-055 |
| progress-ring-radial | R1b-056 |
| progress-bar-linear-segmented | R1b-057 |
| shape-wipe-clip-path | R1b-031, R1b-032 |
| path-morph-consistent-topology | R1b-058 |
| line-connector-draw | R1b-059 |
| path-follow-marker | R1b-060 |
| animated-line-chart-trace | R1b-061 |
| divider-rule-expand | R1b-053 |
| checkmark-success-tick | R1b-062 |
| glow-pulse-halo | R1b-063 |
| chromatic-aberration-static | R1b-064 |
| chromatic-aberration-glitch-cut | R1b-064 |
| vhs-tracking-glitch | R1b-065 |
| film-grain-seeded-flip | R1b-066 |
| scanline-interlace | R1b-067 |
| light-sweep-sheen | R1b-068 |
| light-leak-film-burn | R1b-069 |
| speed-ramp-density | R1b-070 |
| motion-smear-echo | R1b-071 |
| flash-frame-subliminal | R1b-072 |
| strobe-pulse-grid | R1b-073 |
| vignette-impact-pulse | R1b-074 |
| match-cut-position-carry | R1b-075 |
| match-cut-graphic-analogy | R1b-075 |
| zoom-through-portal | R1b-076 |
| whip-pan-directional | R1b-025 |
| shape-wipe-color-block | R1b-031 |
| iris-portal-threshold | R1b-032 |
| motion-vector-inheritance | R1b-077 |
| axis-of-action-pan-handoff | R1b-077 |
| speed-ramp-blur-flash | R1b-078 |
| silhouette-negative-space-match | R1b-040 |
| light-flash-join | R1b-072 |
| object-scale-continuity | R1b-075 |

## 실제 열람 파일 목록

각 로컬 경로가 출처 URL이다. 파일 이름과 라이선스에 더해 얻은 범주를 기록한다.

- `claude-plugin-skill:brand-review/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:campaign-plan/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:competitive-brief/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:content-creation/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:draft-content/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:email-sequence/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:performance-report/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:seo-audit/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:analyze/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:build-dashboard/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:create-viz/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:data-context-extractor/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:data-visualization/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:explore-data/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:sql-queries/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:statistical-analysis/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:validate-data/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:write-query/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:cowork-plugin-customizer/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:create-cowork-plugin/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:brand-review/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:campaign-plan/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:competitive-brief/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:content-creation/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:draft-content/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:email-sequence/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:performance-report/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:seo-audit/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:analyze/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:build-dashboard/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:create-viz/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:data-context-extractor/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:data-visualization/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:explore-data/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:sql-queries/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:statistical-analysis/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:validate-data/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:write-query/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:insane-search/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:kkirikkiri/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:auto/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:brownfield/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:cancel/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:config/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:evaluate/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:evolve/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:help/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:interview/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:pm/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:publish/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:qa/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:ralph/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:resume-session/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:run/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:seed/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:setup/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:status/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:tutorial/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:unstuck/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:update/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:welcome/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:auto/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:brownfield/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:cancel/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:config/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:evaluate/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:evolve/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:help/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:interview/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:ooo/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:pm/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:publish/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:qa/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:ralph/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:resume-session/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:run/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:seed/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:setup/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:status/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:tutorial/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:unstuck/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:update/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:welcome/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:frontmatter-body/run/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:dd/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:docs-guide-knowledge/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:git-teacher-help/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:git-teacher-review/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:git-teacher-save/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:git-teacher-setup/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:git-teacher-status/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:git-teacher-upload/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:goaljaby/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/LICENSE` | MIT | 라이선스 본문 확인
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/_shared/starter-components/motion/index.md` | MIT | 모션 어휘와 안무 및 제외 판단
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/adidas/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/adobe/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/aesop/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/airbnb/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/apple/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/arc/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/atlassian/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/axiom/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/baemin/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/bain/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/bcg/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/bmw/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/cal/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/chanel/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/clerk/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/coinbase/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/contentful/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/convex/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/coupang/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/daangn/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/deloitte-digital/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/dior/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/discord/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/dji/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/dub/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/dyson/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/ferrari/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/figma/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/framer/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/gentlemonster/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/github/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/google/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/gucci/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/hashnode/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/hybecorp/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/hyundai/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/ikea/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/kakaocorp/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/kia/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/krafton/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/kurly/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/lego/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/lemon-squeezy/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/lg/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/linear/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/louisvuitton/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/lucid/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/mckinsey/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/medium/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/mercedes-benz/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/meta/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/microsoft/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/mintlify/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/musinsa/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/naver/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/neon/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/netflix/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/nike/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/nothing/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/notion/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/patagonia/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/pitch/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/planetscale/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/porsche/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/posthog/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/prisma/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/railway/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/raycast/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/razer/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/resend/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/retool/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/revolut/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/rivian/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/robinhood/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/salesforce/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/samsung/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/shopify/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/slack/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/sonos/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/sony/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/spotify-main/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/spotify/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/square/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/starbucks/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/stripe/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/supabase/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/tailwindcss/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/tesla/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/theverge/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/tinybird/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/toss/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/twitch/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/uber/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/uniqlo/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/vercel/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/volvo/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/warp/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/wise/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/yanolja/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `~/.claude/plugins/marketplaces/gptaku-plugins/plugins/insane-design/docs/reports/zara/design.md` | MIT | 로컬 CSS 추출의 모션 토큰, 재생 미검증
- `claude-plugin-skill:insane-apply/SKILL.md` | MIT | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:insane-build/SKILL.md` | MIT | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:insane-design/SKILL.md` | MIT | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:insane-research-main/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:insane-research-query/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:insane-review/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:insane-search/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:kkirikkiri/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:nopal-orchestrate/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:nopal-setup/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:image/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:pumasi/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:show-me-the-prd/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:skillers-suda/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:vibe-sunsang-growth/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:vibe-sunsang-knowledge/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:vibe-sunsang-mentor/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:vibe-sunsang-onboard/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:vibe-sunsang-retro/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:auto/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:brownfield/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:cancel/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:config/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:evaluate/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:evolve/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:help/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:interview/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:pm/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:publish/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:qa/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:ralph/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:resume-session/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:run/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:seed/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:setup/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:status/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:tutorial/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:unstuck/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:update/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:welcome/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:auto/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:brownfield/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:cancel/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:config/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:evaluate/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:evolve/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:help/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:interview/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:ooo/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:pm/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:publish/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:qa/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:ralph/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:resume-session/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:run/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:seed/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:setup/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:status/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:tutorial/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:unstuck/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:update/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:welcome/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:frontmatter-body/run/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:cowork-plugin-customizer/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:create-cowork-plugin/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:analyze/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:build-dashboard/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:create-viz/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:data-context-extractor/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:data-visualization/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:explore-data/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:sql-queries/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:statistical-analysis/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:validate-data/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:write-query/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:brand-review/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:campaign-plan/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:competitive-brief/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:content-creation/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:draft-content/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:email-sequence/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:performance-report/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-plugin-skill:seo-audit/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:assay/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:bookforge/LICENSE` | MIT | 라이선스 본문 확인
- `claude-skill:bookforge/SKILL.md` | MIT | 도해 구조와 자체 영상화 근거
- `claude-skill:bookforge/references/diagram-ledger.json` | MIT | 도해 구조와 자체 영상화 근거
- `claude-skill:bookforge/references/diagrams.md` | MIT | 도해 구조와 자체 영상화 근거
- `claude-skill:card-shorts/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:card-shorts/references/carousel-templates.json` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:card-shorts/references/copy-formulas.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:card-shorts/references/custom-tier-guide.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:card-shorts/references/cutout-pipeline.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:card-shorts/references/fonts.json` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:card-shorts/references/image-strategy.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:card-shorts/references/pagination.config.json` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:card-shorts/references/ref-anchors.json` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:card-shorts/references/render-recipe.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:card-shorts/references/research-index.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:card-shorts/references/routing.json` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:card-shorts/references/schemas/cutouts.schema.json` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:card-shorts/references/schemas/measure.schema.json` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:card-shorts/references/schemas/remediation.schema.json` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:card-shorts/references/shorts-specs.json` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:card-shorts/references/tiers/brand.json` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:card-shorts/references/tiers/character.json` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:card-shorts/references/tiers/data.json` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:card-shorts/references/tiers/editorial.json` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:card-shorts/references/tiers/luxury.json` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:card-shorts/references/tiers/news.json` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:card-shorts/references/tiers/newsprint.json` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:card-shorts/scripts/render/build_shorts.mjs` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:codex-imagegen/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:codex-spawn/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:deck-factory/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:design-apple/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:design-apple/references/DESIGN.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:design-artifact/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:design-linear/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:design-linear/references/DESIGN.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:design-notion/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:design-notion/references/DESIGN.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:design-stripe/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:design-stripe/references/DESIGN.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:design-vercel/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:design-vercel/references/DESIGN.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:embedded-captions/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:embedded-captions/references/aesthetic-principles.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:embedded-captions/references/anti-patterns.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:embedded-captions/references/bespoke-vs-presets.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:embedded-captions/references/caption-grouping.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:embedded-captions/references/composition-craft.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:embedded-captions/references/direction-catalog.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:embedded-captions/references/failure-modes.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:embedded-captions/references/layout-heuristics.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:embedded-captions/references/motion-vocabulary.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:embedded-captions/references/rail.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:embedded-captions/references/reference-bar.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:embedded-captions/references/scene-types.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:embedded-captions/references/typographic-moves.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:embedded-captions/references/typography-presets.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:faceless-explainer/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:faceless-explainer/references/cut-catalog.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:faceless-explainer/references/motion-language.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:faceless-explainer/references/story-design.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:faceless-explainer/references/visual-design.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:factchk/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:figma/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:general-video/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:gn-corpus/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:gn-voice/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:hate/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:html-diagram/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:html-plan/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:html-prototype/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:html-wireframe/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:html/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:hyperframes-animation/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:hyperframes-animation/blueprints/agent-progress-theater.md` | unknown | 복합 장면의 시간 순서와 대표 움직임
- `claude-skill:hyperframes-animation/blueprints/camera-journey.md` | unknown | 복합 장면의 시간 순서와 대표 움직임
- `claude-skill:hyperframes-animation/blueprints/comparison-split.md` | unknown | 복합 장면의 시간 순서와 대표 움직임
- `claude-skill:hyperframes-animation/blueprints/constellation-hub.md` | unknown | 복합 장면의 시간 순서와 대표 움직임
- `claude-skill:hyperframes-animation/blueprints/cta-morph-press.md` | unknown | 복합 장면의 시간 순서와 대표 움직임
- `claude-skill:hyperframes-animation/blueprints/cursor-ui-demo.md` | unknown | 복합 장면의 시간 순서와 대표 움직임
- `claude-skill:hyperframes-animation/blueprints/dataviz-countup.md` | unknown | 복합 장면의 시간 순서와 대표 움직임
- `claude-skill:hyperframes-animation/blueprints/device-surface-showcase.md` | unknown | 복합 장면의 시간 순서와 대표 움직임
- `claude-skill:hyperframes-animation/blueprints/fixed-anchor-cycle.md` | unknown | 복합 장면의 시간 순서와 대표 움직임
- `claude-skill:hyperframes-animation/blueprints/grid-card-assemble.md` | unknown | 복합 장면의 시간 순서와 대표 움직임
- `claude-skill:hyperframes-animation/blueprints/kinetic-type-beats.md` | unknown | 복합 장면의 시간 순서와 대표 움직임
- `claude-skill:hyperframes-animation/blueprints/logo-assemble-lockup.md` | unknown | 복합 장면의 시간 순서와 대표 움직임
- `claude-skill:hyperframes-animation/blueprints/overwhelm-surround.md` | unknown | 복합 장면의 시간 순서와 대표 움직임
- `claude-skill:hyperframes-animation/blueprints/panel-edit-live-sync.md` | unknown | 복합 장면의 시간 순서와 대표 움직임
- `claude-skill:hyperframes-animation/blueprints/prompt-type-submit-generate.md` | unknown | 복합 장면의 시간 순서와 대표 움직임
- `claude-skill:hyperframes-animation/blueprints/spatial-pan-stations.md` | unknown | 복합 장면의 시간 순서와 대표 움직임
- `claude-skill:hyperframes-animation/blueprints/ticker-takeover.md` | unknown | 복합 장면의 시간 순서와 대표 움직임
- `claude-skill:hyperframes-animation/blueprints/titlecard-reveal.md` | unknown | 복합 장면의 시간 순서와 대표 움직임
- `claude-skill:hyperframes-animation/blueprints/transcript-scroll-artifact-reveal.md` | unknown | 복합 장면의 시간 순서와 대표 움직임
- `claude-skill:hyperframes-animation/blueprints/typewriter-reveal.md` | unknown | 복합 장면의 시간 순서와 대표 움직임
- `claude-skill:hyperframes-animation/blueprints/video-text-pivot.md` | unknown | 복합 장면의 시간 순서와 대표 움직임
- `claude-skill:hyperframes-animation/blueprints/zoom-out-workspace-reveal.md` | unknown | 복합 장면의 시간 순서와 대표 움직임
- `claude-skill:hyperframes-animation/references/motion-blur.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-animation/rules/3d-camera-flight.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/3d-page-scroll.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/3d-text-depth-layers.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/ai-tracking-box.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/ambient-glow-bloom.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/anchored-layout-expand.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/asr-keyword-glow.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/avatar-cloud-network.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/camera-cursor-tracking.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/card-morph-anchor.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/center-outward-expansion.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/chart-scrub-readout.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/chromatic-glitch.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/context-sensitive-cursor.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/control-target-sync.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/coordinate-target-zoom.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/counting-dynamic-scale.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/css-marker-patterns.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/cursor-click-ripple.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/cursor-drag.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/depth-of-field-blur.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/depth-scatter-assemble.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/discrete-text-sequence.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/dynamic-content-sequencing.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/gradient-text-sweep.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/gsap-effects.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/hacker-flip-3d.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/kinetic-beat-slam.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/motion-blur-streak.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/multi-cursor-choreography.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/multi-phase-camera.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/nudge-curve.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/orbit-3d-entry.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/particle-burst.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/physics-press-reaction.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/press-release-spring.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/reactive-displacement.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/scale-swap-transition.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/sine-wave-loop.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/split-tilt-cards.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/spring-pop-entrance.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/stat-bars-and-fills.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/svg-icon-enrichment.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/svg-path-draw.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/theme-crossfade-morph.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/vertical-spring-ticker.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/viewport-change.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-animation/rules/waterfall-entry.md` | unknown | 원자 모션의 현상과 값 범위
- `claude-skill:hyperframes-audio/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:hyperframes-audio/references/attributes.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-audio/references/diagnosis.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-audio/references/fx-registry.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-audio/references/presets.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-cli/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:hyperframes-cli/references/beats.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-cli/references/cloud.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-cli/references/cloudrun.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-cli/references/compare-and-batch.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-cli/references/doctor-browser.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-cli/references/init-and-scaffold.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-cli/references/lambda.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-cli/references/lint-validate-inspect.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-cli/references/preview-render.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-cli/references/upgrade-info-misc.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-core/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:hyperframes-core/references/composition-patterns.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-core/references/creator-editing-recipes.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-core/references/data-attributes.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-core/references/determinism-rules.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-core/references/full-screen-motion.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-core/references/minimal-composition.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-core/references/sub-compositions.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-core/references/tailwind.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-core/references/tracks-and-clips.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-core/references/variables-and-media.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-creative/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:hyperframes-creative/references/audio-reactive.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-creative/references/beat-direction.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-creative/references/composition-patterns.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-creative/references/data-in-motion.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-creative/references/design-adherence.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-creative/references/design-picker.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-creative/references/design-spec.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-creative/references/house-style.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-creative/references/motion-principles.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-creative/references/narration.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-creative/references/prompt-expansion.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-creative/references/story-spine.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-creative/references/storyboard-recipe.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-creative/references/typography.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-creative/references/video-composition.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-creative/references/visual-styles.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-keyframes/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:hyperframes-keyframes/references/keyframe-patterns.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-registry/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:hyperframes-registry/references/component-quality-bar.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-registry/references/contributing.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-registry/references/demo-html-pattern.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-registry/references/discovery.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-registry/references/install-locations.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-registry/references/placeholder-material.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-registry/references/templates.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-registry/references/wiring-blocks.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-registry/references/wiring-components.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes-studio/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:hyperframes/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:hyperframes/references/brief-contract.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes/references/brief-format.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes/references/capability-menu.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes/references/frame-worker-core.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes/references/intent-interview.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes/references/pitch-round.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes/references/production-loop.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes/references/review-loop.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes/references/route-briefs.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes/references/routes/embedded-captions.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes/references/routes/faceless-explainer.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes/references/routes/general-video.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes/references/routes/motion-graphics.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes/references/routes/music-to-video.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes/references/routes/pr-to-video.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes/references/routes/product-launch-video.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes/references/routes/remotion-to-hyperframes.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes/references/routes/slideshow.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes/references/routes/talking-head-recut.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes/references/script-format.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes/references/skill-lifecycle.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes/references/storyboard-format.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes/references/subagent-dispatch.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:hyperframes/references/workflow-catalog.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:ig-carousel/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:image-prompt/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:infographic-creator/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:mandela/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:media-use/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:media-use/references/audio.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:media-use/references/grading.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:media-use/references/media-treatment-recipes.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:media-use/references/media-treatments.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:media-use/references/memory.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:media-use/references/meta.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:media-use/references/operations.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:media-use/references/resolve.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:media-use/references/setup-providers.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:media-use/references/telemetry-dashboard.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:motion-graphics/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:motion-graphics/references/builder-contract.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:motion-graphics/references/motion-vocabulary.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:motion-graphics/references/shot-plan-ir.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:music-to-video/SKILL.md` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/frame-skeleton.md` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/montage.md` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitive-catalog.md` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/3d-card-flip/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/3d-card-flip/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/bg-flow-field/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/bg-flow-field/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/binary-decrypt/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/binary-decrypt/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/blur-resolve/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/blur-resolve/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/braam-punch/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/braam-punch/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/chromatic-split/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/chromatic-split/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/chrome-sweep/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/chrome-sweep/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/counting-punch/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/counting-punch/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/crash-zoom-in/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/crash-zoom-in/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/datamosh-smear/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/datamosh-smear/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/directional-fill/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/directional-fill/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/dolly-zoom/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/dolly-zoom/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/electric-arc/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/electric-arc/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/flash-cut/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/flash-cut/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/gooey-metaball/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/gooey-metaball/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/hard-cut/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/hard-cut/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/hypercut-whip/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/hypercut-whip/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/iris-open/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/iris-open/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/kinetic-letter-in/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/kinetic-letter-in/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/liquid-morph/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/liquid-morph/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/mask-reveal/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/mask-reveal/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/mosaic-pack/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/mosaic-pack/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/neon-flicker/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/neon-flicker/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/outline-to-fill/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/outline-to-fill/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/palette-flip/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/palette-flip/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/particle-burst/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/particle-burst/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/pixel-dissolve/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/pixel-dissolve/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/radial-burst-lines/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/radial-burst-lines/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/screen-shake/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/screen-shake/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/slot-machine-reveal/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/slot-machine-reveal/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/spotlight-sweep/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/spotlight-sweep/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/staggered-exit/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/staggered-exit/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/text-spectral-rays/USAGE.md` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/text-spectral-rays/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/text-spectral-rays/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/text-wave-distort/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/text-wave-distort/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/tile-mosaic/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/tile-mosaic/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/typewriter-reveal/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/typewriter-reveal/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/word-grid-burst/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/motion-primitives/word-grid-burst/scene.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/planning.md` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/storyboard-format.md` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/template-catalog.md` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/templates/card-flyby/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/templates/card-flyby/program.json` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/templates/held-message-living-field/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/templates/held-text-strobe-burst/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/templates/intro-kinetic-cascade/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/templates/intro-kinetic-cascade/program.json` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/templates/logo-split-lockup-pulse/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/templates/poster-tile-mosaic/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/templates/poster-tile-mosaic/program.json` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/templates/roll-flipbook-word-cycle/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/templates/split-anchor-word-slot/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/templates/split-anchor-word-slot/program.json` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:music-to-video/references/templates/typewriter-phrase-keyword-shuffle/index.html` | unknown | 비트 동기 원자 기법과 그룹 템플릿
- `claude-skill:pattern-foundry/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:pattern-foundry/references/collect-playbooks.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:pattern-foundry/references/curation-rubric.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:pattern-foundry/references/dedup-protocol.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:pattern-foundry/references/distill-template.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:pattern-foundry/references/integration-checklist.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:pattern-foundry/references/recon-playbook.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:pattern-foundry/references/render-gate.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:pr-to-video/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:pr-to-video/references/code-vocabulary.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:pr-to-video/references/cut-catalog.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:pr-to-video/references/motion-language.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:pr-to-video/references/story-design.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:pr-to-video/references/visual-design.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:prism/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:product-launch-video/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:product-launch-video/references/cut-catalog.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:product-launch-video/references/motion-language.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:product-launch-video/references/story-design.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:product-launch-video/references/visual-design.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:re0/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:remotion-to-hyperframes/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:remotion-to-hyperframes/references/api-map.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:remotion-to-hyperframes/references/escape-hatch.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:remotion-to-hyperframes/references/eval.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:remotion-to-hyperframes/references/fonts.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:remotion-to-hyperframes/references/limitations.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:remotion-to-hyperframes/references/lottie.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:remotion-to-hyperframes/references/media.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:remotion-to-hyperframes/references/parameters.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:remotion-to-hyperframes/references/sequencing.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:remotion-to-hyperframes/references/timing.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:remotion-to-hyperframes/references/transitions.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `claude-skill:scrolline-deck/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:shower/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:slideshow/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:ssotize/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/algorithmic-art/LICENSE.txt` | Apache-2.0 | 라이선스 본문 확인
- `claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/algorithmic-art/SKILL.md` | Apache-2.0 | 담당 영역 및 모션 관련성 판별
- `claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/brand-guidelines/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/canvas-design/LICENSE.txt` | Apache-2.0 | 라이선스 본문 확인
- `claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/canvas-design/SKILL.md` | Apache-2.0 | 담당 영역 및 모션 관련성 판별
- `claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/docs/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/docx/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/google-workspace/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/import-memory/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/internal-comms/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/mcp-builder/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/morning/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/pdf/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/pptx/LICENSE.txt` | Apache-2.0 | 라이선스 본문 확인
- `claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/pptx/SKILL.md` | Apache-2.0 | 담당 영역 및 모션 관련성 판별
- `claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/skill-creator/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/slack-gif-creator/LICENSE.txt` | Apache-2.0 | 라이선스 본문 확인
- `claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/slack-gif-creator/SKILL.md` | Apache-2.0 | 담당 영역 및 모션 관련성 판별
- `claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/theme-factory/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/xlsx/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:talking-head-recut/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `claude-skill:talking-head-recut/references/DESIGN_INDEX.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `~/.claude/vendor/paperthin/skills/breadth/re0-upgrade/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/breadth/ssotize/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/coil/catchup/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/coil/nba/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/coil/re0-loop/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/coil/re0-memo/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/coil/re0-plan/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/coil/re0-work/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/depth/aim/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/depth/autobahn/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/depth/debloat/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/depth/dedash/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/depth/detool/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/depth/factchk/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/depth/feynman/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/depth/hate/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/depth/macrothink/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/depth/mandela/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/depth/modelchk/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/depth/re0-git/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/depth/re0-merge/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/depth/re0-release/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/depth/re0/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/depth/readchk/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/depth/reorder/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/depth/shower/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/depth/sip/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `~/.claude/vendor/paperthin/skills/mesh/prism/SKILL.md` | unknown | 담당 영역 및 모션 관련성 판별
- `gongnyang/awesome-html-scrolline-deck:LICENSE` | MIT | 라이선스 본문 확인
- `gongnyang/awesome-html-scrolline-deck:references/choreography.md` | MIT | 모션 어휘와 안무 및 제외 판단
- `gongnyang/awesome-html-scrolline-deck:references/design.md` | MIT | 모션 어휘와 안무 및 제외 판단
- `gongnyang/awesome-html-scrolline-deck:references/techniques.md` | MIT | 모션 어휘와 안무 및 제외 판단
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/anatomy-rows/scene.css` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/anatomy-rows/scene.html` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/anatomy-rows/scene.js` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/anatomy-rows/template.json` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/closing-qr/scene.css` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/closing-qr/scene.html` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/closing-qr/scene.js` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/closing-qr/template.json` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/frame-scrub-hero/scene.css` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/frame-scrub-hero/scene.html` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/frame-scrub-hero/scene.js` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/frame-scrub-hero/template.json` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/frame-scrub-video/scene.css` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/frame-scrub-video/scene.html` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/frame-scrub-video/scene.js` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/frame-scrub-video/template.json` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/horizontal-gallery/scene.css` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/horizontal-gallery/scene.html` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/horizontal-gallery/scene.js` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/horizontal-gallery/template.json` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/kinetic-titles/scene.css` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/kinetic-titles/scene.html` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/kinetic-titles/scene.js` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/kinetic-titles/template.json` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/odometer-stats/scene.css` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/odometer-stats/scene.html` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/odometer-stats/scene.js` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/odometer-stats/template.json` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/paper-assembly/scene.css` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/paper-assembly/scene.html` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/paper-assembly/scene.js` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/paper-assembly/template.json` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/parallax-video/scene.css` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/parallax-video/scene.html` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/parallax-video/scene.js` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/parallax-video/template.json` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/tilt-card/scene.css` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/tilt-card/scene.html` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/tilt-card/scene.js` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/tilt-card/template.json` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/wipe-transform/scene.css` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/wipe-transform/scene.html` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/wipe-transform/scene.js` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/wipe-transform/template.json` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/word-relay/scene.css` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/word-relay/scene.html` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/word-relay/scene.js` | MIT | 스크롤 장면 안무와 실제 기본값
- `gongnyang/awesome-html-scrolline-deck:templates/scenes/word-relay/template.json` | MIT | 스크롤 장면 안무와 실제 기본값
- `local:ig-carousel-hub/03_templates/motion/slot-spec.md` | unknown | 모션 어휘와 안무 및 제외 판단
- `local:ig-carousel-hub/03_templates/sequences.check.mjs` | unknown | 모션 어휘와 안무 및 제외 판단
- `local:ig-carousel-hub/03_templates/sequences.json` | unknown | 모션 어휘와 안무 및 제외 판단
- `local:ig-carousel-hub/03_templates/sequences.v3.json` | unknown | 모션 어휘와 안무 및 제외 판단
- `local:ig-carousel-hub/03_templates/types.json` | unknown | 모션 어휘와 안무 및 제외 판단
- `local:ig-carousel-hub/03_templates/types.v3.json` | unknown | 모션 어휘와 안무 및 제외 판단
- `local:ig-carousel-hub/04_engine/motion/capture_poster.mjs` | unknown | 모션 어휘와 안무 및 제외 판단
- `local:ig-carousel-hub/04_engine/motion/compose.mjs` | unknown | 모션 어휘와 안무 및 제외 판단
- `local:ig-carousel-hub/04_engine/motion/render_carousel_slides.mjs` | unknown | 모션 어휘와 안무 및 제외 판단
- `local:ig-carousel-hub/04_engine/motion/render_evidence.mjs` | unknown | 모션 어휘와 안무 및 제외 판단
- `gongnyang/reelforge:LICENSE` | Apache-2.0 | 라이선스 본문 확인
- `gongnyang/reelforge:blocks/README.md` | Apache-2.0 | 차트와 목록 및 수치의 순차 안무
- `gongnyang/reelforge:blocks/bar/block.html` | Apache-2.0 | 차트와 목록 및 수치의 순차 안무
- `gongnyang/reelforge:blocks/compare/block.html` | Apache-2.0 | 차트와 목록 및 수치의 순차 안무
- `gongnyang/reelforge:blocks/line/block.html` | Apache-2.0 | 차트와 목록 및 수치의 순차 안무
- `gongnyang/reelforge:blocks/list/block.html` | Apache-2.0 | 차트와 목록 및 수치의 순차 안무
- `gongnyang/reelforge:blocks/numbered/block.html` | Apache-2.0 | 차트와 목록 및 수치의 순차 안무
- `gongnyang/reelforge:blocks/pie/block.html` | Apache-2.0 | 차트와 목록 및 수치의 순차 안무
- `gongnyang/reelforge:blocks/quote/block.html` | Apache-2.0 | 차트와 목록 및 수치의 순차 안무
- `gongnyang/reelforge:blocks/statistic/block.html` | Apache-2.0 | 차트와 목록 및 수치의 순차 안무
- `gongnyang/reelforge:skills/reelforge/references/gallery/GALLERY.md` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/ROUTING.md` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/atmo/glow-pulse.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/atmo/glow-pulse.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/atmo/grain-flip.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/atmo/grain-flip.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/camera/eye-shift.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/camera/eye-shift.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/camera/multiplane-push.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/camera/multiplane-push.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/camera/orbit-turntable.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/camera/orbit-turntable.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/camera/parallax-3plane.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/camera/parallax-3plane.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/data/count-up-punch.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/data/count-up-punch.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/data/line-chart-trace.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/data/line-chart-trace.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/data/progress-ring.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/data/progress-ring.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/object/blinds-stripe-triplet.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/object/blinds-stripe-triplet.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/object/connector-tree-cascade.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/object/connector-tree-cascade.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/object/hero-overshoot-strobe.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/object/hero-overshoot-strobe.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/object/trace-then-fill.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/object/trace-then-fill.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/pairs/light-flash-in.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/pairs/light-flash-in.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/pairs/light-flash-out.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/pairs/light-flash-out.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/pairs/match-cut-in.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/pairs/match-cut-in.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/pairs/match-cut-out.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/pairs/match-cut-out.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/pairs/whip-pan-in.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/pairs/whip-pan-in.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/pairs/whip-pan-out.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/pairs/whip-pan-out.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/pairs/zoom-portal-in.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/pairs/zoom-portal-in.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/pairs/zoom-portal-out.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/pairs/zoom-portal-out.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/seal/checkmark-lockup.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/seal/checkmark-lockup.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/seal/rail-lockup-sweep.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/seal/rail-lockup-sweep.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/typo/cascade-wave.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/typo/cascade-wave.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/typo/demote-promote-arrow.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/typo/demote-promote-arrow.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/typo/glitch-swap-punch.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/typo/glitch-swap-punch.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/typo/mask-line-reveal.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/typo/mask-line-reveal.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/typo/netflix-converge.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/typo/netflix-converge.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/typo/scale-slam-strike.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/typo/scale-slam-strike.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/typo/tracking-open.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/typo/tracking-open.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/typo/typewriter-stage.html` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/fragments/typo/typewriter-stage.meta.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/gallery/gallery-index.json` | Apache-2.0 | 라우팅 및 검증 프래그먼트의 현상 대조
- `gongnyang/reelforge:skills/reelforge/references/grammar/00-INDEX.md` | Apache-2.0 | 기법 정의와 파라미터 및 의미
- `gongnyang/reelforge:skills/reelforge/references/grammar/01-anchor-transform.md` | Apache-2.0 | 기법 정의와 파라미터 및 의미
- `gongnyang/reelforge:skills/reelforge/references/grammar/02-easing-graph.md` | Apache-2.0 | 기법 정의와 파라미터 및 의미
- `gongnyang/reelforge:skills/reelforge/references/grammar/03-camera-3d.md` | Apache-2.0 | 기법 정의와 파라미터 및 의미
- `gongnyang/reelforge:skills/reelforge/references/grammar/04-masks-mattes.md` | Apache-2.0 | 기법 정의와 파라미터 및 의미
- `gongnyang/reelforge:skills/reelforge/references/grammar/05-text-animator.md` | Apache-2.0 | 기법 정의와 파라미터 및 의미
- `gongnyang/reelforge:skills/reelforge/references/grammar/06-shapes-strokes.md` | Apache-2.0 | 기법 정의와 파라미터 및 의미
- `gongnyang/reelforge:skills/reelforge/references/grammar/07-stylize-time.md` | Apache-2.0 | 기법 정의와 파라미터 및 의미
- `gongnyang/reelforge:skills/reelforge/references/grammar/08-transitions-advanced.md` | Apache-2.0 | 기법 정의와 파라미터 및 의미

## 못 연 곳과 한계

- `~/deck-factory/incubator`: SKILL이 가리키는 정본 레포가 이 환경에 없다. 스킬 본문까지만 확인했다.
- `claude-skill:card-shorts/references/sequence-templates.json`: 해당 이름의 파일은 없다. 실제 시퀀스는 carousel-templates.json에서 확인했다.
- ReelForge 일부 경로는 첫 접근에 Input/output error 또는 Cannot allocate memory가 발생했다. 필요한 원본 파일을 개별 재시도해 열람했다.

- 담당 기법 원본의 최종 미열람 파일은 없다. 웹과 플러그인 원격 서비스는 로컬 조사 범위이므로 실행하지 않았다.
