import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts'],
  bundle: true,
  clean: true,
  splitting: false,
  treeshake: true,
  target: 'node24',
  platform: 'node',
  external: [],
  noExternal: [/.*/]
})
