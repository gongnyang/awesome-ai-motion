import { repositoryReference } from './source-links.mjs';
// 아주 작은 마크다운 → HTML 변환기(의존성 없음). 제목·문단·목록·표·코드·인용·굵게·기울임·코드 스팬·링크·이미지.
export function esc(s) { return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

function inline(s, link) {
  let t = esc(s);
  const codes = [];
  t = t.replace(/`([^`]+)`/g, (_, c) => { codes.push(c); return `\u0000${codes.length - 1}\u0000`; });
  t = t.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (_, a, u) => `<img alt="${a}" src="${link ? link(u) : u}">`);
  t = t.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, a, b) => `<b>${b || a}</b>`);
  t = t.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, a, u) => repositoryReference(u) ? `${a} (<code>${u}</code>)` : `<a href="${link ? link(u) : u}">${a}</a>`);
  t = t.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
  t = t.replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<i>$2</i>');
  t = t.replace(/(https?:\/\/[^\s<)]+)(?![^<]*<\/a>)(?![^<]*">)/g, (m) => `<a href="${m}">${m.length > 60 ? m.slice(0, 57) + '…' : m}</a>`);
  t = t.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${codes[+i]}</code>`);
  return t;
}

export function md(src, opts = {}) {
  const link = opts.link;
  const L = String(src).replace(/\r/g, '').split('\n');
  const out = [];
  let i = 0;
  const isTable = (k) => /^\s*\|/.test(L[k] || '') && /^\s*\|?\s*:?-{2,}/.test(L[k + 1] || '');
  while (i < L.length) {
    const l = L[i];
    if (/^```/.test(l)) {
      const buf = []; i++;
      while (i < L.length && !/^```/.test(L[i])) buf.push(L[i++]);
      i++; out.push(`<pre><code>${esc(buf.join('\n'))}</code></pre>`); continue;
    }
    const h = l.match(/^(#{1,6})\s+(.*)$/);
    if (h) { const n = Math.min(6, h[1].length + (opts.shift || 0)); const id = h[2].replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '').toLowerCase(); out.push(`<h${n} id="${esc(id)}">${inline(h[2], link)}</h${n}>`); i++; continue; }
    if (isTable(i)) {
      const row = (r) => r.trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim());
      const head = row(L[i]); i += 2;
      const body = [];
      while (i < L.length && /^\s*\|/.test(L[i])) body.push(row(L[i++]));
      out.push(`<div class="tbl"><table><thead><tr>${head.map(c => `<th>${inline(c, link)}</th>`).join('')}</tr></thead><tbody>${body.map(r => `<tr>${r.map(c => `<td>${inline(c, link)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
      continue;
    }
    if (/^\s*([-*+]|\d+\.)\s+/.test(l)) {
      const ordered = /^\s*\d+\./.test(l);
      const items = [];
      while (i < L.length && (/^\s*([-*+]|\d+\.)\s+/.test(L[i]) || (/^\s{2,}\S/.test(L[i]) && items.length))) {
        if (/^\s*([-*+]|\d+\.)\s+/.test(L[i])) items.push({ d: L[i].match(/^(\s*)/)[1].length, t: L[i].replace(/^\s*([-*+]|\d+\.)\s+/, '') });
        else items[items.length - 1].t += ' ' + L[i].trim();
        i++;
      }
      const tag = ordered ? 'ol' : 'ul';
      out.push(`<${tag}>${items.map(it => `<li${it.d >= 2 ? ' class="sub"' : ''}>${inline(it.t, link)}</li>`).join('')}</${tag}>`);
      continue;
    }
    if (/^>\s?/.test(l)) { const buf = []; while (i < L.length && /^>\s?/.test(L[i])) buf.push(L[i++].replace(/^>\s?/, '')); out.push(`<blockquote>${inline(buf.join(' '), link)}</blockquote>`); continue; }
    if (/^(-{3,}|\*{3,})\s*$/.test(l)) { out.push('<hr>'); i++; continue; }
    if (!l.trim()) { i++; continue; }
    const buf = [];
    while (i < L.length && L[i].trim() && !/^(#{1,6}\s|```|>|\s*([-*+]|\d+\.)\s)/.test(L[i]) && !isTable(i)) buf.push(L[i++]);
    out.push(`<p>${inline(buf.join(' '), link)}</p>`);
  }
  return out.join('\n');
}
