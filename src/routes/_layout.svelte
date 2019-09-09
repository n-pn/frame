<script>
  import Nav from "./_layout/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
