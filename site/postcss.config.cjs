const purge = require('@fullhuman/postcss-purgecss')
const purgeSvelte = require('purgecss-from-svelte')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

const mode = process.env.NODE_ENV
const prod = mode === 'production'

module.exports = {
  plugins: [
    autoprefixer,
    prod && cssnano({ preset: 'default' }),
    prod &&
      purge({
        content: ['./src/**/*.{svelte,html,svx,md}'],
        safelist: [/svelte-/],
        extractors: [
          {
            extractor: (content) => purgeSvelte.extract(content),
            extensions: ['svelte'],
          },
        ],
      }),
  ],
}
