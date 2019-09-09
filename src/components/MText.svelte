<style lang="scss">
  @import "helpers";

  $spacing: gut(3) !default;

  :global(.text) {
    margin: 0;
    padding-top: $spacing;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: $__font-narrow-stack;
      font-weight: 400;
      margin: 0;
      margin-bottom: $spacing;
      color: color(neutral, 1);
    }

    h1 {
      font-size: $__font-size-6;
      line-height: $__line-height-6;
    }

    h2 {
      font-size: $__font-size-5;
      line-height: $__line-height-5;
    }

    h3 {
      font-size: $__font-size-4;
      line-height: $__line-height-4;
    }

    h4 {
      font-size: $__font-size-3;
      line-height: $__line-height-3;
    }

    p {
      margin: 0;
      margin-bottom: $spacing;
    }

    b,
    strong {
      font-weight: bolder; // Add the correct font weight in Chrome, Edge, and Safari
    }

    small {
      font-size: 80%; // Add the correct font size in all browsers
    }

    //
    // Prevent `sub` and `sup` elements from affecting the line height in
    // all browsers.
    //

    sub,
    sup {
      position: relative;
      font-size: 75%;
      line-height: 0;
      vertical-align: baseline;
    }

    sub {
      bottom: -0.25em;
    }
    sup {
      top: -0.5em;
    }

    blockquote {
      margin: 0;
      margin-bottom: $spacing;
      padding: 0 rem(18) 0 rem(14);
      border-left: 4px solid color(neutral, 6);
      color: color(neutral, 3);
    }

    // Content grouping
    //
    // 1. Add the correct box sizing in Firefox.
    // 2. Show the overflow in Edge and IE.

    hr {
      box-sizing: content-box; // 1
      height: 0; // 1
      overflow: visible; // 2
    }

    // List

    ol,
    ul,
    dl {
      margin: 0;
      padding: $spacing/2 0;
    }

    ol ol,
    ul ul,
    ol ul,
    ul ol {
      // margin: 0;
      margin-left: gut(3);
    }

    ul {
      list-style: none;
    }

    ol {
      counter-reset: li;
      list-style: none;
    }

    li {
      display: block;
      line-height: 1.5rem;
      counter-increment: li;

      &:before {
        display: inline-block;
        color: color(neutral, 3);
        width: gut(2);
        margin-left: -gut(3);
        text-align: right;
        margin-right: gut(1);
      }
    }

    ul > li:before {
      content: "🞄";
    }

    ul > li ul > li:before {
      content: "◦";
    }

    ol > li:before {
      content: counter(li) ".";
    }

    dt {
      font-weight: bold;
      color: color(neutral, 3);
    }

    dd {
      margin: 0;
      margin-bottom: $spacing;
    }

    del,
    ins,
    mark {
      border-radius: 3px;
      display: inline-block;
      padding: 0 gut(1);
    }

    mark {
      background-color: color(warning, 6);
      color: color(warning, 1);
    }

    ins {
      background-color: color(success, 6);
      color: color(success, 1);
    }

    del {
      background-color: color(harmful, 6);
      color: color(harmful, 1);
    }

    time,
    var {
      font-family: $__font-narrow-stack;
      color: color(neutral, 3);
    }

    time {
      font-weight: bold;
    }

    //
    // Code
    //

    code,
    kbd {
      display: inline-block;
      font-family: $__font-mono-stack;
      font-size: em(15);
      border-radius: 3px;
      padding: 0 gut(1);
      background-color: color(neutral, 7);
      line-height: inherit;
    }

    kbd {
      color: color(neutral, 2);
      border: 1px solid color(neutral, 6);
      box-shadow: 0 1px 1px 0 rgba(#000, 0.1);
    }

    code {
      color: color(primary, 4);
      border-color: color(neutral, 6);
    }

    pre {
      margin: 0;
      margin-bottom: $spacing;
      // Reset browser default of `1em` to use `rem`s
      // Don't allow content to break outside

      counter-reset: code-line;

      &._wrap {
        // overflow-x: hidden;
        white-space: pre-wrap;
        word-wrap: break-word;
      }

      > code {
        display: block;
        overflow-x: auto;
        padding: $spacing/2 $spacing;
        color: inherit;
      }

      div {
        position: relative;
        margin-left: gut(7);

        &:before {
          $padding: gut(7);

          display: inline-block;
          margin-left: -$padding;
          font-size: $__font-size-2;
          width: gut(4);
          padding-right: gut(3);
          text-align: right;

          color: color(neutral, 3);

          counter-increment: code-line;
          content: counter(code-line);
        }
      }
    }

    abbr[title],
    abbr[data-original-title] {
      // 1
      text-decoration: underline; // 2
      text-decoration: underline dotted; // 2
      cursor: help; // 3
      border-bottom: 0; // 4
      text-decoration-skip-ink: none; // 5
    }

    a {
      display: inline-block;
      position: relative;
      // line-height: 1.5rem;
      // height: 1.5rem;

      text-decoration: none;
      padding: 0 3px;
      margin: 0 -3px;
      color: inherit;
      // font-family: $__font-narrow-stack;

      &:after {
        display: inline-block;
        position: absolute;
        content: "";
        left: 0;
        bottom: 1px;
        width: 100%;
        border-bottom: 2px solid color(primary, 5);
      }

      @include hover {
        color: color(primary, 4);
      }
    }
  }
</style>

<div class="text">
  <slot />
</div>
