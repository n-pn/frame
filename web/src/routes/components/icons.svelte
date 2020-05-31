<script context="module">
  const feather = require('feather-icons')
  const icons = Object.values(feather.icons)
</script>

<script>
  import MIcon from '$mould/MIcon.svelte'
</script>

<style lang="scss">
  .list {
    @include grid(minmax(6rem, 1fr), 0.75rem, '.item');
    margin-top: 1rem;
  }

  .item {
    display: flex;
    text-align: center;
    flex-direction: column;
    height: auto;
  }

  .view {
    display: flex;
    width: 100%;
    height: 4.5rem;
    @include bgcolor(neutral, 1);
    @include shadow(1);
    @include radius();

    > :global(.m-icon) {
      margin: auto;
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  .name {
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

  <h2>Icon list ({icons.length} entries)</h2>
  <ul class="list">
    {#each icons as icon}
      <li class="item">
        <div class="view">
          <svg class="m-icon _{icon.name}">
            <use xlink:href="/icons.svg#{icon.name}" />
          </svg>
        </div>
        <div class="name">{icon.name}</div>
      </li>
    {/each}
  </ul>
</article>
