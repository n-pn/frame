<script>
  import { onMount } from 'svelte'
  import { page } from '$app/stores'
  import { dark_mode } from '$lib/stores'

  import Navbar from '$lib/parts/Navbar.svelte'

  import '$frame/globals.scss'
  import '$frame/premade.scss'

  $: {
    if (typeof gtag === 'function') {
      gtag('config', 'UA-158626989-2', { page_path: $page.path })
    }
  }

  let root
  onMount(() => (root = document.documentElement))
  $: root?.classList.toggle('tm-dark', $dark_mode)

</script>

<svelte:head>
  <title>Frame</title>
</svelte:head>

<main>
  <Navbar segment={page.path} />
  <slot />
</main>

<style lang="scss">
  :global(#svelte) {
    min-height: 100%;
    @include props(margin-left, $md: 15rem);
  }

  main {
    --main-bg: var(--color-white);

    position: relative;
    min-height: 100%;
    width: 48rem;
    max-width: 100%;
    padding: var(--spacer) var(--gutter);
    margin: 0 auto;

    @include shadow(1);
    background-color: var(--main-bg);
    z-index: 1;

    @include dark-mode($kit: true) {
      --main-bg: var(--color-dark-gray-8);
    }
  }

</style>
