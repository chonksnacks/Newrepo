import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useInView, animate } from 'framer-motion'
import { EASE, GRAIN, POSTER, TINT } from './media'

// Pexels free-license clips (commercial use, no attribution), one per moment of
// the day. Chosen via search but not byte-verified from the build sandbox
// (video hosts are blocked there).
// TODO: replace with EDC brand footage, or confirm warmth/length/size and
// self-host the .mp4s so the hero never depends on third-party redirects.
const SCENES = [
  // city walk — "A Person Walking on a Sidewalk" by Taryn Elliott
  // https://www.pexels.com/video/a-person-walking-on-a-sidewalk-5665059/
  'https://www.pexels.com/download/video/5665059/',
  // office — "A Man Working on a Laptop inside the Office"
  // https://www.pexels.com/video/a-man-working-on-a-laptop-inside-the-office-3140468/
  'https://www.pexels.com/download/video/3140468/',
  // the run — "A large group of people running in a race"
  // https://www.pexels.com/video/a-large-group-of-people-running-in-a-race-27441394/
  'https://www.pexels.com/download/video/27441394/',
  // travel — "Airplane Taking Off During Sunset" by sunny Huang
  // https://www.pexels.com/video/airplane-taking-off-during-sunset-5008861/
  'https://www.pexels.com/download/video/5008861/',
  // dinner — "Friends Having a Dinner Party at Home" by cottonbro studio
  // https://www.pexels.com/video/friends-having-a-dinner-party-at-home-6953396/
  'https://www.pexels.com/download/video/6953396/',
]

const SCENE_HOLD_MS = 5500
const SCENE_FADE_S = 1.2

function CrossfadeScenes() {
  const reducedMotion = useReducedMotion()
  const [isMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches,
  )
  const [active, setActive] = useState(0)
  // scenes 3–5 mount only after the first two have had time to load
  const [tailLoaded, setTailLoaded] = useState(false)
  const cycling = !reducedMotion && !isMobile

  useEffect(() => {
    if (!cycling) return
    const lazy = setTimeout(() => setTailLoaded(true), 4000)
    const cycle = setInterval(
      () => setActive((a) => (a + 1) % SCENES.length),
      SCENE_HOLD_MS,
    )
    return () => {
      clearTimeout(lazy)
      clearInterval(cycle)
    }
  }, [cycling])

  // mobile: a single looping clip protects load time; reduced motion: one
  // still scene, no playback
  if (!cycling) {
    return (
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={SCENES[0]}
        poster={POSTER}
        autoPlay={!reducedMotion}
        loop
        muted
        playsInline
        preload="metadata"
      />
    )
  }

  return (
    <>
      {SCENES.map(
        (src, i) =>
          (i < 2 || tailLoaded) && (
            <motion.video
              key={src}
              className="absolute inset-0 h-full w-full object-cover"
              src={src}
              poster={i === 0 ? POSTER : undefined}
              autoPlay
              loop
              muted
              playsInline
              preload={i < 2 ? 'auto' : 'metadata'}
              initial={{ opacity: i === 0 ? 1 : 0 }}
              animate={{ opacity: i === active ? 1 : 0 }}
              transition={{ duration: SCENE_FADE_S, ease: 'easeInOut' }}
            />
          ),
      )}
    </>
  )
}

const WORD_STAGGER = 0.18
const ENTRANCE_DURATION = 0.9

type WordProps = {
  index: number
  driftFrom: number
  children: React.ReactNode
}

function HeadlineWord({ index, driftFrom, children }: WordProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.span
      className="block"
      animate={
        reducedMotion
          ? undefined
          : { y: [driftFrom, -driftFrom] }
      }
      transition={{
        delay: 2,
        duration: 8,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'mirror',
      }}
    >
      {/* mask height includes the descender padding so y/g/p never clip */}
      <span className="block overflow-hidden">
        <motion.span
          className="block whitespace-nowrap pb-[0.2em] -mb-[0.1em]"
          variants={{
            hidden: reducedMotion ? { opacity: 0 } : { y: '100%', opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                delay: index * WORD_STAGGER,
                duration: ENTRANCE_DURATION,
                ease: EASE,
              },
            },
          }}
        >
          {children}
        </motion.span>
      </span>
    </motion.span>
  )
}

function CountUp({ to, start }: { to: number; start: boolean }) {
  const reducedMotion = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (reducedMotion || !start) return
    const controls = animate(0, to, {
      delay: 0.7,
      duration: 1.2,
      ease: EASE,
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [to, start, reducedMotion])

  return <>{reducedMotion ? to : value}</>
}

// the second screen: the day cycles behind the fixed type — entrance fires
// when scrolled into view, since the crew grid now opens the page
export default function Hero() {
  const statRef = useRef<HTMLDivElement>(null)
  const statInView = useInView(statRef, { once: true, amount: 0.5 })

  return (
    <section className="relative h-screen w-full snap-start overflow-hidden bg-espresso">
      {/* walk, work, run, fly, dine */}
      <CrossfadeScenes />

      {/* warm tint so cream text always holds contrast */}
      <div aria-hidden="true" className="absolute inset-0" style={{ background: TINT }} />

      {/* film grain — kills the flat-screen coldness */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.04]"
        style={{ backgroundImage: `url("${GRAIN}")` }}
      />

      <div className="relative z-10 h-full w-full">
        {/* single left column of type; the imagery owns the right side */}
        <motion.h2
          className="hero-title absolute left-10 top-1/2 m-0 flex -translate-y-1/2 flex-col gap-[2vw] text-[8vw] font-medium text-cream md:left-16 md:text-[8.5vw]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <HeadlineWord index={0} driftFrom={-6}>
            everyday
          </HeadlineWord>
          <HeadlineWord index={1} driftFrom={6}>
            everywhere
          </HeadlineWord>
          <HeadlineWord index={2} driftFrom={-6}>
            every <em className="font-normal italic">occasion</em>
          </HeadlineWord>
        </motion.h2>

        <motion.div
          ref={statRef}
          className="absolute right-8 top-[15%] flex flex-col items-end gap-3 md:right-24"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.7, duration: 0.8, ease: EASE }}
        >
          <div
            aria-hidden="true"
            className="hidden md:block h-px w-24 bg-clay/50"
            style={{ transform: 'rotate(-20deg)' }}
          />
          <div className="text-right">
            <div className="hero-title text-4xl font-medium tracking-tight text-cream md:text-5xl">
              <CountUp to={18} start={statInView} />
              hrs
            </div>
            <div className="mt-1 text-xs text-bone/80 md:text-sm">
              of wear, one pair
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
    </section>
  )
}
