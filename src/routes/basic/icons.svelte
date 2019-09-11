<script context="module">
  const feather = require("feather-icons");
  const icons = Object.values(feather.icons);
</script>

<script>
  import MIcon from "../../components/MIcon";
</script>

<style lang="scss">
  @import "helpers";

  icon-list {
    display: grid;
    grid-gap: 0.75rem;
    grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
  }

  icon-item {
    display: flex;
    flex-direction: column;
    text-align: center;
    height: auto;
  }

  icon-view {
    display: flex;
    width: 100%;
    height: 4.5rem;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(#000, 0.1), 0 1px 2px rgba(#000, 0.06);
    border-radius: 3px;

    > :global(svg) {
      margin: auto;
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  icon-name {
    display: block;
    font-family: $m-font-narrow;
    font-size: rem(15);
    line-height: 1.25rem;
    padding-top: 0.25rem;
  }
</style>

<h1>Icons</h1>

<h2>Icon list ({icons.length})</h2>

<p>
  <MIcon name="alert-circle" />
  TODO: search/filter
</p>
<p>
  <MIcon name="alert-circle" />
  TODO: change to table?
</p>

<icon-list>
  {#each icons as icon}
    <icon-item>
      <icon-view>
        {@html icon.toSvg()}
      </icon-view>
      <icon-name>{icon.name}</icon-name>
    </icon-item>
  {/each}
</icon-list>
