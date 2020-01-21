<script>
  import Navi from './_layout/navi.svelte'

  export let segment
</script>

<style>
  :global(#sapper) {
    height: 100%;
  }

  main {
    max-width: 45rem;
    padding: 1.5rem;
    margin-left: 16rem;
  }
</style>

<Navi {segment} />

<main>
  <slot />
</main>
