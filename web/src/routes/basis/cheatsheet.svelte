<script>
  const colors = [
    'gray',
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'indigo',
    'purple',
    'pink',
  ]
  const tones = [9, 8, 7, 6, 5, 4, 3, 2, 1]
</script>

<style lang="scss">
  // .colors {
  //     display: block;
  //     background-color: #fff;
  //     padding: 1rem;
  //     @include border-radius(2px);
  //     @include box-shadow(2);
  // }

  .color {
    @include clearfix;
  }

  .name {
    font-variant: small-caps;
    line-height: 2rem;
    float: left;
    @include color(neutral, 6);
  }

  .tone {
    float: right;
    width: 2rem;
    height: 2rem;
    margin-left: 0.5rem;
    @include border-radius();
    @include box-shadow();

    @each $color in $-color-names {
      @for $tone from 1 through 9 {
        &[color='#{$color}'][tone='#{$tone}'] {
          @include bgcolor($color, $tone);
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

<svelte:head>
  <title>Cheatsheet - Molds</title>
</svelte:head>

<article class="m-article">
  <h1>Cheatsheet</h1>

  <h2>Color palette</h2>

  {#each colors as color}
    <div class="color">
      <span class="name">{color}:</span>
      {#each tones as tone}
        <span class="tone" {color} {tone} />
      {/each}
    </div>
  {/each}
</article>
