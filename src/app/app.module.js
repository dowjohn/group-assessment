import angular from 'angular'

import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngMaterial from 'angular-material'
import ngMessages from 'angular-messages'
import uiRouter from 'angular-ui-router'

import { tweet } from 'components/tweet'

import { baseApp } from './app.component'
import { config } from './app.config'
import { routes } from './app.routes'
import { run } from './app.run'

export default
  angular
    .module('base.app', [
      ngAnimate,
      ngAria,
      ngMaterial,
      ngMessages,
      uiRouter
    ])
    .component('baseApp', baseApp)
    .component('tweet', tweet)
    // .component('clkLabel', clkLabel)
    .config(config)
    .config(routes)
    .run(run)
    .name
