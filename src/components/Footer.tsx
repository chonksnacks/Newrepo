import Logo from './Logo'

// TODO: confirm hello@everydaycrew.nyc is the real inbox before launch.
// The waitlist form drops into the marked slot when the strategy is set.
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61574338948280'

export default function Footer() {
  return (
    <footer className="border-t border-clay/30 bg-cream px-8 py-16 text-espresso md:px-16">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-3">
              <Logo className="h-6 w-auto text-espresso" />
              <span className="hero-title text-sm font-medium uppercase tracking-wide">
                everyday crew
              </span>
            </span>
            <span className="text-xs tracking-[0.14em] text-chestnut">
              est. 2026 · designed in new york
            </span>
          </div>

          {/* waitlist slot — form goes here when the timing is right */}

          <div className="flex gap-16 md:gap-20">
            <nav className="flex flex-col gap-3" aria-label="footer">
              <span className="text-[10px] uppercase tracking-[0.14em] text-espresso/50">
                pages
              </span>
              <a href="story.html" className="w-fit text-sm transition-colors duration-300 hover:text-chestnut">
                our story
              </a>
              <a href="care.html" className="w-fit text-sm transition-colors duration-300 hover:text-chestnut">
                care
              </a>
              <a href="/" className="w-fit text-sm transition-colors duration-300 hover:text-chestnut">
                shop socks
              </a>
            </nav>

            <div className="flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-[0.14em] text-espresso/50">
                say hi
              </span>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="w-fit text-sm transition-colors duration-300 hover:text-chestnut"
              >
                facebook
              </a>
              <a
                href="mailto:hello@everydaycrew.nyc"
                className="w-fit text-sm transition-colors duration-300 hover:text-chestnut"
              >
                hello@everydaycrew.nyc
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-clay/20 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="m-0 text-xs text-espresso/60">
            © {new Date().getFullYear()} everyday crew inc. all rights reserved.
          </p>
          <p className="hero-title m-0 text-sm italic lowercase text-espresso/60">
            do the basics, do them right.
          </p>
        </div>
      </div>
    </footer>
  )
}
