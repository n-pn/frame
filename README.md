# Mould

SCSS mixins-based framework and reused Svelte components

## Install

```sh
# using npm
npm install @nipin/mould --save-dev
# using yarm
yarn add -D @nipin/mould
```

```scss
@import '@nipin/mould/css/essence'; // variables, functions and mixins
```

```js
// include it in your main js file
import '@nipin/mould/css/premade.scss' // for typography and normalize
import '@nipin/mould/css/utilities.scss' // for using .u-cf, .u-pd-4 etc.
```

```js
// svelte component
import '@nipin/mould/lib/MButton.svelte'
import '@nipin/mould/lib/MIcon.svelte'
```

## SCSS cheatsheets

````scss
@function append-string($before, $after: null) {
  // return $before-$after unless $after is null
}


@function color($color, $shade: null, $alpha: null) {
  // return a color base from a custom defined color palette
  // $color:
  // - gray, red, orange, yellow, green, teal, blue, indigo, purple, pink
  // - neutral, primary, success, warning, harmful
  // - real color like #fff or rgba(20, 50, 80)
  // $shade: 1..9, can be omitted
  // $alpha: transparency level, can be null
}

@function colors($colors, $shade: null, $alpha) {
  // return a list of colors by calling color() for each item of $colors
  // $colors must be a list
}

@function trump($value, $trump: false) {
  // return `$value !important` if $trump is true
  // else just return $value
}

// prettier-ignore
@function screen-vals($xs, $sm: null, $md: null, $lg: null, $xl: null, $df: null) {
  // convert list to a map of screen sizes to values
  // null value will be ignored
}

@mixin screen-min($min: sm) {
  // warp content in media screen
}

@mixin screen-max($max: sm) {
  // warp content in media screen
}

@mixin screen($screen: sm, $prop: null, $value: null) {
  // calling screen-min with @content and a single line of $prop: $value;
}

@mixin apply($props, $value, $trump: false) {
  // insert property value defination for each item of $props, adaptive to screen size
  // $props: a string or a list of string, eg: background or (border-left, border-right)
  // $value: can be a single value or a screen-vals result
}

```

## Svelte components

```html
<MButton class="" disabled="">
```

## License

MIT
````
