import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Align Vite's output with your deploy setting expecting 'build/'
    outDir: 'build',
    emptyOutDir: true,
  },
})
