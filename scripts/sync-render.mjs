#!/usr/bin/env node
// Clip files determine render status. 클립 존재 여부로 정본의 렌더 상태를 동기화한다.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export function syncRender(index, root = ROOT) {
  for (const dir of ['effects', 'recipes']) {
    for (const entry of index[dir] || []) {
      const folder = path.join(root, dir, entry.slug);
      const has = file => fs.existsSync(path.join(folder, file));
      // Publish clip links after all render artifacts are complete. 렌더 산출물 완료 후 링크 공개.
      entry.render = ['clip.mp4', 'preview.gif', 'poster.jpg'].every(file =>
        (fs.statSync(path.join(folder, file), { throwIfNoEntry: false })?.size || 0) > 0
      ) ? 'done' : 'planned';
      entry.files = Object.fromEntries(
        [['html', 'index.html'], ['mp4', 'clip.mp4'], ['gif', 'preview.gif'], ['poster', 'poster.jpg']]
          .filter(([, file]) => has(file))
          .map(([key, file]) => [key, `${dir}/${entry.slug}/${file}`])
      );
    }
  }
  index.counts = { ...index.counts, effects: index.effects.length,
    rendered: index.effects.filter(e => e.render === 'done').length,
    recipes: (index.recipes || []).length };
  return index;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const file = path.join(ROOT, 'index.json');
  const before = fs.readFileSync(file, 'utf8');
  const index = syncRender(JSON.parse(before));
  const after = JSON.stringify(index, null, 1) + '\n';
  if (after !== before) fs.writeFileSync(file, after);
  console.log(`render: ${index.counts.rendered} effects · ${(index.recipes || []).filter(r => r.render === 'done').length} recipes / 효과·레시피 동기화`);
}
