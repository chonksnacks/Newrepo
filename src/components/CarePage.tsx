import { motion } from 'framer-motion'
import Logo from './Logo'
import { EASE, GRAIN } from './media'

const STEPS = [
  {
    n: '01',
    title: 'machine wash cold',
    body: "30°c, with the rest of your laundry. the mesh bag goes in with the socks inside — that's what it's for.",
  },
  {
    n: '02',
    title: 'tumble dry low',
    body: 'no need to pull them out of the bag between the washer and the dryer. straight through, bag and all.',
  },
  {
    n: '03',
    title: 'no bleach',
    body: 'bleach breaks down spandex, and the fit is the whole point.',
  },
  {
    n: '04',
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

      <article className="relative mx-auto flex max-w-[680px] flex-col gap-10 px-8 pb-32 pt-36 md:pt-44">
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
            A combed cotton, nylon, and spandex blend wants a standard gentle
            routine. Four rules and the bag does most of the work.
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
              <h2 className="hero-title m-0 text-3xl font-medium lowercase text-cream md:text-5xl">
                {step.title}
              </h2>
              <p className="m-0 max-w-[46ch] text-[15px] leading-relaxed text-bone">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>

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
    </main>
  )
}
