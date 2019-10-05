<script>
  import MIcon from "$melte/MIcon.svelte";

  // your script goes here
</script>

<style lang="scss" scope="global">
  :global(button-list) {
    // display: block;
    display: flex;
    // justify-content: space-around;
    margin-bottom: 1rem;

    .btn {
      margin-right: 1rem;
    }

    > button-group {
      margin: 1rem;
    }

    &._color {
      .btn {
        width: 6rem;
      }
    }
  }

  // button groups
  :global(button-group) {
    display: inline-flex;
    margin-bottom: 1rem;
    margin-right: 1rem;

    &._block {
      display: flex;
      width: 100%;
    }

    button {
      border-radius: 0;
      flex: 1;
      margin-right: -1px;
      &:first-child {
        @include corner-left(md);
      }
      &:last-child {
        @include corner-right(md);
        margin-right: 0;
      }
    }
  }
</style>

<h1>Buttons</h1>

<hr />

<h2>Button sizes</h2>

<button-list>
  <button class="m-btn _tiny">Tiny</button>
  <button class="m-btn _small">Small</button>
  <button class="m-btn _medium">Medium</button>
  <button class="m-btn _large">Large</button>
  <button class="m-btn _huge">Huge</button>
</button-list>

<hr />

<h2>Button widths</h2>

<button-list>
  <button class="m-btn _narrow">Narrow button</button>
  <button class="m-btn _normal">Normal button</button>
  <button class="m-btn _widely">Widely button</button>
</button-list>

<button-list>
  <button class="m-btn _block">Button block</button>
</button-list>

<hr />

<h2>Button styles</h2>

<button-list>
  <button class="m-btn _icon">
    <MIcon />
  </button>
  <button class="m-btn _text">Text</button>
  <button class="m-btn _line">Line</button>
  <button class="m-btn _fill">Fill</button>
  <button class="m-btn _rise">Rise</button>
</button-list>

<hr />

<h2>Button variants</h2>

<button-list>
  <button class="m-btn _text _default">Default</button>
  <button class="m-btn _text _primary">Primary</button>
  <button class="m-btn _text _success">Success</button>
  <button class="m-btn _text _harmful">Harmful</button>
  <button class="m-btn _text _disable">Disable</button>
  <a href="/" class="m-btn _text">Link</a>
</button-list>

<button-list>
  <button class="m-btn _line _default">Default</button>
  <button class="m-btn _line _primary">Primary</button>
  <button class="m-btn _line _success">Success</button>
  <button class="m-btn _line _harmful">Harmful</button>
  <button class="m-btn _line _disable">Disable</button>
  <a href="/" class="m-btn _line">Link</a>
</button-list>

<button-list>
  <button class="m-btn _default">Default</button>
  <button class="m-btn _primary">Primary</button>
  <button class="m-btn _success">Success</button>
  <button class="m-btn _harmful">Harmful</button>
  <button class="m-btn _disable">Disable</button>
  <a href="/" class="m-btn">Link</a>
</button-list>

<button-list>
  <button class="m-btn _rise _default">Default</button>
  <button class="m-btn _rise _primary">Primary</button>
  <button class="m-btn _rise _success">Success</button>
  <button class="m-btn _rise _harmful">Harmful</button>
  <button class="m-btn _rise _disable">Disable</button>
  <a href="/" class="m-btn _rise">Link</a>
</button-list>

<hr />

<h2>Button colors</h2>

<button-list class="_color">
  <button class="m-btn _text _gray">gray</button>
  <button class="m-btn _line _gray">gray</button>
  <button class="m-btn _fill _gray">gray</button>
  <button class="m-btn _rise _gray">gray</button>
</button-list>

<button-list class="_color">
  <button class="m-btn _text _red">red</button>
  <button class="m-btn _line _red">red</button>
  <button class="m-btn _fill _red">red</button>
  <button class="m-btn _rise _red">red</button>
</button-list>

<button-list class="_color">
  <button class="m-btn _text _orange">orange</button>
  <button class="m-btn _line _orange">orange</button>
  <button class="m-btn _fill _orange">orange</button>
  <button class="m-btn _rise _orange">orange</button>
</button-list>

<button-list class="_color">
  <button class="m-btn _text _yellow">yellow</button>
  <button class="m-btn _line _yellow">yellow</button>
  <button class="m-btn _fill _yellow">yellow</button>
  <button class="m-btn _rise _yellow">yellow</button>
</button-list>

<button-list class="_color">
  <button class="m-btn _text _green">green</button>
  <button class="m-btn _line _green">green</button>
  <button class="m-btn _fill _green">green</button>
  <button class="m-btn _rise _green">green</button>
</button-list>

<button-list class="_color">
  <button class="m-btn _text _teal">teal</button>
  <button class="m-btn _line _teal">teal</button>
  <button class="m-btn _fill _teal">teal</button>
  <button class="m-btn _rise _teal">teal</button>
</button-list>

<button-list class="_color">
  <button class="m-btn _text _blue">blue</button>
  <button class="m-btn _line _blue">blue</button>
  <button class="m-btn _fill _blue">blue</button>
  <button class="m-btn _rise _blue">blue</button>
</button-list>

<button-list class="_color">
  <button class="m-btn _text _indigo">indigo</button>
  <button class="m-btn _line _indigo">indigo</button>
  <button class="m-btn _fill _indigo">indigo</button>
  <button class="m-btn _rise _indigo">indigo</button>
</button-list>

<button-list class="_color">
  <button class="m-btn _text _purple">purple</button>
  <button class="m-btn _line _purple">purple</button>
  <button class="m-btn _fill _purple">purple</button>
  <button class="m-btn _rise _purple">purple</button>
</button-list>

<button-list class="_color">
  <button class="m-btn _text _pink">pink</button>
  <button class="m-btn _line _pink">pink</button>
  <button class="m-btn _fill _pink">pink</button>
  <button class="m-btn _rise _pink">pink</button>
</button-list>

<hr />

<h2>Button layouts</h2>

<button-group>
  <button class="m-btn _line">One</button>
  <button class="m-btn _line">Two</button>
  <button class="m-btn _line">Three</button>
</button-group>

<button-group>
  <button class="m-btn _line _primary">One</button>
  <button class="m-btn _line _primary">Two</button>
  <button class="m-btn _line _primary">Three</button>
</button-group>

<button-group>
  <button class="m-btn _line _harmful">One</button>
  <button class="m-btn _line _harmful">Two</button>
  <button class="m-btn _line _harmful">Three</button>
</button-group>

<button-group>
  <button class="m-btn _fill">One</button>
  <button class="m-btn _fill">Two</button>
  <button class="m-btn _fill">Three</button>
</button-group>

<button-group>
  <button class="m-btn _fill _primary">One</button>
  <button class="m-btn _fill _primary">Two</button>
  <button class="m-btn _fill _primary">Three</button>
</button-group>

<button-group>
  <button class="m-btn _fill _harmful">One</button>
  <button class="m-btn _fill _harmful">Two</button>
  <button class="m-btn _fill _harmful">Three</button>
</button-group>

<button-group class="_block">
  <button class="m-btn _line">Full</button>
  <button class="m-btn _line">Width</button>
  <button class="m-btn _line">Block</button>
</button-group>
