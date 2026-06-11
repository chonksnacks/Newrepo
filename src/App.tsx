import Nav from './components/Nav'
import CrewCover from './components/CrewCover'
import SeasonsSection from './components/SeasonsSection'
import StoryTeaser from './components/StoryTeaser'
import Colorways from './components/Colorways'
import Differentiators from './components/Differentiators'
import CareTeaser from './components/CareTeaser'
import ShopCta from './components/ShopCta'

function App() {
  return (
    <>
      <Nav />
      <main>
        <CrewCover />
        <SeasonsSection />
        <StoryTeaser />
        <Colorways />
        <Differentiators />
        <CareTeaser />
        <ShopCta />
      </main>
    </>
  )
}

export default App
