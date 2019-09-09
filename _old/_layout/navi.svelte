<style type="text/scss">
  @import '../../styles/shared';

  $brand-color: color(neutral, 1);

  $color: color(neutral, 2);
  $bgcolor: color(neutral, 7);

  $border-color: color(neutral, 6);
  $hover-color: color(neutral, 6);
  $active-color: color(primary, 4);
  $active-bgcolor: #fff;

  $head-height: gut(10);
  $link-height: gut(6);

  .wrap {
    color: $color;
    min-height: 100%;
    border-right: 1px solid $border-color;
    background-color: $bgcolor;
    font-family: $__font-narrow-stack;
  }

  .head {
    padding: gut(3) 0 gut(2);
    @include height($__line-height-6);
    font-size: $__font-size-6;

    // background-color: #fff;
    // border-bottom: 1px solid $border-color;
    // text-align: center;
  }

  .brand {
    padding: 0 gut(4);
    text-transform: uppercase;
    // font-family: $__font-normal-stack;
    color: $brand-color;
    font-weight: 400;
  }

  .label {
    @include height(gut(5));
    margin-top: gut(1);
    padding: 0 gut(4);

    // font-weight: 600;
    color: color(neutral, 3);
    font-variant: small-caps;
  }

  .menu {
    margin: 0;
    padding: 0 0 0 gut(2);
  }

  .item {
    display: block;
    margin: 0;
    padding: 0;
  }

  .link {
    text-decoration: none;
    padding: 0 gut(2);
    @include height(gut(6));

    display: block;
    color: inherit;
    border: 1px solid transparent;

    @include hover {
      background-color: $hover-color;
    }

    &._active {
      color: $active-color;
      background-color: $active-bgcolor;
      border-color: $border-color;
      border-right: none;
      // border-radius: 3px 0 0 3px;
      transform: translateX(1px);
    }
    &:active {
      outline: none;
    }
  }
</style>

<div class="wrap">
  <header class="head">
    <div class="brand">Sussy</div>
  </header>

  <div class="label">Elements</div>

  <ul class="menu">
    <li class="item">
      <a class="link" class:_active="{segment === undefined}" href=".">Typography</a>
    </li>
  </ul>

  <div class="label">Samples</div>

  <ul class="menu">
    <li class="item">
      <a rel="prefetch" class="link" class:_active="{segment === 'blog'}" href="blog">Blog</a>
    </li>

    <li class="item">
      <a class="link" class:_active="{segment === 'about'}" href="about">About</a>
    </li>
  </ul>
</div>
