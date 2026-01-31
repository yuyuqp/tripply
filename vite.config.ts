import { defineConfig } from 'vite'

// VITE_BASE is provided during GitHub Pages builds to match the repository path.
const base = process.env.VITE_BASE || '/'

export default defineConfig({ base })
