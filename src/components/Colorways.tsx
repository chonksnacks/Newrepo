import { motion } from 'framer-motion'
import { EASE, GRAIN } from './media'

// TODO: estimated hexes — swap for the real colorway values when they exist.
// Pack names are placeholders too.
const PACKS = [
  {
    label: 'pack 01 — the cool one',
    colors: [
      { name: 'vapor grey', hex: '#C7C6C2', dark: false },
      { name: 'sleet grey', hex: '#8D8B86', dark: false },
      { name: 'caviar', hex: '#211E1B', dark: true },
    ],
  },
  {
    label: 'pack 02 — the warm one',
    colors: [
      { name: 'fresh white', hex: '#F6F4EE', dark: false },
      { name: 'oat creme', hex: '#E8DFCB', dark: false },
      { name: 'americano', hex: '#5C4536', dark: true },
    ],
  },
]

function Pack({ pack, index }: { pack: (typeof PACKS)[number]; index: number }) {
  return (
    <motion.div
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.15, duration: 0.9, ease: EASE }}
    >
      <span className="flex items-center gap-4">
        <span className="text-xs tracking-[0.14em] text-clay">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span aria-hidden="true" className="h-px w-12 bg-clay/50" />
        <span className="text-xs uppercase tracking-[0.14em] text-bone/80">
          {pack.label}
        </span>
      </span>
      <div className="flex h-[34vh] w-full overflow-hidden md:h-[44vh]">
        {pack.colors.map((color) => (
          <div
            key={color.name}
            className="group relative flex-1 transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:flex-[2.4]"
            style={{ background: color.hex }}
          >
            <div
              className={`absolute bottom-4 left-4 flex flex-col gap-0.5 ${
                color.dark ? 'text-cream' : 'text-espresso'
              }`}
            >
              <span className="hero-title text-lg font-medium lowercase md:text-2xl">
                {color.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.14em] opacity-0 transition-opacity duration-500 group-hover:opacity-60 md:text-xs">
                {color.hex}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

// the range: two 3-packs, six colors, nothing on screen but the colorways
export default function Colorways() {
  return (
    <section className="relative w-full overflow-hidden bg-espresso px-8 py-24 md:px-16 md:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `url("${GRAIN}")` }}
      />
      <div className="relative mx-auto flex max-w-[1100px] flex-col gap-16 md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <span className="text-xs tracking-wide text-bone/80 md:text-sm">
            colorways
          </span>
          <h2 className="hero-title m-0 mt-4 max-w-[14em] text-4xl font-medium lowercase text-cream md:text-6xl">
            six colors. two packs. one{' '}
            <em className="font-normal italic">sock.</em>
          </h2>
        </motion.div>

        {PACKS.map((pack, i) => (
          <Pack key={pack.label} pack={pack} index={i} />
        ))}
      </div>
    </section>
  )
}
