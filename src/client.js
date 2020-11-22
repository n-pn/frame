import * as sapper from '@sapper/app'
import '../css/globals.scss'

window._goto = sapper.goto

sapper.start({
  target: document.querySelector('#sapper'),
})
