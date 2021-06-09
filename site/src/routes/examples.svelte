<script context="module">
  import posts from '$lib/data/posts.json'

  export function load() {
    return {
      props: { posts },
    }
  }

</script>

<script>
  export let posts

</script>

<svelte:head>
  <title>Posts - Mould</title>
</svelte:head>

<article class="m-article">
  <h1>Recent posts</h1>

  <ul>
    {#each posts as { title, slug }}
      <li>
        <a rel="prefetch" href="examples/{slug}">{title}</a>
      </li>
    {/each}
  </ul>
</article>

<style>
  ul {
    margin-top: 1rem;
  }

</style>
