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
  const styles = ['text', 'line', 'solid', 'raise']
  const sizes = ['tiny', 'small', 'medium', 'large', 'huge']
  const variants = [
    'default',
    'primary',
    'success',
    'warning',
    'harmful',
    'disable',
  ]
</script>

<style type="text/scss">
  .button-list {
    // display: block;
    display: flex;
    // justify-content: space-around;

    &._color :global(.m-button) {
      width: 6rem;
    }
  }

  :global(.m-button + .m-button) {
    margin-left: 1rem;
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

  <h2>Widths</h2>

  <div class="button-list">
    <MButton class="_narrow _line" text="Narrow button" />
    <MButton class="_normal _success _solid" text="Normal button" />
    <MButton class="_widely _disable _raise _pill" text="Widely button" />
  </div>

  <div class="button-list">
    <MButton class="_block _raise _large _primary" text="Block button" />
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
    <MButton class="_pill" icon="feather" />
    <MButton class="_widely _green" icon="circle" />
    <MButton class="_harmful" icon="x" text="Close" />
    <MButton class="_primary _raise" right_icon="arrow-right" text="Next" />
    <MButton
      class="_line"
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
      <a href="/" class="m-button _{style}">
        <span>Link</span>
      </a>
    </div>
  {/each}

  <h2>Colors</h2>

  {#each colors as color}
    <div class="button-list _color">
      {#each styles as style}
        <MButton class="_{style} _{color}" text={color} />
      {/each}
    </div>
  {/each}

</article>
