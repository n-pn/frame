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

    // font-weight: 300;
    font-family: Roboto Condensed, system-sans;
    // padding: 0 1em;
    background-color: #fff;
    box-shadow: 2px 0 6px rgba(#000, 0.06);
  }

  a {
    display: block;
    margin-left: 0.75rem;
    line-height: 1.5rem;
    padding: 0.375rem 0.75rem;
    text-decoration: none;
    color: color(neutral, 3);
    border-radius: 3px 0 0 3px;
    border: 0;
    &._active,
    &:hover {
      // display: block;
      position: relative;
      color: color(primary, 4);
      background-color: rgba(color(primary, 5), 0.1);
      &:after {
        position: absolute;
        display: block;
        content: "";
        background-color: color(primary, 5);
        top: 0;
        right: 0;
        width: 3px;
        height: 100%;
      }
    }
  }

  nav-label {
    display: block;
    text-transform: uppercase;
    font-size: rem(14);
    padding: 1rem 1rem 0.5rem;
    color: color(neutral, 4);
  }
</style>

<nav on:click={active_page}>
  <a class:_active={segment === undefined} href=".">MELTE</a>

  <a class:_active={segment === 'about'} href="about">About</a>

  <nav-label>Basic</nav-label>
  <a href="basic/icons">Icons</a>

  <nav-label>Examples</nav-label>
  {#each posts as post}
    <a rel="prefetch" href="examples/{post.slug}">{post.title}</a>
  {/each}
</nav>
