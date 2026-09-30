# R9 키네틱 타이포와 텍스트 효과 출처

조사일 2026-09-30. 앞선 R9 수집본을 우선 재사용하고 부족한 README와 효과 원문만 curl로 보충했다. 기법 원장은 95줄이다. 코드는 원장에 복사하지 않았다.

## 수집 범위와 판독 기준

- animate-text의 24개 specs를 모두 읽고 같은 현상을 14개 기법으로 병합했다. 원장 params에 모든 스펙의 target, enter, exit, swap, build 원문 수치를 보존했다. 공개 타일의 visible_ids는 20개지만 스펙 파일은 24개다.
- Codrops는 수집본에 있던 레포와 튜토리얼 연결을 검토하고 GitHub README, 실제 효과 JS, CSS, SVG 필터를 보충했다. 검색, 사이트맵, RSS, WordPress API가 막혀 Codrops 사이트 전체 텍스트 튜토리얼의 완전한 목록 검증은 못 했다. 아래 성공한 자료 범위에서 기법을 수집했다.
- Splitting은 README, 공식 홈과 가이드를 확인했다. CodePen 컬렉션은 403으로 열리지 않았다. 분할 단위와 인덱스 변수의 근거로 사용하고 물결, 시차 등 개별 효과 근거는 함께 제시한 Codrops와 textillate 자료로 보완했다.
- 수치의 원문 기본값과 권장 시작값을 구분했다. 스크롤과 hover는 고정된 영상 시간표로 치환할 수 있는 현상만 포함했다.
- unknown은 LICENSE 파일을 확인하지 못한 경우다. README의 MIT 문구만으로 MIT라고 확정하지 않았다. unknown, GPL, 커스텀 제한 라이선스는 원장 notes에 참고만을 표시했다.
- 영화 타이틀 자료는 관례의 시각적 참고다. 영화 글꼴이나 이미지의 사용 권리를 뜻하지 않는다. 가변 폰트의 축은 실제 폰트 범위에 맞추며 폰트 파일 라이선스는 각 소프트웨어 레포 라이선스와 별개다.

## 훑은 레포

