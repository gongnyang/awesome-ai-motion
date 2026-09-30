# R7 출처 조사

조사일: 2026-09-30. 담당 범위: 설명 및 교육 영상, 코드 설명, 제품 시연, Mayer 원리의 모션 적용.

원장: R7.jsonl, 129줄. 구현 코드를 복사하지 않고 현상과 독립 재현 방법을 기록했다. 프롬프트는 각 행 notes에 넣었다.

params의 재현 기본값은 조사자가 제안한 값이다. Manim이나 서비스의 기본 설정, 논문의 실험값으로 간주하지 않는다. smooth는 출발과 도착을 완만하게 하는 진행률 곡선이며 thereAndBack은 중간 상태까지 갔다가 원래 상태로 돌아오는 곡선이다.

기법 정의와 근거의 강도를 구분했다. 코드 및 공식 API로 확인한 효과는 이름과 대응을 기록했다. 정적 기능의 시간 확장, 채널의 제작 방향에서 도출한 연출 관례, Mayer 원리를 모션으로 옮긴 내용은 notes에 해석 또는 제안으로 표시했다. 채널의 모든 영상 프레임을 시청했다고 주장하지 않는다.

GitHub URL은 조사 당시 기본 브랜치 기준이다. Manim Community의 main 전체 animation 모듈과 stable v0.21.0 문서 색인을 함께 대조했다. 이후 브랜치 내용이 바뀔 수 있다.

## 라이선스 파일 확인

