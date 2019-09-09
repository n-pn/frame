const path = require('path')
const sass = require('sass')

module.exports = {
  preprocess: {
    style: async ({ content, attributes, filename }) => {
      const { type, lang } = attributes
      if (type !== 'text/scss' && lang !== 'scss') return

      return new Promise((resolve, reject) => {
        sass.render(
          {
            data: content,
            sourceMap: true,
            includePaths: [
              path.dirname(filename),
              path.resolve(__dirname, './src/styles/'),
              'node_modules',
            ],
            outFile: 'x', // this is necessary, but is ignored
          },
          (err, result) => {
            if (err) return reject(err)

            resolve({
              code: result.css.toString(),
              map: result.map.toString(),
            })
          }
        )
      })
    },
  },
}
