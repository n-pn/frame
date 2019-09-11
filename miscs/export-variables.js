const { theme } = require('./tailwind-config')

// console.log(theme)

const colors = theme.colors

var output = '// Colors:\n\n'

output += '$m-color-pallete (\n'
for (var [key, val] of Object.entries(colors)) {
  if (key == 'transparent') output += `  trans: transparent,\n`
  else if (typeof val == 'string') output += `  ${key}: ${val},\n`
  else {
    output += `  ${key}: (\n`
    for (var [tone, color] of Object.entries(val)) {
      tone = +tone / 100
      output += `    ${tone}: ${color},\n`
    }
    output += '  ),\n'
  }
}
output += ');\n\n'

const fs = require('fs')
fs.writeFileSync('variables.scss', output)
