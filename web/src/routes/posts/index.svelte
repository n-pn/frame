<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`posts.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts }
      })
  }
</script>

<script>
  export let posts
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Posts - Mould</title>
</svelte:head>

<article m-article>
  <h1>Recent posts</h1>

  <ul>
    {#each posts as post}
      <li>
        <a rel="prefetch" href="posts/{post.slug}">{post.title}</a>
      </li>
    {/each}
  </ul>

</article>
