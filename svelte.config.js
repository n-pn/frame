const path = require('path')
const sveltePreprocess = require('svelte-preprocess')
// const sass = require('node-sass')

module.exports = {
  preprocess: sveltePreprocess({
    scss: {
      includePaths: [path.resolve(__dirname, 'css')],
      prependData: '@import "helpers";\n',
    },
  }),
}
