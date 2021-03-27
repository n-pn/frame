<script context="module">
    export async function load({ page, fetch }) {
    return fetch(`/examples.json`)
      .then(r => r.json())
      .then(index => ({ props: {index}}))
  }
</script>

<script>
  export let index
</script>

<style>
  ul {
    margin-top: 1rem;
  }
</style>

<svelte:head>
  <title>Posts - Mould</title>
</svelte:head>

<article class="m-article">
  <h1>Recent posts</h1>

  <ul>
    {#each index as {title, slug}}
      <li>
        <a rel="prefetch" href="examples/{slug}">{title}</a>
      </li>
    {/each}
  </ul>

</article>
