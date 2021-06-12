<script>
  import posts from '$lib/data/posts.json'
  import { dark_mode } from '$lib/stores'

  export let segment

</script>

<nav>
  <div class="content">
    <a class="site" class:_active={segment === undefined} href=".">Frame</a>

    <h3>Foundation</h3>

    <a class="link" href="/typography">Typography</a>
    <a class="link" href="/cheatsheet">Cheatsheet</a>

    <h3>Modules</h3>
    <a class="link" href="/modules/icons">Icons</a>
    <a class="link" href="/modules/buttons">Buttons</a>
    <a class="link" href="/modules/inputs">Inputs</a>
    <!-- <a class="link" href="/modules/chips">Chips</a>
    <a class="link" href="/modules/badges">Badges</a>
    <a class="link" href="/modules/cards">Cards</a>
    <a class="link" href="/modules/menus">Menus</a>
    <a class="link" href="/modules/dialogs">Dialogs</a>
    <a class="link" href="/modules/tables">Tables</a>
    <a class="link" href="/modules/tooltips">Tooltips</a> -->

    <h3>Sample texts</h3>
    {#each posts as post}
      <a class="link" sveltekit:prefetch href="/samples/{post.slug}">
        {post.title}
      </a>
    {/each}

    <footer>
      <button
        type="button"
        class="m-button"
        on:click={() => dark_mode.update((x) => !x)}>Toggle darkmode</button>
    </footer>
  </div>
</nav>

<style lang="scss">
  nav {
    position: absolute;
    width: 15rem;
    z-index: -1;
    padding-left: 1rem;
    top: 0;
    bottom: 0;

    left: -15rem;
    // @include bgcolor(neutral, 1);
  }

  .content {
    position: sticky;
    top: 0;
  }

  a {
    display: block;
    line-height: 1.5rem;
    text-decoration: none;
    @include fgcolor(neutral, 6);
  }

  .site {
    text-transform: uppercase;
    font-weight: 300;
    // text-align: center;
    @include font-size(x3);
    letter-spacing: 0.1em;
    // margin: 0 0.375rem;
    line-height: 4rem;
    margin: 0 0.75rem;
    position: relative;
    &:after {
      position: absolute;
      display: block;
      content: ' ';
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      @include bgcolor(neutral, 2);
    }
    // margin-top: 1rem;
  }

  .link {
    margin: 0 0.75rem;
    padding: 0.375rem 0.75rem;
    border-radius: 3px;
    border: 0;
    @include font-size(3);
    line-height: 1.5rem;

    &:hover {
      @include bgcolor(primary, 3);
    }
  }

  h3 {
    display: block;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: rem(14px);
    line-height: 1.5rem;
    font-weight: 400;
    padding: 0 1rem;
    margin-top: 0.5rem;
    @include fgcolor(neutral, 5);
  }

</style>
