<script>
  import { page } from '$app/stores'
  import Navbar from '$lib/Navbar.svelte'
  import '$mcss/globals.scss'

  $: {
    if (typeof gtag === 'function') {
      gtag('config', 'UA-158626989-2', { page_path: $page.path })
    }
  }

</script>

<svelte:head>
  <title>Mould</title>
</svelte:head>

<main>
  <Navbar segment={page.path} />
  <slot />
</main>

<style lang="scss">
  :global(#svelte) {
    height: 100%;
    @include props(margin-left, $md: 15rem);
  }

  main {
    min-height: 100%;
    background-color: #fff;
    position: relative;
    width: 48rem;
    max-width: 100%;
    padding: 1.5rem;
    margin: 0 auto;
    z-index: 1;
    @include shadow(1);
  }

</style>
