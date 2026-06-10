import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StoryPage from './components/StoryPage'

// long editorial scroll — turn off the landing page's section snapping
document.documentElement.classList.add('no-snap')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoryPage />
  </StrictMode>,
)
