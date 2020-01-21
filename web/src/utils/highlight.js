import hljs from 'highlight.js'

export default function highlight(code, lang) {
  return hljs.highlight(lang, code).value
}