- https://github.com/Aqro/Physics-menu-threejs-cannonjs | 라이선스 unknown | LICENSE 원문 미확인 | 물리 글자 낙하 | 추가 판독 1개 파일.
- https://github.com/ValentinDBS/codrops-tutorial-text-animation | 라이선스 MIT | LICENSE 원문 LICENSE; https://github.com/ValentinDBS/codrops-tutorial-text-animation/blob/main/LICENSE | 두 열 반대 방향 텍스트 물결 | 추가 판독 1개 파일.
- https://github.com/WallabyMonochrome/WebGPU-clair-obscur-gommage-codrops | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/WallabyMonochrome/WebGPU-clair-obscur-gommage-codrops/master/LICENSE | 텍스트 입자 소멸 | 추가 판독 1개 파일.
- https://github.com/akella/twistedText | 라이선스 unknown | LICENSE 원문 미확인 | 뒤틀린 텍스트 리본 | 추가 판독 1개 파일.
- https://github.com/amazingcreationsltd/variable-font-animator | 라이선스 unknown | LICENSE 원문 미확인 | 가변 폰트 굵기 물결 | 추가 판독 1개 파일.
- https://github.com/animate-css/animate.css | 라이선스 Hippocratic-2.1 | LICENSE 원문 LICENSE | 스프링 텍스트 팝, 글자 회전과 굴림, 텍스트 경첩 낙하, 텍스트 진자 흔들림, 텍스트 탄성 비틀림, 텍스트 속도 기울임 등장 | 추가 판독 3개 파일.
- https://github.com/armdz/tsl_elastic_vertex_destruction | 라이선스 unknown | LICENSE 원문 미확인 | 텍스트 정점 폭발 | 추가 판독 1개 파일.
- https://github.com/bradley/Blotter | 라이선스 MIT | LICENSE 원문 license.txt | 텍스트 액체 왜곡, 텍스트 국소 물결 왜곡, 텍스트 RGB 채널 분리, 텍스트 줄무늬 슬라이딩 왜곡, 텍스트 날벌레 입자 질감 | 추가 판독 3개 파일.
- https://github.com/camwiegert/baffle | 라이선스 MIT | LICENSE 원문 LICENSE | 텍스트 스크램블 해독
- https://github.com/codrops/AnimateSVGTextPath | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/codrops/AnimateSVGTextPath/master/LICENSE | 경로 위 텍스트 이동, 텍스트 경로 형태 변형, SVG 난류 텍스트 휨 | 추가 판독 2개 파일.
- https://github.com/codrops/AnimatedLetters | 라이선스 unknown | LICENSE 원문 미확인 | SVG 획 텍스트 그리기, 장식 조각 글자 조립 | 추가 판독 1개 파일.
- https://github.com/codrops/CSSMarqueeMenu | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/codrops/CSSMarqueeMenu/master/LICENSE | 텍스트 마키 컨베이어 | 추가 판독 1개 파일.
- https://github.com/codrops/CircularTextEffect | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/codrops/CircularTextEffect/master/LICENSE | 원형 텍스트 회전, 텍스트 경로 형태 변형 | 추가 판독 7개 파일.
- https://github.com/codrops/DecorativeLetterAnimations | 라이선스 unknown | LICENSE 원문 미확인 | 장식 조각 글자 조립 | 추가 판독 2개 파일.
- https://github.com/codrops/FancyLetterAnimation | 라이선스 unknown | LICENSE 원문 미확인 | 윤곽 텍스트 채우기, 장식 조각 글자 조립 | 추가 판독 2개 파일.
- https://github.com/codrops/GooeyTextHoverEffect | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/codrops/GooeyTextHoverEffect/master/LICENSE | 텍스트 끈적한 결합 | 추가 판독 1개 파일.
- https://github.com/codrops/ImageExpansionTypography | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/codrops/ImageExpansionTypography/master/LICENSE | 문장 속 이미지 확장 | 추가 판독 2개 파일.
- https://github.com/codrops/KineticTypePageTransition | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/codrops/KineticTypePageTransition/master/LICENSE | 키네틱 타이포 커튼 전환 | 추가 판독 3개 파일.
- https://github.com/codrops/LetterAnimations | 라이선스 unknown | LICENSE 원문 미확인 | 수집본의 후보 주소를 확인했으나 README가 404여서 기법 근거에서 제외했다.
- https://github.com/codrops/LetterEffects | 라이선스 unknown | LICENSE 원문 미확인 | 글자 회전과 굴림, 글자 뒤집기 등장, 텍스트 눌림과 늘어남, 텍스트 밑줄 그리기 | 추가 판독 2개 파일.
- https://github.com/codrops/LetterInteractions | 라이선스 unknown | LICENSE 원문 미확인 | 텍스트 진자 흔들림, 텍스트 기준선 물결 | 추가 판독 2개 파일.
- https://github.com/codrops/LetterShuffleMenu | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/codrops/LetterShuffleMenu/master/LICENSE | 글자 재배치 조립 | 추가 판독 1개 파일.
- https://github.com/codrops/LettersAnimationLayout | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/codrops/LettersAnimationLayout/master/LICENSE | 글자 재배치 조립 | 추가 판독 1개 파일.
- https://github.com/codrops/LineTextHoverAnimations | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/codrops/LineTextHoverAnimations/master/LICENSE | 텍스트 스크램블 해독 | 추가 판독 1개 파일.
- https://github.com/codrops/OnScrollLetterAnimations | 라이선스 MIT | LICENSE 원문 LICENSE; https://github.com/codrops/OnScrollLetterAnimations/blob/main/LICENSE | 텍스트 눌림과 늘어남, 텍스트 자간 확장 | 추가 판독 6개 파일.
- https://github.com/codrops/OnScrollSVGFilterText | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/codrops/OnScrollSVGFilterText/master/LICENSE | SVG 난류 텍스트 휨 | 추가 판독 2개 파일.
- https://github.com/codrops/OnScrollTextHighlight | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/codrops/OnScrollTextHighlight/master/LICENSE | 읽기 진행 텍스트 강조, 마커 텍스트 배경 훑기 | 추가 판독 2개 파일.
- https://github.com/codrops/OnScrollTypographyAnimations | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/codrops/OnScrollTypographyAnimations/master/LICENSE | 글자 순차 슬라이드, 공간 순서 텍스트 시차, 글자 깜박임 등장, 글자 뒤집기 등장, 텍스트 눌림과 늘어남, 흩어진 글자 모으기, 읽기 진행 텍스트 강조 | 추가 판독 3개 파일.
- https://github.com/codrops/OpeningType | 라이선스 unknown | LICENSE 원문 미확인 | 수집본의 후보 주소를 확인했으나 README가 404여서 기법 근거에서 제외했다.
- https://github.com/codrops/RepetitiveTypography | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/codrops/RepetitiveTypography/master/LICENSE | 반복 텍스트 벽 생성 | 추가 판독 2개 파일.
- https://github.com/codrops/ScrollBlurTypography | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/codrops/ScrollBlurTypography/master/LICENSE | 텍스트 초점 해소 | 추가 판독 2개 파일.
- https://github.com/codrops/ScrollTextMotion | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/codrops/ScrollTextMotion/master/LICENSE | 수집본 검토. 별도 기법을 추가할 만한 확인된 현상이 없거나 다른 출처에 병합했다. | 추가 판독 2개 파일.
- https://github.com/codrops/SlicedTextEffect | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/codrops/SlicedTextEffect/master/LICENSE | 유리 조각 텍스트 어긋남 | 추가 판독 2개 파일.
- https://github.com/codrops/StaggeredTextReveal | 라이선스 unknown | LICENSE 원문 미확인 | 수집본의 후보 주소를 확인했으나 README가 404여서 기법 근거에서 제외했다.
- https://github.com/codrops/TextBlockTransitions | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/codrops/TextBlockTransitions/master/LICENSE | 단어 순차 페이드, 클립 줄 드러내기, 텍스트 묶음 슬라이드, 글자 깜박임 등장, 글자 뒤집기 등장, 텍스트 눌림과 늘어남, 흩어진 글자 모으기, 헤드라인 슬롯 티커, 텍스트 반쪽 분리 | 추가 판독 13개 파일.
- https://github.com/codrops/TextClipScroll | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/codrops/TextClipScroll/master/LICENSE | 텍스트 내부 이미지 이동, 텍스트 구멍 장면 드러내기 | 추가 판독 2개 파일.
- https://github.com/codrops/TextDistortionEffects | 라이선스 unknown | LICENSE 원문 미확인 | 텍스트 액체 왜곡, 텍스트 국소 물결 왜곡, 텍스트 RGB 채널 분리 | 추가 판독 2개 파일.
- https://github.com/codrops/TextOpeningSequence | 라이선스 unknown | LICENSE 원문 미확인 | 수집본의 후보 주소를 확인했으나 README가 404여서 기법 근거에서 제외했다.
- https://github.com/codrops/TextRepetitionEffect | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/codrops/TextRepetitionEffect/master/LICENSE | 반복 텍스트 조각 펼침 | 추가 판독 11개 파일.
- https://github.com/codrops/TextStylesHoverEffects | 라이선스 unknown | LICENSE 원문 미확인 | 텍스트 내부 이미지 이동, 텍스트 구멍 장면 드러내기, 텍스트 반쪽 분리, 텍스트 색 와이프 교체 | 추가 판독 4개 파일.
- https://github.com/codrops/TextTrailEffect | 라이선스 unknown | LICENSE 원문 미확인 | 텍스트 복제 잔상 | 추가 판독 1개 파일.
- https://github.com/codrops/TypeShuffleAnimation | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/codrops/TypeShuffleAnimation/master/LICENSE | 텍스트 스크램블 해독 | 추가 판독 2개 파일.
- https://github.com/davatron5000/Lettering.js | 라이선스 unknown | LICENSE 원문 미확인 | 글자, 단어, 줄 분할 의존성이다. 라이브러리 자체를 별도 모션 기법으로 세지 않았다.
- https://github.com/davidfaure/3d-text-animation-codrops | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/davidfaure/3d-text-animation-codrops/master/LICENSE | 텍스트 레이어 깊이 쌓기, 원통 텍스트 회전, 이중 링 텍스트 반대 회전 | 추가 판독 1개 파일.
- https://github.com/davidfaure/3d-text-circle-animation-codrops | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/davidfaure/3d-text-circle-animation-codrops/master/LICENSE | 이중 링 텍스트 반대 회전 | 추가 판독 1개 파일.
- https://github.com/dcmcand/dynamic-typography-videos | 라이선스 Apache-2.0 | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/dcmcand/dynamic-typography-videos/master/LICENSE | 박자 텍스트 펄스, 공간 키네틱 문장 구성, 카라오케 연속 색 채움, 카라오케 활성 단어 이동, 두 줄 대사 자막 교체, 가사 줄 상승과 초점, 가사 빛 강조, 숫자 카운트다운 박자 | 추가 판독 1개 파일.
- https://github.com/ehaakana/codrops-text-demo | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/ehaakana/codrops-text-demo/master/LICENSE | 3D 돌출 텍스트 회전 | 추가 판독 1개 파일.
- https://github.com/gnikoloff/text-trail-effect | 라이선스 MIT | LICENSE 원문 LICENSE; https://github.com/gnikoloff/text-trail-effect/blob/master/LICENSE | 프레임버퍼 텍스트 피드백 | 추가 판독 1개 파일.
- https://github.com/jschr/textillate | 라이선스 MIT | LICENSE 원문 LICENSE | 글자 순차 슬라이드, 단어 순차 페이드, 텍스트 스케일 페이드, 스프링 텍스트 팝, 공간 순서 텍스트 시차, 글자 회전과 굴림, 텍스트 경첩 낙하, 텍스트 진자 흔들림, 헤드라인 슬롯 티커, 하단 화자 자막 등장, 인용 카드 편집 등장
- https://github.com/marioecg/codrops-kinetic-typo | 라이선스 MIT | LICENSE 원문 LICENSE; https://github.com/marioecg/codrops-kinetic-typo/blob/master/LICENSE | 뒤틀린 텍스트 리본, 메시 표면 텍스트 흐름 | 추가 판독 1개 파일.
- https://github.com/mattboldt/typed.js | 라이선스 GPL-3.0-or-later | LICENSE 원문 LICENSE.txt | 타자기 드러내기, 사람 같은 입력과 지우기
- https://github.com/maxwellito/vivus | 라이선스 MIT | LICENSE 원문 LICENSE | SVG 획 텍스트 그리기, 윤곽 텍스트 채우기
- https://github.com/motion-canvas/motion-canvas | 라이선스 MIT | LICENSE 원문 LICENSE | 스프링 텍스트 팝, 타자기 드러내기, 박자 텍스트 펄스, 공간 키네틱 문장 구성, 하단 화자 자막 등장, 인용 카드 편집 등장, 엔딩 크레디트 롤, 대형 숫자 카운트업, 숫자 카운트다운 박자, 자리별 수치 전환, 코드 토큰 교체와 재배치, 코드 범위 초점 이동 | 추가 판독 2개 파일.
- https://github.com/pixel-point/animate-text | 라이선스 unknown | LICENSE 원문 미확인 | 글자 순차 슬라이드, 텍스트 초점 해소, 단어 순차 페이드, 텍스트 스케일 페이드, 스프링 텍스트 팝, 클립 줄 드러내기, 텍스트 묶음 슬라이드, 공유 축 텍스트 교체, 단어 깊이 이동, 중앙 문장 밀어 쌓기, 텍스트 광택 훑기, 텍스트 페이드 스루, 공간 순서 텍스트 시차, 타자기 드러내기
- https://github.com/pqina/flip | 라이선스 MIT | LICENSE 원문 LICENSE | 대형 숫자 카운트업, 주행거리계 자리별 숫자 롤, 분할 플랩 숫자 뒤집기, 숫자 카운트다운 박자, 자리별 수치 전환
- https://github.com/rayanfer32/remotion-lyrics | 라이선스 unknown | LICENSE 원문 미확인 | 카라오케 연속 색 채움, 카라오케 활성 단어 이동, 가사 줄 상승과 초점 | 추가 판독 1개 파일.
- https://github.com/remotion-dev/remotion | 라이선스 Remotion License (custom) | LICENSE 원문 LICENSE.md | 카라오케 활성 단어 이동, 단어 팝 자막, 한 단어 자막 교체, 자막 페이지 누적, 두 줄 대사 자막 교체
- https://github.com/romanjeanelie/bulge-text-effect-codrops | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/romanjeanelie/bulge-text-effect-codrops/master/LICENSE | 3D 텍스트 부풀림 | 추가 판독 1개 파일.
- https://github.com/shshaw/Splitting | 라이선스 MIT | LICENSE 원문 LICENSE.md | 글자 순차 슬라이드, 공간 순서 텍스트 시차, 텍스트 기준선 물결
- https://github.com/uuuulala/WebGL-typing-tutorial | 라이선스 MIT | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/uuuulala/WebGL-typing-tutorial/master/LICENSE | 타자기 드러내기, 3D 돌출 텍스트 회전, 텍스트 레이어 깊이 쌓기 | 추가 판독 1개 파일.
- https://github.com/yanone/fontanimation | 라이선스 Apache-2.0 | LICENSE 원문 LICENSE; https://raw.githubusercontent.com/yanone/fontanimation/master/LICENSE | 가변 폰트 굵기 물결, 가변 폰트 폭 호흡, 가변 폰트 기울기 변화, 가변 폰트 사용자 축 변형 | 추가 판독 1개 파일.

