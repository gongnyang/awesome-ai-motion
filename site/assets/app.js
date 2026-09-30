/* awesome-ai-motion 사이트 동작: 필터·검색·호버 재생·비교·복사·재생 속도 */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };

  // 언어
  const qlang = new URLSearchParams(location.search).get('lang');
  const lang = qlang || store.get('am-lang') || ((navigator.language || 'ko').startsWith('ko') ? 'ko' : 'en');
  document.documentElement.dataset.lang = lang; document.documentElement.lang = lang;
  $$('.lang').forEach(b => {
    const draw = () => { const l = document.documentElement.dataset.lang; b.innerHTML = l === 'en' ? '한 / <b>EN</b>' : '<b>한</b> / EN'; };
    draw();
    b.addEventListener('click', () => { const nx = document.documentElement.dataset.lang === 'en' ? 'ko' : 'en'; document.documentElement.dataset.lang = nx; document.documentElement.lang = nx; store.set('am-lang', nx); $$('.lang').forEach(x => x.dispatchEvent(new Event('redraw'))); draw(); });
    b.addEventListener('redraw', draw);
  });
  const phs = () => $$('[data-ph-ko]').forEach(i => { i.placeholder = document.documentElement.dataset.lang === 'en' ? i.dataset.phEn : i.dataset.phKo; });
  phs(); $$('.lang').forEach(b => b.addEventListener('click', phs));

  // 테마
  const th = store.get('am-theme');
  if (th) document.documentElement.dataset.theme = th;
  $$('.theme').forEach(b => b.addEventListener('click', () => {
    const cur = document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const nx = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nx; store.set('am-theme', nx);
  }));

  // 복사
  $$('.copy').forEach(b => b.addEventListener('click', async () => {
    const t = b.dataset.text != null ? b.dataset.text : ($(b.dataset.target) || {}).innerText || '';
    try { await navigator.clipboard.writeText(t); } catch (e) {
      const ta = document.createElement('textarea'); ta.value = t; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
    }
    const o = b.textContent; b.textContent = '복사됨'; b.classList.add('ok');
    setTimeout(() => { b.textContent = o; b.classList.remove('ok'); }, 1200);
  }));

  // 재생 속도(상세·비교)
  $$('.speed').forEach(box => {
    const vids = () => box.dataset.for ? $$(box.dataset.for) : [];
    box.addEventListener('click', e => {
      const b = e.target.closest('button[data-rate]'); if (!b) return;
      $$('button[data-rate]', box).forEach(x => x.classList.toggle('on', x === b));
      vids().forEach(v => { v.playbackRate = parseFloat(b.dataset.rate); });
    });
  });

  // 화면에 들어온 클립 자동 재생(갤러리·대표·조합). 화면 밖은 멈춤
  function ensureVideo(tile) {
    let v = tile.querySelector('video');
    if (!v) { v = document.createElement('video'); v.muted = true; v.loop = true; v.playsInline = true; v.preload = 'none'; v.setAttribute('muted', ''); v.src = tile.dataset.mp4; $('.media', tile).appendChild(v); v.addEventListener('playing', () => tile.classList.add('playing')); }
    return v;
  }
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      const t = e.target;
      if (e.isIntersecting) { const v = ensureVideo(t); const p = v.play(); if (p && p.catch) p.catch(() => {}); }
      else { const v = t.querySelector('video'); if (v) v.pause(); }
    }), { rootMargin: '0px', threshold: .01 });
    $$('.tile[data-mp4]').forEach(t => io.observe(t));
  } else {
    $$('.tile[data-mp4]').forEach(t => { t.addEventListener('mouseenter', () => { const v = ensureVideo(t); v.play().catch(() => {}); }); t.addEventListener('focus', () => { ensureVideo(t).play().catch(() => {}); }); t.addEventListener('blur', () => { const v = t.querySelector('video'); if (v) v.pause(); }); t.addEventListener('mouseleave', () => { const v = t.querySelector('video'); if (v) v.pause(); }); });
  }

  // 갤러리 필터
  const gal = $('#gallery');
  if (gal) {
    const tiles = [...$$('.tile', gal), ...$$('.xrow')];
    const state = { fam: '', purpose: '', media: '', level: '', q: '', clip: false };
    const fromHash = () => {
      const h = new URLSearchParams(location.hash.slice(1));
      for (const k of Object.keys(state)) state[k] = k === 'clip' ? h.get(k) === '1' : (h.get(k) || '');
    };
    const toHash = () => {
      const h = new URLSearchParams();
      for (const [k, v] of Object.entries(state)) if (v) h.set(k, v === true ? '1' : v);
      history.replaceState(null, '', h.toString() ? '#' + h : location.pathname + location.search);
    };
    const norm = s => (s || '').toLowerCase().replace(/\s+/g, '');
    function apply() {
      let n = 0;
      const q = norm(state.q);
      tiles.forEach(t => {
        const ok = (!state.fam || t.dataset.fam === state.fam)
          && (!state.purpose || (t.dataset.purposes || '').split('|').includes(state.purpose))
          && (!state.media || (t.dataset.media || '').split('|').includes(state.media))
          && (!state.level || t.dataset.level === state.level)
          && (!state.clip || !!t.dataset.mp4 || t.dataset.clip === '1')
          && (!q || norm(t.dataset.q).includes(q));
        t.hidden = !ok; if (!ok) { const v = t.querySelector('video'); if (v) v.pause(); } if (ok && t.classList.contains('xrow')) n++;
      });
      $$('.famblock').forEach(b => { if (b.closest('.featured')) return; b.hidden = !$$('.tile, .xrow', b).some(t => !t.hidden); });
      $('#cnt').textContent = document.documentElement.dataset.lang === 'en' ? `${n} effects` : `${n}개`;
      $('#none').hidden = n > 0;
      $$('.chip[data-k]').forEach(c => c.classList.toggle('on', state[c.dataset.k] === c.dataset.v));
      $('#q').value = state.q; $('#clip').checked = state.clip;
    }
    $$('.chip[data-k]').forEach(c => c.addEventListener('click', () => {
      const k = c.dataset.k; state[k] = state[k] === c.dataset.v ? '' : c.dataset.v; toHash(); apply();
    }));
    $('#q').addEventListener('input', e => { state.q = e.target.value; toHash(); apply(); });
    $('#clip').addEventListener('change', e => { state.clip = e.target.checked; toHash(); apply(); });
    window.addEventListener('hashchange', () => { fromHash(); apply(); });
    document.addEventListener('keydown', e => { if (e.key === '/' && document.activeElement !== $('#q')) { e.preventDefault(); $('#q').focus(); } });
    fromHash(); apply();

    // 비교
    const picked = [];
    const tray = $('#tray'), items = $('#tray-items');
    function drawTray() {
      items.innerHTML = picked.map(p => `<span>${p.ko} <button data-rm="${p.slug}" aria-label="빼기">×</button></span>`).join('') || '<span class="muted"><span lang="ko">효과를 두세 개 고르면 나란히 재생합니다</span><span lang="en">Pick two to four effects to play them side by side</span></span>';
      tray.classList.toggle('show', picked.length > 0);
      $$('.cmp').forEach(b => b.classList.toggle('on', picked.some(p => p.slug === b.dataset.slug)));
    }
    $$('.cmp').forEach(b => b.addEventListener('click', e => {
      e.preventDefault(); e.stopPropagation();
      const i = picked.findIndex(p => p.slug === b.dataset.slug);
      if (i >= 0) picked.splice(i, 1); else { if (picked.length >= 4) picked.shift(); picked.push({ slug: b.dataset.slug, ko: b.dataset.ko, mp4: b.dataset.mp4, no: b.dataset.no, href: b.dataset.href }); }
      drawTray();
    }));
    items.addEventListener('click', e => { const b = e.target.closest('[data-rm]'); if (!b) return; picked.splice(picked.findIndex(p => p.slug === b.dataset.rm), 1); drawTray(); });
    $('#tray-clear').addEventListener('click', () => { picked.length = 0; drawTray(); });
    const ov = $('#overlay');
    $('#tray-go').addEventListener('click', () => {
      const g = $('#cgrid');
      g.style.gridTemplateColumns = `repeat(${Math.min(picked.length, 2)}, 1fr)`;
      g.innerHTML = picked.map(p => `<figure><video class="cv" src="${p.mp4}" muted loop playsinline preload="auto"></video><figcaption><span class="mono muted">Nº ${p.no}</span><b>${p.ko}</b><a class="mono muted" href="${p.href}">→</a></figcaption></figure>`).join('');
      ov.classList.add('show'); document.body.style.overflow = 'hidden';
      const vs = $$('.cv', g); let loaded = 0;
      vs.forEach(v => v.addEventListener('canplay', () => { if (++loaded === vs.length) vs.forEach(x => { x.currentTime = 0; x.play(); }); }, { once: true }));
    });
    $('#ov-close').addEventListener('click', () => { ov.classList.remove('show'); document.body.style.overflow = ''; $('#cgrid').innerHTML = ''; });
    $('#ov-sync').addEventListener('click', () => $$('.cv').forEach(v => { v.currentTime = 0; v.play(); }));
    drawTray();
  }

  // 용어 검색
  const gq = $('#gq');
  if (gq) {
    const terms = $$('.term');
    const norm = s => (s || '').toLowerCase().replace(/\s+/g, '');
    const run = () => { const q = norm(gq.value); let n = 0; terms.forEach(t => { const ok = !q || norm(t.dataset.q).includes(q); t.hidden = !ok; if (ok) n++; }); $$('.glsec').forEach(s => { s.hidden = !$$('.term', s).some(t => !t.hidden); }); $('#gcnt').textContent = n + '개'; };
    gq.addEventListener('input', run); run();
  }
})();
