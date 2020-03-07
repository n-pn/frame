const fs = require('fs')
const path = require('path')
const hash = require('string-hash')

const template_file = './__sapper__/build/template.html'
let template = fs.readFileSync(template_file).toString()

const static_dir = './static'
const files = fs.readdirSync(static_dir)

for (const file of files) {
  const filePath = path.join(static_dir, file)
  if (template.includes(file) && fs.existsSync(filePath)) {
    const hashedInt = hash(fs.readFileSync(filePath).toString())
    const hashedStr = hashedInt.toString(16)
    template = template.replace(file, `"${file}?v=${hashedStr}"`)
  }
}

fs.writeFileSync(template_file, template)
