# Mould

Personal collection of stylesheets and components for Svelte projects

## Install

```sh
yarn add https://github.com/nipinium/mould
```

## Usage

### Stylesheets

in `src/client.js`:

```js
import 'mould/css/premade.scss'
```

in svelte components:

```html
<style lang="scss">
  @import 'mould/css/essence';
  /* your code here */
</style>
```

### components

```js
import 'mould/lib/MButton.svelte'
```

## License

MIT
