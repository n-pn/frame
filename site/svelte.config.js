import preprocess from 'svelte-preprocess'
import node from '@sveltejs/adapter-node'
import { mdsvex } from 'mdsvex'
import breaks from 'remark-breaks'

import path from 'path'
const __dirname = path.dirname(new URL(import.meta.url).pathname)

const mdsvexConfig = {
  extensions: ['.svelte.md', '.md', '.svx'],
  smartypants: { dashes: 'oldschool' },
  remarkPlugins: [breaks],
  rehypePlugins: [],
  layout: path.resolve(__dirname, 'src/lib/Layout.svelte'),
}

function resolve_lib(name) {
  return path.resolve(__dirname, 'node_modules', '@np-nam', 'frame', name)
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [
    preprocess({
      scss: {
        includePaths: [resolve_lib('src/css')],
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
          $mlib: resolve_lib('src/lib'),
          $mcss: resolve_lib('src/css'),
        },
      },
    },
  },
}

export default config
