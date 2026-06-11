import { motion, useReducedMotion } from 'framer-motion'
import { EASE, GRAIN } from './media'

/*
 * PLACEHOLDER IMAGES — swap for real product shots when they exist.
 * Hotlinked from Unsplash (free license) with imgix params desaturating
 * them toward the palette. Chosen from memory and unverifiable from the
 * build sandbox, so every cell keeps a warm clay fallback background and
 * the layout survives a dead link. Replace src values one-for-one.
 */
const BLOCKS = [
  {
    n: '01',
    title: 'the bag it ships in',
    body: "every set arrives inside a fine-mesh wash bag — packaging that's part of the product. it protects your socks in the machine, packs your delicates for travel, and never sees a trash can.",
    // PLACEHOLDER: laundromat / laundry texture
    img: 'https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?auto=format&fit=crop&w=1600&q=70&sat=-40',
    alt: 'mesh laundry bag placeholder',
  },
  {
    n: '02',
    title: 'combed cotton',
    body: 'the short, rough fibers are stripped out before the yarn is ever spun — the ones responsible for pilling and that scratchy first-wash feeling. day three hundred feels like day one.',
    // PLACEHOLDER: knit / cotton fabric close-up
    img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1600&q=70&sat=-40',
    alt: 'cotton knit texture placeholder',
  },
  {
    n: '03',
    title: 'the fit',
    body: "nylon for structure, spandex for hold. snug without squeezing, no calf marks, and elastic that doesn't die by month two.",
    // PLACEHOLDER: socks / legs
    img: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=1600&q=70&sat=-40',
    alt: 'crew socks placeholder',
  },
]

function Block({ block, flip }: { block: (typeof BLOCKS)[number]; flip: boolean }) {
  const reducedMotion = useReducedMotion()
  const appear = (delay: number) => ({
    initial: { opacity: 0, y: reducedMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.35 },
    transition: { delay, duration: 0.9, ease: EASE },
  })

  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
      <motion.div
        className={`aspect-[4/3] overflow-hidden bg-clay/20 ${flip ? 'md:order-2' : ''}`}
        {...appear(0)}
      >
        <img
          src={block.img}
          alt={block.alt}
          loading="lazy"
          className="h-full w-full object-cover"
          style={{ filter: 'sepia(0.12) saturate(0.9)' }}
        />
      </motion.div>
      <motion.div
        className={`flex max-w-[44ch] flex-col gap-5 ${flip ? 'md:order-1 md:justify-self-end' : ''}`}
        {...appear(0.15)}
      >
        <span className="flex items-center gap-4">
          <span className="text-xs tracking-[0.14em] text-clay">{block.n}</span>
          <span aria-hidden="true" className="h-px w-12 bg-clay/50" />
        </span>
        <h3 className="hero-title m-0 text-3xl font-medium lowercase text-cream md:text-5xl">
          {block.title}
        </h3>
        <p className="m-0 text-[15px] leading-relaxed text-bone">{block.body}</p>
      </motion.div>
    </div>
  )
}

export default function Differentiators() {
  return (
    <section
      className="relative w-full px-8 py-24 md:px-16 md:py-36"
      // begins where the teaser's espresso ends and warms toward the CTA
      style={{ background: 'linear-gradient(to bottom, #2B211A 0%, #2B211A 30%, #6B4F3A 100%)' }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `url("${GRAIN}")` }}
      />
      <div className="relative mx-auto flex max-w-[1100px] flex-col gap-24 md:gap-36">
        {BLOCKS.map((block, i) => (
          <Block key={block.n} block={block} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  )
}
