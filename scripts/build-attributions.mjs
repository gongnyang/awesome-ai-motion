#!/usr/bin/env node
// ATTRIBUTIONS.md 생성: 동봉 서드파티, 효과별 개념 출처, 수집 원장의 레포·라이선스.
import fs from 'node:fs';
import { sourceMarkdown } from './source-links.mjs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const I = JSON.parse(fs.readFileSync(path.join(ROOT, 'index.json'), 'utf8'));
const cell = s => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');

// 1) 효과 출처 → URL별로 묶기
const bySrc = new Map();
for (const e of I.effects) for (const s of e.sources || []) {
  const k = s.url || s.title;
  if (!bySrc.has(k)) bySrc.set(k, { ...s, effects: [] });
  bySrc.get(k).effects.push(e.slug);
}
// 2) 원장 레포
const repos = new Map();
const LD = path.join(ROOT, 'research', 'ledger');
if (fs.existsSync(LD)) for (const f of fs.readdirSync(LD).filter(f => f.endsWith('.jsonl'))) {
  for (const line of fs.readFileSync(path.join(LD, f), 'utf8').split('\n')) {
    if (!line.trim()) continue;
    let r; try { r = JSON.parse(line); } catch { continue; }
    for (const s of r.sources || []) {
      const repo = s.repo || '';
      if (!repo || /^(\/|~|file:)/.test(repo) || /\/home\/|\/mnt\//.test(repo + (s.url || ''))) continue;
      const k = repo.toLowerCase();
      if (!repos.has(k)) { const gh = /^[\w.-]+\/[\w.-]+$/.test(repo) ? `https://github.com/${repo}` : ''; let home = ''; try { home = s.url && /^https?:/.test(s.url) ? new URL(s.url).origin : ''; } catch {} repos.set(k, { repo, url: gh || home, license: s.license || 'unknown', n: 0 }); }
      const o = repos.get(k); o.n++; if (o.license === 'unknown' && s.license) o.license = s.license;
    }
  }
}
const L = [];
L.push('# Attributions', '', '출처와 라이선스 고지 · Sources and licenses', '');
L.push('This repository collects motion **techniques** (ideas, vocabulary, parameters). All clip implementations, cards and prompts are original to this repository and released under MIT. No third-party code was copied into `effects/` or `recipes/`.', '');
L.push('이 레포는 모션 **기법**(아이디어·용어·파라미터)을 모았다. 클립 구현, 카드, 프롬프트는 전부 이 레포에서 새로 썼고 MIT로 배포한다. `effects/`·`recipes/`에 서드파티 코드를 복사하지 않았다.', '');
L.push('## Bundled third-party files', '', '| File | Project | License |', '|---|---|---|',
  '| `lib/gsap.min.js` | [GSAP 3.14.2](https://gsap.com) by GreenSock (Webflow) | [GreenSock Standard "no charge" license](https://gsap.com/standard-license), redistributed unmodified |',
  '| `lib/fonts/BodoniModa.ttf` | [Bodoni Moda](https://github.com/indestructible-type/Bodoni) by Owen Earl (indestructible type*) | SIL Open Font License 1.1 |',
  '| `lib/fonts/IBMPlexMono-Regular.ttf` | [IBM Plex Mono](https://github.com/IBM/plex) by IBM | SIL Open Font License 1.1 |',
  '', 'Web fonts loaded at runtime on the site (not redistributed): Noto Serif KR (Google Fonts, OFL 1.1), Pretendard (jsDelivr, OFL 1.1).', '');
L.push('## Concept sources cited by effect cards', '', '| Source | License / use | Effects |', '|---|---|---|');
for (const s of [...bySrc.values()].sort((a, b) => b.effects.length - a.effects.length)) L.push(`| ${cell(sourceMarkdown(s))} | ${cell(s.license)} | ${s.effects.map(x => `\`${x}\``).join(' ')} |`);
L.push('');
if (repos.size) {
  L.push('## Repositories and sites surveyed', '', `From the collection ledger in [research/ledger/](research/ledger/). ${repos.size} sources. Licenses as recorded at collection time; GPL, AGPL and unlicensed sources were used for reference only.`, '', '| Source | License | Techniques referenced |', '|---|---|---:|');
  for (const r of [...repos.values()].sort((a, b) => b.n - a.n)) L.push(`| ${r.url ? `[${cell(r.repo)}](${r.url})` : cell(r.repo)} | ${cell(r.license)} | ${r.n} |`);
  L.push('');
}
L.push('## Trademarks', '', 'Product and company names (Disney, Material Design, IBM Carbon, Apple, After Effects, Remotion, Manim, etc.) are used only to identify the source of a concept. No endorsement is implied.', '');
fs.writeFileSync(path.join(ROOT, 'ATTRIBUTIONS.md'), L.join('\n'));
console.log(`ATTRIBUTIONS.md: 출처 ${bySrc.size} · 레포 ${repos.size}`);
