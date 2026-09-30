# Contributing · 기여 안내

[English](#english) · [한국어](#한국어)

## English

Thanks for helping the field guide grow. Three kinds of contribution are most useful.

1. **A new technique (definition only).** Open an issue with the *New technique* template, or add a meta file (see below) with `render` omitted. Definitions without clips are welcome; the site marks them "clip coming".
2. **A clip for an existing technique.** Build `effects/<slug>/index.html` following the stage contract and render it.
3. **Better defaults or prompts.** If a parameter looks wrong in practice, show a before/after contact sheet.

### Stage contract (clips)

- Start from a copy of `effects/overlapping-action/`. Keep `lib/stage.css` and `lib/stage.js`; do not add new colors (use the tokens `--paper --ink --ink2 --ink3 --rule --verm`).
- `<body data-dur="3">` + `<main class="scene">`, then `const tl = Motion.timeline(); … Motion.ready();`. One paused timeline, nothing else drives time.
- No `Math.random`, `Date.now`, `setTimeout` or `requestAnimationFrame` in effect code. Use `Motion.rand(seed)`.
- Animate transforms, opacity, clip-path, filter, stroke offsets. Not width, height, top or left.
- One vermilion focus per frame. No boxes, cards or drop shadows. Enter, hold (at least 0.5 s of finished state), exit.
- The effect's name must be obvious in the clip. If a viewer cannot tell overlap from stagger, it is not done.

### Meta file

Write `.staging/meta/<slug>.json` with the keys listed in `SKILL.md` (`slug family ko en oneLiner conveys purposes media level useWhen goodExample badExample avoid params ease snippet pairsWith engines prompts sources runtime`), plus `oneLinerEn` and `promptsEn` for English. Vocabularies for `family`, `purposes`, `media` and `level` are in `scripts/taxonomy.json`.

### Build and check

```bash
node scripts/render.mjs effects/<slug>
python3 scripts/sheet.py effects/<slug>     # look at the contact sheet
node scripts/build.mjs                      # merge into index.json, check, regenerate docs and site
```

`node scripts/check.mjs` must pass with zero failures. `index.json` is the source of truth; never hand-edit generated READMEs or `site/`.

### Sources and licensing

Cite where the idea comes from in `sources` with a URL and license. Do not copy code from GPL, AGPL or unlicensed projects. Code from MIT or Apache-2.0 projects needs the notice in `ATTRIBUTIONS.md`.

## 한국어

기여 고마워. 가장 반가운 기여는 세 가지다.

1. **새 기법(정의만).** *New technique* 이슈 템플릿을 쓰거나, `render` 없이 메타 파일을 추가한다. 클립 없는 정의도 환영이고 사이트에는 "렌더 추가 예정"으로 표시된다.
2. **기존 기법의 클립.** 무대 계약대로 `effects/<slug>/index.html`을 만들고 렌더한다.
3. **더 나은 기본값·프롬프트.** 실제로 보기 나쁜 값이면 전후 접촉 인화를 함께 올린다.

### 무대 계약(클립)

- `effects/overlapping-action/`을 복사해 시작한다. `lib/stage.css`·`lib/stage.js`는 그대로, 새 색 금지(토큰 `--paper --ink --ink2 --ink3 --rule --verm`만).
- `<body data-dur="3">` + `<main class="scene">`, 그다음 `const tl = Motion.timeline(); … Motion.ready();`. 시간은 paused 타임라인 하나만.
- 효과 코드에 `Math.random`·`Date.now`·`setTimeout`·`requestAnimationFrame` 금지. 난수는 `Motion.rand(seed)`.
- transform·opacity·clip-path·filter·stroke offset만 움직인다. width·height·top·left 금지.
- 한 프레임 한 주홍 초점. 상자·카드·그림자 금지. 진입 · 홀드(완성 상태 0.5초 이상) · 퇴장.
- 클립에서 효과 이름이 분명히 보여야 한다. 오버랩과 스태거가 구분되지 않으면 미완성.

### 메타 파일

`.staging/meta/<slug>.json`에 `SKILL.md`에 적힌 키를 쓰고, 영어용 `oneLinerEn`·`promptsEn`을 더한다. `family`·`purposes`·`media`·`level` 어휘는 `scripts/taxonomy.json`.

### 빌드와 검사

위 English 절의 명령과 같다. `node scripts/check.mjs` 실패 0이어야 한다. 정본은 `index.json`, 생성된 README와 `site/`는 손으로 고치지 않는다.

### 출처와 라이선스

아이디어의 출처를 `sources`에 URL·라이선스와 함께 적는다. GPL·AGPL·무라이선스 프로젝트의 코드는 복사하지 않는다. MIT·Apache-2.0 코드를 쓰면 `ATTRIBUTIONS.md`에 고지한다.
