import { motion } from 'framer-motion'
import { NoBleach, NoIron, TumbleLow, WashCold } from './CareSymbols'
import { EASE, GRAIN } from './media'

// quiet care beat between the differentiators and the CTA — solid chestnut,
// a pause inside the espresso-to-cream ramp
export default function CareTeaser() {
  return (
    <section className="relative flex w-full flex-col items-center gap-5 overflow-hidden bg-chestnut px-8 py-24 text-center md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `url("${GRAIN}")` }}
      />
      <motion.div
        className="relative flex flex-col items-center gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.span
          className="text-xs tracking-wide text-bone/80 md:text-sm"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
          }}
        >
          care
        </motion.span>
        <span className="block overflow-hidden">
          <motion.h2
            className="hero-title m-0 max-w-[14em] pb-[0.2em] -mb-[0.1em] text-3xl font-medium lowercase text-cream md:text-5xl"
            variants={{
              hidden: { y: '100%', opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.9, ease: EASE },
              },
            }}
          >
            cold wash, low tumble — the bag goes{' '}
            <em className="font-normal italic">in too.</em>
          </motion.h2>
        </span>
        <motion.div
          className="flex items-center gap-5 py-1 text-bone/80"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delay: 0.4, duration: 0.8, ease: EASE },
            },
          }}
        >
          <WashCold className="h-6 w-6" />
          <TumbleLow className="h-6 w-6" />
          <NoBleach className="h-6 w-6" />
          <NoIron className="h-6 w-6" />
        </motion.div>
        <motion.a
          href="care.html"
          className="text-[15px] text-cream transition-colors duration-300 hover:text-bone"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delay: 0.5, duration: 0.8, ease: EASE },
            },
          }}
        >
          see the care guide →
        </motion.a>
      </motion.div>
    </section>
  )
}
