import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Stay on Vite 6.x (esbuild + Rollup). Vite 8+ uses Rolldown (Rust); on some Windows
// setups it can fail with "memory allocation of … bytes failed" during dev/build.
export default defineConfig({
  plugins: [react()],
  build: {
    cssMinify: 'esbuild',
    minify: 'esbuild',
  },
})