## 사이트와 문서

- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-variation-settings | 라이선스 unknown | 가변 폰트 굵기 물결, 가변 폰트 폭 호흡, 가변 폰트 기울기 변화, 가변 폰트 사용자 축 변형
- https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/textPath | 라이선스 unknown | 경로 위 텍스트 이동, 원형 텍스트 회전
- https://www.remotion.dev/docs/captions/create-tiktok-style-captions | 라이선스 Remotion License (custom) | 카라오케 활성 단어 이동, 단어 팝 자막, 한 단어 자막 교체, 자막 페이지 누적
- https://www.remotion.dev/templates/tiktok | 라이선스 Remotion License (custom) | 단어 팝 자막, 한 단어 자막 교체, 자막 페이지 누적
- https://motioncanvas.io/docs/code | 라이선스 MIT | 코드 토큰 교체와 재배치, 코드 범위 초점 이동
- https://www.artofthetitle.com/title/se7en/ | 라이선스 unknown | 거친 영화 크레디트 떨림, 크레디트 카드 컷 리듬
- https://www.artofthetitle.com/title/catch-me-if-you-can/ | 라이선스 unknown | 텍스트 자간 확장, 장면에 통합된 타이틀, 엔딩 크레디트 롤, 크레디트 카드 컷 리듬
- https://splitting.js.org/ | 라이선스 MIT는 shshaw/Splitting LICENSE.md로 확인 | 공식 홈, 분할 방법과 데모 컬렉션 링크 확인.
- https://splitting.js.org/guide.html | 라이선스 MIT는 shshaw/Splitting LICENSE.md로 확인 | chars, words, lines 및 CSS 인덱스 변수.
- https://textillate.js.org/ | 라이선스 MIT는 jschr/textillate LICENSE로 확인 | 등장과 퇴장, 문자 순서, loop, minDisplayTime, delay 설정.
- https://motioncanvas.io/docs/code | 라이선스 MIT는 motion-canvas/motion-canvas LICENSE로 확인 | 교체, 삽입, 삭제, 범위 선택 문서 예제.
- https://github.com/motion-canvas/motion-canvas/blob/main/packages/docs/blog/2023-12-31-txt.tsx | MIT | Txt 중첩 굵기, 기울기, 색 및 줄바꿈 예제다. 이 파일은 정적 배치 근거이며 자체를 애니메이션 기법으로 세지 않았다.
- https://github.com/motion-canvas/motion-canvas/blob/main/packages/examples/src/scenes/code.tsx | MIT | 코드 토큰 편집과 선택 애니메이션 예제.

