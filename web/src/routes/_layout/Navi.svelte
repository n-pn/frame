<script context="module">
  import posts from '../examples/_posts.js'
</script>

<script>
  export let segment

  function active_page(evt) {
    const target = evt.target
    console.log(evt)
  }
</script>

<style lang="scss">
  nav {
    position: fixed;
    width: 16rem;
    max-width: 100vw;
    top: 0;
    left: 0;
    bottom: 0;

    box-shadow: 2px 0 6px rgba(#000, 0.06);
    @include bgcolor(primary, 7);
  }
  a {
    display: block;
    line-height: 1.5rem;
    text-decoration: none;
    @include color(neutral, 2);
  }
  .site {
    text-transform: uppercase;
    font-weight: 300;
    // text-align: center;
    @include font-size(x2);
    // margin: 0 0.375rem;
    padding: 0 0.75rem;
    line-height: 4rem;
    position: relative;
    &:after {
      position: absolute;
      display: block;
      content: ' ';
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: rgba(color(primary, 6), 0.5);
    }
    // margin-top: 1rem;
  }

  .link {
    margin: 0 0.75rem;
    padding: 0.375rem 0.75rem;
    border-radius: 3px;
    border: 0;
    @include font-size(sm);
    line-height: 1.5rem;

    &:hover {
      background-color: rgba(color(primary, 4), 0.2);
    }
  }

  h3 {
    display: block;
    text-transform: uppercase;
    font-size: rem(14px);
    font-weight: 400;
    padding: 0.25rem 1rem;
    // margin-top: 0.5rem;
    @include color(neutral, 4);
  }
</style>

<nav on:click={active_page}>
  <a class="site" class:_active={segment === undefined} href=".">Mould</a>

  <h3>Foundation</h3>

  <a class="link" href="bases/typography">Typography</a>
  <a class="link" href="bases/cheatsheet">Cheatsheet</a>

  <h3>Components</h3>
  <a class="link" href="molds/icons">Icons</a>
  <a class="link" href="molds/buttons">Buttons</a>
  <a class="link" href="molds/inputs">Inputs</a>
  <!-- <a class="link" href="molds/chips">Chips</a>
    <a class="link" href="molds/badges">Badges</a>
    <a class="link" href="molds/cards">Cards</a>
    <a class="link" href="molds/menus">Menus</a>
    <a class="link" href="molds/dialogs">Dialogs</a>
    <a class="link" href="molds/tables">Tables</a>
    <a class="link" href="molds/tooltips">Tooltips</a> -->

  <h3>Examples</h3>
  {#each posts as post}
    <a class="link" rel="prefetch" href="examples/{post.slug}">{post.title}</a>
  {/each}
</nav>
