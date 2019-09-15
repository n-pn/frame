<script>
  const colors = [
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "purple",
    "pink"
  ];
  const tones = [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>

<style lang="scss">
  @import "helpers";
  color-list {
    display: block;
    padding: 0.5rem 0;
    @include clearfix;
  }

  color-name {
    font-variant: small-caps;
    width: 4rem;
    line-height: 2rem;
    float: left;
    @include color(neutral, 6);
  }

  color-item {
    float: left;
    width: 2rem;
    height: 2rem;
    // @include shadow(md);
    @include corner(md);
    margin-left: 0.5rem;

    @each $color in $m-color-names {
      @for $tone from 1 through 9 {
        &[color="#{'' + $color}"][tone="#{$tone}"] {
          @include bgcolor(f-color($color, $tone));
        }
      }
    }
  }
</style>

<div class="m-pretty">
  <h1>Colors</h1>

  <h2>Palette</h2>

  {#each colors as color}
    <color-list>
      <color-name>{color}:</color-name>
      {#each tones as tone}
        <color-item {color} {tone} />
      {/each}
    </color-list>
  {/each}
</div>
