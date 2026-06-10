import { useEffect, useState } from 'react'
import { motion, useReducedMotion, animate } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

// Warm espresso-to-chestnut frame shown while the video loads — never flashes black.
const POSTER =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a2c21"/><stop offset="1" stop-color="#2B211A"/></linearGradient></defs><rect width="1920" height="1080" fill="url(#g)"/></svg>`,
  )

// Film grain: inline SVG feTurbulence noise tile.
const GRAIN =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/></filter><rect width="160" height="160" filter="url(#n)"/></svg>`,
  )

// Pexels free license (commercial use, no attribution): "A Person Walking on a
// Sidewalk" by Taryn Elliott — https://www.pexels.com/video/a-person-walking-on-a-sidewalk-5665059/
// TODO: replace with EDC brand footage. This direct download URL was chosen from
// a Pexels search but could not be byte-verified from the build sandbox (video
// hosts are blocked here) — confirm warmth/orientation/size, then self-host the
// .mp4 so the hero never depends on a third-party redirect.
const VIDEO_SRC = 'https://www.pexels.com/download/video/5665059/'

const NAV_LINKS = ['shop', 'our story', 'journal', 'care']

const HEADLINE_DELAY = 0.35 // when the first word starts rising
const WORD_STAGGER = 0.18
const ENTRANCE_DURATION = 0.9
// when the last headline word has landed
const SETTLED = HEADLINE_DELAY + 2 * WORD_STAGGER + ENTRANCE_DURATION

type WordProps = {
  index: number
  positionClass: string
  driftFrom: number
  children: React.ReactNode
}

function HeadlineWord({ index, positionClass, driftFrom, children }: WordProps) {
  const reducedMotion = useReducedMotion()
  const delay = HEADLINE_DELAY + index * WORD_STAGGER

  return (
    <motion.span
      className={`absolute block ${positionClass}`}
      animate={
        reducedMotion
          ? undefined
          : { y: [driftFrom, -driftFrom] }
      }
      transition={{
        delay: SETTLED + 0.4,
        duration: 8,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'mirror',
      }}
    >
      <span className="block overflow-hidden">
        <motion.span
          className="block whitespace-nowrap"
          initial={reducedMotion ? { opacity: 0 } : { y: '100%', opacity: 0 }}
          animate={reducedMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
          transition={{ delay, duration: ENTRANCE_DURATION, ease: EASE }}
        >
          {children}
        </motion.span>
      </span>
    </motion.span>
  )
}

function CountUp({ to, delay }: { to: number; delay: number }) {
  const reducedMotion = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (reducedMotion) return
    const controls = animate(0, to, {
      delay,
      duration: 1.2,
      ease: EASE,
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [to, delay, reducedMotion])

  return <>{reducedMotion ? to : value}</>
}

function StatDivider({ rotate }: { rotate: number }) {
  return (
    <div
      aria-hidden="true"
      className="hidden md:block h-px w-24 bg-clay/50"
      style={{ transform: `rotate(${rotate}deg)` }}
    />
  )
}

const statFade = (delay: number, reducedMotion: boolean) => ({
  initial: { opacity: 0, y: reducedMotion ? 0 : 10 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8, ease: EASE },
})

export default function Hero() {
  const reducedMotion = useReducedMotion() ?? false

  return (
    <section className="relative h-screen w-full overflow-hidden bg-espresso">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_SRC}
        poster={POSTER}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* warm tint so cream text always holds contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(43,33,26,0.25), rgba(43,33,26,0.65))',
        }}
      />

      {/* film grain — kills the flat-screen coldness */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.04]"
        style={{ backgroundImage: `url("${GRAIN}")` }}
      />

      <motion.nav
        className="absolute left-0 right-0 top-0 z-20 px-6 pt-6 md:px-10"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: HEADLINE_DELAY + 0.3, duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex items-center justify-between gap-4">
          <a
            href="/"
            className="flex items-center gap-2 rounded-full py-3 pl-4 pr-6 backdrop-blur"
            style={{ background: 'rgba(43,33,26,0.85)' }}
          >
            {/* EC monogram SVG goes here */}
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-cream"
              aria-hidden="true"
            >
              <path d="M5 4h9v2.6H8v3.1h5.4v2.6H8v3.1h6V18H5V4zm12.6 7c0-4 2.6-7.2 6.4-7.2v2.7c-2.2 0-3.6 2-3.6 4.5s1.4 4.5 3.6 4.5v2.7c-3.8 0-6.4-3.2-6.4-7.2z" />
            </svg>
            <span className="text-sm font-medium tracking-tight text-cream">
              everyday crew
            </span>
          </a>

          <div
            className="hidden items-center gap-1 rounded-full px-3 py-2 backdrop-blur md:flex"
            style={{ background: 'rgba(43,33,26,0.85)' }}
          >
            {NAV_LINKS.map((label) => (
              <a
                key={label}
                href="/"
                className="rounded-full px-5 py-2 text-sm text-bone transition-colors duration-300 hover:bg-chestnut/40 hover:text-cream"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="/"
            className="rounded-full bg-cream px-6 py-3 text-sm font-medium text-espresso transition-colors duration-300 hover:bg-bone"
          >
            shop socks
          </a>
        </div>
      </motion.nav>

      <div className="relative z-10 h-full w-full">
        <h1 className="hero-title absolute inset-0 m-0 text-[15vw] font-medium text-cream md:text-[12vw]">
          <HeadlineWord index={0} positionClass="left-4 md:left-10 top-[16%]" driftFrom={-6}>
            everyday
          </HeadlineWord>
          <HeadlineWord index={1} positionClass="right-4 md:right-8 top-[38%]" driftFrom={6}>
            everywhere
          </HeadlineWord>
          <HeadlineWord
            index={2}
            positionClass="left-[10%] md:left-[22%] top-[64%] md:top-[60%]"
            driftFrom={-6}
          >
            every <em className="font-normal italic">occasion</em>
          </HeadlineWord>
        </h1>

        <motion.p
          className="absolute left-6 top-[47%] md:top-[44%] m-0 max-w-[260px] text-[15px] leading-snug text-cream/90 md:left-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: SETTLED + 0.3, duration: 0.8, ease: EASE }}
        >
          one pair, built for all of it. the morning run, the office, the late
          dinner. made in new york for people who don't change socks to change
          plans.
        </motion.p>

        {/* stats */}
        <motion.div
          className="absolute right-6 top-[13%] flex flex-col items-end gap-3 md:right-24"
          {...statFade(SETTLED + 0.4, reducedMotion)}
        >
          <StatDivider rotate={-20} />
          <div className="text-right">
            <div className="hero-title text-4xl font-medium tracking-tight text-cream md:text-5xl">
              <CountUp to={18} delay={SETTLED + 0.5} />
              hrs
            </div>
            <div className="mt-1 text-xs text-bone/80 md:text-sm">
              of wear, one pair
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-28 left-6 flex flex-col gap-3 md:bottom-24 md:left-20"
          {...statFade(SETTLED + 0.55, reducedMotion)}
        >
          <div>
            <div className="hero-title text-4xl font-medium tracking-tight text-cream md:text-5xl">
              1 of 5
            </div>
            <div className="mt-2 flex items-center gap-3">
              <StatDivider rotate={20} />
            </div>
            <div className="mt-1 text-xs text-bone/80 md:text-sm">
              boroughs we call home
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-24 right-6 flex flex-col items-end gap-3 md:bottom-20 md:right-20"
          {...statFade(SETTLED + 0.7, reducedMotion)}
        >
          <StatDivider rotate={-20} />
          <div className="text-right">
            <div className="hero-title text-4xl font-medium tracking-tight text-cream md:text-5xl">
              <CountUp to={365} delay={SETTLED + 0.8} />
            </div>
            <div className="mt-1 text-xs text-bone/80 md:text-sm">
              days a year, zero excuses
            </div>
          </div>
        </motion.div>
      </div>

      {/* bottom fade into the page below */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-48"
        style={{
          background:
            'linear-gradient(to bottom, rgba(43,33,26,0), var(--espresso))',
        }}
      />

      <div className="pointer-events-none absolute bottom-5 left-0 right-0 z-10 flex flex-col items-center gap-2">
        <span className="text-xs tracking-wide text-bone">scroll</span>
        <span className="scroll-cue-line block h-8 w-px bg-clay" />
      </div>
    </section>
  )
}
