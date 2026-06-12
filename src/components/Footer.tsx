import Logo from './Logo'

// TODO: confirm hello@everydaycrew.nyc is the real inbox before launch.
// The waitlist form drops into the marked slot when the strategy is set.
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61574338948280'

export default function Footer() {
  return (
    <footer className="border-t border-clay/30 bg-cream px-8 py-14 text-espresso md:px-16">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-10">
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

          <nav className="flex flex-col gap-2 text-sm" aria-label="footer">
            <a href="story.html" className="w-fit transition-colors duration-300 hover:text-chestnut">
              our story
            </a>
            <a href="care.html" className="w-fit transition-colors duration-300 hover:text-chestnut">
              care
            </a>
            <a href="/" className="w-fit transition-colors duration-300 hover:text-chestnut">
              shop socks
            </a>
          </nav>

          <div className="flex flex-col gap-2 text-sm">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="w-fit transition-colors duration-300 hover:text-chestnut"
            >
              facebook
            </a>
            <a
              href="mailto:hello@everydaycrew.nyc"
              className="w-fit transition-colors duration-300 hover:text-chestnut"
            >
              hello@everydaycrew.nyc
            </a>
          </div>
        </div>

        <p className="m-0 text-xs text-espresso/60">
          © 2026 everyday crew inc. all rights reserved.
        </p>
      </div>
    </footer>
  )
}
