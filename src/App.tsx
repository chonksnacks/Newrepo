import Hero from './components/Hero'
import SceneSection from './components/SceneSection'

// Pexels free-license clips (commercial use, no attribution). Chosen via search
// but not byte-verified from the build sandbox (video hosts are blocked here).
// TODO: replace with EDC brand footage, or confirm warmth/size and self-host.
// "A Man Lifting Weights in a Fitness Gym" by Ivan Samkov:
// https://www.pexels.com/video/a-man-lifting-weights-in-a-fitness-gym-3196220/
const GYM_VIDEO = 'https://www.pexels.com/download/video/3196220/'
// "Airplane Taking Off During Sunset" by sunny Huang:
// https://www.pexels.com/video/airplane-taking-off-during-sunset-5008861/
const PLANE_VIDEO = 'https://www.pexels.com/download/video/5008861/'

function App() {
  return (
    <main>
      <Hero />
      <SceneSection
        videoSrc={GYM_VIDEO}
        headline="for the work."
        label="365 days a year, zero excuses"
        body="one pair, built for all of it. the morning run, the office, the late dinner. made in new york for people who don't change socks to change plans."
      />
      <SceneSection
        videoSrc={PLANE_VIDEO}
        headline="for the distance."
        label="made in new york, worn everywhere"
      />
    </main>
  )
}

export default App
