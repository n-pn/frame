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
  const shades = [9, 8, 7, 6, 5, 4, 3, 2, 1]
</script>

<style lang="scss">
  .color {
    @include clearfix;
  }

  .label {
    font-variant: small-caps;
    line-height: 2rem;
    float: left;
    @include fgcolor(neutral, 6);
  }

  .shade {
    float: right;
    width: 2rem;
    height: 2rem;
    margin-left: 0.5rem;
    @include radius();
    @include shadow();

    @each $color in $-color-names {
      @for $shade from 1 through 9 {
        &._#{$color}._s#{$shade}] {
          @include bgcolor($color, $shade);
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
    <div class="colors">
      <span class="label">{color}:</span>
      {#each shades as shade}<span class="shade" {color} {shade} />{/each}
    </div>
  {/each}
</article>
