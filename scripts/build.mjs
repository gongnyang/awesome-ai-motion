#!/usr/bin/env node
// 전체 생성: 렌더 동기화 → 병합 → 렌더 동기화 → 문서 → README → 출처 고지 → 사이트 → 검사. 사용: node scripts/build.mjs
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const S = path.dirname(fileURLToPath(import.meta.url));
for (const f of ['sync-render.mjs', 'merge.mjs', 'sync-render.mjs', 'build-docs.mjs', 'build-readme.mjs', 'build-attributions.mjs', 'build-site.mjs', 'check.mjs']) {
  execFileSync(process.execPath, [path.join(S, f), ...(f === 'merge.mjs' ? ['--no-sync'] : f === 'check.mjs' ? ['--quiet'] : [])], { stdio: 'inherit' });
}
