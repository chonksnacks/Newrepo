# everyday crew

Site for Everyday Crew — a premium everyday sock brand made in NYC.

React + TypeScript + Tailwind CSS v4 + Framer Motion, built with Vite.

## Develop

```sh
npm install
npm run dev
```

`npm run build` type-checks and produces a production bundle; `npm run lint`
runs ESLint; `npm run preview` serves the built site locally.

## Pages

Two HTML routes (Vite multi-page build, see `vite.config.ts`):

- `index.html` → `src/App.tsx` — the landing page:
  crew cover → seasons crossfade → story teaser → differentiators → care teaser → shop CTA
- `story.html` → `src/story.tsx` — the editorial origin-story page
- `care.html` → `src/care.tsx` — the care guide

## Layout

- `src/components/` — one file per section plus shared pieces
  (`Nav`, `Logo`, and `media.ts` for the shared ease curve, grain,
  poster, and tint constants)
- `public/crew/` — the 3×3 cover-grid photos (see its README for filenames)
- `public/seasons/` — the four seasons crossfade images
- `src/assets/EDC_LOGO.svg` — original logo upload; the inline version
  lives in `src/components/Logo.tsx`

## Images

Ship WebP, not PNG. Cover-grid photos are 800px squares (q82), seasons
images full-width 1672px (q80) — that keeps the whole image budget under
~700KB. Convert uploads with Pillow:

```python
from PIL import Image
Image.open('in.png').convert('RGB').save('out.webp', 'WEBP', quality=80, method=6)
```

## Deploy

Pushes to `claude/quirky-wright-j17nlv` build and deploy to GitHub Pages
(https://chonksnacks.github.io/Newrepo/) via `.github/workflows/deploy.yml`.
The Vite `base` is `/Newrepo/`; Pages source must stay set to
"GitHub Actions".

## Still open

- The story teaser and story page still use Pexels free-license video
  URLs chosen by search (see TODOs in those components) — replace with
  brand footage or verify and self-host.
- All shop links point at `/` until a Shopify store exists.
