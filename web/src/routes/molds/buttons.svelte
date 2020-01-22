<script>
  import MIcon from '$mould/MIcon.svelte'
  import MButton from '$mould/MButton.svelte'

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
  const sizes = ['tiny', 'small', 'medium', 'large', 'huge']
  const styles = ['text', 'line', 'solid']
  const variants = ['default', 'primary', 'success', 'warning', 'harmful']
</script>

<style type="text/scss">
  .button-list {
    display: flex;
    flex-wrap: wrap;
    & + & {
      margin-top: 0;
    }

    &._color :global(.m-button) {
      width: 6rem;
    }
  }

  @import 'premade/molds/m-button/button-styling';

  :global(.m-button) {
    margin-top: 0.5rem;
    & + & {
      margin-left: 0.5rem;
    }

    @each $color in map-keys($-color-palette) {
      &._#{$color} {
        @include button-styling(solid, $color);
      }

      @each $style in $-button-styles {
        &._#{$style}._#{$color} {
          @include button-styling($style, $color);
        }
      }
    }
  }
</style>

<svelte:head>
  <title>Buttons - Molds</title>
</svelte:head>

<article class="m-article">
  <h1>Buttons</h1>

  <h2>Sizes</h2>

  <div class="button-list">
    {#each sizes as size}
      <MButton class="_{size}" text={size + ' button'} />
    {/each}
  </div>

  <h2>Styles</h2>

  <div class="button-list">
    {#each styles as style}
      <button class="m-button _{style} _primary">
        <span>{style}</span>
      </button>
    {/each}
  </div>

  <h2>Icons</h2>

  <div class="button-list">
    <MButton class="u-rd-x" icon="feather" />
    <MButton class="_success u-p-4-lr" icon="circle" />
    <MButton class="_harmful _line" icon="x" text="Close" />
    <MButton
      class="_primary u-rd-6 u-p-4-lr"
      right_icon="arrow-right"
      text="Next" />
    <MButton
      class="_disable u-sd-4"
      icon="chevron-left"
      right_icon="chevron-right"
      text="Left and right" />
  </div>

  <h2>Variants</h2>

  {#each styles as style}
    <div class="button-list">
      {#each variants as variant}
        <MButton class="_{style} _{variant}" text={variant} />
      {/each}
    </div>

    <div class="button-list">
      {#each variants as variant}
        <MButton class="_{style} _{variant} _disable" text={variant} />
      {/each}
    </div>
    <hr />
  {/each}

  <h2>Elements</h2>

  <div class="button-list">
    {#each styles as style}
      <a href="/" class="m-button _{style}">
        <span>Link</span>
      </a>
    {/each}
  </div>
  <div class="button-list">
    {#each styles as style}
      <input type="button" class="m-button _{style}" value="input" />
    {/each}
  </div>

  <h2>Mixed up with utilties</h2>
  <h3>Border radius:</h3>

  <div class="button-list">
    {#each variants as variant}
      <MButton class="_{variant} u-rd-x" text={variant} />
    {/each}
  </div>

  <h3>With shadows:</h3>
  <div class="button-list">
    {#each variants as variant}
      <MButton class="_{variant} u-sd-2" text={variant} />
    {/each}
  </div>

  <h2>Colors (custom)</h2>
  <p>
    <em>Check source code of this page for detailed implementation.</em>
  </p>

  {#each styles as style}
    <div class="button-list">
      {#each colors as color}
        <MButton class="_{style} _{color}" text={color} />
      {/each}
    </div>
  {/each}

</article>
