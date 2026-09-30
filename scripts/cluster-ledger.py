#!/usr/bin/env python3
"""수집 원장(research/ledger/*.jsonl)을 이름 기준으로 1차 군집 → family 묶음별 파일(research/clusters/<group>.json).
큐레이터 워커가 이 파일을 보고 중복을 합쳐 후보 목록을 만든다."""
import json, glob, os, re, collections
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
I = json.load(open(os.path.join(ROOT, 'index.json')))
core = {e['slug']: e for e in I['effects']}
def norm(s):
    s = (s or '').lower()
    s = re.sub(r'\b(effect|animation|animate|anim|the|a|an)\b', ' ', s)
    return re.sub(r'[^a-z0-9]+', '', s)
corename = {}
for e in I['effects']:
    for n in [e['en'], e['slug'].replace('-', ' '), *e.get('aka', [])]:
        corename.setdefault(norm(n), e['slug'])
rows = []
for f in sorted(glob.glob(os.path.join(ROOT, 'research', 'ledger', '*.jsonl'))):
    for l in open(f, encoding='utf8'):
        if not l.strip(): continue
        try: r = json.loads(l)
        except Exception: continue
        srcs = [{k: s.get(k, '') for k in ('url', 'repo', 'license')} for s in r.get('sources', []) if isinstance(s, dict)]
        rows.append({'id': r.get('id'), 'en': r.get('name_en', ''), 'ko': r.get('name_ko', ''), 'aka': r.get('aka', []), 'family': r.get('family', ''),
                     'what': r.get('what', ''), 'why': r.get('why', ''), 'params': r.get('params', ''), 'impl': r.get('impl', ''), 'runtime': r.get('runtime', ''),
                     'variants': r.get('variants', []), 'core': r.get('core', '') or corename.get(norm(r.get('name_en', '')), ''), 'sources': srcs})
GMAP = {'디즈니 12원칙':'principles','이징과 스프링':'principles','타이밍과 리듬':'principles','위계와 코레오그래피':'principles','연속성과 시선':'emphasis','2D 속성':'principles','편집 컷':'transitions','화면 전환':'transitions','가상 카메라':'camera','장면 구조':'explainer','키네틱 타이포':'type','데이터 애니메이션':'data','UI 시연':'ui','AI 원리 도해':'explainer','공개와 시선 유도':'emphasis','템포와 비트':'principles','자막과 화면 글':'caption','설명 채널 연출':'explainer'}
gp = os.path.join(ROOT, 'research', 'glossary.json')
if os.path.exists(gp):
    for i, t in enumerate(json.load(open(gp, encoding='utf8'))):
        fam = GMAP.get(t.get('group'))
        if not fam: continue
        rows.append({'id': f'DICT-{i+1:03d}', 'en': t.get('en', ''), 'ko': t.get('ko', ''), 'aka': [], 'family': fam, 'what': t.get('def', ''), 'why': '', 'params': t.get('params', ''), 'impl': '', 'runtime': '',
                     'variants': [], 'core': corename.get(norm(t.get('en', '')), ''), 'sources': [{'url': '', 'repo': 'motion dictionary ' + t.get('src', ''), 'license': 'own'}]})
cl = collections.OrderedDict()
for r in rows:
    k = norm(r['en']) or r['id']
    cl.setdefault(k, []).append(r)
GROUPS = {'C1': ['transitions'], 'C2': ['ui'], 'C3': ['texture', 'generative'], 'C4': ['type', 'caption'], 'C5': ['principles', 'emphasis'],
          'C6': ['explainer', 'data'], 'C7': ['shape', 'depth'], 'C8': ['entrance', 'loop'], 'C9': ['camera']}
fam2g = {f: g for g, fs in GROUPS.items() for f in fs}
out = collections.defaultdict(list)
for k, rs in cl.items():
    fam = collections.Counter(r['family'] for r in rs).most_common(1)[0][0]
    out[fam2g.get(fam, 'C9')].append({'key': k, 'family': fam, 'core': next((r['core'] for r in rs if r['core']), ''), 'rows': rs})
stat = {}
for g, cs in out.items():
    json.dump(cs, open(os.path.join(ROOT, 'research', 'clusters', f'{g}.json'), 'w'), ensure_ascii=False, indent=0)
    stat[g] = (len(cs), sum(len(c['rows']) for c in cs), sum(1 for c in cs if c['core']))
json.dump(GROUPS, open(os.path.join(ROOT, 'research', 'clusters', 'groups.json'), 'w'))
print('rows', len(rows), 'clusters', len(cl)); print(stat)
