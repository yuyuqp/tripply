import { defineConfig } from 'vite'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = process.env.GITHUB_PAGES && repository ? `/${repository}/` : '/'

export default defineConfig({ base })