## animate-text 24종 대응표

| 원문 spec | 원장 ID | 병합한 기법 |
| --- | --- | --- |
| blur-out-up | R9-002 | 텍스트 초점 해소 |
| bottom-up-letters | R9-001 | 글자 순차 슬라이드 |
| depth-parallax-words | R9-009 | 단어 깊이 이동 |
| fade-through | R9-012 | 텍스트 페이드 스루 |
| focus-blur-resolve | R9-002 | 텍스트 초점 해소 |
| kinetic-center-build | R9-010 | 중앙 문장 밀어 쌓기 |
| line-by-line-slide | R9-007 | 텍스트 묶음 슬라이드 |
| mask-reveal-up | R9-006 | 클립 줄 드러내기 |
| micro-scale-fade | R9-004 | 텍스트 스케일 페이드 |
| per-character-rise | R9-001 | 글자 순차 슬라이드 |
| per-word-crossfade | R9-003 | 단어 순차 페이드 |
| scale-down-fade | R9-004 | 텍스트 스케일 페이드 |
| shared-axis-x | R9-008 | 공유 축 텍스트 교체 |
| shared-axis-y | R9-008 | 공유 축 텍스트 교체 |
| shared-axis-z | R9-008 | 공유 축 텍스트 교체 |
| shimmer-sweep | R9-011 | 텍스트 광택 훑기 |
| short-slide-down | R9-007 | 텍스트 묶음 슬라이드 |
| short-slide-right | R9-007 | 텍스트 묶음 슬라이드 |
| soft-blur-in | R9-002 | 텍스트 초점 해소 |
| spring-scale-in | R9-005 | 스프링 텍스트 팝 |
| stagger-from-center | R9-013 | 공간 순서 텍스트 시차 |
| stagger-from-edges | R9-013 | 공간 순서 텍스트 시차 |
| top-down-letters | R9-001 | 글자 순차 슬라이드 |
| typewriter | R9-014 | 타자기 드러내기 |

