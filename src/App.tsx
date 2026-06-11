import Nav from './components/Nav'
import CrewCover from './components/CrewCover'
import SeasonsSection from './components/SeasonsSection'
import StoryTeaser from './components/StoryTeaser'
import WashBag from './components/WashBag'
import ShopCta from './components/ShopCta'

function App() {
  return (
    <>
      <Nav />
      <main>
        <CrewCover />
        <SeasonsSection />
        <StoryTeaser />
        <WashBag />
        <ShopCta />
      </main>
    </>
  )
}

export default App
