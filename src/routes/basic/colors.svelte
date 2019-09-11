<script>
  const colors = ["grey", "cyan", "blue", "lime", "gold", "ruby", "plum"];
  const tones = [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>

<style lang="scss">
  @import "helpers";
  color-list {
    display: block;
  }

  color-name {
    display: inline-block;
  }

  color-item {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    @each $color in ("grey", "cyan", "blue", "lime", "gold", "ruby", "plum") {
      &[color="#{$color}"] {
        background-color: color2($color, 5);
      }
    }
  }
</style>

<h1>Colors</h1>

<h2>Palette</h2>

{#each colors as color}
  <color-list>
    <color-name>{color}</color-name>
    {#each tones as tone}
      <color-item {color} {tone} />
      <!-- content here -->
    {/each}
    <!-- content here -->
  </color-list>
{/each}
