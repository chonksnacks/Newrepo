import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { EASE } from './media'

// Square crew photos live in public/crew/ — see public/crew/README.md for the
// expected filenames. Grid order (desktop): office, superhero, gym / cowboy,
// [text], robot / firefighter, santa, teen.
const CELLS: Array<{ file: string; alt: string }> = [
  { file: 'office.png', alt: 'crew socks at the office' },
  { file: 'superhero.png', alt: 'crew socks on a superhero' },
  { file: 'girl_blank.png', alt: 'crew socks at the gym' },
  { file: 'cowbow.png', alt: 'crew socks on a cowboy' },
  { file: 'robot.png', alt: 'crew socks on a robot' },
  { file: 'firefighter.png', alt: 'crew socks on a firefighter' },
  { file: 'santa.png', alt: 'crew socks on santa' },
  { file: 'teen.png', alt: 'crew socks on a teen' },
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
        loading="lazy"
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
        <motion.h2
          className="hero-title m-0 pb-[0.2em] -mb-[0.1em] text-2xl font-medium lowercase text-espresso md:text-3xl"
          variants={rise}
        >
          everyone's welcome to the crew
        </motion.h2>
      </span>
      <motion.span
        className="hero-title text-base italic text-chestnut md:text-lg"
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

export default function CrewSection() {
  return (
    <section className="w-full snap-start bg-cream py-24 md:py-32">
      {/* desktop: 3x3 grid, text in the center cell */}
      <motion.div
        className="mx-auto hidden max-w-[960px] grid-cols-3 gap-3 px-6 md:grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
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
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <CrewHeading />
        <div className="grid grid-cols-2 gap-3">
          {CELLS.map((cell, i) => (
            <CrewImage key={cell.file} cell={cell} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
