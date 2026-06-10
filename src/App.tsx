import Hero from './components/Hero'
import SceneSection from './components/SceneSection'
import StoryTeaser from './components/StoryTeaser'
import WashBag from './components/WashBag'

// Pexels free-license clips (commercial use, no attribution). Chosen via search
// but not byte-verified from the build sandbox (video hosts are blocked here).
// TODO: replace with EDC brand footage, or confirm warmth/size and self-host.
// "A large group of people running in a race":
// https://www.pexels.com/video/a-large-group-of-people-running-in-a-race-27441394/
const MARATHON_VIDEO = 'https://www.pexels.com/download/video/27441394/'
// "Airplane Taking Off During Sunset" by sunny Huang:
// https://www.pexels.com/video/airplane-taking-off-during-sunset-5008861/
const PLANE_VIDEO = 'https://www.pexels.com/download/video/5008861/'

function App() {
  return (
    <main>
      <Hero />
      <SceneSection
        videoSrc={MARATHON_VIDEO}
        headline="for the miles."
        label="365 days a year, zero excuses"
      />
      <SceneSection
        videoSrc={PLANE_VIDEO}
        headline="for the distance."
        label="made in new york, worn everywhere"
      />
      <StoryTeaser />
      <WashBag />
    </main>
  )
}

export default App
