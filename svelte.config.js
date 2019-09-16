const path = require('path')
const sass = require('sass')

const style_dir = path.resolve(__dirname, './src/styles/')
const import_helper_string = '@import "helpers";\n'

module.exports = {
  preprocess: {
    style: async ({ content, attributes, filename }) => {
      const { type, lang } = attributes
      if (type !== 'text/scss' && lang !== 'scss') return

      content = import_helper_string + content
      return new Promise((resolve, reject) => {
        sass.render(
          {
            data: content,
            sourceMap: true,
            includePaths: [path.dirname(filename), style_dir, 'node_modules'],
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
