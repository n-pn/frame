<script>
  export let title = 'Examples'

</script>

<svelte:head>
  <title>{title} - Mould</title>
</svelte:head>

<article class="m-article">
  <h1>{title}</h1>
  <slot />
</article>

<style lang="scss">
  :global(.--live) {
    @include border();
    @include radius();
  }

</style>
