<script context="module">
  const feather = require('feather-icons')
  const icons = Object.values(feather.icons)
</script>

<script>
  import MIcon from '$mould/MIcon.svelte'
</script>

<style lang="scss">
  .list {
    display: grid;
    grid-gap: 0.75rem;
    grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
    margin-top: 1rem;
  }

  .item {
    display: flex;
    flex-direction: column;
    text-align: center;
    height: auto;
  }

  .view {
    display: flex;
    width: 100%;
    height: 4.5rem;
    background-color: #fff;
    @include box-shadow(1);
    // box-shadow: 0 1px 3px rgba(#000, 0.1), 0 1px 2px rgba(#000, 0.06);
    border-radius: 3px;

    > :global(.m-icon) {
      margin: auto;
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  icon-name {
    display: block;
    @include font-family(narrow);
    @include font-size(sm);
    line-height: 1.25rem;
    padding-top: 0.25rem;
  }
</style>

<article class="m-article">
  <h1>Icons</h1>
  <p>TODO: write usage</p>

  <h2>Icon list ({icons.length})</h2>
  <ul class="list">
    {#each icons as icon}
      <li class="item">
        <div class="view">
          <MIcon name={icon.name} />
        </div>
        <icon-name>{icon.name}</icon-name>
      </li>
    {/each}
  </ul>
</article>
