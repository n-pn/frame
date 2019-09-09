<script>
  import Navi from "./_layout/navi.svelte";

  export let segment;
</script>

<style lang="scss">
  @import "../styles/shared";

  $body-bgcolor: #fff;
  $body-color: color(neutral, 1);
  $body-fontstack: $__font-normal-stack;

  :global(:root) {
    *,
    *::before,
    *::after {
      box-sizing: border-box; // 1
    }

    html {
      font-family: sans-serif; // 1
      font-size: 100%;
      line-height: 1.15; // 2
      -webkit-text-size-adjust: 100%; // 3
      -webkit-tap-highlight-color: rgba(#000, 0); // 4
    }

    body {
      width: 100%;
      min-width: 320px;
      margin: 0; // 1
      background-color: $body-bgcolor; // 2
      color: $body-color;
      font-family: $body-fontstack;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5rem;
      text-align: left; // 3
    }

    html,
    body,
    #sapper {
      height: 100%;
      min-height: 100%;
    }

    ::selection {
      background: color(primary, 7);
      color: color(primary, 1);
    }
  }

  $navi-width: gut(40);

  .navi {
    position: fixed;
    width: $navi-width;
    height: 100%;
    top: 0;
    left: 0;
  }

  .main {
    // position: relative;
    max-width: 56rem;
    min-height: 100%;
    margin-left: $navi-width;
    padding: 0 gut(4);
  }
</style>

<nav class="navi">
  <Navi {segment} />
</nav>

<main class="main">
  <slot />
</main>
