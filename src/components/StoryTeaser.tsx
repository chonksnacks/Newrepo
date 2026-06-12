import { motion } from 'framer-motion'
import { EASE, GRAIN } from './media'

// the origin story, distilled — centered and quiet, linking to the full page
export default function StoryTeaser() {
  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden bg-espresso px-8 pb-28 pt-16 text-center md:pb-40 md:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `url("${GRAIN}")` }}
      />
      <motion.div
        className="relative flex max-w-[28em] flex-col items-center gap-6"
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
          our story
        </motion.span>
        <span className="block overflow-hidden">
          <motion.h2
            className="hero-title m-0 pb-[0.2em] -mb-[0.1em] text-3xl font-medium lowercase text-cream md:text-5xl"
            variants={{
              hidden: { y: '100%', opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.9, ease: EASE },
              },
            }}
          >
            it started with a bad sock and two new yorkers who thought that
            wasn't <em className="font-normal italic">good enough.</em>
          </motion.h2>
        </span>
        <motion.p
          className="m-0 max-w-[44ch] text-[15px] leading-snug text-cream/90"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delay: 0.5, duration: 0.8, ease: EASE },
            },
          }}
        >
          combed cotton instead of the kind that pills, and a fit that holds
          on without digging into your calves. a sock worth keeping, designed
          in new york.
        </motion.p>
        <motion.a
          href="story.html"
          className="mt-1 w-fit text-[15px] text-cream transition-colors duration-300 hover:text-clay"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delay: 0.65, duration: 0.8, ease: EASE },
            },
          }}
        >
          read our story →
        </motion.a>
      </motion.div>
    </section>
  )
}