## Codrops 보충 근거 파일

모든 경로는 .staging/R9/supplement에 저장했다. 해당 레포의 GitHub 원문을 읽었다. 원문은 조사 증거이며 구현으로 복사하지 않는다.

- bradley__Blotter__build_materials_fliesMaterial.js
- bradley__Blotter__build_materials_rollingDistortMaterial.js
- bradley__Blotter__build_materials_slidingDoorMaterial.js
- codrops__AnimateSVGTextPath__js_index.js
- codrops__CircularTextEffect__src_js_demo1_index.js
- codrops__CircularTextEffect__src_js_demo1_intro.js
- codrops__CircularTextEffect__src_js_demo2_index.js
- codrops__CircularTextEffect__src_js_demo2_intro.js
- codrops__CircularTextEffect__src_js_demo3_index.js
- codrops__CircularTextEffect__src_js_demo3_intro.js
- codrops__DecorativeLetterAnimations__js_wordFx.js
- codrops__FancyLetterAnimation__js_main.js
- codrops__ImageExpansionTypography__js_index.js
- codrops__KineticTypePageTransition__src_js_index.js
- codrops__KineticTypePageTransition__src_js_typeTransition.js
- codrops__LetterEffects__js_textfx.js
- codrops__LetterInteractions__js_demo.js
- codrops__OnScrollLetterAnimations__src_js_index.js
- codrops__OnScrollLetterAnimations__src_js_index2.js
- codrops__OnScrollLetterAnimations__src_js_index3.js
- codrops__OnScrollLetterAnimations__src_js_index4.js
- codrops__OnScrollLetterAnimations__src_js_index5.js
- codrops__OnScrollTextHighlight__js_index.js
- codrops__OnScrollTypographyAnimations__src_js_index.js
- codrops__OnScrollTypographyAnimations__src_js_index2.js
- codrops__RepetitiveTypography__src_js_index.js
- codrops__ScrollBlurTypography__js_index.js
- codrops__ScrollTextMotion__js_index.js
- codrops__SlicedTextEffect__js_index.js
- codrops__TextBlockTransitions__js_demo10_index.js
- codrops__TextBlockTransitions__js_demo11_index.js
- codrops__TextBlockTransitions__js_demo12_index.js
- codrops__TextBlockTransitions__js_demo1_index.js
- codrops__TextBlockTransitions__js_demo2_index.js
- codrops__TextBlockTransitions__js_demo3_index.js
- codrops__TextBlockTransitions__js_demo4_index.js
- codrops__TextBlockTransitions__js_demo5_index.js
- codrops__TextBlockTransitions__js_demo6_index.js
- codrops__TextBlockTransitions__js_demo7_index.js
- codrops__TextBlockTransitions__js_demo8_index.js
- codrops__TextBlockTransitions__js_demo9_index.js
- codrops__TextClipScroll__js_index.js
- codrops__TextDistortionEffects__js_demo.js
- codrops__TextRepetitionEffect__src_js_demo1_index.js
- codrops__TextRepetitionEffect__src_js_demo1_repeatTextScrollFx.js
- codrops__TextRepetitionEffect__src_js_demo2_index.js
- codrops__TextRepetitionEffect__src_js_demo2_repeatTextScrollFx.js
- codrops__TextRepetitionEffect__src_js_demo3_index.js
- codrops__TextRepetitionEffect__src_js_demo3_repeatTextScrollFx.js
- codrops__TextRepetitionEffect__src_js_demo4_index.js
- codrops__TextRepetitionEffect__src_js_demo4_repeatTextScrollFx.js
- codrops__TextRepetitionEffect__src_js_demo5_index.js
- codrops__TextRepetitionEffect__src_js_demo5_repeatTextScrollFx.js
- codrops__TypeShuffleAnimation__src_js_typeShuffle.js
- animate-css__animate.css__source_attention_seekers_jello.css
- animate-css__animate.css__source_lightspeed_lightSpeedInRight.css
- animate-css__animate.css__source_specials_jackInTheBox.css
- codrops__TextStylesHoverEffects__css_demo.css
- codrops__TextStylesHoverEffects__css_linkstyles.css

