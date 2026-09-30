#!/usr/bin/env python3
"""큐레이터의 핵심 매핑(research/candidates/*-core.json)을 핵심 효과 메타(.staging/meta/<slug>.json)에 반영: 출처·별칭·변형 보강."""
import json, os, glob
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
n = 0
for f in sorted(glob.glob(os.path.join(ROOT, 'research', 'candidates', '*-core.json'))):
    for slug, add in json.load(open(f)).items():
        p = os.path.join(ROOT, '.staging', 'meta', f'{slug}.json')
        if not os.path.exists(p): continue
        m = json.load(open(p))
        urls = {s.get('url') or s.get('title') for s in m.get('sources', [])}
        for s in add.get('sources', []):
            k = s.get('url') or s.get('title')
            if k and k not in urls and len(m['sources']) < 8 and not str(s.get('url', '')).startswith(('/', 'file:')):
                m['sources'].append({'title': s.get('title', ''), 'url': s.get('url', ''), 'license': s.get('license', '')}); urls.add(k)
        m['aka'] = list(dict.fromkeys(m.get('aka', []) + [a for a in add.get('aka', []) if a not in (m['ko'], m['en'])]))[:8]
        m['variants'] = list(dict.fromkeys(m.get('variants', []) + add.get('variants', [])))[:10]
        json.dump(m, open(p, 'w'), ensure_ascii=False, indent=2); n += 1
print('핵심 효과 보강', n)
