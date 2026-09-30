# R03 개념 설명 장면 · Concept Explainer

![레시피 클립](preview.gif)

**제목과 세 단계 도해를 순서대로 보여주고 핵심 모델에 초점을 모은다**

- 어울리는 영상: AI 원리를 한 장면으로 설명하는 교육 영상
- 구조: 제목 위계 등장 → 입력·모델·출력 점진 공개 → 모델 스포트라이트
- 길이: 6초

## 순서와 타이밍

| 시각 | 효과 | 역할 | 파라미터 |
|---|---|---|---|
| 0.30~1.72s | [모션 위계](../../effects/motion-hierarchy/) | 제목을 먼저 읽고 질문과 설명을 따른다 | 제목 y 32px / 0.70s, 부제 y 18px / 0.40s, 설명 y 10px / 0.22s, power3.out / power2.out |
| 1.72~3.47s | [점진적 공개](../../effects/progressive-disclosure/) | 입력·모델·출력을 0.7초 간격으로 공개한다 | 단계 3개, opacity 0 → 1, 이전 단계 0.25, 공개 0.30s / 마지막 0.35s, 연결선 scaleX 0 → 1 / 0.30s |
| 3.80~4.95s | [스포트라이트](../../effects/spotlight/) | 모델을 100% 농도로 복원하고 주변을 낮춘다 | 주변 opacity 0.25 / 0.65s, 목표 1.00 / 0.65s, 주홍 괄호 3px / 0.45s, 최종 홀드 1.05s |

## 주의

- 도해 공개 전에 스포트라이트를 시작하지 않는다
- 모델 이외의 단계에 주홍을 추가하지 않는다

## 에이전트 프롬프트

Claude Code

```text
6초 개념 설명 장면을 GSAP 코어와 공용 종이·먹·주홍 무대로 만들며, 0.30~1.72s에 motion-hierarchy 효과로 제목을 먼저 읽고 질문과 설명을 따른다 값은 제목 y 32px / 0.70s, 부제 y 18px / 0.40s, 설명 y 10px / 0.22s, power3.out / power2.out이다. 1.72~3.47s에 progressive-disclosure 효과로 입력·모델·출력을 0.7초 간격으로 공개한다 값은 단계 3개, opacity 0 → 1, 이전 단계 0.25, 공개 0.30s / 마지막 0.35s, 연결선 scaleX 0 → 1 / 0.30s이다. 3.80~4.95s에 spotlight 효과로 모델을 100% 농도로 복원하고 주변을 낮춘다 값은 주변 opacity 0.25 / 0.65s, 목표 1.00 / 0.65s, 주홍 괄호 3px / 0.45s, 최종 홀드 1.05s이다. 단일 paused 타임라인으로 seek를 지원하고 마지막 0.6초 이상 완성 상태를 유지한다.
```

Codex

```text
recipes/concept-explainer/index.html에 6초 레시피를 구현한다. 0.30~1.72s에 motion-hierarchy 효과로 제목을 먼저 읽고 질문과 설명을 따른다 값은 제목 y 32px / 0.70s, 부제 y 18px / 0.40s, 설명 y 10px / 0.22s, power3.out / power2.out이다. 1.72~3.47s에 progressive-disclosure 효과로 입력·모델·출력을 0.7초 간격으로 공개한다 값은 단계 3개, opacity 0 → 1, 이전 단계 0.25, 공개 0.30s / 마지막 0.35s, 연결선 scaleX 0 → 1 / 0.30s이다. 3.80~4.95s에 spotlight 효과로 모델을 100% 농도로 복원하고 주변을 낮춘다 값은 주변 opacity 0.25 / 0.65s, 목표 1.00 / 0.65s, 주홍 괄호 3px / 0.45s, 최종 홀드 1.05s이다. node scripts/render.mjs recipes/concept-explainer --jobs 1로 렌더하고 python3 scripts/sheet.py recipes/concept-explainer로 접촉 인화를 만든다. 0.5초 제목, 2.5초 모델 공개, 3.4초 출력 공개, 4.8초 모델 초점, 5.9초 완성 홀드를 확인한다 잘림과 주홍 초점 중복을 점검한 뒤 .staging/recipes/concept-explainer.json을 작성한다.
```
