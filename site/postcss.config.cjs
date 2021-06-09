const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const purgecss = require('@fullhuman/postcss-purgecss')

const mode = process.env.NODE_ENV
const prod = mode === 'production'

module.exports = {
  plugins: [
    autoprefixer,
    prod && cssnano({ preset: 'default' }),
    prod &&
      purgecss({
        content: ['./src/**/*.svelte', './src/**/*.html'],
        keyframes: true,
        whitelistPatterns: [/svelte-/],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }),
  ],
}
