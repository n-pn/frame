import * as sapper from '@sapper/app'

import '@nipin/molds/scss/generic.scss'
import '@nipin/molds/scss/premade.scss'

window._goto = sapper.goto

sapper.start({
    target: document.querySelector('#sapper'),
})
