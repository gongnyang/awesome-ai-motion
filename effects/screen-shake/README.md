# Nº 237 화면 흔들림 · Screen Shake

> 클립 렌더 예정 / Clip rendering planned.

**화면이나 단어가 짧게 좌우로 떨리다가 빠르게 안정된다**

The screen or a word trembles side to side briefly and quickly settles.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| 가상 카메라 · CAMERA | 기본 | 강조, 피드백 | 숏폼, 제품 시연, 설명 영상 | gsap |

다른 이름 / Also known as: 화면 충격 흔들림

## 선택 기준 / Selection

타격, 충돌, 긴장을 몸으로 느끼게 한다. 짧고 강한 한 방의 강조가 된다 / Makes hits, collisions and tension felt physically. A short, strong single emphasis.

- 충격이 있는 순간이나 큰 단어가 쿵 하고 떨어질 때 / Land a heavy word or an impact moment.
- 경고나 오류 상태를 짧게 알릴 때 / Signal a warning or error briefly.

좋은 예 / Good: 250ms 동안 진폭 9px에서 4회 감쇠하며 흔들린 뒤 원위치에 정확히 돌아온다
나쁜 예 / Bad: 진폭 40px로 1초 넘게 흔들려 멀미가 나고, 끝난 뒤 위치가 조금 어긋나 있다
주의 / Avoid: 진폭 12px 초과 금지 · 지속 400ms 초과 금지

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 지속 | 250ms | 150~400ms | 짧을수록 타격감 |
| 진폭 | 9px | 6~12px | 1920x1080 기준 |
| 왕복 | 4회 | 3~5회 | 진폭은 매번 0.6배 |
| 이징 | none |  | 진폭 감쇠로 자연스러움 |

## 구현 / Implementation (GSAP)

```js
[9, -5.4, 3.2, -1.9, 0].forEach((x, i) => tl.to('.stage', { x, y: i % 2 ? 2 : -2, duration: 0.05, ease: 'none' }, 1.2 + i * 0.05));
// 끝값 0: 원위치 복귀 보장
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상> 화면 전체(.stage)에 스크린 셰이크를 넣어줘. 1.2초에 0.25초 동안 x 진폭 9px, -5.4px, 3.2px, -1.9px, 0으로 0.05초씩 ease none으로 흔들고, y는 ±2px만 더해. 끝은 반드시 원위치에 정확히 돌아오게 해.
```

### 한국어 · Codex
```text
<파일>에 screen shake를 추가해. 시작 1.2초, 0.05초 간격 5구간, x 9, -5.4, 3.2, -1.9, 0, y ±2, ease none, 난수 금지. 1.2초, 1.3초, 1.5초를 캡처해 흔들림이 감쇠하는지, 1.5초에는 x와 y가 정확히 0인지 확인해.
```

### English · Claude Code
```text
Add a screen shake to the whole stage (.stage) in <target>. At 1.2 seconds, over 0.25 seconds, step x amplitudes 9, -5.4, 3.2, -1.9, 0px at 0.05s each with ease none, adding only y of plus or minus 2px. It must return exactly to its rest position.
```

### English · Codex
```text
Add screen shake to <file>: start 1.2s, five 0.05s segments, x 9, -5.4, 3.2, -1.9, 0, y plus or minus 2, ease none, no randomness. Capture at 1.2s, 1.3s and 1.5s and verify the tremble decays and x and y are exactly 0 at 1.5s.
```

예시 / Example: 화면 흔들림를 `.hero`에 적용해. / Apply Screen Shake to `.hero`.

## 적용 / Application

- HyperFrames: 고정 진폭 배열을 순차 tween으로 쌓는다. Math.random 대신 미리 정한 배열이라 seek가 결정론적이다
- ReelForge: 브리프에 진폭, 왕복 횟수, 총 시간, 시작 시각을 싣는다. 마지막 값을 0으로 명시해 위치 복귀를 보장한다
- Scrolline Deck: 진행률 2% 구간에 재생한다. 배열의 마지막 값이 0이므로 스크럽이 중간에 멈춰도 위치가 커지지 않게 진폭을 0에 수렴시킨다

조합 / Pair with: [셰이크 · Shake](../shake/) · [비네트 펄스 · Vignette Pulse](../vignette-pulse/) · [방사 속도선 · Radial Speed Lines](../radial-speed-lines/)

출처 / Sources: local/music-to-video (`claude-skill:music-to-video/references/motion-primitive-catalog.md#screen-shake`) (unknown) · local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/screen-shake/scene.html`) (unknown) · local/music-to-video (`claude-skill:music-to-video/references/motion-primitives/screen-shake/index.html`) (unknown) · local/music-to-video (`claude-skill:music-to-video/references/template-catalog.md#split-anchor-word-slot`) (unknown) · local/claude-synced-skills (`claude-skill:synced/39cd27d1-5d54-43b6-b557-65596e75bccb_30aab8dd-6815-4962-a41b-a684567e027b/slack-gif-creator/SKILL.md`) (Apache-2.0)

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
