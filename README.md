<p align="center">
<a href="https://gongnyang.github.io/awesome-ai-motion/"><img src="docs/hero.gif" alt="Reference motion clips in paper, ink and vermilion" width="100%"></a>
</p>

<h1 align="center">Awesome AI Motion</h1>

<p align="center"><b>A motion field guide your AI agent can read.</b></p>

<p align="center">637 techniques · 128 reference clips · 11 recipes · 7 design routes</p>

<p align="center">
<a href="README.ko.md">한국어</a> · <a href="https://gongnyang.github.io/awesome-ai-motion/">Website</a> · <a href="SKILL.md">Agent skill</a> · <a href="docs/catalog.md">Full catalog</a>
</p>

Choose motion for what a scene needs to communicate. Each effect card gives you a definition, tuned parameters, examples, sources and prompts for Claude Code and Codex.

## Quick start

### 1. Get the guide

```bash
git clone https://github.com/gongnyang/awesome-ai-motion.git
cd awesome-ai-motion
```

Browsing the website, reading cards and using the skill require no dependency installation.
For local rendering, use Node.js 20+, ffmpeg on PATH, and Playwright with Chromium installed.
Run the following only when those rendering dependencies are missing:

```bash
npm install                          # Optional if global playwright is available
npx playwright install chromium      # Skip if Chromium is already installed
ffmpeg -version                      # Verify ffmpeg is on PATH
```

### 2. Connect the skill

Link this checkout into Claude Code’s skill directory:

```bash
mkdir -p ~/.claude/skills
ln -s "$PWD" ~/.claude/skills/awesome-ai-motion
```

Or copy it instead of creating a link. Choose one method; the destination should be unused.

```bash
mkdir -p ~/.claude/skills
cp -R "$PWD" ~/.claude/skills/awesome-ai-motion
```

For Codex, use the same link or copy under `~/.codex/skills/`. Copies need updating when the guide changes.
Then ask the agent to choose an effect for the scene:

```text
Choose motion for a product reveal. Read the effect card and use its default parameters.
```

### 3. Render your first clip

Render a copy with your own text, an embeddable stage and a separate output directory:

```bash
node scripts/render.mjs effects/mask-reveal \
  --embed --text "Make it move" --out .staging/my-first-motion
```

Open `.staging/my-first-motion/clip.mp4`, `preview.gif` or `poster.jpg`. The source effect stays available for reuse.
Use an output directory outside `effects/` and `recipes/` to keep reference clips intact.

## Sixteen high-impact clips

Large camera moves, bold reveals and shape changes show the range of the guide. Click a preview to read its card.

