<script context="module">
  export function load(props) {
    return { props }
  }

</script>

<script>
  export let status
  export let error

</script>

<svelte:head>
  <title>{status}: {error.message} - Mould</title>
</svelte:head>

<h1>{status}</h1>
<p>{error.message}</p>

<style lang="scss">
  h1 {
    margin: 0 auto;
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;

    @media (min-width: 480px) {
      font-size: 4em;
    }
  }

</style>
