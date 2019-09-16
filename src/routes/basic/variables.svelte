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
  const tones = [9, 8, 7, 6, 5, 4, 3, 2, 1];
</script>

<style lang="scss">
  @import "helpers";

  color-table {
    display: block;
    background-color: #fff;
    padding: 1rem;
    @include corner(md);
    @include shadow(md);
  }

  color-list {
    display: block;
    // padding: 0.5rem 0;
    display: flow-root;
  }

  color-name {
    font-variant: small-caps;
    line-height: 2rem;
    float: left;
    @include color(neutral, 6);
  }

  color-item {
    float: right;
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
  hr {
    margin: 0.5rem 0;
  }
</style>

<div class="m-pretty">
  <h1>Colors</h1>

  <color-table>
    <h2>Palette</h2>
    {#each colors as color}
      <hr />
      <color-list>
        <color-name>{color}:</color-name>
        {#each tones as tone}
          <color-item {color} {tone} />
        {/each}
      </color-list>
    {/each}
  </color-table>

</div>
