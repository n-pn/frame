<script>
  import Nav from './_layout/nav.svelte'

  export let segment

  import { stores } from '@sapper/app'
  const { page } = stores()

  $: {
    if (typeof gtag === 'function') {
      window.gtag('config', 'UA-158626989-2', {
        page_path: $page.path,
      })
    }
  }
</script>

<style lang="scss">
  :global(#sapper) {
    height: 100%;
    @include props(margin-left, attrs($md: 15rem));
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
  }
</style>

<svelte:head>
  <script
    src="https://www.googletagmanager.com/gtag/js?id=UA-158626989-2"
    async>

  </script>
  <script>
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', 'UA-158626989-2')
  </script>
</svelte:head>

<main>
  <Nav {segment} />
  <slot />
</main>
