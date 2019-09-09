# Melte

Personal collection of styles and view components for Svelte

## Install

### Install package globally and insert content to project

_install package globally_

```sh
yarn global add https://github.com/nipinium/melte
```

_copy melte styles, components and assets to current folder_

```sh
melte

```

_upgrade assets only (icons)_

```sh
melte upgrade
```

### Install package locally and directly linking files

_install package locally_

```sh
yarn add -D https://github.com/nipinium/melte
```

_insert melte styles, components and assets to current folder_

```sh
yarn exec melte
```

_upgrade assets only (icons)_

```sh
yarn exec melte upgrade
```

_directly linking files_

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
  @import 'melte/src/styles/common';
</style>
```
