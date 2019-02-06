// import prism from './libraries/prism'

import activeMenu from './modules/activeMenu'
import openMenu from './modules/menu'
import popup from './modules/popup'

import style from '../scss/styles.scss'
import pug from '../pug/pages/index.pug'

// activeMenu('menuId')
// openMenu('navId', 'navId-toggle')


// Ejecutar el modulo popup, require los parametros: overlay, popup, btnOpen, btnClose
popup('overlay', 'popup', 'btn-open-popup', 'btn-close-popup')