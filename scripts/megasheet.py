#!/usr/bin/env python3
"""여러 효과를 한 장에 검수: 효과마다 한 줄(4컷). 사용: python3 scripts/megasheet.py out.jpg effects/a effects/b ..."""
import sys, os, glob
from PIL import Image, ImageDraw
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
out, rels = sys.argv[1], sys.argv[2:]
W, H = 400, 225
sheet = Image.new('RGB', (W * 4, H * len(rels)), 'white')
d = ImageDraw.Draw(sheet)
for r, rel in enumerate(rels):
    fr = sorted(glob.glob(os.path.join(ROOT, '.cache', 'frames', rel.rstrip('/').replace('/', '-'), 'f*.jpg')))
    if not fr: continue
    n = len(fr)
    for c, p in enumerate((0.15, 0.4, 0.62, 0.98)):
        k = min(int(n * p), n - 1)
        sheet.paste(Image.open(fr[k]).resize((W, H)), (c * W, r * H))
        d.rectangle([c * W, r * H, c * W + 200, r * H + 14], fill='black')
        d.text((c * W + 3, r * H + 2), f'{rel.split("/")[-1]} {k/30:.2f}s', fill='white')
sheet.save(out, quality=82)
print(out)
