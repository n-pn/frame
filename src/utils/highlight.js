import hljs from 'highlight.js'
import 'highlight.js/styles/tomorrow.css'

export default function highlight(code, lang) {
  return hljs.highlight(lang, code).value
}
