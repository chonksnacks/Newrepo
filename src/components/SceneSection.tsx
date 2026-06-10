import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { EASE, GRAIN, POSTER, TINT } from './media'

type SceneSectionProps = {
  videoSrc: string
  headline: string
  label: string
  body?: string
}

export default function SceneSection({
  videoSrc,
  headline,
  label,
  body,
}: SceneSectionProps) {
  const reducedMotion = useReducedMotion()

  const rise: Variants = {
    hidden: reducedMotion ? { opacity: 0 } : { y: '100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: EASE },
    },
  }
  const fade = (delay: number): Variants => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay, duration: 0.8, ease: EASE },
    },
  })

  return (
    <section className="relative h-screen w-full snap-start overflow-hidden bg-espresso">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={videoSrc}
        poster={POSTER}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
      <div aria-hidden="true" className="absolute inset-0" style={{ background: TINT }} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.04]"
        style={{ backgroundImage: `url("${GRAIN}")` }}
      />

      <motion.div
        className="relative z-10 flex h-full w-full flex-col justify-end gap-4 px-8 pb-24 md:px-16 md:pb-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <span className="block overflow-hidden">
          <motion.h2
            className="hero-title m-0 pb-[0.2em] -mb-[0.1em] text-[13vw] font-medium lowercase text-cream md:text-[8vw]"
            variants={rise}
          >
            {headline}
          </motion.h2>
        </span>
        <motion.span
          className="text-xs tracking-wide text-bone/80 md:text-sm"
          variants={fade(0.5)}
        >
          {label}
        </motion.span>
        {body && (
          <motion.p
            className="m-0 max-w-[300px] text-[15px] leading-snug text-cream/90"
            variants={fade(0.65)}
          >
            {body}
          </motion.p>
        )}
      </motion.div>
    </section>
  )
}
