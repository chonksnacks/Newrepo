import { motion, useScroll, useSpring } from 'framer-motion'
import Logo from './Logo'
import SmoothLoopVideo from './SmoothLoopVideo'
import { EASE, GRAIN, TINT } from './media'

// Same Pexels walking clip as the teaser keeps the story page in the same
// world. TODO: replace with EDC brand footage (see note in StoryTeaser.tsx).
const STORY_VIDEO = 'https://www.pexels.com/download/video/5665059/'

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

// the page's one trick: big serif moments assemble word by word
function Moment({ text }: { text: string }) {
  const words = text.split(' ')
  return (
    <motion.blockquote
      className="hero-title m-0 max-w-[14em] py-12 text-3xl font-normal italic lowercase text-cream md:py-20 md:text-5xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block whitespace-pre"
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: i * 0.08, duration: 0.6, ease: EASE },
            },
          }}
        >
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </motion.blockquote>
  )
}

function Chapter({ n, title }: { n: string; title: string }) {
  return (
    <Reveal className="flex items-center gap-4 pt-16 first:pt-0 md:pt-24">
      <span className="text-xs tracking-[0.14em] text-clay">{n}</span>
      <span aria-hidden="true" className="h-px w-12 bg-clay/50" />
      <span className="text-xs uppercase tracking-[0.14em] text-bone/80">
        {title}
      </span>
    </Reveal>
  )
}

// candid photos as full-column breaks — straight, quiet, warm grade
function Snapshot({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption: string
}) {
  return (
    <motion.figure
      className="m-0 w-full py-4 md:py-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="block w-full"
        style={{ filter: 'sepia(0.18) saturate(0.92) brightness(0.98)' }}
      />
      <figcaption className="pt-3 text-xs lowercase tracking-[0.14em] text-bone/70">
        {caption}
      </figcaption>
    </motion.figure>
  )
}

// one thought per beat — nobody ever faces a wall of text
function Beat({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <p className="m-0 max-w-[46ch] text-[17px] leading-relaxed text-bone">
        {children}
      </p>
    </Reveal>
  )
}

export default function StoryPage() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 })

  return (
    <main className="bg-espresso text-cream">
      {/* reading progress — quiet proof that this is short */}
      <motion.div
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-40 h-0.5 origin-left bg-clay"
        style={{ scaleX: progress }}
      />

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

      <div className="md:grid md:grid-cols-[1fr_1.3fr]">
        {/* sticky media column — the environment stays alive while you read */}
        <div className="relative hidden md:block">
          <div className="sticky top-0 h-screen overflow-hidden">
            <SmoothLoopVideo
              className="absolute inset-0 h-full w-full object-cover"
              src={STORY_VIDEO}
            />
            <div aria-hidden="true" className="absolute inset-0" style={{ background: TINT }} />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: `url("${GRAIN}")` }}
            />
          </div>
        </div>

        <article className="relative flex flex-col gap-8 px-8 pb-32 pt-36 md:px-16 md:pt-44">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: `url("${GRAIN}")` }}
          />

          <Reveal>
            <span className="text-xs tracking-wide text-bone/80 md:text-sm">
              our story
            </span>
            <h1 className="hero-title m-0 mt-4 max-w-[12em] pb-[0.1em] text-5xl font-medium lowercase text-cream md:text-7xl">
              some ideas start with a big vision. ours started with a{' '}
              <em className="font-normal italic">bad sock.</em>
            </h1>
          </Reveal>

          <Chapter n="01" title="the bad sock" />

          <Beat>
            And two dudes scratching their heads, realizing neither of us
            could remember the last time we'd actually bought socks on
            purpose.
          </Beat>
          <Beat>
            Our drawers told the story. Singles whose partners vanished
            somewhere between the washer and the dryer. Pairs retired because
            the bottoms wore through. A few that survived but were too
            scratchy and, honestly, too ugly to wear. The kind of bad
            everyone seems to have gotten comfortable with.
          </Beat>
          <Beat>We didn't think that was good enough.</Beat>
          <Moment text="we wanted to make a sock worth keeping." />

          <Chapter n="02" title="the fix" />

          <Beat>
            We're two people working out of the Garment District in New York,
            and we set out to do something simple: make the best version of
            the thing you put on every single morning without thinking about
            it. Because when it's right, you don't have to.
          </Beat>
          <Snapshot
            src="story/founders.webp"
            alt="the two founders at a work table comparing samples"
            caption="the two of us, arguing about what premium actually means for a sock"
            />
          <Beat>
            The research phase was six months of buying and wearing
            everything — New Balance, Kith, Muji, and plenty of cheap
            multipacks. What we landed on was combed cotton, which strips out
            the short, rough fibers before they're ever woven in. Those
            fibers are the culprits behind pilling, that scratchy feeling,
            and why regular socks look a year old by their third wash.
          </Beat>
          <Snapshot
            src="story/samples.webp"
            alt="rows of tagged sock samples spread on a table"
            caption="the audition pile — tagged, tested, mostly rejected"
            />
          <Beat>
            We blend it with nylon for durability and spandex for the fit,
            which lands snug without ever squeezing. It feels pillowy on day
            one and exactly the same on day three hundred.
          </Beat>
          <Beat>
            At the gym. At the office. On a slow jog on a cold October
            morning. Everywhere you show up, it shows up.
          </Beat>
          <Moment text="and then there's the bag." />

          <Chapter n="03" title="the bag" />

          <Beat>
            We were just as frustrated by what happens after you buy a good
            sock. Wash it wrong, it pills. Throw it loose in the machine, it
            disappears. So we built the solution into the packaging itself.
          </Beat>
          <Beat>
            Every pair ships inside a fine-mesh wash bag. Travel in it,
            protect your socks in it, wash your other delicates in it. It
            isn't packaging you throw away; it's part of the product, and
            part of Everyday Crew's soul.
          </Beat>

          <Chapter n="04" title="the crew" />

          <Beat>
            Building something new is scary, and we won't pretend it isn't.
            But we aren't building this for ourselves. We're building it for
            the person who's been settling for "good enough" way too long.
          </Beat>
          <Beat>
            For the guy who buys a sh*tty 12-pack at the drug store because he
            finally lost the last pair he owned. For the person who gives a
            damn about the small things. For anyone who's ever lost a sock to
            the void and thought, genuinely, there has to be a better way.
          </Beat>
          <Beat>There is. You found it. Welcome to the crew.</Beat>
          <Reveal>
            <p className="hero-title m-0 text-2xl italic lowercase text-bone md:text-3xl">
              — jeffrey & austin
            </p>
          </Reveal>
          <Moment text="do the basics, do them right. that's the whole thing." />

          <Reveal>
            <a
              href="./"
              className="w-fit text-[15px] text-cream transition-colors duration-300 hover:text-clay"
            >
              ← back to everyday crew
            </a>
          </Reveal>
        </article>
      </div>
    </main>
  )
}
