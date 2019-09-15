<script context="module">
  import posts from "../examples/_posts.js";
</script>

<script>
  export let segment;

  function active_page(evt) {
    const target = evt.target;
    console.log(evt);
  }
</script>

<style lang="scss">
  @import "helpers";
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
    margin: 0 0.75rem;
    line-height: 1.5rem;
    padding: 0.375rem 0.75rem;
    text-decoration: none;
    @include color(neutral, 2);

    border-radius: 3px;
    border: 0;

    &._active {
      @include color(primary, 2);
    }

    &:hover {
      background-color: rgba(f-color(primary, 4), 0.2);
    }
  }

  nav-label {
    display: block;
    text-transform: uppercase;
    font-size: rem(14);
    padding: 1rem 1rem 0.5rem;
    @include color(neutral, 4);
  }
</style>

<nav on:click={active_page}>
  <a class:_active={segment === undefined} href=".">MELTE</a>

  <nav-label>Basic</nav-label>
  <a href="basic/variables">Variables</a>
  <a href="basic/utilities">Utilities</a>
  <a href="basic/resources">Resources</a>
  <a href="basic/typography">Typography</a>

  <nav-label>Components</nav-label>
  <a href="components/inputs">Inputs</a>
  <a href="components/buttons">Buttons</a>
  <a href="components/chips">Chips</a>
  <a href="components/badges">Badges</a>
  <a href="components/cards">Cards</a>
  <a href="components/menus">Menus</a>
  <a href="components/dialogs">Dialogs</a>
  <a href="components/tables">Tables</a>
  <a href="components/tooltips">Tooltips</a>

  <nav-label>Examples</nav-label>
  <a class:_active={segment === 'about'} href="about">About</a>
  {#each posts as post}
    <a rel="prefetch" href="examples/{post.slug}">{post.title}</a>
  {/each}
</nav>
