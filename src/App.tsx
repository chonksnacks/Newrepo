import Nav from './components/Nav'
import Hero from './components/Hero'
import StoryTeaser from './components/StoryTeaser'
import CrewSection from './components/CrewSection'
import WashBag from './components/WashBag'
import ShopCta from './components/ShopCta'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StoryTeaser />
        <CrewSection />
        <WashBag />
        <ShopCta />
      </main>
    </>
  )
}

export default App
