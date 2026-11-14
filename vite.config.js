import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// A plugin that forces the Vercel build process to exit cleanly
const forceExitPlugin = () => ({
  name: 'force-exit',
  closeBundle() {
    setTimeout(() => process.exit(0), 100);
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), forceExitPlugin()],
})