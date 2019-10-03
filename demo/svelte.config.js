const sass = require('node-sass')
const preprocess = require('@nipin/melte/src/preprocess')
module.exports = preprocess(__dirname, sass)
