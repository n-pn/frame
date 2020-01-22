<script>
  import Navi from './_layout/navi.svelte'

  export let segment
</script>

<style lang="scss">
  :global(#sapper) {
    height: 100%;
    @include screen-min(lg) {
      margin-left: 25vw;
    }
  }

  main {
    width: 48rem;
    max-width: 100%;
    padding: 1.5rem;
    margin: 0 auto;
    @include screen-min(xl) {
      margin-left: 0;
    }
  }
</style>

<Navi {segment} />

<main>
  <slot />
</main>
