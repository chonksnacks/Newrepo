import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StoryPage from './components/StoryPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoryPage />
  </StrictMode>,
)
