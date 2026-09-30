# Nº 325 캐릭터 입력 반응 · Character Input Response

> 클립 렌더 예정 / Clip rendering planned.

**캐릭터가 입력 커서를 바라보고 비밀번호 입력 때 눈을 가린다.**

A character watches the input caret and covers its eyes during password entry.

| Family | Level | Purpose | Media | Runtime |
|---|---|---|---|---|
| UI 시연 · UI DEMO | 중급 | 피드백, 강조 | 제품 시연, 웹 UI, 설명 영상 | svg |

다른 이름 / Also known as: Character Login Response, 입력에 반응하는 캐릭터

## 선택 기준 / Selection

입력 진행과 보호 상태를 친근하게 알려 준다. / Offers friendly feedback about input and privacy state.

- 캐릭터 입력 반응으로 입력 진행과 보호 상태를 친근하게 알려 준다 때 / Use this effect when you need to communicate: Offers friendly feedback about input and privacy state.
- 제품 시연에서 조작 전후 상태를 한 장면 안에 연결할 때 / Connect interaction states within a product demonstration.

좋은 예 / Good: 이메일 입력을 따라 눈이 움직이고 비밀번호 칸에서는 팔이 눈을 가린다
나쁜 예 / Bad: 캐릭터가 비밀번호 내용을 읽는 듯 반응한다
주의 / Avoid: 캐릭터가 비밀번호 내용을 읽는 듯 반응한다 상황을 피한다 · 상태 변화가 끝난 뒤에는 반복을 멈춰 읽을 시간을 둔다

## 파라미터 / Parameters

| Parameter | Default | Range | Note |
|---|---|---|---|
| 기본 지속 | 0.4s | 0.24~0.6s | 1920x1080 시연 기준의 한 동작 시간 |
| 눈 가림 시간 | 700ms | 400~900ms | 대상 크기와 정보 밀도에 맞춰 조절한다 |
| 이징 | power2.out | none \| power2.out \| power2.inOut | 진행값은 none, 정착은 power2.out을 쓴다 |

## 구현 / Implementation (GSAP)

```js
tl.to('.eyes', {x:8,duration:.4,ease:'power2.out'}, 0);
tl.set('.arm', {transformOrigin:'50% 100%'});
tl.to('.arm', {rotation:-55,duration:.7,ease:'power2.out'}, .6);
tl.to('.eyes', {opacity:0,duration:.15}, 1);
```

## 프롬프트 / Prompts

### 한국어 · Claude Code
```text
<대상>에 캐릭터 입력 반응을 적용해. 캐릭터가 입력 커서를 바라보고 비밀번호 입력 때 눈을 가린다. 기본 지속 0.4초, 눈 가림 시간 700ms, 이징 power2.out를 사용하고 <파일>에 결정론적 paused 타임라인으로 구현해. 위 핵심 코드의 선택자를 대상 구조에 맞추고 완료 상태를 유지해.
```

### 한국어 · Codex
```text
<파일>의 시연 장면에서 <대상>에 캐릭터 입력 반응을 적용해. 기본 지속 0.4초, 눈 가림 시간 700ms, 이징 power2.out를 사용해. 0초, 0.2초, 0.8초를 캡처해 초기 상태, 중간 변화, 완료 상태를 확인하고 같은 시점 seek 결과가 일치하는지 검증해.
```

### English · Claude Code
```text
Apply Character Input Response to <target> in <file>. A character watches the input caret and covers its eyes during password entry. Use a 0.4-second duration, a 700ms eye-cover motion, and power2.out easing. Implement the core snippet with selectors matching the target, using a deterministic paused timeline, and retain the final state.
```

### English · Codex
```text
Apply Character Input Response to <target> in the demonstration scene in <file>. Use a 0.4-second duration, a 700ms eye-cover motion, and power2.out easing. Capture at 0, 0.2, and 0.8 seconds to verify the initial, intermediate, and final states. Seek to the same times again and confirm identical results.
```

예시 / Example: 캐릭터 입력 반응를 `.hero`에 적용해. / Apply Character Input Response to `.hero`.

## 적용 / Application

- HyperFrames: paused 타임라인에 캐릭터 입력 반응 비트를 넣고 seek로 시작과 중간 상태를 재현한다. 기본 지속 0.4초, 눈 가림 시간 700ms, 이징 power2.out를 고정한다.
- ReelForge: 씬 워커 브리프에 기본 지속 0.4초, 눈 가림 시간 700ms, 이징 power2.out와 시작 상태, 완료 상태를 싣는다. 이메일 입력을 따라 눈이 움직이고 비밀번호 칸에서는 팔이 눈을 가린다.
- Scrolline Deck: 진행률 0~1을 0.4초 타임라인에 매핑한다. scrub에서는 스프링 대신 ease-out을 쓰고 역방향에서도 시작 상태를 복원한다.

조합 / Pair with: [타이핑 입력 · Typing Input](../typing-input/) · [팔로스루 · Follow-through](../follow-through/)

출처 / Sources: [rive.app/yoonikuu](https://rive.app/community/files/4771-9633-login-teddy/) (CC-BY (version unverified))

[목록 / Catalog](../../references/catalog.md) · [index.json](../../index.json)
