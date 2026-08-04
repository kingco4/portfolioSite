import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    // Short commit hash baked in at build time (CI sets GITHUB_SHA).
    // Shown in the footer so you can tell which version a browser runs.
    __BUILD_ID__: JSON.stringify((process.env.GITHUB_SHA || 'dev').slice(0, 7)),
  },
})
