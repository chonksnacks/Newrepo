import { motion } from 'framer-motion'
import Logo from './Logo'
import SmoothLoopVideo from './SmoothLoopVideo'
import { NoBleach, NoIron, TumbleLow, WashCold } from './CareSymbols'
import { EASE, GRAIN } from './media'

// Pexels free license: "A Moving Fabric" by Mikhail Nilov — cream silk
// rippling in soft light: https://www.pexels.com/video/a-moving-fabric-7677259/
// TODO: chosen via search, not previewable from the build sandbox — confirm
// the mood live, or swap for brand footage of the socks/bag/fabric.
const FABRIC_VIDEO = 'https://www.pexels.com/download/video/7677259/'

const STEPS = [
  {
    n: '01',
    Icon: WashCold,
    title: 'machine wash cold',
    body: "30°c, with the rest of your laundry. the mesh bag goes in with the socks inside — that's what it's for.",
  },
  {
    n: '02',
    Icon: TumbleLow,
    title: 'tumble dry low',
    body: 'no need to pull them out of the bag between the washer and the dryer. straight through, bag and all.',
  },
  {
    n: '03',
    Icon: NoBleach,
    title: 'no bleach',
    body: 'bleach breaks down spandex, and the fit is the whole point.',
  },
  {
    n: '04',
    Icon: NoIron,
    title: 'no ironing',
    body: "they're socks. please don't iron them.",
  },
]

function Reveal({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

export default function CarePage() {
  return (
    <main className="min-h-full bg-espresso text-cream">
      <nav className="fixed left-0 right-0 top-0 z-30 px-6 pt-6 md:px-10">
        <div className="flex items-center justify-between gap-4">
          <a
            href="./"
            className="flex items-center gap-3 rounded-full py-3.5 pl-6 pr-8 backdrop-blur"
            style={{ background: 'rgba(43,33,26,0.85)' }}
          >
            <Logo className="h-6 w-auto text-cream" />
            <span className="hero-title text-sm font-medium uppercase tracking-wide text-cream">
              everyday crew
            </span>
          </a>
          <a
            href="./"
            className="rounded-full bg-cream px-7 py-3.5 text-xs font-medium uppercase tracking-[0.12em] text-espresso transition-colors duration-300 hover:bg-bone"
          >
            back home
          </a>
        </div>
      </nav>

      <div className="md:grid md:grid-cols-[1.3fr_1fr]">
        <article className="relative mx-auto flex w-full max-w-[680px] flex-col gap-10 px-8 pb-32 pt-36 md:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 opacity-[0.04]"
          style={{ backgroundImage: `url("${GRAIN}")` }}
        />

        <Reveal>
          <span className="text-xs tracking-wide text-bone/80 md:text-sm">
            care
          </span>
          <h1 className="hero-title m-0 mt-4 pb-[0.1em] text-5xl font-medium lowercase text-cream md:text-7xl">
            easy to wear, easy to{' '}
            <em className="font-normal italic">wash.</em>
          </h1>
        </Reveal>

        <Reveal>
          <p className="m-0 max-w-[46ch] text-[17px] leading-relaxed text-bone">
            85% combed cotton, 10% nylon, 5% spandex. The blend wants a
            standard gentle routine, and the bag does most of the work.
            Four rules.
          </p>
        </Reveal>

        <div className="flex flex-col gap-12 pt-6 md:gap-16">
          {STEPS.map((step) => (
            <Reveal key={step.n} className="flex flex-col gap-3">
              <span className="flex items-center gap-4">
                <span className="text-xs tracking-[0.14em] text-clay">
                  {step.n}
                </span>
                <span aria-hidden="true" className="h-px w-12 bg-clay/50" />
              </span>
              <div className="flex items-center gap-5">
                <step.Icon className="h-9 w-9 shrink-0 text-bone md:h-11 md:w-11" />
                <h2 className="hero-title m-0 text-3xl font-medium lowercase text-cream md:text-5xl">
                  {step.title}
                </h2>
              </div>
              <p className="m-0 max-w-[46ch] text-[15px] leading-relaxed text-bone">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex flex-col gap-5 pt-12">
          <span className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-12 bg-clay/50" />
            <span className="text-xs uppercase tracking-[0.14em] text-bone/80">
              your wash bag, off duty
            </span>
          </span>
          <p className="m-0 max-w-[46ch] text-[15px] leading-relaxed text-bone">
            between laundry days it moonlights as a travel pouch, a gym
            organizer, and a daily carry. it never has to be just packaging.
          </p>
        </Reveal>

        <Reveal className="pt-10">
          <p className="hero-title m-0 max-w-[16em] text-3xl font-normal italic lowercase text-cream md:text-4xl">
            wash it like you mean to keep it.
          </p>
        </Reveal>

        <Reveal>
          <a
            href="./"
            className="w-fit text-[15px] text-cream transition-colors duration-300 hover:text-clay"
          >
            ← back to everyday crew
          </a>
        </Reveal>
        </article>

        {/* sticky fabric column — the material itself, kept under the brown */}
        <div className="relative hidden md:block">
          <div className="sticky top-0 h-screen overflow-hidden">
            <SmoothLoopVideo
              className="absolute inset-0 h-full w-full object-cover"
              style={{ filter: 'sepia(0.35) saturate(0.8) brightness(0.95)' }}
              src={FABRIC_VIDEO}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: 'rgba(43,33,26,0.55)' }}
            />
            {/* the article's espresso bleeds into the column — no hard seam */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-48"
              style={{
                background: 'linear-gradient(to right, #2B211A, rgba(43,33,26,0))',
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: `url("${GRAIN}")` }}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
