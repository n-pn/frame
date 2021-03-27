const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const purgecss = require('@fullhuman/postcss-purgecss')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

module.exports = {
  plugins: [
    autoprefixer,
    !dev && cssnano({ preset: 'default' }),
    !dev &&
      purgecss({
        content: ['./src/**/*.svelte'],
        keyframes: true,
        whitelistPatterns: [/svelte-/],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }),
  ],
}
