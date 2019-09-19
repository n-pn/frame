<script>
  import MIcon from "../../components/MIcon";

  // your script goes here
</script>

<style lang="scss" scope="global">
  :global(button-list) {
    display: block;
    display: flex;
    // justify-content: space-around;
    margin-bottom: 1rem;

    @include buttons {
      margin-right: 1rem;
    }

    > button-group {
      margin: 1rem;
    }

    &._color {
      @include buttons {
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

    @include buttons {
      border-radius: 0;
      flex: 1;
      margin-right: -1px;
      &:first-child {
        @include corner(md, left);
      }
      &:last-child {
        @include corner(md, right);
        margin-right: 0;
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
  <a href="/" class="m-btn _text">Link</a>
</button-list>

<button-list>
  <button class="_line _default">Default</button>
  <button class="_line _primary">Primary</button>
  <button class="_line _success">Success</button>
  <button class="_line _harmful">Harmful</button>
  <button class="_line _disable">Disable</button>
  <a href="/" class="m-btn _line">Link</a>
</button-list>

<button-list>
  <button class="_default">Default</button>
  <button class="_primary">Primary</button>
  <button class="_success">Success</button>
  <button class="_harmful">Harmful</button>
  <button class="_disable">Disable</button>
  <a href="/" class="m-btn">Link</a>
</button-list>

<button-list>
  <button class="_rise _default">Default</button>
  <button class="_rise _primary">Primary</button>
  <button class="_rise _success">Success</button>
  <button class="_rise _harmful">Harmful</button>
  <button class="_rise _disable">Disable</button>
  <a href="/" class="m-btn _rise">Link</a>
</button-list>

<hr />

<h2>Button colors</h2>

<button-list class="_color">
  <button class="_text _gray">gray</button>
  <button class="_line _gray">gray</button>
  <button class="_fill _gray">gray</button>
  <button class="_rise _gray">gray</button>
</button-list>

<button-list class="_color">
  <button class="_text _red">red</button>
  <button class="_line _red">red</button>
  <button class="_fill _red">red</button>
  <button class="_rise _red">red</button>
</button-list>

<button-list class="_color">
  <button class="_text _orange">orange</button>
  <button class="_line _orange">orange</button>
  <button class="_fill _orange">orange</button>
  <button class="_rise _orange">orange</button>
</button-list>

<button-list class="_color">
  <button class="_text _yellow">yellow</button>
  <button class="_line _yellow">yellow</button>
  <button class="_fill _yellow">yellow</button>
  <button class="_rise _yellow">yellow</button>
</button-list>

<button-list class="_color">
  <button class="_text _green">green</button>
  <button class="_line _green">green</button>
  <button class="_fill _green">green</button>
  <button class="_rise _green">green</button>
</button-list>

<button-list class="_color">
  <button class="_text _teal">teal</button>
  <button class="_line _teal">teal</button>
  <button class="_fill _teal">teal</button>
  <button class="_rise _teal">teal</button>
</button-list>

<button-list class="_color">
  <button class="_text _blue">blue</button>
  <button class="_line _blue">blue</button>
  <button class="_fill _blue">blue</button>
  <button class="_rise _blue">blue</button>
</button-list>

<button-list class="_color">
  <button class="_text _indigo">indigo</button>
  <button class="_line _indigo">indigo</button>
  <button class="_fill _indigo">indigo</button>
  <button class="_rise _indigo">indigo</button>
</button-list>

<button-list class="_color">
  <button class="_text _purple">purple</button>
  <button class="_line _purple">purple</button>
  <button class="_fill _purple">purple</button>
  <button class="_rise _purple">purple</button>
</button-list>

<button-list class="_color">
  <button class="_text _pink">pink</button>
  <button class="_line _pink">pink</button>
  <button class="_fill _pink">pink</button>
  <button class="_rise _pink">pink</button>
</button-list>

<hr />

<h2>Button layouts</h2>

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
