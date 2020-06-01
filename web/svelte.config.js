const path = require('path')
const sass = require('node-sass')

module.exports = {
  preprocess: {
    style: async ({ content, attributes, filename }) => {
      if (content.length === 0) return { code: content }

      const { type, lang } = attributes
      if (type !== 'text/scss' && lang !== 'scss') return

      const prepend = '@import "essence";\n'
      const data = prepend + content

      const options = {
        data,
        sourceMap: true,
        includePaths: [path.resolve(__dirname, '../css')],
        outFile: filename + '.css',
      }

      return new Promise((resolve, reject) => {
        sass.render(options, (err, result) => {
          if (err) return reject(err)
          resolve({
            code: result.css.toString(),
            map: result.map.toString(),
          })
        })
      })
    },
  },
}
