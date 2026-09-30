# Motion catalog · 모션 전체 목록

Generated from [index.json](../index.json): 637 techniques · 128 clips. 정본에서 생성한 전체 목록이다.

[English entrance](../README.md) · [한국어 입구](../README.ko.md) · [Docs contents · 문서 목차](README.md)

## Contents · 목차

- [PRINCIPLES · 기본기](#family-principles)
- [ENTRANCE & EXIT · 등장·퇴장](#family-entrance)
- [EMPHASIS · 강조·주의](#family-emphasis)
- [TYPOGRAPHY · 타이포](#family-type)
- [TRANSITIONS · 전환·컷](#family-transitions)
- [CAMERA · 가상 카메라](#family-camera)
- [DATA · 데이터](#family-data)
- [UI DEMO · UI 시연](#family-ui)
- [EXPLAINER · 원리 도해](#family-explainer)
- [SHAPE & PATH · 도형·패스](#family-shape)
- [TEXTURE & STYLE · 질감·스타일](#family-texture)
- [GENERATIVE · 입자·생성](#family-generative)
- [3D & DEPTH · 3D·깊이](#family-depth)
- [LOOP & AMBIENT · 반복·앰비언트](#family-loop)
- [CAPTIONS · 자막·하단 자막](#family-caption)

<a id="family-principles"></a>

## PRINCIPLES · 기본기

| Nº | Effect · 효과 | Definition · 정의 | Clip · 클립 |
|---|---|---|---|
| 001 | [Overlapping Action · 오버랩](../effects/overlapping-action/) | Parts of an object move in the same direction with slightly offset start and stop times.<br>한 물체의 부위들이 같은 방향으로 움직이되 출발과 정지 시각이 조금씩 어긋나는 움직임 | [MP4](../effects/overlapping-action/clip.mp4) |
| 002 | [Anticipation · 예비동작](../effects/anticipation/) | A brief movement in the opposite direction prepares the viewer for the main action.<br>주 동작 전에 반대 방향으로 짧게 움직여 다음 움직임을 예고하는 기법 | [MP4](../effects/anticipation/clip.mp4) |
| 003 | [Easing · 이징](../effects/easing-curves/) | Easing changes velocity over the course of an animation while keeping its distance and duration constant.<br>같은 거리와 시간을 유지하면서 진행률에 따른 속도를 바꾸는 움직임 | [MP4](../effects/easing-curves/clip.mp4) |
| 004 | [Spring & Overshoot · 스프링 오버슛](../effects/spring-overshoot/) | An object briefly exceeds its target scale before returning and settling.<br>목표 크기를 조금 넘었다가 되돌아와 안착하는 움직임 | [MP4](../effects/spring-overshoot/clip.mp4) |
| 005 | [Squash & Stretch · 스쿼시 앤 스트레치](../effects/squash-stretch/) | An object stretches as it gains speed and squashes on impact while keeping the product of its axis scales constant.<br>속도가 붙으면 늘어나고 충돌하면 납작해지되 두 축의 배율 곱을 일정하게 유지하는 변형 | [MP4](../effects/squash-stretch/clip.mp4) |
| 006 | [Stagger · 스태거](../effects/stagger/) | Multiple elements appear in sequence with a consistent delay between them.<br>여러 요소를 일정한 시간차로 차례로 등장시키는 움직임 | [MP4](../effects/stagger/clip.mp4) |
| 007 | [Arcs · 아크](../effects/arc-motion/) | An object follows a curved trajectory instead of a straight line.<br>물체가 직선 대신 휘어진 궤적을 따라 이동하는 기법 | [MP4](../effects/arc-motion/clip.mp4) |
| 008 | [Follow-through · 팔로스루](../effects/follow-through/) | An attached extremity continues moving through inertia after the main body stops, then settles later.<br>몸통이 멈춘 뒤 붙어 있는 끝부분이 관성으로 더 움직였다가 늦게 정지하는 기법 | [MP4](../effects/follow-through/clip.mp4) |
| 009 | [Motion Hierarchy · 모션 위계](../effects/motion-hierarchy/) | Differences in scale and entrance timing establish a reading order that prioritizes important information.<br>중요한 정보부터 크기와 등장 시간을 달리해 읽는 순서를 만드는 움직임 | [MP4](../effects/motion-hierarchy/clip.mp4) |
| 010 | [Timing & Spacing · 타이밍과 간격](../effects/timing-spacing/) | Spacing between successive frame positions reveals changes in velocity within the same movement duration.<br>같은 이동 시간 안에서 프레임 사이 위치 간격으로 속도 변화를 드러내는 움직임 | Pending · 준비 중 |
| 011 | [Motion Blending · 모션 블렌드](../effects/motion-blend/) | Two motions are mixed by weight so one action flows into the next.<br>두 동작을 가중치로 섞어 한 동작에서 다음 동작으로 끊김 없이 넘어가는 전환 | Pending · 준비 중 |
| 012 | [Smear Frame · 스미어 프레임](../effects/smear-frame/) | During a fast move, the object stretches along its direction of travel and snaps back.<br>빠른 이동 중 대상이 이동 방향으로 길게 늘어나거나 여러 윤곽으로 퍼졌다 돌아오는 표현 | Pending · 준비 중 |
| 013 | [Action Sequence · 순차 동작](../effects/action-sequence/) | One action finishes and the next begins, showing steps in order.<br>한 동작이 끝난 뒤 다음 동작이 시작해 단계를 차례로 보여 주는 연결 | Pending · 준비 중 |
| 014 | [Additive Motion · 가산 모션](../effects/additive-motion/) | A small wobble or rotation is layered on top of an element following a larger path.<br>큰 경로를 따라 움직이는 대상에 작은 흔들림이나 회전이 동시에 더해진다 | Pending · 준비 중 |
| 015 | [Beat Synchronization · 비트 싱크](../effects/beat-sync/) | Arrivals, scale changes and cuts land exactly on specific beats of the music.<br>요소의 도착, 크기 변화, 화면 컷이 음악의 특정 박자에 정확히 맞아떨어진다 | Pending · 준비 중 |
| 016 | [Bounce Landing · 바운스 착지](../effects/bounce-landing/) | An object accelerates down, then bounces lower each time until it rests.<br>물체가 아래로 가속해 떨어진 뒤 점점 낮게 튀며 멈춘다 | Pending · 준비 중 |
| 017 | [Concurrent Motion · 동시 동작](../effects/concurrent-motion/) | Several targets or properties move in the same window of time.<br>여러 대상이나 속성이 같은 시간대에 함께 움직이는 합성 | Pending · 준비 중 |
| 018 | [Continuous Motion · 연속 이동](../effects/continuous-motion/) | An element passes through several stops or scenes without pausing, keeping one flow.<br>여러 정거장이나 장면을 지나면서 요소가 중간에 멈추지 않고 같은 흐름을 이어 간다 | Pending · 준비 중 |
| 019 | [Group Motion · 그룹 이동](../effects/group-motion/) | Marks in one group move together in the same direction and speed so they read as a unit.<br>같은 그룹의 마크들이 같은 방향과 속도로 동시에 움직여 한 묶음으로 보이게 하는 표현 | Pending · 준비 중 |
| 020 | [Inertial Glide · 관성 이동](../effects/inertial-glide/) | A released object keeps its direction of travel and gradually decelerates to a stop.<br>놓인 물체가 이동 방향을 유지하다가 서서히 감속하며 멈춘다 | Pending · 준비 중 |
| 021 | [Motion Retargeting · 진행 중 목표 변경](../effects/retarget-motion/) | When the target changes mid-move, the element eases from its current position toward the new direction.<br>이동 도중 목표가 바뀌어도 현재 위치에서 새 방향으로 자연스럽게 가감속한다 | Pending · 준비 중 |
| 022 | [Rotation · 회전](../effects/rotate/) | Turns an element around a center point to change its direction.<br>중심점 둘레로 방향을 바꾸는 기본 회전 | Pending · 준비 중 |
| 023 | [Scale · 스케일](../effects/scale/) | Changes size proportionally from an anchor so growth direction and amount read clearly.<br>기준점에서 크기를 비례로 바꿔 펼쳐지는 방향과 크기 변화를 보여 주는 기본 동작 | Pending · 준비 중 |
| 024 | [State Tween · 상태 보간](../effects/state-tween/) | Position, size, rotation and color change together toward a saved next state.<br>위치·크기·회전·색이 저장된 다음 상태로 동시에 바뀌는 보간 | Pending · 준비 중 |
| 025 | [Stepped Motion · 계단식 모션](../effects/stepped-motion/) | Values or poses change instantly one step at a time without in-between interpolation.<br>값이나 자세가 중간 보간 없이 한 단계씩 순간적으로 바뀐다 | Pending · 준비 중 |
| 026 | [Temporal Overlap · 동작 중첩](../effects/temporal-overlap/) | The next element starts moving before the first has stopped, so motion flows in a wave.<br>첫 요소가 멈추기 전에 다음 요소의 움직임이 시작되어 동작이 물결처럼 이어지는 순서 | Pending · 준비 중 |

<a id="family-entrance"></a>

## ENTRANCE & EXIT · 등장·퇴장

| Nº | Effect · 효과 | Definition · 정의 | Clip · 클립 |
|---|---|---|---|
| 027 | [Symmetric Panel Open · 대칭 패널 펼침](../effects/symmetric-panel-open/) | Two panels enter from opposite sides and rotate toward a shared frontal plane.<br>두 판이 양쪽에서 들어와 책을 펴듯 서로 반대 각도로 정면을 향한다. | Pending · 준비 중 |
| 028 | [Back Entrance · 백 등장](../effects/back-entrance/) | A small translucent element travels in, then settles at full size and opacity.<br>작고 흐린 요소가 멀리서 이동한 뒤 마지막에 원래 크기와 불투명도로 정착한다. | Pending · 준비 중 |
| 029 | [Blinds Reveal · 블라인드 리빌](../effects/blinds-reveal/) | Staggered strips open to assemble a complete image.<br>여러 띠나 블라인드가 조금씩 다른 시점에 열려 전체 이미지를 완성한다. | [MP4](../effects/blinds-reveal/clip.mp4) |
| 030 | [Blur Reveal · 블러 리빌](../effects/blur-reveal/) | Blurred text or imagery resolves into sharp focus.<br>흐릿한 글자나 이미지가 선명해지면서 나타난다. | [MP4](../effects/blur-reveal/clip.mp4) |
| 031 | [Blurred Slide · 블러 슬라이드](../effects/blurred-slide/) | A stretched blurred element moves into place and resolves to its normal shape.<br>길게 늘어나고 흐린 요소가 이동하며 원래 모양으로 선명하게 정착한다. | Pending · 준비 중 |
| 032 | [Bomb Exit · 밤 퇴장](../effects/bomb-exit/) | An element tilts sideways, moves away, and disappears into a heavy blur.<br>요소가 옆으로 기울어 이동하며 크게 흐려져 사라진다. | Pending · 준비 중 |
| 033 | [Corner Mask Swing · 코너 매트 스윙](../effects/corner-mask-swing/) | An opaque cover rotates around a corner to reveal content.<br>가리는 판이 모서리를 축으로 회전하며 뒤의 내용을 연다. | Pending · 준비 중 |
| 034 | [Counter Moving Matte · 역방향 매트](../effects/counter-moving-matte/) | A revealing window and its content move in opposite directions.<br>창은 한쪽으로 열리고 안쪽 그림은 반대쪽으로 움직이며 나타난다. | Pending · 준비 중 |
| 035 | [Curtain Reveal · 커튼 리빌](../effects/curtain-reveal/) | Foreground objects part to reveal a title behind them.<br>앞쪽 잎이나 물체가 양쪽으로 쓸려 나가 뒤의 제목이 보인다. | Pending · 준비 중 |
| 036 | [Depixelate Reveal · 디픽셀 리빌](../effects/depixelate-reveal/) | Large pixel blocks resolve into a sharp image.<br>큰 색 블록으로 가려진 이미지가 작은 블록으로 풀리며 선명해진다. | Pending · 준비 중 |
| 037 | [Elliptic Entrance · 타원 궤도 등장](../effects/elliptic-entrance/) | A tilted scaled element follows an elliptical-style path into a front-facing position.<br>요소가 3D로 기울고 찌그러진 상태에서 타원 곡선을 따라 정면으로 들어온다. | Pending · 준비 중 |
| 038 | [Fade Slide · 페이드 슬라이드](../effects/fade-slide/) | An element fades in while sliding into position.<br>요소가 가장자리나 조금 낮은 위치에서 이동하며 선명하게 나타난다. | [MP4](../effects/fade-slide/clip.mp4) |
| 039 | [Fade · 페이드](../effects/fade/) | An element appears or disappears through opacity alone.<br>요소가 제자리에 머문 채 투명도만 바뀌어 나타나거나 사라진다. | Pending · 준비 중 |
| 040 | [Flicker Reveal · 플리커 리빌](../effects/flicker-reveal/) | An element switches on and off at uneven intervals before becoming fully visible.<br>요소가 불규칙하게 켜졌다 꺼졌다 하다가 완전히 나타나거나 사라진다. | Pending · 준비 중 |
| 041 | [Flip Reveal · 플립 등장](../effects/flip-reveal/) | An edge-on element rotates around a 3D axis to face the viewer.<br>얇은 옆면으로 보이던 요소가 3D 축을 돌아 정면으로 나타난다. | [MP4](../effects/flip-reveal/clip.mp4) |
| 042 | [Foolish Reveal · 풀리시 리빌](../effects/foolish-reveal/) | An element scales in while rotating around successive corner pivots.<br>요소가 크기를 바꾸며 여러 모서리를 축으로 차례로 회전해 정착한다. | Pending · 준비 중 |
| 043 | [Hinge Drop · 힌지 드롭](../effects/hinge-drop/) | An element swings from a corner, then drops out of view.<br>요소가 모서리에 매달려 흔들리다가 아래로 떨어져 사라진다. | Pending · 준비 중 |
| 044 | [Hinge Reveal · 힌지 리빌](../effects/hinge-reveal/) | A panel rotates from its edge into a front-facing position.<br>패널이 한쪽 변을 축으로 기울어진 상태에서 정면으로 열린다. | Pending · 준비 중 |
| 045 | [Jack in the Box · 잭 인 더 박스](../effects/jack-in-the-box/) | An element pops up from a tiny tilted state and settles through alternating rotations.<br>요소가 작고 기울어진 상태에서 갑자기 커진 뒤 좌우 회전하며 안정된다. | Pending · 준비 중 |
| 046 | [Light Speed · 라이트 스피드](../effects/light-speed/) | An element rushes in sideways, skews, then straightens with a small counter-skew.<br>요소가 빠르게 옆에서 들어오며 기울었다가 반대쪽으로 꺾이며 펴진다. | Pending · 준비 중 |
| 047 | [Magic Exit · 매직 퇴장](../effects/magic-exit/) | An element grows, rotates around an offset pivot, and leaves the frame.<br>요소가 한쪽으로 커지며 회전하고 화면 밖으로 사라진다. | Pending · 준비 중 |
| 048 | [Mosaic Reveal · 모자이크 리빌](../effects/mosaic-reveal/) | Small tile windows reveal one complete image in sequence.<br>작은 타일 창이 차례로 열려 한 장의 이미지나 포스터를 완성한다. | Pending · 준비 중 |
| 049 | [Physical Exit · 관성 퇴장](../effects/physical-exit/) | An element accelerates off screen while rotating or falling.<br>요소가 회전하거나 가속하면서 화면 밖으로 던져지거나 떨어진다. | Pending · 준비 중 |
| 050 | [Puff Reveal · 퍼프 리빌](../effects/puff-reveal/) | An enlarged blurred element shrinks into focus, or expands and blurs away.<br>확대되고 흐린 요소가 줄어들며 선명해지거나 확대되며 흐려져 사라진다. | Pending · 준비 중 |
| 051 | [Roll Reveal · 롤 등장](../effects/roll-reveal/) | An element rolls in or out through sideways movement and planar rotation.<br>요소가 옆으로 이동하면서 평면 회전해 굴러 들어오거나 나간다. | Pending · 준비 중 |
| 052 | [Rotate Reveal · 회전 등장](../effects/rotate-reveal/) | An element rotates in the plane while appearing or disappearing.<br>요소가 평면에서 회전하며 나타나거나 회전하며 사라진다. | Pending · 준비 중 |
| 053 | [Scale Pop · 스케일 팝](../effects/scale-pop/) | An element grows from a small scale to its final size.<br>요소가 작은 크기에서 제 크기로 커져 멈춘다. 반대로 축소되어 사라질 수 있다. | [MP4](../effects/scale-pop/clip.mp4) |
| 054 | [Slide · 슬라이드](../effects/slide/) | An element slides in from an edge or moves out of view.<br>요소가 화면 가장자리 또는 일정 거리 밖에서 들어오거나 빠져나간다. | Pending · 준비 중 |
| 055 | [Swap Entrance · 스왑 등장](../effects/swap-entrance/) | An oversized off-screen element sweeps around and shrinks into position.<br>큰 크기로 화면 밖에 있던 요소가 넓게 돌아 작아지며 제자리에 들어온다. | Pending · 준비 중 |
| 056 | [Swirl Reveal · 스월 리빌](../effects/swirl-reveal/) | An element spins through multiple turns while scaling into view.<br>요소가 여러 바퀴 회전하며 축소 또는 확대되어 나타난다. | Pending · 준비 중 |
| 057 | [Tilt Entrance · 틸트 등장](../effects/tilt-entrance/) | An element arrives at an angle and removes its rotation and skew as it aligns.<br>요소가 비스듬한 평면에서 들어오며 기울기와 비틀림을 풀어 정렬된다. | Pending · 준비 중 |
| 058 | [Blur Resolve · 블러 해제](../effects/blur-resolve/) | A blurred target sharpens as its blur radius falls, pulling the eye.<br>흐릿한 대상이 블러 반경이 줄며 선명해져 시선을 모으는 등장 | Pending · 준비 중 |
| 059 | [Clip Reveal · 클립 리빌](../effects/clip-reveal/) | The visible region inside a boundary widens to reveal content from one side.<br>경계 안에서 보이는 영역을 넓혀 내용을 한쪽에서 드러내는 등장 | Pending · 준비 중 |
| 060 | [Hard Appearance · 즉시 등장](../effects/hard-appearance/) | An element appears instantly at a defined moment.<br>정해진 순간에 요소가 중간 과정 없이 화면에 나타난다. | Pending · 준비 중 |
| 061 | [Outline Flash Reveal · 윤곽 섬광 등장](../effects/outline-flash-reveal/) | A bright outline traces the subject while its interior fades into clarity.<br>밝은 윤곽선이 대상을 훑는 동안 내부 대상이 점점 선명해진다. | Pending · 준비 중 |
| 062 | [Paper Shred Exit · 종이 파쇄 퇴장](../effects/paper-shred-exit/) | A document feeds through a slit and falls away as narrow strips.<br>문서가 좁은 틈으로 들어가 여러 가느다란 띠로 잘려 떨어지고 사라진다. | Pending · 준비 중 |
| 063 | [Spiral Assembly · 나선 조립](../effects/spiral-assembly/) | Pieces spiral inward and settle into their final arrangement.<br>조각들이 바깥의 나선 궤도를 따라 들어와 최종 형태에 붙는다. | Pending · 준비 중 |
| 064 | [Letter Spin In · 글자 회전 입장](../effects/letter-spin-in/) | Letters arrive tilted or spinning and rotate into their upright alignment.<br>글자가 기울거나 회전한 상태에서 바른 방향으로 돌아와 정렬되는 등장 | Pending · 준비 중 |

<a id="family-emphasis"></a>

## EMPHASIS · 강조·주의

| Nº | Effect · 효과 | Definition · 정의 | Clip · 클립 |
|---|---|---|---|
| 065 | [Overwhelm Surround · 알림 포위](../effects/overwhelm-surround/) | Cards arrive increasingly quickly around a stationary focal subject.<br>주인공은 고정된 채 알림과 작업 카드가 더 빠르게 주변을 채운다. | Pending · 준비 중 |
| 066 | [Threshold Pulse · 임계값 경고 펄스](../effects/threshold-pulse/) | A counter becomes more prominent and briefly scales up when it reaches a warning threshold.<br>값이 한계에 가까워질수록 숫자가 진해지고 튀어 오른다. | Pending · 준비 중 |
| 067 | [Border Reveal · 테두리 리빌](../effects/border-reveal/) | A border line closes in from outside the element to reveal its outline.<br>요소의 테두리 선이 바깥에서 안으로 들어오며 윤곽을 드러내는 표시 | Pending · 준비 중 |
| 068 | [Jello · 젤로](../effects/jello/) | A damped alternating shear that makes an element wobble like jelly.<br>가로와 세로로 번갈아 비틀리며 감쇠하는 젤리 같은 진동 | Pending · 준비 중 |
| 069 | [Pulse · 펄스](../effects/pulse/) | A short scale beat where an element grows slightly and returns to its size in place.<br>요소가 제자리에서 살짝 커졌다 원래 크기로 돌아오는 맥동 | [MP4](../effects/pulse/clip.mp4) |
| 070 | [Rotate Scale · 회전 스케일](../effects/rotate-scale/) | An element spins while growing, then settles back to its original size.<br>회전하면서 커졌다 원래 크기로 돌아오는 강조 동작 | Pending · 준비 중 |
| 071 | [Tada · 타다](../effects/tada/) | A celebratory shrink-then-grow with a small left-right shake before settling.<br>움츠렸다 커지면서 좌우로 흔들리고 제자리로 돌아오는 축하 동작 | Pending · 준비 중 |
| 072 | [Wobble · 워블](../effects/wobble/) | A wide left-right sway with tilt that shrinks in amplitude until it settles.<br>요소가 좌우로 넓게 밀리며 기울다가 진폭을 줄이며 정착하는 흔들림 | Pending · 준비 중 |
| 073 | [Audio Reactive Pulse · 오디오 반응 펄스](../effects/audio-reactive-pulse/) | Shape size and glow intensity follow the low or high frequency strength of the sound.<br>소리의 저음이나 고음 세기에 맞춰 도형의 크기와 빛의 세기가 함께 변한다 | Pending · 준비 중 |
| 074 | [Blink · 점멸](../effects/blink/) | An element's brightness or opacity switches on and off repeatedly.<br>요소의 밝기나 투명도가 켜지고 꺼지며 반복된다 | Pending · 준비 중 |
| 075 | [Bounce Attention · 통통 튀기](../effects/bounce-attention/) | An element bounces up and down in place, then returns to its original position.<br>요소가 제자리에서 위아래로 튀다가 원래 위치로 돌아온다 | Pending · 준비 중 |
| 076 | [Circumscribe · 둘레선 강조](../effects/circumscribe/) | A circle or rectangle is drawn around a target and then erased.<br>대상 바깥에 원이나 사각 테두리가 그려졌다가 지워지는 임시 강조 | [MP4](../effects/circumscribe/clip.mp4) |
| 077 | [Color Transition · 색 전환](../effects/color-transition/) | An element's color blends smoothly from its current color to the next.<br>대상의 색이 기존 색에서 다음 색으로 부드럽게 바뀌는 전환 | Pending · 준비 중 |
| 078 | [Focus Contraction · 초점 원판 축소](../effects/focus-contraction/) | A wide, translucent disk shrinks onto the target and vanishes.<br>넓고 반투명한 원판이 목표 위치로 줄어들며 사라져 정확한 지점을 알려 주는 신호 | Pending · 준비 중 |
| 079 | [Focus Handoff · 강조점 순회](../effects/focus-handoff/) | Among items already laid out, one lights up at a time and the highlight hands off to the next.<br>이미 배치된 여러 항목 중 하나씩 색이나 빛이 켜졌다가 다음 항목으로 옮겨 간다 | [MP4](../effects/focus-handoff/clip.mp4) |
| 080 | [Outline Pulse · 윤곽 펄스](../effects/outline-pulse/) | A shape's edge line appears and briefly thickens and brightens before easing back.<br>이미지나 물체의 경계선이 나타나고 두께와 밝기가 잠깐 커졌다 줄어드는 맥동 | Pending · 준비 중 |
| 081 | [Radial Speed Lines · 방사 속도선](../effects/radial-speed-lines/) | Lines from the center burst outward briefly and vanish.<br>중심에서 바깥으로 향하는 선들이 짧게 뻗었다가 사라진다 | Pending · 준비 중 |
| 082 | [Selection Travel · 선택 영역 이동](../effects/selection-travel/) | A translucent selection band moves from one range to the next, resizing to fit.<br>반투명 선택 띠가 한 범위에서 다음 범위로 이동하며 폭과 높이를 맞추는 강조 | Pending · 준비 중 |
| 083 | [Shake · 셰이크](../effects/shake/) | An element oscillates on both sides of its rest position or angle, then stops.<br>요소가 기준 위치나 각도의 양쪽을 오가다가 멈춘다 | [MP4](../effects/shake/clip.mp4) |
| 084 | [Swing · 스윙](../effects/swing/) | An element hung from a fixed pivot rotates side to side, shrinking in amplitude until it rests.<br>고정된 축에 매달린 요소가 좌우로 회전하다 진폭이 줄며 제자리로 돌아온다 | Pending · 준비 중 |
| 085 | [Vignette Pulse · 비네트 펄스](../effects/vignette-pulse/) | The dark edge of the frame tightens inward for an instant and then releases.<br>화면 가장자리의 어둠이 순간 안쪽으로 조여졌다가 풀린다 | Pending · 준비 중 |
| 086 | [Text Color Wipe · 글자 색 와이프](../effects/text-color-wipe/) | Bright text fills over dim text from one side.<br>옅은 글자 위로 밝은 글자가 한쪽에서부터 채워지는 효과 | Pending · 준비 중 |

<a id="family-type"></a>

## TYPOGRAPHY · 타이포

| Nº | Effect · 효과 | Definition · 정의 | Clip · 클립 |
|---|---|---|---|
| 087 | [Letter Drop Pile · 글자 낙하와 쌓임](../effects/letter-drop-pile/) | The letters of a sentence detach, fall, hit the ground, and pile up.<br>문장의 글자들이 떨어져 바닥에 부딪히고 쌓이는 효과 | Pending · 준비 중 |
| 088 | [Per-character Rise · 글자별 스태거](../effects/char-stagger/) | Characters rise from below and fade in with a staggered delay.<br>글자들이 아래에서 위로 시간차를 두고 올라오며 불투명해지는 효과 | [MP4](../effects/char-stagger/clip.mp4) |
| 089 | [Highlight Sweep · 하이라이트 스윕](../effects/highlight-sweep/) | A highlighter band sweeps from left to right behind a key phrase.<br>핵심 구절 뒤의 형광펜 띠를 왼쪽에서 오른쪽으로 칠하는 효과 | [MP4](../effects/highlight-sweep/clip.mp4) |
| 090 | [Kinetic Beats · 키네틱 비트](../effects/kinetic-beats/) | Words hit the center at a large scale on regular beats and quickly settle.<br>단어를 일정한 박자마다 중앙에 크게 찍고 빠르게 정착시키는 효과 | [MP4](../effects/kinetic-beats/clip.mp4) |
| 091 | [Mask Reveal · 마스크 리빌](../effects/mask-reveal/) | A title rises into clipped windows to reveal one line at a time.<br>숨겨진 창 아래의 제목을 위로 올려 줄마다 드러내는 효과 | [MP4](../effects/mask-reveal/clip.mp4) |
| 092 | [Text Scramble · 스크램블](../effects/text-scramble/) | Symbols cycle in each character position before resolving into the final text from left to right.<br>자리마다 기호가 바뀌다가 왼쪽부터 정답 글자로 고정되는 효과 | [MP4](../effects/text-scramble/clip.mp4) |
| 093 | [Typewriter · 타자기](../effects/typewriter/) | A sentence appears one character at a time at regular intervals while a cursor follows the insertion point.<br>문장을 한 글자씩 일정 간격으로 드러내고 커서가 입력 위치를 따라가는 효과 | [MP4](../effects/typewriter/clip.mp4) |
| 094 | [Underline Draw · 밑줄 드로우](../effects/underline-draw/) | An SVG path draws beneath a key phrase from left to right in a single stroke.<br>핵심어 아래의 SVG 경로를 왼쪽부터 한 획으로 그리는 효과 | [MP4](../effects/underline-draw/clip.mp4) |
| 095 | [Word Emphasis · 단어 강조](../effects/word-emphasis/) | A phrase changes color and scale within a stationary sentence while surrounding text fades.<br>정지한 문장에서 한 구절만 색과 크기를 바꾸고 주변 글을 옅게 만드는 효과 | [MP4](../effects/word-emphasis/clip.mp4) |
| 096 | [Kinetic Type Sweep · 대형 키네틱 타이포 스윕](../effects/kinetic-type-sweep/) | Three lines of 200px+ serif type sweep across the frame in opposite directions at different speeds, then one key word slams to a stop dead center.<br>200px 넘는 세리프 문장 세 줄이 서로 반대 방향, 다른 속도로 화면을 가로지르고 마지막에 핵심어 하나만 정중앙에 급정지한다. | [MP4](../effects/kinetic-type-sweep/clip.mp4) |
| 097 | [Context Caret · 문맥 반응 커서](../effects/context-caret/) | A text caret that changes color with the kind of text being typed, then keeps blinking.<br>입력 중인 구간의 성격에 따라 커서의 색이 바뀌고 깜빡임이 이어지는 텍스트 커서 | Pending · 준비 중 |
| 098 | [3D Flip Decode · 3D 회전 해독](../effects/flip-decode-text/) | Each character rotates through a few random symbols and lands on its true glyph.<br>글자가 회전하며 임의 문자를 몇 번 거친 뒤 실제 글자로 착지하는 해독 효과 | Pending · 준비 중 |
| 099 | [Font Shuffle · 글꼴 셔플](../effects/font-shuffle/) | The sentence stays put while a key word changes typeface on every beat.<br>문장은 고정하고 핵심 단어의 글꼴만 박자마다 바뀌는 효과 | Pending · 준비 중 |
| 100 | [Glyph Roll · 글자 롤링 교체](../effects/glyph-roll/) | Each character sits in a vertical slot that rolls until the next glyph lands.<br>글자마다 세로 슬롯이 굴러 다음 글자로 정착하는 교체 효과 | Pending · 준비 중 |
| 101 | [Handwriting Write On · 손글씨 쓰기](../effects/handwriting-write-on/) | A pen tip travels along the real stroke order so the handwriting is revealed.<br>펜 끝이 글자의 실제 획 순서대로 움직이며 필체가 드러나는 손글씨 쓰기 | Pending · 준비 중 |
| 102 | [Inline Image Expand · 문장 속 이미지 확장](../effects/inline-image-expand/) | A small inline image between words grows and pushes the surrounding text aside.<br>문장 속 작은 이미지가 커지며 앞뒤 문구를 밀어내는 효과 | Pending · 준비 중 |
| 103 | [Letter Anagram Shift · 글자 재배치 조립](../effects/letter-anagram-shift/) | The letters of one word travel to become the initials of a new word or list.<br>한 단어의 글자들이 옮겨 가 새 단어나 목록의 머리글자가 되는 효과 | Pending · 준비 중 |
| 104 | [Phrase Push Build · 문장 밀어 쌓기](../effects/phrase-push-build/) | Each new word enters from the right and pushes earlier words left, keeping the whole phrase centered.<br>새 단어가 오른쪽에서 들어오면 이미 쓴 단어들이 왼쪽으로 밀려 전체 문장이 항상 중앙에 놓이는 효과 | Pending · 준비 중 |
| 105 | [Quote Card Build · 인용 카드 등장](../effects/quote-card-build/) | The quotation mark and lines appear in order and the attribution attaches last.<br>인용 부호와 문장이 차례로 나타나고 마지막에 출처가 붙는 등장 효과 | Pending · 준비 중 |
| 106 | [Repeated Text Wall · 반복 텍스트 벽](../effects/repeat-text-wall/) | One phrase is duplicated into many rows that fill the screen.<br>한 문구가 여러 행으로 복제되어 화면을 채우는 효과 | Pending · 준비 중 |
| 107 | [Scene Integrated Title · 장면 통합 타이틀](../effects/scene-integrated-title/) | The title is revealed and hidden in step with lines or character paths inside the scene.<br>제목 글자가 장면의 선이나 인물 동선과 맞물려 드러나고 가려지는 효과 | Pending · 준비 중 |
| 108 | [Spatial Word Composition · 공간 키네틱 문장](../effects/spatial-word-composition/) | Words appear in spoken order, changing size and angle to fill the frame as one typographic composition.<br>발화 순서대로 단어가 크기와 각도를 바꾸며 화면 공간을 채워 하나의 타이포 포스터가 되는 구성 | Pending · 준비 중 |
| 109 | [Split Flap Display · 분할 플랩 문자판](../effects/split-flap/) | The top and bottom halves of each character card flip along a hinge to form a new glyph.<br>글자판의 위아래 반쪽이 경첩을 따라 넘어가며 새 글자가 만들어지는 기계식 문자판 | Pending · 준비 중 |
| 110 | [Strikethrough Replace · 취소선 교체](../effects/strikethrough-replace/) | A strikethrough is drawn over the old text, then the new text appears beside or below it.<br>기존 문구에 취소선이 그어진 뒤 새 문구가 옆이나 아래에 나타나는 교체 효과 | Pending · 준비 중 |
| 111 | [Text Scatter Assemble · 흩어진 글자 조립](../effects/text-scatter-assemble/) | Letters scattered around the frame fly in and settle into a readable sentence.<br>사방에 흩어진 글자가 제자리로 모여 읽을 수 있는 문장이 되는 효과 | Pending · 준비 중 |
| 112 | [Text Wave · 글자 웨이브](../effects/text-wave/) | A narrow wave sweeps a sentence and lifts only the glyphs it passes.<br>좁은 파동이 문장을 훑으며 걸린 글자만 잠깐 올라갔다 돌아오는 효과 | Pending · 준비 중 |
| 113 | [Text Window Fill · 글자 속 영상](../effects/text-window-fill/) | The letter outlines stay fixed while video or color flows only inside them.<br>글자 외곽은 고정하고 그 안쪽에서만 영상이나 색 곡선이 움직이는 효과 | Pending · 준비 중 |
| 114 | [Tracking Reveal · 자간 공개](../effects/tracking-reveal/) | Widely spaced letters tighten together until the title settles into one compact unit.<br>넓게 벌어져 있던 글자 사이 간격이 줄어들며 제목이 한 덩어리로 정돈되는 효과 | Pending · 준비 중 |
| 115 | [Variable Font Axis Morph · 가변 글꼴 축 변형](../effects/variable-font-axis-morph/) | A word's weight and width change continuously, shifting its intensity and character.<br>한 단어의 굵기와 너비가 연속으로 변하며 강도와 성격을 바꾸는 가변 폰트 변형 | Pending · 준비 중 |
| 116 | [Variable Font Weight Wave · 가변 글꼴 두께 파동](../effects/variable-font-weight-wave/) | A wave of weight and slant passes through the letters of a variable font.<br>굵기와 기울기의 봉우리가 글자를 차례로 지나가는 가변 폰트 파동 | Pending · 준비 중 |
| 117 | [Word Relay · 단어 릴레이](../effects/word-relay/) | One big word enters from the right, pauses at center, exits left, and the next word takes over.<br>큰 단어 하나가 오른쪽에서 들어와 중앙에서 멈췄다가 왼쪽으로 나가고 다음 단어가 이어받는 릴레이 | Pending · 준비 중 |
| 118 | [Word Rise Fade · 단어 떠오르기](../effects/word-rise-fade/) | Words rise slightly while shedding blur, settling into place one after another.<br>단어가 흐림을 벗으며 조금씩 위로 올라와 제자리에 자리 잡는 순차 공개 | Pending · 준비 중 |
| 119 | [Word Slot Cycle · 고정 슬롯 단어 순환](../effects/word-slot-cycle/) | The fixed part of a sentence stays put while one word slot cycles through alternatives.<br>문장의 고정 부분은 그대로 두고 한 단어 자리만 다른 단어로 순환해 바뀌는 효과 | Pending · 준비 중 |

<a id="family-transitions"></a>

## TRANSITIONS · 전환·컷

| Nº | Effect · 효과 | Definition · 정의 | Clip · 클립 |
|---|---|---|---|
| 120 | [Crossfade · 크로스페이드](../effects/crossfade/) | Scene A fades out as scene B fades in at the same time.<br>장면 A의 불투명도가 낮아지는 동안 장면 B의 불투명도가 함께 높아지는 전환 | [MP4](../effects/crossfade/clip.mp4) |
| 121 | [Push · 푸시 전환](../effects/push-transition/) | An incoming scene pushes the existing scene out by the same amount in the same direction.<br>새 장면이 들어오는 만큼 기존 장면을 같은 방향으로 밀어내는 전환 | [MP4](../effects/push-transition/clip.mp4) |
| 122 | [Wipe · 와이프](../effects/wipe/) | A moving boundary progressively reveals the new scene behind it.<br>이동하는 경계 뒤로 새 장면을 순서대로 공개하는 전환 | [MP4](../effects/wipe/clip.mp4) |
| 123 | [Shape Mask Transition · 마스크 전환](../effects/iris-mask/) | A circular mask expands from a point to reveal the next scene.<br>한 점에서 원형 마스크가 커지며 다음 장면을 드러내는 전환 | [MP4](../effects/iris-mask/clip.mp4) |
| 124 | [Match Cut · 매치컷](../effects/match-cut/) | Matching shapes at the same position and size connect two scenes across a cut.<br>컷 앞뒤에서 같은 위치와 크기의 형태를 이어 두 장면을 연결하는 전환 | [MP4](../effects/match-cut/clip.mp4) |
| 125 | [Morph · 모프 전환](../effects/shape-morph/) | The same element changes shape and color to become a component of the next scene.<br>같은 요소의 형태와 색을 바꿔 다음 장면의 구성 요소로 이어지는 전환 | [MP4](../effects/shape-morph/clip.mp4) |
| 126 | [Whip Pan · 휩팬](../effects/whip-pan/) | A rapid horizontal sweep with horizontal blur and sharp deceleration settles into the next scene.<br>장면을 빠르게 수평으로 쓸며 가로 블러와 급감속으로 다음 장면에 안착하는 전환 | [MP4](../effects/whip-pan/clip.mp4) |
| 127 | [Zoom Through · 줌 전환](../effects/zoom-through/) | The opening in the letter O enlarges to carry the viewer through to the next scene inside it.<br>글자 O의 구멍을 확대해 그 안의 다음 장면으로 통과하는 전환 | [MP4](../effects/zoom-through/clip.mp4) |
| 128 | [Blur Dissolve · 블러 디졸브](../effects/blur-dissolve/) | Two scenes overlap while blurred, swap, and the new scene sharpens back into focus.<br>두 장면이 흐려진 채 겹쳐 교체되고 새 장면이 다시 선명해지는 전환 | [MP4](../effects/blur-dissolve/clip.mp4) |
| 129 | [Bounce Transition · 바운스 전환](../effects/bounce-transition/) | The scene boundary drops, bounces off the floor several times with a trailing shadow, and reveals the new scene.<br>장면 경계가 아래로 떨어져 바닥에서 여러 번 튀고 그림자가 뒤따르며 새 장면을 보여준다 | Pending · 준비 중 |
| 130 | [Burn Transition · 번 전환](../effects/burn-transition/) | An irregular edge burns outward, erasing the old scene and revealing the next, leaving a hot glow along the border.<br>불규칙한 경계가 타들어 가듯 퍼지며 앞 장면을 지우고 다음 장면을 드러내는 전환 | Pending · 준비 중 |
| 131 | [Chromatic Wipe · 크로매틱 와이프](../effects/chromatic-wipe/) | Color channels split apart as the frame slides away, then recombine on the new frame.<br>색 채널이 벌어지며 화면이 밀려 나가고 새 화면에서 다시 합쳐지는 전환 | Pending · 준비 중 |
| 132 | [Clock Wipe · 클록 와이프](../effects/clock-wipe/) | A rotating pie-shaped edge sweeps from the center and reveals the next scene.<br>중심에서 회전하는 부채꼴 경계가 다음 장면을 드러내는 와이프 | Pending · 준비 중 |
| 133 | [Column Melt · 컬럼 멜트](../effects/column-melt/) | A scene is cut into vertical strips that drop at different speeds, revealing the next scene like a melting screen.<br>세로로 잘린 화면 띠들이 서로 다른 속도로 아래로 내려가 다음 장면을 드러낸다 | Pending · 준비 중 |
| 134 | [Cube Transition · 큐브 전환](../effects/cube-transition/) | Two scenes rotate in perspective like neighboring faces of a cube, with a hint of floor reflection.<br>두 장면이 큐브의 이웃 면처럼 원근을 가지며 회전해 교체되고 바닥 반사가 보인다 | Pending · 준비 중 |
| 135 | [Dip to Color · 딥 투 컬러](../effects/dip-to-color/) | The outgoing scene fades into a flat color, then the next scene rises out of that same color.<br>앞 장면이 단색으로 사라진 뒤 같은 색에서 다음 장면이 나타나는 전환 | Pending · 준비 중 |
| 136 | [Flash Transition · 플래시 전환](../effects/flash-transition/) | A white flash covers the frame, the scene changes at the peak, and brightness recovers.<br>흰색 섬광이 화면을 덮는 순간 장면이 바뀌고 밝기가 돌아오는 전환 | [MP4](../effects/flash-transition/clip.mp4) |
| 137 | [Halftone Dissolve · 하프톤 디졸브](../effects/halftone-dissolve/) | Circular holes on a grid grow and merge to reveal the next scene.<br>격자의 원형 구멍이 커지고 이어져 다음 장면을 드러내는 전환 | Pending · 준비 중 |
| 138 | [Page Turn · 페이지 턴](../effects/page-turn/) | A page corner curls up, exposing the back and a soft shadow, and turns to the next screen.<br>페이지 한쪽이나 모서리가 접히고 말려 올라가 뒷면과 그림자를 드러내며 다음 화면으로 넘어간다 | [MP4](../effects/page-turn/clip.mp4) |
| 139 | [Perspective Swap · 원근 카드 스왑](../effects/perspective-swap/) | Two scenes swap left-right and front-back like perspective cards, with reflections following.<br>두 장면이 원근을 가진 카드처럼 좌우와 앞뒤 자리를 바꾸고 반사가 따라간다 | Pending · 준비 중 |
| 140 | [Ripple Dissolve · 리플 디졸브](../effects/ripple-dissolve/) | Concentric ripples spread from one point, bending the frame while revealing the next scene.<br>한 지점에서 퍼지는 동심 파문이 화면을 휘게 하며 다음 장면을 드러내는 전환 | Pending · 준비 중 |
| 141 | [Rotating Tile Dissolve · 회전 타일 디졸브](../effects/rotating-tile-dissolve/) | Tiled copies of the frame rotate around the origin while the next scene blends in.<br>반복된 영상 타일이 원점 주변으로 회전하며 다음 장면으로 섞인다 | Pending · 준비 중 |
| 142 | [Scale Swap · 스케일 스왑](../effects/scale-swap/) | The old element shrinks toward a pivot while the new one grows in to take its place.<br>기존 장면이 기준점으로 줄어드는 동안 새 장면이 커져 그 자리를 잇는 전환 | [MP4](../effects/scale-swap/clip.mp4) |
| 143 | [Split Slide · 스플릿 슬라이드](../effects/split-slide/) | Two halves of the frame slide apart or together in opposite directions and swap scenes.<br>두 반쪽 장면이 서로 반대쪽으로 벌어지거나 모여 다음 장면과 교체된다 | [MP4](../effects/split-slide/clip.mp4) |
| 144 | [Squeeze Transition · 스퀴즈 전환](../effects/squeeze-transition/) | The outgoing scene is squashed along one axis while the next scene unfolds from the same edge.<br>앞 장면의 한 축이 눌려 사라지고 다음 장면이 같은 축으로 펼쳐지는 전환 | Pending · 준비 중 |
| 145 | [Stereo Viewer Swap · 스테레오 뷰어 전환](../effects/stereo-viewer-swap/) | The scene shrinks into a rounded window, two copies rotate apart, and after a dark gap the new scene opens and zooms back up.<br>장면이 둥근 모서리의 작은 창으로 축소되고 두 복제 창이 화면 밖 축을 따라 반대 방향으로 회전해 갈라진다. 검은 중간 구간 뒤 두 마스크가 새 장면을 드러내고 화면이 확대된다 | Pending · 준비 중 |
| 146 | [Tangent Motion Blur Spin · 회전 블러 전환](../effects/tangent-blur-spin/) | The scene spins around a corner and smears along the tangent of its path as it is replaced.<br>장면이 모서리를 중심으로 회전하고 회전 궤도의 접선 방향으로 길게 흐려지며 교체된다 | Pending · 준비 중 |
| 147 | [Additive Dissolve · 가산 디졸브](../effects/additive-dissolve/) | The bright colors of two scenes add together, brightening the middle before settling to the next scene.<br>두 장면의 밝은 색이 더해져 중간이 밝아졌다가 다음 장면 밝기로 돌아온다 | Pending · 준비 중 |
| 148 | [Band Slide · 밴드 슬라이드](../effects/band-slide/) | Video bands split horizontally or vertically slide at slightly different timings to reveal the next screen.<br>가로나 세로로 나눈 영상 띠가 조금씩 다른 시점이나 방향으로 이동하며 다음 화면이 나타난다 | [MP4](../effects/band-slide/clip.mp4) |
| 149 | [Channel Phase Dissolve · 색 채널 순차 디졸브](../effects/channel-phase-dissolve/) | Red, green, and blue channels hand over to the new scene at different times.<br>빨강과 초록과 파랑 채널이 서로 다른 시점에 새 장면으로 넘어가는 전환 | Pending · 준비 중 |
| 150 | [Chapter Interstitial · 챕터 인터스티셜](../effects/chapter-interstitial/) | A step-title card appears between scenes, holds briefly, then hands off to the next scene.<br>장면 사이에 단계 제목 카드가 나타나 잠시 유지된 뒤 다음 장면으로 넘어간다 | [MP4](../effects/chapter-interstitial/clip.mp4) |
| 151 | [Clone Wall Wipe · 타일 월 와이프](../effects/clone-wall-wipe/) | A wall of tiles repeating the same word fills the frame, inverts, then clears.<br>같은 단어의 타일 벽이 화면을 채우고 반전된 뒤 걷히는 전환 | Pending · 준비 중 |
| 152 | [Color Distance Dissolve · 색차 디졸브](../effects/color-distance-dissolve/) | Areas where the two scenes differ most in color swap at different speeds from areas where they match.<br>두 장면의 색 차이가 큰 부분과 작은 부분이 서로 다른 속도로 교체되는 전환 | Pending · 준비 중 |
| 153 | [Cross Cutting · 교차 편집](../effects/cross-cutting/) | Scenes from two places or actions are shown alternately.<br>두 장소나 두 행동의 장면을 번갈아 보여준다 | Pending · 준비 중 |
| 154 | [Cutaway · 컷어웨이](../effects/cutaway/) | The main action is interrupted by a brief related shot or reaction, then it returns.<br>주행동을 보여주다가 관련 대상이나 반응 장면을 잠깐 삽입하고 원래 행동으로 돌아온다 | Pending · 준비 중 |
| 155 | [Datamosh Transition · 데이터모시 전환](../effects/datamosh-transition/) | Horizontal strips and vertical slits tear, old footage residue smears, and the next screen takes over.<br>가로 띠와 세로 틈이 찢기고 이전 영상 잔해가 늘어 붙으며 다음 화면으로 바뀐다 | Pending · 준비 중 |
| 156 | [Edge Trace Stylization · 윤곽 추출 스타일 전환](../effects/edge-trace-transition/) | The photo's surfaces vanish, leaving only edges as a line drawing.<br>사진의 면이 사라지고 경계선만 남은 선화로 바뀌는 윤곽 추출 전환 | Pending · 준비 중 |
| 157 | [Exit Before Enter · 퇴장 후 등장](../effects/exit-before-enter/) | The previous element fully disappears before the new one appears.<br>이전 요소가 완전히 사라진 다음에야 새 요소가 나타나는 순차 교체 | Pending · 준비 중 |
| 158 | [Eyeline Match · 시선 연결 컷](../effects/eyeline-match/) | After a person looks off-screen, the object in that direction appears.<br>인물이 화면 밖을 보는 장면 다음에 그 시선 방향의 대상이 나타난다 | Pending · 준비 중 |
| 159 | [Fly Eye Transition · 플라이 아이 전환](../effects/fly-eye-transition/) | The frame breaks into tiny lenses that magnify and refract, split colors, and cross into the next scene.<br>영상이 작은 렌즈들로 쪼개져 확대 굴절되고 색이 분리되며 교차하는 전환 | Pending · 준비 중 |
| 160 | [Frame Border Transition · 프레임 테두리 전환](../effects/frame-border-transition/) | A thick frame or border moves or grows to hide the cut and enclose the new screen.<br>두꺼운 프레임이나 테두리가 이동하거나 커져 컷을 가리고 새 화면을 둘러싼다 | Pending · 준비 중 |
| 161 | [Freeze Cut · 프리즈 컷](../effects/freeze-cut/) | A moment of action freezes and holds briefly before the scene changes.<br>동작의 한 순간이 멈춰 짧게 유지된 뒤 다른 장면으로 바뀐다 | Pending · 준비 중 |
| 162 | [Freeze Frame Dressing · 프리즈 프레임 장식](../effects/freeze-frame-dressing/) | Motion freezes on the beat and paper, tape, and labels stick around the frozen subject.<br>움직임이 박자에 멈추고 종이, 테이프, 라벨이 정지된 인물 주변에 붙는 연출 | Pending · 준비 중 |
| 163 | [Glitch Transition · 글리치 전환](../effects/glitch-transition/) | Video blocks momentarily misalign and color channels or ghosts break apart while the scene is replaced.<br>영상 블록이 순간적으로 어긋나고 색 채널이나 잔상이 깨지는 동안 다음 장면으로 교체된다 | [MP4](../effects/glitch-transition/clip.mp4) |
| 164 | [Gravitational Lens Transition · 중력 렌즈 전환](../effects/gravitational-lens/) | The frame bends around the center, light gathers into a ring, and it resolves into the new frame.<br>중심 주변 화면이 휘고 빛이 고리로 모였다 새 화면으로 풀리는 전환 | Pending · 준비 중 |
| 165 | [Grayscale Dissolve · 흑백 디졸브](../effects/grayscale-dissolve/) | Saturation drains from both scenes mid-transition, they blend in black and white, then color returns on the new scene.<br>두 장면의 채도가 중간에 사라져 흑백으로 섞인 뒤 새 장면의 색이 돌아오는 전환 | Pending · 준비 중 |
| 166 | [Grid Flip · 그리드 플립](../effects/grid-flip/) | Rectangular tiles cut from the scene flip in sequence to reveal the next scene on their backs.<br>장면을 나눈 사각 타일이 순차로 뒤집혀 뒷면의 다음 장면을 보여주는 전환 | [MP4](../effects/grid-flip/clip.mp4) |
| 167 | [Hard Cut · 하드컷](../effects/hard-cut/) | Switches straight to the next picture with no overlap.<br>겹침 없이 바로 다음 화면으로 바꾸는 편집 | Pending · 준비 중 |
| 168 | [Held Scene Overlap · 이전 장면 유지 전환](../effects/held-scene-overlap/) | While the next scene starts, the previous scene's motion is held briefly, and the new scene is revealed at the end of the delay.<br>다음 장면이 시작되는 동안 이전 장면의 움직임을 잠시 유지하고 지연 구간 끝에서 새 장면을 공개한다 | Pending · 준비 중 |
| 169 | [HSV Dissolve · HSV 디졸브](../effects/hsv-dissolve/) | Hue travels along the color wheel while scenes mix, with saturation and brightness shifting together.<br>장면을 섞는 동안 색상이 색상환을 따라 변하고 채도와 밝기가 함께 바뀌는 전환 | Pending · 준비 중 |
| 170 | [Insert Shot · 인서트 컷](../effects/insert-shot/) | A close-up of a hand or object briefly cuts in between wide action.<br>전체 행동 사이에 같은 공간의 손이나 물건 같은 세부 화면이 짧게 들어간다 | Pending · 준비 중 |
| 171 | [Jump Cut · 점프 컷](../effects/jump-cut/) | The person or state jumps instantly within the same framing.<br>같은 구도의 장면에서 인물 위치나 상태가 순간적으로 건너뛰어 바뀐다 | Pending · 준비 중 |
| 172 | [Kaleidoscope Transition · 칼레이도스코프 전환](../effects/kaleidoscope-transition/) | The picture folds into symmetric fragments, rotates, blends into the next scene, and unfolds back to a normal frame.<br>영상이 대칭 조각으로 접히고 회전하며 다음 장면으로 섞인 뒤 원래 화면으로 돌아오는 전환 | Pending · 준비 중 |
| 173 | [Lens Flare Transition · 렌즈 플레어 전환](../effects/lens-flare-transition/) | A strong light point and optical rings cross the frame, cover the cut, and fade away.<br>강한 광점과 광학 링이 화면을 가로질러 컷을 덮은 뒤 사라진다 | Pending · 준비 중 |
| 174 | [Light Leak Transition · 라이트 리크 전환](../effects/light-leak-transition/) | A wide, irregular patch of colored light blooms across the frame, hides the cut, and fades.<br>넓고 불규칙한 유색 빛 얼룩이 화면에 번져 컷을 가리고 사라지는 전환 | Pending · 준비 중 |
| 175 | [Light Ray Transition · 광선 전환](../effects/light-ray-transition/) | Rays extend from a single point, cover the frame, and clear to the next scene.<br>한 지점에서 광선이 길게 뻗어 화면을 덮고 다음 장면으로 걷힌다 | Pending · 준비 중 |
| 176 | [Luma Wipe · 루마 와이프](../effects/luma-wipe/) | Regions swap to the next scene in the brightness order of the footage itself or a grayscale helper image.<br>장면이나 흑백 보조 이미지의 밝기 순서에 따라 영역들이 다음 장면으로 교체되는 와이프 | Pending · 준비 중 |
| 177 | [Luminance Melt · 루미넌스 멜트](../effects/luminance-melt/) | Regions melt away upward or downward following the frame's brightness and noise, and the new scene takes over.<br>장면의 밝기와 노이즈를 따라 영역이 위나 아래로 녹아내리듯 새 장면으로 바뀌는 전환 | Pending · 준비 중 |
| 178 | [Match on Action · 동작 연결 컷](../effects/match-on-action/) | Objects or camera before and after a cut move in the same screen direction and speed flow, so two scenes read as one action.<br>컷 앞뒤의 물체나 카메라가 같은 화면 방향과 속도 흐름으로 이어져, 다른 장면이 하나의 동작처럼 보인다 | Pending · 준비 중 |
| 179 | [Mirror Transition · 미러 전환](../effects/mirror-transition/) | The video is mirrored or duplicated, folded to the center, then unfolded into the next video.<br>영상이 대칭 반사되거나 복제되어 중앙으로 접힌 뒤 다음 영상으로 풀린다 | Pending · 준비 중 |
| 180 | [Montage · 몽타주](../effects/montage/) | Several short images cut in succession, compressing a long process or theme.<br>여러 짧은 이미지가 연달아 바뀌며 긴 과정이나 주제를 압축한다 | Pending · 준비 중 |
| 181 | [Morph Match Cut · 매치컷 모프](../effects/morph-match-cut/) | A vermilion circle hard-cuts to a serif letter O at the same position and size, then the O morphs into a 62% donut chart.<br>주홍 원이 같은 자리·같은 크기의 글자 O로 한 프레임에 컷되고, 그 O가 도넛 차트로 모프된다. | [MP4](../effects/morph-match-cut/clip.mp4) |
| 182 | [Mosaic Traversal · 모자이크 이동 전환](../effects/mosaic-traverse/) | The footage spreads into cloned tiles, travels along the tile grid, and enters the new scene.<br>영상이 여러 복제 타일로 펼쳐지고 타일 좌표를 따라 이동하며 새 장면으로 들어가는 전환 | Pending · 준비 중 |
| 183 | [Multiply Dissolve · 멀티플라이 디졸브](../effects/multiply-dissolve/) | The two scenes multiply into a darker midpoint, then the brightness of the next scene returns.<br>두 장면이 중간에서 곱셈 합성으로 어두워졌다가 다음 장면의 밝기로 돌아오는 전환 | Pending · 준비 중 |
| 184 | [Noise Dissolve Transition · 노이즈 디졸브 전환](../effects/noise-dissolve/) | Pixels whose noise value falls below the progress disappear first, so blotchy holes spread through the first scene and reveal the next.<br>노이즈 값이 진행률보다 낮은 픽셀부터 지워져 앞 장면에 얼룩진 구멍이 번지고 다음 장면이 드러난다 | [MP4](../effects/noise-dissolve/clip.mp4) |
| 185 | [Origami Fold Transition · 종이 접기 전환](../effects/origami-fold/) | The scene folds into several panels and shrinks, and the new scene unfolds from the folded faces.<br>장면이 여러 면으로 접혀 작아지고 새 장면이 접힌 면에서 펼쳐진다 | Pending · 준비 중 |
| 186 | [Outline Dissolve · 윤곽 디졸브](../effects/outline-dissolve/) | The scene loses its fill colors, leaving only bright outlines, then the new scene fills back in with color.<br>장면의 면 색이 사라져 밝은 윤곽만 남았다가 새 장면의 면 색이 다시 채워진다 | Pending · 준비 중 |
| 187 | [Overlay Bridge · 오버레이 브리지](../effects/overlay-bridge/) | The same foreground graphic sweeps across the scenes before and after a cut, tying them together.<br>같은 전면 그래픽이 컷 앞뒤 장면 위를 끊기지 않고 지나가 두 장면을 연결한다 | Pending · 준비 중 |
| 188 | [Paint Splatter Wipe · 페인트 스플래터 와이프](../effects/paint-splatter-wipe/) | Irregular paint blobs and dots spread and reveal the next scene.<br>불규칙한 페인트 얼룩과 점이 번져 다음 장면을 드러낸다 | Pending · 준비 중 |
| 189 | [Phosphor Trail Dissolve · 잔광 디졸브](../effects/phosphor-dissolve/) | Trails of light from bright objects linger as the previous screen changes to the next.<br>밝은 물체의 빛 자국이 오래 남는 동안 이전 화면이 다음 화면으로 바뀐다 | Pending · 준비 중 |
| 190 | [Reaction Cut · 리액션 컷](../effects/reaction-cut/) | After an event or line, the view cuts to the face or reaction of someone who saw it.<br>사건이나 발언 다음에 그것을 본 사람의 얼굴 또는 반응 화면으로 컷한다 | Pending · 준비 중 |
| 191 | [Retreat and Cover · 축소 후 덮기](../effects/retreat-cover/) | The previous scene shrinks and darkens while the new scene slides in and covers it.<br>이전 장면이 작아지고 어두워지는 동안 새 장면이 들어와 덮는 전환 | Pending · 준비 중 |
| 192 | [Ring Zoom · 링 줌](../effects/ring-zoom/) | Concentric rings show the footage at different magnifications, and the scene is replaced from the center.<br>동심원 띠마다 서로 다른 확대율로 영상이 보이며 중심에서 장면이 교체되는 전환 | Pending · 준비 중 |
| 193 | [Scribble Wipe · 스크리블 와이프](../effects/scribble-wipe/) | Scribble strokes stack up quickly to cover the frame, then wipe away to show the next scene.<br>낙서 띠가 빠르게 쌓여 화면을 덮고 지워지며 다음 장면을 보여주는 전환 | Pending · 준비 중 |
| 194 | [Shader Directional Warp Wipe · 셰이더 와이프](../effects/shader-wipe/) | A soft, bent diagonal edge sweeps across the frame while both plates near the edge stretch and smear along the direction of travel.<br>휘어진 부드러운 대각 경계가 화면을 쓸고 지나가며, 경계 근처의 두 도판이 진행 방향으로 늘어나 번진다 | [MP4](../effects/shader-wipe/clip.mp4) |
| 195 | [Shatter Transition · 샤터 전환](../effects/shatter-transition/) | The frame or object splits into small fragments that scatter and reveal the next scene; in reverse, fragments gather into the new scene.<br>화면이나 물체가 작은 조각으로 갈라져 흩어지며 다음 장면을 드러내는 전환 | Pending · 준비 중 |
| 196 | [Shot Reverse Shot · 숏 리버스 숏](../effects/shot-reverse-shot/) | Opposite viewpoints of two speaking people alternate with speech and reaction.<br>대화하는 두 사람의 반대 방향 시점이 발언과 반응에 맞춰 번갈아 나타난다 | Pending · 준비 중 |
| 197 | [Smash Cut · 스매시 컷](../effects/smash-cut/) | Two strongly contrasting scenes swap instantly without warning.<br>강하게 대비되는 밝기와 장소 또는 상황의 장면이 예고 없이 즉시 맞바뀐다 | Pending · 준비 중 |
| 198 | [Solarized Dissolve · 솔라리제이션 디졸브](../effects/solarized-dissolve/) | The scene passes through a high-contrast state with part of the colors and brightness inverted, then changes to the next scene.<br>색과 밝기의 일부가 반전된 고대비 상태를 지나 다음 장면으로 바뀐다 | Pending · 준비 중 |
| 199 | [Speed Ramp · 스피드 램프](../effects/speed-ramp/) | Vary playback speed to slow down the peak of an action and accelerate surrounding movement.<br>이미 진행 중인 동작이나 영상의 재생 속도가 느려졌다 빨라지며 중요한 순간에 다시 감속한다. | Pending · 준비 중 |
| 200 | [J-cut and L-cut · J컷과 L컷](../effects/split-edit/) | Sound changes before the picture (J-cut) or the old sound continues after the picture changes (L-cut).<br>장면 경계에서 소리가 먼저 바뀌고 화면이 뒤따르거나(J컷), 화면이 바뀐 뒤 이전 소리가 이어지는(L컷) 편집 | Pending · 준비 중 |
| 201 | [Split Panel Handoff · 분할 패널 전환](../effects/split-panel-handoff/) | The title splits apart vertically and a panel grows from the opening to take over the screen.<br>제목이 위아래로 갈라져 나가고 생긴 빈 공간에서 패널이 커져 화면을 차지하는 전환 | Pending · 준비 중 |
| 202 | [Static Band Wipe · 노이즈 띠 와이프](../effects/static-band-wipe/) | A horizontal noise band sweeps up or down, and everything behind it becomes the next scene.<br>가로 잡음 띠가 위아래로 지나가며 띠 뒤쪽이 다음 장면으로 바뀐다 | Pending · 준비 중 |
| 203 | [Swirl Transition · 스월 전환](../effects/swirl-transition/) | The frame twists into a whirlpool around one point, then untwists on the next scene.<br>화면이 한 지점을 중심으로 소용돌이처럼 비틀려 들어가고 다음 장면에서 풀리는 전환 | Pending · 준비 중 |
| 204 | [Time Compression · 시간 압축](../effects/time-compression/) | A long wait or repeated action is sped up or cut out so the piece jumps to the result, with a speed or ellipsis marker.<br>긴 대기나 반복 동작을 빠르게 진행하거나 중간 구간을 잘라 결과로 넘어가고 배속이나 생략 표식을 함께 띄우는 표현 | Pending · 준비 중 |
| 205 | [Tinted Burn Dissolve · 색조 번 디졸브](../effects/tinted-burn-dissolve/) | The previous scene's color shifts to a hot tint as it blends into the next scene.<br>이전 장면의 색이 뜨거운 색조로 바뀌면서 다음 장면으로 섞이는 전환 | Pending · 준비 중 |
| 206 | [Translate Fade · 이동 교차 페이드](../effects/translate-fade/) | The old element moves off to the next position while fading, and the new one sharpens in the same travel zone.<br>이전 대상이 다음 위치로 이동하며 옅어지고 같은 이동 영역에서 새 대상이 선명해진다 | Pending · 준비 중 |
| 207 | [TV Static Transition · TV 노이즈 전환](../effects/tv-static-transition/) | Gray noise covers the screen briefly or blends with the scene before the next one appears.<br>무채색 잡음이 화면을 잠깐 덮거나 장면과 섞인 뒤 다음 장면이 나타난다 | Pending · 준비 중 |
| 208 | [TV Tracking Transition · TV 트래킹 전환](../effects/tv-tracking-transition/) | Some horizontal scan lines wobble sideways, dark scan bars appear, and the scenes cross over.<br>가로 주사선 일부가 옆으로 흔들리고 어두운 스캔선이 생기며 장면이 교차한다 | Pending · 준비 중 |
| 209 | [Warp Dissolve · 워프 디졸브](../effects/warp-dissolve/) | The outgoing and incoming scenes bend and stretch in opposite directions as they swap, then the warp relaxes.<br>앞 장면과 뒤 장면이 서로 반대 방향으로 휘고 늘어나며 교체되는 전환 | Pending · 준비 중 |
| 210 | [Wave Dissolve · 웨이브 디졸브](../effects/wave-dissolve/) | The whole frame bends and sways in periodic waves while the two scenes blend.<br>화면 전체가 주기적인 물결로 휘고 흔들리는 동안 두 장면이 섞이는 전환 | Pending · 준비 중 |
| 211 | [Wind Wipe · 윈드 와이프](../effects/wind-wipe/) | The edge extends a different length on each line, like streaks blown by wind, to reveal the new scene.<br>경계가 줄마다 다른 길이로 뻗어 바람에 흩날리는 선처럼 새 장면을 드러내는 와이프 | Pending · 준비 중 |
| 212 | [Zigzag Wipe · 지그재그 와이프](../effects/zigzag-wipe/) | Interlocking zigzag block boundaries move to reveal the new scene.<br>지그재그로 맞물린 블록 경계가 움직이며 새 장면이 드러난다 | Pending · 준비 중 |
| 213 | [Zoom Flash · 줌 플래시](../effects/zoom-flash/) | The frame zooms in fast and a bright flash carries it into the next scene at the peak.<br>화면이 빠르게 확대되다 밝은 섬광 순간에 다음 장면으로 이어지는 전환 | Pending · 준비 중 |
| 214 | [Zoom Wipe · 줌 와이프](../effects/zoom-wipe/) | Mid-zoom on the center, a straight edge moves across the frame and reveals the new scene.<br>중심 확대가 진행되는 도중 직선 경계가 좌우로 이동해 새 장면을 공개하는 와이프 | [MP4](../effects/zoom-wipe/clip.mp4) |
| 215 | [Text Cutout Zoom · 텍스트 구멍 줌](../effects/text-cutout-zoom/) | A scene shows through a letter-shaped hole, and the hole grows until it fills the frame.<br>글자 모양 구멍으로 다음 장면이 보이다가 구멍이 커져 화면을 채우는 전환 | Pending · 준비 중 |
| 216 | [Text Half Split · 텍스트 반쪽 분리](../effects/text-half-split/) | The top and bottom halves of a phrase split apart and a new phrase closes in from the opposite sides.<br>같은 글자의 위아래 반쪽이 반대 방향으로 벌어지고 새 문구가 모여 교체되는 효과 | Pending · 준비 중 |
| 217 | [Title Card Rhythm · 제목 카드 컷 리듬](../effects/title-card-rhythm/) | Name or title cards appear on a steady beat and are quickly replaced.<br>이름이나 제목 카드가 일정한 박자로 나타나고 짧게 교체되는 타이틀 시퀀스 | Pending · 준비 중 |

<a id="family-camera"></a>

## CAMERA · 가상 카메라

| Nº | Effect · 효과 | Definition · 정의 | Clip · 클립 |
|---|---|---|---|
| 218 | [Ken Burns · 켄 번스](../effects/ken-burns/) | A camera move that slowly zooms into a still image while panning diagonally.<br>한 정지 도판을 천천히 확대하고 비스듬히 옮기는 카메라 움직임 | [MP4](../effects/ken-burns/clip.mp4) |
| 219 | [Pan · 팬](../effects/pan/) | A camera move that scans a wide scene in one direction while keeping the scale constant.<br>확대율을 유지한 채 가로로 긴 장면을 한 방향으로 훑는 카메라 움직임 | [MP4](../effects/pan/clip.mp4) |
| 220 | [Parallax · 패럴랙스](../effects/parallax/) | A motion effect that creates depth by moving nearer layers faster and distant layers more slowly as the camera moves.<br>카메라가 이동할 때 가까운 층은 빠르게, 먼 층은 느리게 흘러 깊이를 만드는 움직임 | [MP4](../effects/parallax/clip.mp4) |
| 221 | [Push-in · 푸시인](../effects/push-in/) | A camera move that slowly approaches a fixed focal point in a sentence or scene.<br>문장이나 장면의 특정 중심을 유지하면서 카메라가 천천히 다가가는 움직임 | [MP4](../effects/push-in/clip.mp4) |
| 222 | [Rack Focus · 랙 포커스](../effects/rack-focus/) | A focus shift that swaps sharpness between foreground and background subjects without changing their positions.<br>위치를 움직이지 않고 앞뒤 대상의 선명함을 교환하는 초점 이동 | [MP4](../effects/rack-focus/clip.mp4) |
| 223 | [Zoom to Detail · 좌표 줌](../effects/zoom-to-detail/) | A motion that centers and enlarges a specific coordinate in an overview diagram to reveal detail.<br>전체 도해의 특정 좌표를 화면 중심으로 옮기며 확대하고 세부 정보를 드러내는 움직임 | [MP4](../effects/zoom-to-detail/clip.mp4) |
| 224 | [Camera Fly-through · 카메라 비행](../effects/camera-flight/) | Move the camera through connected positions while directing its gaze toward the destination.<br>카메라가 여러 위치와 바라보는 방향을 이어 공간 안을 이동한다. 물체나 터널 사이를 지나 다음 대상 앞에 안착한다. | Pending · 준비 중 |
| 225 | [Camera Follow · 카메라 추적](../effects/camera-follow/) | Follow a moving subject by shifting the world in the opposite direction.<br>움직이는 대상이 정해진 화면 위치에 머물도록 화면의 크롭이나 배경이 반대 방향으로 이동한다. 대상이 안전 영역을 벗어날 때만 구도를 따라잡는 방식도 쓴다. | Pending · 준비 중 |
| 226 | [Camera Orbit · 카메라 오빗](../effects/camera-orbit/) | Orbit a centered subject to reveal its shape and changing background relationships.<br>대상이 중앙에 머무는 동안 시점이 주변을 돌아 옆면과 배경 관계가 바뀐다. 구형 지도는 회전으로 목적지를 정면에 맞출 수 있다. | Pending · 준비 중 |
| 227 | [Camera Shake · 카메라 셰이크](../effects/camera-shake/) | Shake the entire scene with small translations and rotations that decay after impact.<br>화면 전체가 작은 이동과 회전으로 흔들리며 충격 뒤에는 진폭이 줄어든다. | Pending · 준비 중 |
| 228 | [Crane Tilt · 크레인 틸트](../effects/crane-tilt/) | Move the viewpoint vertically while changing its viewing angle.<br>시점이 위아래로 이동하는 동시에 보는 각도가 바뀌어 높은 전경과 대상의 눈높이를 이어 준다. | Pending · 준비 중 |
| 229 | [Dolly Zoom · 돌리 줌](../effects/dolly-zoom/) | Keep the subject size fixed while camera distance and field of view change together.<br>주대상의 화면 크기는 유지되지만 배경의 원근과 압축감이 크게 변한다. | Pending · 준비 중 |
| 230 | [Fly-to · 플라이 투](../effects/fly-to/) | Zoom out from one place, travel across the wider view, then zoom into the destination.<br>시점이 출발 지역에서 줌아웃하고 넓어진 시야로 이동한 뒤 목표 지역에 다시 줌인한다. | Pending · 준비 중 |
| 231 | [Frame Scrub · 프레임 스크럽](../effects/frame-scrub/) | Map progress to an image or video frame, including reverse scrubbing.<br>스크롤이나 진행값에 맞춰 연속 이미지 또는 영상의 프레임이 앞뒤로 바뀐다. | Pending · 준비 중 |
| 232 | [Giant Mask Reveal · 대형 마스크 리빌](../effects/giant-mask-reveal/) | A frame-filling 939 acts as a window onto an editorial world, and the camera dives into a stroke until the whole world is revealed.<br>화면을 채운 큰 숫자 939가 창이 되어 안쪽 세계를 비추고, 카메라가 획 속으로 파고들어 세계 전체가 드러난다. | [MP4](../effects/giant-mask-reveal/clip.mp4) |
| 233 | [Infinite Canvas Pan · 무한 캔버스 팬](../effects/infinite-pan/) | A continuous 5,400px camera pan across six editorial plates settles on a scarlet focus.<br>여섯 도판이 이어진 긴 지면을 가로 5400px 이동해 마지막 초점에 멈춘다 | [MP4](../effects/infinite-pan/clip.mp4) |
| 234 | [Infinite Zoom · 무한 줌 스루](../effects/infinite-zoom/) | Dive into a scarlet dot three times as nested plates expand through a continuous 2,744× zoom.<br>작은 주홍 점 속의 다음 도판으로 세 번 연속 파고들며 2744배 확대한다 | [MP4](../effects/infinite-zoom/clip.mp4) |
| 235 | [Lens Distortion Zoom · 렌즈 왜곡 줌](../effects/lens-distortion-zoom/) | Zoom toward the center while radial lens distortion rises and returns to zero.<br>화면 중심이 확대되는 동안 주변 직선이 휘어졌다가 원래 모양으로 돌아온다. | Pending · 준비 중 |
| 236 | [Perspective Tilt Reveal · 3D 원근 틸트 리빌](../effects/perspective-tilt/) | An editorial page tilts back by 55 degrees to reveal its grid before returning to one frontal figure.<br>편집 지면을 55도로 눕혀 전체 격자를 드러내고 한 도판으로 돌아오는 카메라 이동 | [MP4](../effects/perspective-tilt/clip.mp4) |
| 237 | [Screen Shake · 화면 흔들림](../effects/screen-shake/) | The screen or a word trembles side to side briefly and quickly settles.<br>화면이나 단어가 짧게 좌우로 떨리다가 빠르게 안정된다 | Pending · 준비 중 |
| 238 | [Scroll-scrub Cinema Scene · 스크롤 스크럽 시네마](../effects/scroll-scrub-cinema/) | In one pinned scene, a single scroll progress value p drives a title mask reveal, an assembling diagram, and a parallaxing background number together.<br>고정된 장면 하나에서 스크롤 진행률 p 하나가 제목 마스크, 도해 조립, 배경 숫자 패럴랙스를 함께 움직인다. | [MP4](../effects/scroll-scrub-cinema/clip.mp4) |
| 239 | [Vanishing Point Shift · 소실점 이동](../effects/vanishing-point-shift/) | Shift the vanishing point to change the viewpoint without moving the layout substantially.<br>입체 요소의 소실점이 움직여 화면 중심이나 크기를 크게 바꾸지 않고도 바라보는 위치가 달라진다. | Pending · 준비 중 |

<a id="family-data"></a>

## DATA · 데이터

| Nº | Effect · 효과 | Definition · 정의 | Clip · 클립 |
|---|---|---|---|
| 240 | [Annotation Callout · 주석 등장](../effects/annotation-callout/) | An animation that draws a leader line from a point on a chart and then reveals an annotation.<br>그래프의 한 점에서 지시선을 그린 뒤 주석을 보여주는 표현 | [MP4](../effects/annotation-callout/clip.mp4) |
| 241 | [Bar Grow · 막대 성장](../effects/bar-grow/) | An animation in which bars grow from a baseline to lengths proportional to their values.<br>막대가 기준점에서 값에 비례하는 길이까지 자라는 표현 | [MP4](../effects/bar-grow/clip.mp4) |
| 242 | [Count-up · 카운트업](../effects/count-up/) | An animation in which a number increases from 0 to its target value while decelerating.<br>숫자가 0에서 목표값까지 감속하며 증가하는 표현 | [MP4](../effects/count-up/clip.mp4) |
| 243 | [Dot Regroup · 점 재배치](../effects/dot-regroup/) | An animation that moves scattered dots into orderly groups by category.<br>흩어진 점이 분류별 규칙적인 무리로 이동하는 표현 | [MP4](../effects/dot-regroup/clip.mp4) |
| 244 | [Line Draw · 선 그리기](../effects/line-draw/) | An animation that progressively reveals a path from start to finish.<br>선의 시작부터 끝까지 경로를 순서대로 드러내는 표현 | [MP4](../effects/line-draw/clip.mp4) |
| 245 | [Unit Grid Fill · 단위 격자](../effects/unit-grid/) | An animation that fills a specified number of cells in sequence within a grid representing the whole.<br>전체를 나타내는 격자에서 해당 개수만 순서대로 채우는 표현 | [MP4](../effects/unit-grid/clip.mp4) |
| 246 | [Aggregate Split and Merge · 집계 분할과 합치기](../effects/aggregate-split-merge/) | An aggregate mark splits into detailed marks, or detailed marks merge into one aggregate.<br>하나의 집계 도형이 여러 세부 도형으로 갈라지거나 세부 도형들이 하나로 모인다. | Pending · 준비 중 |
| 247 | [Audio Spectrum Visualizer · 오디오 스펙트럼](../effects/audio-spectrum/) | Bars or radial lines change length using precomputed audio band samples.<br>주파수 대역의 막대 또는 방사선 길이가 소리 세기에 따라 변화한다. | Pending · 준비 중 |
| 248 | [Audio Waveform · 오디오 파형](../effects/audio-waveform/) | A line changes over time to display the amplitude of an audio signal.<br>소리의 진폭을 나타내는 선이 시간에 따라 변한다. | Pending · 준비 중 |
| 249 | [Axis Rescaling · 축 범위 전환](../effects/axis-rescale/) | Ticks and gridlines move to a new scale as marks update with them.<br>눈금과 격자선이 새 범위의 위치로 이동하고 필요한 눈금이 나타나거나 사라진다. | Pending · 준비 중 |
| 250 | [Bar Chart Race · 막대 차트 레이스](../effects/bar-chart-race/) | Bar lengths and vertical ranks interpolate between time steps.<br>시계열이 진행하며 막대 길이와 순위가 바뀌고 선두의 강조가 이동한다. | [MP4](../effects/bar-chart-race/clip.mp4) |
| 251 | [Beeswarm Settling · 비즈웜 정착](../effects/beeswarm-settling/) | Nearby observations spread into a non-overlapping band while keeping their value-axis positions.<br>같은 값 근처의 점들이 서로 밀려 겹치지 않는 띠로 정착한다. | Pending · 준비 중 |
| 252 | [Boxplot Update · 상자수염 요약 갱신](../effects/boxplot-update/) | The median, quartiles, and whisker endpoints move to updated summary positions.<br>중앙값 선, 상자 양 끝과 수염 끝점이 새 분포의 요약값 위치로 함께 이동한다. | Pending · 준비 중 |
| 253 | [Brush-linked Update · 브러시 연동 갱신](../effects/brush-linked-update/) | Moving or resizing a brush window updates a linked detail chart.<br>선택 창이 이동하거나 넓어지면 상세 차트가 해당 기간의 데이터로 연속 갱신된다. | Pending · 준비 중 |
| 254 | [Animated Bubble Time Series · 시간별 버블 차트](../effects/bubble-time-series/) | Bubbles change position and area together as the displayed time advances.<br>각 거품의 x와 y 위치 및 면적이 시간별 값에 맞춰 함께 바뀐다. | Pending · 준비 중 |
| 255 | [Bump Chart Reveal · 순위 곡선 전개](../effects/bump-rank-reveal/) | Rank trajectories unfold over time, crossing as items exchange positions.<br>항목들의 순위 선이 시간에 따라 위아래로 교차하며 새로운 구간이 드러난다. | Pending · 준비 중 |
| 256 | [Cartogram Transition · 카토그램 재배열](../effects/cartogram-transition/) | Regions move from geographic positions into a grid or value-sized layout.<br>지역들이 지리적 위치에서 격자나 수치 면적의 위치로 이동하며 동일 지역의 색과 이름이 남는다. | Pending · 준비 중 |
| 257 | [Connected Change Arrows · 변화 방향 화살표](../effects/change-arrows/) | An arrow extends from a fixed previous position toward the updated position.<br>기준 위치에 남은 점에서 새 위치로 선이 늘어나고 화살촉이 끝을 따라 움직인다. | Pending · 준비 중 |
| 258 | [Chart Filter Fade · 차트 필터 페이드](../effects/chart-filter-fade/) | Marks outside a filter fade away while marks matching the new condition appear.<br>조건을 벗어난 점과 선이 흐려지고 새 조건의 항목이 나타난다. | Pending · 준비 중 |
| 259 | [Chart Path Morph · 차트 경로 모프](../effects/chart-path-morph/) | A chart line or area continuously reshapes to match a new dataset.<br>같은 그래프의 선이나 면이 새로운 데이터 모양으로 부드럽게 변한다. | Pending · 준비 중 |
| 260 | [Chart Scrub · 차트 스크럽](../effects/chart-scrub/) | A cursor and linked readout travel across a completed chart.<br>이미 그려진 차트 위를 추적선과 점이 이동하고 현재 위치의 날짜와 값이 함께 바뀐다. | Pending · 준비 중 |
| 261 | [Choropleth Transition · 코로플레스 색상 전환](../effects/choropleth-transition/) | Map regions transition to colors encoded from data values.<br>지도 구역의 색이 데이터 값에 따라 순서대로 채워지거나 시점별 색으로 바뀐다. | Pending · 준비 중 |
| 262 | [Color Encoding Transition · 데이터 색상 전환](../effects/color-encoding-transition/) | Stationary marks change color to reflect updated values or categories.<br>위치가 고정된 데이터 마크의 색이 새 수치나 분류의 색으로 변한다. | Pending · 준비 중 |
| 263 | [Confidence Band Reveal · 불확실성 띠 공개](../effects/confidence-band-reveal/) | A translucent interval around an estimate unfolds in time or changes width.<br>추정선 주변의 반투명 띠가 시간 순서로 펼쳐지거나 폭을 바꾼다. | Pending · 준비 중 |
| 264 | [Spatiotemporal Density Animation · 시공간 밀도장 재생](../effects/density-field-animation/) | A continuous density field shifts and changes extent over time.<br>연속 색 면의 밝은 영역이 시간에 따라 이동하거나 넓어지고 좁아진다. | Pending · 준비 중 |
| 265 | [Donut Ring Staging · 도넛 다중 링 단계화](../effects/donut-ring-staging/) | Donut slices separate into concentric rings, change position and share, then reunite.<br>도넛 조각들이 여러 동심원으로 나뉜 뒤 각도와 크기를 바꾸고 한 링으로 모인다. | Pending · 준비 중 |
| 266 | [Force-directed Layout Settling · 포스 레이아웃 정착](../effects/force-layout-settling/) | Connected nodes relax under link forces, repulsion, and damping until the layout settles.<br>노드들이 연결선과 서로의 힘에 따라 움직이다가 진동이 줄며 안정된 배치에 멈춘다. | Pending · 준비 중 |
| 267 | [Formation Transition · 전술 배치 전환](../effects/formation-transition/) | Player markers move between formations with trails showing their paths.<br>선수 표식들이 경기장 위 이전 배치에서 새 배치로 움직이며 이동 궤적이 남는다. | Pending · 준비 중 |
| 268 | [Fractional Icon Fill · 부분 아이콘 채우기](../effects/fractional-icon-fill/) | A clipping boundary fills icons to the exact fractional value.<br>아이콘 내부의 채움 경계가 이동해 수량이나 비율을 나타낸다. 마지막 아이콘은 소수 비율만큼만 채워진다. | Pending · 준비 중 |
| 269 | [Freeze and Replay · 중요 시점 정지와 재생](../effects/freeze-replay/) | A chart holds at a checkpoint, displays an annotation, then replays the interval.<br>진행 중인 차트가 특정 시점에 멈춰 주석을 보여주고 같은 구간을 다시 재생한다. | Pending · 준비 중 |
| 270 | [Gantt Progress · 간트 시간 진행](../effects/gantt-progress/) | A time cursor crosses task bars while their completed portions grow.<br>시간선이 작업 막대를 지나가고 해당 작업의 채워진 부분이 늘어난다. | Pending · 준비 중 |
| 271 | [Histogram Rebinning · 히스토그램 구간 재분배](../effects/histogram-rebin/) | Bars and observations redistribute when histogram bin boundaries change.<br>구간 경계가 바뀌면 막대 폭과 높이가 변하고 포함된 점들이 새 구간으로 이동한다. | Pending · 준비 중 |
| 272 | [Hypothetical Outcome Plot Cycling · 가상 결과 프레임 순환](../effects/hypothetical-outcome-cycle/) | Possible outcomes replace one another frame by frame on fixed axes.<br>같은 축 위에 가능한 결과의 선이나 점이 한 프레임씩 바뀐다. | Pending · 준비 중 |
| 273 | [Interval Expansion · 구간 막대 확장](../effects/interval-expansion/) | A point expands in both directions to reveal the endpoints of an interval.<br>점이나 짧은 막대가 양 끝으로 벌어져 최솟값과 최댓값의 구간이 된다. | Pending · 준비 중 |
| 274 | [Line Chart Race · 선 차트 레이스](../effects/line-chart-race/) | Lines extend through time while their endpoints and labels move with changing values.<br>시간을 따라 선이 늘어나고 각 선의 끝점과 라벨이 움직이며 경쟁 순위가 바뀐다. | Pending · 준비 중 |
| 275 | [Linear-to-log Transition · 선형과 로그 좌표 전환](../effects/linear-log-transition/) | Marks and ticks move from linear coordinates to logarithmic coordinates.<br>점과 눈금이 선형 위치에서 로그 위치로 비선형적으로 이동한다. | Pending · 준비 중 |
| 276 | [Map Event Accumulation · 지도 사건 누적](../effects/map-event-accumulation/) | New map markers appear in time order while earlier markers remain visible.<br>시간 순서에 따라 지도 위의 새로운 장소 표식이 늘어나며 이전 표식은 남는다. | Pending · 준비 중 |
| 277 | [Geographic Outline Comparison · 지역 윤곽 이동 비교](../effects/map-outline-comparison/) | A regional outline moves and rescales against a fixed geographic reference.<br>한 지역의 윤곽을 다른 위치로 옮기거나 실제 비율로 바꿔 겹쳐 비교한다. | Pending · 준비 중 |
| 278 | [Map Route Animation · 지도 경로 애니메이션](../effects/map-route-animation/) | A route is drawn as a marker travels along its geometry.<br>지도 위의 곡선이 그려지고 표식이나 비행기가 경로를 따라 이동한다. | Pending · 준비 중 |
| 279 | [Matrix Row-column Sorting · 행렬 행과 열 정렬](../effects/matrix-sort/) | Matrix cells move to new row and column ranks while retaining their identities.<br>셀들이 같은 행과 열 묶음을 유지하면서 새 순서의 격자 위치로 이동한다. | Pending · 준비 중 |
| 280 | [Motion Trails · 데이터 이동 잔상](../effects/motion-trails/) | A moving point leaves a fading line or sequence of dots along its recent path.<br>움직이는 점 뒤에 지나온 좌표가 선이나 옅은 점으로 남는다. | Pending · 준비 중 |
| 281 | [Oscilloscope Trace · 오실로스코프 잔광](../effects/oscilloscope-trace/) | A bright sampling point leaves an exponentially fading waveform trail.<br>빛점이 파형을 훑고 뒤의 선은 시간이 지나며 흐려진다. | Pending · 준비 중 |
| 282 | [Percent Normalization · 백분율 정규화 전환](../effects/percent-normalization/) | Stacks with different totals become equal-length bars while preserving their internal proportions.<br>크기가 달랐던 누적 막대가 같은 전체 길이가 되고 내부 조각의 비율이 유지된다. | Pending · 준비 중 |
| 283 | [Pie and Donut Update · 파이와 도넛 비율 갱신](../effects/pie-donut-update/) | Shares update by interpolating the start and end angles of each pie or donut slice.<br>부채꼴의 시작각과 끝각이 움직여 각 항목의 몫이 바뀐다. | [MP4](../effects/pie-donut-update/clip.mp4) |
| 284 | [Point-to-point Construction · 점에서 점으로 선 생성](../effects/point-to-point-build/) | Each new point travels from the previous point to its data position, extending the line.<br>이전 점에서 출발한 다음 점이 실제 값의 위치로 움직이며 선이 이어진다. | Pending · 준비 중 |
| 285 | [Progress Ring · 원형 진행 게이지](../effects/progress-ring/) | A circular stroke fills to a target ratio with a synchronized label.<br>원형 선이 목표 비율까지 채워지고 끝점이나 숫자가 같이 움직인다. | [MP4](../effects/progress-ring/clip.mp4) |
| 286 | [Radar Chart Morph · 레이더 차트 모프](../effects/radar-morph/) | Vertices move along fixed radial axes to form or update a radar profile.<br>고정된 축을 따라 꼭짓점이 중심에서 목표값으로 이동하거나 새 값으로 바뀌며 다각형 윤곽을 만든다. | [MP4](../effects/radar-morph/clip.mp4) |
| 287 | [Rank Transition · 순위 재배치](../effects/rank-transition/) | Items move to new ranked positions while retaining their identity and encoding.<br>길이와 색을 유지한 항목들이 서로 자리를 바꾸어 새 정렬 순서로 놓인다. | Pending · 준비 중 |
| 288 | [Ribbon-to-particle Transition · 흐름 리본과 입자 전환](../effects/ribbon-particle-transition/) | An aggregate ribbon dissolves into unit particles that travel along the same flow paths.<br>넓은 흐름 띠가 같은 경로를 따라 이동하는 여러 단위 점으로 분해된다. | Pending · 준비 중 |
| 289 | [Rolling Digits · 숫자 롤링](../effects/rolling-digits/) | Each digit rolls vertically inside a clipped number reel.<br>각 자릿수가 세로 릴에서 돌아 다음 값에 멈춘다. | Pending · 준비 중 |
| 290 | [Sankey Reflow · 생키 흐름 재배치](../effects/sankey-reflow/) | Ribbon widths, node heights, and connected endpoints change together as flow values update.<br>흐름량이 바뀌면 리본 두께와 노드 높이가 변하고 연결 끝점이 함께 이동한다. | Pending · 준비 중 |
| 291 | [Sankey Ribbon Growth · 생키 리본 성장](../effects/sankey-ribbon-grow/) | Flow ribbons grow from source toward destination, revealing the network stage by stage.<br>흐름 리본이 출발 노드에서 도착 노드 방향으로 자라며 단계별 네트워크를 드러낸다. | [MP4](../effects/sankey-ribbon-grow/clip.mp4) |
| 292 | [Animated Size Encoding · 데이터 면적 변화](../effects/size-encoding/) | Shapes change area in proportion to their data values.<br>중심 위치가 고정된 원이나 도형의 면적이 데이터 값에 비례해 커지거나 작아진다. | Pending · 준비 중 |
| 293 | [Stack Layer Addition · 누적 레이어 삽입](../effects/stack-layer-addition/) | A new layer gains thickness while the layers above it shift continuously.<br>새 레이어가 두께를 얻으면서 위쪽 레이어들이 연속적으로 밀려난다. | Pending · 준비 중 |
| 294 | [Stacked-to-grouped Transition · 누적 막대와 그룹 막대 전환](../effects/stacked-grouped-transition/) | Stacked segments spread sideways, then move onto a shared baseline.<br>쌓인 막대 조각들이 옆으로 펼쳐진 뒤 공통 기준선으로 내려온다. | [MP4](../effects/stacked-grouped-transition/clip.mp4) |
| 295 | [Streamgraph Baseline Shift · 스트림그래프 기준선 이동](../effects/streamgraph-baseline-shift/) | Stacked layers move between centered and cumulative baselines through shared offset interpolation.<br>동일 레이어들이 두께를 유지하거나 갱신하면서 중앙 기준선과 누적 기준선 사이로 이동한다. | Pending · 준비 중 |
| 296 | [Streaming Chart · 실시간 차트 흐름](../effects/streaming-chart/) | New samples enter on the right as older samples and ticks move left out of a rolling window.<br>새 표본이 오른쪽에 붙고 기존 선과 눈금이 왼쪽으로 밀리며 오래된 표본이 사라진다. | Pending · 준비 중 |
| 297 | [Table-to-chart Transition · 표에서 차트로 전환](../effects/table-to-chart/) | Highlighted table values become marks that move into a chart layout.<br>표의 수치가 강조된 뒤 같은 항목의 위치에서 막대나 점이 나오며 차트로 정렬된다. | [MP4](../effects/table-to-chart/clip.mp4) |
| 298 | [Temporal Network Transition · 시간별 네트워크 변화](../effects/temporal-network/) | Nodes and links enter, leave, and move between time snapshots.<br>노드와 연결선이 시간에 따라 나타나거나 사라지고 남은 노드들이 새 연결에 맞춰 재배치된다. | Pending · 준비 중 |
| 299 | [Track Data Race · 트랙 데이터 레이스](../effects/track-data-race/) | Competitors move along a track according to their recorded timing checkpoints.<br>경쟁자 표식들이 각자의 시간 기록에 맞춰 트랙을 이동하고 순위가 바뀐다. | Pending · 준비 중 |
| 300 | [Tree Expand and Collapse · 트리 펼침과 접힘](../effects/tree-expand-collapse/) | Children and links unfold from a parent or collapse back into it.<br>부모 노드에서 자식 노드와 연결선이 퍼져 나오거나 부모 위치로 접혀 사라진다. | Pending · 준비 중 |
| 301 | [Tree Re-rooting · 트리 루트 재배치](../effects/tree-reroot/) | A selected node becomes the root while connected branches move into a new layout.<br>선택한 노드가 중심으로 이동하고 연결된 가지들이 새 방향과 위치로 펼쳐진다. | Pending · 준비 중 |
| 302 | [Treemap Resizing · 트리맵 면적 갱신](../effects/treemap-resize/) | Treemap rectangles resize while preserving their neighborhood where possible.<br>직사각형들이 가급적 이웃 관계를 유지하면서 면적을 늘리거나 줄인다. | Pending · 준비 중 |
| 303 | [Uncertainty Needle Motion · 불확실성 바늘 움직임](../effects/uncertainty-needle/) | A forecast needle moves among sampled positions around a central estimate.<br>예측 바늘이 중심값 주변의 서로 다른 위치로 반복 움직인다. | Pending · 준비 중 |
| 304 | [Unit-to-aggregate Transition · 개별 단위와 집계 면 전환](../effects/unit-aggregate-transition/) | Individual units gather into bins and form the outline of an aggregate bar or area.<br>개별 점들이 데이터 구간 안에 모여 연속적인 막대나 면의 윤곽을 이룬다. | Pending · 준비 중 |
| 305 | [Waterfall Accumulation · 워터폴 순차 누적](../effects/waterfall-accumulation/) | Change bars appear from the preceding cumulative endpoint until a total bar is reached.<br>증감 막대가 앞선 누적 끝점에서 차례로 생겨 합계 막대에 도달한다. | [MP4](../effects/waterfall-accumulation/clip.mp4) |
| 306 | [Object-constant Update · 객체 유지 갱신](../effects/object-constant-update/) | The same items keep their color and name while position and size move from the old state to the new one.<br>같은 항목이 색과 이름을 유지한 채 이전 위치에서 새 위치로 움직이는 갱신 | Pending · 준비 중 |
| 307 | [Facet-to-single Transition · 패널 통합 전환](../effects/facet-single-transition/) | Data marks from several small chart panels move onto one shared axis, or one chart splits into several panels.<br>여러 작은 차트 패널의 데이터 마크가 한 공통 축으로 이동하거나 한 차트에서 여러 패널로 갈라진다 | Pending · 준비 중 |
| 308 | [Fisheye Lens · 어안 렌즈 확대](../effects/fisheye-lens/) | Expand marks and tick spacing near a focus while compressing nearby context within the same extent.<br>초점 주변의 점과 눈금 간격이 벌어지고 주변부는 압축되며 전체 범위는 화면에 남는다. | Pending · 준비 중 |
| 309 | [Map Extrusion · 지도 높이 돌출](../effects/map-extrusion/) | City districts or grid cells rise from the ground with height showing density.<br>도시 구역이나 격자 셀이 바닥에서 솟아오르며 높이로 밀도를 나타낸다 | Pending · 준비 중 |
| 310 | [Map to Bar Chart · 지도에서 막대 차트로](../effects/map-to-bar-chart/) | A flat map tilts into a height map, then region prisms move into an aligned bar chart.<br>평면 지도가 기울어 높이 지도가 된 뒤 지역별 막대가 나란한 차트로 옮겨 간다 | Pending · 준비 중 |
| 311 | [Scatter Dimension Rotation · 산점도 차원 회전](../effects/scatter-dimension-rotation/) | Scatter points spread in depth, rotate, and regroup into the plane of a new variable pair.<br>산점도의 점들이 깊이 방향으로 벌어진 뒤 회전해 새로운 변수 쌍의 평면으로 모인다 | Pending · 준비 중 |
| 312 | [Staged Chart Transition · 차트 단계 전환](../effects/staged-chart-transition/) | Axis change, position move and size change run as separate stages instead of all at once.<br>축 변경, 위치 이동, 크기 변경을 한꺼번에 하지 않고 단계별로 나눠 진행하는 차트 전환 | Pending · 준비 중 |
| 313 | [Countdown Ticker · 카운트다운](../effects/countdown-ticker/) | Remaining days, hours, minutes and seconds tick down at a steady interval with digit swaps.<br>남은 일·시·분·초가 일정한 간격으로 줄어들며 자릿수가 교체되는 카운트다운 | Pending · 준비 중 |

<a id="family-ui"></a>

## UI DEMO · UI 시연

| Nº | Effect · 효과 | Definition · 정의 | Clip · 클립 |
|---|---|---|---|
| 314 | [Answer Streaming · 답 스트리밍](../effects/answer-stream/) | An animation that reveals an answer in sequential token groups and gradually increases the opacity of each new group.<br>답변을 토큰 묶음 단위로 순서대로 표시하고 새 묶음의 농도를 점차 높이는 동작 | [MP4](../effects/answer-stream/clip.mp4) |
| 315 | [Cursor Move & Click · 커서 이동과 클릭](../effects/cursor-click/) | An animation in which a cursor follows a curved path to a target button and signals a click with a pressed state and ripple.<br>커서가 곡선으로 목표 단추에 도착하고 눌림과 파문으로 클릭을 알리는 동작 | [MP4](../effects/cursor-click/clip.mp4) |
| 316 | [Spotlight · 스포트라이트](../effects/spotlight/) | An animation that dims the surrounding screen while keeping one region fully opaque and framing it with brackets.<br>주변 화면을 옅게 낮추고 한 영역의 농도를 유지해 괄호로 집중시키는 동작 | [MP4](../effects/spotlight/clip.mp4) |
| 317 | [Typing Input · 타이핑 입력](../effects/typing-input/) | An animation in which a question is typed character by character at irregular intervals with a blinking caret at the end.<br>질문이 글자마다 불규칙한 간격으로 입력되고 끝의 캐럿이 깜빡이는 동작 | [MP4](../effects/typing-input/clip.mp4) |
| 318 | [UI Scroll · 화면 스크롤](../effects/ui-scroll/) | An animation that smoothly moves a long document upward, stops at a target paragraph, and marks it with a vertical line.<br>긴 문서 내용을 부드럽게 위로 옮겨 목표 문단에 멈추고 세로선으로 표시하는 동작 | [MP4](../effects/ui-scroll/clip.mp4) |
| 319 | [Zoom Callout · 확대 콜아웃](../effects/zoom-callout/) | An animation that enlarges a small UI value in an adjacent circular callout and connects both locations with a line.<br>작은 UI의 수치를 옆의 원형 확대 영역으로 띄우고 두 위치를 선으로 잇는 동작 | [MP4](../effects/zoom-callout/clip.mp4) |
| 320 | [Accordion Expansion · 아코디언 펼치기](../effects/accordion-expand/) | A panel expands from a fixed edge while adjacent content moves aside.<br>접힌 영역이 고정된 가장자리에서 펼쳐지고 주변 항목이 새 공간만큼 밀려난다. | [MP4](../effects/accordion-expand/clip.mp4) |
| 321 | [Active Indicator Glide · 활성 표시 이동](../effects/active-indicator-glide/) | The active underline or capsule glides to the newly selected tab.<br>활성 탭의 배경 캡슐이나 밑줄이 다음 탭 위치로 미끄러진다. | Pending · 준비 중 |
| 322 | [Adaptive Header Motion · 반응형 헤더 모션](../effects/adaptive-header/) | A header hides or shrinks during scrolling and returns when direction changes.<br>스크롤이 진행되면 헤더가 작아지거나 위로 숨고 반대 방향으로 움직이면 다시 나타난다. | Pending · 준비 중 |
| 323 | [Card Stack Shuffle · 카드 스택 셔플](../effects/card-stack-shuffle/) | A rear card travels over the stack and settles at the front.<br>뒤 카드가 위를 넘어 맨 앞으로 오고 나머지 카드는 눌렸다 재정렬된다. | Pending · 준비 중 |
| 324 | [Carousel Slide · 캐러셀 슬라이드](../effects/carousel-slide/) | A card rail decelerates into the next centered selection.<br>카드 트랙이 한 방향으로 이동해 다음 항목을 중앙에 놓고 감속하며 멈춘다. | Pending · 준비 중 |
| 325 | [Character Input Response · 캐릭터 입력 반응](../effects/character-input-response/) | A character watches the input caret and covers its eyes during password entry.<br>캐릭터가 입력 커서를 바라보고 비밀번호 입력 때 눈을 가린다. | Pending · 준비 중 |
| 326 | [Chat Thread · 대화 말풍선 누적](../effects/chat-thread/) | Messages appear in sequence while the previous conversation shifts upward.<br>메시지 말풍선이 차례로 나타나고 이전 대화가 위로 밀려 올라간다. | [MP4](../effects/chat-thread/clip.mp4) |
| 327 | [Collaborative Cursors · 협업 커서](../effects/collaborative-cursors/) | Named cursors follow independent paths and perform coordinated actions.<br>서로 다른 이름의 커서들이 한 화면에서 독립 경로로 움직이고 작업한다. | Pending · 준비 중 |
| 328 | [Control Target Sync · 컨트롤 연동](../effects/control-target-sync/) | A control and its dependent result change on the same progress value.<br>슬라이더, 입력값, 선택 상태가 바뀌는 순간 연결된 대상도 함께 변한다. | Pending · 준비 중 |
| 329 | [Cursor Follow · 커서 추종](../effects/cursor-follow/) | A secondary circle or label follows a pointer with a slight delay.<br>보조 원이나 라벨이 커서보다 조금 늦게 이동하고 방향 전환 뒤 따라잡는다. | Pending · 준비 중 |
| 330 | [Cursor Trail · 커서 트레일](../effects/cursor-trail/) | A fading trail records the cursor path.<br>커서가 지나간 자리에 점, 이미지 또는 경로선이 남았다가 점차 사라진다. | Pending · 준비 중 |
| 331 | [Dock Magnification · 도크 확대](../effects/dock-magnification/) | Icons grow in proportion to their proximity to a pointer.<br>이동하는 포인터 근처의 아이콘이 커지고 먼 아이콘은 작아진다. | Pending · 준비 중 |
| 332 | [Drag and Drop · 드래그 앤 드롭](../effects/drag-and-drop/) | Lift a translucent copy, carry it with the cursor, and settle it in a new slot.<br>커서가 요소를 집어 들어 반투명 복사본과 이동하고 새 위치에 놓는다. | [MP4](../effects/drag-and-drop/clip.mp4) |
| 333 | [Drawer Slide · 드로어 슬라이드](../effects/drawer-slide/) | An edge panel slides in while the underlying screen recedes.<br>화면 가장자리에서 패널이 들어오고 뒤 화면이 어두워지거나 작아지며 보조 작업 영역이 열린다. | Pending · 준비 중 |
| 334 | [Elastic Boundary Return · 탄성 경계 복귀](../effects/elastic-boundary-return/) | A dragged object resists movement beyond a boundary and returns on release.<br>끌린 물체가 영역을 잠깐 벗어나 늘어났다가 경계 안으로 돌아온다. | Pending · 준비 중 |
| 335 | [Error Shake · 오류 셰이크](../effects/error-shake/) | A short horizontal shake marks an error before a drawn check confirms correction.<br>입력창이 짧게 좌우로 흔들리고 수정 후 체크 표시가 그려진다. | Pending · 준비 중 |
| 336 | [File Upload Stack · 파일 업로드 스택](../effects/file-upload-stack/) | File cards lift into a stack with upload progress indicators.<br>작은 파일 면이 떠오르며 카드 목록으로 쌓이고 진행 표시가 붙는다. | Pending · 준비 중 |
| 337 | [Hold to Confirm · 길게 눌러 확정](../effects/hold-to-confirm/) | A button fills while held and switches to a completion mark.<br>누른 동안 버튼 내부가 채워지고 끝에서 완료 표시로 바뀐다. | Pending · 준비 중 |
| 338 | [Hotspot Pulse · 핫스팟 펄스](../effects/hotspot-pulse/) | A dot or ring pulses at the next action location and moves between steps.<br>다음 행동 위치에 점이나 고리가 반복해서 커졌다 작아지고 다음 단계에서 다른 위치로 바뀐다. | Pending · 준비 중 |
| 339 | [Icon Flight · 아이콘 플라이트](../effects/icon-flight/) | An icon lifts or drops out of a button as it fades.<br>버튼 내부 아이콘이 위로 떠오르거나 아래로 떨어지며 사라진다. | Pending · 준비 중 |
| 340 | [Idle Cursor Hide · 정지 커서 숨김](../effects/idle-cursor-hide/) | An idle cursor fades or shrinks and reappears when movement resumes.<br>움직이지 않는 커서가 일정 시간 뒤 작아지거나 흐려지고 다시 움직이면 나타난다. | Pending · 준비 중 |
| 341 | [Image Fan Out · 이미지 팬아웃](../effects/image-fanout/) | Overlapping images spread into a fan with spacing and rotation.<br>겹친 작은 이미지들이 간격과 각도를 벌리며 부채꼴로 펼쳐진다. | Pending · 준비 중 |
| 342 | [Image Generation Scan · 이미지 생성 스캔](../effects/image-generation-scan/) | A scan band and pixel grid reveal completed portions of an image.<br>스캔 띠와 픽셀 격자가 이미지를 훑으며 완성된 영역을 드러낸다. | Pending · 준비 중 |
| 343 | [Layout Reflow · 레이아웃 재배치](../effects/layout-reflow/) | Elements retain their identity as a layout changes position and size.<br>목록이나 격자의 요소가 새 위치와 크기로 부드럽게 옮겨가고 삭제된 항목의 빈자리를 메운다. | [MP4](../effects/layout-reflow/clip.mp4) |
| 344 | [Layout Yield · 레이아웃 자리 양보](../effects/layout-yield/) | An existing layer moves aside to make room for a new focal message.<br>영상이나 카드가 옆으로 비켜나고 비운 자리에 큰 숫자나 문장이 등장한다. | Pending · 준비 중 |
| 345 | [Magnetic Attraction · 마그네틱 모션](../effects/magnetic-attraction/) | An element shifts slightly toward a nearby pointer and returns when it leaves.<br>요소가 포인터 쪽으로 조금 따라가고 멀어지면 탄성 있게 돌아온다. | Pending · 준비 중 |
| 346 | [Modal Lift · 모달 등장](../effects/modal-lift/) | A dialog rises into focus as the backdrop dims.<br>대화상자가 떠오르면서 뒤 화면이 어두워지거나 흐려진다. | [MP4](../effects/modal-lift/clip.mp4) |
| 347 | [Pull to Refresh · 당겨서 새로고침](../effects/pull-to-refresh/) | A resistant pull reaches a refresh threshold, waits, and returns.<br>리스트를 당길수록 저항이 커지고 임계점에서 로더가 뜬 뒤 원위치로 튕겨 돌아온다. | Pending · 준비 중 |
| 348 | [Radial Menu Fanout · 방사형 메뉴 펼치기](../effects/radial-menu-fanout/) | Icons fan out from a shared center along an arc.<br>한 중심점에 모인 아이콘이 원호를 따라 각각의 자리로 벌어진다. | Pending · 준비 중 |
| 349 | [Scroll Frame Scrubbing · 스크롤 프레임 스크럽](../effects/scroll-frame-scrub/) | Scroll progress scrubs an image sequence forward and backward.<br>스크롤 진행률에 따라 이미지 시퀀스가 앞으로 재생되거나 되감긴다. | Pending · 준비 중 |
| 350 | [Scroll Grid Expansion · 스크롤 격자 확장](../effects/scroll-grid-expand/) | A pinned image grid enters by column, expands, and reveals supporting text.<br>고정된 이미지 격자가 열별로 들어온 뒤 커져 공간을 열고 설명을 보여 준다. | Pending · 준비 중 |
| 351 | [Scroll Snap · 스크롤 스냅](../effects/scroll-snap/) | Scrolling settles smoothly at the nearest chapter boundary.<br>자유롭게 진행하던 화면이 가까운 장면 경계에 부드럽게 정렬된다. | Pending · 준비 중 |
| 352 | [Swipe Action Reveal · 스와이프 액션 리빌](../effects/swipe-action-reveal/) | A row slides aside to reveal actions underneath.<br>행이 옆으로 밀리면서 뒤에 숨은 실행 버튼이 드러난다. | Pending · 준비 중 |
| 353 | [Terminal Run · 터미널 실행 시연](../effects/terminal-run/) | A command is typed, executed, and followed by sequential output.<br>명령이 입력되고 잠시 멈춘 뒤 로그가 줄마다 출력되어 새 프롬프트가 생긴다. | Pending · 준비 중 |
| 354 | [Toast Stack · 알림 스택](../effects/toast-stack/) | Toasts enter, stack, and close gaps after dismissal.<br>새 알림이 가장자리에서 들어와 기존 알림을 밀거나 겹쳐 쌓이고 퇴장하면 남은 알림이 재정렬된다. | Pending · 준비 중 |
| 355 | [Toggle Slide · 토글 슬라이드](../effects/toggle-slide/) | A switch thumb travels and settles as the track changes color.<br>스위치 손잡이가 이동해 약간 지나쳤다 돌아오고 트랙 색이 바뀐다. | Pending · 준비 중 |
| 356 | [Tracked Redaction · 가림 영역 추적](../effects/tracked-redaction/) | A redaction layer follows the position and size of a sensitive field.<br>민감한 필드를 덮는 가림 레이어가 대상의 이동과 크기 변화를 함께 따른다. | Pending · 준비 중 |
| 357 | [Vector Pen Demo · 벡터 펜 시연](../effects/vector-pen-demo/) | Anchors, a Bézier curve, handles, and a selection frame appear in sequence.<br>점이 찍히고 곡선과 핸들이 차례로 나타나 선택 상자가 완성된다. | Pending · 준비 중 |
| 358 | [Diff Reveal · 변경점 공개](../effects/diff-reveal/) | Added and removed lines appear in different colors with change markers.<br>추가된 줄과 삭제된 줄이 다른 색으로 나타나고 변경 표시가 함께 생기는 공개 | Pending · 준비 중 |
| 359 | [Scroll Lag · 스크롤 지연 추종](../effects/scroll-lag/) | After the scroll position changes, the screen and some layers trail behind and then settle.<br>스크롤 위치가 바뀐 뒤 화면과 일부 레이어가 늦게 따라와 정착한다 | Pending · 준비 중 |
| 360 | [Scroll Scrubbing · 스크롤 스크럽](../effects/scroll-scrub/) | Moving the scroll position forward or backward advances or rewinds the scene at the same ratio.<br>스크롤 위치를 앞뒤로 움직이면 장면도 같은 비율로 진행하거나 되감긴다 | Pending · 준비 중 |

<a id="family-explainer"></a>

## EXPLAINER · 원리 도해

| Nº | Effect · 효과 | Definition · 정의 | Clip · 클립 |
|---|---|---|---|
| 361 | [Attention Lines · 어텐션 선](../effects/attention-lines/) | An animation that connects one token to the tokens it references using arcs of varying thickness and opacity.<br>한 토큰이 참조하는 다른 토큰을 굵기와 진하기가 다른 호로 연결하는 움직임 | [MP4](../effects/attention-lines/clip.mp4) |
| 362 | [Context Window · 컨텍스트 창](../effects/context-window/) | An animation that inserts new tokens into a fixed-length window and pushes out the oldest tokens first.<br>고정 길이 창에 새 토큰을 넣고 가장 오래된 토큰부터 밀어내는 움직임 | [MP4](../effects/context-window/clip.mp4) |
| 363 | [Embedding Space · 임베딩 공간](../effects/embedding-space/) | An animation that moves words to semantic coordinates so words with similar meanings cluster together.<br>단어가 의미에 따른 좌표로 이동해 가까운 뜻끼리 모이는 움직임 | [MP4](../effects/embedding-space/clip.mp4) |
| 364 | [Next-token Pick · 다음 말 고르기](../effects/next-token/) | An animation in which candidate probability bars grow, then the highest-probability candidate moves into a blank in the sentence.<br>후보 확률 막대가 자란 뒤 가장 높은 후보가 문장의 빈칸으로 이동하는 움직임 | [MP4](../effects/next-token/clip.mp4) |
| 365 | [Progressive Disclosure · 점진적 공개](../effects/progressive-disclosure/) | A sequential reveal that leaves earlier stages dimmed as each new stage becomes active.<br>새 단계가 켜질 때 이전 단계를 옅게 남기는 순차 공개 움직임 | [MP4](../effects/progressive-disclosure/clip.mp4) |
| 366 | [Split Compare · 비교 분할](../effects/split-compare/) | An animation that overlays before and after states of the same subject and compares them with a moving vertical divider.<br>같은 대상을 전후 상태로 겹치고 움직이는 세로 경계로 비교하는 움직임 | [MP4](../effects/split-compare/clip.mp4) |
| 367 | [Token Split · 토큰 쪼개기](../effects/token-split/) | An animation that separates a continuous sentence into spaced token fragments.<br>붙어 있던 문장을 간격 있는 토큰 조각으로 나누는 움직임 | [MP4](../effects/token-split/clip.mp4) |
| 368 | [Anchored Substitution · 고정 위치 교대 표시](../effects/anchored-substitution/) | Each new item replaces the previous item at a shared anchor.<br>동일 자리에 다음 항목이 나타나면 이전 항목은 사라진다. | Pending · 준비 중 |
| 369 | [Annotation Tracking · 주석 위치 추적](../effects/annotation-tracking/) | Labels and leader lines follow a moving target with a fixed spatial relationship.<br>라벨과 지시선이 움직이는 대상의 위치를 따라가며 일정한 간격이나 연결 관계를 유지한다. | Pending · 준비 중 |
| 370 | [Character Articulation · 캐릭터 관절 동작](../effects/character-articulation/) | Flat character limbs rotate around joints while the body responds.<br>평면 캐릭터의 팔과 다리가 관절을 중심으로 돌아 움직이고 몸이 함께 반응한다. | Pending · 준비 중 |
| 371 | [Character Gaze and Reaction · 캐릭터 시선과 반응](../effects/character-gaze-reaction/) | A character looks toward a subject and changes expression or posture.<br>캐릭터의 눈이 대상 쪽으로 움직이고 표정이나 몸 자세가 바뀐다. | Pending · 준비 중 |
| 372 | [Code Diff Reveal · 코드 변경 전개](../effects/code-diff-reveal/) | Removed lines collapse and added lines expand with distinct markings.<br>삭제된 줄이 붉게 줄어 사라지고 추가된 줄이 초록색으로 펼쳐진다. | Pending · 준비 중 |
| 373 | [Code-result Alternation · 코드와 실행 결과 교대](../effects/code-result-alternation/) | Highlighted code alternates with its execution result, then returns to the source.<br>코드 일부가 강조된 뒤 결과 화면으로 전환되고 다시 해당 코드로 돌아온다. | Pending · 준비 중 |
| 374 | [Copy-to-target Derivation · 복사본 이동 도출](../effects/copy-to-target/) | The original stays visible while a duplicate moves or transforms into the result.<br>원본은 남아 있고 복사본이 이동하거나 변형되어 결과 위치에 도착한다. | Pending · 준비 중 |
| 375 | [Dashed Flow · 점선 흐름](../effects/dashed-flow/) | A connector is revealed before its dash pattern moves in one direction.<br>노드 사이 선이 그려진 뒤 점선 무늬가 한 방향으로 흐른다. | Pending · 준비 중 |
| 376 | [Delta Triangle Shrink · 변화량 삼각형 축소](../effects/delta-triangle-shrink/) | Horizontal and vertical change segments shrink together while their labels remain attached.<br>곡선 근처의 가로와 세로 변화량 선분이 함께 작아지고 라벨이 계속 붙어 있다. | Pending · 준비 중 |
| 377 | [Dependent Geometry Update · 종속 도형 동기 갱신](../effects/dependent-geometry/) | A moving point updates its connected line, angle, and length at the same instant.<br>점이 움직일 때 연결선, 각도, 길이 표시도 매 순간 함께 바뀐다. | Pending · 준비 중 |
| 378 | [Fourier Winding · 푸리에 회전 좌표](../effects/fourier-winding/) | Signal samples wind around a rotating frame while their mean moves with frequency.<br>신호의 점들이 회전 좌표에 감기고 중심 또는 평균점이 주파수에 따라 움직인다. | Pending · 준비 중 |
| 379 | [Globe-to-map Projection Morph · 지구에서 지도 투영 모프](../effects/globe-map-morph/) | A globe’s surface grid unfolds into a flat projection, changing regional shapes.<br>구의 표면 격자가 펼쳐져 평면 지도로 변하고 지역의 형태가 함께 바뀐다. | Pending · 준비 중 |
| 380 | [Node-link Build · 노드 연결망 구축](../effects/graph-build/) | Reveal eight service nodes before their connecting edges.<br>노드가 순서대로 나타나고 연결선이 각 노드 사이에 그려진다. 선택 경로의 노드와 선을 차례로 강조한다. | [MP4](../effects/graph-build/clip.mp4) |
| 381 | [Harmonic Component Assembly · 고조파 성분 합성](../effects/harmonic-assembly/) | Sine components accumulate into a composite waveform that approaches a target shape.<br>서로 다른 사인 파형이 쌓이거나 겹쳐지고 합성 결과가 점차 목표 파형에 가까워진다. | Pending · 준비 중 |
| 382 | [Inverse Kinematics Reach · 역기구학 뻗기](../effects/inverse-kinematics-reach/) | Connected joints bend to place a hand or foot at a target position.<br>손이나 발의 목표 위치에 맞춰 연결된 관절이 굽혀진다. | Pending · 준비 중 |
| 383 | [Lighting Pass Accumulation · 조명 패스 누적](../effects/lighting-pass-accumulation/) | Individual lighting passes appear and accumulate into the final composite.<br>개별 조명의 결과가 차례로 나타나고 합쳐져 최종 화면이 밝아진다. | Pending · 준비 중 |
| 384 | [Matching Token Transform · 대응 기호 이동](../effects/matching-token-transform/) | Semantically matched tokens move to their next positions while other tokens fade.<br>같은 의미의 코드 토큰이나 수식 기호가 다음 상태의 위치로 이동한다. 사라진 항은 흐려지고 새로운 항은 나타난다. | Pending · 준비 중 |
| 385 | [Memory Chunk Allocation · 메모리 조각 할당](../effects/memory-allocation/) | A data block splits into chunks as matching memory slots fill in sequence.<br>큰 데이터 블록이 여러 조각으로 나뉘고 메모리 슬롯이 대응 색으로 차례로 채워진다. | Pending · 준비 중 |
| 386 | [Object Tracking Box · 대상 추적 박스](../effects/object-tracking-box/) | A bounding box follows the position and size of a subject.<br>모서리 표시 상자가 대상의 움직임을 따라가고 크기와 신뢰도 수치가 조금 변한다. | Pending · 준비 중 |
| 387 | [Path Beam · 경로 신호 빔](../effects/path-beam/) | A short luminous segment travels along a connector toward an active node.<br>빛나는 짧은 선이 연결 경로를 따라 지나가며 각 대상이 차례로 밝아진다. | Pending · 준비 중 |
| 388 | [Path Convoy · 경로 위 행렬](../effects/path-convoy/) | Objects follow the same path with staggered starts or fixed spacing.<br>여러 물체나 단위 입자가 시간차 또는 일정 간격을 두고 같은 경로를 따라 이동한다. | Pending · 준비 중 |
| 389 | [Pinned Scrollytelling · 고정 장면 스크롤리텔링](../effects/pinned-scrollytelling/) | A visual stays pinned while scrolling explanations change its internal state and emphasis.<br>핵심 그림이나 코드 패널은 같은 위치에 머물고 설명이 스크롤되면서 내부 상태와 강조 범위가 바뀐다. | Pending · 준비 중 |
| 390 | [Plane Transformation · 평면 공간 변형](../effects/plane-transformation/) | A grid and its shapes deform under one shared coordinate transformation.<br>평면의 격자와 도형이 같은 좌표 변환을 받아 회전하거나 휘어진다. 기준 격자와 기저 벡터를 함께 남겨 변형 전후를 비교할 수 있다. | Pending · 준비 중 |
| 391 | [Process Loop · 행위자 과정 순환](../effects/process-loop/) | An actor or icon visits successive stages in a repeating process.<br>작은 캐릭터나 아이콘이 단계별 위치로 이동하며 처리 과정이 순환한다. | Pending · 준비 중 |
| 392 | [Secant-to-tangent Convergence · 할선에서 접선으로 수렴](../effects/secant-to-tangent/) | Two points on a curve approach each other as their secant approaches a tangent.<br>곡선 위 두 점 사이 간격이 줄고 두 점을 잇는 선이 접선에 가까워진다. | Pending · 준비 중 |
| 393 | [Seesaw Balance · 시소 균형](../effects/seesaw-balance/) | A beam tilts around a shared fulcrum while its pans counter-rotate.<br>막대 양쪽이 반대 높이로 움직이고 접시는 수평을 유지한다. | Pending · 준비 중 |
| 394 | [Segmentation Reveal · 영역 분할 스캔](../effects/segmentation-reveal/) | A scan progressively reveals predefined colored region masks.<br>대상의 여러 구역에 반투명 색 마스크가 주사선 순서로 차오르고 라벨이 붙는다. | Pending · 준비 중 |
| 395 | [Sequence Message Draw · 시퀀스 메시지 전달](../effects/sequence-message-draw/) | Message arrows draw between actors in chronological order, highlighting each receiver.<br>행위자 사이의 화살표가 시간 순서대로 그려지고 수신 지점이 강조된다. | [MP4](../effects/sequence-message-draw/clip.mp4) |
| 396 | [Source-to-result Mapping · 원본과 변환 결과 연결](../effects/source-result-mapping/) | The source remains visible as transformed code appears with linked corresponding tokens.<br>원본 코드가 유지된 채 반대편에 변환된 코드가 나타나고 대응 부분이 연결된다. | [MP4](../effects/source-result-mapping/clip.mp4) |
| 397 | [Speech Bubble Reveal · 말풍선 생성과 접힘](../effects/speech-bubble-reveal/) | A speech bubble opens beside a character, reveals text, then collapses.<br>말풍선이 캐릭터 옆에서 커지고 문장이 나타난 뒤 말풍선과 문장이 함께 사라진다. | Pending · 준비 중 |
| 398 | [State Transition Walk · 상태 전이 순회](../effects/state-transition-walk/) | A signal moves to the next node, which becomes the active state.<br>현재 노드가 켜지고 연결선을 따라 신호나 강조가 다음 노드로 이동한다. 도착한 노드가 새 활성 상태가 된다. | [MP4](../effects/state-transition-walk/clip.mp4) |
| 399 | [Step-panel Walkthrough · 단계와 패널 동기 진행](../effects/step-panel-walkthrough/) | The active step moves through a list as a neighboring code panel updates.<br>단계 목록의 활성 표시가 이동하고 옆 코드 패널의 대응 내용이 바뀐다. | Pending · 준비 중 |
| 400 | [Step Recap Reconstruction · 단계 요약 재구성](../effects/step-recap/) | Small illustrations of completed steps gather into a single recap flow.<br>과정이 끝난 뒤 각 단계의 작은 그림이 차례로 모여 하나의 요약 흐름이 된다. | Pending · 준비 중 |
| 401 | [Timeline Scrub · 타임라인 사건 전개](../effects/timeline-scrub/) | A playhead moves along a time axis and reveals the event or map state at each date.<br>시간축의 재생 표시가 이동하고 해당 시점의 사건 카드나 지도 상태가 나타난다. | Pending · 준비 중 |
| 402 | [Vector Field Alignment · 벡터장 방향 정렬](../effects/vector-field-alignment/) | Short bars in a grid turn toward a moving reference point.<br>격자의 작은 막대들이 이동하는 기준점을 향해 방향을 돌린다. | Pending · 준비 중 |
| 403 | [Vector Tip-to-tail Construction · 벡터 끝잇기](../effects/vector-tip-to-tail/) | Component vectors extend in sequence, then join tip to tail to form a resultant.<br>두 성분 벡터를 차례로 늘리고 두 번째를 첫 번째의 끝으로 옮겨 합벡터를 만든다. | [MP4](../effects/vector-tip-to-tail/clip.mp4) |
| 404 | [Venn Overlap · 벤 집합 겹침](../effects/venn-overlap/) | Circles move together, then reveal the highlighted intersection and its label.<br>원들이 서로 다가가 겹치는 영역이 강조되고 라벨이 나타난다. | Pending · 준비 중 |
| 405 | [Narration-synchronized Motion · 해설 동기 모션](../effects/narration-sync/) | When the narration names a cause, the matching visual change happens at the same moment.<br>원인을 말하는 순간 대응하는 변화가 화면에서 동시에 일어나게 맞추는 동기화 | Pending · 준비 중 |
| 406 | [Route Highlight · 경로 순차 강조](../effects/route-highlight/) | Nodes and links along a route light up in order from start to finish while the rest fades.<br>경로의 노드와 연결선이 출발부터 도착까지 차례로 밝아지고 나머지는 옅어지는 강조 | Pending · 준비 중 |
| 407 | [Segmented Explanation · 단계별 설명 모션](../effects/segmented-explanation/) | A long process is split into short bursts of motion, each followed by a still hold.<br>긴 과정을 짧은 동작 묶음으로 나누고 묶음 끝마다 화면을 잠시 유지하는 구성 | Pending · 준비 중 |
| 408 | [Tile Possibility Collapse · 타일 가능성 수렴](../effects/wave-function-collapse/) | Each grid cell shows overlapping candidate tiles that commit one by one while neighbor options shrink, until the pattern is complete.<br>격자의 각 칸에 겹쳐 보이던 타일 후보가 하나씩 확정되고 이웃 후보도 줄어 무늬가 완성되는 과정 | Pending · 준비 중 |

<a id="family-shape"></a>

## SHAPE & PATH · 도형·패스

| Nº | Effect · 효과 | Definition · 정의 | Clip · 클립 |
|---|---|---|---|
| 409 | [Grid Draw · 격자 그리기](../effects/grid-draw/) | Horizontal and vertical lines draw in sequence to build a grid.<br>가로·세로 선이 차례로 그려져 화면에 격자가 생긴다. | Pending · 준비 중 |
| 410 | [Collision Displacement · 충돌 밀어내기](../effects/collision-displacement/) | An incoming element hits an existing one and pushes it along with the same force.<br>들어오는 요소가 기존 요소에 닿는 순간 그 요소를 같은 방향으로 밀어내는 움직임 | Pending · 준비 중 |
| 411 | [Magnetic Distortion · 마그네틱 왜곡](../effects/magnetic-distortion/) | Pixels or a soft blob around a moving touch point are pulled toward it, then spring back.<br>움직이는 접점 주위의 픽셀이나 덩어리가 끌려갔다가 원래대로 돌아오는 왜곡 | Pending · 준비 중 |
| 412 | [Piece Assembly · 조각 조립](../effects/piece-assembly/) | Loose shapes move and rotate until they lock into a single logo or a gap-free arrangement.<br>떨어져 있던 도형 조각들이 이동하고 회전해 하나의 로고나 빈틈 없는 배열을 완성하는 움직임 | [MP4](../effects/piece-assembly/clip.mp4) |
| 413 | [Shatter · 파편 분해](../effects/shatter/) | A screen or word cracks into triangular shards that spin apart.<br>화면이나 글자가 삼각 파편으로 갈라져 회전하며 흩어지는 움직임 | Pending · 준비 중 |
| 414 | [Bend · 벤드](../effects/bend/) | An object is anchored at one end, bends and sways, then springs back.<br>대상이 한쪽 끝을 축으로 휘어졌다가 흔들리며 복원되는 굽힘 | Pending · 준비 중 |
| 415 | [Boolean Path Merge · 부울 패스 결합](../effects/boolean-path-merge/) | Overlapping shapes join, or their intersection is cut out, forming a single silhouette.<br>겹친 도형이 하나로 붙거나 교차 부분이 뚫리며 하나의 실루엣을 만드는 결합 | Pending · 준비 중 |
| 416 | [Corner Peel · 모서리 말림](../effects/corner-peel/) | One corner of a thin surface curls up at an angle, exposing its back and a soft shadow.<br>얇은 면의 한 모서리가 비스듬히 말려 올라가며 뒷면과 그림자가 드러나는 움직임 | Pending · 준비 중 |
| 417 | [Curve Guided Deformation · 곡선 따라 휘기](../effects/curve-guided-deformation/) | A long object slides along a bent path while bending to match it.<br>긴 물체가 구부러진 경로를 따라 미끄러지면서 경로에 맞춰 함께 휜다 | Pending · 준비 중 |
| 418 | [Cyclic Position Swap · 순환 자리 교환](../effects/cyclic-position-swap/) | Two or more objects move along arcs into each other's positions.<br>둘 이상의 대상이 원호를 따라 서로의 자리로 이동한다 | Pending · 준비 중 |
| 419 | [Elastic Mesh · 엘라스틱 메시](../effects/elastic-mesh/) | Pulling one part of a net drags nearby points along late, then they spring back.<br>그물의 한 부분이 당겨지면 주변 점들이 뒤늦게 따라오다 스프링처럼 복원되는 격자 | Pending · 준비 중 |
| 420 | [Graded Array Motion · 그라데이션 배열 모션](../effects/graded-array-motion/) | Elements get slightly different size or rotation values, forming a fan or gradient array.<br>요소마다 크기나 회전량이 조금씩 달라져 부채꼴이나 경사형 배열을 만드는 효과 | Pending · 준비 중 |
| 421 | [Hinged Oscillation · 힌지 개폐](../effects/hinged-oscillation/) | Two parts, like scissors or wings, open and close in opposite directions around the same pivot.<br>가위나 날개처럼 두 부품이 같은 축에서 서로 반대 각도로 열리고 닫히는 반복 | Pending · 준비 중 |
| 422 | [Line Tension Loop · 선 곡률 루프](../effects/line-tension-loop/) | A line alternates between straight and curved interpolation while its data points stay fixed.<br>같은 데이터 점을 잇는 선이 직선에 가까워졌다가 둥근 곡선으로 돌아간다. | Pending · 준비 중 |
| 423 | [Mesh Warp · 메시 워프](../effects/mesh-warp/) | Grid control points move so the whole flat image bends like cloth.<br>격자 제어점이 움직여 평면 이미지 전체가 천처럼 휘고 출렁이는 변형 | Pending · 준비 중 |
| 424 | [Offset Path · 오프셋 패스](../effects/offset-path/) | A shape's outline grows or shrinks outward by a fixed distance.<br>도형의 외곽이 일정 거리만큼 부풀거나 줄어드는 확장과 수축 | Pending · 준비 중 |
| 425 | [Outline Then Fill · 윤곽 후 채움](../effects/outline-then-fill/) | The outline or wireframe appears first, then the interior surfaces and color fill in.<br>윤곽선이 먼저 그려진 뒤 내부 면과 색이 채워지는 2단계 등장 | [MP4](../effects/outline-then-fill/clip.mp4) |
| 426 | [Path Highlight · 패스 하이라이트](../effects/path-highlight/) | Only a short bright stretch travels along the full line.<br>전체 선 중 짧고 밝은 구간만 경로를 따라 지나가는 강조 | [MP4](../effects/path-highlight/clip.mp4) |
| 427 | [Perforated Tear · 절취선 찢기](../effects/perforated-tear/) | A section of a ticket tears along a perforation and drops away while the body stays.<br>표의 한 부분이 절취선을 따라 찢어지며 떨어져 나가고 몸체가 남는 분리 | Pending · 준비 중 |
| 428 | [Pivot Relay · 피벗 릴레이](../effects/pivot-relay/) | An element rotates around one corner, then hands the pivot to another corner and settles.<br>요소가 한 모서리를 축으로 회전하다 다른 모서리로 축을 옮겨 이어서 움직이고 안착하는 동작 | Pending · 준비 중 |
| 429 | [Pucker and Bloat · 퍼커 앤 블로트](../effects/pucker-bloat/) | Vertices and curves are pulled in opposite directions, turning a shape into a star or flower.<br>꼭짓점과 곡선이 서로 반대 방향으로 당겨져 도형이 별이나 꽃처럼 바뀌는 변형 | Pending · 준비 중 |
| 430 | [Round Corners · 모서리 라운딩](../effects/round-corners/) | Sharp corners of a shape gradually round into curves, or return to sharp corners.<br>각진 도형의 모서리가 점점 둥근 곡선으로 바뀌거나 다시 각지게 돌아가는 변화 | Pending · 준비 중 |
| 431 | [Shape Repeater · 셰이프 리피터](../effects/shape-repeater/) | The same shape multiplies with steady offsets in position, rotation and scale.<br>같은 도형이 일정한 위치, 회전, 배율 차이로 복제되어 늘어나는 반복 구조 | Pending · 준비 중 |
| 432 | [Shape Split and Merge · 도형 분할과 통합](../effects/shape-split-merge/) | One shape splits into several smaller shapes, or several shapes merge into one.<br>하나의 도형이 여러 작은 도형으로 갈라지거나, 여러 도형이 하나로 합쳐진다 | [MP4](../effects/shape-split-merge/clip.mp4) |
| 433 | [Skew · 스큐](../effects/skew/) | Slants a shape along an axis to suggest force and speed.<br>축 방향으로 형태를 비스듬히 변형해 힘의 방향과 속도감을 주는 동작 | Pending · 준비 중 |
| 434 | [Soft Body Jiggle · 소프트 바디 흔들림](../effects/soft-body-jiggle/) | A soft mass squashes and jiggles with movement and impact, then returns to a round shape.<br>부드러운 덩어리가 이동과 충돌에 따라 찌그러지고 떨리며 원형으로 돌아온다 | Pending · 준비 중 |
| 435 | [Split Logo Reveal · 스플릿 로고 리빌](../effects/split-lockup/) | A single mark splits apart, reveals a phrase between its halves, then closes again.<br>하나의 마크가 좌우로 벌어져 사이의 문장을 보여 준 뒤 다시 닫히는 로고 연출 | Pending · 준비 중 |
| 436 | [Tapered Stroke · 테이퍼 스트로크](../effects/tapered-stroke/) | A line's start and end thin out like a brush stroke as it lengthens and shortens.<br>선의 시작과 끝이 가늘어지며 붓처럼 길어졌다 줄어드는 가변 폭 스트로크 | Pending · 준비 중 |
| 437 | [Traveling Deformation Wave · 변형 파동 전달](../effects/traveling-deformation-wave/) | A bend that starts on one side of an object travels to the other side and returns it to its original shape.<br>대상의 한쪽에서 시작한 굴곡이 반대쪽으로 이동하고 원래 형태로 돌아온다 | Pending · 준비 중 |
| 438 | [Zig Zag Path · 지그재그 패스](../effects/zigzag-path/) | A smooth outline gains repeating sharp points or waves.<br>매끈한 외곽에 반복되는 뾰족점이나 물결이 서서히 생기는 변형 | Pending · 준비 중 |
| 439 | [Shape Built Letters · 조각 글자 조립](../effects/shape-built-letters/) | Lines and geometric pieces slide together to complete the strokes and ornaments of letters.<br>선과 도형 조각이 움직여 글자의 획과 장식을 완성하는 효과 | Pending · 준비 중 |
| 440 | [Text On Path · 패스 위 텍스트](../effects/text-on-path/) | Characters sit along a curved path and travel over it.<br>글자가 곡선 경로를 따라 배열되고 그 위를 이동하는 효과 | Pending · 준비 중 |

<a id="family-texture"></a>

## TEXTURE & STYLE · 질감·스타일

| Nº | Effect · 효과 | Definition · 정의 | Clip · 클립 |
|---|---|---|---|
| 441 | [Digital Rain · 디지털 문자비](../effects/digital-rain/) | Columns of characters fall from the top, each led by a bright head with a fading tail behind it.<br>문자 열이 위에서 아래로 떨어지고, 밝은 머리 뒤로 점점 흐려지는 꼬리가 남는다 | Pending · 준비 중 |
| 442 | [Fresnel Rim Sweep · 프레넬 림](../effects/fresnel-rim/) | An object rotates while its grazing edges brighten and a soft sheen travels across the surface.<br>회전하는 물체의 가장자리가 시선과 비스듬해질수록 밝아지고, 광택 띠가 회전을 따라 표면 위를 지나간다 | Pending · 준비 중 |
| 443 | [Bulge Lens · 볼록 렌즈](../effects/bulge-lens/) | A transparent lens sweeps across an image and bulges only the region beneath it.<br>투명한 렌즈가 이미지 위를 지나가며 그 아래 부분만 볼록하게 부풀려 보이는 왜곡 | Pending · 준비 중 |
| 444 | [Caustic Light Ripples · 코스틱 물결](../effects/caustic-ripples/) | A bright net of refracted light drifts, concentrates and disperses as if beneath water or glass.<br>수면이나 유리 아래처럼 밝은 그물 모양의 빛이 천천히 흐르고 모였다 흩어진다 | Pending · 준비 중 |
| 445 | [CRT Scanlines · CRT 주사선](../effects/crt-scanlines/) | Fine scanlines, mild curvature, and a moving bright band make the screen look like a CRT monitor.<br>화면 위에 가는 주사선과 약한 곡면 왜곡, 스캔 밝기 띠가 겹쳐 CRT 모니터처럼 보이게 하는 효과 | Pending · 준비 중 |
| 446 | [Film Grain · 필름 그레인](../effects/film-grain/) | A fine layer of grain updated at a low frame rate gives the frame a film texture.<br>프레임 위에 미세한 입자 노이즈를 낮은 프레임 레이트로 갱신해 필름 질감을 주는 효과 | [MP4](../effects/film-grain/clip.mp4) |
| 447 | [Glass Refraction · 유리 굴절](../effects/glass-refraction/) | A glass panel blurs and refracts the background behind it, rippling as the panel moves.<br>유리 패널 뒤 배경이 흐려지고 굴절되어 패널이 움직일 때 함께 일렁이는 효과 | Pending · 준비 중 |
| 448 | [RGB Split Glitch · RGB 분리 글리치](../effects/glitch-rgb-split/) | Color channels and horizontal slices jitter apart for a moment, then snap back to the original frame.<br>색 채널과 가로 조각이 순간적으로 어긋나 떨린 뒤 원래 화면으로 돌아오는 효과 | [MP4](../effects/glitch-rgb-split/clip.mp4) |
| 449 | [God Rays · 빛내림](../effects/god-rays/) | Multiple beams fan out from a light source, sway slowly and pulse in brightness.<br>광원에서 여러 빛줄기가 뻗어 나와 천천히 흔들리고 밝기가 변하는 빛내림 | Pending · 준비 중 |
| 450 | [Holographic sheen · 홀로그램 광택](../effects/holographic-sheen/) | A rainbow sheen slides across a card as the surface angle changes, like a hologram.<br>표면 각도에 따라 색상이 무지개처럼 변하며 광택이 미끄러지는 홀로그램 카드 효과 | Pending · 준비 중 |
| 451 | [Lamp Cone Reveal · 램프 빛 펼치기](../effects/lamp-cone-reveal/) | Two light cones widen from the top sides and reveal the center line like a stage lamp.<br>화면 위쪽 양옆에서 빛 원뿔이 넓어지며 중앙 문구를 무대 조명처럼 비추어 드러내는 효과 | Pending · 준비 중 |
| 452 | [Light Leak · 빛샘](../effects/light-leak/) | Large warm light blobs drift across the frame and fade out, like a film leak.<br>화면보다 큰 따뜻한 빛 덩어리가 프레임을 가로질러 번졌다가 사라지는 필름 질감 효과 | Pending · 준비 중 |
| 453 | [Liquid Metal · 액체 금속](../effects/liquid-metal/) | A silver surface flows viscously while mirror-like reflections keep shifting.<br>은색 표면이 점성 있게 흐르며 거울 같은 반사가 계속 변하는 액체 금속 질감 | Pending · 준비 중 |
| 454 | [Palette Color Cycling · 팔레트 순환](../effects/palette-cycle/) | Pixel positions stay fixed while the palette's color mapping rotates in order, so water or light seems to flow.<br>그림의 픽셀 위치는 고정한 채 팔레트의 색 대응만 순서대로 돌려 물이나 빛이 흐르는 듯 보이게 한다 | Pending · 준비 중 |
| 455 | [Particle Video Mosaic · 입자 비디오 모자이크](../effects/particle-video-mosaic/) | A fixed grid of dots takes its colors from the video frame by frame, redrawing the moving scene as points.<br>점 격자의 위치는 유지한 채 각 점의 색이 영상 프레임을 따라 바뀌어 움직이는 장면을 점으로 재현한다 | Pending · 준비 중 |
| 456 | [Pixel Sorting · 픽셀 정렬](../effects/pixel-sort/) | Pixel rows are pushed by brightness into stretched vertical or horizontal streaks, a glitch-art effect.<br>밝기 순으로 픽셀 줄을 밀어 세로 또는 가로 줄무늬로 늘어뜨리는 글리치 아트 효과 | Pending · 준비 중 |
| 457 | [Silk Flow · 비단 주름 흐름](../effects/silk-flow/) | Glossy cloth-like folds drift slowly while light and shadow flow along them.<br>광택 있는 천 같은 주름이 천천히 움직이며 빛과 그림자가 흐르는 배경 질감 | Pending · 준비 중 |
| 458 | [Topographic contour flow · 등고선 표면 흐름](../effects/topographic-flow/) | Dense contour lines draw across a deforming surface as height and color drift slowly.<br>변형되는 표면 위에 촘촘한 등고선이 그려지며 높이와 색이 천천히 흐르는 배경 | Pending · 준비 중 |
| 459 | [VHS Tracking · VHS 트래킹](../effects/vhs-tracking/) | Horizontal distortion bands and color fringing sweep up the frame, like VHS tape tracking errors.<br>가로 왜곡 띠와 색 번짐이 화면 아래에서 위로 지나가는 VHS 테이프 트래킹 오류 효과 | Pending · 준비 중 |
| 460 | [Animated Dithering · 디더링 모션](../effects/animated-dither/) | An image is drawn with limited colors and regular dot patterns, and the color levels animate.<br>제한된 색과 규칙적 점 패턴으로 이미지를 표현하고 색 단계가 변하며 움직이는 효과 | Pending · 준비 중 |
| 461 | [ASCII Motion · ASCII 모션](../effects/ascii-motion/) | An image becomes a grid of brightness-mapped characters, and the grid tightens until it resolves into the original.<br>이미지를 밝기별 문자 격자로 바꿔 격자 크기가 줄어들며 원본으로 해석되는 효과 | Pending · 준비 중 |
| 462 | [Barrel Lens Warp · 배럴 왜곡](../effects/barrel-warp/) | Straight lines at the screen edge curve and the whole image bulges like a wide-angle lens.<br>화면 가장자리의 직선이 휘며 전체가 광각 렌즈처럼 부풀어 보이는 배럴 왜곡 | Pending · 준비 중 |
| 463 | [Bloom Pulse · 블룸 펄스](../effects/bloom-pulse/) | Soft light spreads around a bright object and then contracts.<br>밝은 물체 주변으로 부드러운 빛이 퍼졌다가 줄어드는 맥동 | Pending · 준비 중 |
| 464 | [Codec Glitch · 코덱 글리치](../effects/codec-glitch/) | Compression blocks and warped colors appear on screen, smear along the motion direction, then return to the original.<br>화면에 압축 블록과 뒤틀린 색이 생기고 블록이 이동 방향으로 번졌다가 원래 영상으로 돌아오는 효과 | Pending · 준비 중 |
| 465 | [Film Dust and Scratches · 필름 먼지와 스크래치](../effects/film-dust-scratches/) | Small dust specks and vertical scratches appear on the frame, then shift position or vanish.<br>작은 먼지점과 세로 긁힘이 프레임에 나타났다가 위치를 바꾸거나 사라지는 필름 흠집 효과 | Pending · 준비 중 |
| 466 | [Flame Noise Loop · 불꽃 노이즈 루프](../effects/flame-noise-loop/) | Flame-like noise flickers around an iris or light source while the central hole tracks a gaze.<br>홍채나 광원 주변의 불꽃 같은 노이즈가 일렁이고 중심 구멍이 시선을 따라 움직이는 루프 | Pending · 준비 중 |
| 467 | [Flowmap Smear · 흐름맵 번짐](../effects/flowmap-smear/) | The image bends or smears in the direction of motion, then recovers over time.<br>이동 방향으로 이미지가 휘거나 일그러졌다가 시간이 지나며 원래대로 복원되는 번짐 | Pending · 준비 중 |
| 468 | [Fluted Glass Drift · 골 유리](../effects/fluted-glass/) | Repeated vertical flutes stretch and fold the background as they drift sideways.<br>반복된 세로 굴곡이 배경을 늘리고 접으며 옆으로 천천히 이동하는 골 유리 | [MP4](../effects/fluted-glass/clip.mp4) |
| 469 | [Gate Weave · 게이트 위브](../effects/gate-weave/) | The footage shakes with tiny mechanical offsets while exposure brightens and darkens slightly, like film gate weave.<br>영상이 작은 기계적 오프셋으로 흔들리고 노출이 미세하게 밝아졌다 어두워지는 필름 게이트 떨림 | Pending · 준비 중 |
| 470 | [Scan band · 스캔 왜곡 띠](../effects/glitch-scan-band/) | A narrow diagonal band passes over the text, and RGB misalignment appears only inside it.<br>좁은 대각 띠가 글자를 지나가고 띠 안에서만 RGB 어긋남이 보이는 효과 | Pending · 준비 중 |
| 471 | [Hatch Fill · 해칭 채움](../effects/hatch-fill/) | A zigzag scribble travels back and forth inside a shape, filling it as if colored by hand.<br>지그재그 낙서선이 도형 안을 왕복하며 손으로 칠하듯 채워지는 해칭 | Pending · 준비 중 |
| 472 | [Ink Bleed · 잉크 번짐](../effects/ink-bleed/) | Ink blobs bleed into paper, merge, then contract, leaving a crisp letter or mark.<br>잉크 덩어리가 종이 속으로 번지며 합쳐진 뒤 수축해 선명한 글자나 마크가 남는 효과 | [MP4](../effects/ink-bleed/clip.mp4) |
| 473 | [Kaleidoscope Motion · 만화경](../effects/kaleidoscope/) | An image is mirrored into symmetry and its pattern keeps changing as the center rotates.<br>이미지가 대칭으로 복제되고 중심 회전에 따라 무늬가 계속 바뀌는 만화경 | Pending · 준비 중 |
| 474 | [Lens Flare · 렌즈 플레어](../effects/lens-flare/) | A long blue-violet horizontal streak extends from a bright point, with small reflection circles trailing.<br>밝은 점에서 가로로 긴 청보라 빛줄기가 뻗고 작은 반사 원이 뒤따르는 렌즈 플레어 | Pending · 준비 중 |
| 475 | [Light Sweep · 라이트 스윕](../effects/light-sweep/) | A tilted band of light passes once through a giant number and title, only inside the glyphs, like a metallic print sheen.<br>기울어진 빛 띠가 큰 숫자와 제목 글자 안쪽만 한 번 훑고 지나가 인쇄된 금속 광택처럼 보이게 한다. | [MP4](../effects/light-sweep/clip.mp4) |
| 476 | [Line Boil · 라인 보일](../effects/line-boil/) | Hand-drawn lines jitter slightly at a low frame rate so they look alive.<br>손그림 선이 낮은 프레임 레이트로 미세하게 떨려 살아 있는 듯 보이는 효과 | Pending · 준비 중 |
| 477 | [Motion Blur · 모션 블러](../effects/motion-blur/) | Multiple samples along the direction of motion are blended to add blur to fast-moving objects.<br>빠르게 움직이는 물체의 이동 방향으로 여러 샘플을 겹쳐 흐림을 더하는 효과 | Pending · 준비 중 |
| 478 | [Moving Light · 이동 광원](../effects/moving-light/) | A light source moves, changing the bright side of an object and the shadow direction together.<br>광원 위치가 이동하며 물체의 밝은 면과 그림자 방향이 함께 바뀌는 효과 | Pending · 준비 중 |
| 479 | [Negative Space Inversion · 네거티브 스페이스 반전](../effects/negative-space-invert/) | The silhouette stays the same while the bright shape and dark space swap roles.<br>실루엣은 유지되고 밝은 면과 어두운 여백의 역할이 뒤바뀌는 전환 | Pending · 준비 중 |
| 480 | [Particle Painting Advection · 입자 붓질](../effects/particle-painting/) | Short brush marks carrying the image's colors move along a flow field and scatter the picture like a painting.<br>이미지 색을 가진 짧은 붓 자국들이 흐름장을 따라 이동하며 그림을 회화처럼 흐트러뜨림 | Pending · 준비 중 |
| 481 | [Polar Coordinates Wrap · 극좌표 말기](../effects/polar-wrap/) | A horizontally laid-out image rolls into a circular band, or unrolls back.<br>가로로 펼친 이미지가 원형 띠로 말려 들어가거나 반대로 펴지는 극좌표 변환 | Pending · 준비 중 |
| 482 | [Progressive Blur · 점진적 블러](../effects/progressive-blur/) | Blur grows toward the content edge so moving content fades away smoothly.<br>콘텐츠 가장자리로 갈수록 흐림이 점점 강해져 움직이는 내용이 자연스럽게 사라지는 블러 | Pending · 준비 중 |
| 483 | [Raindrop Glass · 빗방울 유리](../effects/raindrop-glass/) | Background appears magnified inside drops on the glass as drops merge and run down.<br>유리에 맺힌 물방울 안에서 배경이 확대되어 보이고 방울이 합쳐져 아래로 흐르는 창문 | Pending · 준비 중 |
| 484 | [Ripple Distortion · 파문 왜곡](../effects/ripple-distortion/) | A circular ripple passes over the screen, briefly changing surrounding color and shape, then settles.<br>화면 위로 원형 파문이 지나가며 주변 색과 모양이 잠깐 변했다가 가라앉는 효과 | Pending · 준비 중 |
| 485 | [Slit Scan · 슬릿 스캔](../effects/slit-scan/) | Each row or column is sampled at a different time so the image stretches and curves like a wave.<br>행이나 열마다 시간을 다르게 샘플링해 이미지를 물결치듯 늘이고 휘게 하는 효과 | Pending · 준비 중 |
| 486 | [Strobe Flash · 스트로브 플래시](../effects/strobe-flash/) | Color or texture frames swap repeatedly at short beat intervals, then settle at the end.<br>색이나 질감 프레임이 짧은 비트 간격으로 반복 교체되다가 마지막에 안정되는 효과 | Pending · 준비 중 |
| 487 | [Temporal Wiggle · 시간 흔들림](../effects/temporal-wiggle/) | Noise is added to a motion's playback time so its speed wobbles back and forth irregularly.<br>동작의 재생 시간에 노이즈를 더해 속도가 불규칙하게 앞뒤로 흔들리는 시간 왜곡 | Pending · 준비 중 |
| 488 | [Text Light Rays · 글자 광선](../effects/text-light-rays/) | Colored-edge rays stretch from the letter shapes toward a moving light point.<br>글자 모양에서 빛점 방향으로 색 가장자리를 가진 광선이 길게 뻗는 타이틀 효과 | Pending · 준비 중 |
| 489 | [Animated Texture Fill · 질감 채움 모션](../effects/texture-fill-motion/) | A texture image moves or swaps frame by frame inside a fixed shape mask.<br>고정된 모양 마스크 안에서 질감 이미지가 움직이거나 프레임마다 교체되는 효과 | Pending · 준비 중 |
| 490 | [Turbulent Displace · 난류 왜곡](../effects/turbulent-displace/) | Pixels and outlines slosh along a flowing irregular pattern, then restore.<br>저주파 노이즈에 따라 화면 픽셀과 윤곽이 출렁였다가 원래대로 복원되는 효과 | Pending · 준비 중 |
| 491 | [Twirl Distortion · 트월](../effects/twirl/) | Footage around a center twists and curls like a whirlpool.<br>중심 주변의 영상이 소용돌이처럼 돌아 말리는 트월 왜곡 | Pending · 준비 중 |
| 492 | [Velocity Skew · 속도 기반 스큐](../effects/velocity-skew/) | The faster you scroll, the more letters and cards skew; when it stops they return to their shape.<br>스크롤이 빨라질수록 글자와 카드가 기울고 멈추면 원래 모양으로 돌아오는 효과 | Pending · 준비 중 |
| 493 | [Water Surface Refraction · 수면 굴절](../effects/water-refraction/) | The image wobbles beneath ripples while bright facets of the waves travel across it.<br>이미지가 잔물결 아래에서 흔들리고 물결의 밝은 면이 이동하는 수면 굴절 | Pending · 준비 중 |
| 494 | [Wave Warp · 웨이브 워프](../effects/wave-warp/) | Letter outlines bend and sway like a sine wave while the sentence stays in place.<br>문장의 위치는 유지된 채 글자 윤곽이 사인파처럼 휘고 흔들리는 효과 | Pending · 준비 중 |
| 495 | [Gooey Text Morph · 끈적한 글자 모프](../effects/gooey-text-morph/) | One word blobs into liquid and re-forms as the next word.<br>한 단어가 액체 덩어리처럼 뭉쳤다가 다음 단어로 변하는 모프 | Pending · 준비 중 |
| 496 | [Neon Sign Flicker · 네온 글자 점멸](../effects/neon-sign-flicker/) | A glowing sign's brightness and halo cut in and out irregularly.<br>발광 글자의 밝기와 외곽 빛이 불규칙하게 꺼졌다 켜지는 효과 | Pending · 준비 중 |
| 497 | [Text Echo Trail · 글자 복제 잔상](../effects/text-echo-trail/) | Delayed text copies trail behind a moving phrase and fade out.<br>움직이는 문구 뒤로 여러 복사본이 시간차로 따라오며 사라지는 잔상 | [MP4](../effects/text-echo-trail/clip.mp4) |
| 498 | [Text Liquid Distortion · 글자 액체 왜곡](../effects/text-liquid-distortion/) | Stroke edges and interiors bend and ripple with noise.<br>글자의 윤곽과 내부가 노이즈에 따라 출렁이며 휘는 액체 왜곡 | Pending · 준비 중 |
| 499 | [Text Slice Offset · 글자 조각 어긋남](../effects/text-slice-offset/) | Parallel bands of a word shift in alternating directions.<br>글자를 가른 평행 띠들이 번갈아 서로 다른 방향으로 밀려나는 효과 | Pending · 준비 중 |

<a id="family-generative"></a>

## GENERATIVE · 입자·생성

| Nº | Effect · 효과 | Definition · 정의 | Clip · 클립 |
|---|---|---|---|
| 500 | [Seek and Arrive · 목표 추적과 도착](../effects/seek-arrive/) | An agent turns toward a target and slows down as it approaches.<br>개체가 목표를 향해 방향을 바꾸고 도착 직전에 감속한다. | Pending · 준비 중 |
| 501 | [Text Particle Dissolve · 텍스트 입자 디졸브](../effects/text-particle-dissolve/) | Text breaks into small particles and fades after submission.<br>입력된 문자가 작은 점으로 흩어져 사라지고 입력창이 비워진다. | Pending · 준비 중 |
| 502 | [Domain Warping · 도메인 워핑](../effects/domain-warping/) | A shader background made by warping noise with more noise, organic and endlessly flowing.<br>노이즈를 다시 노이즈로 왜곡해 만든 유기적이고 끝없이 흐르는 셰이더 배경 | Pending · 준비 중 |
| 503 | [Fluid Ink Advection · 유체 잉크](../effects/fluid-ink/) | Colored ink spreads and swirls in water, blending softly.<br>색 잉크가 물속에서 번지고 휘말리며 부드럽게 섞이는 유체 흐름 | Pending · 준비 중 |
| 504 | [Fractal Clouds · 프랙탈 구름](../effects/fractal-clouds/) | Soft cloud masses drift slowly and change shape.<br>부드러운 구름 덩어리가 천천히 이동하며 모양을 바꾸는 프랙탈 구름 | Pending · 준비 중 |
| 505 | [Neuro Noise Veins · 뉴로 노이즈](../effects/neuro-noise/) | Thin bright lines and valleys keep folding and spreading into a web like neurons or veins.<br>얇고 밝은 선과 골이 계속 접히고 퍼지며 신경망이나 혈관 같은 망 구조를 만든다 | Pending · 준비 중 |
| 506 | [Particle Burst · 입자 버스트](../effects/particle-burst/) | Particles explode outward from a single point, fall under gravity, and fade out.<br>한 점에서 입자 여러 개가 사방으로 터져 나가 중력에 떨어지며 사라지는 효과 | [MP4](../effects/particle-burst/clip.mp4) |
| 507 | [Particle image reveal · 입자 이미지 공개](../effects/particle-image-reveal/) | Scattered particles gather into the shape and color of an image and reveal it.<br>흩어진 입자가 모여 이미지의 형태와 색을 이루며 공개되는 효과 | [MP4](../effects/particle-image-reveal/clip.mp4) |
| 508 | [Particle Vortex · 입자 소용돌이](../effects/particle-vortex/) | Particles spiral toward or away from a center in a vortex.<br>입자들이 중심을 향해 또는 밖으로 나선을 그리며 흐르는 소용돌이 | Pending · 준비 중 |
| 509 | [Shooting Stars · 유성](../effects/shooting-stars/) | Thin light trails streak diagonally and fade out like meteors.<br>가는 빛 꼬리가 비스듬히 빠르게 스쳐 지나가고 사라지는 유성 효과 | Pending · 준비 중 |
| 510 | [Smoke Ring Vortex · 연기 고리](../effects/smoke-ring/) | Smoke curls inside a doughnut-shaped ring while its outer edge wobbles slightly.<br>연무가 도넛 모양 고리 안에서 말려 돌고, 고리의 바깥 경계가 미세하게 흔들린다 | Pending · 준비 중 |
| 511 | [Spiral Field Rotation · 나선 필드](../effects/spiral-field/) | A continuous spiral pattern radiates from the center and rotates so it seems to flow inward or outward.<br>중심에서 뻗는 나선 무늬가 일정하게 회전하며 안쪽으로 빨려 들거나 바깥으로 흘러나오는 것처럼 보인다 | Pending · 준비 중 |
| 512 | [Beam Collision Burst · 빛줄기 충돌 폭발](../effects/beam-collision-burst/) | A falling beam bursts into small light fragments the instant it hits the floor or a boundary.<br>떨어지는 빛줄기가 바닥이나 경계에 닿는 순간 작은 빛 조각으로 퍼지는 충돌 | Pending · 준비 중 |
| 513 | [Boid Flocking · 보이드 군집](../effects/boid-flocking/) | Small agents keep their distance, align heading and turn together as one flock.<br>작은 개체들이 거리를 유지하며 방향을 맞추고 한 무리로 함께 회전하는 군집 행동 | Pending · 준비 중 |
| 514 | [Branch Growth · 가지 성장](../effects/branch-growth/) | A trunk splits into branches, smaller branches split again, and the structure grows.<br>한 줄기에서 가지가 갈라지고 작은 가지가 다시 갈라지며 구조가 자라나는 효과 | Pending · 준비 중 |
| 515 | [Cellular Automaton Evolution · 셀룰러 오토마타](../effects/cellular-automaton/) | Grid cells switch on and off by neighbor state, and patterns grow or drift.<br>격자 칸이 이웃 상태에 따라 켜지고 꺼지며 무늬가 성장하거나 이동하는 셀룰러 오토마타 | Pending · 준비 중 |
| 516 | [Differential galaxy · 차등 회전 은하](../effects/differential-galaxy/) | Inner stars orbit faster than outer ones, so spiral arms wind up over time.<br>안쪽 별이 바깥 별보다 빨리 돌아 나선팔이 시간에 따라 감기는 은하 시각화 | Pending · 준비 중 |
| 517 | [Differential Line Growth · 차등 성장](../effects/differential-growth/) | A short line or loop keeps lengthening, wrinkling and folding to fill the available space.<br>짧은 선이나 고리가 계속 길어지며 주름지고 접혀 주어진 공간을 채운다 | Pending · 준비 중 |
| 518 | [Diffusion Limited Aggregation · 확산 제한 성장](../effects/diffusion-limited-growth/) | Wandering points stick where they touch the existing cluster, growing thin, irregular branches outward.<br>떠돌던 점이 기존 덩어리에 닿으면 달라붙어, 가늘고 불규칙한 가지가 바깥으로 자란다 | Pending · 준비 중 |
| 519 | [Eden Boundary Growth · 에덴 성장](../effects/eden-growth/) | New cells attach to the outer boundary of a small cluster, growing a round mass with few gaps.<br>작은 덩어리의 바깥 경계에 새 칸이 하나씩 붙어, 빈틈이 적은 둥근 군집이 점점 커진다 | Pending · 준비 중 |
| 520 | [Electric Arc · 전기 아크](../effects/electric-arc/) | Irregular branching bright lines flash between points or outlines and vanish quickly.<br>불규칙하게 갈라진 밝은 선이 지점이나 윤곽 사이에 번쩍이고 빠르게 사라지는 전기 방전 효과 | Pending · 준비 중 |
| 521 | [Fire Plume · 불꽃 기둥](../effects/fire-plume/) | Bright particles rise, sway and gradually fade at the edges like a column of fire.<br>밝은 입자가 위로 솟으며 흔들리고 가장자리에서 서서히 사라지는 불꽃 기둥 | Pending · 준비 중 |
| 522 | [Firework Bloom · 불꽃놀이](../effects/firework/) | A rising light bursts into many strands in the air, and glowing trails fade.<br>상승한 빛이 공중에서 여러 갈래로 터지고 빛나는 꼬리가 서서히 사라지는 불꽃놀이 | Pending · 준비 중 |
| 523 | [Flow Field · 흐름장](../effects/flow-field/) | Many small particles and trails move along curves following an invisible flow.<br>많은 작은 입자와 잔상이 보이지 않는 흐름을 따라 곡선으로 이동하는 효과 | [MP4](../effects/flow-field/clip.mp4) |
| 524 | [Fractal Zoom · 프랙탈 줌](../effects/fractal-zoom/) | Continuously zoom into a recomputed fractal to reveal repeating structure and new detail.<br>반복 무늬의 작은 부분으로 계속 확대하면 비슷한 구조와 새로운 세부가 다시 나타난다. | Pending · 준비 중 |
| 525 | [Halftone Motion · 하프톤 모션](../effects/halftone-motion/) | A grid of dots whose size follows brightness and moves in waves or scans.<br>격자 위 점의 크기가 밝기를 따르며 물결이나 스캔처럼 움직이는 하프톤 패턴 | [MP4](../effects/halftone-motion/clip.mp4) |
| 526 | [Metaball · 메타볼](../effects/metaball/) | Round blobs grow necks and fuse as they approach, then separate again as they move apart.<br>둥근 방울들이 가까워지면 목이 생겨 붙고 멀어지면 다시 분리되는 액체 합체 효과 | Pending · 준비 중 |
| 527 | [N-body Orbital Cluster · 다체 궤도 군집](../effects/nbody-cluster/) | Many points attract one another and form small clusters and orbiting groups.<br>여러 점이 서로 끌어당기며 작은 무리와 회전 궤도를 만드는 다체 중력 시뮬레이션 | Pending · 준비 중 |
| 528 | [Packing Relaxation · 패킹 이완](../effects/packing-relaxation/) | Scattered circles push each other and adjust size until they settle into an overlap-free layout.<br>흩어진 원이 서로 밀리고 크기를 조절해 겹침 없는 배치로 정착하는 효과 | Pending · 준비 중 |
| 529 | [Particle Scatter & Assemble · 입자 흩어졌다 모이기](../effects/particle-assemble/) | Hundreds of particles floating across the frame fly in and assemble into one large number.<br>화면 전체에 흩어져 떠 있던 입자 수백 개가 날아와 큰 숫자 하나의 모양을 이룬다 | [MP4](../effects/particle-assemble/clip.mp4) |
| 530 | [Particle Force Field · 입자 힘장](../effects/particle-force-field/) | Particles feel attraction, repulsion, and rotation forces, curving around a center and leaving trails.<br>입자들이 끌림, 밀림, 회전의 힘을 받아 중심 주위로 휘며 흔적을 남기는 효과 | Pending · 준비 중 |
| 531 | [Particle Fountain · 입자 분수](../effects/particle-fountain/) | Particles shoot up from a narrow floor outlet and fall in parabolic arcs.<br>바닥의 좁은 출구에서 입자가 위로 솟아 포물선을 그리며 떨어지는 분수 | Pending · 준비 중 |
| 532 | [Particle Life Clusters · 입자 생명](../effects/particle-life/) | Particles of several colors attract and repel by color, forming membrane-wrapped clusters or chasing blobs.<br>여러 색의 입자가 색별 인력과 반발 규칙에 따라 막을 두른 군집이나 서로 쫓는 덩어리를 만든다 | Pending · 준비 중 |
| 533 | [Connected Particle Network · 입자 연결망](../effects/particle-network/) | Moving dots connect with nearby ones by lines that vanish as they drift apart.<br>움직이는 점 사이에서 가까운 것끼리 선이 이어지고 멀어지면 사라지는 입자 연결망 | [MP4](../effects/particle-network/clip.mp4) |
| 534 | [Physarum Trail Network · 점균 네트워크](../effects/physarum-network/) | Many agents follow the trails left by earlier ones, and the paths that remain thicken into a connected network.<br>많은 점이 앞선 점이 남긴 흔적을 따라 모이며, 남은 길이 굵은 연결망으로 굳어 간다 | Pending · 준비 중 |
| 535 | [Rain Streaks · 빗줄기](../effects/rain-streaks/) | Thin lines fall fast in one direction and leave small marks on the ground.<br>가는 선들이 같은 방향으로 빠르게 떨어지고 바닥에서 작은 흔적을 남기는 빗줄기 | Pending · 준비 중 |
| 536 | [Random Walk · 랜덤 워크](../effects/random-walk/) | Dots repeat short random steps, leaving irregular trails.<br>점들이 짧은 임의 이동을 반복하며 불규칙한 궤적을 남기는 랜덤 워크 | Pending · 준비 중 |
| 537 | [Reaction Diffusion Growth · 반응 확산](../effects/reaction-diffusion/) | Small blobs spread, split and settle into stripes or a maze-like pattern.<br>작은 얼룩이 번지고 갈라지며 줄무늬나 미로 같은 무늬로 바뀌는 성장 과정을 보여 준다 | Pending · 준비 중 |
| 538 | [Rigid Body Cascade · 강체 충돌](../effects/rigid-body-cascade/) | Many balls or boxes fall under gravity, collide, bounce and pile up on the floor.<br>여러 공이나 상자가 중력으로 떨어져 서로 부딪히고 튕기며 바닥에 쌓이는 물리 낙하 | Pending · 준비 중 |
| 539 | [Rising Bubbles · 기포 상승](../effects/rising-bubbles/) | Translucent circles rise from below, sway, grow and fade away.<br>반투명 원이 아래에서 올라오며 좌우로 흔들리고 커지다가 터지듯 사라지는 기포 | Pending · 준비 중 |
| 540 | [Smoke Plume · 연기 확산](../effects/smoke-plume/) | Soft blobs rise, grow, overlap and thin out into smoke.<br>부드러운 덩어리가 위로 올라가며 커지고 서로 겹쳐 옅어지는 연기 | Pending · 준비 중 |
| 541 | [Spark Spray · 불티 분사](../effects/spark-spray/) | Small bright dots fly outward, leave short tails and go out.<br>작은 밝은 점이 빠르게 튀어 나가 짧은 꼬리를 남기고 꺼지는 불티 | Pending · 준비 중 |
| 542 | [Strange Attractor Trails · 이상 끌개](../effects/strange-attractor/) | Many points loop through complex 3D orbits, drawing rings and overlapping bands.<br>많은 점이 복잡한 3D 궤도를 반복해서 돌며 고리와 겹친 띠를 만드는 이상 끌개 | Pending · 준비 중 |
| 543 | [Tendril Wave · 촉수 물결](../effects/tendril-wave/) | Thin tendrils radiate from a center and bend and straighten in staggered phases.<br>중심에서 퍼진 가는 촉수들이 엇갈린 위상으로 구부러지고 다시 펴지는 방사 움직임 | Pending · 준비 중 |
| 544 | [Animated Voronoi · 보로노이 모션](../effects/voronoi-motion/) | Irregular cells and crack patterns flow while changing size and shape.<br>불규칙한 셀과 균열 무늬가 크기와 모양을 바꾸며 흐르는 보로노이 패턴 | Pending · 준비 중 |
| 545 | [Wave Interference · 파동 간섭](../effects/wave-interference/) | Grid dots move with different sine phases, creating bright nodes and empty regions.<br>격자의 점들이 서로 다른 사인 위상으로 움직여 밝은 결절과 빈 영역을 만드는 패턴 | Pending · 준비 중 |
| 546 | [Particle Filled Text · 입자 채움 글자](../effects/particle-filled-text/) | Small dots inside letter shapes keep moving while still forming the strokes.<br>글자 내부의 작은 점들이 계속 움직이며 획의 형태를 이루는 입자 채움 글자 | Pending · 준비 중 |

<a id="family-depth"></a>

## 3D & DEPTH · 3D·깊이

| Nº | Effect · 효과 | Definition · 정의 | Clip · 클립 |
|---|---|---|---|
| 547 | [Rotating Globe Connections · 회전 지구 연결 호](../effects/globe-connection-arcs/) | A globe rotates slowly as connection arcs appear between geographic locations.<br>지구가 천천히 회전하고 지역 점 사이에 빛나는 호가 순서대로 나타난다. | Pending · 준비 중 |
| 548 | [Card Flip · 카드 플립](../effects/card-flip/) | A card rotates 180 degrees around its vertical or horizontal axis to swap front for back.<br>카드가 세로축이나 가로축으로 180도 돌아 앞면에서 뒷면으로 바뀌는 움직임 | [MP4](../effects/card-flip/clip.mp4) |
| 549 | [Depth Assemble · 3D 조립](../effects/depth-assemble/) | Elements scattered in 3D space, each tilted and spinning, converge one after another into their exact flat positions.<br>입체 공간에 흩어져 회전하던 요소들이 평면의 정해진 자리로 차례로 모이는 움직임 | Pending · 준비 중 |
| 550 | [Object Turntable · 오브젝트 턴테이블](../effects/object-turntable/) | A product or 3D object turns on a fixed axis to show its front, sides and back in turn.<br>제품이나 입체 물체가 고정된 중심축을 돌며 앞면, 옆면, 뒷면을 차례로 보여 주는 회전 | Pending · 준비 중 |
| 551 | [Portal Reveal · 포털 리빌](../effects/portal-reveal/) | A glowing opening appears and the subject passes through its edge toward the viewer.<br>빛나는 구멍이 열리고 대상이 그 경계를 통과해 앞으로 나오는 움직임 | Pending · 준비 중 |
| 552 | [Text Extrusion · 텍스트 익스트루전](../effects/text-extrusion/) | The same letters are stacked, their back layers spread along depth and the group turns slightly to reveal a thick side.<br>같은 글자를 겹쳐 깊이 방향으로 벌리고 살짝 돌려 두꺼운 옆면이 보이게 하는 움직임 | [MP4](../effects/text-extrusion/clip.mp4) |
| 553 | [Tile Flip · 타일 플립](../effects/tile-flip/) | Small tiles across a headline flip like a wave to reveal the text on their other face.<br>글자 표면의 작은 타일들이 파도처럼 차례로 뒤집혀 반대 면의 글자를 드러내는 움직임 | Pending · 준비 중 |
| 554 | [Wave Carousel · 웨이브 캐러셀](../effects/wave-carousel/) | Angular boxes travel along a wave and each takes its turn at the front.<br>각진 상자들이 파동의 높낮이를 따라 이동하며 차례로 앞에 서는 순환 구조 | Pending · 준비 중 |
| 555 | [Animated Lighting · 조명 애니메이션](../effects/animated-lighting/) | The color and intensity of light on a 3D object change, revealing different parts of it.<br>입체 물체를 비추는 빛의 색과 세기가 바뀌어 물체의 다른 부분이 드러나는 연출 | Pending · 준비 중 |
| 556 | [Atmospheric Depth · 대기 원근](../effects/atmospheric-depth/) | Distant objects look hazy and faint in fog, then sharpen as they come closer.<br>먼 층은 안개 속에서 흐리고 옅게 보이다가 가까워지며 선명해지는 깊이 표현 | Pending · 준비 중 |
| 557 | [Camera Fly-through · 카메라 플라이스루](../effects/camera-flythrough/) | A camera flies through seven planes spaced 900px apart and stops on the final keyword.<br>깊이 900px 간격의 일곱 평면을 카메라가 통과하며 마지막 핵심어에 멈춘다 | [MP4](../effects/camera-flythrough/clip.mp4) |
| 558 | [3D Card Flip Stack · 3D 카드 플립 스택](../effects/card-flip-stack/) | Five overlapping paper sheets flip in sequence and stack behind a frontal final card.<br>겹친 종이 다섯 장이 순차로 뒤집혀 뒤로 쌓이는 3D 전환 | [MP4](../effects/card-flip-stack/clip.mp4) |
| 559 | [Corner Pin · 코너 핀](../effects/corner-pin/) | The four corners of a plane move, tilting the image into a perspective shape.<br>평면의 네 모서리가 각각 움직이며 화면이 원근 형태로 기울어져 공간에 붙는다 | Pending · 준비 중 |
| 560 | [Coverflow · 커버플로우](../effects/coverflow/) | Cards travel along a curved arrangement: the center card faces front and large, side cards tilt away and shrink.<br>카드가 곡면 배열을 따라 이동하며 중앙 카드는 크고 정면, 옆 카드는 비스듬히 작아지는 목록 | [MP4](../effects/coverflow/clip.mp4) |
| 561 | [Deep Multi-layer Parallax · 깊은 다층 패럴랙스](../effects/deep-parallax/) | A horizontal camera move reveals depth through seven independently paced editorial layers.<br>7겹 지면이 서로 다른 속도로 흘러 깊이를 드러내는 카메라 이동 | [MP4](../effects/deep-parallax/clip.mp4) |
| 562 | [Depth Card Flyby · 뎁스 카드 플라이바이](../effects/depth-card-flyby/) | Stacked cards roll forward one by one while the passed card tumbles toward the camera.<br>앞뒤로 쌓인 카드가 차례로 앞으로 구르고 지난 카드는 카메라 쪽으로 넘어가는 순환 | Pending · 준비 중 |
| 563 | [Dynamic Reflection · 동적 반사](../effects/dynamic-reflection/) | When surrounding objects or lights move, the reflection inside a mirror-like surface moves with them.<br>주변 물체나 조명이 움직이면 거울 같은 표면 안의 반사도 함께 이동한다 | Pending · 준비 중 |
| 564 | [Exploded Assembly · 분해도 조립](../effects/exploded-assembly/) | A product's parts separate along an axis to reveal its internal structure, then gather back into one body.<br>제품의 부품들이 축을 따라 벌어져 내부 구조를 보여 준 뒤 한 몸체로 다시 모인다 | Pending · 준비 중 |
| 565 | [Hard Shadow Pop · 하드 섀도 팝](../effects/hard-shadow-pop/) | An element shifts a little diagonally while a stepped, hard-edged shadow grows behind it.<br>요소가 대각선으로 조금 이동하며 계단 같은 단단한 그림자가 늘어나 튀어나오는 표현 | Pending · 준비 중 |
| 566 | [Image Unroll · 이미지 언롤](../effects/image-unroll/) | A rolled-up image surface unfurls and settles as a flat picture.<br>말려 있던 이미지 면이 펼쳐지며 평평한 사진으로 정착하는 움직임 | Pending · 준비 중 |
| 567 | [Layer Separation · 레이어 분리와 재결합](../effects/layer-separation/) | Stacked flat layers spread out at different depths and angles, then fold back together.<br>겹쳐진 평면 레이어들이 깊이와 각도 차이를 두고 벌어져 보인 뒤 다시 포개진다 | [MP4](../effects/layer-separation/clip.mp4) |
| 568 | [Noise Blob · 노이즈 블롭](../effects/noise-blob/) | A sphere's surface bulges and twists unevenly, continually changing shape.<br>구의 표면이 울퉁불퉁 솟거나 비틀리며 계속 형태를 바꾼다 | Pending · 준비 중 |
| 569 | [Paper Crumple · 종이 구김과 복원](../effects/paper-crumple/) | Flat paper folds along several creases into a small ball, then opens back out.<br>평평한 종이가 여러 주름을 따라 작은 덩어리로 구겨지고 다시 펼쳐지는 변형 | Pending · 준비 중 |
| 570 | [Perspective Flatten · 원근 평면화](../effects/perspective-flatten/) | A screen that starts tilted and small rotates flat to face the viewer and grows.<br>비스듬히 기울어 작게 보이던 화면이 진행에 따라 정면으로 펴지며 커지는 소개 | Pending · 준비 중 |
| 571 | [Perspective Grid Drift · 원근 격자 전진](../effects/perspective-grid-drift/) | Grid lines converging toward the horizon flow forward toward the viewer.<br>수평선 쪽으로 모이는 격자 선이 앞으로 흘러오는 배경 | Pending · 준비 중 |
| 572 | [Perspective Panel Rotation · 원근 패널 회전](../effects/perspective-panel-rotation/) | Long panels of different colors rotate around a central axis, fanning out at an angle with near faces appearing larger.<br>서로 다른 색의 긴 패널이 중심축 주위에서 회전하며 비스듬히 펼쳐지고 가까운 면이 크게 보인다 | Pending · 준비 중 |
| 573 | [Pop-up Book · 팝업북 전개](../effects/popup-book/) | A book's pages open and folded paper structures rise up to form a scene.<br>책 페이지가 열리며 접힌 종이 구조가 솟아올라 하나의 장면을 만든다 | Pending · 준비 중 |
| 574 | [Screen Emergence · 스크린 이머전스](../effects/screen-emergence/) | A tilted device screen flattens to face front, then the content inside scales up beyond the frame.<br>기울어진 기기 화면이 정면으로 펴진 뒤 화면 속 콘텐츠가 바깥으로 확대되어 나오는 연출 | Pending · 준비 중 |
| 575 | [Shadow Elevation · 그림자 엘리베이션](../effects/shadow-elevation/) | As an object rises off the surface, its shadow widens and fades, revealing how high it floats.<br>대상이 위로 떠오를수록 그림자가 넓어지고 옅어져 떠 있는 높이가 드러나는 표현 | Pending · 준비 중 |
| 576 | [Spherize · 구면화](../effects/spherize/) | A flat image bulges in the middle as if wrapped around a sphere.<br>평면 이미지가 구면에 감긴 듯 가운데가 튀어나오며 움직인다 | Pending · 준비 중 |
| 577 | [Starfield Warp · 스타필드 워프](../effects/starfield-warp/) | Stars near the center stream outward in perspective, stretching into long streaks of light.<br>화면 중심 근처의 별이 원근에 따라 바깥으로 빠르게 뻗어 긴 빛줄기가 되는 워프 연출 | Pending · 준비 중 |
| 578 | [Letter Flip Reveal · 글자 뒤집기 등장](../effects/letter-flip-3d/) | Text lying flat tips up on a horizontal or vertical axis to reveal its front face.<br>납작하게 누워 있던 글자가 가로축이나 세로축으로 회전해 앞면을 드러내는 입체 등장 | Pending · 준비 중 |
| 579 | [Text On 3D Surface · 3D 표면 위 텍스트](../effects/text-on-3d-surface/) | Phrases wrap around a cylinder or ring and rotate so the front-facing phrase keeps changing.<br>문구가 원통이나 링 표면에 둘러 배치되고 회전하며 앞면 문구가 바뀌는 효과 | Pending · 준비 중 |

<a id="family-loop"></a>

## LOOP & AMBIENT · 반복·앰비언트

| Nº | Effect · 효과 | Definition · 정의 | Clip · 클립 |
|---|---|---|---|
| 580 | [Walk Cycle · 걷기 사이클](../effects/walk-cycle/) | A rigged character alternates its arms and legs in a repeating walk.<br>관절을 가진 캐릭터가 팔과 다리를 번갈아 움직이며 반복해서 걷는다. | Pending · 준비 중 |
| 581 | [Arc Spinner · 원호 스피너](../effects/arc-spinner/) | A rotating arc alternately lengthens and shortens.<br>원호가 돌면서 길어졌다 짧아져 계속 작업 중임을 알린다. | [MP4](../effects/arc-spinner/clip.mp4) |
| 582 | [Breathing Loop · 브리딩 루프](../effects/breathing-loop/) | A resting element repeats subtle scale and position changes.<br>멈춘 요소가 아주 작은 크기와 위치 변화를 반복한다. | Pending · 준비 중 |
| 583 | [Float Loop · 플로트 루프](../effects/float-loop/) | An element gently bobs up and down.<br>요소가 천천히 위아래로 움직이며 공중에 떠 있는 것처럼 보인다. | Pending · 준비 중 |
| 584 | [Indeterminate Progress · 불확정 프로그레스](../effects/indeterminate-progress/) | A bright bar repeatedly sweeps across a clipped track.<br>짧은 밝은 막대가 트랙을 반복해서 지나간다. | Pending · 준비 중 |
| 585 | [Loading Dots · 로딩 도트](../effects/loading-dots/) | Dots bounce or pulse with staggered phases.<br>나란한 점들이 시간차로 커지거나 위로 뛰고 다시 돌아온다. | [MP4](../effects/loading-dots/clip.mp4) |
| 586 | [Marquee · 마키](../effects/marquee/) | Duplicated content flows continuously across the viewport.<br>콘텐츠가 화면 밖으로 나간 뒤 반대편에서 이어져 끊임없이 흐른다. | [MP4](../effects/marquee/clip.mp4) |
| 587 | [Ripple Rings · 리플 링](../effects/ripple-rings/) | Concentric rings expand and fade from a shared center.<br>중심에서 생긴 원들이 커지고 흐려지며 사라진다. | [MP4](../effects/ripple-rings/clip.mp4) |
| 588 | [Skeleton Shimmer · 스켈레톤 시머](../effects/skeleton-shimmer/) | A bright band travels across muted content placeholders.<br>내용 자리의 옅은 블록 위로 밝은 띠가 지나간다. | Pending · 준비 중 |
| 589 | [Spin Loop · 회전 루프](../effects/spin-loop/) | A gear, pointer, or loader rotates around a fixed center.<br>기어나 시계 바늘이나 로더가 중심 위치를 유지하며 계속 회전한다. | Pending · 준비 중 |
| 590 | [Stroke Chase · 스트로크 체이스](../effects/stroke-chase/) | A short illuminated segment travels around an outline.<br>짧은 선분이나 밝은 점이 대상의 윤곽을 따라 반복해서 돈다. | Pending · 준비 중 |
| 591 | [Wiggle · 위글](../effects/wiggle/) | A continuous, irregular jitter in position or rotation.<br>위치나 회전이 불규칙하게 이어지며 미세하게 흔들리는 움직임 | Pending · 준비 중 |
| 592 | [Ambient Glow · 앰비언트 글로우](../effects/ambient-glow/) | A blurred multicolor light shifts and brightens behind a surface.<br>표면 뒤의 부드러운 다색 빛이 천천히 밝아지고 위치가 변한다. | Pending · 준비 중 |
| 593 | [Ambient Particle Drift · 앰비언트 입자 유영](../effects/ambient-particle-drift/) | Small, faint particles drift at different speeds.<br>작고 옅은 입자가 서로 다른 속도로 떠다닌다. | Pending · 준비 중 |
| 594 | [Bar Wave Loader · 막대 웨이브 로더](../effects/bar-wave-loader/) | Adjacent bars rise and fall in a staggered wave.<br>나란한 막대들이 차례로 길어지고 짧아져 파도처럼 움직인다. | Pending · 준비 중 |
| 595 | [Chasing Dots · 체이싱 도트](../effects/chasing-dots/) | Dots orbit together while their sizes change with phase offsets.<br>여러 점이 원을 따라 돌면서 크기와 간격을 바꾸며 서로를 쫓는다. | Pending · 준비 중 |
| 596 | [Chomp Loader · 점 먹기 로더](../effects/chomp-loader/) | A circular character opens its mouth as a row of dots moves into it.<br>입을 벌리는 원형 캐릭터가 연속된 작은 점을 삼킨다. | Pending · 준비 중 |
| 597 | [Circular Dot Wave · 원형 도트 웨이브](../effects/circular-dot-wave/) | Dots around a circle brighten sequentially.<br>원 둘레의 점이나 짧은 막대가 순서대로 커지거나 밝아진다. | Pending · 준비 중 |
| 598 | [Color Cycle · 컬러 사이클](../effects/color-cycle/) | A surface cycles slowly through a small palette.<br>배경이나 요소의 색이 여러 색상 사이를 천천히 바꾼다. | Pending · 준비 중 |
| 599 | [Energy Orb · 에너지 오브](../effects/energy-orb/) | A luminous orb gently deforms while light circulates inside.<br>빛나는 구체의 가장자리가 부드럽게 변형되고 내부 빛이 순환한다. | Pending · 준비 중 |
| 600 | [Firefly Twinkle · 반딧불 점멸](../effects/firefly-twinkle/) | Floating lights brighten and dim with independent rhythms.<br>떠다니는 작은 빛이 서로 다른 박자로 밝아졌다 어두워진다. | Pending · 준비 중 |
| 601 | [Flickering Grid · 플리커 격자](../effects/flickering-grid/) | Selected grid cells fade in and out at staggered times.<br>격자의 일부 칸이나 점이 독립적으로 밝아지고 사라진다. | Pending · 준비 중 |
| 602 | [Flowing Wave Field · 웨이브 흐름](../effects/flowing-wave-field/) | Phase-shifted curves flow across the frame like waves.<br>여러 곡선과 줄무늬가 위상을 달리하며 파도처럼 움직인다. | Pending · 준비 중 |
| 603 | [Folding Cube Loader · 폴딩 큐브 로더](../effects/folding-cube-loader/) | Four small panels fold and unfold in sequence.<br>네 개의 작은 면이 차례로 3D 회전하며 접혔다 펼쳐진다. | Pending · 준비 중 |
| 604 | [Gradient Drift · 그라디언트 드리프트](../effects/gradient-drift/) | Large gradient regions drift slowly across the surface.<br>큰 그라디언트의 위치가 천천히 움직이며 색 영역이 흐른다. | Pending · 준비 중 |
| 605 | [Grid Pulse · 격자 펄스](../effects/grid-pulse/) | Grid cells shrink and grow with diagonal phase offsets.<br>격자의 칸들이 대각선이나 행 순서로 줄어들고 다시 커진다. | Pending · 준비 중 |
| 606 | [Hourglass Loader · 모래시계 로더](../effects/hourglass-loader/) | Sand drains between two triangular chambers before the hourglass flips.<br>모래시계나 두 삼각형이 뒤집히고 내부 채움이 다시 흘러간다. | Pending · 준비 중 |
| 607 | [Hypnotic Pattern · 회전 패턴 루프](../effects/hypnotic-pattern/) | Repeated geometric bands rotate to create a rhythmic visual pattern.<br>동심원이나 반복 줄무늬가 회전 또는 신축하며 시각적 진동을 만든다. | Pending · 준비 중 |
| 608 | [Infinity Path Loader · 인피니티 로더](../effects/infinity-path-loader/) | A short stroke travels continuously around an infinity path.<br>점이나 짧은 선이 무한대 모양 경로를 끊김 없이 돈다. | Pending · 준비 중 |
| 609 | [Marching Ants · 행진 점선](../effects/marching-ants/) | Dashes travel along an outline as their phase advances.<br>점선의 간격과 위상이 바뀌어 윤곽을 따라 흐른다. | Pending · 준비 중 |
| 610 | [Mesh Gradient Flow · 메시 그라디언트 흐름](../effects/mesh-gradient-flow/) | Colors blend as soft centers drift and change size.<br>부드러운 여러 색 덩어리가 천천히 위치와 크기를 바꾸며 서로 섞인다. | Pending · 준비 중 |
| 611 | [Nature Growth Loop · 자연 성장 루프](../effects/nature-growth-loop/) | Natural shapes grow in stages and return to their starting size.<br>식물이나 해와 같은 작은 자연 도형이 자라거나 떠오르며 반복한다. | Pending · 준비 중 |
| 612 | [Offset Loop · 누적 오프셋 루프](../effects/offset-loop/) | Each repetition adds its final displacement and continues forward.<br>같은 동작이 반복될 때마다 마지막 변위가 더해져 계속 전진한다. | Pending · 준비 중 |
| 613 | [Orbit Loop · 공전 루프](../effects/orbit-loop/) | Objects orbit a central subject while keeping their labels upright.<br>아이콘이나 이미지가 중심 객체 주위를 같은 또는 서로 다른 궤도로 돈다. | [MP4](../effects/orbit-loop/clip.mp4) |
| 614 | [Path Conveyor · 경로 컨베이어](../effects/path-conveyor/) | Small objects travel repeatedly along a conveyor-like route.<br>작은 객체가 컨베이어나 미로 경로를 따라 반복 이동한다. | Pending · 준비 중 |
| 615 | [Radar Sweep · 레이더 스윕](../effects/radar-sweep/) | A bright scan sweeps across an area and leaves brief highlights.<br>빛나는 선이나 부채꼴이 영역을 훑고 통과한 점이 잠깐 빛난다. | Pending · 준비 중 |
| 616 | [Rolling Shape Loop · 도형 굴리기 루프](../effects/rolling-shape-loop/) | A shape translates along a floor while rotating in proportion to its travel.<br>원이나 다각형이 바닥을 따라 구르거나 모서리를 축으로 넘어간다. | Pending · 준비 중 |
| 617 | [Rotating Plane Loader · 회전 평면 로더](../effects/rotating-plane-loader/) | A square flips around its horizontal and vertical axes in sequence.<br>정사각형이 가로와 세로 3D 축을 번갈아 돌아 앞뒤를 보여 준다. | Pending · 준비 중 |
| 618 | [Tiled Pattern Drift · 반복 패턴 흐름](../effects/tiled-pattern-drift/) | A tiled pattern drifts continuously and reconnects at its boundary.<br>도형 격자와 선 무늬가 일정한 방향으로 흘러 경계에서 다시 이어진다. | Pending · 준비 중 |
| 619 | [Wandering Squares · 배회하는 사각형](../effects/wandering-squares/) | Small squares travel around a closed rectangular route while rotating and scaling.<br>작은 정사각형들이 네 모서리를 이동하면서 회전하고 크기를 바꾼다. | Pending · 준비 중 |
| 620 | [Watching Eyes · 눈동자 시선 루프](../effects/watching-eyes/) | Pupils look from side to side and the eyelids briefly close.<br>한 쌍의 눈동자가 좌우로 이동하고 눈꺼풀이 잠깐 닫힌다. | Pending · 준비 중 |
| 621 | [Wiggle Loop · 위글 루프](../effects/wiggle-loop/) | An irregular wobble reconnects smoothly at the loop boundary.<br>불규칙한 흔들림이 끝에서 처음으로 자연스럽게 이어진다. | Pending · 준비 중 |
| 622 | [Circular Text Spin · 원형 글자 회전](../effects/circular-text-spin/) | A sentence set around a circle rotates continuously about its center.<br>원 둘레에 놓인 문장이 중심을 축으로 계속 회전하는 효과 | Pending · 준비 중 |
| 623 | [Credit Roll · 엔딩 크레디트 롤](../effects/credit-roll/) | A list of names and roles scrolls upward at a constant speed.<br>이름과 역할 목록이 일정한 속도로 아래에서 위로 올라가는 엔딩 크레딧 | Pending · 준비 중 |

<a id="family-caption"></a>

## CAPTIONS · 자막·하단 자막

| Nº | Effect · 효과 | Definition · 정의 | Clip · 클립 |
|---|---|---|---|
| 624 | [Analog Medium Text · 분필과 붓 글자](../effects/analog-medium-text/) | Chalk letters are written, then an eraser band passes over leaving a faint smudge.<br>분필로 글자가 그려진 뒤 지우개 띠가 지나가며 흐린 흔적을 남기는 칠판 효과 | Pending · 준비 중 |
| 625 | [Caption Page Swap · 자막 페이지 교체](../effects/caption-page-swap/) | One or two lines of caption swap wholesale in a fixed bottom slot, timed to each utterance.<br>한두 줄짜리 자막이 화면 하단 고정 위치에서 발화 구간에 맞춰 통째로 교체되는 방식 | Pending · 준비 중 |
| 626 | [Caption Takeover · 자막 화면 점유](../effects/caption-takeover/) | The usual caption line swaps for a huge full-frame title for one beat, then returns to the reading rail.<br>평소 하단 자막이 한 순간 화면 전체를 채우는 큰 타이틀로 바뀌었다가 원래 자막으로 돌아오는 효과 | [MP4](../effects/caption-takeover/clip.mp4) |
| 627 | [Crosshair Caption · 조준선 자막](../effects/crosshair-caption/) | Two thin lines converge on the center of a word, then the letters appear instantly.<br>가는 수평선과 수직선이 단어의 중심으로 모인 뒤 글자가 순간적으로 나타나는 조준형 자막 | Pending · 준비 중 |
| 628 | [Hologram Text Boot · 홀로그램 부팅](../effects/hologram-text-boot/) | A projection cone ignites from a glowing point and a scanning light builds a text panel upward.<br>아래 발광점에서 투영 광원이 켜지고 위로 훑는 빛이 글자판을 만들어 내는 홀로그램 부팅 | Pending · 준비 중 |
| 629 | [Karaoke Caption · 카라오케 자막](../effects/karaoke-caption/) | The caption line stays put while only the color or pill background of the spoken word moves.<br>자막 줄은 그대로 두고 발화 중인 단어의 색이나 배경만 이동하는 효과 | [MP4](../effects/karaoke-caption/clip.mp4) |
| 630 | [Laser Ignite Text · 레이저 점화](../effects/laser-ignite-text/) | Two beams converge on the word position and the letters ignite at the point of contact.<br>두 광선이 단어 자리에 모이고 그 접점에서 글자가 켜지는 레이저 점화 효과 | Pending · 준비 중 |
| 631 | [LED Matrix Text · LED 문자 점등](../effects/led-matrix-text/) | Dot-matrix letters light up column by column from the left, flicker briefly on arrival, then hold.<br>점 행렬 글자가 열 단위로 왼쪽부터 켜지고 도착 깜빡임 뒤 고정되는 전광판 텍스트 | Pending · 준비 중 |
| 632 | [Lower Third Reveal · 하단 자막 바](../effects/lower-third-reveal/) | A speaker name and role slide in on a background bar at the lower part of the frame, hold, then leave.<br>화자 이름과 소속이 하단에서 배경 띠와 함께 나타나 잠시 머문 뒤 사라지는 자막 띠 | [MP4](../effects/lower-third-reveal/clip.mp4) |
| 633 | [Lyric Line Focus · 가사 줄 초점](../effects/lyric-line-focus/) | Each new lyric line rises to center while the previous line is pushed up and dimmed.<br>새 가사 줄이 중앙으로 올라오고 지난 줄은 위로 밀려 어두워지는 효과 | Pending · 준비 중 |
| 634 | [Papercut Placement · 종이 조각 놓기](../effects/papercut-placement/) | Paper word cutouts are dropped in at crooked angles and jitter at a low frame rate.<br>단어 종이 조각들이 비뚤어진 자세로 툭 놓이고 저프레임으로 조금씩 떠는 스톱모션 자막 | Pending · 준비 중 |
| 635 | [Stamp Impact · 도장 타격](../effects/stamp-impact/) | Text hovers large, drops onto the screen, presses in for a beat, and stops.<br>글자가 크게 떠 있다가 화면에 내려앉아 순간적으로 눌리고 멈추는 도장 임팩트 | Pending · 준비 중 |
| 636 | [Subject Occluded Caption · 인물 뒤 자막](../effects/subject-occluded-caption/) | Large caption sits behind the speaker so the body partly covers the letters.<br>큰 자막이 인물 뒤에 놓여 인물 몸이 글자를 일부 가리는 삽입형 자막 | Pending · 준비 중 |
| 637 | [Word Pop Caption · 단어 팝 자막](../effects/word-pop-caption/) | Each spoken word pops in turn to form short caption groups.<br>말하는 단어가 차례로 작게 튀어 오르며 짧은 자막 묶음이 되는 효과 | [MP4](../effects/word-pop-caption/clip.mp4) |
