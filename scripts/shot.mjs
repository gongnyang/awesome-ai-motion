#!/usr/bin/env node
// 사이트 페이지 스크린샷(헤드리스). 사용: node scripts/shot.mjs <url> <out.png> [width] [fullPage]
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
let pw; try { pw = await import('playwright'); } catch { const g = execFileSync('npm', ['root', '-g']).toString().trim(); pw = createRequire(path.join(g, 'x.js'))('playwright'); }
const [url, out, w = '1440', full = '1', y = '0'] = process.argv.slice(2);
const b = await pw.chromium.launch({ headless: true });
const p = await b.newPage({ viewport: { width: +w, height: 900 } });
const errs = []; p.on('pageerror', e => errs.push(String(e))); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
await p.goto(url, { waitUntil: 'networkidle' }).catch(() => {});
await p.waitForTimeout(600); if (+y) { await p.evaluate(v => window.scrollTo(0, v), +y); await p.waitForTimeout(900); }
await p.screenshot({ path: out, fullPage: full === '1' });
const ov = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
console.log(out, 'overflowX', ov, errs.length ? 'ERR ' + errs.join(' | ') : '');
await b.close();
