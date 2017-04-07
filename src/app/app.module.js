import angular from 'angular'

import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngMaterial from 'angular-material'
import ngMessages from 'angular-messages'
import uiRouter from 'angular-ui-router'

import { tweet } from 'components/tweet'

import { createUser } from 'components/createuser'
import { buttonservice } from 'services/buttonservice'

import { tweetDumb } from 'components/tweet-dumb'
import { feed } from 'components/feed'
import { dataservice } from 'services/dataservice'

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

    .component('createUser', createUser)
    .service('buttonservice', buttonservice)

    .component('tweetDumb', tweetDumb)
    .component('feed', feed)
    .service('dataservice', dataservice)

    .config(config)
    .config(routes)
    .run(run)
    .name
