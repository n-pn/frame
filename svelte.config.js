import preprocess from 'svelte-preprocess'
import node from '@sveltejs/adapter-node'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    scss: {
      includePaths: ['src/css'],
      prependData: '@use "sass:math";\n@import "helpers";\n',
    },
    postcss: false,
  }),
  kit: {
    adapter: node(),
    target: '#svelte',
  },
}

export default config
