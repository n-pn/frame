<script>
  import MIcon from "../../components/MIcon";

  // your script goes here
</script>

<style lang="scss" scope="global">
  button-list {
    display: block;
    @include clearfix;
    margin-bottom: 1rem;

    > button,
    > .button {
      float: left;
      margin-right: 0.5rem;
    }

    > button-group {
      float: left;
      margin: 1rem;
    }
  }

  @mixin button() {
    :global(button),
    :global(.button) {
      @content;
    }
  }

  @mixin button-size($size, $font-size) {
    @include height($size);
    @include font-size($font-size);

    &._icon {
      width: $size;
    }
  }

  @mixin button-color($color: neutral) {
    &,
    &._fill,
    &._rise {
      color: #fff;
      @include bgcolor($color, 5);

      @include hover() {
        @include bgcolor($color, 4);
      }
    }

    &._line {
      background: transparent;
      @include color($color, 6);
      box-shadow: 0 0 0 1px f-color($color, 4);
      border: none;
      @include hover() {
        @if $color == gray or $color == neutral {
          @include bgcolor($color, 2);
        } @else {
          @include bgcolor($color, 1);
        }
      }
    }

    &._text {
      background: transparent;
      @include color($color, 7);
      @include hover() {
        @if $color == gray or $color == neutral {
          @include bgcolor($color, 2);
        } @else {
          @include bgcolor($color, 1);
        }
      }
    }
  }

  @include button {
    display: inline-block;
    @include corner(md);
    border: none;
  }

  // button sizes

  @include button {
    &._tiny {
      @include button-size(1.25rem, xs);
    }

    &._small {
      @include button-size(1.5rem, sm);
    }

    &,
    &._medium {
      @include button-size(2rem, md);
    }

    &._large {
      @include button-size(2.5rem, lg);
    }

    &._huge {
      @include button-size(3rem, xl);
    }
  }

  // button widths

  @include button {
    &,
    &._normal {
      padding: 0 0.75em;
    }

    &._narrow {
      padding: 0 0.25em;
    }

    &._widely {
      padding: 0 1.25em;
    }

    &._block {
      display: block;
      width: 100%;
    }
  }

  // button styles

  @include button {
    &._icon {
      @include corner(9999px);
      padding: 0;
    }

    &._rise {
      // @include shadow(md);
      box-shadow: 0 3px 6px rgba(#000, 0.1), 0 1px 2px rgba(#000, 0.2);
    }

    &,
    &._default {
      @include button-color(neutral);

      &,
      &._fill,
      &._rise {
        @include color(neutral, 7);
        @include bgcolor(neutral, 2);
        @include hover {
          @include color(neutral, 7);
          @include bgcolor(neutral, 3);
        }
      }
    }

    &._primary {
      @include button-color(primary);
    }

    &._success {
      @include button-color(success);
    }

    &._harmful {
      @include button-color(harmful);
    }

    &._gray {
      @include button-color(gray);
    }

    &._red {
      @include button-color(red);
    }

    &._orange {
      @include button-color(orange);
    }

    &._yellow {
      @include button-color(yellow);
    }

    &._green {
      @include button-color(green);
    }

    &._teal {
      @include button-color(teal);
    }

    &._blue {
      @include button-color(blue);
    }

    &._indigo {
      @include button-color(indigo);
    }

    &._purple {
      @include button-color(purple);
    }

    &._pink {
      @include button-color(pink);
    }

    &._disable,
    &[disabled] {
      @include color(neutral, 5);
      @include bgcolor(neutral, 2);
      box-shadow: none;
      @include hover {
        cursor: text;
        @include color(neutral, 5);
        @include bgcolor(neutral, 2);
      }
    }
  }

  // button groups
  button-group {
    display: flex;

    &._block {
      width: 100%;
    }

    @include button {
      border-radius: 0;
      flex: 1;
      &:first-child {
        @include corner(md, left);
      }
      &:last-child {
        @include corner(md, right);
      }
    }
  }
</style>

<h1>Buttons</h1>

<hr />

<h2>Button sizes</h2>

<button-list>
  <button class="_tiny">Tiny</button>
  <button class="_small">Small</button>
  <button class="_medium">Medium</button>
  <button class="_large">Large</button>
  <button class="_huge">Huge</button>
</button-list>

<hr />

<h2>Button widths</h2>

<button-list>
  <button class="_narrow">Narrow button</button>
  <button class="_normal">Normal button</button>
  <button class="_widely">Widely button</button>
</button-list>

<button-list>
  <button class="_block">Button block</button>
</button-list>

<hr />

<h2>Button styles</h2>

<button-list>
  <button class="_icon">
    <MIcon />
  </button>
  <button class="_text">Text</button>
  <button class="_line">Line</button>
  <button class="_fill">Fill</button>
  <button class="_rise">Rise</button>
</button-list>

<hr />

<h2>Button variants</h2>

<button-list>
  <button class="_text _default">Default</button>
  <button class="_text _primary">Primary</button>
  <button class="_text _success">Success</button>
  <button class="_text _harmful">Harmful</button>
  <button class="_text _disable">Disable</button>
  <a href="/" class="button _text">Link</a>
</button-list>

<button-list>
  <button class="_line _default">Default</button>
  <button class="_line _primary">Primary</button>
  <button class="_line _success">Success</button>
  <button class="_line _harmful">Harmful</button>
  <button class="_line _disable">Disable</button>
  <a href="/" class="button _line">Link</a>
</button-list>

<button-list>
  <button class="_default">Default</button>
  <button class="_primary">Primary</button>
  <button class="_success">Success</button>
  <button class="_harmful">Harmful</button>
  <button class="_disable">Disable</button>
  <a href="/" class="button">Link</a>
</button-list>

<button-list>
  <button class="_rise _default">Default</button>
  <button class="_rise _primary">Primary</button>
  <button class="_rise _success">Success</button>
  <button class="_rise _harmful">Harmful</button>
  <button class="_rise _disable">Disable</button>
  <a href="/" class="button _rise">Link</a>
</button-list>

<hr />

<h2>Button colors</h2>

<button-list>
  <button class="_text _gray">Gray</button>
  <button class="_text _red">Red</button>
  <button class="_text _orange">Orange</button>
  <button class="_text _yellow">Yellow</button>
  <button class="_text _green">Green</button>
  <button class="_text _teal">Teal</button>
  <button class="_text _blue">Blue</button>
  <button class="_text _indigo">Indigo</button>
  <button class="_text _purple">Purple</button>
  <button class="_text _pink">Pink</button>
</button-list>

<button-list>
  <button class="_line _gray">Gray</button>
  <button class="_line _red">Red</button>
  <button class="_line _orange">Orange</button>
  <button class="_line _yellow">Yellow</button>
  <button class="_line _green">Green</button>
  <button class="_line _teal">Teal</button>
  <button class="_line _blue">Blue</button>
  <button class="_line _indigo">Indigo</button>
  <button class="_line _purple">Purple</button>
  <button class="_line _pink">Pink</button>
</button-list>

<button-list>
  <button class="_gray">Gray</button>
  <button class="_red">Red</button>
  <button class="_orange">Orange</button>
  <button class="_yellow">Yellow</button>
  <button class="_green">Green</button>
  <button class="_teal">Teal</button>
  <button class="_blue">Blue</button>
  <button class="_indigo">Indigo</button>
  <button class="_purple">Purple</button>
  <button class="_pink">Pink</button>
</button-list>

<button-list>
  <button class="_rise _gray">Gray</button>
  <button class="_rise _red">Red</button>
  <button class="_rise _orange">Orange</button>
  <button class="_rise _yellow">Yellow</button>
  <button class="_rise _green">Green</button>
  <button class="_rise _teal">Teal</button>
  <button class="_rise _blue">Blue</button>
  <button class="_rise _indigo">Indigo</button>
  <button class="_rise _purple">Purple</button>
  <button class="_rise _pink">Pink</button>
</button-list>

<hr />

<h2>Button layouts</h2>

<button-list>
  <button-group>
    <button class="_line">One</button>
    <button class="_line">Two</button>
    <button class="_line">Three</button>
  </button-group>

  <button-group>
    <button class="_line _primary">One</button>
    <button class="_line _primary">Two</button>
    <button class="_line _primary">Three</button>
  </button-group>

  <button-group>
    <button class="_line _harmful">One</button>
    <button class="_line _harmful">Two</button>
    <button class="_line _harmful">Three</button>
  </button-group>

  <button-group>
    <button class="_fill">One</button>
    <button class="_fill">Two</button>
    <button class="_fill">Three</button>
  </button-group>

  <button-group>
    <button class="_fill _primary">One</button>
    <button class="_fill _primary">Two</button>
    <button class="_fill _primary">Three</button>
  </button-group>

  <button-group>
    <button class="_fill _harmful">One</button>
    <button class="_fill _harmful">Two</button>
    <button class="_fill _harmful">Three</button>
  </button-group>

  <button-group class="_block">
    <button class="_line">Full</button>
    <button class="_line">Width</button>
    <button class="_line">Block</button>
  </button-group>
</button-list>
