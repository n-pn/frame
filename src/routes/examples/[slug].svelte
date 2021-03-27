<script context="module">
  export async function load({ page, fetch }) {
    const {slug} = page.params
    const res = await fetch(`/examples/${slug}.json`)

    if (res.ok) {
      const post = await res.json()
      return { props: { post } }
    }

    return {
      status: res.status,
      error: new Error('Example not found!')
    }
  }
</script>

<script>
  export let post
</script>

<svelte:head>
  <title>{post.title} - Mould</title>
</svelte:head>

<article class="m-article">
  <h1>{post.title}</h1>
  {@html post.html}
</article>
