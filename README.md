# Melte

Personal collection of styles and view components for Svelte

## Install

### Install package globally and insert content to project

Install package globally:

```sh
yarn global add https://github.com/nipinium/melte
```

Copy melte styles, components and assets to current folder:

```sh
melte

```

Upgrade assets only (icon sprites, fonts...):

```sh
melte upgrade
```

### Install package locally and directly linking files

Install package locally:

```sh
yarn add -D https://github.com/nipinium/melte
```

Insert melte styles, components and assets to current folder:

```sh
yarn exec melte
```

Upgrade assets only (icons, fonts...):

```sh
yarn exec melte upgrade
```

Directly linking files:

for `svelte.config.js`:

```js
module.exports = require('melte/svelte.config)
```

for `src/client.js`:

```js
import 'melte/src/styles/global.scss'
```

for svelte components:

```html
<style lang="scss">
  @import 'melte/src/styles/helpers';
  /* your code here */
</style>
```

## License

MIT
