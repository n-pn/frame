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
  layout: path.resolve(__dirname, 'src/lib/Layout.svelte'),
}

const frame_src = path.resolve(__dirname, 'node_modules/@np-nam/frame/src')

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [
    preprocess({
      scss: {
        includePaths: [path.join(frame_src, 'css')],
        prependData: '@use "sass:math";\n@import "helpers";\n',
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
