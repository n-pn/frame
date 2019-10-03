const sass = require('node-sass')
const preprocess = require('@nipin/melte/configs/preprocess')
module.exports = preprocess(__dirname, sass)
