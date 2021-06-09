---
title: Cheatsheet
---

<script>
  import {colors, shades} from "$lib/data/conts"
</script>

## Color palette

{#each colors as color}
  <div class="colors">
    <span class="label">{color}:</span>
    {#each shades as shade}<span class="shade" {color} {shade} />{/each}
  </div>
{/each}

<style lang="scss">
  .colors {
    @include flow();
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

    @each $color in $m-color-names {
      @for $shade from 1 through 9 {
        &[color='#{"" + $color}'][shade='#{"" + $shade}'] {
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
