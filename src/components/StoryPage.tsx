import { motion } from 'framer-motion'
import Logo from './Logo'
import SmoothLoopVideo from './SmoothLoopVideo'
import { EASE, GRAIN, TINT } from './media'

// Same Pexels walking clip as the hero keeps the story page in the same world.
// TODO: replace with EDC brand footage (see note in Hero.tsx).
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

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <Reveal className="py-10 md:py-16">
      <blockquote className="hero-title m-0 max-w-[16em] text-4xl font-normal italic lowercase text-cream md:text-6xl">
        {children}
      </blockquote>
    </Reveal>
  )
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <p className="m-0 max-w-[58ch] text-[17px] leading-relaxed text-bone">
        {children}
      </p>
    </Reveal>
  )
}

export default function StoryPage() {
  return (
    <main className="bg-espresso text-cream">
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

        <article className="relative flex flex-col gap-10 px-8 pb-32 pt-36 md:px-16 md:pt-44">
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

          <Paragraph>
            And two dudes scratching their heads. Not catastrophically bad like
            huge holes in the soles bad. Just the kind of bad we got too
            comfortable with: the same cotton that pills after a few washes,
            the elastic that holds too hard and gives you marks on your calves
            but then gives out by month two, the sock that disappears into a
            dimension between the washer and the dryer that you never see
            again.
          </Paragraph>

          <Paragraph>We didn't think that was good enough.</Paragraph>

          <PullQuote>make a sock worth keeping.</PullQuote>

          <Paragraph>
            We're two people based in New York, and we set out to do something
            simple: make a sock worth keeping. The best version of the thing
            you put on every single morning without thinking about it. Because
            when it's right, you don't have to.
          </Paragraph>

          <Paragraph>
            After months of meticulous research and testing, buying almost
            every sock on Amazon, we decided on combed cotton. Combed cotton
            strips out the short, rough fibers before they're ever woven in —
            these are the culprits responsible for pilling, that pestilent
            scratchy feeling, and why regular socks look a year old by their
            third wash. We blend it with nylon for durability and spandex for
            that signature fit: snug without being too tight, structured but
            silky soft. The result is a sock that feels pillowy on day one and
            holds up the same way on day three hundred.
          </Paragraph>

          <Paragraph>
            We wanted it to work everywhere. At the gym. At the office. On a
            slow jog on a cold October morning. We wanted Everyday Crew to show
            up everywhere you do.
          </Paragraph>

          <PullQuote>and then there's the bag.</PullQuote>

          <Paragraph>
            We were just as frustrated by what happens after you buy a sock as
            we were by the sock itself. When you spend good money on a quality
            sock, the same damn things always happen. You wash it wrong, it
            pills. You throw it loose in the machine, it disappears. So we
            built the solution into the packaging. Every pair of Everyday Crew
            ships inside a functional and beautiful fine-mesh wash bag. Use it
            to travel, use it to protect your socks in the wash, use it to wash
            your other delicates. It's not just packaging you throw away. It's
            part of the product and part of Everyday Crew's soul. We wanted
            every small detail to be meaningful and practical.
          </Paragraph>

          <Paragraph>
            Building something new is scary. We won't pretend it isn't. But
            we're not building this for ourselves. We're building it for the
            person who's been settling for "good enough" for way too long. For
            the guy who buys a sh*tty 12-pack at the drug store because he
            finally lost the last pair he owned. For the person who gives a
            damn about the small things. For anyone who's ever lost a sock to
            the void and thought, genuinely, there has to be a better way.
          </Paragraph>

          <Paragraph>There is. You found it. Welcome to the crew.</Paragraph>

          <PullQuote>
            do the basics, do them right. that's the whole thing.
          </PullQuote>

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