## 못 연 곳과 확인 한계

- https://tympanus.net/codrops/sitemap_index.xml | HTTP 403.
- https://tympanus.net/codrops/?s=text+animation | HTTP 403.
- https://tympanus.net/codrops/tag/typography/feed/ | HTTP 403.
- https://tympanus.net/codrops/wp-json/wp/v2/posts?search=typography&per_page=100 | HTTP 403.
- https://codrops.com/?s=text+animation | HTTP 403.
- https://codrops.com/sitemap_index.xml | HTTP 404.
- https://codepen.io/collection/XpROaV/ | HTTP 403.
- https://codepen.io/collection/43588e4b7beaaf25ede7e38e61441e54/ | HTTP 403.
- https://codepen.io/collection/XpROaV/feed/ | HTTP 403.
- https://raw.githubusercontent.com/codrops/LetterAnimations/master/README.md | HTTP 404.
- https://raw.githubusercontent.com/codrops/OpeningType/master/README.md | HTTP 404.
- https://raw.githubusercontent.com/codrops/StaggeredTextReveal/master/README.md | HTTP 404.
- https://raw.githubusercontent.com/codrops/TextOpeningSequence/master/README.md | HTTP 404.
- pixel-point/animate-text | 수집 tree에 LICENSE 파일이 없고 raw LICENSE도 404다. unknown과 참고만으로 기록했다.
- davatron5000/Lettering.js | raw LICENSE 404. README의 라이선스 표현으로 원장 라이선스를 확정하지 않았다.
- 일부 레포의 추정 경로 js/index.js, js/demo.js는 404였다. GitHub tree에서 main 브랜치와 src/js 및 js/demoN 경로를 찾아 성공한 파일로 보완했다. 경로 404를 레포 전체 실패로 판단하지 않았다.
- 기존 .staging/R9/codrops-index.json과 codrops-repos.json은 빈 배열이고 codrops-posts.json의 검색별 목록도 비어 있었다. 전체 목록 증거로 사용하지 않았다.
- 기존 motion-text.html은 기대한 텍스트 문서 대신 블로그 HTML이었다. GitHub Txt 예제와 Code 문서 및 코드 예제로 대체했다.

## 라이선스 판독 메모

- Typed.js 수집본 LICENSE.txt는 GNU GPL version 3 or later다. 과거 MIT였다는 기억으로 대체하지 않았다.
- animate.css 수집본 LICENSE는 Hippocratic License 2.1이다. textillate 자체 MIT와 의존성 라이선스를 구별했다.
- Remotion LICENSE.md는 무료 사용 자격과 회사 라이선스 조건을 가진 커스텀 라이선스다. MIT로 적지 않았다.
- Blotter는 license.txt의 MIT 원문을 확인했다.
- 예전 Codrops 레포 일부는 README에 as-is 재배포 제한 문구가 있지만 LICENSE 원문을 확보하지 못했다. unknown으로 남기고 참고만을 표시했다.
