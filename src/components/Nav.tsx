import { motion } from 'framer-motion'
import Logo from './Logo'

const NAV_LINKS: Array<[string, string]> = [
  ['shop', '/'],
  ['our story', 'story.html'],
  ['journal', '/'],
  ['care', '/'],
]

export default function Nav() {
  return (
    <motion.nav
      className="fixed left-0 right-0 top-0 z-30 px-6 pt-6 md:px-10"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.65, duration: 0.6, ease: 'easeOut' }}
    >
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

        <div
          className="hidden items-center gap-1 rounded-full px-3 py-2 backdrop-blur md:flex"
          style={{ background: 'rgba(43,33,26,0.85)' }}
        >
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.12em] text-bone transition-colors duration-300 hover:bg-chestnut/40 hover:text-cream"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="/"
          className="rounded-full bg-espresso px-7 py-3.5 text-xs font-medium uppercase tracking-[0.12em] text-cream transition-colors duration-300 hover:bg-chestnut"
        >
          shop socks
        </a>
      </div>
    </motion.nav>
  )
}
