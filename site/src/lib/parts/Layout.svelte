<script>
  export let title = 'Examples'

</script>

<svelte:head>
  <title>{title} - Frame</title>
</svelte:head>

<article class="m-article">
  <h1>{title}</h1>
  <slot />
</article>
