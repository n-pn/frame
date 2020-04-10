# Mould

Personal collection of stylesheets and components for Svelte projects

## Install

```sh
yarn add -D @nipin/mould
```

## Usage

### Stylesheets

in `src/client.js`:

```js
import '@nipin/mould/css/premade.scss'
```

in svelte components:

```html
<style lang="scss">
  @import '@nipin/mould/css/essence';
  /* your code here */
</style>
```

### components

```js
import '@nipin/mould/lib/MButton.svelte'
```

## License

MIT
