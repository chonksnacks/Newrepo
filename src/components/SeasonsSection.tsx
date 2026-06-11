import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useInView } from 'framer-motion'
import { EASE, GRAIN } from './media'

// One walk, four seasons — public/seasons/*.webp, cycling winter -> spring ->
// summer -> fall. Sources are the uploaded PNGs compressed to WebP.
const SEASONS = ['winter', 'spring', 'summer', 'fall'] as const

const HOLD_MS = 3500
const FADE_S = 1.2

export default function SeasonsSection() {
  const reducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  // pause the cycle while the section is off-screen
  const onScreen = useInView(sectionRef, { amount: 0.25 })
  const [active, setActive] = useState(0)
  // bumping this restarts the cycle timer after a manual jump
  const [resetToken, setResetToken] = useState(0)
  const cycling = !reducedMotion && onScreen

  useEffect(() => {
    if (!cycling) return
    const id = setInterval(
      () => setActive((a) => (a + 1) % SEASONS.length),
      HOLD_MS,
    )
    return () => clearInterval(id)
  }, [cycling, resetToken])

  const jumpTo = (i: number) => {
    setActive(i)
    setResetToken((t) => t + 1)
  }

  return (
    <section
      ref={sectionRef}
      className="relative h-[75vh] w-full overflow-hidden bg-espresso md:h-[85vh]"
    >
      {/* all four layers stay mounted and preloaded — no swap, no flash */}
      {SEASONS.map((season, i) => (
        <motion.img
          key={season}
          src={`seasons/${season}.webp`}
          alt={`crew socks in ${season}`}
          className="absolute inset-0 h-full w-full object-cover object-center"
          initial={{ opacity: i === 0 ? 1 : 0 }}
          animate={{
            opacity: (reducedMotion ? i === 0 : i === active) ? 1 : 0,
          }}
          transition={{ duration: FADE_S, ease: 'easeInOut' }}
        />
      ))}

      {/* soft warm scrim pooled behind the text zone, plus gentle edges */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(43,33,26,0.45), rgba(43,33,26,0) 75%), linear-gradient(to bottom, rgba(43,33,26,0.25), rgba(43,33,26,0) 30%, rgba(43,33,26,0) 70%, rgba(43,33,26,0.35))',
        }}
      />

      {/* film grain, same as everywhere else */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.04]"
        style={{ backgroundImage: `url("${GRAIN}")` }}
      />

      <motion.div
        className="relative z-10 flex h-full w-full items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <span className="block overflow-hidden">
          <motion.h2
            className="hero-title m-0 pb-[0.2em] -mb-[0.1em] text-[11vw] font-medium lowercase text-cream md:text-[7vw]"
            variants={{
              hidden: reducedMotion ? { opacity: 0 } : { y: '100%', opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.9, ease: EASE },
              },
            }}
          >
            anytime, <em className="font-normal italic">anywhere</em>
          </motion.h2>
        </span>
      </motion.div>

      {/* story-style season timeline: the active bar fills over the hold */}
      {!reducedMotion && (
        <div className="absolute bottom-6 left-0 right-0 z-10 flex items-end justify-center gap-5 md:gap-8">
          {SEASONS.map((season, i) => (
            <button
              key={season}
              type="button"
              aria-label={`show ${season}`}
              aria-current={i === active}
              onClick={() => jumpTo(i)}
              className="group flex w-14 flex-col items-center gap-2 md:w-20"
            >
              <span
                className={`text-[10px] uppercase tracking-[0.14em] transition-colors duration-500 md:text-xs ${
                  i === active ? 'text-cream' : 'text-bone/70 group-hover:text-bone'
                }`}
              >
                {season}
              </span>
              <span className="block h-px w-full overflow-hidden bg-bone/30">
                {i === active && (
                  <motion.span
                    key={`${season}-${resetToken}-${active}`}
                    className="block h-full w-full origin-left bg-cream"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: onScreen ? 1 : 0 }}
                    transition={{ duration: HOLD_MS / 1000, ease: 'linear' }}
                  />
                )}
              </span>
            </button>
          ))}
        </div>
      )}
    </section>
  )
}
