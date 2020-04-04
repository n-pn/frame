<script>
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
  const styles = ['fill', 'text', 'line']
  const variants = ['default', 'primary', 'success', 'warning', 'harmful']
</script>

<style type="text/scss">
  .button-list {
    display: flex;
    flex-wrap: wrap;
    & + & {
      margin-top: 0.5rem;
    }
  }

  @import 'essence/elements/buttons';

  .m-button {
    & + & {
      margin-left: 0.5rem;
    }

    @each $color in map-keys($-color-palette) {
      :global(&._#{$color}) {
        width: 6rem;
        justify-content: center;
        @include button-varify(fill, $color);

        @each $style in $-button-styles {
          &._#{$style} {
            @include button-varify($style, $color);
          }
        }
      }
    }
  }
</style>

<svelte:head>
  <title>Buttons - Molds</title>
</svelte:head>

<article m-article>
  <h1>Buttons</h1>

  <h2>Sizes</h2>

  <div class="button-list">
    {#each sizes as size}
      <MButton
        class="m-button _{size}"
        text={size + ' button'}
        icon="maximize" />
    {/each}
  </div>

  <h2>Styles</h2>

  <div class="button-list">
    {#each styles as style}
      <button class="m-button _{style} _primary">
        <span>{style.toUpperCase()}</span>
      </button>
    {/each}
  </div>

  <h2>Icons</h2>

  <div class="button-list">
    <MButton class="m-button u-rd-x" icon="feather" />
    <MButton class="m-button _success u-p_l-8x u-p_r-8x" icon="circle" />
    <MButton class="m-button _line _harmful u-rd-8" icon="x" text="Close" />
    <MButton
      class="m-button _primary u-rd-x u-p_lr-4x"
      icon-right="arrow-right"
      text="Next" />
    <MButton
      class="m-button u-sd-4 u-rd-0"
      disabled
      icon="chevron-left"
      icon-right="chevron-right"
      text="Left and right" />
  </div>

  <h2>Variants</h2>

  {#each styles as style}
    <div class="button-list">
      {#each variants as variant}
        <MButton class="m-button _{style} _{variant}" text={variant} />
      {/each}
    </div>

    <div class="button-list">
      {#each variants as variant}
        <MButton class="m-button _{style} _{variant}" disabled text={variant} />
      {/each}
    </div>
    <hr />
  {/each}

  <h2>Elements</h2>

  <div class="button-list">
    {#each styles as style}
      <a href="/" class="m-button _primary _{style}">
        <span>Link</span>
      </a>
    {/each}
  </div>
  <div class="button-list">
    {#each styles as style}
      <input type="button" class="m-button _harmful _{style}" value="input" />
    {/each}
  </div>

  <h2>Mixed up with utilties</h2>
  <h3>Border radius:</h3>

  <div class="button-list">
    {#each variants as variant}
      <MButton class="m-button _{variant} u-rd-x" text={variant} />
    {/each}
  </div>

  <h3>With shadows:</h3>
  <div class="button-list">
    {#each variants as variant}
      <MButton class="m-button _{variant} u-sd-2" text={variant} />
    {/each}
  </div>

  <h2>Colors (custom)</h2>
  <p>
    <em>Check source code of this page for detailed implementation.</em>
  </p>

  {#each colors as color}
    <div class="button-list">
      {#each styles as style}
        <MButton class="m-button _{style} _{color}" text={color} />
      {/each}
    </div>
  {/each}

</article>
