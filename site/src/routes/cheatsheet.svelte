<script>
  import { colors, tones } from '$lib/data/conts'
</script>

<svelte:head>
  <title>Cheatsheet - Frame</title>
</svelte:head>

<article class="m-article">
  <h1>Cheatsheet</h1>

  <h2>Color palette</h2>

  {#each colors as color}
    <div class="colors">
      <span class="label">{color}:</span>

      {#each tones as tone}
        <span class="tone" {color} {tone} />
      {/each}
    </div>
  {/each}
</article>

<style lang="scss">
  .colors {
    @include flow();
  }

  .label {
    font-variant: small-caps;
    line-height: 2rem;
    float: left;
    color: var(--color-gray-6);
  }

  .tone {
    --bgcolor: #aaa;

    float: right;
    width: 2rem;
    height: 2rem;
    margin-left: 0.5rem;
    background-color: var(--bgcolor);

    @include bdradi();
    @include shadow();

    $colors: (gray, red, orange, yellow, green, blue, purple);
    @each $color in $colors {
      @for $tone from 0 through 9 {
        &:global([color='#{"" + $color}']):global([tone='#{"" + $tone}']) {
          --bgcolor: #{color($color, $tone)};
        }
      }
    }
  }
  // .color + .color {
  //   @include border(top);
  //   margin-top: 1rem;
  //   padding-top: 1rem;
  // }
</style>
