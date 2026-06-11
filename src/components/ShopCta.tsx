import { motion } from 'framer-motion'
import { EASE, GRAIN } from './media'

export default function ShopCta() {
  return (
    <section
      className="relative flex h-screen w-full snap-start flex-col items-center justify-center gap-6 overflow-hidden px-8 text-center"
      // continues the ramp: chestnut -> clay -> bone -> the cover's cream
      style={{
        background:
          'linear-gradient(to bottom, #6B4F3A 0%, #A98467 16%, #E5DDCE 38%, #F2EDE4 55%, #F2EDE4 100%)',
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `url("${GRAIN}")` }}
      />

      <motion.div
        className="relative flex flex-col items-center gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.span
          className="text-xs tracking-wide text-chestnut md:text-sm"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
          }}
        >
          one pair. all of it.
        </motion.span>
        <span className="block overflow-hidden">
          <motion.h2
            className="hero-title m-0 pb-[0.2em] -mb-[0.1em] text-6xl font-medium lowercase text-espresso md:text-8xl"
            variants={{
              hidden: { y: '100%', opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.9, ease: EASE },
              },
            }}
          >
            shop the <em className="font-normal italic">sock.</em>
          </motion.h2>
        </span>
        <motion.p
          className="m-0 max-w-[340px] text-[15px] leading-snug text-espresso/80"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delay: 0.45, duration: 0.8, ease: EASE },
            },
          }}
        >
          made in new york. shipped in a wash bag. built to be the last sock
          decision you make.
        </motion.p>
        <motion.a
          href="/"
          className="rounded-full bg-espresso px-10 py-4 text-xs font-medium uppercase tracking-[0.12em] text-cream transition-colors duration-300 hover:bg-chestnut"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delay: 0.6, duration: 0.8, ease: EASE },
            },
          }}
        >
          shop socks
        </motion.a>
      </motion.div>
    </section>
  )
}
