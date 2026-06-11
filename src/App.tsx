import Nav from './components/Nav'
import CrewCover from './components/CrewCover'
import SeasonsSection from './components/SeasonsSection'
import StoryTeaser from './components/StoryTeaser'
import Differentiators from './components/Differentiators'
import ShopCta from './components/ShopCta'

function App() {
  return (
    <>
      <Nav />
      <main>
        <CrewCover />
        <SeasonsSection />
        <StoryTeaser />
        <Differentiators />
        <ShopCta />
      </main>
    </>
  )
}

export default App
