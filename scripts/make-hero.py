#!/usr/bin/env python3
"""히어로 자산을 임팩트 클립에서 만든다(장면 영역만 잘라 씀).
- site/assets/hero.mp4 : 임팩트 효과 몽타주(컷 이어 붙이기, 1280x580)
- docs/hero.gif        : README 히어로(3x2 격자)
- site/assets/og.jpg   : 공유 미리보기
사용: python3 scripts/make-hero.py"""
import os, subprocess, json
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FF = ['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y']
clip = lambda s: os.path.join(ROOT, 'effects', s, 'clip.mp4')
def dur(p):
    out = subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'json', p], capture_output=True, text=True).stdout
    return float(json.loads(out)['format']['duration'])

# 1) 몽타주: (slug, 시작초, 길이초)
MONT = [('infinite-pan', 0.4, 2.6), ('kinetic-type-sweep', 0.2, 2.0), ('camera-flythrough', 0.3, 2.4), ('particle-assemble', 0.4, 2.4),
        ('giant-mask-reveal', 0.4, 2.2), ('deep-parallax', 0.4, 2.0), ('shader-wipe', 0.6, 1.6), ('morph-match-cut', 0.8, 2.4),
        ('infinite-zoom', 0.3, 2.4), ('noise-dissolve', 0.5, 1.8)]
MONT = [m for m in MONT if os.path.exists(clip(m[0]))]
inp, parts = [], []
for i, (s, a, d) in enumerate(MONT):
    d = min(d, dur(clip(s)) - a)
    inp += ['-ss', str(a), '-t', str(d), '-i', clip(s)]
    parts.append(f'[{i}:v]crop=1280:580:0:64,setsar=1,fps=30,setpts=PTS-STARTPTS[m{i}]')
fc = ';'.join(parts) + ';' + ''.join(f'[m{i}]' for i in range(len(MONT))) + f'concat=n={len(MONT)}:v=1:a=0[out]'
hero = os.path.join(ROOT, 'site', 'assets', 'hero.mp4')
subprocess.run(FF + inp + ['-filter_complex', fc, '-map', '[out]', '-c:v', 'libx264', '-preset', 'slow', '-crf', '25', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', hero], check=True)

# 2) README 격자 GIF, 3) OG
PICK = ['infinite-pan', 'particle-assemble', 'kinetic-type-sweep', 'morph-match-cut', 'giant-mask-reveal', 'camera-flythrough']
PICK = [s for s in PICK if os.path.exists(clip(s))]
assert len(PICK) == 6, PICK
W, H = 426, 194
inp = sum([['-t', '3.4', '-i', clip(s)] for s in PICK], [])
parts = ''.join(f'[{i}:v]crop=1280:580:0:64,scale={W}:{H}:flags=lanczos,fps=10,setpts=PTS-STARTPTS,tpad=stop_mode=clone:stop_duration=1[v{i}];' for i in range(6))
stack = ''.join(f'[v{i}]' for i in range(6)) + f'xstack=inputs=6:layout=0_0|{W}_0|{W*2}_0|0_{H}|{W}_{H}|{W*2}_{H},trim=duration=3.4[g]'
os.makedirs(os.path.join(ROOT, 'docs'), exist_ok=True)
gif = os.path.join(ROOT, 'docs', 'hero.gif')
subprocess.run(FF + inp + ['-filter_complex', parts + stack + ';[g]split[a][b];[a]palettegen=max_colors=40:stats_mode=diff[p];[b][p]paletteuse=dither=bayer:bayer_scale=4', gif], check=True)
og = os.path.join(ROOT, 'site', 'assets', 'og.jpg')
subprocess.run(FF + inp + ['-filter_complex', parts + stack, '-map', '[g]', '-ss', '3.0', '-frames:v', '1', '-q:v', '3', og], check=True)
for p in (hero, gif, og): print(os.path.relpath(p, ROOT), os.path.getsize(p) // 1024, 'KB')
