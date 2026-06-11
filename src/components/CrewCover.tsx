import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { EASE } from './media'

// Square crew photos live in public/crew/ — see public/crew/README.md for the
// expected filenames. Grid order (desktop): office, superhero, gym / cowgirl,
// [text], robot / firefighter, santa, ballerina.
const CELLS: Array<{ file: string; alt: string }> = [
  { file: 'office.webp', alt: 'crew socks at the office' },
  { file: 'superhero.webp', alt: 'crew socks on a superhero' },
  { file: 'girl_blank.webp', alt: 'crew socks at the gym' },
  { file: 'cowgirl.webp', alt: 'crew socks on a cowgirl' },
  { file: 'robot2.webp', alt: 'crew socks on a robot' },
  { file: 'firefighter.webp', alt: 'crew socks on a firefighter' },
  { file: 'santa.webp', alt: 'crew socks on santa' },
  { file: 'ballerina.webp', alt: 'crew socks on a ballerina' },
]

function CrewImage({ cell, index }: { cell: (typeof CELLS)[number]; index: number }) {
  return (
    <motion.div
      className="aspect-square overflow-hidden bg-clay/20"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { delay: 0.15 + index * 0.07, duration: 0.8, ease: EASE },
        },
      }}
    >
      <img
        src={`crew/${cell.file}`}
        alt={cell.alt}
        className="h-full w-full object-cover"
        loading={index < 4 ? 'eager' : 'lazy'}
      />
    </motion.div>
  )
}

function CrewHeading({ className = '' }: { className?: string }) {
  const reducedMotion = useReducedMotion()
  const rise: Variants = {
    hidden: reducedMotion ? { opacity: 0 } : { y: '100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: EASE },
    },
  }

  return (
    <div className={`flex flex-col items-center justify-center gap-2 text-center ${className}`}>
      <span className="block overflow-hidden">
        <motion.h1
          className="hero-title m-0 pb-[0.2em] -mb-[0.1em] text-2xl font-medium lowercase text-espresso md:text-3xl"
          variants={rise}
        >
          everyone's welcome to the crew
        </motion.h1>
      </span>
      <motion.span
        className="hero-title text-sm uppercase tracking-wide text-chestnut md:text-base"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { delay: 0.4, duration: 0.8, ease: EASE },
          },
        }}
      >
        everyday crew
      </motion.span>
    </div>
  )
}

// the opening screen: the crew grid is the cover, the videos come after
export default function CrewCover() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center bg-cream pb-20 pt-28 md:h-screen md:pb-16 md:pt-24">
      {/* desktop: 3x3 grid sized to fit the viewport, text in the center cell */}
      <motion.div
        className="mx-auto hidden w-full grid-cols-3 gap-3 px-6 md:grid"
        style={{ maxWidth: 'min(880px, calc(100vh - 200px))' }}
        initial="hidden"
        animate="visible"
      >
        {CELLS.slice(0, 4).map((cell, i) => (
          <CrewImage key={cell.file} cell={cell} index={i} />
        ))}
        <div className="aspect-square">
          <CrewHeading className="h-full" />
        </div>
        {CELLS.slice(4).map((cell, i) => (
          <CrewImage key={cell.file} cell={cell} index={i + 4} />
        ))}
      </motion.div>

      {/* mobile: heading above, photos in two columns */}
      <motion.div
        className="flex flex-col gap-8 px-6 md:hidden"
        initial="hidden"
        animate="visible"
      >
        <CrewHeading />
        <div className="grid grid-cols-2 gap-3">
          {CELLS.map((cell, i) => (
            <CrewImage key={cell.file} cell={cell} index={i} />
          ))}
        </div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-5 left-0 right-0 hidden flex-col items-center gap-2 md:flex">
        <span className="text-xs uppercase tracking-[0.12em] text-chestnut">scroll</span>
        <span className="scroll-cue-line block h-8 w-px bg-clay" />
      </div>
    </section>
  )
}
