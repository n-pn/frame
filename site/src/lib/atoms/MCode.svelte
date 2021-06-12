<script>
  import highlight from '../../utils/highlight'

  export let lang = 'text'
  export let code = 'test'
  export let lineNumber = false

  $: content = highlight(code, lang)
  $: if (lineNumber) {
    content = content
      .split('\n')
      .map(line => `<div>${line}</div>`)
      .join('')
  }
</script>

<pre class="code" class:_wrap={lineNumber} data-lang={lang}>
  <code>
    {@html content}
  </code>
</pre>