<table>
<tr>
<td align="center" width="25%"><a href="effects/infinite-pan/"><img src="effects/infinite-pan/preview.gif" alt="Infinite Canvas Pan" width="100%"><br><sub><b>Infinite Canvas Pan</b></sub></a><br><sub><a href="effects/infinite-pan/clip.mp4">MP4</a></sub></td>
<td align="center" width="25%"><a href="effects/camera-flythrough/"><img src="effects/camera-flythrough/preview.gif" alt="Camera Fly-through" width="100%"><br><sub><b>Camera Fly-through</b></sub></a><br><sub><a href="effects/camera-flythrough/clip.mp4">MP4</a></sub></td>
<td align="center" width="25%"><a href="effects/infinite-zoom/"><img src="effects/infinite-zoom/preview.gif" alt="Infinite Zoom" width="100%"><br><sub><b>Infinite Zoom</b></sub></a><br><sub><a href="effects/infinite-zoom/clip.mp4">MP4</a></sub></td>
<td align="center" width="25%"><a href="effects/deep-parallax/"><img src="effects/deep-parallax/preview.gif" alt="Deep Multi-layer Parallax" width="100%"><br><sub><b>Deep Multi-layer Parallax</b></sub></a><br><sub><a href="effects/deep-parallax/clip.mp4">MP4</a></sub></td>
</tr>
<tr>
<td align="center" width="25%"><a href="effects/kinetic-type-sweep/"><img src="effects/kinetic-type-sweep/preview.gif" alt="Kinetic Type Sweep" width="100%"><br><sub><b>Kinetic Type Sweep</b></sub></a><br><sub><a href="effects/kinetic-type-sweep/clip.mp4">MP4</a></sub></td>
<td align="center" width="25%"><a href="effects/giant-mask-reveal/"><img src="effects/giant-mask-reveal/preview.gif" alt="Giant Mask Reveal" width="100%"><br><sub><b>Giant Mask Reveal</b></sub></a><br><sub><a href="effects/giant-mask-reveal/clip.mp4">MP4</a></sub></td>
<td align="center" width="25%"><a href="effects/particle-assemble/"><img src="effects/particle-assemble/preview.gif" alt="Particle Scatter &amp; Assemble" width="100%"><br><sub><b>Particle Scatter &amp; Assemble</b></sub></a><br><sub><a href="effects/particle-assemble/clip.mp4">MP4</a></sub></td>
<td align="center" width="25%"><a href="effects/morph-match-cut/"><img src="effects/morph-match-cut/preview.gif" alt="Morph Match Cut" width="100%"><br><sub><b>Morph Match Cut</b></sub></a><br><sub><a href="effects/morph-match-cut/clip.mp4">MP4</a></sub></td>
</tr>
<tr>
<td align="center" width="25%"><a href="effects/card-flip-stack/"><img src="effects/card-flip-stack/preview.gif" alt="3D Card Flip Stack" width="100%"><br><sub><b>3D Card Flip Stack</b></sub></a><br><sub><a href="effects/card-flip-stack/clip.mp4">MP4</a></sub></td>
<td align="center" width="25%"><a href="effects/perspective-tilt/"><img src="effects/perspective-tilt/preview.gif" alt="Perspective Tilt Reveal" width="100%"><br><sub><b>Perspective Tilt Reveal</b></sub></a><br><sub><a href="effects/perspective-tilt/clip.mp4">MP4</a></sub></td>
<td align="center" width="25%"><a href="effects/shader-wipe/"><img src="effects/shader-wipe/preview.gif" alt="Shader Directional Warp Wipe" width="100%"><br><sub><b>Shader Directional Warp Wipe</b></sub></a><br><sub><a href="effects/shader-wipe/clip.mp4">MP4</a></sub></td>
<td align="center" width="25%"><a href="effects/noise-dissolve/"><img src="effects/noise-dissolve/preview.gif" alt="Noise Dissolve Transition" width="100%"><br><sub><b>Noise Dissolve Transition</b></sub></a><br><sub><a href="effects/noise-dissolve/clip.mp4">MP4</a></sub></td>
</tr>
<tr>
<td align="center" width="25%"><a href="effects/light-sweep/"><img src="effects/light-sweep/preview.gif" alt="Light Sweep" width="100%"><br><sub><b>Light Sweep</b></sub></a><br><sub><a href="effects/light-sweep/clip.mp4">MP4</a></sub></td>
<td align="center" width="25%"><a href="effects/scroll-scrub-cinema/"><img src="effects/scroll-scrub-cinema/preview.gif" alt="Scroll-scrub Cinema Scene" width="100%"><br><sub><b>Scroll-scrub Cinema Scene</b></sub></a><br><sub><a href="effects/scroll-scrub-cinema/clip.mp4">MP4</a></sub></td>
<td align="center" width="25%"><a href="effects/ken-burns/"><img src="effects/ken-burns/preview.gif" alt="Ken Burns" width="100%"><br><sub><b>Ken Burns</b></sub></a><br><sub><a href="effects/ken-burns/clip.mp4">MP4</a></sub></td>
<td align="center" width="25%"><a href="effects/overlapping-action/"><img src="effects/overlapping-action/preview.gif" alt="Overlapping Action" width="100%"><br><sub><b>Overlapping Action</b></sub></a><br><sub><a href="effects/overlapping-action/clip.mp4">MP4</a></sub></td>
</tr>
</table>

## Eight recipes in motion

Watch effects combine into a scene, including the educational opening hook. Click a name or preview to read the recipe.

