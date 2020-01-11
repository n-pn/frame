## base-colors

```scss
$-color-names: gray, red, orange, yellow, green, teal, blue, indigo, purple,
    pink;
$-color-tones: 1, 2, 3, 4, 5, 6, 7, 8, 9;

$-color-aliases: (
    neutral: gray,
    primary: blue,
    success: green,
    warning: orange,
    harmful: red,
) !default;

// @function color($name, $tone: 5);
```

## base-screens

```scss
$-screen-1: 320px !default; // small phone
$-screen-2: 360px !default; // medium phone
$-screen-3: 480px !default; // large phone
$-screen-4: 640px !default; // small tablet
$-screen-5: 768px !default; // medium tablet
$-screen-6: 960px !default; // large tablet
$-screen-7: 1200px !default; // small monitor
$-screen-8: 1500px !default; // medium monitor
$-screen-9: 1800px !default; // large monitor

$-screen-names: ps, pm, pl, ts, tm, tl, cs, cm, cl;

// @function screen-size($size: 1..9) // media screen size

// @mixin screen-width-min($min) // media screen + min-width
// @mixin screen-width-max($max) // media screen + max-width
// @mixin screen-width-range($min, $max)
// @mixin screen-height-min($min) // media screen + min-height
// @mixin screen-height-max($max) // media screen + max-height
// @mixin screen-height-range($min, $max)
```

## boder-radius

```scss
$-bdr-dirs: a, t, l, b, r, tl, tr, bl, br; // a means all
$-bdr-sizes: 0, 1, 2, 3, 4, 5 !default; // => x * .125rem
$-bdr-df-size: 2 !default;

// @function bdr($val: 2)
// @mixin bdr($size: $-bdr-df-size, $dir: a)

// .__bdr
// .__bdr-#{$dir}
// .__bdr-#{$dir}-#{$size}
// .__bdr-#{$dir}-#{$size}-#{$screen}
```
