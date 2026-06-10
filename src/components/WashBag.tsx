import { motion } from 'framer-motion'
import { EASE, GRAIN } from './media'

// Pexels free license: "Pairs of new socks made of cotton material" —
// https://www.pexels.com/photo/pairs-of-new-socks-made-of-cotton-material-5746063/
// TODO: replace with an EDC flat-lay of folded socks + the mesh wash bag.
// Chosen via search but not byte-verified from the build sandbox.
const FLAT_LAY =
  'https://images.pexels.com/photos/5746063/pexels-photo-5746063.jpeg?auto=compress&cs=tinysrgb&w=1600'

// the light chapter — cream/bone instead of another dark video screen
export default function WashBag() {
  return (
    <section className="relative h-[88vh] w-full snap-start overflow-hidden bg-bone md:grid md:grid-cols-2">
      <div className="relative h-1/2 md:h-full">
        <img
          src={FLAT_LAY}
          alt="folded socks beside a fine-mesh wash bag"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        {/* warm the photo toward the palette */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'rgba(43,33,26,0.15)' }}
        />
      </div>

      <motion.div
        className="flex h-1/2 flex-col justify-center gap-5 px-8 md:h-full md:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.span
          className="text-xs tracking-wide text-chestnut md:text-sm"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
          }}
        >
          in every order
        </motion.span>
        <span className="block overflow-hidden">
          <motion.h2
            className="hero-title m-0 pb-[0.2em] -mb-[0.1em] text-4xl font-medium lowercase text-espresso md:text-6xl"
            variants={{
              hidden: { y: '100%', opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.9, ease: EASE },
              },
            }}
          >
            the bag that comes with it.
          </motion.h2>
        </span>
        <motion.p
          className="m-0 max-w-[360px] text-[15px] leading-snug text-espresso/80"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delay: 0.5, duration: 0.8, ease: EASE },
            },
          }}
        >
          every pair ships in a fine-mesh wash bag. travel in it, wash your
          delicates in it, never lose a sock to the void again.
        </motion.p>
      </motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
        style={{ backgroundImage: `url("${GRAIN}")` }}
      />
    </section>
  )
}