<table>
<tr>
<td align="center" width="25%"><a href="recipes/edu-hook/"><img src="recipes/edu-hook/preview.gif" alt="Educational Opening Hook" width="100%"><br><sub><b>Educational Opening Hook</b></sub></a><br><sub><a href="recipes/edu-hook/clip.mp4">MP4</a></sub></td>
<td align="center" width="25%"><a href="recipes/shorts-hook/"><img src="recipes/shorts-hook/preview.gif" alt="Shorts Hook" width="100%"><br><sub><b>Shorts Hook</b></sub></a><br><sub><a href="recipes/shorts-hook/clip.mp4">MP4</a></sub></td>
<td align="center" width="25%"><a href="recipes/title-opener/"><img src="recipes/title-opener/preview.gif" alt="Title Opener" width="100%"><br><sub><b>Title Opener</b></sub></a><br><sub><a href="recipes/title-opener/clip.mp4">MP4</a></sub></td>
<td align="center" width="25%"><a href="recipes/product-demo/"><img src="recipes/product-demo/preview.gif" alt="Product UI Demo" width="100%"><br><sub><b>Product UI Demo</b></sub></a><br><sub><a href="recipes/product-demo/clip.mp4">MP4</a></sub></td>
</tr>
<tr>
<td align="center" width="25%"><a href="recipes/data-story/"><img src="recipes/data-story/preview.gif" alt="Data Story" width="100%"><br><sub><b>Data Story</b></sub></a><br><sub><a href="recipes/data-story/clip.mp4">MP4</a></sub></td>
<td align="center" width="25%"><a href="recipes/concept-explainer/"><img src="recipes/concept-explainer/preview.gif" alt="Concept Explainer" width="100%"><br><sub><b>Concept Explainer</b></sub></a><br><sub><a href="recipes/concept-explainer/clip.mp4">MP4</a></sub></td>
<td align="center" width="25%"><a href="recipes/before-after/"><img src="recipes/before-after/preview.gif" alt="Before and After" width="100%"><br><sub><b>Before and After</b></sub></a><br><sub><a href="recipes/before-after/clip.mp4">MP4</a></sub></td>
<td align="center" width="25%"><a href="recipes/scrolldeck-scene/"><img src="recipes/scrolldeck-scene/preview.gif" alt="Scroll Deck Scene" width="100%"><br><sub><b>Scroll Deck Scene</b></sub></a><br><sub><a href="recipes/scrolldeck-scene/clip.mp4">MP4</a></sub></td>
</tr>
</table>

Use the [website](https://gongnyang.github.io/awesome-ai-motion/) for slow playback and comparisons of up to four clips. The [full catalog](docs/catalog.md) includes every technique and its clip status.

## Find your next scene

| Start here | Use it for |
|---|---|
| [Website](https://gongnyang.github.io/awesome-ai-motion/) | Browse, play, filter and compare clips |
| [Docs contents](docs/README.md) | Navigate the guide without reading every card |
| [Full catalog](docs/catalog.md) | All techniques grouped by motion family |
| [Decision tables](references/decision-tables.md) | Choose by purpose or medium |
| [Recipes](recipes/) | Combine effects into a timed scene |
| [Design routes](routes/) | Plan a promo, short, deck or other deliverable; route documents are in Korean |
| [Agent workflow](SKILL.md) | Purpose, card, adaptation, render and verification |
| [Source data](index.json) | Query effect metadata directly |

A card lives at `effects/<slug>/README.md`. Rendered effects also include `index.html`, `clip.mp4`, `preview.gif` and `poster.jpg`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for new effects, improved defaults and reference clips. Keep motion legible, use the shared stage, and verify the rendered result.
`index.json` is the canonical catalog. Update the relevant source or generator, then regenerate the docs and website:

```bash
node scripts/build.mjs
node scripts/check.mjs
```

## License and sources

Original work is covered by [MIT](LICENSE). Source references and component licenses are recorded in [ATTRIBUTIONS.md](ATTRIBUTIONS.md) and each effect card.
GSAP and bundled fonts retain their own licenses. Consult the attribution notice when redistributing those assets.
