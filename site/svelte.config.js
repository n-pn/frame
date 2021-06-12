import preprocess from 'svelte-preprocess'
import node from '@sveltejs/adapter-node'
import { mdsvex } from 'mdsvex'
import breaks from 'remark-breaks'

import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const mdsvexConfig = {
  extensions: ['.svelte.md', '.md', '.svx'],
  smartypants: { dashes: 'oldschool' },
  remarkPlugins: [breaks],
  rehypePlugins: [],
  layout: path.resolve(__dirname, 'src/lib/parts/Layout.svelte'),
}

const frame_src = path.resolve(__dirname, '../src')

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [
    preprocess({
      scss: {
        includePaths: [frame_src, path.resolve(__dirname, 'src/css')],
        prependData: `@use "sass:math";\n@use "essence" as *;`,
      },
      postcss: true,
    }),
    mdsvex(mdsvexConfig),
  ],
  kit: {
    adapter: node(),
    target: '#svelte',
    vite: {
      resolve: {
        alias: {
          $frame: frame_src,
        },
      },
    },
  },
}

export default config
