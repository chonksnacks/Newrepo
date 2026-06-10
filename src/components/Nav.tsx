import { motion } from 'framer-motion'

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
          className="flex items-center gap-2 rounded-full py-3 pl-4 pr-6 backdrop-blur"
          style={{ background: 'rgba(43,33,26,0.85)' }}
        >
          {/* EC monogram SVG goes here */}
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-cream" aria-hidden="true">
            <path d="M5 4h9v2.6H8v3.1h5.4v2.6H8v3.1h6V18H5V4zm12.6 7c0-4 2.6-7.2 6.4-7.2v2.7c-2.2 0-3.6 2-3.6 4.5s1.4 4.5 3.6 4.5v2.7c-3.8 0-6.4-3.2-6.4-7.2z" />
          </svg>
          <span className="text-sm font-medium tracking-tight text-cream">
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
              className="rounded-full px-5 py-2 text-sm text-bone transition-colors duration-300 hover:bg-chestnut/40 hover:text-cream"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="/"
          className="rounded-full bg-cream px-6 py-3 text-sm font-medium text-espresso transition-colors duration-300 hover:bg-bone"
        >
          shop socks
        </a>
      </div>
    </motion.nav>
  )
}
