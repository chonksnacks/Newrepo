import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useInView } from 'framer-motion'
import { EASE, GRAIN } from './media'

// One walk, four seasons — public/seasons/*.webp, cycling winter -> spring ->
// summer -> fall. Sources are the uploaded PNGs compressed to WebP.
const SEASONS = ['winter', 'spring', 'summer', 'fall'] as const

const HOLD_MS = 5000
const FADE_S = 1.2

export default function SeasonsSection() {
  const reducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  // pause the cycle while the section is off-screen
  const onScreen = useInView(sectionRef, { amount: 0.25 })
  const [active, setActive] = useState(0)
  const cycling = !reducedMotion && onScreen

  useEffect(() => {
    if (!cycling) return
    const id = setInterval(
      () => setActive((a) => (a + 1) % SEASONS.length),
      HOLD_MS,
    )
    return () => clearInterval(id)
  }, [cycling])

  return (
    <section
      ref={sectionRef}
      className="relative h-[75vh] w-full snap-start overflow-hidden bg-espresso md:h-[85vh]"
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

      {/* quiet season dots */}
      {!reducedMotion && (
        <div className="absolute bottom-6 left-0 right-0 z-10 flex items-center justify-center gap-2.5">
          {SEASONS.map((season, i) => (
            <span
              key={season}
              aria-label={season}
              className={`block h-1 w-1 rounded-full transition-colors duration-500 ${
                i === active ? 'bg-cream' : 'bg-bone/40'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
