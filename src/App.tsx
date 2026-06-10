import Nav from './components/Nav'
import Hero from './components/Hero'
import StoryTeaser from './components/StoryTeaser'
import WashBag from './components/WashBag'
import ShopCta from './components/ShopCta'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StoryTeaser />
        <WashBag />
        <ShopCta />
      </main>
    </>
  )
}

export default App
