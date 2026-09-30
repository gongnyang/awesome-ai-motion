/* awesome-ai-motion 공용 하네스
   - 효과 HTML은 <body data-no data-cat data-ko data-en data-meta data-dur> + <main class="scene"> 만 쓴다.
   - 스크립트에서 const tl = Motion.timeline(); ... Motion.ready(); 로 끝낸다.
   - 결정론: 시간은 오직 타임라인. Math.random·Date.now 금지(Motion.rand(seed) 사용).
   - 렌더: ?render=1 이면 자동 재생 없이 window.__seek(sec)만 받는다.
   - 미리보기: 기본은 반복 재생, ?t=1.5 면 그 시점 정지, ?embed=1 이면 폴리오·캡션 없이 장면만. */
(function(){
  const qs = new URLSearchParams(location.search);
  const B = document.body;
  const DUR = parseFloat(B.dataset.dur || '3');
  const FPS = 30;
  const mode = qs.has('render') ? 'render' : (qs.has('t') ? 'still' : 'live');
  // 화면 비율: data-size="720x1280"(세로 숏폼) 등. 기본 1280x720
  const size = (B.dataset.size || '1280x720').split('x').map(Number);
  document.documentElement.style.setProperty('--W', size[0] + 'px');
  document.documentElement.style.setProperty('--H', size[1] + 'px');
  if (size[1] > size[0]) B.classList.add('portrait');

  // 1) 폴리오·캡션 주입
  const frame = document.createElement('div');
  frame.className = 'frame';
  const scene = document.querySelector('.scene');
  B.insertBefore(frame, scene);
  frame.appendChild(scene);
  if (!qs.has('embed')) {
    const kind = B.dataset.kind === 'recipe' ? 'RECIPE' : 'EFFECT';
    frame.insertAdjacentHTML('afterbegin',
      `<header class="folio"><div class="l"><span class="brand">AWESOME AI MOTION</span><span class="sec">${B.dataset.cat||''}</span></div>` +
      `<div class="r">${kind} &nbsp;<b>Nº ${B.dataset.no||''}</b></div></header>`);
    frame.insertAdjacentHTML('beforeend',
      `<footer class="cap"><div class="prog"></div><div class="l"><span class="no">도판 ${B.dataset.no||''}.</span>` +
      `<span class="ko">${B.dataset.ko||''}</span><span class="en">${(B.dataset.en||'').toUpperCase()}</span></div>` +
      `<div class="meta">${B.dataset.meta||''}<span class="clock">0.00s</span></div></footer>`);
  } else { B.classList.add('embed'); }
  const prog = frame.querySelector('.prog');
  const clock = frame.querySelector('.clock');

  // 2) 결정론 난수
  function rand(seed){ let a = seed >>> 0 || 1; return function(){ a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

  let tl = null;
  function seek(sec){
    sec = Math.max(0, Math.min(DUR, sec));
    if (tl) tl.seek(sec, false);
    if (prog) prog.style.transform = `scaleX(${sec / DUR})`;
    if (clock) clock.textContent = sec.toFixed(2) + 's';
  }

  window.Motion = {
    dur: DUR, fps: FPS, mode, rand,
    frame, scene,
    timeline(opts){
      tl = gsap.timeline(Object.assign({ paused: true, defaults: { ease: 'power3.out', duration: 0.6 } }, opts || {}));
      return tl;
    },
    ready(){
      if (!tl) throw new Error('Motion.timeline() 먼저');
      tl.to({}, { duration: 0 }, DUR); // 길이를 DUR로 고정
      seek(0);
      const go = () => {
        window.__ready = true;
        if (mode === 'still') seek(parseFloat(qs.get('t')));
        if (mode === 'live') {
          const tail = 0.9; let t0 = null;
          const loop = (now) => { if (t0 === null) t0 = now; const t = ((now - t0) / 1000) % (DUR + tail); seek(Math.min(t, DUR)); requestAnimationFrame(loop); };
          requestAnimationFrame(loop);
        }
      };
      (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(go);
    }
  };
  window.__seek = seek;
  window.__dur = DUR;
  window.__size = size;
  window.__poster = parseFloat(B.dataset.poster || (DUR - 0.3));
})();
