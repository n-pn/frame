<script>
  import Navi from './_layout/nav.svelte'

  export let segment
</script>

<style lang="scss">
  :global(#sapper) {
    height: 100%;
    @include screen-min(md) {
      margin-left: 15rem;
    }
  }
  main {
    min-height: 100%;
    background-color: #fff;
    position: relative;
    width: 48rem;
    max-width: 100%;
    padding: 1.5rem;
    margin: 0 auto;
    @include shadow(1);
    z-index: 1;
    // @include screen-min(lg) {
    //   margin-left: 0;
    // }
  }
</style>

<main>
  <Navi {segment} />
  <slot />
</main>
