import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import { generate } from 'fast-dts'
import pkg from './package.json'

const port = 3000

export default defineConfig({
  server: { port },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, pkg.source),
      name: pkg.libName,
      formats: ['es', 'iife'],
      fileName: format => `${pkg.name}.${format === 'iife' ? 'global.js' : 'js'}`,
    },
  },
  plugins: [
    {
      name: 'dts',
      async closeBundle() {
        await generate(pkg.source, pkg.types)
      },
    },
  ],
})
