import * as sapper from '@sapper/app'

import '@nipin/melte/stylesheets/global.scss'

window._goto = sapper.goto

sapper.start({
    target: document.querySelector('#sapper'),
})