| 레포 | 확인한 LICENSE | 라이선스 | 확인 결과 |
|---|---|---|---|
| [ManimCommunity/manim](https://github.com/ManimCommunity/manim) | [LICENSE](https://github.com/ManimCommunity/manim/blob/main/LICENSE), [LICENSE.community](https://github.com/ManimCommunity/manim/blob/main/LICENSE.community) | MIT | 파일 본문에서 MIT 허락 조항을 확인했다. |
| [3b1b/manim](https://github.com/3b1b/manim) | [LICENSE.md](https://github.com/3b1b/manim/blob/master/LICENSE.md) | MIT | 파일 본문에서 MIT 허락 조항을 확인했다. |
| [3b1b/videos](https://github.com/3b1b/videos) | [LICENSE.txt](https://github.com/3b1b/videos/blob/master/LICENSE.txt) | CC-BY-NC-SA-4.0 | 엔진과 별도 라이선스다. 참고만. |
| [motion-canvas/motion-canvas](https://github.com/motion-canvas/motion-canvas) | [LICENSE](https://github.com/motion-canvas/motion-canvas/blob/main/LICENSE) | MIT | 파일 본문에서 MIT 허락 조항을 확인했다. |
| [motion-canvas/examples](https://github.com/motion-canvas/examples) | [LICENSE](https://github.com/motion-canvas/examples/blob/master/LICENSE) | MIT | 파일 본문에서 MIT 허락 조항을 확인했다. |
| [shikijs/shiki-magic-move](https://github.com/shikijs/shiki-magic-move) | [LICENSE](https://github.com/shikijs/shiki-magic-move/blob/main/LICENSE) | MIT | 파일 본문에서 MIT 허락 조항을 확인했다. |
| [code-hike/codehike](https://github.com/code-hike/codehike) | [license](https://github.com/code-hike/codehike/blob/next/license) | MIT | 파일 본문에서 MIT 허락 조항을 확인했다. |
| [rough-stuff/rough](https://github.com/rough-stuff/rough) | [LICENSE](https://github.com/rough-stuff/rough/blob/master/LICENSE) | MIT | 파일 본문에서 MIT 허락 조항을 확인했다. |
| [maxwellito/vivus](https://github.com/maxwellito/vivus) | [LICENSE](https://github.com/maxwellito/vivus/blob/master/LICENSE) | MIT | 파일 본문에서 MIT 허락 조항을 확인했다. |

공식 사이트 및 영상의 재사용 라이선스는 확인하지 못해 unknown으로 기록했다. MIT 문서 표기는 해당 오픈소스 레포의 LICENSE를 확인한 결과이며 외부 영상, 로고, 폰트, 제품 이미지까지 MIT라고 판단한 것은 아니다. 해당 자료는 참고만 한다.

## 훑은 출처

| 출처 | 라이선스 | 얻은 내용 |
|---|---|---|
| [ManimCommunity/manim: https://github.com/ManimCommunity/manim/blob/main/manim/animation/animation.py](https://github.com/ManimCommunity/manim/blob/main/manim/animation/animation.py) | MIT | 전체 공개 클래스와 문서 문자열을 대조했다. |
| [ManimCommunity/manim: https://github.com/ManimCommunity/manim/blob/main/manim/animation/changing.py](https://github.com/ManimCommunity/manim/blob/main/manim/animation/changing.py) | MIT | 전체 공개 클래스와 문서 문자열을 대조했다. |
| [ManimCommunity/manim: https://github.com/ManimCommunity/manim/blob/main/manim/animation/composition.py](https://github.com/ManimCommunity/manim/blob/main/manim/animation/composition.py) | MIT | 전체 공개 클래스와 문서 문자열을 대조했다. |
| [ManimCommunity/manim: https://github.com/ManimCommunity/manim/blob/main/manim/animation/creation.py](https://github.com/ManimCommunity/manim/blob/main/manim/animation/creation.py) | MIT | 전체 공개 클래스와 문서 문자열을 대조했다. |
| [ManimCommunity/manim: https://github.com/ManimCommunity/manim/blob/main/manim/animation/fading.py](https://github.com/ManimCommunity/manim/blob/main/manim/animation/fading.py) | MIT | 전체 공개 클래스와 문서 문자열을 대조했다. |
| [ManimCommunity/manim: https://github.com/ManimCommunity/manim/blob/main/manim/animation/growing.py](https://github.com/ManimCommunity/manim/blob/main/manim/animation/growing.py) | MIT | 전체 공개 클래스와 문서 문자열을 대조했다. |
| [ManimCommunity/manim: https://github.com/ManimCommunity/manim/blob/main/manim/animation/indication.py](https://github.com/ManimCommunity/manim/blob/main/manim/animation/indication.py) | MIT | 전체 공개 클래스와 문서 문자열을 대조했다. |
| [ManimCommunity/manim: https://github.com/ManimCommunity/manim/blob/main/manim/animation/movement.py](https://github.com/ManimCommunity/manim/blob/main/manim/animation/movement.py) | MIT | 전체 공개 클래스와 문서 문자열을 대조했다. |
| [ManimCommunity/manim: https://github.com/ManimCommunity/manim/blob/main/manim/animation/numbers.py](https://github.com/ManimCommunity/manim/blob/main/manim/animation/numbers.py) | MIT | 전체 공개 클래스와 문서 문자열을 대조했다. |
| [ManimCommunity/manim: https://github.com/ManimCommunity/manim/blob/main/manim/animation/rotation.py](https://github.com/ManimCommunity/manim/blob/main/manim/animation/rotation.py) | MIT | 전체 공개 클래스와 문서 문자열을 대조했다. |
| [ManimCommunity/manim: https://github.com/ManimCommunity/manim/blob/main/manim/animation/specialized.py](https://github.com/ManimCommunity/manim/blob/main/manim/animation/specialized.py) | MIT | 전체 공개 클래스와 문서 문자열을 대조했다. |
| [ManimCommunity/manim: https://github.com/ManimCommunity/manim/blob/main/manim/animation/speedmodifier.py](https://github.com/ManimCommunity/manim/blob/main/manim/animation/speedmodifier.py) | MIT | 전체 공개 클래스와 문서 문자열을 대조했다. |
| [ManimCommunity/manim: https://github.com/ManimCommunity/manim/blob/main/manim/animation/transform.py](https://github.com/ManimCommunity/manim/blob/main/manim/animation/transform.py) | MIT | 전체 공개 클래스와 문서 문자열을 대조했다. |
| [ManimCommunity/manim: https://github.com/ManimCommunity/manim/blob/main/manim/animation/transform_matching_parts.py](https://github.com/ManimCommunity/manim/blob/main/manim/animation/transform_matching_parts.py) | MIT | 전체 공개 클래스와 문서 문자열을 대조했다. |
| [ManimCommunity/manim: https://github.com/ManimCommunity/manim/blob/main/manim/animation/updaters/update.py](https://github.com/ManimCommunity/manim/blob/main/manim/animation/updaters/update.py) | MIT | 전체 공개 클래스와 문서 문자열을 대조했다. |
| [ManimCommunity/manim: https://github.com/ManimCommunity/manim/blob/main/manim/animation/updaters/mobject_update_utils.py](https://github.com/ManimCommunity/manim/blob/main/manim/animation/updaters/mobject_update_utils.py) | MIT | 전체 공개 클래스와 문서 문자열을 대조했다. |
| [3b1b/manim: https://github.com/3b1b/manim/blob/master/manimlib/animation/creation.py](https://github.com/3b1b/manim/blob/master/manimlib/animation/creation.py) | MIT | Community와 다른 클래스 이름 및 시각 효과를 대조했다. |
| [3b1b/manim: https://github.com/3b1b/manim/blob/master/manimlib/animation/fading.py](https://github.com/3b1b/manim/blob/master/manimlib/animation/fading.py) | MIT | Community와 다른 클래스 이름 및 시각 효과를 대조했다. |
| [3b1b/manim: https://github.com/3b1b/manim/blob/master/manimlib/animation/indication.py](https://github.com/3b1b/manim/blob/master/manimlib/animation/indication.py) | MIT | Community와 다른 클래스 이름 및 시각 효과를 대조했다. |
| [3b1b/manim: https://github.com/3b1b/manim/blob/master/manimlib/animation/movement.py](https://github.com/3b1b/manim/blob/master/manimlib/animation/movement.py) | MIT | Community와 다른 클래스 이름 및 시각 효과를 대조했다. |
| [3b1b/manim: https://github.com/3b1b/manim/blob/master/manimlib/animation/transform.py](https://github.com/3b1b/manim/blob/master/manimlib/animation/transform.py) | MIT | Community와 다른 클래스 이름 및 시각 효과를 대조했다. |
| [3b1b/manim: https://github.com/3b1b/manim/blob/master/manimlib/animation/transform_matching_parts.py](https://github.com/3b1b/manim/blob/master/manimlib/animation/transform_matching_parts.py) | MIT | Community와 다른 클래스 이름 및 시각 효과를 대조했다. |
| [3b1b/manim: https://github.com/3b1b/manim/blob/master/manimlib/animation/update.py](https://github.com/3b1b/manim/blob/master/manimlib/animation/update.py) | MIT | Community와 다른 클래스 이름 및 시각 효과를 대조했다. |
| [3b1b/manim: https://github.com/3b1b/manim/blob/master/manimlib/animation/composition.py](https://github.com/3b1b/manim/blob/master/manimlib/animation/composition.py) | MIT | Community와 다른 클래스 이름 및 시각 효과를 대조했다. |
| [3b1b/manim: https://github.com/3b1b/manim/blob/master/manimlib/animation/growing.py](https://github.com/3b1b/manim/blob/master/manimlib/animation/growing.py) | MIT | Community와 다른 클래스 이름 및 시각 효과를 대조했다. |
| [3b1b/manim: https://github.com/3b1b/manim/blob/master/manimlib/animation/numbers.py](https://github.com/3b1b/manim/blob/master/manimlib/animation/numbers.py) | MIT | Community와 다른 클래스 이름 및 시각 효과를 대조했다. |
| [3b1b/manim: https://github.com/3b1b/manim/blob/master/manimlib/animation/rotation.py](https://github.com/3b1b/manim/blob/master/manimlib/animation/rotation.py) | MIT | Community와 다른 클래스 이름 및 시각 효과를 대조했다. |
| [3b1b/manim: https://github.com/3b1b/manim/blob/master/manimlib/animation/specialized.py](https://github.com/3b1b/manim/blob/master/manimlib/animation/specialized.py) | MIT | Community와 다른 클래스 이름 및 시각 효과를 대조했다. |
| [3b1b/manim: https://github.com/3b1b/manim/blob/master/manimlib/animation/animation.py](https://github.com/3b1b/manim/blob/master/manimlib/animation/animation.py) | MIT | Community와 다른 클래스 이름 및 시각 효과를 대조했다. |
| [3b1b/videos: https://github.com/3b1b/videos/blob/master/_2016/eola/chapter3.py](https://github.com/3b1b/videos/blob/master/_2016/eola/chapter3.py) | CC-BY-NC-SA-4.0 | 장면 이름과 연출의 관계를 확인했다. 참고만. |
| [3b1b/videos: https://github.com/3b1b/videos/blob/master/_2017/eoc/chapter2.py](https://github.com/3b1b/videos/blob/master/_2017/eoc/chapter2.py) | CC-BY-NC-SA-4.0 | 장면 이름과 연출의 관계를 확인했다. 참고만. |
| [3b1b/videos: https://github.com/3b1b/videos/blob/master/_2018/fourier.py](https://github.com/3b1b/videos/blob/master/_2018/fourier.py) | CC-BY-NC-SA-4.0 | 장면 이름과 연출의 관계를 확인했다. 참고만. |
| [3b1b/videos: https://github.com/3b1b/videos/blob/master/_2019/diffyq/part2/fourier_series.py](https://github.com/3b1b/videos/blob/master/_2019/diffyq/part2/fourier_series.py) | CC-BY-NC-SA-4.0 | 장면 이름과 연출의 관계를 확인했다. 참고만. |
| [3b1b/videos: https://github.com/3b1b/videos/blob/master/custom/characters/pi_creature_animations.py](https://github.com/3b1b/videos/blob/master/custom/characters/pi_creature_animations.py) | CC-BY-NC-SA-4.0 | 장면 이름과 연출의 관계를 확인했다. 참고만. |
| [motion-canvas/motion-canvas: https://motioncanvas.io/docs/code/](https://motioncanvas.io/docs/code/) | MIT | 코드 선택, 삽입, 삭제, 교체의 움직임을 확인했다. |
| [motion-canvas/examples: https://github.com/motion-canvas/examples/blob/master/examples/asset-code/src/scenes/memory.tsx](https://github.com/motion-canvas/examples/blob/master/examples/asset-code/src/scenes/memory.tsx) | MIT | 설명용 도해 장면의 변화와 순서를 확인했다. |
| [motion-canvas/examples: https://github.com/motion-canvas/examples/blob/master/examples/asset-code/src/scenes/state-machine.tsx](https://github.com/motion-canvas/examples/blob/master/examples/asset-code/src/scenes/state-machine.tsx) | MIT | 설명용 도해 장면의 변화와 순서를 확인했다. |
| [motion-canvas/examples: https://github.com/motion-canvas/examples/blob/master/examples/asset-code/src/scenes/shader-graph.tsx](https://github.com/motion-canvas/examples/blob/master/examples/asset-code/src/scenes/shader-graph.tsx) | MIT | 설명용 도해 장면의 변화와 순서를 확인했다. |
| [motion-canvas/examples: https://github.com/motion-canvas/examples/blob/master/examples/deferred-lighting/src/scenes/layers.tsx](https://github.com/motion-canvas/examples/blob/master/examples/deferred-lighting/src/scenes/layers.tsx) | MIT | 설명용 도해 장면의 변화와 순서를 확인했다. |
| [motion-canvas/examples: https://github.com/motion-canvas/examples/blob/master/examples/deferred-lighting/src/scenes/lightComposite.tsx](https://github.com/motion-canvas/examples/blob/master/examples/deferred-lighting/src/scenes/lightComposite.tsx) | MIT | 설명용 도해 장면의 변화와 순서를 확인했다. |
| [shikijs/shiki-magic-move: https://github.com/shikijs/shiki-magic-move/blob/main/README.md](https://github.com/shikijs/shiki-magic-move/blob/main/README.md) | MIT | 동일 토큰의 위치 이동과 나머지 토큰의 등장 및 퇴장을 확인했다. |
| [code-hike/codehike: https://codehike.org/docs/code/token-transitions](https://codehike.org/docs/code/token-transitions) | MIT | 코드 주석 또는 설명 레이아웃의 시각 변화를 확인했다. |
| [code-hike/codehike: https://codehike.org/docs/code/diff](https://codehike.org/docs/code/diff) | MIT | 코드 주석 또는 설명 레이아웃의 시각 변화를 확인했다. |
| [code-hike/codehike: https://codehike.org/docs/code/focus](https://codehike.org/docs/code/focus) | MIT | 코드 주석 또는 설명 레이아웃의 시각 변화를 확인했다. |
| [code-hike/codehike: https://codehike.org/docs/code/mark](https://codehike.org/docs/code/mark) | MIT | 코드 주석 또는 설명 레이아웃의 시각 변화를 확인했다. |
| [code-hike/codehike: https://codehike.org/docs/code/callout](https://codehike.org/docs/code/callout) | MIT | 코드 주석 또는 설명 레이아웃의 시각 변화를 확인했다. |
| [code-hike/codehike: https://codehike.org/docs/code/fold](https://codehike.org/docs/code/fold) | MIT | 코드 주석 또는 설명 레이아웃의 시각 변화를 확인했다. |
| [code-hike/codehike: https://codehike.org/docs/code/transpile](https://codehike.org/docs/code/transpile) | MIT | 코드 주석 또는 설명 레이아웃의 시각 변화를 확인했다. |
| [code-hike/codehike: https://codehike.org/docs/layouts/scrollycoding](https://codehike.org/docs/layouts/scrollycoding) | MIT | 코드 주석 또는 설명 레이아웃의 시각 변화를 확인했다. |
| [code-hike/codehike: https://codehike.org/docs/layouts/spotlight](https://codehike.org/docs/layouts/spotlight) | MIT | 코드 주석 또는 설명 레이아웃의 시각 변화를 확인했다. |
| [code-hike/codehike: https://codehike.org/docs/layouts/slideshow](https://codehike.org/docs/layouts/slideshow) | MIT | 코드 주석 또는 설명 레이아웃의 시각 변화를 확인했다. |
| [rough-stuff/rough: https://github.com/rough-stuff/rough/blob/master/README.md](https://github.com/rough-stuff/rough/blob/master/README.md) | MIT | 손그림 선과 해칭 파라미터를 설명용 모션으로 해석했다. |
| [maxwellito/vivus: https://github.com/maxwellito/vivus/blob/master/readme.md](https://github.com/maxwellito/vivus/blob/master/readme.md) | MIT | 선 드로잉의 delayed, sync, oneByOne 순서를 확인했다. |
| [Screen Studio: https://screen.studio/](https://screen.studio/) | unknown | 자동 확대, 커서 평활화, 정지 커서 숨김, 반복 커서 복귀를 확인했다. 참고만. |
| [Screen Studio: https://screen.studio/guide/cursor](https://screen.studio/guide/cursor) | unknown | 커서 크기, 클릭 효과, 이동 보정의 옵션을 확인했다. 참고만. |
| [Arcade: https://docs.arcade.software/kb/build/interactive-demo/edit/hotspots-callouts-and-spotlights](https://docs.arcade.software/kb/build/interactive-demo/edit/hotspots-callouts-and-spotlights) | unknown | 핫스팟, 콜아웃, 스포트라이트를 화면 시연으로 변환했다. 참고만. |
| [Supademo: https://supademo.com/features/demo-editor](https://supademo.com/features/demo-editor) | unknown | 확대, 팬, 챕터, 주석, 가림의 제품 시연 기능을 확인했다. 참고만. |
| [Supademo: https://docs.supademo.com/customize/hotspot](https://docs.supademo.com/customize/hotspot) | unknown | 핫스팟 스타일 및 안내 말풍선 설정을 확인했다. 참고만. |
| [Kurzgesagt: https://kurzgesagt.org/what-we-do?visit=videos](https://kurzgesagt.org/what-we-do?visit=videos) | unknown | 벡터 비유, 캐릭터, 2D와 3D 결합, 내레이션에 맞춘 타이밍을 확인했다. 참고만. |
| [Vox: https://www.youtube.com/watch?v=kIID5FDi2JQ](https://www.youtube.com/watch?v=kIID5FDi2JQ) | unknown | 지도 투영 설명 영상의 주제와 제작 주체를 확인했다. 프레임 직접 검증은 하지 않았다. 참고만. |
| [Fireship: https://www.youtube.com/watch?v=vKJpN5FAeF4](https://www.youtube.com/watch?v=vKJpN5FAeF4) | unknown | 100 Seconds 코드 설명 영상의 식별 정보를 확인했다. 컷 관례는 조사자 해석이다. 참고만. |
| [TED-Ed: https://ed.ted.com/lessons/animation-basics-the-art-of-timing-and-spacing-ted-ed](https://ed.ted.com/lessons/animation-basics-the-art-of-timing-and-spacing-ted-ed) | unknown | 제작 과정과 시각적 설명 주제를 확인했다. 참고만. |
| [TED-Ed: https://ed.ted.com/lessons/making-a-ted-ed-lesson-bringing-a-pop-up-book-to-life](https://ed.ted.com/lessons/making-a-ted-ed-lesson-bringing-a-pop-up-book-to-life) | unknown | 제작 과정과 시각적 설명 주제를 확인했다. 참고만. |
| [TED-Ed: https://ed.ted.com/lessons/making-a-ted-ed-lesson-visualizing-complex-ideas](https://ed.ted.com/lessons/making-a-ted-ed-lesson-visualizing-complex-ideas) | unknown | 제작 과정과 시각적 설명 주제를 확인했다. 참고만. |
| [TED-Ed: https://ed.ted.com/lessons/making-a-ted-ed-lesson-animating-zombies-with-puppets](https://ed.ted.com/lessons/making-a-ted-ed-lesson-animating-zombies-with-puppets) | unknown | 제작 과정과 시각적 설명 주제를 확인했다. 참고만. |
| [Apple: https://www.apple.com/apple-events/](https://www.apple.com/apple-events/) | unknown | 제품 발표 영상의 공식 진입점을 확인했다. 리빌 세부 기법은 관례 해석이다. 참고만. |
| [Richard E. Mayer / Wiley: https://onlinelibrary.wiley.com/doi/10.1111/jcal.12197](https://onlinelibrary.wiley.com/doi/10.1111/jcal.12197) | unknown | 신호, 분할, 근접성, 사전 학습 등 원리를 모션 적용으로 해석했다. 참고만. |
| [Cambridge University Press: https://www.cambridge.org/core/books/abs/cambridge-handbook-of-multimedia-learning/principles-for-managing-essential-processing-in-multimedia-learning-segmenting-pretraining-and-modality-principles/DD24C2F48B9B1277CE59F78276110258](https://www.cambridge.org/core/books/abs/cambridge-handbook-of-multimedia-learning/principles-for-managing-essential-processing-in-multimedia-learning-segmenting-pretraining-and-modality-principles/DD24C2F48B9B1277CE59F78276110258) | unknown | 분할, 사전 학습, 양식 원리의 정의를 확인했다. 참고만. |
| [Cambridge University Press: https://www.cambridge.org/highereducation/books/multimedia-learning/FB7E79A165D24D47CEACEB4D2C426ECD/signaling-principle/9E37E775874EC1D93763620B8A296DD4](https://www.cambridge.org/highereducation/books/multimedia-learning/FB7E79A165D24D47CEACEB4D2C426ECD/signaling-principle/9E37E775874EC1D93763620B8A296DD4) | unknown | 신호 주기 원리의 출판사 공식 장을 확인했다. 참고만. |
| [TED-Ed: https://blog.ed.ted.com/2016/09/07/how-to-create-stop-motion-animation-at-home/](https://blog.ed.ted.com/2016/09/07/how-to-create-stop-motion-animation-at-home/) | unknown | 가정에서 만드는 스톱모션 교육 자료를 확인했다. 참고만. |
| [ManimCommunity/manim: https://docs.manim.community/en/stable/reference/manim.utils.rate_functions.html](https://docs.manim.community/en/stable/reference/manim.utils.rate_functions.html) | MIT | linear, smooth, there_and_back 등 진행률 함수를 확인했다. |
| [motion-canvas/motion-canvas: https://motioncanvas.io/docs/flow/](https://motioncanvas.io/docs/flow/) | MIT | 동시 실행, 순차 실행, 시간차 실행과 지연 구성을 확인했다. |
| [motion-canvas/motion-canvas: https://motioncanvas.io/docs/signals/](https://motioncanvas.io/docs/signals/) | MIT | 하나의 신호에 종속된 속성 갱신을 확인했다. |
| [3b1b/videos: https://github.com/3b1b/videos/blob/master/custom/characters/pi_creature.py](https://github.com/3b1b/videos/blob/master/custom/characters/pi_creature.py) | CC-BY-NC-SA-4.0 | 캐릭터 시선과 표정 메서드를 확인했다. 원본 도형은 참고만 한다. |
| [ManimCommunity/manim: https://docs.manim.community/en/stable/reference.html](https://docs.manim.community/en/stable/reference.html) | MIT | 전체 애니메이션 모듈 색인과 stable 문서 버전을 확인했다. |
| [ManimCommunity/manim: https://docs.manim.community/en/stable/reference_index/animations.html](https://docs.manim.community/en/stable/reference_index/animations.html) | MIT | 모듈 분류를 확인했다. |
| [code-hike/codehike: https://codehike.org/docs](https://codehike.org/docs) | MIT | 문서 색인과 레이아웃 목록을 확인했다. |
| [rough-stuff/rough: https://github.com/rough-stuff/rough/wiki](https://github.com/rough-stuff/rough/wiki) | MIT | roughness, bowing, 해칭과 시드 옵션을 확인했다. |
| [TED-Ed: https://ed.ted.com/lessons/making-a-ted-ed-lesson-animation](https://ed.ted.com/lessons/making-a-ted-ed-lesson-animation) | unknown | 제작 과정 소개를 확인했다. 참고만. |
| [TED-Ed: https://blog.ed.ted.com/2014/06/17/ted-ed-animator-hosts-online-animation-workshop-for-ted-ed-clubs/](https://blog.ed.ted.com/2014/06/17/ted-ed-animator-hosts-online-animation-workshop-for-ted-ed-clubs/) | unknown | 애니메이션 교육 워크숍의 공식 출처를 확인했다. 참고만. |
| [Vox: https://www.vox.com/videos](https://www.vox.com/videos) | unknown | 제작 주체의 공식 영상 목록을 확인했다. 참고만. |
| [Fireship: https://fireship.dev/](https://fireship.dev/) | unknown | 기존 주소의 현재 리다이렉트와 공식 채널 링크를 확인했다. 참고만. |
| [Fireship: https://www.100seconds.dev/](https://www.100seconds.dev/) | unknown | 100 Seconds 시리즈 주제 목록의 공식 진입점을 확인했다. 참고만. |
| [Apple: https://www.apple.com/iphone-17-pro/](https://www.apple.com/iphone-17-pro/) | unknown | 현재 iPhone 목록으로 리다이렉트되어 옛 제품별 연출은 검증하지 못했다. 참고만. |
| [shikijs/shiki-magic-move: https://shiki-magic-move.netlify.app/](https://shiki-magic-move.netlify.app/) | MIT | 데모 주소는 열렸으나 정적 텍스트가 없어 README를 근거로 사용했다. |
| [3b1b/videos: _2019/diffyq/fourier_montage_scenes.py](https://github.com/3b1b/videos/blob/master/_2019/diffyq/fourier_montage_scenes.py) | CC-BY-NC-SA-4.0 | 푸리에 장면 명칭과 도해 구성을 훑었다. 중복 아이디어는 푸리에 및 고조파 행으로 합쳤다. 참고만. |
| [3b1b/videos: _2019/diffyq/part4/fourier_series_scenes.py](https://github.com/3b1b/videos/blob/master/_2019/diffyq/part4/fourier_series_scenes.py) | CC-BY-NC-SA-4.0 | 푸리에 장면 명칭과 도해 구성을 훑었다. 중복 아이디어는 푸리에 및 고조파 행으로 합쳤다. 참고만. |
| [3b1b/videos: _2019/diffyq/part4/long_fourier_scenes.py](https://github.com/3b1b/videos/blob/master/_2019/diffyq/part4/long_fourier_scenes.py) | CC-BY-NC-SA-4.0 | 푸리에 장면 명칭과 도해 구성을 훑었다. 중복 아이디어는 푸리에 및 고조파 행으로 합쳤다. 참고만. |
| [motion-canvas/examples: examples/anniversary/src/scenes/intro.tsx](https://github.com/motion-canvas/examples/blob/master/examples/anniversary/src/scenes/intro.tsx) | MIT | 장면과 노드의 역할을 훑었다. 독립 효과보다 시연 구성 보조이므로 별도 행을 만들지 않았다. |
| [motion-canvas/examples: examples/anniversary/src/scenes/thumbnail.tsx](https://github.com/motion-canvas/examples/blob/master/examples/anniversary/src/scenes/thumbnail.tsx) | MIT | 장면과 노드의 역할을 훑었다. 독립 효과보다 시연 구성 보조이므로 별도 행을 만들지 않았다. |
| [motion-canvas/examples: examples/asset-code/src/nodes/Mouse.tsx](https://github.com/motion-canvas/examples/blob/master/examples/asset-code/src/nodes/Mouse.tsx) | MIT | 장면과 노드의 역할을 훑었다. 독립 효과보다 시연 구성 보조이므로 별도 행을 만들지 않았다. |
| [motion-canvas/examples: examples/asset-code/src/nodes/Page.tsx](https://github.com/motion-canvas/examples/blob/master/examples/asset-code/src/nodes/Page.tsx) | MIT | 장면과 노드의 역할을 훑었다. 독립 효과보다 시연 구성 보조이므로 별도 행을 만들지 않았다. |
| [motion-canvas/examples: examples/asset-code/src/nodes/Paper.tsx](https://github.com/motion-canvas/examples/blob/master/examples/asset-code/src/nodes/Paper.tsx) | MIT | 장면과 노드의 역할을 훑었다. 독립 효과보다 시연 구성 보조이므로 별도 행을 만들지 않았다. |

## Manim Community 클래스 전수 대조

| 모듈 | 클래스 | 원장 대응 또는 제외 이유 |
|---|---|---|
| manim/animation/animation.py | Animation | 기본 추상 실행 클래스다. 독립 시각 현상이 없어 제외했다. |
| manim/animation/animation.py | Wait | R7-052 |
| manim/animation/animation.py | Add | R7-051 |
| manim/animation/changing.py | AnimatedBoundary | R7-021 |
| manim/animation/changing.py | TracedPath | R7-022 |
| manim/animation/composition.py | AnimationGroup | R7-048 |
| manim/animation/composition.py | Succession | R7-047 |
| manim/animation/composition.py | LaggedStart | R7-046 |
| manim/animation/composition.py | LaggedStartMap | R7-046 |
| manim/animation/creation.py | ShowPartial | R7-001의 부분 패스 공개 공통 기반이다. |
| manim/animation/creation.py | Create | R7-001 |
| manim/animation/creation.py | Uncreate | R7-001 |
| manim/animation/creation.py | DrawBorderThenFill | R7-002 |
| manim/animation/creation.py | Write | R7-003 |
| manim/animation/creation.py | Unwrite | R7-003 |
| manim/animation/creation.py | SpiralIn | R7-008 |
| manim/animation/creation.py | ShowIncreasingSubsets | R7-006 |
| manim/animation/creation.py | AddTextLetterByLetter | R7-004 |
| manim/animation/creation.py | RemoveTextLetterByLetter | R7-004 |
| manim/animation/creation.py | ShowSubmobjectsOneByOne | R7-007 |
| manim/animation/creation.py | AddTextWordByWord | R7-005 |
| manim/animation/creation.py | TypeWithCursor | R7-004 |
| manim/animation/creation.py | UntypeWithCursor | R7-004 |
| manim/animation/fading.py | _Fade | R7-009의 내부 기반이다. |
| manim/animation/fading.py | FadeIn | R7-009 |
| manim/animation/fading.py | FadeOut | R7-009 |
| manim/animation/growing.py | GrowFromPoint | R7-010 |
| manim/animation/growing.py | GrowFromCenter | R7-010 |
| manim/animation/growing.py | GrowFromEdge | R7-010 |
| manim/animation/growing.py | GrowArrow | R7-011 |
| manim/animation/growing.py | SpinInFromNothing | R7-012 |
| manim/animation/indication.py | FocusOn | R7-013 |
| manim/animation/indication.py | Indicate | R7-014 |
| manim/animation/indication.py | Flash | R7-015 |
| manim/animation/indication.py | ShowPassingFlash | R7-016 |
| manim/animation/indication.py | ShowPassingFlashWithThinningStrokeWidth | R7-016 |
| manim/animation/indication.py | ApplyWave | R7-017 |
| manim/animation/indication.py | Wiggle | R7-018 |
| manim/animation/indication.py | Circumscribe | R7-019 |
| manim/animation/indication.py | Blink | R7-020 |
| manim/animation/movement.py | Homotopy | R7-023 |
| manim/animation/movement.py | SmoothedVectorizedHomotopy | R7-023 |
| manim/animation/movement.py | ComplexHomotopy | R7-024 |
| manim/animation/movement.py | PhaseFlow | R7-025 |
| manim/animation/movement.py | MoveAlongPath | R7-026 |
| manim/animation/numbers.py | ChangingDecimal | R7-027 |
| manim/animation/numbers.py | ChangeDecimalToValue | R7-027 |
| manim/animation/rotation.py | Rotating | R7-028 |
| manim/animation/rotation.py | Rotate | R7-028 |
| manim/animation/specialized.py | Broadcast | R7-029 |
| manim/animation/speedmodifier.py | ChangeSpeed | R7-030 |
| manim/animation/transform.py | Transform | R7-031 |
| manim/animation/transform.py | ReplacementTransform | R7-031 |
| manim/animation/transform.py | TransformFromCopy | R7-032 |
| manim/animation/transform.py | ClockwiseTransform | R7-033 |
| manim/animation/transform.py | CounterclockwiseTransform | R7-033 |
| manim/animation/transform.py | MoveToTarget | R7-034 |
| manim/animation/transform.py | _MethodAnimation | R7-034 |
| manim/animation/transform.py | ApplyMethod | R7-034 |
| manim/animation/transform.py | ApplyPointwiseFunction | R7-035 |
| manim/animation/transform.py | ApplyPointwiseFunctionToCenter | R7-036 |
| manim/animation/transform.py | FadeToColor | R7-037 |
| manim/animation/transform.py | ScaleInPlace | R7-038 |
| manim/animation/transform.py | ShrinkToCenter | R7-010 |
| manim/animation/transform.py | Restore | R7-039 |
| manim/animation/transform.py | ApplyFunction | R7-034 |
| manim/animation/transform.py | ApplyMatrix | R7-040 |
| manim/animation/transform.py | ApplyComplexFunction | R7-024 |
| manim/animation/transform.py | CyclicReplace | R7-041 |
| manim/animation/transform.py | Swap | R7-041 |
| manim/animation/transform.py | TransformAnimations | R7-042 |
| manim/animation/transform.py | FadeTransform | R7-043 |
| manim/animation/transform.py | FadeTransformPieces | R7-043 |
| manim/animation/transform_matching_parts.py | TransformMatchingAbstractBase | 매칭 구현의 추상 기반이다. 동일 모양 조각 재배치와 동일 기호 수식 변환으로 수집했다. |
| manim/animation/transform_matching_parts.py | TransformMatchingShapes | R7-044 |
| manim/animation/transform_matching_parts.py | TransformMatchingTex | R7-045 |
| manim/animation/updaters/update.py | UpdateFromFunc | R7-049 |
| manim/animation/updaters/update.py | UpdateFromAlphaFunc | R7-049 |
| manim/animation/updaters/update.py | MaintainPositionRelativeTo | R7-050 |

총 79개 클래스 선언을 대조했다. 추상 클래스 및 내부 기반도 누락 여부를 확인했다. 같은 시각 효과를 가진 API는 기존 행의 aka, variants, notes에 합쳤다. AddTextWordByWord의 main 문서 문자열은 currently broken으로 명시되어 있어 작동 보장 없이 아이디어만 기록했다.

## ManimGL 추가 이름 대조

| 클래스 또는 묶음 | 원장 대응 |
|---|---|
| Fade | R7-009 |
| FadeInFromPoint | R7-009 |
| FadeOutToPoint | R7-009 |
| VFadeIn | R7-009 |
| VFadeOut | R7-009 |
| VFadeInThenOut | R7-009 |
| ShowCreation | R7-001 |
| CircleIndicate | R7-019 |
| VShowPassingFlash | R7-016 |
| FlashAround | R7-016 |
| FlashUnder | R7-128 |
| ShowCreationThenDestruction | R7-001 |
| ShowCreationThenFadeOut | R7-001 |
| AnimationOnSurroundingRectangle | R7-019 |
| ShowPassingFlashAround | R7-016 |
| ShowCreationThenDestructionAround | R7-019 |
| ShowCreationThenFadeAround | R7-019 |
| WiggleOutThenIn | R7-018 |
| TurnInsideOut | R7-126 |
| FlashyFadeIn | R7-127 |
| TransformMatchingParts | R7-044 |
| TransformMatchingStrings | R7-045 |

## 못 연 곳과 제한

| URL | 결과 및 대체 근거 |
|---|---|
| [https://codehike.org/docs/code/animations](https://codehike.org/docs/code/animations) | 웹 도구 접근 실패다. 실제 문서 색인에서 code/token-transitions를 찾아 대체했다. |
| [https://raw.githubusercontent.com/code-hike/codehike/next/README.md](https://raw.githubusercontent.com/code-hike/codehike/next/README.md) | 404다. 소문자 readme.md로 대체하여 열었다. |
| [https://fireship.io/lessons/javascript-closures/](https://fireship.io/lessons/javascript-closures/) | 웹 도구 접근 실패다. 공식 채널 영상 식별 정보를 사용했다. |
| [https://fireship.io/lessons/javascript-closures-pro-tips/](https://fireship.io/lessons/javascript-closures-pro-tips/) | 웹 도구 접근 실패다. 원래 사이트는 fireship.dev로 이동한 것을 확인했다. |
| [https://www.vox.com/2016/12/2/13817758/map-projection-mercator-globe](https://www.vox.com/2016/12/2/13817758/map-projection-mercator-globe) | 웹 도구 접근 실패다. 공식 채널의 Why all world maps are wrong 영상 주소를 대체 출처로 기록했다. |
| [https://www.vox.com/2016/12/2/13817712/map-projection-mercator-globe](https://www.vox.com/2016/12/2/13817712/map-projection-mercator-globe) | 후보 주소 접근 실패다. 해당 주소에서 얻은 내용은 없다. |
| [https://screen.studio/guide/zoom](https://screen.studio/guide/zoom) | 웹 도구 접근 실패다. 홈페이지의 자동 및 수동 확대 설명으로 대체했다. |
| [https://shiki-magic-move.netlify.app/](https://shiki-magic-move.netlify.app/) | 접속했지만 웹 도구가 추출한 텍스트는 0줄이다. 시각 프레임을 검증하지 않고 README와 Code Hike 토큰 전환 문서를 사용했다. |
| [https://www.apple.com/iphone-17-pro/](https://www.apple.com/iphone-17-pro/) | 현재 일반 iPhone 페이지로 리다이렉트된다. 옛 제품 페이지의 모션을 검증하지 않았다. |
| [https://www.cambridge.org/highereducation/books/multimedia-learning/FB7E79A165D24D47CEACEB4D2C426ECD/signaling-principle/9E37E775874EC1D93763620B8A296DD4](https://www.cambridge.org/highereducation/books/multimedia-learning/FB7E79A165D24D47CEACEB4D2C426ECD/signaling-principle/9E37E775874EC1D93763620B8A296DD4) | 소개는 열리지만 전문은 로그인 또는 구매 접근이다. 공개된 정의와 Mayer 논문 소개를 사용했다. |

Vox, Fireship, Apple의 개별 영상 프레임은 직접 검증하지 않았다. 이들 연출 행은 제작 방향 및 알려진 형식을 바탕으로 한 기법 해석임을 notes에 명시했다. Kurzgesagt와 TED-Ed도 제작 과정의 공식 설명과 공개 교육 자료를 중심으로 조사했다.

## 검증

JSONL 129줄의 필수 키, 연속 ID, family 및 runtime 허용값, 핵심 slug 허용값, 출처 URL, 라이선스와 참고만 표시, 줄표 사용 여부, 프롬프트 존재를 검증했다. 구현이나 외부 코드 재사용은 수행하지 않았다.
