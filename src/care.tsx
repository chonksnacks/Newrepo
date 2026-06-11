import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CarePage from './components/CarePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CarePage />
  </StrictMode>,
)
