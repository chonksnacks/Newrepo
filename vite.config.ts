import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // served from https://chonksnacks.github.io/Newrepo/
  base: '/Newrepo/',
  plugins: [react(), tailwindcss()],
})
