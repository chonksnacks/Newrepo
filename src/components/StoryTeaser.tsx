import { motion } from 'framer-motion'
import SmoothLoopVideo from './SmoothLoopVideo'
import { EASE, GRAIN, TINT } from './media'

// Same Pexels walking clip as the hero — the teaser shares its energy.
// TODO: replace with EDC brand footage (see note in Hero.tsx).
const TEASER_VIDEO = 'https://www.pexels.com/download/video/5665059/'

export default function StoryTeaser() {
  return (
    <section className="relative h-[88vh] w-full snap-start overflow-hidden bg-espresso md:grid md:grid-cols-2">
      {/* right half: living imagery (background on mobile) */}
      <div className="absolute inset-0 md:relative md:order-2 md:overflow-hidden">
        <SmoothLoopVideo
          className="absolute inset-0 h-full w-full object-cover"
          src={TEASER_VIDEO}
        />
        <div aria-hidden="true" className="absolute inset-0" style={{ background: TINT }} />
      </div>

      {/* left half: the distilled origin story */}
      <motion.div
        className="relative z-10 flex h-full flex-col justify-center gap-6 px-8 py-16 md:order-1 md:bg-espresso md:px-16"
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
            it started with a bad sock and two new yorkers who thought that
            wasn't <em className="font-normal italic">good enough.</em>
          </motion.h2>
        </span>
        <motion.p
          className="m-0 max-w-[340px] text-[15px] leading-snug text-cream/90"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delay: 0.5, duration: 0.8, ease: EASE },
            },
          }}
        >
          combed cotton instead of the kind that pills. a fit that holds
          without leaving marks. a sock worth keeping, made in new york.
        </motion.p>
        <motion.a
          href="story.html"
          className="mt-2 w-fit text-[15px] text-cream transition-colors duration-300 hover:text-clay"
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

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 opacity-[0.04]"
        style={{ backgroundImage: `url("${GRAIN}")` }}
      />
    </section>
  )
}
