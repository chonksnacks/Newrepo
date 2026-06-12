import { motion } from 'framer-motion'
import { EASE, GRAIN } from './media'

// a quiet exhale between the seasons and the story — one line, lots of air
export default function Breather() {
  return (
    <section className="relative flex w-full flex-col items-center gap-6 overflow-hidden bg-espresso px-8 py-16 text-center md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `url("${GRAIN}")` }}
      />
      <motion.div
        className="relative flex flex-col items-center gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.span
          aria-hidden="true"
          className="block h-px w-16 bg-clay/50"
          variants={{
            hidden: { opacity: 0, scaleX: 0 },
            visible: {
              opacity: 1,
              scaleX: 1,
              transition: { duration: 0.9, ease: EASE },
            },
          }}
        />
        <span className="block overflow-hidden">
          <motion.p
            className="hero-title m-0 max-w-[18em] pb-[0.2em] -mb-[0.1em] text-2xl font-normal italic lowercase text-bone md:text-4xl"
            variants={{
              hidden: { y: '100%', opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { delay: 0.15, duration: 0.9, ease: EASE },
              },
            }}
          >
            one pair, built for all of it.
          </motion.p>
        </span>
        <motion.p
          className="m-0 max-w-[34ch] text-xs uppercase tracking-[0.14em] leading-loose text-clay md:max-w-none md:text-sm"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delay: 0.5, duration: 0.8, ease: EASE },
            },
          }}
        >
          breathable&ensp;·&ensp;moisture-wicking&ensp;·&ensp;stupid
          comfortable&ensp;·&ensp;cushioned where it counts
        </motion.p>
      </motion.div>
    </section>
  )
}
