#!/usr/bin/env python3
"""렌더된 프레임 캐시에서 접촉 인화(6컷)를 만든다. 사용: python3 scripts/sheet.py effects/<slug> [...]
결과: .cache/sheets/<kind>-<slug>.jpg (3x2, 컷마다 시각 표기)"""
import sys, os, glob
from PIL import Image, ImageDraw
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.makedirs(os.path.join(ROOT, '.cache', 'sheets'), exist_ok=True)
for rel in sys.argv[1:]:
    rel = rel.rstrip('/')
    key = rel.replace('/', '-')
    fr = sorted(glob.glob(os.path.join(ROOT, '.cache', 'frames', key, 'f*.jpg')))
    if not fr:
        print('프레임 없음', rel); continue
    n = len(fr)
    picks = [int(n * p) for p in (0.08, 0.25, 0.42, 0.58, 0.75, 0.97)]
    W, H = 640, 360
    out = Image.new('RGB', (W * 3, H * 2), 'white')
    d = ImageDraw.Draw(out)
    for i, k in enumerate(picks):
        k = min(k, n - 1)
        im = Image.open(fr[k]).resize((W, H))
        x, y = (i % 3) * W, (i // 3) * H
        out.paste(im, (x, y))
        d.rectangle([x, y, x + 70, y + 20], fill='black')
        d.text((x + 6, y + 4), f'{k/30:.2f}s', fill='white')
    p = os.path.join(ROOT, '.cache', 'sheets', key + '.jpg')
    out.save(p, quality=85)
    print(p)
