<script>
  import XNavi from "./_layout/navi.svelte";

  export let segment;
</script>

<style>
  x-content {
    display: block;
    margin-left: 18rem;
  }

  main {
    position: relative;
    max-width: 56em;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<XNavi {segment} />

<x-content>
  <main>
    <slot />
  </main>
</x-content>
