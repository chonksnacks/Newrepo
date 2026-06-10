export const EASE = [0.22, 1, 0.36, 1] as const

// Warm espresso-to-chestnut frame shown while a video loads — never flashes black.
export const POSTER =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a2c21"/><stop offset="1" stop-color="#2B211A"/></linearGradient></defs><rect width="1920" height="1080" fill="url(#g)"/></svg>`,
  )

// Film grain: inline SVG feTurbulence noise tile.
export const GRAIN =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/></filter><rect width="160" height="160" filter="url(#n)"/></svg>`,
  )

export const TINT =
  'linear-gradient(to bottom, rgba(43,33,26,0.25), rgba(43,33,26,0.65))'
